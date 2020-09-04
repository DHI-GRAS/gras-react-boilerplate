<p align="center">
  <a href="https://www.dhi-gras.com/" rel="noopener" target="_blank"><img width="150" src="./src/assets/DHI_GRAS_Logo_Pos_RGB.png" alt="Dhi-GRAS logo"></a></p>
</p>

<h1 align="center">gras-react-boilerplate</h1>
<div align="center">

![release](https://github.com/DHI-GRAS/gras-react-boilerplate/workflows/npm%20publish/badge.svg)
[![Latest](https://img.shields.io/npm/v/@dhi-gras/gras-react-boilerplate/latest)](https://www.npmjs.com/package/@dhi-gras/gras-react-boilerplate)

</div>

GRAS mobile-friendly boilerplate for map-centric apps. The npm package can be found [here](https://www.npmjs.com/package/@dhi-gras/react-components)

This package is created using [TypeScript](https://www.typescriptlang.org/), [MaterialUI](https://material-ui.com/), [React-map-gl](https://visgl.github.io/react-map-gl/) and [@dhi-gras/react-components](https://storybookpro.z6.web.core.windows.net)

# Showcase

Showcase of our components and libraries on the [GRAS Storybook](https://storybookpro.z6.web.core.windows.net/)

# Quick overview

You can simply import the package using `npx`.

```
// with npx
npx gras-react-boilerplate my-app
cd my-app
npm start
```

If you've previously installed gras-react-boilerplate globally via `npm install -g @dhi-gras/gras-react-boilerplate`, we recommend you to uninstall the package using `npm uninstall -g @dhi-gras/gras-react-boilerplate` or `yarn global remove @dhi-gras/gras-react-boilerplate` to ensure that `npx` always uses the latest version.

# Creating an App

To create a new app, you may choose one of the following methods:

### NPX

```
// with npx
npx gras-react-boilerplate my-app
```

### NPM

```
npm install @dhi-gras/gras-react-boilerplate -g

// and then use it as
gras-react-boilerplate my-app
```

### Yarn

```
yarn global add @dhi-gras/gras-react-boilerplate

// and use it as
gras-react-boilerplate my-app
```

It will create a directory called "my-app" inside the current folder.
Inside the directory, it will generate the initial project structure and install the dependencies.

```
cd my-app
```

# Project structure

```
my-app
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
├── .prettierrc.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── images
│       └── DHI_Logo_Blue.png
└── src
    ├── App.tsx
    ├── index.tsx
    ├── react-app-env.d.ts
    ├── assets
    │   └── DHI_Logo_Blue.png
    ├── styles
    │   ├── global.js
    │   ├── mixins.js
    │   └── theme.js
    ├── utils
    │   └── index.ts
    ├── components
    │   └── Navigation
    │       ├── Navigation.tsx
    │       └── index.ts
    └── containers
        ├── Map
        │   ├── Map.tsx
        │   ├── index.ts
        │   └── ZoomControl
        │       ├── index.ts
        │       └── ZoomControl.tsx
        ├── Sidebar
        │   ├── Sidebar.tsx
        │   ├── index.ts
        │   ├── Description
        │   │   ├── Description.tsx
        │   │   └── index.ts
        │   └── SidebarAccordion
        │       ├── SidebarAccordion.tsx
        │       └── index.ts
        └── SidebarControl
            ├── SidebarControl.tsx
            └── index.ts
```

# Getting started

Inside the newly created project, you can run:

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
