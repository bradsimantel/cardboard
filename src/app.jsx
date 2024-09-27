import { h, render } from "preact";
import { Router } from "preact-router";

import Everything from "./components/everything";
import Board from "./components/board";

export default function App() {
  return (
    <Router>
      <Everything path="/everything" />
      <Board path="/boards/:boardId" />
    </Router>
  );
}

render(<App />, document.body);
