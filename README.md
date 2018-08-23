# My Random Utils

In this repo you'll find a bunch of random utilities/convenience files. Things such as a Regex `.matchAll` prototype for JavaScript, and webpack/build tool configurations that are normally a HUGE pain in the keester to remember how to configure.

Mostly tailored for my personal use, but you're welcome to copy/use whatever you'd like. I don't really need credit, but if you make an improvement to something you see here, consider making a PR so others can use it too! :)

### Index
`/`
* `utils.js` — collection of JS files that you'll ideally be able to `import` or `require()` into your project. I try to use valid JSDoc syntax to document the functions, so it _should_ be compatible with that if you use it.

`JS-build-tools`
  * `package.json` — An example project starter for most modern javascript development. It's not opinionated toward React, Vue, or any other JS library, so you'll have to add those dependencies in yourself. NOTE! It does come with some basic commands in the scripts section, but you may need to tailor those to your needs.
  * `webpack.config.js` — Basic _non-production_ build tool for webpack. I tried to keep it fairly un-opinionated while adding in quite a few features. Again it won't build your `.jsx` or other specialty files, so you'll have to add that in yourself. I'll make more specialized ones in future updates :)


## TODO (not necessarily in this order)
<!-- All of these are labeled '1' so you can remove one without having to go modify the rest -->
1. Add babel configs for better JS support
1. Add more specialized webpack configs
1. Add explanations to Webpack config (comments on why we do what we do in that file)
1. Add better build scripts to `package.json`