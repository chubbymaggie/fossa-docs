# Ruby

## Rubygems (Alpha)

FOSSA supports projects that use Rubygems and Bundler. We are currently on `Ruby v2.3.3`

We look for and analyze the following files for license and dependency information
 - `.gemspec`
 - `Gemfile`
 - `Gemfile.lock`

FOSSA will find any package available on [www.rubygems.org](http://www.rubygems.org), and also works with private sources as well.

## Private Packages

In order for FOSSA to reach private scoped rubygems, you must configure auth for your rubygems source.

To configure authentication, navigate to [Ruby Language Settings](/account/settings/languages/ruby) and supply the URL, username, and password

## Licenses

Declared licenses in `.gemspec` files will be picked up

## Dependency Resolution

We use [Bundler](www.bundler.io) (version: `~>1.6.0`) to resolve dependencies.
If a `Gemfile.lock` is available, then we will use the version given there for a dependency.
We will ignore all `development` dependencies (added in `.gemspec` file with `add_development_dependency`) and all dependencies in the `:test` and `:development` groups in your `Gemfile`.

## Limitations

 - We currently do not support gems from `git` or `github` sources.