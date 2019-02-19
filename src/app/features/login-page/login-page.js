import { pageSkeleton } from "./login-page.ui";
import { DasboardPage } from "../dashboard-page/dashboard-page";

// Class LoginPage
export class LoginPage {
  constructor(appBody) {
    this.appBody = appBody;
    this.initUI();
    this.loadEventsUI();
  }

  initUI() {
    const skeleton = this.getPageSkeleton();
    this.appBody.innerHTML = skeleton;
  }

  getPageSkeleton() {
    const data = {};
    return pageSkeleton(data);
  }

  loadEventsUI() {
    this.appBody.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();
      const inputs = [...this.appBody.querySelectorAll('input')];
      const email = inputs.find(i => i.type === 'email');
      const password = inputs.find(i => i.type === 'password');
      console.log('form value:', email.value, password.value);
      new DasboardPage(this.appBody, {username: email.value});
    })
  }
}

