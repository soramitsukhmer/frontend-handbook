# Switch from Volar to Vetur

This is the guide for you to switch back from **Volar** to **Vetur**.

## Disable Volar

To avoid conflict please disable `Volar` it you have it install.

1. In your project workspace, bring up the command palette with `Ctrl + Shift + P` (macOS: `Cmd + Shift + P`).
1. Type `volar` in the extension search box.
1. Click the little gear icon of "Volar", and select "Disable" or "Disable (Workspace)".
1. Reload the workspace.

![Vetur](/resources/screenshots/vscode-disable-volar.png)

## Enable Vetur

1. In your project workspace, bring up the command palette with `Ctrl + Shift + P` (macOS: `Cmd + Shift + P`).
1. Type `vetur` in the extension search box.
1. Click the little gear icon of "Vetur", and select "Enable" or "Enable (Workspace)".
1. Reload the workspace.

![Vetur](/resources/screenshots/vscode-enable-vetur.png)

## Uninstall `@vue/runtime-dom` - (Optional)

The Volar extension requires Vue 3 types from the `@vue/runtime-dom`. Vue 3 itself includes the `@vue/runtime-dom` package. For Vue 2 you will have to install it yourself. Since we are reverting back to use Vetur, you have to uninstall `@vue/runtime-dom` package.

```json
// Remove "@vue/runtime-dom" from package.json
{
  "devDependencies": {
    "@vue/runtime-dom": "latest"
  }
}
```