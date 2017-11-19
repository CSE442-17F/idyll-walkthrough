# CSE442-idyll-walkthrough-F2017
The Idyll example project that I walked through during CSE 442 lecture. The source can be found in `index.idl` and in the `components` folder.

View live version: https://cse442-17f.github.io/idyll-walkthrough/

## Getting Started With Idyll

### Dependencies

To use Idyll you'll need to have a recent version of `node.js` installed (version 6 or later). This can be installed either directly from https://nodejs.org/en/, or using a node version manager, https://github.com/creationix/nvm.

### Installation

To start a new project, first install the Idyll project generator:

```
$ npm install -g yo generator-idyll
```

And run the generator:

```
$ yo idyll
```

This will create a new folder in your current directory containing all the necessary Idyll files. 

### Developing

During the development process, you'll need to up the Idyll markup file (located in `index.idl`), and custom components (located in the `components/` folder).

To start developing, run 

```
$ npm start
```

from the root of the idyll project folder. This will start a local webserver, open the page in your browser, and watch for changes. The browser window should refresh automatically as you make updates to the code.

#### Custom Styles

If you want to customize the look and feel of the page, you can modify the `styles.css` file. 

### Deploying to GH Pages

Since our Github repos are setup to serve from the `docs/` folder, you'll have to modify the default deploy script. To do this, open `package.json`, and modify the `scripts.deploy` key. Update the deploy script so that on deploy it runs the build command, and copies the generated `build` folder to your `docs` folder.

```
{
  ...
  "scripts": {
    ...
    "deploy": "npm run build && cp -r build/ <path-to-docs-folder>"
  }
},
```

### Troubleshooting

First check the docs - http://idyll-lang.org/

If you can't find answers there, post on canvas, come to office hours, or post in the idyll chatroom: https://gitter.im/idyll-lang/Lobby

You can also feel free to open issues on this repository or on [Idyll's repo](https://github.com/idyll-lang/idyll).

### Notes

* Make sure you have a recent version of node - v6 or greater will work, earlier versions may not.
* You may want to add the generated `.idyll` folder to your `gitignore`. 
* We recommend that you don't use the `Feature` component for this project, as there are some bugs with that. If you really want to use it, email Matt, mconlen@cs.washington.edu
* If you run into "UNKNOWN" or other similarly vague error messages when running `npm install` there are two things to try:
  * Reset npm’s cache: `npm cache clean`. Then rerun the install command
  * Remove the node_modules folder and retry the install completely. To do this:
    * delete the “node_modules” folder that is located in the root of the idyll project folder, rerun the install command

### Windows Issues

I’ve just released a new version (v2.0.7) that fixes issues when running in the default windows prompt, outside of the linux subsystem. To upgrade, navigate to the root folder of your idyll project, and run:

`npm install --save idyll@latest`

Note, if this install fails, you may need to clear the cache: `npm cache clean` and run it again.
