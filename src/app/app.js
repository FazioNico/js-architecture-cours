// class MyApp
export class MyApp {
  
  constructor(htmlElement, router) {
    if (!htmlElement) return alert('Invalid htmlElement');
    if (!router) return alert('Unexisting Router');
    this.root = htmlElement;
    this.router = router;
  }

  bootstrap() {
    const router = new this.router(this.root);
    const myComponent = router.getEntryPoint();
    if (!myComponent) return alert('Unexisting Entry Component')
    new myComponent({
      root: this.root,
      router
    });
  }
}