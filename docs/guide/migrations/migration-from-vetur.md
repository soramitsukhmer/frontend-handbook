# Migration from Vetur

To enable Volar support for Vue 2.

## Install `@vue/runtime-dom`

This extension requires Vue 3 types from the `@vue/runtime-dom`. Vue 3 itself includes the `@vue/runtime-dom` package. For Vue 2 you will have to install it yourself:

```json
// package.json
{
  "devDependencies": {
    "@vue/runtime-dom": "latest"
  }
}
```

## Configuring `jsconfig.json`

You also need to update your `jsconfig.json` as example below. You need to set the `target` option to support the Vue 2 templates.

<<< @/example/jsconfig.json

## Disable Vetur

> This project have been switched to use the new `Vue Language Features (Volar)`.  
> You may need to disable `Vetur` if you have it installed.

To avoid conflict please disable `Vetur` it you have it install.

1. In your project workspace, bring up the command palette with `Ctrl + Shift + P` (macOS: `Cmd + Shift + P`).
1. Type `vetur` in the extension search box.
1. Click the little gear icon of "Vetur", and select "Disable (Workspace)".
1. Reload the workspace.

![Vetur](/resources/vscode-disable-vetur.png)
