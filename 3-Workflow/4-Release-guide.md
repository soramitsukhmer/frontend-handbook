# Release Guide

## Lifecycle

This is the lifecycle of Frontend application:

```
Branch:       Tags:                   Env:

Development   -> [alpha/beta]         -> [Development]
Main          -> [Release Candidate]  -> [Stagging]
Release       -> [Stable]             -> [Production]
```

## Checklists

- [ ] Update your local `refs`
- [ ] Create version `tag`
- [ ] Push tag to GitHub
- [ ] Create a release on GitHub
  - [ ] Wait for `Unit test and Lint` workflow to pass
  - [ ] Wait for `Build Docker Image` workflow to finished
- [ ] Deploy the application (manully or done automatically via GitHub Actions)

## Update your local `refs`

> **Note:**
>
> The `tags` and `releases` must be create within `master/main`, `develop` or `release/*` branch.

```sh
# Switch to your desire branch
git switch <main,develop>
# or...
# Create a release branch
git switch -c release/*
```

Before we can start, please make sure that your `local` git is up-to-date!

```
git fetch --all --prune
git pull
```

## Create version `tag`

> **Note:**
>
> `tag` should be created locally, but in some case we can use GitHub Release to create both `releases` and `tags depend on project type.
>
> Created `tag` must follow [**Semantic Versioning**](https://semver.org/) scheme.

Given a version number `MAJOR.MINOR.PATCH`, increment the:

1. `MAJOR` version when you make **incompatible API changes**,
1. `MINOR` version when you **add functionality** in a **backwards compatible** manner, and
1. `PATCH` version when you make backwards compatible **bug fixes**.

Additional labels for pre-release and build metadata are available as extensions to the `MAJOR.MINOR.PATCH` format.

Read more about the [Semantic Versioning Specification](https://semver.org/#semantic-versioning-specification-semver).

You can run the following command to create `tag` using `npm` or `yarn`, this usually the recommended way for JavaScript project.

```sh
yarn version
```

**Options:**

```
--major                             auto-increment major version number
--minor                             auto-increment minor version number
--patch                             auto-increment patch version number
--premajor                          auto-increment premajor version number
--preminor                          auto-increment preminor version number
--prepatch                          auto-increment prepatch version number
--prerelease                        auto-increment prerelease version number
```

**Examples**

```sh
# Create a major release
yarn version --major

# Create a minor release
yarn version --minor

# Create a patch release
yarn version --patch

# Create a minor + patch release
yarn version --minor --patch
```

> Optional: Some project might have `bump:release` script in `package.json`. You can run `yarn bump:release` it the same as run `yarn version`

## Push tag to GitHub

Push the `commit` and `tag` to GitHub. And wait for **GitHub Action** job `Unit test and Lint` to finished.

```sh
git push --tag --verbose
```

## Create a release on GitHub

After the **GitHub Action** job for `Unit test and Lint` to finished. You can either create a new release or update drafted release changelogs (automatically generated using `release-drafter`).

> Note: `Release Drafter` might not be available in all projects.

- Wait for GitHub Actions to finish building Docker Image

## Deploy the application

> Note: Deploy the application (manully or done automatically via GitHub Actions).
