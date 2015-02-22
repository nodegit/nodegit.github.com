---
layout: default
menu_item: api
title: Note
description: Version 0.3.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "read": "#read"
  "#author": "#author"
  "#committer": "#committer"
  "#id": "#id"
  "#message": "#message"
---

## <a name="read"></a><span>Note.</span>read <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span>

```js
Note.read(repo, notes_ref, oid).then(function(note) {
  // Use note
});
```

| Parameters | Type |   |
| --- | --- | --- |
| repo | [Repository](/api/repository/) | repository where to look up the note |
| notes_ref | String | canonical name of the reference to use (optional); defaults to "refs/notes/commits" |
| oid | [Oid](/api/oid/) | OID of the git object to read the note from |

| Returns |  |
| --- | --- |
| [Note](/api/note/) | pointer to the read note; NULL in case of error |

## <a name="author"></a><span>Note#</span>author <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var signature = note.author();
```


| Returns |  |
| --- | --- |
| [Signature](/api/signature/) |  the author |

## <a name="committer"></a><span>Note#</span>committer <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var signature = note.committer();
```


| Returns |  |
| --- | --- |
| [Signature](/api/signature/) |  the committer |

## <a name="id"></a><span>Note#</span>id <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var oid = note.id();
```


| Returns |  |
| --- | --- |
| [Oid](/api/oid/) |  the note object's id |

## <a name="message"></a><span>Note#</span>message <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span>

```js
var string = note.message();
```


| Returns |  |
| --- | --- |
| String |  the note message |

