import { h } from "./preact.js";
import htm from "./htm.js";

export const html = htm.bind(h);
export * from "./preact.js";
export * from "./preact-hooks.js";
