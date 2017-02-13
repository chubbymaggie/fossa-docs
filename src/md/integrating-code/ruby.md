# Ruby

## Rubygems

FOSSA supports projects that use Rubygems and Bundler.

We look for and analyze the following files for license and dependency information
 - `.gemspec`
 - `Gemfile`
 - `Gemfile.lock`

FOSSA will find any package available on [www.rubygems.org](http://www.rubygems.org)

We use the [rubygems.org weekly data dumps](https://rubygems.org/pages/data) to gather info on all gems.

## Licenses

Declared licenses in `.gemspec` files will be picked up

## Dependency Resolution

We use the [Bundler](www.bundler.io) dependency resolver to resolve dependencies


## Limitations

 - If a project is not available in the latest [rubygems.org weekly data dump](https://rubygems.org/pages/data), FOSSA will not analyze it.
 - We currently do not look at the versions from `Gemfile.lock` files, which may cause version inconsistancies across FOSSA builds.
 - We currently do not support custom sources. If a gem is not available on [rubygems.org](http://www.rubygems.org), we won't pick it up.
 - We currently do not support private gems that need authentication.