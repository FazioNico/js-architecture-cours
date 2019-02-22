
import { Page1, Page2 } from '../../features';

export class AppRouter {
  constructor(rootApp = null) {
    if (!rootApp) return alert('Invalid htmlElement');
    this.rootApp = rootApp;
    this.rootComponent = { path: '/page1', component: Page1 };
    this.routes = [
      this.rootComponent,
      {
        path: '/page2',
        component: Page2
      }
    ];
  }

  getRoot() {
    return this.rootComponent.component
  }

  navigate(url, dependencies = null) {
    const route = this.routes.find(r => r.path === url);
    if(!route) return alert('404: unexisting route')
    return new route.component(Object.assign(
      {},
      {
        root: this.rootApp,
        router: this
      },
      dependencies
    ));
  }

}