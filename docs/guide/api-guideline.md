# API Guidelines

::: warning
This document is currently in a "Work in Progress" stage.
:::

## Namespaces

Coming soon...

## JavaScript

The API should have a JavaScript’ish feel. While that is harder to put in rules, it means we use namespaces, properties, functions, and globals instead of object-factories and services. Also take inspiration from popular existing JS API, for instance `window.createStatusBarItem` is like `document.createElement`, the members of `DiagnosticsCollection` are similar to ES6 maps etc.

## Global Events

Coming soon...

## Private Events

Coming soon...

## Event naming

Events follow the `on[Did|Will]VerbSubject` patterns, like `onDidLoginUser` or `onWillLoginUser`. It doesn’t hurt to use explicit names.
