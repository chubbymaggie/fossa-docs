# Python

FOSSA supports Python projects through `setuptools` and `pip`.

## Configuration

Project settings config is accessible and editable from the projects page (http://&lt;fossa-host&gt;/projects/&lt;project&gt;/settings/languages).

The `environment variables` used during project build is configurable via **Project Settings > Builds and Languages > General**.

## Dependencies

**distutils and setuptools**

Dependencies are extracted from the `install_requires` parameter in a projects `setup.py` file. If the `setup.py` file has been customized, Fossa may not be able to pull out dependencies.

**Eggs and Wheels**

When possible, source code is downloaded over binary formats like *.egg* and *.whl*. If an egg or wheel is downloaded, its contents are inspected to find dependency information.

### Version Control Systems

Python projects can refer to dependencies in a Version Control System (VCS). The following VCSs are supported by Python:

- hg (UNSUPPORTED)
- git (SUPPORTED)
- svn (UNSUPPORTED)
- bzr (UNSUPPORTED)

Fossa currently only supports the **git** VCS as a dependency.

## Known Issues

- **dist-info** directories are currently skipped.
- Mercurial, Subversion, and Bazaar Version Control Systems are not supported.
- Source code distributed with XZ compression is not supported.
- Custom build scripts (i.e. fabric, make, etc.) are not supported.
- An inability to run `setup.py` or `pip install -r <requirements.txt>` is not supported.
- Massive customizations to `setup.py` files are not supported.
- C Extensions are not supported.
