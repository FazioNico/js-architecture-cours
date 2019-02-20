import { Timer } from "../../components/timer/time-class";
import { Say } from "../../components/say/say";
import { Favoris } from "../../components/favoris/favoris";

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
    this.appBody.innerHTML = `
    <my-timer></my-timer>
    <my-say></my-say> ${this.username}
    <my-favoris></my-favoris>
    `;
    new Timer(document.querySelector('my-timer'));
    new Say(document.querySelector('my-say'));
    new Favoris(document.querySelector('my-favoris'), this.db, this.auth);
  }
}