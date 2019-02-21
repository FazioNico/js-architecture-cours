import { Timer } from '../../components/timer/time-class'
import { Say } from '../../components/say/say'
import { Favoris } from '../../components/favoris/favoris'
import { Meteo } from '../../components/meteo/meteo'
import { BackgroundRandom } from '../../components/background/background'
import { SearchGoogle } from '../../components/search/search'

// Class DasboardPage
export class DasboardPage {
  constructor (appBody, formValues, db, auth) {
    this.appBody = appBody
    this.db = db
    this.auth = auth
    this.username = formValues.displayName || formValues.email.split('@')[0]
    this.initUI()
  }

  initUI () {
    // TODO: cacher le HTML pour l'afficher
    // que quand l'app est ready
    this.appBody.style.opacity = 0
    this.appBody.style.transition = 'opacity 0.2s ease'
    // charger l'image de BG
    new BackgroundRandom(this.appBody).run()
    // ensuite inserer les HTML
      .then(() => {
        this.appBody.innerHTML = `
      <section>
        <my-search></my-search>
        <div class="shadow">
          <my-timer></my-timer>
          <my-say></my-say> ${this.username}
        </div>
        <my-favoris></my-favoris>
        <my-meteo></my-meteo>
      </section>
      `
        // demarer les component
        new SearchGoogle(document.querySelector('my-search'))
        new Timer(document.querySelector('my-timer'))
        new Say(document.querySelector('my-say'))
        new Favoris(document.querySelector('my-favoris'), this.db, this.auth)
        new Meteo(document.querySelector('my-meteo'))
      })
    // faire un effet fade pour afficher le HTML
      .then(() => {
        console.log('Final step: fade effect...')
        this.appBody.style.opacity = 1
      })
    // prendre en charge les erreur
      .catch(err => console.log(err))
  }
}
