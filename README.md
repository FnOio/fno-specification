# The Function Ontology Specification

Repository for https://w3id.org/function/spec

## Quickstart

- edit dev.html
  - Makes sure all your local assets are in the `resources` folder, and the links in your dev.html file are relative (important because the publishing script creates multiple nested paths)
- save as snapshot to function.html [using the respec functionality](https://respec.org/docs/#using-browser)
- run `node publish.js` to get the index.html + archived version in the `dist` folder

The `dist` folder contents should mimic the contents on `https://w3id.org/function/spec`
