---
layout: default
menu_item: getting_started
sections:
  "Installing NodeGit": "#installing-nodegit"
  "Cloning a Repository": "#cloning-a-repository"

---

## <a name="installing-nodegit"></a>Installing NodeGit

First, let’s make a directory to experiment with NodeGit.

```bash
$ mkdir ~/start-with-nodegit
$ cd ~/start-with-nodegit
```

NodeGit can be installed using npm, the node package manager. If you don’t have node installed on your machine, you can download and install the node binaries for your OS. Once node is installed, open your Terminal and install NodeGit.

```bash
$ npm install nodegit
```

## <a name="cloning-a-repository"></a>Cloning a Repository

First, let’s learn how to clone a repository. Let’s create a file named `clone.js`, and input the following code.

```js
var NodeGit = require("nodegit");

// Clone a given repository into a specific folder.
NodeGit.Clone.clone("https://github.com/nodegit/nodegit", "tmp", null)
  // Look up this known commit.
  .then(function(repo) {
    // Use a known commit sha from this repository.
    return repo.getCommit("59b20b8d5c6ff8d09518454d4dd8b7b30f095ab5");
  })
  // Look up a specific file within that commit.
  .then(function(commit) {
    return commit.getEntry("README.md");
  })
  // Get the blob contents from the file.
  .then(function(entry) {
    // Patch the blob to contain a reference to the entry.
    return entry.getBlob().then(function(blob) {
      blob.entry = entry;
      return blob;
    });
  })
  // Display information about the blob.
  .then(function(blob) {
    // Show the name, sha, and filesize in byes.
    console.log(blob.entry.name() + blob.entry.sha() + blob.size() + "b");

    // Show a spacer.
    console.log(Array(72).join("=") + "\n\n");

    // Show the entire file.
    console.log(String(blob));
  })
  .catch(function(err) { console.log(err); });
```
