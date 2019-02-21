export class BackgroundRandom {
  constructor() {
    this.apiKey = 'f0e9207feb394989d135e7c759d6f93372319ce326e617244b3b9a27a526f884';
    this.apiUrl = 'https://api.unsplash.com/photos/random?client_id=' + this.apiKey;
  }

  run() {
    return this.requestAPI()
    .then(result => {
      const {urls: {
        regular: imgUrl = null
      } = {}} = result;
      return this.listenImageLoad(imgUrl);
    })
    .then(imgUrl => {
      // display image in background
      this.displayInBackground(imgUrl)
    })
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