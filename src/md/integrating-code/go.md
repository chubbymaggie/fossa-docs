# Golang (**Alpha**)

## Summary

FOSSA's Golang support replicates the behavior of `go get` to retrieve and analyze dependencies.

The Golang integration is currently in **Alpha** and under high-priority development.  Known limitations and implementation details are documented below.

## Configuration

Project settings config is accessible and editable from the projects page (http://&lt;fossa-host&gt;/projects/&lt;project&gt;/settings/languages).

The `environment variables` used during project build is configurable via **Project Settings > Builds and Languages > General**.

## Dependencies

FOSSA follows the behavior of `go build` and `go get` to discover and resolve dependencies to the most accurate versions.

### Discovery

FOSSA discovers dependencies by graphing the import statements traversed by a build of entry point modules, similar to `go build`. Currently, all build paths and entry points are concatenated to calculate the dependency requirements of a repository. Although FOSSA can distinguish between different modules or build targets in a repo, you must currently use a `.fossaconfig` file to ignore modules you want to exclude.

`go get` is capable of downloading dependencies from 4 types of Version Control Systems (VCS):

- git (SUPPORTED)
- hg (UNSUPPORTED)
- svn (UNSUPPORTED)
- bzr (UNSUPPORTED)

FOSSA currently only supports the most popular VCS, `git`.  Any other dependency will be found, but returned and labeled as `unreachable` in the FOSSA UI without any deep analysis data provided.

### Version Resolution

FOSSA's behavior replicates `go get` to choose and resolve versions.  Vendored dependencies (available in `Golang 1.6+`) are first visited, and then a cache of packages in `$GOPATH`. For more information, see the Golang docs on `go get` behavior [here](https://golang.org/cmd/go/#hdr-Download_and_install_packages_and_dependencies).

FOSSA's `$GOPATH` relies on a **global cache** of all analyzed revisions that FOSSA has previously scanned.  This will often choose the latest commit on the master branch when resolving versions with no locked revision ID provided.  To reliably ensure the same versions across build environments or in your local cache/`$GOPATH`, you can install a FOSSA plugin (when available) or begin locking your versions using a dependency manager.

### Revision Locking

If your code uses a version locking system, FOSSA will prefer a locked version over what's available in the global `$GOPATH`.  Currently, FOSSA supports `Godep` and `govendor`.