export class SearchGoogle {
  constructor(htmlElement) {
    this.root = htmlElement;
    this.buildTemplate();
    this.loadEventsUI();
  }

  buildTemplate() {
    this.root.innerHTML = `
    <nav class="row transparent z-depth-0 flow-text">
      <div class="nav-wrapper">
        <div class="input-field col s6 ">
          <input id="search" type="search" required>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
        <div id="download" class="col s6 right-align"></div>
      </div>
    </nav>
    `;
    // add focus to input
    this.root.querySelector('#search').focus();
  }

  loadEventsUI() {
    // handle keyPress Enter
    this.root.querySelector('#search').addEventListener('keypress', e => {
      if (e.keyCode !== 13) {
        return;
      }
      window.open('https://google.ch/search?q=' + e.target.value)
      // clean input value after go search
      event.target.value = '';
      // unfocus input element after go search
      event.target.blur();
    })
  }
}