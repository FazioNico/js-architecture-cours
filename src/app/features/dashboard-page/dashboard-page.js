import { Timer } from "../../components/timer/time-class";
import { Say } from "../../components/say/say";
import { Favoris } from "../../components/favoris/favoris";
import { Meteo } from "../../components/meteo/meteo";
import { BackgroundRandom } from "../../components/background/background";

// Class DasboardPage
export class DasboardPage {
  constructor(appBody, formValues, db, auth) {
    this.appBody = appBody;
    this.db = db;
    this.auth = auth;
    this.username = formValues.displayName || formValues.email.split('@')[0];
    this.initUI();
  }
  
  initUI() {
    // TODO: cacher le HTML pour l'afficher 
    // que quand l'app est ready

    // charger l'image de BG
    new BackgroundRandom().run()
    // ensuite inserer les HTML
    .then(() => {
      this.appBody.innerHTML = `
      <my-timer></my-timer>
      <my-say></my-say> ${this.username}
      <my-favoris></my-favoris>
      <my-meteo></my-meteo>
      `;
      // demarer les component
      new Timer(document.querySelector('my-timer'));
      new Say(document.querySelector('my-say'));
      new Favoris(document.querySelector('my-favoris'), this.db, this.auth);
      new Meteo(document.querySelector('my-meteo'));      
    })
    // faire un effet fade pour afficher le HTML
    .then(() => {
      console.log('Final step: fade effect...');
    })
    // prendre en charge les erreur
    .catch(err => console.log(err));
  }
}