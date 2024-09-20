# Join-Mastodon.de

The landing page for the Mastodon instance [mastodon.de](https://mastodon.de)!

For a live version of this repository check here: https://join-mastodon.de! 

## Installation

First, install the Bun runtime at https://bun.sh.

### Windows
`powershell -c "irm bun.sh/install.ps1 | iex"` (*only works in PowerShell*)

### Linux/MacOS
`curl -fsSL https://bun.sh/install | bash`

Then, install the Node Version Manager (NVM) at https://github.com/nvm-sh/nvm.

### Windows
`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`

### Linux/MacOS
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`

After installing these, reload your shell using `exec bash` (*or the name of whatever shell you use*) or restart your command line interface. 

Then, run the following commands:

```
bun install
bun dev
```

## Test as in Production

```
bun build
node .output/server/index.mjs
```

## Server Deployment

*Now done automatically and via GitHub pages*


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

# Website

Anything inside the `pages/` directory appears and exists as a webpage. `index.vue` is `/` meanwhile `contact.vue` is `/contact`! The file in the directory `pages/blog/` has a special filename (`[...path].vue`) to tell it to handle anything that starts with `/blog/` differently (*excluding the locale tags like /en or /de*)

## Blog

To edit the way the blog posts look (*CSS, JS, Template*) you need to edit the following file:

`joinmastodon\pages\blog\[...path].vue`

just add a <style> tag at the end of it!




## Troubleshoot / Find Anything In This Code

1. Go to join-mastodon.de and inspect element whatever you wish to find
2. Copy the class names
3. Go to VSCode/VSCodium and do CTRL+SHIFT+F to do a global search for them


## To Do

- Fix navbar ALWAYS bringing you to the English version of a page, not the version of the page you're using it on (*most likely it is bringing you to the version of the page of your locale, disregarding settings*)
- Add a headline over the account grid
- Add English translations for the FAQ
- Fix everything written in English
- Make CLEARER that we are not Mastodon nor are we developing the Mastodon software, but simply a singular instance
- PayPal button looks differently in mobile mode than other buttons