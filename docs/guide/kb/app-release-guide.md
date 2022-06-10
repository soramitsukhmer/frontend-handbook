# Create Application Release

::: warning
This document is currently in a "Work in Progress" stage.
:::

## Release life cycle

This is the lifecycle of Frontend application:

```
Branch:       Tags:                   Env:

Development   -> [alpha/beta]         -> [Development]
Main          -> [Release Candidate]  -> [Stagging]
Release       -> [Stable]             -> [Production]
```

| Name | Description | Branch      | Docker Tag   | Release Env   |
| ---- | ----------- | ----------- | ------------ | ------------- |
| Name | Description | Development | [alpha/beta] | [Development] |


Read https://en.wikipedia.org/wiki/Software_release_life_cycle for more information.

## Checklist

### Update your local `refs`

> **Note:**
> The `tags` and `releases` must be create within `master/main`, `develop` or `release/*` branch.

Please make sure to switch to the correct working branch before creating release. You can run this following command to switch between branches:

```sh
# Switch to your desire branch
$ git switch <main,develop>
# or...
# Create a release branch
$ git switch -c release/*
```

Before we can start, please make sure that your local `refs` is up-to-date by running the following commands:

```sh
$ git fetch --all --prune
$ git pull
```

## Create version `tag`

> **Note:** > `tag` should be created locally, but in some case we can use GitHub Release to create both `releases` and `tags depend on project type.

> The created `tag` must follow [**Semantic Versioning**](https://semver.org/) standard.


::: details Stable version
Given a version number `MAJOR.MINOR.PATCH`, increment the:

1. `MAJOR` version when you make **incompatible API changes**,
1. `MINOR` version when you **add functionality** in a **backwards compatible** manner, and
1. `PATCH` version when you make backwards compatible **bug fixes**.
:::

::: details Pre-release version
A pre-release version MAY be denoted by appending a hyphen and a series of dot separated identifiers immediately following the patch version. Identifiers MUST comprise only ASCII alphanumerics and hyphens [0-9A-Za-z-].

Identifiers MUST NOT be empty. Numeric identifiers MUST NOT include leading zeroes. Pre-release versions have a lower precedence than the associated normal version. A pre-release version indicates that the version is unstable and might not satisfy the intended compatibility requirements as denoted by its associated normal version. Examples: `1.0.0-alpha`, `1.0.0-alpha.1`, `1.0.0-0.3.7`, `1.0.0-x.7.z.92`, `1.0.0-x-y-z.–`
:::

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
