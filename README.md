# CSE442-idyll-walkthrough-F2017
The Idyll example project that I walked through during CSE 442 lecture. The source can be found in `index.idl` and in the `components` folder.

View live version: https://uwdata.github.io/CSE442-idyll-walkthrough-F2017/

## Getting Started With Idyll

### Dependencies

To use Idyll you'll need to have a recent version of `node.js` installed. This can be installed either directly from https://nodejs.org/en/, or using a node version manager, https://github.com/creationix/nvm.

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

### Deploying to GH Pages
