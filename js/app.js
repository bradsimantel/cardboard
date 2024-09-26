import { html, render } from "./lib/preact-bundle.js";
import { Router } from "./lib/preact-router.js";
import Everything from "./components/everything.js";
import Board from "./components/board.js";

export default function App() {
  return html`
    <${Router}>
      <${Everything} path="/everything" />
      <${Board} path="/boards/:boardId" />
    <//>
  `;
}

render(html`<${App} />`, document.body);
