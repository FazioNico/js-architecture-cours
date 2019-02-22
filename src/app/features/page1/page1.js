import { HeaderComponent } from "../../components/header/header";

export class Page1 {

  constructor (parameters) {
    if (!parameters.root) return alert('Invalid htmlElement');
    if (!parameters.router) return alert('Unexisting router in page 1');
    Object.assign(this, parameters)
    this.render();
  }

  render() {
    this.root.innerHTML = `
      <my-header></my-header>
      <main>
        <h1>App work!</h1>
      <main>
    `;
    // init others components
    new HeaderComponent(this.root.querySelector('my-header'), this.router)
  }
}

