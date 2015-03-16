---
layout: default
menu_item: api
title: Remote
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "create": "#create"
  "createAnonymous": "#createAnonymous"
  "createWithFetchspec": "#createWithFetchspec"
  "delete": "#delete"
  "initCallbacks": "#initCallbacks"
  "isValidName": "#isValidName"
  "list": "#list"
  "lookup": "#lookup"
  "#addFetch": "#addFetch"
  "#addPush": "#addPush"
  "#autotag": "#autotag"
  "#clearRefspecs": "#clearRefspecs"
  "#connect": "#connect"
  "#connected": "#connected"
  "#disconnect": "#disconnect"
  "#download": "#download"
  "#dup": "#dup"
  "#fetch": "#fetch"
  "#free": "#free"
  "#getCallbacks": "#getCallbacks"
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
  "#save": "#save"
  "#setAutotag": "#setAutotag"
  "#setCallbacks": "#setCallbacks"
  "#setPushurl": "#setPushurl"
  "#setUpdateFetchhead": "#setUpdateFetchhead"
  "#setUrl": "#setUrl"
  "#stats": "#stats"
  "#stop": "#stop"
  "#updateFetchhead": "#updateFetchhead"
  "#updateTips": "#updateTips"
  "#upload": "#upload"
  "#url": "#url"
  "AUTOTAG_OPTION": "#AUTOTAG_OPTION"
  "COMPLETION_TYPE": "#COMPLETION_TYPE"
---

## <a name="create"></a><span>Remote.</span>create <span class="tags"><span class="async">Async</span></span>

```js
Remote.create(repo, name, url).then(function(remote) {
  // Use remote
});
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
Remote.createAnonymous(repo, url, fetch).then(function(remote) {
  // Use remote
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | the associated repository |
| url | String | the remote repository's URL |
| fetch | String | the fetch refspec to use for this remote. |

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

## <a name="delete"></a><span>Remote.</span>delete <span class="tags"><span class="sync">Sync</span></span>

```js
var result = Remote.delete(repo, name);
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

## <a name="addFetch"></a><span>Remote#</span>addFetch <span class="tags"><span class="sync">Sync</span></span>

```js
var result = remote.addFetch(refspec);
```

| Parameters | Type |
| --- | --- | --- |
| refspec | String | the new fetch refspec |

| Returns |  |
| --- | --- |
| Number |  0 or an error value |

## <a name="addPush"></a><span>Remote#</span>addPush <span class="tags"><span class="sync">Sync</span></span>

```js
var result = remote.addPush(refspec);
```

| Parameters | Type |
| --- | --- | --- |
| refspec | String | the new push refspec |

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

## <a name="clearRefspecs"></a><span>Remote#</span>clearRefspecs <span class="tags"><span class="sync">Sync</span></span>

```js
remote.clearRefspecs();
```

## <a name="connect"></a><span>Remote#</span>connect <span class="tags"><span class="async">Async</span></span>

```js
remote.connect(direction).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| direction | Number | GIT_DIRECTION_FETCH if you want to fetch or GIT_DIRECTION_PUSH if you want to push |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="connected"></a><span>Remote#</span>connected <span class="tags"><span class="sync">Sync</span></span>

```js
var result = remote.connected();
```

| Returns |  |
| --- | --- |
| Number |  1 if it's connected, 0 otherwise. |

## <a name="disconnect"></a><span>Remote#</span>disconnect <span class="tags"><span class="async">Async</span></span>

```js
remote.disconnect().then(function() {
  // method complete});
```

## <a name="download"></a><span>Remote#</span>download <span class="tags"><span class="async">Async</span></span>

```js
remote.download(refspecs).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| refspecs | [Strarray](/api/strarray/) | the refspecs to use for this negotiation and download. Use NULL or an empty array to use the base refspecs |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

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
remote.fetch(refspecs, signature, reflog_message).then(function(result) {
  // Use result
});
```

| Parameters | Type |
| --- | --- | --- |
| refspecs | [Strarray](/api/strarray/) | the refspecs to use for this fetch. Pass NULL or an empty array to use the base refspecs. |
| signature | [Signature](/api/signature/) | The identity to use when updating reflogs |
| reflog_message | String | The message to insert into the reflogs. If NULL, the default is "fetch" |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="free"></a><span>Remote#</span>free <span class="tags"><span class="sync">Sync</span></span>

```js
remote.free();
```

## <a name="getCallbacks"></a><span>Remote#</span>getCallbacks <span class="tags"><span class="sync">Sync</span></span>

```js
var remoteCallbacks = remote.getCallbacks();
```

| Returns |  |
| --- | --- |
| [RemoteCallbacks](/api/remote_callbacks/) |  the callbacks structure |

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
var result = remote.prune();
```

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
remote.push(refSpecs, options, signature, message).then(function(number) {
  // Use number
});
```

Pushes to a remote


| Parameters | Type |
| --- | --- | --- |
| refSpecs | Array | The ref specs that should be pushed |
| options | [PushOptions](/api/push_options/) | Options for the checkout |
| signature | [Signature](/api/signature/) | The identity to use for the reflog of the updated references |
| message | String | The message to use for the update reflog messages |

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

## <a name="save"></a><span>Remote#</span>save <span class="tags"><span class="sync">Sync</span></span>

```js
var result = remote.save();
```

| Returns |  |
| --- | --- |
| Number |  0, GIT_EINVALIDSPEC or an error code |

## <a name="setAutotag"></a><span>Remote#</span>setAutotag <span class="tags"><span class="sync">Sync</span></span>

```js
remote.setAutotag(value);
```

| Parameters | Type |
| --- | --- | --- |
| value | Number | a GIT_REMOTE_DOWNLOAD_TAGS value |

## <a name="setCallbacks"></a><span>Remote#</span>setCallbacks <span class="tags"><span class="sync">Sync</span></span>

```js
var result = remote.setCallbacks(callbacks);
```

| Parameters | Type |
| --- | --- | --- |
| callbacks | [RemoteCallbacks](/api/remote_callbacks/) | a pointer to the user's callback settings |

| Returns |  |
| --- | --- |
| Number |  0 or an error code |

## <a name="setPushurl"></a><span>Remote#</span>setPushurl <span class="tags"><span class="sync">Sync</span></span>

```js
var result = remote.setPushurl(url);
```

| Parameters | Type |
| --- | --- | --- |
| url | String | the url to set or NULL to clear the pushurl |

| Returns |  |
| --- | --- |
| Number |  0 or an error value |

## <a name="setUpdateFetchhead"></a><span>Remote#</span>setUpdateFetchhead <span class="tags"><span class="sync">Sync</span></span>

```js
remote.setUpdateFetchhead(value);
```

| Parameters | Type |
| --- | --- | --- |
| value | Number | 0 to disable updating FETCH_HEAD |

## <a name="setUrl"></a><span>Remote#</span>setUrl <span class="tags"><span class="sync">Sync</span></span>

```js
var result = remote.setUrl(url);
```

| Parameters | Type |
| --- | --- | --- |
| url | String | the url to set |

| Returns |  |
| --- | --- |
| Number |  0 or an error value |

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

## <a name="updateFetchhead"></a><span>Remote#</span>updateFetchhead <span class="tags"><span class="sync">Sync</span></span>

```js
var result = remote.updateFetchhead();
```

| Returns |  |
| --- | --- |
| Number |  the update FETCH_HEAD setting |

## <a name="updateTips"></a><span>Remote#</span>updateTips <span class="tags"><span class="sync">Sync</span></span>

```js
var result = remote.updateTips(signature, reflog_message);
```

| Parameters | Type |
| --- | --- | --- |
| signature | [Signature](/api/signature/) | The identity to use when updating reflogs |
| reflog_message | String | The message to insert into the reflogs. If NULL, the default is "fetch <name>", where <name> is the name of the remote (or its url, for in-memory remotes). |

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
| opts | [PushOptions](/api/push_options/) |  |

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
| <span>Remote.AUTOTAG_OPTION.</span>DOWNLOAD_TAGS_AUTO | 0 |
| <span>Remote.AUTOTAG_OPTION.</span>DOWNLOAD_TAGS_NONE | 1 |
| <span>Remote.AUTOTAG_OPTION.</span>DOWNLOAD_TAGS_ALL | 2 |

## <a name="COMPLETION_TYPE"></a><span>Remote.</span>COMPLETION_TYPE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Remote.COMPLETION_TYPE.</span>COMPLETION_DOWNLOAD | 0 |
| <span>Remote.COMPLETION_TYPE.</span>COMPLETION_INDEXING | 1 |
| <span>Remote.COMPLETION_TYPE.</span>COMPLETION_ERROR | 2 |

