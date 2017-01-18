# Project API Endpoints

Each project analyzed by FOSSA also exposes REST api endpoints for you to use in your CI, scripts or generate custom documents/reports.

### `GET /api/revisions/:locator`

Fetches .  The `locator` of a revision can be derived from visiting the API endpoint in the header of any revision page. 

### `GET /api/revisions/:locator.svg`

Render a rich, embeddable SVG plugin to summarize FOSSA analysis of a revision.

### `GET /api/revisions/:locator/licenses`

Fetches

### `GET /api/revisions/:locator/dependencies`


