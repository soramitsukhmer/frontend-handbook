# Source Code Organization

::: warning
This document is currently in a "Work in Progress" stage.
:::

## Git

We prefer a rebase workflow and occasional feature branches. Most work happens directly on the `main` branch. For that reason, we recommend setting the `pull.rebase` setting to `merges`.

```sh
git config --global pull.rebase merges
```

## Commits

::: tip
This specification is inspired by and supersedes the [Conventional Commits](https://www.conventionalcommits.org/) specification.
:::

We have very precise rules over how our Git commit messages must be formatted. This format leads to easier to read commit history.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

1. **fix**: a commit of the type `fix` patches a bug in your codebase (this correlates with `PATCH` in Semantic Versioning).
1. **feat**: a commit of the type `feat` introduces a new feature to the codebase (this correlates with `MINOR` in Semantic Versioning).
1. **BREAKING CHANGE**: a commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change (correlating with `MAJOR` in Semantic Versioning). A `BREAKING CHANGE` can be part of commits of any type.
1. types other than `fix:` and `feat:` are allowed, for example [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (based on the the [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) recommends `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.
1. footers other than `BREAKING CHANGE: <description>` may be provided and follow a convention similar to [git trailer format](https://git-scm.com/docs/git-interpret-trailers).

Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in Semantic Versioning (unless they include a BREAKING CHANGE). A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., `feat(parser): add ability to parse arrays`.
