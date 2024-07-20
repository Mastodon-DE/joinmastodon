# Join-Mastodon.de

The landing page for the Mastodon instance https://mastodon.de!


## Installation

First, install the Bun runtime at https://bun.sh.

### Windows
`powershell -c "irm bun.sh/install.ps1 | iex"` (*only works in PowerShell*)

### Linux/MacOS
`curl -fsSL https://bun.sh/install | bash`

Then, run the following commands:

```
bun install
bun dev
```

## Test as In Production

```
bun build
node .output/server/index.mjs
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



## To Do

- Fix MastodonDE Logo (SVG font does not work, so use PNG or do something so it stops using the font)
- Add a headline over the account grid
- Add English translations for the FAQ
- Fix everything written in English
- Make CLEARER that we are not Mastodon nor are we developing the Mastodon software, but simply a singular instance
- Fix the fact that when compiling markdown into a blog the "` `" (marks for inline code) do not work, or when used they are displayed too
- Make H2 headline "##" in markdown without an underline 