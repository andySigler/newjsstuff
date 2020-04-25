# New JS Stuff...

Template for using new JS features for browser development. Uses the following:

#### Babel

Compiles new Javascript features into legacy Javascript which can be ran on older browsers

#### ESLint

Lints the JS code and reports error before compiling with `babel`.

#### Webpack

Coordinate the above two tools, watches the source files to automatically re-build, and runs a dev server.

## Node Environment

This setup uses `npm`, and installs some tools. To avoid conflicting with other projects on your machine, strongly recommend creating a virtual environment for node, using something line `nodenv`:

```bash
brew install nodenv
eval "$(nodenv init -)"
```

Then restart your terminal window.

Install a version of node (like `10.16.0`):

```bash
nodenv install 10.16.0
```

Then, inside your project's root folder, initialize `nodenv` to use that version for this project:

```bash
nodenv local 10.16.0
```

Now running `node` inside the project's folder will default to using version `0.10.26`.

## Install Tools

In the new project's directory, install the required tools listed in `package.json`:

```bash
npm install
```

Then, once those tools are installed, initialize ESLint:

```bash
./node_modules/.bin/eslint --init
```

And then close and restart a new terminal window.

## Using

Use `npm` to tell `webpack` to run a server (see inside `package.json` for what that does)

```bash
npm run dev
```

The development server will be running at `localhost:9000`.

## JS Files

Be sure to import `babel-polyfill` at the top of the JS file

```javascript
import 'babel-polyfill'
```
