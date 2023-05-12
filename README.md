# ts-starter

## Usage

### Libary Development

Don't forget to bump the version when publishing!

```sh
npm install
npm run dev
npm run test

# Optional
npm link
cd /path/to/application
npm link @ampsec/platform-data
```

## Generating Docs

The docs are generated in the `public` folder by default. This simplifies publishing to
GitLab pages. That also means `public` is added to the `.gitignore` file. Change
the `docs` scripts in `package.json` if you need it published to a different directory.

```sh
npm run docs
# preview before deploying
npm run docs:serve
# deploys to Github Pages
npm run docs:deploy
```

For example: <https://fast-and-reliable-technologies.github.io/ts-starter/>

## Upgrade the dependencies

```sh
npm upgrade
```

## Using as a Project Starter

### Step #1 - Clean up Git

```sh
PROJECT_NAME=my-project
git clone https://github.com/Fast-and-Reliable-Technologies/ts-starter.git $PROJECT_NAME
cd $PROJECT_NAME
rm -rf .git
git init
```

### Step #2 - Own Project

1. Change `name` and `version` in `package.json`
1. Update run strategy in `package.json` based on your deployment style
   - Application Entry Point: `"main": "build/src/main.js"`
   - Libary Entry Point: `"main": "build/src/index.js"` (used for FaaS)
1. Udpate README

## Resources

- <https://www.digitalocean.com/community/tutorials/typescript-new-project>
- <https://www.npmjs.com/package/ts-node>
- <https://www.npmjs.com/package/ts-node-dev>
- <https://blog.logrocket.com/testing-typescript-apps-using-jest/>
- <https://github.com/Fast-and-Reliable-Technologies/sheets-stack-core/blob/main/package.json>
