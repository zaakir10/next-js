"use client";

import { useState } from "react";

export default function GreetingPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div>
      <h1>Greeting Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <button type="submit">Greet</button>
      </form>

      {fullName && <h2>Hello, {fullName}!</h2>}
    </div>
  );
}