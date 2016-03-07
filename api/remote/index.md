---
layout: default
menu_item: api
title: Remote
description: Version 0.11.8
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "addFetch": "#addFetch"
  "addPush": "#addPush"
  "create": "#create"
  "createAnonymous": "#createAnonymous"
  "createWithFetchspec": "#createWithFetchspec"
  "delete": "#delete"
  "initCallbacks": "#initCallbacks"
  "isValidName": "#isValidName"
  "list": "#list"
  "lookup": "#lookup"
  "setAutotag": "#setAutotag"
  "setPushurl": "#setPushurl"
  "setUrl": "#setUrl"
  "#autotag": "#autotag"
  "#connect": "#connect"
  "#connected": "#connected"
  "#defaultBranch": "#defaultBranch"
  "#disconnect": "#disconnect"
  "#download": "#download"
  "#dup": "#dup"
  "#fetch": "#fetch"
  "#free": "#free"
  "#getFetchRefspecs": "#getFetchRefspecs"
  "#getPushRefspecs": "#getPushRefspecs"
  "#getRefspec": "#getRefspec"
  "#name": "#name"
  "#owner": "#owner"
  "#prune": "#prune"
  "#pruneRefs": "#pruneRefs"
  "#push": "#push"
  "#pushurl": "#pushurl"
  "#refspecCount": "#refspecCount"
  "#stats": "#stats"
  "#stop": "#stop"
  "#updateTips": "#updateTips"
  "#upload": "#upload"
  "#url": "#url"
  "AUTOTAG_OPTION": "#AUTOTAG_OPTION"
  "COMPLETION_TYPE": "#COMPLETION_TYPE"
---

## <a name="addFetch"></a><span>Remote.</span>addFetch <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Remote.addFetch(repo, remote, refspec);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository in which to change the configuration |
| remote | String | the name of the remote to change |
| refspec | String | the new fetch refspec |

| Returns |  |
| --- | --- |
| Number |  0, GIT_EINVALIDSPEC if refspec is invalid or an error value |

## <a name="addPush"></a><span>Remote.</span>addPush <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Remote.addPush(repo, remote, refspec);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository in which to change the configuration |
| remote | String | the name of the remote to change |
| refspec | String | the new push refspec |

| Returns |  |
| --- | --- |
| Number |  0, GIT_EINVALIDSPEC if refspec is invalid or an error value |

## <a name="create"></a><span>Remote.</span>create <span class="tags"><span class="sync">Sync</span></span>

```js
var remote = Remote.create(repo, name, url);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository in which to create the remote |
| name | String | the remote's name |
| url | String | the remote's url |

| Returns |  |
| --- | --- |
| [Remote](/api/remote/) | the resulting remote |

## <a name="createAnonymous"></a><span>Remote.</span>createAnonymous <span class="tags"><span class="async">Async</span></span>

```js
Remote.createAnonymous(repo, url).then(function(remote) {
  // Use remote
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the associated repository |
| url | String | the remote repository's URL |

| Returns |  |
| --- | --- |
| [Remote](/api/remote/) |  |

## <a name="createWithFetchspec"></a><span>Remote.</span>createWithFetchspec <span class="tags"><span class="async">Async</span></span>

```js
Remote.createWithFetchspec(repo, name, url, fetch).then(function(remote) {
  // Use remote
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository in which to create the remote |
| name | String | the remote's name |
| url | String | the remote's url |
| fetch | String | the remote fetch value |

| Returns |  |
| --- | --- |
| [Remote](/api/remote/) | the resulting remote |

## <a name="delete"></a><span>Remote.</span>delete <span class="tags"><span class="async">Async</span></span>

```js
Remote.delete(repo, name).then(function(result) {
  // Use result
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository in which to act |
| name | String | the name of the remove to delete |

| Returns |  |
| --- | --- |
| Number |  0 on success, or an error code. |

## <a name="initCallbacks"></a><span>Remote.</span>initCallbacks <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Remote.initCallbacks(opts, version);
```

| Parameters | Type |   |
| --- | --- | --- |
| opts | [RemoteCallbacks](/api/remote_callbacks/) | the `git_remote_callbacks` struct to initialize |
| version | Number | Version of struct; pass `GIT_REMOTE_CALLBACKS_VERSION` |

| Returns |  |
| --- | --- |
| Number |  Zero on success; -1 on failure. |

## <a name="isValidName"></a><span>Remote.</span>isValidName <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Remote.isValidName(remote_name);
```

| Parameters | Type |   |
| --- | --- | --- |
| remote_name | String | name to be checked. |

| Returns |  |
| --- | --- |
| Number |  1 if the reference name is acceptable; 0 if it isn't |

## <a name="list"></a><span>Remote.</span>list <span class="tags"><span class="async">Async</span></span>

```js
Remote.list(repo).then(function(array) {
  // Use array
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository to query |

| Returns |  |
| --- | --- |
| Array | a string array which receives the names of the remotes |

## <a name="lookup"></a><span>Remote.</span>lookup <span class="tags"><span class="async">Async</span></span>

```js
Remote.lookup(repo, name, callback).then(function(remote) {
  // Use remote
});
```

Retrieves the remote by name

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | The repo that the remote lives in |
| name | String, [Remote](/api/remote/) | The remote to lookup |
| callback | Function |  |

| Returns |  |
| --- | --- |
| [Remote](/api/remote/) |  |

## <a name="setAutotag"></a><span>Remote.</span>setAutotag <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Remote.setAutotag(repo, remote, value);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository in which to make the change |
| remote | String | the name of the remote |
| value | Number | the new value to take. |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="setPushurl"></a><span>Remote.</span>setPushurl <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Remote.setPushurl(repo, remote, url);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository in which to perform the change |
| remote | String | the remote's name |
| url | String | the url to set |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="setUrl"></a><span>Remote.</span>setUrl <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Remote.setUrl(repo, remote, url);
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the repository in which to perform the change |
| remote | String | the remote's name |
| url | String | the url to set |

| Returns |  |
| --- | --- |
| Number |  0 or an error value |

## <a name="autotag"></a><span>Remote#</span>autotag <span class="tags"><span class="sync">Sync</span></span>

```js
var result = remote.autotag();
```

| Returns |  |
| --- | --- |
| Number |  the auto-follow setting |

## <a name="connect"></a><span>Remote#</span>connect <span class="tags"><span class="async">Async</span></span>

```js
remote.connect(direction, callbacks, callback).then(function(number) {
  // Use number
});
```

Connects to a remote

| Parameters | Type |
| --- | --- | --- |
| direction | [Enums.DIRECTION](/api/enums/#DIRECTION) | The direction for the connection |
| callbacks | [RemoteCallbacks](/api/remote_callbacks/) | The callback functions for the connection |
| callback | Function |  |

| Returns |  |
| --- | --- |
| Number | error code |

## <a name="connected"></a><span>Remote#</span>connected <span class="tags"><span class="sync">Sync</span></span>

```js
var result = remote.connected();
```

| Returns |  |
| --- | --- |
| Number |  1 if it's connected, 0 otherwise. |

## <a name="defaultBranch"></a><span>Remote#</span>defaultBranch <span class="tags"><span class="async">Async</span></span>

```js
remote.defaultBranch().then(function(buf) {
  // Use buf
});
```

| Returns |  |
| --- | --- |
| [Buf](/api/buf/) | the buffern in which to store the reference name |

## <a name="disconnect"></a><span>Remote#</span>disconnect <span class="tags"><span class="async">Async</span></span>

```js
remote.disconnect().then(function() {
  // method complete});
```

## <a name="download"></a><span>Remote#</span>download <span class="tags"><span class="async">Async</span></span>

```js
remote.download(refSpecs, opts, callback).then(function(number) {
  // Use number
});
```

Connects to a remote

| Parameters | Type |
| --- | --- | --- |
| refSpecs | Array | The ref specs that should be pushed |
| opts | [FetchOptions](/api/fetch_options/) | The fetch options for download, contains callbacks |
| callback | Function |  |

| Returns |  |
| --- | --- |
| Number | error code |

## <a name="dup"></a><span>Remote#</span>dup <span class="tags"><span class="async">Async</span></span>

```js
remote.dup().then(function(remote) {
  // Use remote
});
```

| Returns |  |
| --- | --- |
| [Remote](/api/remote/) | the copy |

## <a name="fetch"></a><span>Remote#</span>fetch <span class="tags"><span class="async">Async</span></span>

```js
remote.fetch(refSpecs, opts, message, callback).then(function(number) {
  // Use number
});
```

Connects to a remote

| Parameters | Type |
| --- | --- | --- |
| refSpecs | Array | The ref specs that should be pushed |
| opts | [FetchOptions](/api/fetch_options/) | The fetch options for download, contains callbacks |
| message | String | The message to use for the update reflog messages |
| callback | Function |  |

| Returns |  |
| --- | --- |
| Number | error code |

## <a name="free"></a><span>Remote#</span>free <span class="tags"><span class="sync">Sync</span></span>

```js
remote.free();
```

## <a name="getFetchRefspecs"></a><span>Remote#</span>getFetchRefspecs <span class="tags"><span class="async">Async</span></span>

```js
remote.getFetchRefspecs().then(function(array) {
  // Use array
});
```

| Returns |  |
| --- | --- |
| Array |  |

## <a name="getPushRefspecs"></a><span>Remote#</span>getPushRefspecs <span class="tags"><span class="async">Async</span></span>

```js
remote.getPushRefspecs().then(function(array) {
  // Use array
});
```

| Returns |  |
| --- | --- |
| Array |  |

## <a name="getRefspec"></a><span>Remote#</span>getRefspec <span class="tags"><span class="sync">Sync</span></span>

```js
var refspec = remote.getRefspec(n);
```

| Parameters | Type |
| --- | --- | --- |
| n | Number | the refspec to get |

| Returns |  |
| --- | --- |
| [Refspec](/api/refspec/) |  the nth refspec |

## <a name="name"></a><span>Remote#</span>name <span class="tags"><span class="sync">Sync</span></span>

```js
var string = remote.name();
```

| Returns |  |
| --- | --- |
| String |  the name or NULL for in-memory remotes |

## <a name="owner"></a><span>Remote#</span>owner <span class="tags"><span class="sync">Sync</span></span>

```js
var repository = remote.owner();
```

| Returns |  |
| --- | --- |
| [Repository](/api/repository/) |  the repository |

## <a name="prune"></a><span>Remote#</span>prune <span class="tags"><span class="sync">Sync</span></span>

```js
var result = remote.prune(callbacks);
```

| Parameters | Type |
| --- | --- | --- |
| callbacks | [RemoteCallbacks](/api/remote_callbacks/) | callbacks to use for this prune |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="pruneRefs"></a><span>Remote#</span>pruneRefs <span class="tags"><span class="sync">Sync</span></span>

```js
var result = remote.pruneRefs();
```

| Returns |  |
| --- | --- |
| Number |  the ref-prune setting |

## <a name="push"></a><span>Remote#</span>push <span class="tags"><span class="async">Async</span></span>

```js
remote.push(refSpecs, options, callback).then(function(number) {
  // Use number
});
```

Pushes to a remote

| Parameters | Type |
| --- | --- | --- |
| refSpecs | Array | The ref specs that should be pushed |
| options | [PushOptions](/api/push_options/) | Options for the checkout |
| callback | Function |  |

| Returns |  |
| --- | --- |
| Number | error code |

## <a name="pushurl"></a><span>Remote#</span>pushurl <span class="tags"><span class="sync">Sync</span></span>

```js
var string = remote.pushurl();
```

| Returns |  |
| --- | --- |
| String |  the url or NULL if no special url for pushing is set |

## <a name="refspecCount"></a><span>Remote#</span>refspecCount <span class="tags"><span class="sync">Sync</span></span>

```js
var result = remote.refspecCount();
```

| Returns |  |
| --- | --- |
| Number |  the amount of refspecs configured in this remote |

## <a name="stats"></a><span>Remote#</span>stats <span class="tags"><span class="sync">Sync</span></span>

```js
var transferProgress = remote.stats();
```

| Returns |  |
| --- | --- |
| [TransferProgress](/api/transfer_progress/) |  |

## <a name="stop"></a><span>Remote#</span>stop <span class="tags"><span class="sync">Sync</span></span>

```js
remote.stop();
```

## <a name="updateTips"></a><span>Remote#</span>updateTips <span class="tags"><span class="sync">Sync</span></span>

```js
var result = remote.updateTips(callbacks, update_fetchhead, download_tags, reflog_message);
```

| Parameters | Type |
| --- | --- | --- |
| callbacks | [RemoteCallbacks](/api/remote_callbacks/) | pointer to the callback structure to use |
| update_fetchhead | Number | whether to write to FETCH_HEAD. Pass 1 to behave like git. |
| download_tags | Number | what the behaviour for downloading tags is for this fetch. This is ignored for push. This must be the same value passed to `git_remote_download()`. |
| reflog_message | String | The message to insert into the reflogs. If NULL and fetching, the default is "fetch <name>", where <name> is the name of the remote (or its url, for in-memory remotes). This parameter is ignored when pushing. |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="upload"></a><span>Remote#</span>upload <span class="tags"><span class="sync">Sync</span></span>

```js
var result = remote.upload(refspecs, opts);
```

| Parameters | Type |
| --- | --- | --- |
| refspecs | [Strarray](/api/strarray/) | the refspecs to use for this negotiation and upload. Use NULL or an empty array to use the base refspecs |
| opts | [PushOptions](/api/push_options/) | the options to use for this push |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="url"></a><span>Remote#</span>url <span class="tags"><span class="sync">Sync</span></span>

```js
var string = remote.url();
```

| Returns |  |
| --- | --- |
| String |  the url |

## <a name="AUTOTAG_OPTION"></a><span>Remote.</span>AUTOTAG_OPTION <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Remote.AUTOTAG_OPTION.</span>DOWNLOAD_TAGS_UNSPECIFIED | 0 |
| <span>Remote.AUTOTAG_OPTION.</span>DOWNLOAD_TAGS_AUTO | 1 |
| <span>Remote.AUTOTAG_OPTION.</span>DOWNLOAD_TAGS_NONE | 2 |
| <span>Remote.AUTOTAG_OPTION.</span>DOWNLOAD_TAGS_ALL | 3 |

## <a name="COMPLETION_TYPE"></a><span>Remote.</span>COMPLETION_TYPE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Remote.COMPLETION_TYPE.</span>COMPLETION_DOWNLOAD | 0 |
| <span>Remote.COMPLETION_TYPE.</span>COMPLETION_INDEXING | 1 |
| <span>Remote.COMPLETION_TYPE.</span>COMPLETION_ERROR | 2 |

