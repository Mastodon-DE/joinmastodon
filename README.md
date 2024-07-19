# JoinMastodon


## Installation

First, install the Bun runtime at https://bun.sh.

Then, run the following commands:

```
bun install
bun dev
```

## Server Deployment

To update the server, run the following commands:

```
sudo docker compose pull
sudo docker compose down
sudo docker compose up -d
```


## Development

### Relevant Files

**Index**

`joinmastodon\pages\index.vue`

**Embedded Posts**

`joinmastodon\components\grids\EmbedGrid.vue`

**SlidingAccounts**

`joinmastodon\components\grids\SlidingAccounts.vue`

**TeamGrid**

`joinmastodon\components\grids\TeamGrid.vue`