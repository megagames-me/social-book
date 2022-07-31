# SocialBook
![License](https://img.shields.io/github/license/megagames-me/social-book) ![Code Size](https://img.shields.io/github/languages/code-size/megagames-me/social-book?style=flat) ![Open Issues](https://img.shields.io/github/issues/megagames-me/social-book) ![Closed Issues](https://img.shields.io/github/issues-closed/megagames-me/social-book) ![Opened Pull Requests](https://img.shields.io/github/issues-pr/megagames-me/social-book) ![Closed Pull Requests](https://img.shields.io/github/issues-pr-closed/megagames-me/social-book) ![Stars](https://img.shields.io/github/stars/megagames-me/social-book?style=social)

[SocialBook](https://sas-social-book.herokuapp.com/) (name is WIP) is a possible successor to 7C Artifacts. This is currently under development.

## Working on SocialBook

Make sure that you are running Node.js v16+.

First, you must `git clone` this repo and `cd` into it. In the root directory, you must create a `.env` file with the following contents. 
```.env
DATABASE_URL="[Insert Postgres URL]"
GOOGLE_OAUTH_CLIENT_ID="[Insert Client ID]"
GOOGLE_OAUTH_CLIENT_SECRET="[Insert Secret]"
JWT_SECRET_KEY="[Insert JWT Key]"
HOST="[Insert Name of Host]"
PROTOCOL="[Insert Protocol (http or https)]"
```
Then, run `yarn` or `npm install` (your choice) to install all the dependencies. After this, you must generate the prisma client with `npx prisma generate`. Now, you can run `yarn dev` or `npm run dev` to enter development mode. To build the app and run, use the scripts `build` and `preview` respectively.
