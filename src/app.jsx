import { h, render } from "preact";
import { Router } from "preact-router";

import Everything from "./routes/everything";
import Board from "./routes/board";
import Redirector from "./routes/redirector";

export default function App() {
  return (
    <Router>
      <Everything path="/everything" />
      <Board path="/boards/:boardId" />
      <Redirector default />
    </Router>
  );
}

render(<App />, document.body);
