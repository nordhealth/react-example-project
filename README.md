# react-example-project

This repo is an example of using [React](https://reactjs.org/) / [Create React App (CRA)](https://github.com/facebook/create-react-app) along with [Nord Design System's](https://nordhealth.design/) [components](https://nordhealth.design/components/). Typescript is used, but this is not a necessity for using React and Nord together.

This repo can be forked as a starting point for new apps. However, you may wish to undertake the process yourself so that all dependencies are up to date, and you can choose which tools you would like to use. The commit history shows the steps taken to integrate React and Nord. Those steps are described next.

## Setting up a project from scratch

First initialize a new CRA project:

```sh
npx create-react-app [project-name]
```

Or if you would like to start with Typescript:

```sh
npx create-react-app [project-name] --template typescript
```

Follow any instructions printed in the terminal.

Next install Nord dependencies:

```sh
npm install @nordhealth/react @nordhealth/css --save
```

When complete, open your editor and navigate to `index.js` or `index.tsx`, and import the Nord CSS:

```jsx
// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@nordhealth/css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

This will ensure Nord styles are included in your app.

Now everything is ready! In a component file, you can start using Nord:

```jsx
import { useState } from "react";
import { Input, Button } from "@nordhealth/react";

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
      <Input label="Your name" value={name} onInput={handleNameChange} />
      <p>{name}</p>

      <Button variant="primary" onClick={increment}>
        Count: {count}
      </Button>
    </>
  );
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Can I use Nord in my own project?

Nord Design System is solely meant for building digital products and experiences for [Nordhealth](https://nordhealth.com/). Please see [LICENSE](LICENSE.md) for full license details.

## Getting support

If you experience any issues while getting started with any of Nord’s tools, please head over to the [Support page](https://nordhealth.design/help/) for more guidelines and help.

## Copyright

Copyright © 2022 Nordhealth Ltd.
