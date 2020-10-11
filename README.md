# Lunchmoney + N26 Sync - Cloudflare Worker

Sync your N26 Bank Account with your Lunchmoney account.

## Setup

There are a few steps to get this working, for access to each service you will need the following:

1. Lunchmoney - API Token
2. N26 - Login Credentials (username / password)

We will store these in Cloudflare Worker environment secrets.

Once you've gotten your credentials ready, we can begin by using Cloudflare's `wrangler` tool to initiate a new worker based on this repository

`wrangler init lunchmoney-sync https://github.com/ndom91/lunchmoney-n26`

Once it is created, we'll need to add the secrets

`wrangler secret put N26_USER <username>`
`wrangler secret put N26_PASS <password>`
`wrangler secret put LUNCHMONEY_TOKEN <token>`

These can then be accessed as global variables in your worker.

Finally, you can simply `publish` this repo. Make sure you're in the root of the repository and run

`wrangler publish`

## Contributing

All contributions welcome. Please stick to the `prettier` settings though :)

1. Clone the repository
   `git clone https://github.com/ndom91/lunchmoney-n26`

2. Install dependencies
   `cd lunchmoney-n26 && npm install`

3. Start `wrangler` in dev mode
   `wrangler dev`

## License

MIT
