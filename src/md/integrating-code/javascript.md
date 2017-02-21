# Javascript

FOSSA supports Javascript projects through NPM and Bower.

## Private Packages

In order for FOSSA to reach private scoped packages on NPM, you must configure auth using the data found in `.npmrc` after running `npm login`.

To configure authentication, your FOSSA admin must edit `config.env` with one of two authentication methods. Check your `.npmrc` to see which of the two formats below you use.

### Auth tokens

For newer registries or NPM Enterprise, FOSSA supports tokens for authentication.  If you are using this method, you can find a line in your `.npmrc` formatted as `//REGISTRY_URL/:_authToken=AUTH_TOKEN`.  

Take the `AUTH_TOKEN` and add the following config:

```
fetchers__npm__auth_token=AUTH_TOKEN
```

### Legacy authentication

Many systems still use legacy authentication, especially if you are using a private registry like  **Artifactory**.  Look for `email`, `_auth` and `username` in your `.npmrc`.


```
fetchers__npm__auth__email

fetchers__npm__auth__token # _auth parameter in .npmrc

fetchers__npm__auth__username
```

After configuring, your FOSSA admin must run `fossa restart`.

## Private Registries

If you are using a private registry like Artifactory for you NPM code, your FOSSA admin can specify a private registry URL:

``` 
fetchers__npm__registry=YOUR_REGISTRY_URL
```

Often private registries require authentication, which is covered above under **Private Packages**.

## NPM Enterprise

[See here](/docs/integrating-tools/npm-enterprise) for FOSSA's NPM Enterprise integration.