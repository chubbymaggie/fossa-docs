# Repository permissions

FOSSA supports several different ways of importing your code via **Dashboard > Add Project**:

- Github
- Bitbucket
- Gitlab

FOSSA uses the Oauth API's for each of these services in order to import, which requires users to grant certain permissions to FOSSA.

## Github permissions

To import from your github, FOSSA requires the following permissions:

- `repo`
- `user`
- `write:repo_hook`
- `read:org`
- `admin:org_hook`

![Github scopes](/img/github-scopes.png "Github scopes")

For more information on these permissions, view the [Github docs](https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps/)

## Bitbucket permissions

To import from your bitbucket, FOSSA requires the following permissions:

- `Account`
  - Email
  - Read
- `Team membership`
  - Read
- `Projects`
  - Read
- `Repositories`
  - Read
- `Pull requests`
  - Read
- `Issues`
  - Read
  - Write
- `Snippets`
  - Read
- `Webhooks`
  - Read and write
- `Pipelines`
  - Read


![Bitbucket scopes](/img/bitbucket-scopes.png "Bitbucket scopes")

For more information on these permissions, view the [Bitbucket docs](https://developer.atlassian.com/bitbucket/api/2/reference/meta/authentication#scopes-bbc)

## Gitlab permissions

To import from your github, FOSSA requires the following permissions:

- `api` (to access your code)

![Gitlab scopes](/img/gitlab-scopes.png "Gitlab scopes")

For more information on these permissions, view the [Gitlab docs](https://docs.gitlab.com/ee/integration/oauth_provider.html)
