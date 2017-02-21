# .NET

## Nuget (Alpha)

FOSSA supports .NET projects that use Nuget.

We look for and analyze the following files for license and dependency information
 - `.csproj/.xproj` 
 - `packages.config`
 - `project.json`
 - `.nuspec`

FOSSA will find any package available on [www.nuget.org/packages](http://www.nuget.org/packages) 

We currently use the [NuGet API v3](https://docs.microsoft.com/en-us/nuget/api/nuget-api-v3) to fetch metadata and package information

## License files

If a license file is given as a URL (in a `.nuspec` file via the `licenseUrl` property) FOSSA will attempt to go out and retrieve the license file and add to the project root. These will be labeled as `LICENSE_<license-name>.txt` when viewing license matches inside FOSSA

## Dependency Resolution

If an exact version is not given (i.e. a version range), FOSSA will resolve a dependency to the highest patch version (using the `major.minor.patch.build` convention) 

Documentation on versioning: [Version range spec](https://docs.microsoft.com/en-us/nuget/create-packages/dependency-versions)


## Limitations

 - We do not currently support `project.lock.json` files
 - We do not currently support `files`, `references`, or `frameworkAssemblies` in the `.nuspec` file
 - FOSSA does not currently support private nuget feeds. We default to [https://api.nuget.org/v3/index.json](https://api.nuget.org/v3/index.json)
 - We only support utf8 encoding for `.nuspec` files.
 - We don't look at Frameworks in the `project.json`/`packages.config` file
 - We don't look at `NuGet.config` file.