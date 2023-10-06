# eslint-config

[shareable configuration](https://eslint.org/docs/developer-guide/shareable-configs#shareable-configs)
for [ESLint](https://eslint.org)

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]
![SLSA Level 2][slsa-badge]

<!--status-badges end -->

## Table of Contents

* [Philosophy](#philosophy)
* [Usage](#usage)
  * [Extending under your own scope](#extending-under-your-own-scope)
    * [Installation](#installation)
    * [Extend from the file exported as `main` in your config package](#extend-from-the-file-exported-as-main-in-your-config-package)
    * [Example configs that extend this one](#example-configs-that-extend-this-one)
  * [For projects in the `form8ion` organization](#for-projects-in-the-form8ion-organization)
    * [Installation](#installation-1)
    * [Add to the project config](#add-to-the-project-config)
* [Contributing](#contributing)
  * [Dependencies](#dependencies)
  * [Verification](#verification)
* [Related Projects](#related-projects)

## Philosophy

Lint rules can be controversial, but I believe they should be extensive and
strict. I think that consistency is more valuable in a codebase than personal
preference, especially when those preferences differ between team members and
even individual members at different times.

Because of this, the [Airbnb base config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
is extended as the as the base ruleset of this config. It is not extended
because of agreeing with all of the rules, but because it defines an extensive
ruleset in a strict way. Rules are overridden from there, both to make some
more strict and to make some enforce a different convention.

## Usage

<!--consumer-badges start -->

[![npm][npm-badge]][npm-link]
[![MIT license][license-badge]][license-link]
![node][node-badge]

<!--consumer-badges end -->

### Extending under your own scope

Extending this config allows you to use this config as a base for your own
config, enabling you to define further rules or override some defined in this
config.

It is recommended to create your own config early rather than using this one
directly even if you do not define any overrides at first. That way, your
projects will already depend on your custom config when you decide to define
custom rules later.

#### Installation

```sh
$ npm install @form8ion/eslint-config --save-prod
```

#### Extend from the file exported as `main` in your config package

Note that you can use the [shorthand version](https://eslint.org/docs/developer-guide/shareable-configs#npm-scoped-modules)
of the config name

```js
module.exports = {extends: '@form8ion'};
```

#### Example configs that extend this one

* [@travi/eslint-config](https://npm.im/@travi/eslint-config)
* [@dsmjs/eslint-config](https://npm.im/@dsmjs/eslint-config)

### For projects in the `form8ion` organization

#### Installation

```sh
$ npm install @form8ion/eslint-config --save-dev
```

#### Add to the project config

Such as in an `.eslintrc.yml`

```yml
extends: '@form8ion'
```

## Contributing

<!--contribution-badges start -->

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![PRs Welcome][PRs-badge]][PRs-link]
[![Renovate][renovate-badge]][renovate-link]

<!--contribution-badges end -->

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

## Related Projects

* [eslint-config-react](https://github.com/form8ion/eslint-config-react)
* [eslint-config-hal](https://github.com/form8ion/eslint-config-hal)
* [eslint-config-mocha](https://github.com/form8ion/eslint-config-mocha)
* [eslint-config-cucumber](https://github.com/form8ion/eslint-config-cucumber)
* [eslint-config-cypress](https://github.com/form8ion/eslint-config-cypress)

[npm-link]: https://www.npmjs.com/package/@form8ion/eslint-config

[npm-badge]: https://img.shields.io/npm/v/@form8ion/eslint-config?logo=npm

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/eslint-config.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[github-actions-ci-link]: https://github.com/form8ion/eslint-config/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://img.shields.io/github/actions/workflow/status/form8ion/eslint-config/node-ci.yml.svg?branch=master&logo=github

[node-badge]: https://img.shields.io/node/v/@form8ion/eslint-config?logo=node.js

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot

[slsa-badge]: https://slsa.dev/images/gh-badge-level2.svg
