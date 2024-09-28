import { useEffect } from "preact/hooks";
import { route } from "preact-router";

export default function Redirector() {
  useEffect(() => {
    route("/everything", true);
  }, []);

  return null;
}
