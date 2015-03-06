---
layout: default
menu_item: getting_started
sections:
  "Using NodeGit": "#using-nodegit"
  "Using NodeGit": "#clone-a-repository"

---

NodeGit can be quickly and painlessly installed via NPM:

``` bash
npm install nodegit
```

For more comprehensive installation techniques, check out the [Install Guides](
/guides/install
)

* * *

## <a name="using-nodegit"></a>Using NodeGit

You simply need to require NodeGit in your project to start using it.

``` javascript
var Git = require("nodegit");
```

## <a name="clone-a-repository"></a>Clone a Repository

Let's learn how to clone a repository. Create a file named `clone.js`,
and add the following code:

``` javascript
Git.Clone("https://github.com/nodegit/nodegit", "tmp").then(function(repository) {

});
```

## <a name="open-a-repository"></a>Open a Repository

Let's learn how to open a repository. Create a file named `open.js`,
and add the following code:

``` javascript
Git.Repository.open("tmp").then(function(repository) {

});
```

* * *

## <a name="brought-to-you-by"></a>Brought to you by...

A lot of talented developers over the world.  We are proud to be sponsored by
the following companies to continue work on making NodeGit one of the best
native node modules around!

<img width=100 src="/img/Axosoft-Logo-Revision_crop.png">
<img width=100 src="/img/bocoup-horizontal-100.png">
<img width=100 src="/img/GitHub_Logo.png">
