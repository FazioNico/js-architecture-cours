export class HeaderComponent {
  constructor (htmlElement, router) {
    this.root = htmlElement;
    this.router = router;
    this.render();
    this.loadEventsUI();
  }

  loadEventsUI() {
    // add listener
    this.root.querySelector('ul').addEventListener('click', e => {
      e.preventDefault();
      if (e.target.nodeName !== 'A') return;
      this.navTo(e.target.pathname)
    })
  }

  navTo(url) {
    // console.log(url);
    this.router.navigate(url, {test: 'hello test...'});
  }

  render() {
    this.root.innerHTML = `
    <header>
      <nav>
        <ul>
          <li><a href="./page1">page1</li>
          <li><a href="./page2">page2</li>
          <li><a href="./page3">page3</li>
        </ul>
      </nav>
    </header>
    `;
  }
}

