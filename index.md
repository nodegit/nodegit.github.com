---
layout: default
menu_item: getting_started
sections:
  "About": "#about"
  "Quick install": "#quick-install"
  "Include library": "#include-library"
  "Cloning a Repository": "#cloning-a-repository"
  "Opening a Repository": "#opening-a-repository"
  "Brought to you by...": "#brought-to-you-by"
  "Used by...": "#used-by"

---

## <a name="about"></a>About NodeGit

If you are working with low-level Git operations and want excellent
performance, NodeGit is for you.  This project provides well tested, cross
platform bindings to the [libgit2](https://libgit2.github.com) library for
Node.

### Current stable version: 0.3.0

<table>
  <thead>
    <tr>
      <th>Linux</th>
      <th>OS X</th>
      <th>Windows</th>
      <th>Dependencies</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" align="center">
        <a href="https://travis-ci.org/nodegit/nodegit"><img src="https://travis-ci.org/nodegit/nodegit.svg"></a>
      </td>
      <td align="center">
        <a href="https://ci.appveyor.com/project/timbranyen/nodegit"><img src="https://ci.appveyor.com/api/projects/status/e5a5q75l9yfhnfv2?svg=true"></a>
      </td>
      <td align="center">
        <a href="https://david-dm.org/nodegit/nodegit"><img src="https://david-dm.org/nodegit/nodegit.svg"></a>
      </td>
    </tr>
  </tbody>
</table>

## <a name="quick-install"></a>Quick install

NodeGit can be quickly and painlessly installed via NPM:

``` bash
npm install nodegit
```

For more comprehensive installation techniques, check out the [Install Guides](
/guides/install
)

## <a name="include-library"></a>Include library

You simply need to require NodeGit in your project to start using it.

``` javascript
var Git = require("nodegit");
```

## <a name="cloning-a-repository"></a>Cloning a Repository

Let's learn how to clone a repository. Create a file named `clone.js`,
and add the following code:

``` javascript
Git.Clone("https://github.com/nodegit/nodegit", "tmp").then(function(repository) {

});
```

## <a name="opening-a-repository"></a>Opening a Repository

Let's learn how to open a repository. Create a file named `open.js`,
and add the following code:

``` javascript
Git.Repository.open("tmp").then(function(repository) {

});
```

## <a name="brought-to-you-by"></a>Brought to you by...

A lot of talented developers over the world.  We are proud to be sponsored by
the following companies to continue work on making NodeGit one of the best
native node modules around!

<img width=100 src="/img/Axosoft-Logo-Revision_crop.png">
<img width=100 src="/img/bocoup-horizontal-100.png">
<img width=100 src="/img/GitHub_Logo.png">
