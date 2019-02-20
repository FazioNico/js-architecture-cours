export class Say {
    constructor(htmlElement) {
      this.root = htmlElement;
      if (!htmlElement) {
        return alert('pas de selecteur pour instancier le timer')
      }
      this.run();
    }
  
    run() {
      this.displayText();
      setInterval(() => {
        this.displayText();
      }, 10000)    
    }

    displayText() {
      const h = new Date().getHours();
      switch (true) {
          case h < 10:
              this.root.innerHTML = `Bon petit-déj`
              break;
          case h < 17:
              this.root.innerHTML = `Bonjour`
              break;
      
          case h > 17:
              this.root.innerHTML = `Bonsoir`
              break;
          default:
              break;
      }
    }
  }