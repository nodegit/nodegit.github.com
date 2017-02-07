---
layout: full
body_class: home
menu_item: getting_started
---

## Install NodeGit

NodeGit can be quickly and painlessly installed via NPM. For more
comprehensive installation techniques, check out the
[Install Guides](/guides/install/).

```bash
npm install nodegit
```

* * *

## Compatibility

<div class="columns compatibility">
  <div class="column">
    <h3>Native Shells</h3>
    <div class="columns">
      <div class="column">
        <a href="http://github.com/atom/electron">
          <img src="/img/electron.svg"/>
        </a>
        <a href="/guides/install/electron/">
        Electron
        </a>
      </div>
      <div class="column">
        <a href="http://nwjs.io">
          <img src="/img/nwjs.png"/>
        </a>
        <a href="/guides/install/nw.js/">
        nw.js
        </a>
      </div>
    </div>
  </div>
  <div class="column">
    <h3>Operating systems</h3>
    <div class="columns">
      <div class="column">
        <a href="http://apple.com/osx">
          <img src="/img/osx.png"/> OS X
        </a>
      </div>
      <div class="column">
        <a href="http://microsoft.com/windows">
          <img src="/img/windows.png"/> Windows
        </a>
      </div>
      <div class="column">
        <a href="http://linux.com">
          <img src="/img/linux.png"/> Linux
        </a>
      </div>
    </div>
  </div>
  <div class="column">
    <h3>Node support</h3>
    <div class="columns">
      <div class="column">
        <a href="http://nodejs.org">
          <img src="/img/nodejs.png"/> NodeJS
        </a>
      </div>
      <div class="column">
        <a href="https://iojs.org">
          <img src="/img/iojs.png"/> io.js
        </a>
      </div>
    </div>
  </div>
</div>

* * *

## Getting Started

You simply need to require NodeGit in your project to start using it.

``` javascript
var Git = require("nodegit");
```

### <a name="clone-a-repository"></a>Clone a Repository

Let's learn how to clone a repository. Create a file named `clone.js`,
and add the following code:

``` javascript
var Git = require("nodegit");

Git.Clone("https://github.com/nodegit/nodegit", "nodegit").then(function(repository) {
  // Work with the repository object here.
});
```

This will clone our repository into a folder named `nodegit`.

### <a name="open-a-repository"></a>Open a Repository

Let's learn how to open a repository. Create a file named `open.js`,
and add the following code:

``` javascript
var Git = require("nodegit");

var getMostRecentCommit = function(repository) {
  return repository.getBranchCommit("master");
};

var getCommitMessage = function(commit) {
  return commit.message();
};

Git.Repository.open("nodegit")
  .then(getMostRecentCommit)
  .then(getCommitMessage)
  .then(function(message) {
    console.log(message);
  });
```

This will open our cloned repository and read out the latest commit's message from master.

### Have a problem? Come chat with us!

Visit [slack.libgit2.org](http://slack.libgit2.org/) to sign up, then join us in #nodegit.

* * *

## <a name="brought-to-you-by"></a>Brought to you by

NodeGit is brought to you by the work of [many contributors](https://github.com/nodegit/nodegit/graphs/contributors) all over the globe. We are proud to be sponsored by the following companies to continue work on making NodeGit one of the best native node modules around!

<div class="columns logos">
  <div class="column">
    <a class="axosoft" target="_blank" href="https://axosoft.com">
      <img src="/img/axosoft.svg">
    </a>
  </div>
  <div class="column">
    <a class="github" target="_blank" href="https://github.com">
      <img src="/img/github.png">
    </a>
  </div>
  <div class="column">
    <a class="bocoup" target="_blank" href="https://bocoup.com">
      <img src="/img/bocoup.png">
    </a>
  </div>
</div>
