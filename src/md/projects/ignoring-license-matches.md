# Ignoring License Matches

By default, FOSSA will ignore all files that match the following directories:

- Version Control/Devtool Folders: `.git/`, `.srclib-cache/` 
- Package Dependency Folders: `node_modules/`, `bower_components`, `Godeps/` (Contact support if you use vendorized dependencies)
- Test Folders: `test/`, `tests/`, `_test/`, `spec/`
- Object and Compiled Folders: `_obj`
- Examples and Documentation: `docs/`, `documentation/`, `examples/`, `example/`

We also ignore certain file types:

- Source map files: `*.map`
- Lib files: `*.lib`
- Keyfiles: `*.pem`
- Asset Files: `*.pdf`, `*.png`, `*.jpg`, `*.jpeg`, `.psd`, `.eps`
- Archives: `*.tar`, `*.zip`, `*.tar.gz`, `*.tgz` (Contact support if you need archive inspection)
- Object Files: `*.dll`, `*.so`, `*.gyp`, `*.a`, `*.o`, `*.exe`
- Attribution Files: `NOTICE.*`

Shoot us an email if you'd like to give feedback on anything that should be added/removed from this list.

## The `.fossaignore` File
  
FOSSA will also specially parse files named `.fossaignore` in the *root directory* of your repository.  The `.fossaignore` file functions identically to a `.gitignore` file, and ignores whatever files or directories are specified in it during analysis.  This may be used to speed up analysis, ignore large/irrelevant data files and fix any false positives. You may whitelist any files or directories in the .fossaignore file that FOSSA automatically ignores (see list above).

`.fossaignore` files rely on [glob matching](https://en.wikipedia.org/wiki/Glob_%28programming%29).  A sample `.fossaignore` may look something like this:

```
# Ignore everything in the bin and vendor directories
bin/
vendor/

# Ignore data directory
data/

# Ignore JSON & log Fixtures
*.json
*.log

# Ignore OS generated files 
.DS_Store
.Trashes

# Whitelist .pdf files (ignored by default in FOSSA)
!**.pdf
```

Read about `.gitignore` files [here](http://git-scm.com/docs/gitignore).