---
layout: default
menu_item: api
title: ConvenientLine
description: Version 0.9.0
menu_item: api
return_to:
  "API Documentation Index": /api/
sections:
  "#content": "#content"
  "#contentLen": "#contentLen"
  "#contentOffset": "#contentOffset"
  "#newLineno": "#newLineno"
  "#numLines": "#numLines"
  "#oldLineno": "#oldLineno"
  "#origin": "#origin"
  "#rawContent": "#rawContent"
---

## <a name="content"></a><span>ConvenientLine#</span>content <span class="tags"><span class="sync">Sync</span></span>

```js
var string = convenientLine.content();
```

The relevant line

| Returns |  |
| --- | --- |
| String |  |

## <a name="contentLen"></a><span>ConvenientLine#</span>contentLen <span class="tags"><span class="sync">Sync</span></span>

```js
var number = convenientLine.contentLen();
```

Number of bytes in the string

| Returns |  |
| --- | --- |
| Number |  |

## <a name="contentOffset"></a><span>ConvenientLine#</span>contentOffset <span class="tags"><span class="sync">Sync</span></span>

```js
var number = convenientLine.contentOffset();
```

Offset in the original file to the content

| Returns |  |
| --- | --- |
| Number |  |

## <a name="newLineno"></a><span>ConvenientLine#</span>newLineno <span class="tags"><span class="sync">Sync</span></span>

```js
var number = convenientLine.newLineno();
```

Line number in new file or -1 for deleted line

| Returns |  |
| --- | --- |
| Number |  |

## <a name="numLines"></a><span>ConvenientLine#</span>numLines <span class="tags"><span class="sync">Sync</span></span>

```js
var number = convenientLine.numLines();
```

Number of newline characters in content

| Returns |  |
| --- | --- |
| Number |  |

## <a name="oldLineno"></a><span>ConvenientLine#</span>oldLineno <span class="tags"><span class="sync">Sync</span></span>

```js
var number = convenientLine.oldLineno();
```

Line number in old file or -1 for added line

| Returns |  |
| --- | --- |
| Number |  |

## <a name="origin"></a><span>ConvenientLine#</span>origin <span class="tags"><span class="sync">Sync</span></span>

```js
var diffLine = convenientLine.origin();
```

The type of the line (context, addition, deletion, etc...)

| Returns |  |
| --- | --- |
| [Diff.LINE](/api/diff/#LINE) |  |

## <a name="rawContent"></a><span>ConvenientLine#</span>rawContent <span class="tags"><span class="sync">Sync</span></span>

```js
var string = convenientLine.rawContent();
```

Pointer to diff text, not NUL-byte terminated

| Returns |  |
| --- | --- |
| String |  |

