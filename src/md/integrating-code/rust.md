# Rust

Fossa supports Rust with Cargo.

FOSSA support for Cargo is in **Alpha**.

## Configuration

Fossa supports 1 form of configuration for Rust projects:

1. Project settings config

### Project Settings Config

Project settings config is accessible and editable from the projects page (http://&lt;fossa-host&gt;/projects/&lt;project&gt;/settings/languages).

The environment variables used during project build is configurable via **Project Settings > Builds and Languages > General**.

![General Language and Build Settings](/img/project-settings-language-settings-general.png)

## Cargo

The Cargo [build system](https://crates.io/) pulls in dependencies based on:

1. Name
2. [SemVer Version](http://semver.org/)

Fossa derives dependencies by building your project and seeing which dependencies are brought in. Other metadata is fetched directly from repositories.

Here's some of the metadata that's pulled in:

- Available versions
- Home page URL -- if any
- Repository URL -- if any
- Dependencies
  - Name
  - Version
  - Platform
  - Optional
  - Scopes [none, dev, build]

## Known Issues

- Optional dependencies are currently handled incorrectly
  - They are handled in a maner similar to Java optional deps, when they should be enabled/disabled based on features.
- Understanding default features aren't supported.
- Understanding missing features aren't supported.
- Path dependencies that go outside of your project are not handled.
- Only publicly hosted dependencies are supported.
- Cargo/Rust in general is fairly new and there hasn't been much around version management. it's possible that Fossa might not work against all versions of Rust/Cargo files.