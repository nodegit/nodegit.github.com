---
layout: default
menu_item: getting_started
sections:
  "Install": "#install"
  "Compatibility": "#compatibility"
  "Using NodeGit": "#using-nodegit"
  "Brought to you by...": "#brought-to-you-by"

---

## <a name="install"></a>Install

* * *

NodeGit can be quickly and painlessly installed via NPM:

``` bash
npm install nodegit
```

For more comprehensive installation techniques, check out the [Install Guides](
/guides/install
)

## <a name="compatibility"></a>Compatibility

* * *

### <a name="os"></a>Operating systems

* * *

<a href="#">
<img height="64" src="/img/windows.png">
</a>
<a href="#">
<img height="64" src="/img/osx.png">
</a>
<a href="#">
<img height="64" src="/img/tux.png">
</a>

### <a name="shell"></a>Native shells

* * *

<a href="#">
<img height="64" src="/img/atom.png">
</a>
<a href="#">
<img height="64" src="/img/nw.png">
</a>

### <a name="node"></a>Node support

* * *

<a href="#">
<img height="64" src="/img/node.png">
</a>
<a href="#">
<img height="64" src="/img/iojs.png">
</a>

## <a name="using-nodegit"></a>Using NodeGit

* * *

You simply need to require NodeGit in your project to start using it.

``` javascript
var Git = require("nodegit");
```

### <a name="clone-a-repository"></a>Clone a Repository

* * *

Let's learn how to clone a repository. Create a file named `clone.js`,
and add the following code:

``` javascript
Git.Clone("https://github.com/nodegit/nodegit", "tmp").then(function(repository) {

});
```

### <a name="open-a-repository"></a>Open a Repository

* * *

Let's learn how to open a repository. Create a file named `open.js`,
and add the following code:

``` javascript
Git.Repository.open("tmp").then(function(repository) {

});
```

## <a name="brought-to-you-by"></a>Brought to you by...

* * *

A lot of talented developers over the world.  We are proud to be sponsored by
the following companies to continue work on making NodeGit one of the best
native node modules around!

<a class="axosoft" target="_blank" href="https://axosoft.com">
<img src="/img/Axosoft-Logo-Revision_crop.png">
</a>
<a class="bocoup" target="_blank" href="https://bocoup.com">
<img src="/img/bocoup-horizontal-100.png">
</a>
<a class="github" target="_blank" href="https://bocoup.com">
<img src="/img/GitHub_Logo.png">
</a>
