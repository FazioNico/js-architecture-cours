export class Timer {
  constructor(htmlElement) {
    this.root = htmlElement;
    if (!htmlElement) {
      return alert('pas de selecteur pour instancier le timer')
    }
    this.run();
  }

  run() {
    this.root.innerHTML = `${new Date().toLocaleTimeString()}`;
    this.interval();
  }

  interval() {
    setInterval(() => {
      this.root.innerHTML = `${new Date().toLocaleTimeString()}`
    }, 1000)    
  }
}