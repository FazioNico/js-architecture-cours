import { HeaderComponent } from "../../components/header/header";

export class Page2 {
  constructor (parameters) {
    if (!parameters.root) return alert('Invalid htmlElement');
    Object.assign(this, parameters)
    this.render();
  }

  render() {
    this.root.innerHTML = `      
      <my-header></my-header>
      <main>
        <h1>Page 2 work! ${this.test}</h1>
      <main>
    `;
    // init others components
    new HeaderComponent(this.root.querySelector('my-header'), this.router)

  }
}