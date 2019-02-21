export class BackgroundRandom {
  constructor() {
    this.apiKey = 'f0e9207feb394989d135e7c759d6f93372319ce326e617244b3b9a27a526f884';
    this.apiUrl = 'https://api.unsplash.com/photos/random?client_id=' + this.apiKey;
  }

  run() {
    // faire la requête http pour recupérer l'addres de l'image
    return this.requestAPI()
    // créer un listener de chargement d'image
    .then(result => {
      const {urls: {
        regular: imgUrl = null
      } = {}} = result;
      return this.listenImageLoad(imgUrl);
    })
    // addicher l'image dans le BG
    .then(imgUrl => {
      // display image in background
      this.displayInBackground(imgUrl)
    })
    .catch(err => console.log(err))
  }

  requestAPI() {
    return fetch(this.apiUrl).then(res => res.json())
  }

  listenImageLoad(imgUrl) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.src = imgUrl;
      // listen loading img.src to display $pageContainer
      img.addEventListener('load', event => {
        console.log('Background img loaded!')
        resolve(imgUrl)
      });         
    })
  }

  displayInBackground(imgUrl) {
    document.body.style.background = `url(${imgUrl}) center center no-repeat`;
    document.body.style.color = `#fff`;
    document.body.style.backgroundSize = `cover`;
  }
}