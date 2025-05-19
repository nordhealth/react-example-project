# react-example-project

This repo is an example of using [React](https://reactjs.org/) with [Vite](https://vite.dev/) along with [Nord Design System's](https://nordhealth.design/) [components](https://nordhealth.design/components/). TypeScript is used, but this is not a necessity for using React and Nord together.

This repo can be forked as a starting point for new apps. However, you may wish to undertake the process yourself so that all dependencies are up to date, and you can choose which tools you would like to use. The steps to integrate React and Nord are described next.

## Setting up a project from scratch

First initialize a new Vite project with React:

```sh
npm create vite@latest [project-name] -- --template react
```

Or if you would like to start with TypeScript:

```sh
npm create vite@latest [project-name] -- --template react-ts
```

Follow any instructions printed in the terminal.

Next install Nord dependencies:

```sh
npm install @nordhealth/react @nordhealth/css --save
```

When complete, open your editor and navigate to `main.jsx` or `main.tsx`, and import the Nord dependencies:

```jsx
// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import '@nordhealth/css';
import '@nordhealth/components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

This will ensure Nord styles are included in your app, and register all Web Components ready for use.

To get types and IntelliSense for Nord components in JSX, add the following to your `tsconfig.json` in a TypeScript project, or `jsconfig.json` in a JavaScript project:

```json
{
  "compilerOptions": {
    "types": ["@nordhealth/components/lib/react.d.ts"]
  }
}
```

Now everything is ready! In a component file, you can start using Nord:

```jsx
import { useState } from "react";

function Example() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <nord-input label="Your name" value={name} onInput={handleNameChange}></nord-input>
      <p>{name}</p>

      <nord-button variant="primary" onClick={increment}>
        Count: {count}
      </nord-button>
    </>
  );
}

export default Example
```

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

Clone this repo, then:

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Can I use Nord in my own project?

Nord Design System is solely meant for building digital products and experiences for [Nordhealth](https://nordhealth.com/). Please see [LICENSE](LICENSE.md) for full license details.

## Getting support

If you experience any issues while getting started with any of Nord’s tools, please head over to the [Support page](https://nordhealth.design/help/) for more guidelines and help.

## Copyright

Copyright © 2025 Nordhealth Ltd.
