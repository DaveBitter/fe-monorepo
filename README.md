# FE monorepo

[![Netlify Status](https://api.netlify.com/api/v1/badges/f1e7fff1-c7c9-4fb2-a243-057c565484bd/deploy-status)](https://app.netlify.com/sites/fe-monorepo/deploys)

![abstract artwork for series](./docs/series.png)

**FE monorepo is a component library build to showcase how you can set up a monorepo architecture for your next component library.**

This repository is build up by multiple steps translated in the following articles on the [iO TechHub](https://techhub.iodigital.com):

## [How do I set up a Monorepo, SemVer strategy and Private package registry?](https://techhub.iodigital.com/articles/how-do-i-build-a-component-library/monorepo-semver-package-registry)

![abstract artwork for monorepo](./docs/monorepo.png)

- **Yarn Workspaces** - used to help with dependency management
- **Changeset** - used to help with SemVer
- **GitHub package registry** - used to publish versioned packages to be installed through NPM

## [How do I set up a front-end framework & showcase it with Storybook?](https://techhub.iodigital.com/articles/how-do-i-build-a-component-library/fe-framework-storybook)

![abstract artwork for fe framework and storybook](./docs/fe-framework-storybook.png)

- **Lit Element** - used as the front-end framework of choice
- **Storybook** - used to document components

## [How do I set up unit, snapshot and visual regression testing?](https://techhub.iodigital.com/articles/how-do-i-build-a-component-library/unit-snapshot-visual-regression-testing)

![abstract artwork for unit, snapshot and visual regression](./docs/unit-snapshot-visual-regression-test.png)

- **Jest** - used as test runner
- **Storyshots** - used for snapshot testing
- **Chromatic** - used for visual regression testing

## [How do is setup CI/CD & hosting](https://techhub.iodigital.com/articles/how-do-i-build-a-component-library/ci-cd-hosting)

![abstract artwork for ci/cd and hosting](./docs/ci-cd-hosting.png)

- **GitHub actions** - used for CI/CD
- **Netlify** - used to host Storybook build
