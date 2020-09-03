<p align="center">
  <a href="https://www.dhi-gras.com/" rel="noopener" target="_blank"><img width="150" src="./src/assets/DHI_GRAS_Logo_Pos_RGB.png" alt="Dhi-GRAS logo"></a></p>
</p>

<h1 align="center">gras-react-boilerplate</h1>
<div align="center">

[![Build](https://travis-ci.com/DHI-GRAS/react-components.svg?branch=master)](https://travis-ci.com/DHI-GRAS/react-components)
[![Latest](https://img.shields.io/npm/v/@dhi-gras/react-components/latest)](https://www.npmjs.com/package/@dhi-gras/react-components)

</div>
GRAS mobile-friendly boilerplate for map-centric apps. The npm package can be found [here](https://www.npmjs.com/package/@dhi-gras/react-components)https://www.npmjs.com/package/gras-react-boilerplate

This package is created using [TypeScript](https://www.typescriptlang.org/), [MaterialUI](https://material-ui.com/), [React-map-gl](https://visgl.github.io/react-map-gl/) and [@dhi-gras/react-components](https://storybookpro.z6.web.core.windows.net)

# Showcase

Showcase of our components and libraries on the [GRAS Storybook](https://storybookpro.z6.web.core.windows.net/)

# Usage

You can simply import the package using `npx`.

```
// with npx
npx gras-react-boilerplate my-app
```

It will create a directory called "my-app" inside the current folder.
Inside the directory, it will generate the initial project structure and install the dependencies.

# Folder structure

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
