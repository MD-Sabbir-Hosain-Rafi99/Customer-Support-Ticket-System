1. What is JSX, and why is it used?
Ans:  JSX is JavaScript XML, this is a syntax extension for JavaScript used in React, And JSX is used in React to make it easier to write and visualize the UI by combining HTML like syntax with JavaScript logic.

2. What is the difference between State and Props?
Ans : State is data that is managed and can be changed within a component. And props are read-only values passed from a parent component to a child component.

3. What is the useState hook, and how does it work?
Ans : The useState hook lets React components create and manage local state by returning a state variable and a function to update it.

4. How can you share state between components in React?
Ans : I can share state between components in React by lifting the state up to their common parent and passing it down via props.

5. How is event handling done in React?
Ans : Event handling in React is done by using camelcase event names and passing event handler functions inside JSX attributes.





























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
