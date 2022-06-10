# Coding Guidelines

::: warning
This document is currently in a "Work in Progress" stage.
:::

## Intro

These are Frontend coding guidelines

## Names

- Use PascalCase for `type` names
- Use PascalCase for `enum` values
- Use camelCase for `function` and `method` names
- Use camelCase for `property` names and `local variables`
- Use whole words in names when possible

## Types

- Do not export types or functions unless you need to share it across multiple components
- Do not introduce new types or values to the global namespace

## Comments

- Use JSDoc style comments for `functions`, `interfaces`, `enums`, and `classes`

## Strings

- Use "double quotes" for strings shown to the user that need to be externalized (localized)
- Use 'single quotes' otherwise
- All strings visible to the user need to be externalized
