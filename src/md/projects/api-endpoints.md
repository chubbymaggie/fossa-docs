# Project API Endpoints

Each project analyzed by FOSSA also exposes REST api endpoints for you to use in your CI, scripts or generate custom documents/reports.

## API Tokens

FOSSA allows users to create API tokens in order to access the API.

To create a token, visit [Account Settings](/account/settings):

![API Token Creation](/img/api-token-creation.png)

To use the API token, you must add it in the `Authorization` header of the request:

`curl -H "Authorization: token <token>" "https://app.fossa.io/<API endpoint>"`

## API endpoints

API documentation and access is currently only available to Enterprise customers.  Please contact [support@fossa.io](mailto:support@fossa.io) if you'd like to learn more.
