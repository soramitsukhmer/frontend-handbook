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

## Disable Vetur

::: danger
To avoid conflict please disable `Vetur` it you have it install.
:::

1. In your project workspace, bring up the command palette with `Ctrl + Shift + P` (macOS: `Cmd + Shift + P`).
1. Type `vetur` in the extension search box.
1. Click the little gear icon of "Vetur", and select "Disable" or "Disable (Workspace)".
1. Reload the workspace.

![Vetur](/resources/screenshots/vscode-disable-vetur.png)


## Configuring `jsconfig.json`

::: warning
This only applicable if your are using Vue 2 with JavaScript.
:::

You also need to update your `jsconfig.json` as example below. You need to set the `target` option to support the Vue 2 templates.

<<< @/example/jsconfig.json

## Configuring Visual Studio Code

::: danger
This settings required "Takeover Mode" to be enable.
:::

You also need to configure your Visual Studio Code to use `Volar` as default formatter for `JavaScript`, `TypeScript` and `Vue`.

1. In your project workspace, bring up the command palette with `Ctrl + Shift + P` (macOS: `Cmd + Shift + P`).
1. Type `settings` in the extension search box.
1. Click the `Preferences: Open Settings (JSON)`
1. Paste or Update the following settings.

<<< @/example/vscode-settings.json
