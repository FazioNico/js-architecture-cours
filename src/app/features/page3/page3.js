export class Page3 {
  constructor (parameters) {
    if (!parameters.root) return alert('Invalid htmlElement');
    Object.assign(this, parameters);
    this.render();
  }

  render() {
    this.root.innerHTML = `Page 3 work`;
  }
}

