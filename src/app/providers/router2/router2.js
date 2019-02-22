/**
 * Doc for more: https://developer.mozilla.org/fr/docs/Web/Guide/DOM/Manipuler_historique_du_navigateur
 */

import { Page1, Page2 }  from '../../features'

export class Router2 {
  constructor(root) {
    this.root = root;

    this.appRoute = {
      path: '/page1',
      component: Page1
    },

    this.routes = [
      this.appRoute,
      {
        path: '/page2',
        component: Page2
      },
    ];
  }

  getEntryPoint() {
    return this.appRoute.component;
  }

  navigate(url, dependencies = {}) {
    // 1: check if url (path) exist in this.routes
    const myRoute = this.routes.find(r => r.path === url)
    if (!myRoute) return alert('404: not found')
    // 3: instencie hte route: new myroute.component({root: this.root})
    new myRoute.component({
      root: this.root,
      router: this,
      ...dependencies
    });
    // TODO: gestion de l'api History
  }
}