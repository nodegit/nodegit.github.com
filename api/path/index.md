---
layout: default
menu_item: api
title: Path
description: Version 0.24.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "isGitfile": "#isGitfile"
  "FS": "#FS"
  "GITFILE": "#GITFILE"
---

## <a name="isGitfile"></a><span>Path.</span>isGitfile <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var result = Path.isGitfile(path, pathlen, gitfile, fs);
```

| Parameters | Type |   |
| --- | --- | --- |
| path | String |  |
| pathlen | Number |  |
| gitfile | Number |  |
| fs | Number |  |

| Returns |  |
| --- | --- |
| Number |  |

## <a name="FS"></a><span>Path.</span>FS <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Path.FS.</span>GENERIC | 0 |
| <span>Path.FS.</span>NTFS | 1 |
| <span>Path.FS.</span>HFS | 2 |

## <a name="GITFILE"></a><span>Path.</span>GITFILE <span class="tags"><span class="enum">ENUM</span></span>

| Flag | Value |
| --- | --- | --- |
| <span>Path.GITFILE.</span>GITIGNORE | 0 |
| <span>Path.GITFILE.</span>GITMODULES | 1 |
| <span>Path.GITFILE.</span>GITATTRIBUTES | 1 |

