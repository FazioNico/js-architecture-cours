export class Timer {
  constructor(htmlElement) {
    this.root = htmlElement;
    if (!htmlElement) {
      return alert('pas de selecteur pour instancier le timer')
    }
    this.run();
  }

  run() {
    setInterval(() => {
      const h = new Date().getHours();
      switch (true) {
          case h < 10:
              this.root.innerHTML = `Bon petit-déj!! Il est ${new Date().toLocaleTimeString()}`
              break;
          case h < 17:
              this.root.innerHTML = `Bonjour il est ${new Date().toLocaleTimeString()}`
              break;
      
          case h > 17:
              this.root.innerHTML = `Bonsoir il est ${new Date().toLocaleTimeString()}`
              break;
          default:
              break;
      }
    }, 100)    
  }
}