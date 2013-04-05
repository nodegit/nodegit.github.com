Version **0.0.79** Node.js libgit2 asynchronous native bindings

A collection of non-blocking Node.js libgit2 bindings, raw api, convenience api, unit tests, documentation and accomodations to make contributing easier.

#### require

* [Node.js >=0.8](http://nodejs.org/)
* [npm](http://npmjs.org/) *(if you want the premiere install experience)*
* [Git](http://git-scm.com/) *(if you want to unit test )*  
  
#### install  

    npm install nodegit
  
  

#### use

*emulate git log*

    // Load in the module.
    var git = require('nodegit'),
      async = require('async');

    // Open the repository in the current directory.
    git.repo('.git', function(error, repository) {
      if (error) throw error;

      // Use the master branch (a branch is the HEAD commit)
      repository.branch('master', function(error, branch) {
        if (error) throw error;

        // History returns an event, and begins walking the history
        var history = branch.history();

        // History emits 'commit' event for each commit in the branch's history
        history.on('commit', function(error, commit) {
          // Print out `git log` emulation.
            async.series([
                function(callback) {
                    commit.sha(callback);
                },
                function(callback) {
                    commit.time(callback);
                },
                function(callback) {
                    commit.author(function(error, author) {
                        author.name(callback);
                    });
                },
                function(callback) {
                    commit.author(function(error, author) {
                        author.email(callback);
                    });
                },
                function(callback) {
                    commit.message(callback);
                }
            ], function printCommit(error, results) {
                if (error) throw error;
                console.log('SHA ' + results[0]);
                console.log(new Date(results[1] * 1000));
                console.log(results[2] + ' <' + results[3] + '>');
                console.log(results[4]);
            });
        });
      });
    });

*view commit tree and blob information*

    // Load in the module.
    var git = require('nodegit');

    // Open the repository in the current directory.
    git.repo('.git', function(error, repository) {
      if (error) throw error;

      // Use the master branch.
      repository.branch('master', function(error, branch) {
        if (error) throw error;

        // Iterate over the revision history.
        branch.tree(function(error, tree) {
          if (error) throw error;
          tree.walk().on('entry', function(error, entry) {
            entry.name(function(error, name) {
                console.log(name);
            });
          });
        });
      });
    });  
  

#### download

You can download this project in either [zip](http://github.com/tbranyen/nodegit/zipball/master) or [tar](http://github.com/tbranyen/nodegit/tarball/master) formats.

You can also clone and build the project with [Git](http://git-scm.com) by running:

    $ git clone git://github.com/tbranyen/nodegit

    $ cd nodegit

    $ node install
