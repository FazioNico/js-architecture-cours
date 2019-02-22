import { MyApp } from "./app/app";
import { Router2 } from "./app/providers/router2/router2";

new MyApp(
  document.querySelector('my-app'),
  Router2
).bootstrap();