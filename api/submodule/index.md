---
layout: default
menu_item: api
title: Submodule
description: Version 0.26.1
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "addSetup": "#addSetup"
  "foreach": "#foreach"
  "lookup": "#lookup"
  "resolveUrl": "#resolveUrl"
  "setBranch": "#setBranch"
  "setFetchRecurseSubmodules": "#setFetchRecurseSubmodules"
  "setIgnore": "#setIgnore"
  "setUpdate": "#setUpdate"
  "setUrl": "#setUrl"
  "status": "#status"
  "#addFinalize": "#addFinalize"
  "#addToIndex": "#addToIndex"
  "#branch": "#branch"
  "#fetchRecurseSubmodules": "#fetchRecurseSubmodules"
  "#headId": "#headId"
  "#ignore": "#ignore"
  "#indexId": "#indexId"
  "#init": "#init"
  "#location": "#location"
  "#name": "#name"
  "#open": "#open"
  "#owner": "#owner"
  "#path": "#path"
  "#reload": "#reload"
  "#repoInit": "#repoInit"
  "#sync": "#sync"
  "#update": "#update"
  "#updateStrategy": "#updateStrategy"
  "#url": "#url"
  "#wdId": "#wdId"
  "IGNORE": "#IGNORE"
  "RECURSE": "#RECURSE"
  "STATUS": "#STATUS"
  "UPDATE": "#UPDATE"
---

## <a name="addSetup"></a><span>Submodule.</span>addSetup <span class="tags"><span class="async">Async</span></span>

```js
Submodule.addSetup(repo, url, path, use_gitlink).then(function(submodule) {
  // Use submodule
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repository in which you want to create the submodule |
| url | String | URL for the submodule's remote |
| path | String | Path at which the submodule should be created |
| use_gitlink | Number | Should workdir contain a gitlink to the repo in .git/modules vs. repo directly in workdir. |

| Returns |  |
| --- | --- |
| [Submodule](/api/submodule/) | The newly created submodule ready to open for clone |

## <a name="foreach"></a><span>Submodule.</span>foreach <span class="tags"><span class="async">Async</span></span>

```js
Submodule.foreach(repo, callback, payload).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repository |
| callback | SubmoduleCb | Function to be called with the name of each submodule. Return a non-zero value to terminate the iteration. |
| payload | Void | Extra data to pass to callback |

| Returns |  |
| --- | --- |
| Number |  0 on success, -1 on error, or non-zero return value of callback |

## <a name="lookup"></a><span>Submodule.</span>lookup <span class="tags"><span class="async">Async</span></span>

```js
Submodule.lookup(repo, name).then(function(submodule) {
  // Use submodule
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The parent repository |
| name | String | The name of or path to the submodule; trailing slashes okay |

| Returns |  |
| --- | --- |
| [Submodule](/api/submodule/) | Output ptr to submodule; pass NULL to just get return code |

## <a name="resolveUrl"></a><span>Submodule.</span>resolveUrl <span class="tags"><span class="async">Async</span></span>

```js
Submodule.resolveUrl(repo, url).then(function(buf) {
  // Use buf
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | Pointer to repository object |
| url | String | Relative url |

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) | buffer to store the absolute submodule url in |

## <a name="setBranch"></a><span>Submodule.</span>setBranch <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Submodule.setBranch(repo, name, branch);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository to affect |
| name | String | the name of the submodule to configure |
| branch | String | Branch that should be used for the submodule |

| Returns |  |
| --- | --- |
| Number |  0 on success, 
<
0 on failure |

## <a name="setFetchRecurseSubmodules"></a><span>Submodule.</span>setFetchRecurseSubmodules <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Submodule.setFetchRecurseSubmodules(repo, name, fetch_recurse_submodules);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository to affect |
| name | String | the submodule to configure |
| fetch_recurse_submodules | Number | Boolean value |

| Returns |  |
| --- | --- |
| Number |  old value for fetchRecurseSubmodules |

## <a name="setIgnore"></a><span>Submodule.</span>setIgnore <span class="tags"><span class="async">Async</span></span>

```js
Submodule.setIgnore(repo, name, ignore).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository to affect |
| name | String | the name of the submdule |
| ignore | Number | The new value for the ignore rule |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="setUpdate"></a><span>Submodule.</span>setUpdate <span class="tags"><span class="async">Async</span></span>

```js
Submodule.setUpdate(repo, name, update).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository to affect |
| name | String | the name of the submodule to configure |
| update | Number | The new value to use |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="setUrl"></a><span>Submodule.</span>setUrl <span class="tags"><span class="async">Async</span></span>

```js
Submodule.setUrl(repo, name, url).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository to affect |
| name | String | the name of the submodule to configure |
| url | String | URL that should be used for the submodule |

| Returns |  |
| --- | --- |
| Number |  0 on success, 
<
0 on failure |

## <a name="status"></a><span>Submodule.</span>status <span class="tags"><span class="async">Async</span></span>

```js
Submodule.status(repo, name, ignore).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository in which to look |
| name | String | name of the submodule |
| ignore | Number | the ignore rules to follow |

| Returns |  |
| --- | --- |
| Number | Combination of `GIT_SUBMODULE_STATUS` flags |

## <a name="addFinalize"></a><span>Submodule#</span>addFinalize <span class="tags"><span class="async">Async</span></span>

```js
submodule.addFinalize().then(function(result) {
  // Use result
});
```

| Returns |  |
| --- | --- |
| Number |  |

## <a name="addToIndex"></a><span>Submodule#</span>addToIndex <span class="tags"><span class="async">Async</span></span>

```js
submodule.addToIndex(write_index).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| write_index | Number | Boolean if this should immediately write the index file. If you pass this as false, you will have to get the git_index and explicitly call `git_index_write()` on it to save the change. |

| Returns |  |
| --- | --- |
| Number |  0 on success, 
<
0 on failure |

## <a name="branch"></a><span>Submodule#</span>branch <span class="tags"><span class="sync">Sync</span></span>

```js
var string = submodule.branch();
```

| Returns |  |
| --- | --- |
| String |  |

## <a name="fetchRecurseSubmodules"></a><span>Submodule#</span>fetchRecurseSubmodules <span class="tags"><span class="sync">Sync</span></span>

```js
var result = submodule.fetchRecurseSubmodules();
```

| Returns |  |
| --- | --- |
| Number |  0 if fetchRecurseSubmodules is false, 1 if true |

## <a name="headId"></a><span>Submodule#</span>headId <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = submodule.headId();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  |

## <a name="ignore"></a><span>Submodule#</span>ignore <span class="tags"><span class="sync">Sync</span></span>

```js
var result = submodule.ignore();
```

| Returns |  |
| --- | --- |
| Number |  The current git_submodule_ignore_t valyue what will be used for
         this submodule. |

## <a name="indexId"></a><span>Submodule#</span>indexId <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = submodule.indexId();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  |

## <a name="init"></a><span>Submodule#</span>init <span class="tags"><span class="async">Async</span></span>

```js
submodule.init(overwrite).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| overwrite | Number | By default, existing entries will not be overwritten, but setting this to true forces them to be updated. |

| Returns |  |
| --- | --- |
| Number |  0 on success, 
<
0 on failure. |

## <a name="location"></a><span>Submodule#</span>location <span class="tags"><span class="async">Async</span></span>

```js
submodule.location().then(function(result) {
  // Use result
});
```

| Returns |  |
| --- | --- |
| Number | Combination of first four `GIT_SUBMODULE_STATUS` flags |

## <a name="name"></a><span>Submodule#</span>name <span class="tags"><span class="sync">Sync</span></span>

```js
var string = submodule.name();
```

| Returns |  |
| --- | --- |
| String |  |

## <a name="open"></a><span>Submodule#</span>open <span class="tags"><span class="async">Async</span></span>

```js
submodule.open().then(function(repository) {
  // Use repository
});
```

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  |

## <a name="owner"></a><span>Submodule#</span>owner <span class="tags"><span class="sync">Sync</span></span>

```js
var repository = submodule.owner();
```

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  |

## <a name="path"></a><span>Submodule#</span>path <span class="tags"><span class="sync">Sync</span></span>

```js
var string = submodule.path();
```

| Returns |  |
| --- | --- |
| String |  |

## <a name="reload"></a><span>Submodule#</span>reload <span class="tags"><span class="sync">Sync</span></span>

```js
var result = submodule.reload(force);
```

| Parameters | Type |
| --- | --- | --- |
| force | Number | Force reload even if the data doesn't seem out of date |

| Returns |  |
| --- | --- |
| Number |  0 on success, 
<
0 on error |

## <a name="repoInit"></a><span>Submodule#</span>repoInit <span class="tags"><span class="async">Async</span></span>

```js
submodule.repoInit(use_gitlink).then(function(repository) {
  // Use repository
});
```

| Parameters | Type |
| --- | --- | --- |
| use_gitlink | Number | Should the workdir contain a gitlink to the repo in .git/modules vs. repo directly in workdir. |

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  |

## <a name="sync"></a><span>Submodule#</span>sync <span class="tags"><span class="async">Async</span></span>

```js
submodule.sync().then(function(result) {
  // Use result
});
```

| Returns |  |
| --- | --- |
| Number |  |

## <a name="update"></a><span>Submodule#</span>update <span class="tags"><span class="async">Async</span></span>

```js
submodule.update(init, options).then(function(number) {
  // Use number
});
```

Updates a submodule

| Parameters | Type |
| --- | --- | --- |
| init | Number | Setting this to 1 will initialize submodule before updating |
| options | [SubmoduleUpdateOptions](/api/submodule_update_options/) | Submodule update settings |

| Returns |  |
| --- | --- |
| Number | 0 on success, any non-zero return value from a callback |

## <a name="updateStrategy"></a><span>Submodule#</span>updateStrategy <span class="tags"><span class="sync">Sync</span></span>

```js
var result = submodule.updateStrategy();
```

| Returns |  |
| --- | --- |
| Number |  The current git_submodule_update_t value that will be used
         for this submodule. |

## <a name="url"></a><span>Submodule#</span>url <span class="tags"><span class="sync">Sync</span></span>

```js
var string = submodule.url();
```

| Returns |  |
| --- | --- |
| String |  |

## <a name="wdId"></a><span>Submodule#</span>wdId <span class="tags"><span class="sync">Sync</span></span>

```js
var oid = submodule.wdId();
```

| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  |

## <a name="IGNORE"></a><span>Submodule.</span>IGNORE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Submodule.IGNORE.</span>UNSPECIFIED | -1 |
| <span>Submodule.IGNORE.</span>NONE | 1 |
| <span>Submodule.IGNORE.</span>UNTRACKED | 2 |
| <span>Submodule.IGNORE.</span>DIRTY | 3 |
| <span>Submodule.IGNORE.</span>ALL | 4 |

## <a name="RECURSE"></a><span>Submodule.</span>RECURSE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Submodule.RECURSE.</span>NO | 0 |
| <span>Submodule.RECURSE.</span>YES | 1 |
| <span>Submodule.RECURSE.</span>ONDEMAND | 2 |

## <a name="STATUS"></a><span>Submodule.</span>STATUS <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Submodule.STATUS.</span>IN_HEAD | 1 |
| <span>Submodule.STATUS.</span>IN_INDEX | 2 |
| <span>Submodule.STATUS.</span>IN_CONFIG | 4 |
| <span>Submodule.STATUS.</span>IN_WD | 8 |
| <span>Submodule.STATUS.</span>INDEX_ADDED | 16 |
| <span>Submodule.STATUS.</span>INDEX_DELETED | 32 |
| <span>Submodule.STATUS.</span>INDEX_MODIFIED | 64 |
| <span>Submodule.STATUS.</span>WD_UNINITIALIZED | 128 |
| <span>Submodule.STATUS.</span>WD_ADDED | 256 |
| <span>Submodule.STATUS.</span>WD_DELETED | 512 |
| <span>Submodule.STATUS.</span>WD_MODIFIED | 1024 |
| <span>Submodule.STATUS.</span>WD_INDEX_MODIFIED | 2048 |
| <span>Submodule.STATUS.</span>WD_WD_MODIFIED | 4096 |
| <span>Submodule.STATUS.</span>WD_UNTRACKED | 8192 |

## <a name="UPDATE"></a><span>Submodule.</span>UPDATE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Submodule.UPDATE.</span>CHECKOUT | 1 |
| <span>Submodule.UPDATE.</span>REBASE | 2 |
| <span>Submodule.UPDATE.</span>MERGE | 3 |
| <span>Submodule.UPDATE.</span>NONE | 4 |
| <span>Submodule.UPDATE.</span>DEFAULT | 0 |

