# Updating Dependencies 

FOSSA suggests a **Dependency Update** when a newer version of a 
module you are using fixes existing issues in your codebase.

For instance, if a library you were using at version 1.0 had a copyright violation, 
but the authors released a newer version that removed the violation in 2.0, FOSSA might 
suggest an update looking like: 

> Update **library** `1.0` -> `2.0`.

FOSSA also tracks whether these updates will resolve issues caused by deep dependencies.

*NOTE: Updating to versions may introduce new issues in your code.  FOSSA anticipates this and will 
only suggest an update if it fixes more issues that it may introduce.*

## How to Run an Update

Updating dependencies is generally a job for your product's engineering team.  First, check how the update 
will affect your code, and whether there may be breaking changes.

If an update is acceptable, then do the following:

### For Node.js / NPM

In your terminal, run:

```bash
cd <directory of package.json>
npm install <dependency name>@<version> --save-exact
```

This will change your `package.json` file to include the newest version.

*More environments coming soon...*

Once you've decided to complete the update, click **Mark as Resolved**.  
This will silence the issues until update is fully completed and committed to your codebase.

## Updating Deep Dependencies

Even if deep dependencies have newer versions that fix issues, updating to benefit from those
requires every dependency in the chain between your project and the deep dependency to update as well.  

Therefore, FOSSA will only suggest and analyze updates on shallow dependencies.

You may inspect to see if an update down the dependency chain is acceptable by 
clicking on **Relationship to main project** under each Issue item.  This will let
you visualize how many projects are in the chain to figure out how many updates are needed.