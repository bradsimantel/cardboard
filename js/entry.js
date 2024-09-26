import { html, render } from "./lib/preact.js";
import App from "./app.js";

render(html`<${App} />`, document.body);
