
export class Favoris {

  constructor(htmlElement, db, auth) {
    this.root = htmlElement;
    this.auth = auth;
    this.user = this.auth.currentUser;
    this.database = {
      links: db.ref('links').child(this.user.uid)
    };
    this.links = [];
    this.buildTemplate();
    this.loadEventsUI();
    this.loadEventsDB();
  }

  buildTemplate() {
    this.root.innerHTML = `
      <div id="user">
        ${this.user.email} <button id="logout">logout</logout>
      </div>
      <div id="btnList"></div>
      <div id="btnForm">
        <form>
          ${
            (this.links.length > 0)
            ? `${this.links.map(l => `
            <div>
              <input type="text"> <input type="url"> 
            </div>
            `).join('')}`
            : `
            <div>
              <input type="text"> <input type="url"> 
            </div>
              `
          }
          <button type="submit">Save</button>
        </form>
        <button id="add">add</button>
      </div>
    `;
  }

  loadEventsUI() {
    // listenerEvent sur le formulaire
    this.root.querySelector('form').addEventListener('submit', e => {
      this.saveLinks(e);
    })
    this.root.querySelector('#logout').addEventListener('click', e => {
      this.auth.signOut();
    })
    // listener pour les btn links
    this.root.querySelector('#btnList').addEventListener('click', e => {
      if (e.target.nodeName !== 'BUTTON'){
        return;
      }
      window.open(e.target.getAttribute('data-url'));
    })
    this.root.querySelector('#add').addEventListener('click', e => {
      this.root.querySelector('form button').insertAdjacentHTML('beforebegin', `
      <div>
        <input type="text"> <input type="url"> 
      </div>
      `)
    })
  }

  saveLinks(e) {
    // stoper le reload de la page
    e.preventDefault();
    const dataToSave = {}
    const divs = e.target.querySelectorAll('div');
    [...divs].map((div,i) => {
      const inputs = div.querySelectorAll('input');
      dataToSave[i] = {};
      [...inputs].map(input => {
        dataToSave[i][input.type] = input.value
      });
    })
    console.log( dataToSave);
    this.database.links.set(dataToSave);
  }

  loadEventsDB() {
    this.database.links.on('child_added', (snap)=> {
      console.log('snap', snap.val());
      this.links = [...this.links, snap];
      this.render();
    })
  }

  render() {
    this.buildTemplate();
    this.loadEventsUI();
    // pour tout les element de la liste....
    this.links.map((link, index) => {
      // je cherche la div qui correspond à l'index de mon `link`
      const div = this.root.querySelectorAll('#btnForm div')[index];
      console.log(div);
      if (!div) return;
      // je cherche mtn tt les inputs de ma div
      [...div.querySelectorAll('input')].map(input => {
        // je remplis les valeur en fonction du type de l'input
        if (input.type === 'text') {
          input.value = link.val().text
        }
        // je remplis les valeur en fonction du type de l'input
        if (input.type === 'url') {
          input.value = link.val().url
        }
      })    
    })
    this.root.querySelector('#btnList').innerHTML = `
      ${this.links.map(link => `<button data-url="${link.val().url}">${link.val().text}</button>`).join('')}
    `;
  }
}




