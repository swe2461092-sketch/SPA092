import { mountNavbar } from "./component/navbar.js";
import { initRouter } from "./router.js";
import { routes } from "./routes.js";

const navbarRoot = document.getElementById("navbar");
mountNavbar(navbarRoot);

initRouter(routes);
