# Perl

## CPAN (Alpha)

FOSSA supports projects that use cpan. We are currently on `Perl v5.18.2`

We look for and analyze the following files for license and dependency information
 - `cpanfile`
 - `Makefile.PL`
 - `Build.PL`
 - `(MY)META.(yml/json)`

FOSSA will find any package available via the [Metacpan API](https://github.com/metacpan/metacpan-api/blob/master/docs/API-docs.md).

## Licenses

Declared licenses in `(MY)META.(yml/json)` files will be picked up

## Dependency Resolution

We use both metadata file parsing and the `cpanm` command line tool to discover dependencies. To resolve versions, we use the ElasticSearch cpan api found [Here](https://fastapi.metacpan.org)