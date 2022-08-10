# FE monorepo

[![Netlify Status](https://api.netlify.com/api/v1/badges/f1e7fff1-c7c9-4fb2-a243-057c565484bd/deploy-status)](https://app.netlify.com/sites/fe-monorepo/deploys)

![abstract artwork for series](./docs/how-do-i-build-a-component-library.png)

**FE monorepo is a component library build to showcase how you can set up a monorepo architecture for your next component library.**

This repository is build up by multiple steps translated in the following articles on the [iO TechHub](https://techhub.iodigital.com) which are part of the series [How do I build a Component Library?](https://techhub.iodigital.com/series/how-do-i-build-a-component-library):

## [How do I set up a monorepo, SemVer strategy and private package registry?](https://techhub.iodigital.com/articles/how-do-i-build-a-component-library/monorepo-semver-package-registry)

![abstract artwork for monorepo](./docs/monorepo-semver-package-registry.png)

- **Yarn Workspaces** - used to help with dependency management
- **Changeset** - used to help with SemVer
- **GitHub package registry** - used to publish versioned packages to be installed through NPM

## [How do I set up a front-end framework & showcase it with Storybook?](https://techhub.iodigital.com/articles/how-do-i-build-a-component-library/front-end-framework-storybook)

![abstract artwork for fe framework and storybook](./docs/front-end-framework-storybook.png)

- **Lit Element** - used as the front-end framework of choice
- **Storybook** - used to document components

## [How do I set up linting, unit, snapshot and visual regression testing?](https://techhub.iodigital.com/articles/how-do-i-build-a-component-library/linting-testing)

![abstract artwork for unit, snapshot and visual regression](./docs/linting-testing.png)

- **ESLint** - used as linter for TS and JS files
- **Stylelint** - used as linter for CSS files
- **Prettier** - used as formatter for all files
- **Import sorts** - used to sort and group import statements
- **Manypkg** - used tokeep dependencies in sync and sorted
- **Jest** - used as test runner
- **Husky** - used as pre-commit hook to kick off linting, testing and formatting
- **lint-staged** - used to only lint staged files
- **commitizen** - used as way to enforce a commit style
- **Storyshots** - used for snapshot testing
- **Imageshots** - used for visual regression testing

## [How do I setup CI/CD & hosting?](https://techhub.iodigital.com/articles/how-do-i-build-a-component-library/ci-cd-hosting)

![abstract artwork for ci/cd and hosting](./docs/ci-cd-hosting.png)

- **GitHub actions** - used for CI/CD
- **Netlify** - used to host Storybook build
