# Python

FOSSA support for Golang is in Alpha.

## Configuration

Project settings config is accessible and editable from the projects page (http://&lt;fossa-host&gt;/projects/&lt;project&gt;/settings/languages).

The `environment variables` used during project build is configurable via **Project Settings > Builds and Languages > General**.

## Dependencies

**General**

Dependencies are extracted without a version if a version locking file is not provided. Fossa will attempt to choose an existing version, otherwise fetch the latest commit on the master branch.

**Revision Locking**

If a `Godeps.json` or `vendor.json` file is provided for revision locking, Fossa will try to use this info to download the correct dependencies.

### Version Control Systems

Golang projects refer to dependencies in Version Control Systems (VCS). The following VCSs are supported by Golang:

- hg (UNSUPPORTED)
- git (SUPPORTED)
- svn (UNSUPPORTED)
- bzr (UNSUPPORTED)

Fossa currently only supports the **git** VCS.
