import React from "react";
import { Header, Stack } from "@nordhealth/react";
import "./App.css";
import { Login } from "./Login";

function App() {
  return (
    <>
      <Header>
        <h1 className="n-typescale-l">Nord / React Example</h1>
      </Header>
      <main className="n-reset n-stack-horizontal">
        <Stack className="stack">
          <Login />
        </Stack>
      </main>
    </>
  );
}

export default App;
