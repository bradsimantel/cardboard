import { h, render } from "https://esm.sh/preact@10.15.1";
import htm from "https://esm.sh/htm";
// import { DndContext } from "https://esm.sh/@dnd-kit/core@6.0.8?alias=react:preact/compat,react-dom:preact/compat,@types/react:preact/compat&external=preact/compat&deps=preact@10.15.1";
import App from "./app.js";

const html = htm.bind(h);
render(html`<${App} />`, document.body);
