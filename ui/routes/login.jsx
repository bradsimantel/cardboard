import { h } from "preact";
import { useState } from "preact/hooks";
import { route } from "preact-router";

import Input from "../components/input";
import Button from "../components/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const { token } = await res.json();
        localStorage.setItem("token", token);
        route("/boards/1");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="h-full flex items-center justify-center">
      <form className="bg-white border rounded-lg w-96" onSubmit={handleSubmit}>
        <div className="p-3 border-b text-center">Log In</div>
        <div className="p-3">
          <div className="mb-2">
            <label htmlFor="backgroundColor" className="block mb-1">
              Email
            </label>
            <Input
              value={email}
              setValue={setEmail}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="foregroundColor" className="block mb-1">
              Password
            </label>
            <Input
              value={password}
              setValue={setPassword}
              placeholder="Password1!"
              type="password"
            />
          </div>
        </div>
        <div className="p-3 border-t">
          <Button className="w-full" type="submit">
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
}
