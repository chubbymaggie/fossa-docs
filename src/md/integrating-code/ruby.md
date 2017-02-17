# Ruby

## Rubygems

FOSSA support for Rubygems is in **Beta**.

FOSSA supports projects that use Rubygems and Bundler. We are currently on `Ruby v2.3.3`

We look for and analyze the following files for license and dependency information
 - `.gemspec`
 - `Gemfile`
 - `Gemfile.lock`

FOSSA will find any package available on [www.rubygems.org](http://www.rubygems.org)

We use the [rubygems.org weekly data dumps](https://rubygems.org/pages/data) to gather info on all gems.

## Licenses

Declared licenses in `.gemspec` files will be picked up

## Dependency Resolution

We use [Bundler](www.bundler.io) (version: `~>1.6.0`) to resolve dependencies.
If a `Gemfile.lock` is available, then we will use the version given there for a dependency.
We will ignore all `development` dependencies (added in `.gemspec` file with `add_development_dependency`) and all dependencies in the `:test` and `:development` groups in your `Gemfile`.

## Limitations

 - If a project is not available in the latest [rubygems.org weekly data dump](https://rubygems.org/pages/data), FOSSA will not analyze it.
 - We currently do not support custom sources. If a gem is not available on [rubygems.org](http://www.rubygems.org), we won't pick it up.
 - We currently do not support private gems that need authentication.
 - We currently do not support gems from `git` or `github` sources.