---
layout: default
menu_item: api
title: TreeEntry
description: Version 0.12.2
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "#getBlob": "#getBlob"
  "#getTree": "#getTree"
  "#isBlob": "#isBlob"
  "#isDirectory": "#isDirectory"
  "#isFile": "#isFile"
  "#isTree": "#isTree"
  "#path": "#path"
  "#sha": "#sha"
  "#toString": "#toString"
  "FILEMODE": "#FILEMODE"
  "Instance Variables": "#ivars"
---

## <a name="getBlob"></a><span>TreeEntry#</span>getBlob <span class="tags"><span class="async">Async</span></span>

```js
treeEntry.getBlob().then(function(blob) {
  // Use blob
});
```

Retrieve the tree for this entry. Make sure to call `isTree` first!

| Returns |  |
| --- | --- |
| [Blob](/api/blob/) |  |

## <a name="getTree"></a><span>TreeEntry#</span>getTree <span class="tags"><span class="async">Async</span></span>

```js
treeEntry.getTree().then(function(tree) {
  // Use tree
});
```

Retrieve the tree for this entry. Make sure to call `isTree` first!

| Returns |  |
| --- | --- |
| [Tree](/api/tree/) |  |

## <a name="isBlob"></a><span>TreeEntry#</span>isBlob <span class="tags"><span class="sync">Sync</span></span>

```js
var boolean = treeEntry.isBlob();
```

Is this TreeEntry a blob? Alias for `isFile`

| Returns |  |
| --- | --- |
| Boolean |  |

## <a name="isDirectory"></a><span>TreeEntry#</span>isDirectory <span class="tags"><span class="sync">Sync</span></span>

```js
var boolean = treeEntry.isDirectory();
```

Is this TreeEntry a directory? Alias for `isTree`

| Returns |  |
| --- | --- |
| Boolean |  |

## <a name="isFile"></a><span>TreeEntry#</span>isFile <span class="tags"><span class="sync">Sync</span></span>

```js
var boolean = treeEntry.isFile();
```

Is this TreeEntry a blob? (i.e., a file)

| Returns |  |
| --- | --- |
| Boolean |  |

## <a name="isTree"></a><span>TreeEntry#</span>isTree <span class="tags"><span class="sync">Sync</span></span>

```js
var boolean = treeEntry.isTree();
```

Is this TreeEntry a tree? (i.e., a directory)

| Returns |  |
| --- | --- |
| Boolean |  |

## <a name="path"></a><span>TreeEntry#</span>path <span class="tags"><span class="sync">Sync</span></span>

```js
var string = treeEntry.path();
```

Returns the path for this entry.

| Returns |  |
| --- | --- |
| String |  |

## <a name="sha"></a><span>TreeEntry#</span>sha <span class="tags"><span class="sync">Sync</span></span>

```js
var string = treeEntry.sha();
```

Retrieve the SHA for this TreeEntry.

| Returns |  |
| --- | --- |
| String |  |

## <a name="toString"></a><span>TreeEntry#</span>toString <span class="tags"><span class="sync">Sync</span></span>

```js
treeEntry.toString();
```

Alias for `path`

## <a name="FILEMODE"></a><span>TreeEntry.</span>FILEMODE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>TreeEntry.FILEMODE.</span>UNREADABLE | 0 |
| <span>TreeEntry.FILEMODE.</span>TREE | 16384 |
| <span>TreeEntry.FILEMODE.</span>BLOB | 33188 |
| <span>TreeEntry.FILEMODE.</span>EXECUTABLE | 33261 |
| <span>TreeEntry.FILEMODE.</span>LINK | 40960 |
| <span>TreeEntry.FILEMODE.</span>COMMIT | 57344 |

## <a name="ivars"></a>Instance Variables

| Variable | Type |
| --- | --- |
| <a name="attr"></a>attr | Number |
| <a name="filename"></a>filename | String |
| <a name="filenameLen"></a>filenameLen | Number |
| <a name="oid"></a>oid | Oid |

