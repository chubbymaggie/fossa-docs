# PHP

## Composer (Alpha)

FOSSA supports PHP projects that use [Composer](https://getcomposer.org/).

We look for and analyze files named `composer.json`

FOSSA will find any package available on [https://packagist.org/](https://packagist.org/) 

### License files

License files will be declared by looking at the `license` field in the composer.json file or any other source code related to the package.

### Dependency Resolution

If an exact version is not given (i.e. a version range), FOSSA will resolve a dependency to the highest version satisfying the constraint.

Documentation on versioning: [Version spec](https://getcomposer.org/doc/articles/versions.md).


### Limitations

 - We do not elect versions based on the `composer.lock` file.
 - If branches (`dev-`, or `.x-dev`) are used within a version constraint (not given explicitly), resolving may not work
 - We currently ignore stability tags (`@dev, @stable`, etc.)
 - We ignore php and php extensions when inside the `require` key of `composer.json`
 - We only look at `require` for dependencies. dev dependencies will be ignored
