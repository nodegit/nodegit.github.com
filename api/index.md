---
layout: default
menu_item: api
title: API Docs
description: Version 0.25.0
menu_item: api
sections:
  "AnnotatedCommit": "#AnnotatedCommit"
  "Apply": "#Apply"
  "ApplyOptions": "#ApplyOptions"
  "Attr": "#Attr"
  "Blame": "#Blame"
  "BlameHunk": "#BlameHunk"
  "BlameOptions": "#BlameOptions"
  "Blob": "#Blob"
  "Branch": "#Branch"
  "Buf": "#Buf"
  "Cert": "#Cert"
  "CertHostkey": "#CertHostkey"
  "CertX509": "#CertX509"
  "Checkout": "#Checkout"
  "CheckoutOptions": "#CheckoutOptions"
  "CheckoutPerfdata": "#CheckoutPerfdata"
  "Cherrypick": "#Cherrypick"
  "CherrypickOptions": "#CherrypickOptions"
  "Clone": "#Clone"
  "CloneOptions": "#CloneOptions"
  "Commit": "#Commit"
  "Config": "#Config"
  "ConfigEntry": "#ConfigEntry"
  "ConfigIterator": "#ConfigIterator"
  "Configmap": "#Configmap"
  "ConvenientPatch": "#ConvenientPatch"
  "Cred": "#Cred"
  "DescribeFormatOptions": "#DescribeFormatOptions"
  "DescribeOptions": "#DescribeOptions"
  "Diff": "#Diff"
  "DiffBinary": "#DiffBinary"
  "DiffBinaryFile": "#DiffBinaryFile"
  "DiffDelta": "#DiffDelta"
  "DiffFile": "#DiffFile"
  "DiffFindOptions": "#DiffFindOptions"
  "DiffHunk": "#DiffHunk"
  "DiffLine": "#DiffLine"
  "DiffOptions": "#DiffOptions"
  "DiffPatchidOptions": "#DiffPatchidOptions"
  "DiffPerfdata": "#DiffPerfdata"
  "DiffStats": "#DiffStats"
  "Enums": "#Enums"
  "Error": "#Error"
  "Fetch": "#Fetch"
  "FetchOptions": "#FetchOptions"
  "Filter": "#Filter"
  "FilterList": "#FilterList"
  "FilterSource": "#FilterSource"
  "Graph": "#Graph"
  "Hashsig": "#Hashsig"
  "Ignore": "#Ignore"
  "Index": "#Index"
  "IndexConflictIterator": "#IndexConflictIterator"
  "IndexEntry": "#IndexEntry"
  "IndexIterator": "#IndexIterator"
  "IndexNameEntry": "#IndexNameEntry"
  "IndexReucEntry": "#IndexReucEntry"
  "IndexTime": "#IndexTime"
  "IndexerProgress": "#IndexerProgress"
  "Libgit2": "#Libgit2"
  "Mailmap": "#Mailmap"
  "Merge": "#Merge"
  "MergeFileInput": "#MergeFileInput"
  "MergeFileOptions": "#MergeFileOptions"
  "MergeOptions": "#MergeOptions"
  "Note": "#Note"
  "Object": "#Object"
  "Odb": "#Odb"
  "OdbObject": "#OdbObject"
  "Oid": "#Oid"
  "OidShorten": "#OidShorten"
  "Oidarray": "#Oidarray"
  "Packbuilder": "#Packbuilder"
  "Patch": "#Patch"
  "Path": "#Path"
  "Pathspec": "#Pathspec"
  "PathspecMatchList": "#PathspecMatchList"
  "Proxy": "#Proxy"
  "ProxyOptions": "#ProxyOptions"
  "PushOptions": "#PushOptions"
  "PushUpdate": "#PushUpdate"
  "Rebase": "#Rebase"
  "RebaseOperation": "#RebaseOperation"
  "RebaseOptions": "#RebaseOptions"
  "Refdb": "#Refdb"
  "Reference": "#Reference"
  "Reflog": "#Reflog"
  "ReflogEntry": "#ReflogEntry"
  "Refspec": "#Refspec"
  "Remote": "#Remote"
  "RemoteCallbacks": "#RemoteCallbacks"
  "RemoteCreateOptions": "#RemoteCreateOptions"
  "RemoteHead": "#RemoteHead"
  "Repository": "#Repository"
  "RepositoryInitOptions": "#RepositoryInitOptions"
  "Reset": "#Reset"
  "Revert": "#Revert"
  "RevertOptions": "#RevertOptions"
  "Revparse": "#Revparse"
  "Revwalk": "#Revwalk"
  "Signature": "#Signature"
  "Stash": "#Stash"
  "StashApplyOptions": "#StashApplyOptions"
  "Status": "#Status"
  "StatusEntry": "#StatusEntry"
  "StatusList": "#StatusList"
  "StatusOptions": "#StatusOptions"
  "Strarray": "#Strarray"
  "Submodule": "#Submodule"
  "SubmoduleUpdateOptions": "#SubmoduleUpdateOptions"
  "Tag": "#Tag"
  "Time": "#Time"
  "Trace": "#Trace"
  "Transaction": "#Transaction"
  "Tree": "#Tree"
  "TreeEntry": "#TreeEntry"
  "TreeUpdate": "#TreeUpdate"
  "Treebuilder": "#Treebuilder"
  "Worktree": "#Worktree"
  "WorktreeAddOptions": "#WorktreeAddOptions"
  "WorktreePruneOptions": "#WorktreePruneOptions"
---

## <a name='AnnotatedCommit'></a>[AnnotatedCommit](/api/annotated_commit/)

| Class Methods |  |
| --- | ---: |
| [<span>AnnotatedCommit.</span>fromFetchhead <span>(repo, branch_name, remote_url, id)</span>](/api/annotated_commit/#fromFetchhead) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>AnnotatedCommit.</span>fromRef <span>(repo, ref)</span>](/api/annotated_commit/#fromRef) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>AnnotatedCommit.</span>fromRevspec <span>(repo, revspec)</span>](/api/annotated_commit/#fromRevspec) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>AnnotatedCommit.</span>lookup <span>(repo, id)</span>](/api/annotated_commit/#lookup) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>AnnotatedCommit#</span>id <span>()</span>](/api/annotated_commit/#id) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>AnnotatedCommit#</span>ref <span>()</span>](/api/annotated_commit/#ref) |  <span class="tags"><span class="sync">Sync</span></span> |


## <a name='Apply'></a>[Apply](/api/apply/)

| Class Methods |  |
| --- | ---: |
| [<span>Apply.</span>apply <span>(repo, diff, location, options)</span>](/api/apply/#apply) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Apply.</span>toTree <span>(repo, preimage, diff, options)</span>](/api/apply/#toTree) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Apply.</span>LOCATION](/api/apply/#LOCATION)|  |


## <a name='ApplyOptions'></a>[ApplyOptions](/api/apply_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>ApplyOptions#</span>deltaCb](/api/apply_options/#deltaCb) |  |
| [<span>ApplyOptions#</span>hunkCb](/api/apply_options/#hunkCb) |  |
| [<span>ApplyOptions#</span>payload](/api/apply_options/#payload) |  |
| [<span>ApplyOptions#</span>version](/api/apply_options/#version) |  |


## <a name='Attr'></a>[Attr](/api/attr/)

| Class Methods |  |
| --- | ---: |
| [<span>Attr.</span>addMacro <span>(repo, name, values)</span>](/api/attr/#addMacro) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Attr.</span>cacheFlush <span>(repo)</span>](/api/attr/#cacheFlush) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Attr.</span>get <span>(repo, flags, path, name)</span>](/api/attr/#get) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Attr.</span>getMany <span>(repo, flags, path, num_attr, names)</span>](/api/attr/#getMany) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Attr.</span>value <span>(attr)</span>](/api/attr/#value) |  <span class="tags"><span class="sync">Sync</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Attr.</span>VALUE](/api/attr/#VALUE)|  |


## <a name='Blame'></a>[Blame](/api/blame/)

| Class Methods |  |
| --- | ---: |
| [<span>Blame.</span>file <span>(repo, path, [options])</span>](/api/blame/#file) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Blame#</span>buffer <span>(buffer, buffer_len)</span>](/api/blame/#buffer) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Blame#</span>getHunkByIndex <span>(index)</span>](/api/blame/#getHunkByIndex) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Blame#</span>getHunkByLine <span>(lineno)</span>](/api/blame/#getHunkByLine) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Blame#</span>getHunkCount <span>()</span>](/api/blame/#getHunkCount) |  <span class="tags"><span class="sync">Sync</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Blame.</span>FLAG](/api/blame/#FLAG)|  |


## <a name='BlameHunk'></a>[BlameHunk](/api/blame_hunk/)

| Instance Variables |  |
| --- | ---: |
| [<span>BlameHunk#</span>finalCommitId](/api/blame_hunk/#finalCommitId) |  |
| [<span>BlameHunk#</span>finalSignature](/api/blame_hunk/#finalSignature) |  |
| [<span>BlameHunk#</span>finalStartLineNumber](/api/blame_hunk/#finalStartLineNumber) |  |
| [<span>BlameHunk#</span>linesInHunk](/api/blame_hunk/#linesInHunk) |  |
| [<span>BlameHunk#</span>origCommitId](/api/blame_hunk/#origCommitId) |  |
| [<span>BlameHunk#</span>origPath](/api/blame_hunk/#origPath) |  |
| [<span>BlameHunk#</span>origSignature](/api/blame_hunk/#origSignature) |  |
| [<span>BlameHunk#</span>origStartLineNumber](/api/blame_hunk/#origStartLineNumber) |  |


## <a name='BlameOptions'></a>[BlameOptions](/api/blame_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>BlameOptions#</span>flags](/api/blame_options/#flags) |  |
| [<span>BlameOptions#</span>maxLine](/api/blame_options/#maxLine) |  |
| [<span>BlameOptions#</span>minLine](/api/blame_options/#minLine) |  |
| [<span>BlameOptions#</span>minMatchCharacters](/api/blame_options/#minMatchCharacters) |  |
| [<span>BlameOptions#</span>newestCommit](/api/blame_options/#newestCommit) |  |
| [<span>BlameOptions#</span>oldestCommit](/api/blame_options/#oldestCommit) |  |
| [<span>BlameOptions#</span>version](/api/blame_options/#version) |  |


## <a name='Blob'></a>[Blob](/api/blob/)

| Class Methods |  |
| --- | ---: |
| [<span>Blob.</span>createFromBuffer <span>(repo, buffer, len)</span>](/api/blob/#createFromBuffer) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Blob.</span>createFromDisk <span>(repo, path)</span>](/api/blob/#createFromDisk) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Blob.</span>createFromWorkdir <span>(repo, relative_path)</span>](/api/blob/#createFromWorkdir) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Blob.</span>filteredContent <span>(blob, as_path, check_for_binary_data)</span>](/api/blob/#filteredContent) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Blob.</span>lookup <span>(repo, id)</span>](/api/blob/#lookup) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Blob.</span>lookupPrefix <span>(repo, id, len)</span>](/api/blob/#lookupPrefix) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Blob#</span>content <span>()</span>](/api/blob/#content) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Blob#</span>dup <span>()</span>](/api/blob/#dup) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Blob#</span>filemode <span>()</span>](/api/blob/#filemode) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Blob#</span>id <span>()</span>](/api/blob/#id) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Blob#</span>isBinary <span>()</span>](/api/blob/#isBinary) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Blob#</span>owner <span>()</span>](/api/blob/#owner) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Blob#</span>rawcontent <span>()</span>](/api/blob/#rawcontent) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Blob#</span>rawsize <span>()</span>](/api/blob/#rawsize) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Blob#</span>toString <span>()</span>](/api/blob/#toString) |  <span class="tags"><span class="sync">Sync</span></span> |


## <a name='Branch'></a>[Branch](/api/branch/)

| Class Methods |  |
| --- | ---: |
| [<span>Branch.</span>create <span>(repo, branch_name, target, force)</span>](/api/branch/#create) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Branch.</span>createFromAnnotated <span>(repository, branch_name, commit, force)</span>](/api/branch/#createFromAnnotated) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Branch.</span>delete <span>(branch)</span>](/api/branch/#delete) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Branch.</span>isCheckedOut <span>(branch)</span>](/api/branch/#isCheckedOut) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Branch.</span>isHead <span>(branch)</span>](/api/branch/#isHead) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Branch.</span>lookup <span>(repo, branch_name, branch_type)</span>](/api/branch/#lookup) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Branch.</span>move <span>(branch, new_branch_name, force)</span>](/api/branch/#move) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Branch.</span>name <span>(ref)</span>](/api/branch/#name) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Branch.</span>remoteName <span>(repo, the)</span>](/api/branch/#remoteName) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Branch.</span>setUpstream <span>(branch, upstream_name)</span>](/api/branch/#setUpstream) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Branch.</span>upstream <span>(branch)</span>](/api/branch/#upstream) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Branch.</span>upstreamName <span>(repo, refname)</span>](/api/branch/#upstreamName) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Branch.</span>upstreamRemote <span>(buf, repo, refname)</span>](/api/branch/#upstreamRemote) |  <span class="tags"><span class="sync">Sync</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Branch.</span>BRANCH](/api/branch/#BRANCH)|  |



## <a name='Buf'></a>[Buf](/api/buf/)

| Instance Methods |  |
| --- | ---: |
| [<span>Buf#</span>containsNul <span>()</span>](/api/buf/#containsNul) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Buf#</span>dispose <span>()</span>](/api/buf/#dispose) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Buf#</span>grow <span>(target_size)</span>](/api/buf/#grow) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Buf#</span>isBinary <span>()</span>](/api/buf/#isBinary) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Buf#</span>set <span>(data, datalen)</span>](/api/buf/#set) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Buf#</span>setString <span>(The)</span>](/api/buf/#setString) |  <span class="tags"><span class="sync">Sync</span></span> |

| Instance Variables |  |
| --- | ---: |
| [<span>Buf#</span>asize](/api/buf/#asize) |  |
| [<span>Buf#</span>ptr](/api/buf/#ptr) |  |
| [<span>Buf#</span>size](/api/buf/#size) |  |


## <a name='Cert'></a>[Cert](/api/cert/)

| ENUMS |  |
| --- | ---: |
| [<span>Cert.</span>SSH](/api/cert/#SSH)|  |
| [<span>Cert.</span>TYPE](/api/cert/#TYPE)|  |

| Instance Variables |  |
| --- | ---: |
| [<span>Cert#</span>certType](/api/cert/#certType) |  |


## <a name='CertHostkey'></a>[CertHostkey](/api/cert_hostkey/)

| Instance Variables |  |
| --- | ---: |
| [<span>CertHostkey#</span>hashMd5](/api/cert_hostkey/#hashMd5) |  |
| [<span>CertHostkey#</span>hashSha1](/api/cert_hostkey/#hashSha1) |  |
| [<span>CertHostkey#</span>parent](/api/cert_hostkey/#parent) |  |
| [<span>CertHostkey#</span>type](/api/cert_hostkey/#type) |  |


## <a name='CertX509'></a>[CertX509](/api/cert_x509/)

| Instance Variables |  |
| --- | ---: |
| [<span>CertX509#</span>data](/api/cert_x509/#data) |  |
| [<span>CertX509#</span>len](/api/cert_x509/#len) |  |
| [<span>CertX509#</span>parent](/api/cert_x509/#parent) |  |


## <a name='Checkout'></a>[Checkout](/api/checkout/)

| Class Methods |  |
| --- | ---: |
| [<span>Checkout.</span>head <span>(repo, [options])</span>](/api/checkout/#head) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Checkout.</span>index <span>(repo, index, [options])</span>](/api/checkout/#index) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Checkout.</span>tree <span>(repo, treeish, [options])</span>](/api/checkout/#tree) |  <span class="tags"><span class="async">Async</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Checkout.</span>NOTIFY](/api/checkout/#NOTIFY)|  |
| [<span>Checkout.</span>STRATEGY](/api/checkout/#STRATEGY)|  |


## <a name='CheckoutOptions'></a>[CheckoutOptions](/api/checkout_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>CheckoutOptions#</span>ancestorLabel](/api/checkout_options/#ancestorLabel) |  |
| [<span>CheckoutOptions#</span>baseline](/api/checkout_options/#baseline) |  |
| [<span>CheckoutOptions#</span>baselineIndex](/api/checkout_options/#baselineIndex) |  |
| [<span>CheckoutOptions#</span>checkoutStrategy](/api/checkout_options/#checkoutStrategy) |  |
| [<span>CheckoutOptions#</span>dirMode](/api/checkout_options/#dirMode) |  |
| [<span>CheckoutOptions#</span>disableFilters](/api/checkout_options/#disableFilters) |  |
| [<span>CheckoutOptions#</span>fileMode](/api/checkout_options/#fileMode) |  |
| [<span>CheckoutOptions#</span>fileOpenFlags](/api/checkout_options/#fileOpenFlags) |  |
| [<span>CheckoutOptions#</span>notifyCb](/api/checkout_options/#notifyCb) |  |
| [<span>CheckoutOptions#</span>notifyFlags](/api/checkout_options/#notifyFlags) |  |
| [<span>CheckoutOptions#</span>notifyPayload](/api/checkout_options/#notifyPayload) |  |
| [<span>CheckoutOptions#</span>ourLabel](/api/checkout_options/#ourLabel) |  |
| [<span>CheckoutOptions#</span>paths](/api/checkout_options/#paths) |  |
| [<span>CheckoutOptions#</span>perfdataCb](/api/checkout_options/#perfdataCb) |  |
| [<span>CheckoutOptions#</span>perfdataPayload](/api/checkout_options/#perfdataPayload) |  |
| [<span>CheckoutOptions#</span>progressCb](/api/checkout_options/#progressCb) |  |
| [<span>CheckoutOptions#</span>progressPayload](/api/checkout_options/#progressPayload) |  |
| [<span>CheckoutOptions#</span>targetDirectory](/api/checkout_options/#targetDirectory) |  |
| [<span>CheckoutOptions#</span>theirLabel](/api/checkout_options/#theirLabel) |  |
| [<span>CheckoutOptions#</span>version](/api/checkout_options/#version) |  |


## <a name='CheckoutPerfdata'></a>[CheckoutPerfdata](/api/checkout_perfdata/)

| Instance Variables |  |
| --- | ---: |
| [<span>CheckoutPerfdata#</span>chmodCalls](/api/checkout_perfdata/#chmodCalls) |  |
| [<span>CheckoutPerfdata#</span>mkdirCalls](/api/checkout_perfdata/#mkdirCalls) |  |
| [<span>CheckoutPerfdata#</span>statCalls](/api/checkout_perfdata/#statCalls) |  |


## <a name='Cherrypick'></a>[Cherrypick](/api/cherrypick/)

| Class Methods |  |
| --- | ---: |
| [<span>Cherrypick.</span>cherrypick <span>(repo, commit, [options])</span>](/api/cherrypick/#cherrypick) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Cherrypick.</span>commit <span>(repo, cherrypick_commit, our_commit, mainline, [merge_options])</span>](/api/cherrypick/#commit) |  <span class="tags"><span class="async">Async</span></span> |


## <a name='CherrypickOptions'></a>[CherrypickOptions](/api/cherrypick_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>CherrypickOptions#</span>checkoutOpts](/api/cherrypick_options/#checkoutOpts) |  |
| [<span>CherrypickOptions#</span>mainline](/api/cherrypick_options/#mainline) |  |
| [<span>CherrypickOptions#</span>mergeOpts](/api/cherrypick_options/#mergeOpts) |  |
| [<span>CherrypickOptions#</span>version](/api/cherrypick_options/#version) |  |


## <a name='Clone'></a>[Clone](/api/clone/)

| Class Methods |  |
| --- | ---: |
| [<span>Clone.</span>clone <span>(url, local_path, [options])</span>](/api/clone/#clone) |  <span class="tags"><span class="async">Async</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Clone.</span>LOCAL](/api/clone/#LOCAL)|  |


## <a name='CloneOptions'></a>[CloneOptions](/api/clone_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>CloneOptions#</span>bare](/api/clone_options/#bare) |  |
| [<span>CloneOptions#</span>checkoutBranch](/api/clone_options/#checkoutBranch) |  |
| [<span>CloneOptions#</span>checkoutOpts](/api/clone_options/#checkoutOpts) |  |
| [<span>CloneOptions#</span>fetchOpts](/api/clone_options/#fetchOpts) |  |
| [<span>CloneOptions#</span>local](/api/clone_options/#local) |  |
| [<span>CloneOptions#</span>remoteCbPayload](/api/clone_options/#remoteCbPayload) |  |
| [<span>CloneOptions#</span>repositoryCbPayload](/api/clone_options/#repositoryCbPayload) |  |
| [<span>CloneOptions#</span>version](/api/clone_options/#version) |  |


## <a name='Commit'></a>[Commit](/api/commit/)

| Class Methods |  |
| --- | ---: |
| [<span>Commit.</span>create <span>(repo, update_ref, author, committer, message_encoding, message, tree, parent_count, parents)</span>](/api/commit/#create) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit.</span>createBuffer <span>(repo, author, committer, message_encoding, message, tree, parent_count, parents)</span>](/api/commit/#createBuffer) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit.</span>createV <span>(id, repo, update_ref, author, committer, message_encoding, message, tree, parent_count)</span>](/api/commit/#createV) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit.</span>createWithSignature <span>(repo, commit_content, signature, signature_field)</span>](/api/commit/#createWithSignature) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit.</span>extractSignature <span>(signature, signed_data, repo, commit_id, field)</span>](/api/commit/#extractSignature) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit.</span>lookup <span>(repo, id)</span>](/api/commit/#lookup) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit.</span>lookupPrefix <span>(repo, id, len)</span>](/api/commit/#lookupPrefix) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Commit#</span>amend <span>(update_ref, author, committer, message_encoding, message, tree, callback)</span>](/api/commit/#amend) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit#</span>amendWithSignature <span>(updateRef, author, committer, messageEncoding, message, tree, onSignature)</span>](/api/commit/#amendWithSignature) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit#</span>author <span>()</span>](/api/commit/#author) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>authorWithMailmap <span>(mailmap)</span>](/api/commit/#authorWithMailmap) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit#</span>body <span>()</span>](/api/commit/#body) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>committer <span>()</span>](/api/commit/#committer) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>committerWithMailmap <span>(mailmap)</span>](/api/commit/#committerWithMailmap) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit#</span>date <span>()</span>](/api/commit/#date) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>dup <span>()</span>](/api/commit/#dup) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit#</span>getDiff <span>(callback)</span>](/api/commit/#getDiff) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit#</span>getDiffWithOptions <span>(options, callback)</span>](/api/commit/#getDiffWithOptions) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit#</span>getEntry <span>(path)</span>](/api/commit/#getEntry) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit#</span>getParents <span>(limit, callback)</span>](/api/commit/#getParents) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit#</span>getSignature <span>(field)</span>](/api/commit/#getSignature) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>getTree <span>()</span>](/api/commit/#getTree) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit#</span>headerField <span>(field)</span>](/api/commit/#headerField) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit#</span>history <span>()</span>](/api/commit/#history) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>id <span>()</span>](/api/commit/#id) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>message <span>()</span>](/api/commit/#message) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>messageEncoding <span>()</span>](/api/commit/#messageEncoding) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>messageRaw <span>()</span>](/api/commit/#messageRaw) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>nthGenAncestor <span>(n)</span>](/api/commit/#nthGenAncestor) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit#</span>owner <span>()</span>](/api/commit/#owner) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>parent <span>(the)</span>](/api/commit/#parent) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Commit#</span>parentId <span>(n)</span>](/api/commit/#parentId) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>parentcount <span>()</span>](/api/commit/#parentcount) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>parents <span>()</span>](/api/commit/#parents) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>rawHeader <span>()</span>](/api/commit/#rawHeader) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>sha <span>()</span>](/api/commit/#sha) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>summary <span>()</span>](/api/commit/#summary) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>time <span>()</span>](/api/commit/#time) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>timeMs <span>()</span>](/api/commit/#timeMs) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>timeOffset <span>()</span>](/api/commit/#timeOffset) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>toString <span>()</span>](/api/commit/#toString) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>tree <span>(tree_out)</span>](/api/commit/#tree) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Commit#</span>treeId <span>()</span>](/api/commit/#treeId) |  <span class="tags"><span class="sync">Sync</span></span> |


## <a name='Config'></a>[Config](/api/config/)

| Class Methods |  |
| --- | ---: |
| [<span>Config.</span>findGlobal <span>()</span>](/api/config/#findGlobal) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config.</span>findProgramdata <span>()</span>](/api/config/#findProgramdata) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config.</span>findSystem <span>()</span>](/api/config/#findSystem) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config.</span>findXdg <span>()</span>](/api/config/#findXdg) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config.</span>openDefault <span>()</span>](/api/config/#openDefault) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config.</span>openOndisk <span>(path)</span>](/api/config/#openOndisk) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Config#</span>deleteEntry <span>(name)</span>](/api/config/#deleteEntry) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Config#</span>deleteMultivar <span>(name, regexp)</span>](/api/config/#deleteMultivar) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Config#</span>getBool <span>(name)</span>](/api/config/#getBool) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config#</span>getEntry <span>(name)</span>](/api/config/#getEntry) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config#</span>getInt32 <span>(name)</span>](/api/config/#getInt32) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config#</span>getInt64 <span>(name)</span>](/api/config/#getInt64) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config#</span>getPath <span>(name)</span>](/api/config/#getPath) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config#</span>getStringBuf <span>(name)</span>](/api/config/#getStringBuf) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config#</span>lock <span>()</span>](/api/config/#lock) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config#</span>setBool <span>(name, value)</span>](/api/config/#setBool) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config#</span>setInt32 <span>(name, value)</span>](/api/config/#setInt32) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config#</span>setInt64 <span>(name, value)</span>](/api/config/#setInt64) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config#</span>setMultivar <span>(name, regexp, value)</span>](/api/config/#setMultivar) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config#</span>setString <span>(name, value)</span>](/api/config/#setString) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Config#</span>snapshot <span>()</span>](/api/config/#snapshot) |  <span class="tags"><span class="async">Async</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Config.</span>LEVEL](/api/config/#LEVEL)|  |
| [<span>Config.</span>MAP](/api/config/#MAP)|  |


## <a name='ConfigEntry'></a>[ConfigEntry](/api/config_entry/)

| Instance Variables |  |
| --- | ---: |
| [<span>ConfigEntry#</span>free](/api/config_entry/#free) |  |
| [<span>ConfigEntry#</span>includeDepth](/api/config_entry/#includeDepth) |  |
| [<span>ConfigEntry#</span>level](/api/config_entry/#level) |  |
| [<span>ConfigEntry#</span>name](/api/config_entry/#name) |  |
| [<span>ConfigEntry#</span>payload](/api/config_entry/#payload) |  |
| [<span>ConfigEntry#</span>value](/api/config_entry/#value) |  |


## <a name='ConfigIterator'></a>[ConfigIterator](/api/config_iterator/)

| Class Methods |  |
| --- | ---: |
| [<span>ConfigIterator.</span>create <span>(cfg)</span>](/api/config_iterator/#create) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>ConfigIterator.</span>createGlob <span>(cfg, regexp)</span>](/api/config_iterator/#createGlob) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>ConfigIterator.</span>createMultivar <span>(cfg, name, regexp)</span>](/api/config_iterator/#createMultivar) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>ConfigIterator#</span>next <span>(entry)</span>](/api/config_iterator/#next) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |


## <a name='Configmap'></a>[Configmap](/api/configmap/)

| Instance Variables |  |
| --- | ---: |
| [<span>Configmap#</span>mapValue](/api/configmap/#mapValue) |  |
| [<span>Configmap#</span>strMatch](/api/configmap/#strMatch) |  |
| [<span>Configmap#</span>type](/api/configmap/#type) |  |


## <a name='ConvenientPatch'></a>[ConvenientPatch](/api/convenient_patch/)

| Instance Methods |  |
| --- | ---: |
| [<span>ConvenientPatch#</span>hunks <span>()</span>](/api/convenient_patch/#hunks) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>ConvenientPatch#</span>isAdded <span>()</span>](/api/convenient_patch/#isAdded) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>ConvenientPatch#</span>isConflicted <span>()</span>](/api/convenient_patch/#isConflicted) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>ConvenientPatch#</span>isCopied <span>()</span>](/api/convenient_patch/#isCopied) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>ConvenientPatch#</span>isDeleted <span>()</span>](/api/convenient_patch/#isDeleted) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>ConvenientPatch#</span>isIgnored <span>()</span>](/api/convenient_patch/#isIgnored) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>ConvenientPatch#</span>isModified <span>()</span>](/api/convenient_patch/#isModified) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>ConvenientPatch#</span>isRenamed <span>()</span>](/api/convenient_patch/#isRenamed) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>ConvenientPatch#</span>isTypeChange <span>()</span>](/api/convenient_patch/#isTypeChange) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>ConvenientPatch#</span>isUnmodified <span>()</span>](/api/convenient_patch/#isUnmodified) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>ConvenientPatch#</span>isUnreadable <span>()</span>](/api/convenient_patch/#isUnreadable) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>ConvenientPatch#</span>isUntracked <span>()</span>](/api/convenient_patch/#isUntracked) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>ConvenientPatch#</span>lineStats <span>()</span>](/api/convenient_patch/#lineStats) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>ConvenientPatch#</span>newFile <span>()</span>](/api/convenient_patch/#newFile) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>ConvenientPatch#</span>oldFile <span>()</span>](/api/convenient_patch/#oldFile) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>ConvenientPatch#</span>size <span>()</span>](/api/convenient_patch/#size) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>ConvenientPatch#</span>status <span>()</span>](/api/convenient_patch/#status) |  <span class="tags"><span class="sync">Sync</span></span> |


## <a name='Cred'></a>[Cred](/api/cred/)

| Class Methods |  |
| --- | ---: |
| [<span>Cred.</span>defaultNew <span>()</span>](/api/cred/#defaultNew) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Cred.</span>sshKeyFromAgent <span>(username)</span>](/api/cred/#sshKeyFromAgent) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Cred.</span>sshKeyMemoryNew <span>(username, publickey, privatekey, passphrase)</span>](/api/cred/#sshKeyMemoryNew) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Cred.</span>sshKeyNew <span>(username, publickey, privatekey, passphrase)</span>](/api/cred/#sshKeyNew) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Cred.</span>usernameNew <span>(username)</span>](/api/cred/#usernameNew) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Cred.</span>userpassPlaintextNew <span>(username, password)</span>](/api/cred/#userpassPlaintextNew) |  <span class="tags"><span class="sync">Sync</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Cred#</span>hasUsername <span>()</span>](/api/cred/#hasUsername) |  <span class="tags"><span class="sync">Sync</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Cred.</span>TYPE](/api/cred/#TYPE)|  |

| Instance Variables |  |
| --- | ---: |
| [<span>Cred#</span>credtype](/api/cred/#credtype) |  |


## <a name='DescribeFormatOptions'></a>[DescribeFormatOptions](/api/describe_format_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>DescribeFormatOptions#</span>abbreviatedSize](/api/describe_format_options/#abbreviatedSize) |  |
| [<span>DescribeFormatOptions#</span>alwaysUseLongFormat](/api/describe_format_options/#alwaysUseLongFormat) |  |
| [<span>DescribeFormatOptions#</span>dirtySuffix](/api/describe_format_options/#dirtySuffix) |  |
| [<span>DescribeFormatOptions#</span>version](/api/describe_format_options/#version) |  |


## <a name='DescribeOptions'></a>[DescribeOptions](/api/describe_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>DescribeOptions#</span>describeStrategy](/api/describe_options/#describeStrategy) |  |
| [<span>DescribeOptions#</span>maxCandidatesTags](/api/describe_options/#maxCandidatesTags) |  |
| [<span>DescribeOptions#</span>onlyFollowFirstParent](/api/describe_options/#onlyFollowFirstParent) |  |
| [<span>DescribeOptions#</span>pattern](/api/describe_options/#pattern) |  |
| [<span>DescribeOptions#</span>showCommitOidAsFallback](/api/describe_options/#showCommitOidAsFallback) |  |
| [<span>DescribeOptions#</span>version](/api/describe_options/#version) |  |



## <a name='Diff'></a>[Diff](/api/diff/)

| Class Methods |  |
| --- | ---: |
| [<span>Diff.</span>blobToBuffer <span>(old_blob, old_as_path, buffer, buffer_as_path, opts, file_cb, binary_cb, hunk_cb, line_cb)</span>](/api/diff/#blobToBuffer) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Diff.</span>fromBuffer <span>(content, content_len)</span>](/api/diff/#fromBuffer) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Diff.</span>indexToIndex <span>(repo, old_index, new_index, opts)</span>](/api/diff/#indexToIndex) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Diff.</span>indexToWorkdir <span>(repo, index, opts)</span>](/api/diff/#indexToWorkdir) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Diff.</span>treeToIndex <span>(repo, old_tree, index, opts)</span>](/api/diff/#treeToIndex) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Diff.</span>treeToTree <span>(repo, old_tree, new_tree, opts)</span>](/api/diff/#treeToTree) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Diff.</span>treeToWorkdir <span>(repo, old_tree, opts)</span>](/api/diff/#treeToWorkdir) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Diff.</span>treeToWorkdirWithIndex <span>(repo, old_tree, opts)</span>](/api/diff/#treeToWorkdirWithIndex) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Diff#</span>findSimilar <span>(options)</span>](/api/diff/#findSimilar) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Diff#</span>getDelta <span>(idx)</span>](/api/diff/#getDelta) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Diff#</span>getPerfdata <span>()</span>](/api/diff/#getPerfdata) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Diff#</span>getStats <span>()</span>](/api/diff/#getStats) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Diff#</span>isSortedIcase <span>()</span>](/api/diff/#isSortedIcase) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Diff#</span>merge <span>(from)</span>](/api/diff/#merge) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Diff#</span>numDeltas <span>()</span>](/api/diff/#numDeltas) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Diff#</span>patches <span>()</span>](/api/diff/#patches) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Diff#</span>patchid <span>(opts)</span>](/api/diff/#patchid) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Diff#</span>toBuf <span>(format)</span>](/api/diff/#toBuf) |  <span class="tags"><span class="async">Async</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Diff.</span>DELTA](/api/diff/#DELTA)|  |
| [<span>Diff.</span>FIND](/api/diff/#FIND)|  |
| [<span>Diff.</span>FLAG](/api/diff/#FLAG)|  |
| [<span>Diff.</span>FORMAT](/api/diff/#FORMAT)|  |
| [<span>Diff.</span>FORMAT_EMAIL_FLAGS](/api/diff/#FORMAT_EMAIL_FLAGS)|  |
| [<span>Diff.</span>LINE](/api/diff/#LINE)|  |
| [<span>Diff.</span>OPTION](/api/diff/#OPTION)|  |
| [<span>Diff.</span>STATS_FORMAT](/api/diff/#STATS_FORMAT)|  |


## <a name='DiffBinary'></a>[DiffBinary](/api/diff_binary/)

| ENUMS |  |
| --- | ---: |
| [<span>DiffBinary.</span>DIFF_BINARY](/api/diff_binary/#DIFF_BINARY)|  |

| Instance Variables |  |
| --- | ---: |
| [<span>DiffBinary#</span>containsData](/api/diff_binary/#containsData) |  |
| [<span>DiffBinary#</span>newFile](/api/diff_binary/#newFile) |  |
| [<span>DiffBinary#</span>oldFile](/api/diff_binary/#oldFile) |  |


## <a name='DiffBinaryFile'></a>[DiffBinaryFile](/api/diff_binary_file/)

| Instance Variables |  |
| --- | ---: |
| [<span>DiffBinaryFile#</span>data](/api/diff_binary_file/#data) |  |
| [<span>DiffBinaryFile#</span>datalen](/api/diff_binary_file/#datalen) |  |
| [<span>DiffBinaryFile#</span>inflatedlen](/api/diff_binary_file/#inflatedlen) |  |
| [<span>DiffBinaryFile#</span>type](/api/diff_binary_file/#type) |  |


## <a name='DiffDelta'></a>[DiffDelta](/api/diff_delta/)

| Instance Variables |  |
| --- | ---: |
| [<span>DiffDelta#</span>flags](/api/diff_delta/#flags) |  |
| [<span>DiffDelta#</span>newFile](/api/diff_delta/#newFile) |  |
| [<span>DiffDelta#</span>nfiles](/api/diff_delta/#nfiles) |  |
| [<span>DiffDelta#</span>oldFile](/api/diff_delta/#oldFile) |  |
| [<span>DiffDelta#</span>similarity](/api/diff_delta/#similarity) |  |
| [<span>DiffDelta#</span>status](/api/diff_delta/#status) |  |


## <a name='DiffFile'></a>[DiffFile](/api/diff_file/)

| Instance Methods |  |
| --- | ---: |
| [<span>DiffFile#</span>flags <span>()</span>](/api/diff_file/#flags) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>DiffFile#</span>id <span>()</span>](/api/diff_file/#id) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>DiffFile#</span>mode <span>()</span>](/api/diff_file/#mode) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>DiffFile#</span>path <span>()</span>](/api/diff_file/#path) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>DiffFile#</span>size <span>()</span>](/api/diff_file/#size) |  <span class="tags"><span class="sync">Sync</span></span> |

| Instance Variables |  |
| --- | ---: |
| [<span>DiffFile#</span>flags](/api/diff_file/#flags) |  |
| [<span>DiffFile#</span>id](/api/diff_file/#id) |  |
| [<span>DiffFile#</span>idAbbrev](/api/diff_file/#idAbbrev) |  |
| [<span>DiffFile#</span>mode](/api/diff_file/#mode) |  |
| [<span>DiffFile#</span>path](/api/diff_file/#path) |  |
| [<span>DiffFile#</span>size](/api/diff_file/#size) |  |


## <a name='DiffFindOptions'></a>[DiffFindOptions](/api/diff_find_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>DiffFindOptions#</span>breakRewriteThreshold](/api/diff_find_options/#breakRewriteThreshold) |  |
| [<span>DiffFindOptions#</span>copyThreshold](/api/diff_find_options/#copyThreshold) |  |
| [<span>DiffFindOptions#</span>flags](/api/diff_find_options/#flags) |  |
| [<span>DiffFindOptions#</span>renameFromRewriteThreshold](/api/diff_find_options/#renameFromRewriteThreshold) |  |
| [<span>DiffFindOptions#</span>renameLimit](/api/diff_find_options/#renameLimit) |  |
| [<span>DiffFindOptions#</span>renameThreshold](/api/diff_find_options/#renameThreshold) |  |
| [<span>DiffFindOptions#</span>version](/api/diff_find_options/#version) |  |


## <a name='DiffHunk'></a>[DiffHunk](/api/diff_hunk/)

| Instance Variables |  |
| --- | ---: |
| [<span>DiffHunk#</span>header](/api/diff_hunk/#header) |  |
| [<span>DiffHunk#</span>headerLen](/api/diff_hunk/#headerLen) |  |
| [<span>DiffHunk#</span>newLines](/api/diff_hunk/#newLines) |  |
| [<span>DiffHunk#</span>newStart](/api/diff_hunk/#newStart) |  |
| [<span>DiffHunk#</span>oldLines](/api/diff_hunk/#oldLines) |  |
| [<span>DiffHunk#</span>oldStart](/api/diff_hunk/#oldStart) |  |


## <a name='DiffLine'></a>[DiffLine](/api/diff_line/)

| Instance Methods |  |
| --- | ---: |
| [<span>DiffLine#</span>content <span>()</span>](/api/diff_line/#content) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>DiffLine#</span>rawContent <span>()</span>](/api/diff_line/#rawContent) |  <span class="tags"><span class="sync">Sync</span></span> |

| Instance Variables |  |
| --- | ---: |
| [<span>DiffLine#</span>content](/api/diff_line/#content) |  |
| [<span>DiffLine#</span>contentLen](/api/diff_line/#contentLen) |  |
| [<span>DiffLine#</span>contentOffset](/api/diff_line/#contentOffset) |  |
| [<span>DiffLine#</span>newLineno](/api/diff_line/#newLineno) |  |
| [<span>DiffLine#</span>numLines](/api/diff_line/#numLines) |  |
| [<span>DiffLine#</span>oldLineno](/api/diff_line/#oldLineno) |  |
| [<span>DiffLine#</span>origin](/api/diff_line/#origin) |  |


## <a name='DiffOptions'></a>[DiffOptions](/api/diff_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>DiffOptions#</span>contextLines](/api/diff_options/#contextLines) |  |
| [<span>DiffOptions#</span>flags](/api/diff_options/#flags) |  |
| [<span>DiffOptions#</span>idAbbrev](/api/diff_options/#idAbbrev) |  |
| [<span>DiffOptions#</span>ignoreSubmodules](/api/diff_options/#ignoreSubmodules) |  |
| [<span>DiffOptions#</span>interhunkLines](/api/diff_options/#interhunkLines) |  |
| [<span>DiffOptions#</span>maxSize](/api/diff_options/#maxSize) |  |
| [<span>DiffOptions#</span>newPrefix](/api/diff_options/#newPrefix) |  |
| [<span>DiffOptions#</span>notifyCb](/api/diff_options/#notifyCb) |  |
| [<span>DiffOptions#</span>oldPrefix](/api/diff_options/#oldPrefix) |  |
| [<span>DiffOptions#</span>pathspec](/api/diff_options/#pathspec) |  |
| [<span>DiffOptions#</span>payload](/api/diff_options/#payload) |  |
| [<span>DiffOptions#</span>progressCb](/api/diff_options/#progressCb) |  |
| [<span>DiffOptions#</span>version](/api/diff_options/#version) |  |


## <a name='DiffPatchidOptions'></a>[DiffPatchidOptions](/api/diff_patchid_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>DiffPatchidOptions#</span>version](/api/diff_patchid_options/#version) |  |


## <a name='DiffPerfdata'></a>[DiffPerfdata](/api/diff_perfdata/)

| Instance Variables |  |
| --- | ---: |
| [<span>DiffPerfdata#</span>oidCalculations](/api/diff_perfdata/#oidCalculations) |  |
| [<span>DiffPerfdata#</span>statCalls](/api/diff_perfdata/#statCalls) |  |


## <a name='DiffStats'></a>[DiffStats](/api/diff_stats/)

| Instance Methods |  |
| --- | ---: |
| [<span>DiffStats#</span>deletions <span>()</span>](/api/diff_stats/#deletions) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>DiffStats#</span>filesChanged <span>()</span>](/api/diff_stats/#filesChanged) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>DiffStats#</span>insertions <span>()</span>](/api/diff_stats/#insertions) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>DiffStats#</span>toBuf <span>(format, width)</span>](/api/diff_stats/#toBuf) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |


## <a name='Enums'></a>[Enums](/api/enums/)

| ENUMS |  |
| --- | ---: |
| [<span>Enums.</span>DIRECTION](/api/enums/#DIRECTION)|  |
| [<span>Enums.</span>FEATURE](/api/enums/#FEATURE)|  |
| [<span>Enums.</span>SMART_SERVICE](/api/enums/#SMART_SERVICE)|  |


## <a name='Error'></a>[Error](/api/error/)

| Class Methods |  |
| --- | ---: |
| [<span>Error.</span>clear <span>()</span>](/api/error/#clear) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Error.</span>setOom <span>()</span>](/api/error/#setOom) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Error.</span>setString <span>(error_class, string)</span>](/api/error/#setString) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Error#</span>last <span>()</span>](/api/error/#last) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Error.</span>CODE](/api/error/#CODE)|  |
| [<span>Error.</span>ERROR](/api/error/#ERROR)|  |

| Instance Variables |  |
| --- | ---: |
| [<span>Error#</span>klass](/api/error/#klass) |  |
| [<span>Error#</span>message](/api/error/#message) |  |


## <a name='Fetch'></a>[Fetch](/api/fetch/)

| ENUMS |  |
| --- | ---: |
| [<span>Fetch.</span>PRUNE](/api/fetch/#PRUNE)|  |


## <a name='FetchOptions'></a>[FetchOptions](/api/fetch_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>FetchOptions#</span>callbacks](/api/fetch_options/#callbacks) |  |
| [<span>FetchOptions#</span>customHeaders](/api/fetch_options/#customHeaders) |  |
| [<span>FetchOptions#</span>downloadTags](/api/fetch_options/#downloadTags) |  |
| [<span>FetchOptions#</span>proxyOpts](/api/fetch_options/#proxyOpts) |  |
| [<span>FetchOptions#</span>prune](/api/fetch_options/#prune) |  |
| [<span>FetchOptions#</span>updateFetchhead](/api/fetch_options/#updateFetchhead) |  |
| [<span>FetchOptions#</span>version](/api/fetch_options/#version) |  |


## <a name='Filter'></a>[Filter](/api/filter/)

| Class Methods |  |
| --- | ---: |
| [<span>Filter.</span>listContains <span>(filters, name)</span>](/api/filter/#listContains) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Filter.</span>listStreamBlob <span>(filters, blob, target)</span>](/api/filter/#listStreamBlob) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Filter.</span>listStreamData <span>(filters, data, target)</span>](/api/filter/#listStreamData) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Filter.</span>listStreamFile <span>(filters, repo, path, target)</span>](/api/filter/#listStreamFile) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Filter.</span>load <span>(repo, blob, path, mode, flags)</span>](/api/filter/#load) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Filter#</span>applyToBlob <span>(blob)</span>](/api/filter/#applyToBlob) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Filter#</span>applyToData <span>(in)</span>](/api/filter/#applyToData) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Filter#</span>applyToFile <span>(repo, path)</span>](/api/filter/#applyToFile) |  <span class="tags"><span class="async">Async</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Filter.</span>FLAG](/api/filter/#FLAG)|  |
| [<span>Filter.</span>MODE](/api/filter/#MODE)|  |

| Instance Variables |  |
| --- | ---: |
| [<span>Filter#</span>apply](/api/filter/#apply) |  |
| [<span>Filter#</span>attributes](/api/filter/#attributes) |  |
| [<span>Filter#</span>check](/api/filter/#check) |  |
| [<span>Filter#</span>cleanup](/api/filter/#cleanup) |  |
| [<span>Filter#</span>initialize](/api/filter/#initialize) |  |
| [<span>Filter#</span>shutdown](/api/filter/#shutdown) |  |
| [<span>Filter#</span>version](/api/filter/#version) |  |


## <a name='FilterList'></a>[FilterList](/api/filter_list/)

| Class Methods |  |
| --- | ---: |
| [<span>FilterList.</span>load <span>(repo, blob, path, mode, flags)</span>](/api/filter_list/#load) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>FilterList#</span>applyToBlob <span>(blob)</span>](/api/filter_list/#applyToBlob) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>FilterList#</span>applyToData <span>(in)</span>](/api/filter_list/#applyToData) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>FilterList#</span>applyToFile <span>(repo, path)</span>](/api/filter_list/#applyToFile) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |


## <a name='FilterSource'></a>[FilterSource](/api/filter_source/)

| Instance Methods |  |
| --- | ---: |
| [<span>FilterSource#</span>filemode <span>()</span>](/api/filter_source/#filemode) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>FilterSource#</span>flags <span>()</span>](/api/filter_source/#flags) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>FilterSource#</span>id <span>()</span>](/api/filter_source/#id) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>FilterSource#</span>mode <span>()</span>](/api/filter_source/#mode) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>FilterSource#</span>path <span>()</span>](/api/filter_source/#path) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>FilterSource#</span>repo <span>()</span>](/api/filter_source/#repo) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |


## <a name='Graph'></a>[Graph](/api/graph/)

| Class Methods |  |
| --- | ---: |
| [<span>Graph.</span>aheadBehind <span>(repo, local, upstream)</span>](/api/graph/#aheadBehind) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Graph.</span>descendantOf <span>(repo, commit, ancestor)</span>](/api/graph/#descendantOf) |  <span class="tags"><span class="async">Async</span></span> |


## <a name='Hashsig'></a>[Hashsig](/api/hashsig/)

| Class Methods |  |
| --- | ---: |
| [<span>Hashsig.</span>create <span>(buf, buflen, opts)</span>](/api/hashsig/#create) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Hashsig.</span>createFromFile <span>(path, opts)</span>](/api/hashsig/#createFromFile) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Hashsig#</span>compare <span>(b)</span>](/api/hashsig/#compare) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Hashsig.</span>OPTION](/api/hashsig/#OPTION)|  |


## <a name='Ignore'></a>[Ignore](/api/ignore/)

| Class Methods |  |
| --- | ---: |
| [<span>Ignore.</span>addRule <span>(repo, rules)</span>](/api/ignore/#addRule) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Ignore.</span>clearInternalRules <span>(repo)</span>](/api/ignore/#clearInternalRules) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Ignore.</span>pathIsIgnored <span>(repo, path)</span>](/api/ignore/#pathIsIgnored) |  <span class="tags"><span class="async">Async</span></span> |


## <a name='Index'></a>[Index](/api/index/)

| Class Methods |  |
| --- | ---: |
| [<span>Index.</span>entryIsConflict <span>(entry)</span>](/api/index/#entryIsConflict) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Index.</span>entryStage <span>(entry)</span>](/api/index/#entryStage) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Index.</span>open <span>(index_path)</span>](/api/index/#open) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Index#</span>add <span>(source_entry)</span>](/api/index/#add) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>addAll <span>(pathspec, flags, callback, payload)</span>](/api/index/#addAll) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>addByPath <span>(path)</span>](/api/index/#addByPath) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>caps <span>()</span>](/api/index/#caps) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Index#</span>checksum <span>()</span>](/api/index/#checksum) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Index#</span>clear <span>()</span>](/api/index/#clear) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>conflictAdd <span>(ancestor_entry, our_entry, their_entry)</span>](/api/index/#conflictAdd) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>conflictCleanup <span>()</span>](/api/index/#conflictCleanup) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>conflictGet <span>(path)</span>](/api/index/#conflictGet) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>conflictRemove <span>(path)</span>](/api/index/#conflictRemove) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>entries <span>()</span>](/api/index/#entries) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Index#</span>entryCount <span>()</span>](/api/index/#entryCount) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Index#</span>find <span>(path)</span>](/api/index/#find) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>findPrefix <span>(prefix)</span>](/api/index/#findPrefix) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>getByIndex <span>(n)</span>](/api/index/#getByIndex) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Index#</span>getByPath <span>(path, stage)</span>](/api/index/#getByPath) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Index#</span>hasConflicts <span>()</span>](/api/index/#hasConflicts) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Index#</span>path <span>()</span>](/api/index/#path) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Index#</span>read <span>(force)</span>](/api/index/#read) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>readTree <span>(tree)</span>](/api/index/#readTree) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>remove <span>(path, stage)</span>](/api/index/#remove) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>removeAll <span>(pathspec, callback, payload)</span>](/api/index/#removeAll) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>removeByPath <span>(path)</span>](/api/index/#removeByPath) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>removeDirectory <span>(dir, stage)</span>](/api/index/#removeDirectory) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>setCaps <span>(caps)</span>](/api/index/#setCaps) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Index#</span>setVersion <span>(version)</span>](/api/index/#setVersion) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Index#</span>updateAll <span>(pathspec, callback, payload)</span>](/api/index/#updateAll) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>version <span>()</span>](/api/index/#version) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Index#</span>write <span>()</span>](/api/index/#write) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>writeTree <span>()</span>](/api/index/#writeTree) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Index#</span>writeTreeTo <span>(repo)</span>](/api/index/#writeTreeTo) |  <span class="tags"><span class="async">Async</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Index.</span>ADD_OPTION](/api/index/#ADD_OPTION)|  |
| [<span>Index.</span>CAPABILITY](/api/index/#CAPABILITY)|  |
| [<span>Index.</span>ENTRY_EXTENDED_FLAG](/api/index/#ENTRY_EXTENDED_FLAG)|  |
| [<span>Index.</span>ENTRY_FLAG](/api/index/#ENTRY_FLAG)|  |
| [<span>Index.</span>STAGE](/api/index/#STAGE)|  |


## <a name='IndexConflictIterator'></a>[IndexConflictIterator](/api/index_conflict_iterator/)

| Class Methods |  |
| --- | ---: |
| [<span>IndexConflictIterator.</span>create <span>(index)</span>](/api/index_conflict_iterator/#create) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>IndexConflictIterator#</span>next <span>()</span>](/api/index_conflict_iterator/#next) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |


## <a name='IndexEntry'></a>[IndexEntry](/api/index_entry/)

| Instance Variables |  |
| --- | ---: |
| [<span>IndexEntry#</span>ctime](/api/index_entry/#ctime) |  |
| [<span>IndexEntry#</span>dev](/api/index_entry/#dev) |  |
| [<span>IndexEntry#</span>fileSize](/api/index_entry/#fileSize) |  |
| [<span>IndexEntry#</span>flags](/api/index_entry/#flags) |  |
| [<span>IndexEntry#</span>flagsExtended](/api/index_entry/#flagsExtended) |  |
| [<span>IndexEntry#</span>gid](/api/index_entry/#gid) |  |
| [<span>IndexEntry#</span>id](/api/index_entry/#id) |  |
| [<span>IndexEntry#</span>ino](/api/index_entry/#ino) |  |
| [<span>IndexEntry#</span>mode](/api/index_entry/#mode) |  |
| [<span>IndexEntry#</span>mtime](/api/index_entry/#mtime) |  |
| [<span>IndexEntry#</span>path](/api/index_entry/#path) |  |
| [<span>IndexEntry#</span>uid](/api/index_entry/#uid) |  |


## <a name='IndexIterator'></a>[IndexIterator](/api/index_iterator/)

| Class Methods |  |
| --- | ---: |
| [<span>IndexIterator.</span>create <span>(index)</span>](/api/index_iterator/#create) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>IndexIterator#</span>next <span>()</span>](/api/index_iterator/#next) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |


## <a name='IndexNameEntry'></a>[IndexNameEntry](/api/index_name_entry/)

| Class Methods |  |
| --- | ---: |
| [<span>IndexNameEntry.</span>add <span>(index, ancestor, ours, theirs)</span>](/api/index_name_entry/#add) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>IndexNameEntry.</span>clear <span>(index)</span>](/api/index_name_entry/#clear) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>IndexNameEntry.</span>entryCount <span>(index)</span>](/api/index_name_entry/#entryCount) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>IndexNameEntry.</span>getByIndex <span>(index, n)</span>](/api/index_name_entry/#getByIndex) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |

| Instance Variables |  |
| --- | ---: |
| [<span>IndexNameEntry#</span>ancestor](/api/index_name_entry/#ancestor) |  |
| [<span>IndexNameEntry#</span>ours](/api/index_name_entry/#ours) |  |
| [<span>IndexNameEntry#</span>theirs](/api/index_name_entry/#theirs) |  |


## <a name='IndexReucEntry'></a>[IndexReucEntry](/api/index_reuc_entry/)

| Class Methods |  |
| --- | ---: |
| [<span>IndexReucEntry.</span>add <span>(index, path, ancestor_mode, ancestor_id, our_mode, our_id, their_mode, their_id)</span>](/api/index_reuc_entry/#add) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>IndexReucEntry.</span>clear <span>(index)</span>](/api/index_reuc_entry/#clear) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>IndexReucEntry.</span>entryCount <span>(index)</span>](/api/index_reuc_entry/#entryCount) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>IndexReucEntry.</span>find <span>(index, path)</span>](/api/index_reuc_entry/#find) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>IndexReucEntry.</span>getByIndex <span>(index, n)</span>](/api/index_reuc_entry/#getByIndex) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>IndexReucEntry.</span>getByPath <span>(index, path)</span>](/api/index_reuc_entry/#getByPath) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>IndexReucEntry.</span>remove <span>(index, n)</span>](/api/index_reuc_entry/#remove) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |

| Instance Variables |  |
| --- | ---: |
| [<span>IndexReucEntry#</span>mode](/api/index_reuc_entry/#mode) |  |
| [<span>IndexReucEntry#</span>oid](/api/index_reuc_entry/#oid) |  |
| [<span>IndexReucEntry#</span>path](/api/index_reuc_entry/#path) |  |


## <a name='IndexTime'></a>[IndexTime](/api/index_time/)

| Instance Variables |  |
| --- | ---: |
| [<span>IndexTime#</span>nanoseconds](/api/index_time/#nanoseconds) |  |
| [<span>IndexTime#</span>seconds](/api/index_time/#seconds) |  |


## <a name='IndexerProgress'></a>[IndexerProgress](/api/indexer_progress/)

| Instance Variables |  |
| --- | ---: |
| [<span>IndexerProgress#</span>indexedDeltas](/api/indexer_progress/#indexedDeltas) |  |
| [<span>IndexerProgress#</span>indexedObjects](/api/indexer_progress/#indexedObjects) |  |
| [<span>IndexerProgress#</span>localObjects](/api/indexer_progress/#localObjects) |  |
| [<span>IndexerProgress#</span>receivedBytes](/api/indexer_progress/#receivedBytes) |  |
| [<span>IndexerProgress#</span>receivedObjects](/api/indexer_progress/#receivedObjects) |  |
| [<span>IndexerProgress#</span>totalDeltas](/api/indexer_progress/#totalDeltas) |  |
| [<span>IndexerProgress#</span>totalObjects](/api/indexer_progress/#totalObjects) |  |


## <a name='Libgit2'></a>[Libgit2](/api/libgit_2/)

| Class Methods |  |
| --- | ---: |
| [<span>Libgit2.</span>features <span>()</span>](/api/libgit_2/#features) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Libgit2.</span>init <span>()</span>](/api/libgit_2/#init) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Libgit2.</span>opts <span>(option)</span>](/api/libgit_2/#opts) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Libgit2.</span>shutdown <span>()</span>](/api/libgit_2/#shutdown) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Libgit2.</span>version <span>(major, minor, rev)</span>](/api/libgit_2/#version) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Libgit2.</span>OPT](/api/libgit_2/#OPT)|  |


## <a name='Mailmap'></a>[Mailmap](/api/mailmap/)

| Class Methods |  |
| --- | ---: |
| [<span>Mailmap.</span>create <span>()</span>](/api/mailmap/#create) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Mailmap.</span>fromBuffer <span>(buf, len)</span>](/api/mailmap/#fromBuffer) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Mailmap.</span>fromRepository <span>(repo)</span>](/api/mailmap/#fromRepository) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Mailmap#</span>addEntry <span>(real_name, real_email, replace_name, replace_email)</span>](/api/mailmap/#addEntry) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Mailmap#</span>resolve <span>(name, email)</span>](/api/mailmap/#resolve) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Mailmap#</span>resolveSignature <span>(sig)</span>](/api/mailmap/#resolveSignature) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |


## <a name='Merge'></a>[Merge](/api/merge/)

| Class Methods |  |
| --- | ---: |
| [<span>Merge.</span>analysis <span>(repo, their_heads, their_heads_len)</span>](/api/merge/#analysis) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Merge.</span>analysisForRef <span>(repo, our_ref, their_heads, their_heads_len)</span>](/api/merge/#analysisForRef) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Merge.</span>base <span>(repo, one, two)</span>](/api/merge/#base) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Merge.</span>bases <span>(repo, one, two)</span>](/api/merge/#bases) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Merge.</span>commits <span>(repo, ourCommit, theirCommit, [options])</span>](/api/merge/#commits) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Merge.</span>merge <span>(repo, theirHead, [mergeOpts], [checkoutOpts])</span>](/api/merge/#merge) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Merge.</span>trees <span>(repo, ancestor_tree, our_tree, their_tree, opts)</span>](/api/merge/#trees) |  <span class="tags"><span class="async">Async</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Merge.</span>ANALYSIS](/api/merge/#ANALYSIS)|  |
| [<span>Merge.</span>FILE_FAVOR](/api/merge/#FILE_FAVOR)|  |
| [<span>Merge.</span>FILE_FLAG](/api/merge/#FILE_FLAG)|  |
| [<span>Merge.</span>FLAG](/api/merge/#FLAG)|  |
| [<span>Merge.</span>PREFERENCE](/api/merge/#PREFERENCE)|  |


## <a name='MergeFileInput'></a>[MergeFileInput](/api/merge_file_input/)

| Instance Variables |  |
| --- | ---: |
| [<span>MergeFileInput#</span>mode](/api/merge_file_input/#mode) |  |
| [<span>MergeFileInput#</span>path](/api/merge_file_input/#path) |  |
| [<span>MergeFileInput#</span>ptr](/api/merge_file_input/#ptr) |  |
| [<span>MergeFileInput#</span>size](/api/merge_file_input/#size) |  |
| [<span>MergeFileInput#</span>version](/api/merge_file_input/#version) |  |


## <a name='MergeFileOptions'></a>[MergeFileOptions](/api/merge_file_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>MergeFileOptions#</span>ancestorLabel](/api/merge_file_options/#ancestorLabel) |  |
| [<span>MergeFileOptions#</span>favor](/api/merge_file_options/#favor) |  |
| [<span>MergeFileOptions#</span>flags](/api/merge_file_options/#flags) |  |
| [<span>MergeFileOptions#</span>markerSize](/api/merge_file_options/#markerSize) |  |
| [<span>MergeFileOptions#</span>ourLabel](/api/merge_file_options/#ourLabel) |  |
| [<span>MergeFileOptions#</span>theirLabel](/api/merge_file_options/#theirLabel) |  |
| [<span>MergeFileOptions#</span>version](/api/merge_file_options/#version) |  |


## <a name='MergeOptions'></a>[MergeOptions](/api/merge_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>MergeOptions#</span>defaultDriver](/api/merge_options/#defaultDriver) |  |
| [<span>MergeOptions#</span>fileFavor](/api/merge_options/#fileFavor) |  |
| [<span>MergeOptions#</span>fileFlags](/api/merge_options/#fileFlags) |  |
| [<span>MergeOptions#</span>flags](/api/merge_options/#flags) |  |
| [<span>MergeOptions#</span>recursionLimit](/api/merge_options/#recursionLimit) |  |
| [<span>MergeOptions#</span>renameThreshold](/api/merge_options/#renameThreshold) |  |
| [<span>MergeOptions#</span>targetLimit](/api/merge_options/#targetLimit) |  |
| [<span>MergeOptions#</span>version](/api/merge_options/#version) |  |


## <a name='Note'></a>[Note](/api/note/)

| Class Methods |  |
| --- | ---: |
| [<span>Note.</span>commitCreate <span>(repo, parent, author, committer, oid, note, allow_note_overwrite)</span>](/api/note/#commitCreate) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Note.</span>commitIteratorNew <span>(notes_commit)</span>](/api/note/#commitIteratorNew) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Note.</span>commitRead <span>(repo, notes_commit, oid)</span>](/api/note/#commitRead) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Note.</span>commitRemove <span>(repo, notes_commit, author, committer, oid)</span>](/api/note/#commitRemove) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Note.</span>create <span>(repo, notes_ref, author, committer, oid, note, force)</span>](/api/note/#create) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Note.</span>defaultRef <span>(repo)</span>](/api/note/#defaultRef) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Note.</span>foreach <span>(repo, notes_ref, note_cb, payload)</span>](/api/note/#foreach) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Note.</span>read <span>(repo, notes_ref, oid)</span>](/api/note/#read) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Note.</span>remove <span>(repo, notes_ref, author, committer, oid)</span>](/api/note/#remove) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Note#</span>author <span>()</span>](/api/note/#author) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Note#</span>committer <span>()</span>](/api/note/#committer) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Note#</span>id <span>()</span>](/api/note/#id) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Note#</span>message <span>()</span>](/api/note/#message) |  <span class="tags"><span class="sync">Sync</span></span> |



## <a name='Object'></a>[Object](/api/object/)

| Class Methods |  |
| --- | ---: |
| [<span>Object.</span>lookup <span>(repo, id, type)</span>](/api/object/#lookup) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Object.</span>lookupPrefix <span>(repo, id, len, type)</span>](/api/object/#lookupPrefix) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Object.</span>size <span>(type)</span>](/api/object/#size) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Object.</span>string2Type <span>(str)</span>](/api/object/#string2Type) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Object.</span>type2String <span>(type)</span>](/api/object/#type2String) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Object.</span>typeisloose <span>(type)</span>](/api/object/#typeisloose) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Object#</span>dup <span>()</span>](/api/object/#dup) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Object#</span>id <span>()</span>](/api/object/#id) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Object#</span>lookupByPath <span>(path, type)</span>](/api/object/#lookupByPath) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Object#</span>owner <span>()</span>](/api/object/#owner) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Object#</span>peel <span>(target_type)</span>](/api/object/#peel) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Object#</span>shortId <span>()</span>](/api/object/#shortId) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Object#</span>type <span>()</span>](/api/object/#type) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Object.</span>TYPE](/api/object/#TYPE)|  |


## <a name='Odb'></a>[Odb](/api/odb/)

| Class Methods |  |
| --- | ---: |
| [<span>Odb.</span>hashfile <span>(path, type)</span>](/api/odb/#hashfile) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Odb.</span>open <span>(objects_dir)</span>](/api/odb/#open) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Odb#</span>addDiskAlternate <span>(path)</span>](/api/odb/#addDiskAlternate) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Odb#</span>existsPrefix <span>(short_id, len)</span>](/api/odb/#existsPrefix) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Odb#</span>read <span>(id)</span>](/api/odb/#read) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Odb#</span>readPrefix <span>(short_id, len)</span>](/api/odb/#readPrefix) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Odb#</span>write <span>(data, len, type)</span>](/api/odb/#write) |  <span class="tags"><span class="async">Async</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Odb.</span>STREAM](/api/odb/#STREAM)|  |


## <a name='OdbObject'></a>[OdbObject](/api/odb_object/)

| Instance Methods |  |
| --- | ---: |
| [<span>OdbObject#</span>data <span>()</span>](/api/odb_object/#data) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>OdbObject#</span>id <span>()</span>](/api/odb_object/#id) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>OdbObject#</span>size <span>()</span>](/api/odb_object/#size) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>OdbObject#</span>type <span>()</span>](/api/odb_object/#type) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |


## <a name='Oid'></a>[Oid](/api/oid/)

| Class Methods |  |
| --- | ---: |
| [<span>Oid.</span>fromString <span>(str)</span>](/api/oid/#fromString) |  <span class="tags"><span class="sync">Sync</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Oid#</span>cmp <span>(b)</span>](/api/oid/#cmp) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Oid#</span>cpy <span>()</span>](/api/oid/#cpy) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Oid#</span>equal <span>(b)</span>](/api/oid/#equal) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Oid#</span>isZero <span>()</span>](/api/oid/#isZero) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Oid#</span>iszero <span>()</span>](/api/oid/#iszero) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Oid#</span>ncmp <span>(b, len)</span>](/api/oid/#ncmp) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Oid#</span>strcmp <span>(str)</span>](/api/oid/#strcmp) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Oid#</span>streq <span>(str)</span>](/api/oid/#streq) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Oid#</span>tostrS <span>()</span>](/api/oid/#tostrS) |  <span class="tags"><span class="sync">Sync</span></span> |


## <a name='OidShorten'></a>[OidShorten](/api/oid_shorten/)

| Class Methods |  |
| --- | ---: |
| [<span>OidShorten.</span>create <span>(min_length)</span>](/api/oid_shorten/#create) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>OidShorten#</span>add <span>(text_id)</span>](/api/oid_shorten/#add) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |


## <a name='Oidarray'></a>[Oidarray](/api/oidarray/)

| Instance Variables |  |
| --- | ---: |
| [<span>Oidarray#</span>count](/api/oidarray/#count) |  |
| [<span>Oidarray#</span>ids](/api/oidarray/#ids) |  |


## <a name='Packbuilder'></a>[Packbuilder](/api/packbuilder/)

| Class Methods |  |
| --- | ---: |
| [<span>Packbuilder.</span>create <span>(repo)</span>](/api/packbuilder/#create) |  <span class="tags"><span class="sync">Sync</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Packbuilder#</span>hash <span>()</span>](/api/packbuilder/#hash) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Packbuilder#</span>insert <span>(id, name)</span>](/api/packbuilder/#insert) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Packbuilder#</span>insertCommit <span>(id)</span>](/api/packbuilder/#insertCommit) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Packbuilder#</span>insertRecur <span>(id, name)</span>](/api/packbuilder/#insertRecur) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Packbuilder#</span>insertTree <span>(id)</span>](/api/packbuilder/#insertTree) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Packbuilder#</span>insertWalk <span>(walk)</span>](/api/packbuilder/#insertWalk) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Packbuilder#</span>objectCount <span>()</span>](/api/packbuilder/#objectCount) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Packbuilder#</span>setThreads <span>(n)</span>](/api/packbuilder/#setThreads) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Packbuilder#</span>written <span>()</span>](/api/packbuilder/#written) |  <span class="tags"><span class="sync">Sync</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Packbuilder.</span>STAGE](/api/packbuilder/#STAGE)|  |


## <a name='Patch'></a>[Patch](/api/patch/)

| Class Methods |  |
| --- | ---: |
| [<span>Patch.</span>convenientFromDiff <span>(diff)</span>](/api/patch/#convenientFromDiff) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Patch.</span>fromBlobs <span>(old_blob, old_as_path, new_blob, new_as_path, opts)</span>](/api/patch/#fromBlobs) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Patch.</span>fromDiff <span>(diff, idx)</span>](/api/patch/#fromDiff) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Patch#</span>getDelta <span>()</span>](/api/patch/#getDelta) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Patch#</span>getHunk <span>(hunk_idx)</span>](/api/patch/#getHunk) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Patch#</span>getLineInHunk <span>(hunk_idx, line_of_hunk)</span>](/api/patch/#getLineInHunk) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Patch#</span>lineStats <span>()</span>](/api/patch/#lineStats) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Patch#</span>numHunks <span>()</span>](/api/patch/#numHunks) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Patch#</span>numLinesInHunk <span>(hunk_idx)</span>](/api/patch/#numLinesInHunk) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Patch#</span>size <span>(include_context, include_hunk_headers, include_file_headers)</span>](/api/patch/#size) |  <span class="tags"><span class="sync">Sync</span></span> |


## <a name='Path'></a>[Path](/api/path/)

| Class Methods |  |
| --- | ---: |
| [<span>Path.</span>isGitfile <span>(path, pathlen, gitfile, fs)</span>](/api/path/#isGitfile) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Path.</span>FS](/api/path/#FS)|  |
| [<span>Path.</span>GITFILE](/api/path/#GITFILE)|  |


## <a name='Pathspec'></a>[Pathspec](/api/pathspec/)

| Class Methods |  |
| --- | ---: |
| [<span>Pathspec.</span>create <span>(pathspec)</span>](/api/pathspec/#create) |  <span class="tags"><span class="sync">Sync</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Pathspec#</span>matchDiff <span>(diff, flags)</span>](/api/pathspec/#matchDiff) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Pathspec#</span>matchIndex <span>(index, flags)</span>](/api/pathspec/#matchIndex) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Pathspec#</span>matchTree <span>(tree, flags)</span>](/api/pathspec/#matchTree) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Pathspec#</span>matchWorkdir <span>(repo, flags)</span>](/api/pathspec/#matchWorkdir) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Pathspec#</span>matchesPath <span>(flags, path)</span>](/api/pathspec/#matchesPath) |  <span class="tags"><span class="sync">Sync</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Pathspec.</span>FLAG](/api/pathspec/#FLAG)|  |


## <a name='PathspecMatchList'></a>[PathspecMatchList](/api/pathspec_match_list/)

| Instance Methods |  |
| --- | ---: |
| [<span>PathspecMatchList#</span>diffEntry <span>(pos)</span>](/api/pathspec_match_list/#diffEntry) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>PathspecMatchList#</span>entry <span>(pos)</span>](/api/pathspec_match_list/#entry) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>PathspecMatchList#</span>entrycount <span>()</span>](/api/pathspec_match_list/#entrycount) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>PathspecMatchList#</span>failedEntry <span>(pos)</span>](/api/pathspec_match_list/#failedEntry) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>PathspecMatchList#</span>failedEntrycount <span>()</span>](/api/pathspec_match_list/#failedEntrycount) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |


## <a name='Proxy'></a>[Proxy](/api/proxy/)

| ENUMS |  |
| --- | ---: |
| [<span>Proxy.</span>PROXY](/api/proxy/#PROXY)|  |


## <a name='ProxyOptions'></a>[ProxyOptions](/api/proxy_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>ProxyOptions#</span>certificateCheck](/api/proxy_options/#certificateCheck) |  |
| [<span>ProxyOptions#</span>credentials](/api/proxy_options/#credentials) |  |
| [<span>ProxyOptions#</span>payload](/api/proxy_options/#payload) |  |
| [<span>ProxyOptions#</span>type](/api/proxy_options/#type) |  |
| [<span>ProxyOptions#</span>url](/api/proxy_options/#url) |  |
| [<span>ProxyOptions#</span>version](/api/proxy_options/#version) |  |


## <a name='PushOptions'></a>[PushOptions](/api/push_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>PushOptions#</span>callbacks](/api/push_options/#callbacks) |  |
| [<span>PushOptions#</span>customHeaders](/api/push_options/#customHeaders) |  |
| [<span>PushOptions#</span>pbParallelism](/api/push_options/#pbParallelism) |  |
| [<span>PushOptions#</span>proxyOpts](/api/push_options/#proxyOpts) |  |
| [<span>PushOptions#</span>version](/api/push_options/#version) |  |


## <a name='PushUpdate'></a>[PushUpdate](/api/push_update/)

| Instance Variables |  |
| --- | ---: |
| [<span>PushUpdate#</span>dst](/api/push_update/#dst) |  |
| [<span>PushUpdate#</span>dstRefname](/api/push_update/#dstRefname) |  |
| [<span>PushUpdate#</span>src](/api/push_update/#src) |  |
| [<span>PushUpdate#</span>srcRefname](/api/push_update/#srcRefname) |  |


## <a name='Rebase'></a>[Rebase](/api/rebase/)

| Class Methods |  |
| --- | ---: |
| [<span>Rebase.</span>init <span>(repo, branch, upstream, onto, options)</span>](/api/rebase/#init) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Rebase.</span>open <span>(repo, options)</span>](/api/rebase/#open) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Rebase#</span>abort <span>()</span>](/api/rebase/#abort) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Rebase#</span>commit <span>(author, committer, message_encoding, message)</span>](/api/rebase/#commit) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Rebase#</span>finish <span>(signature)</span>](/api/rebase/#finish) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Rebase#</span>inmemoryIndex <span>(index)</span>](/api/rebase/#inmemoryIndex) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Rebase#</span>next <span>()</span>](/api/rebase/#next) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Rebase#</span>ontoId <span>()</span>](/api/rebase/#ontoId) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Rebase#</span>ontoName <span>()</span>](/api/rebase/#ontoName) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Rebase#</span>operationByIndex <span>(idx)</span>](/api/rebase/#operationByIndex) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Rebase#</span>operationCurrent <span>()</span>](/api/rebase/#operationCurrent) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Rebase#</span>operationEntrycount <span>()</span>](/api/rebase/#operationEntrycount) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Rebase#</span>origHeadId <span>()</span>](/api/rebase/#origHeadId) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Rebase#</span>origHeadName <span>()</span>](/api/rebase/#origHeadName) |  <span class="tags"><span class="sync">Sync</span></span> |


## <a name='RebaseOperation'></a>[RebaseOperation](/api/rebase_operation/)

| ENUMS |  |
| --- | ---: |
| [<span>RebaseOperation.</span>REBASE_OPERATION](/api/rebase_operation/#REBASE_OPERATION)|  |

| Instance Variables |  |
| --- | ---: |
| [<span>RebaseOperation#</span>exec](/api/rebase_operation/#exec) |  |
| [<span>RebaseOperation#</span>id](/api/rebase_operation/#id) |  |
| [<span>RebaseOperation#</span>type](/api/rebase_operation/#type) |  |


## <a name='RebaseOptions'></a>[RebaseOptions](/api/rebase_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>RebaseOptions#</span>checkoutOptions](/api/rebase_options/#checkoutOptions) |  |
| [<span>RebaseOptions#</span>inmemory](/api/rebase_options/#inmemory) |  |
| [<span>RebaseOptions#</span>mergeOptions](/api/rebase_options/#mergeOptions) |  |
| [<span>RebaseOptions#</span>payload](/api/rebase_options/#payload) |  |
| [<span>RebaseOptions#</span>quiet](/api/rebase_options/#quiet) |  |
| [<span>RebaseOptions#</span>rewriteNotesRef](/api/rebase_options/#rewriteNotesRef) |  |
| [<span>RebaseOptions#</span>signingCb](/api/rebase_options/#signingCb) |  |
| [<span>RebaseOptions#</span>version](/api/rebase_options/#version) |  |


## <a name='Refdb'></a>[Refdb](/api/refdb/)

| Class Methods |  |
| --- | ---: |
| [<span>Refdb.</span>open <span>(repo)</span>](/api/refdb/#open) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Refdb#</span>compress <span>()</span>](/api/refdb/#compress) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |


## <a name='Reference'></a>[Reference](/api/reference/)

| Class Methods |  |
| --- | ---: |
| [<span>Reference.</span>create <span>(repo, name, id, force, log_message)</span>](/api/reference/#create) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Reference.</span>createMatching <span>(repo, name, id, force, current_id, log_message)</span>](/api/reference/#createMatching) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Reference.</span>dwim <span>(repo, id, callback)</span>](/api/reference/#dwim) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Reference.</span>ensureLog <span>(repo, refname)</span>](/api/reference/#ensureLog) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference.</span>hasLog <span>(repo, refname)</span>](/api/reference/#hasLog) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference.</span>isValidName <span>(refname)</span>](/api/reference/#isValidName) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference.</span>list <span>(repo)</span>](/api/reference/#list) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Reference.</span>lookup <span>(repo, id, callback)</span>](/api/reference/#lookup) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Reference.</span>nameToId <span>(repo, name)</span>](/api/reference/#nameToId) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Reference.</span>normalizeName <span>(buffer_out, buffer_size, name, flags)</span>](/api/reference/#normalizeName) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference.</span>remove <span>(repo, name)</span>](/api/reference/#remove) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference.</span>symbolicCreate <span>(repo, name, target, force, log_message)</span>](/api/reference/#symbolicCreate) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Reference.</span>symbolicCreateMatching <span>(repo, name, target, force, current_value, log_message)</span>](/api/reference/#symbolicCreateMatching) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Reference.</span>updateTerminal <span>(repo, refName, oid, logMessage, signature)</span>](/api/reference/#updateTerminal) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Reference#</span>cmp <span>(ref2)</span>](/api/reference/#cmp) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>delete <span>()</span>](/api/reference/#delete) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>dup <span>()</span>](/api/reference/#dup) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>isBranch <span>()</span>](/api/reference/#isBranch) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>isConcrete <span>()</span>](/api/reference/#isConcrete) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Reference#</span>isHead <span>()</span>](/api/reference/#isHead) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Reference#</span>isNote <span>()</span>](/api/reference/#isNote) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>isRemote <span>()</span>](/api/reference/#isRemote) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>isSymbolic <span>()</span>](/api/reference/#isSymbolic) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Reference#</span>isTag <span>()</span>](/api/reference/#isTag) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>isValid <span>()</span>](/api/reference/#isValid) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Reference#</span>name <span>()</span>](/api/reference/#name) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>owner <span>()</span>](/api/reference/#owner) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>peel <span>(type)</span>](/api/reference/#peel) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>rename <span>(new_name, force, log_message)</span>](/api/reference/#rename) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>resolve <span>()</span>](/api/reference/#resolve) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>setTarget <span>(id, log_message)</span>](/api/reference/#setTarget) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>shorthand <span>()</span>](/api/reference/#shorthand) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>symbolicSetTarget <span>(target, log_message)</span>](/api/reference/#symbolicSetTarget) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>symbolicTarget <span>()</span>](/api/reference/#symbolicTarget) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>target <span>()</span>](/api/reference/#target) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>targetPeel <span>()</span>](/api/reference/#targetPeel) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reference#</span>toString <span>()</span>](/api/reference/#toString) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Reference#</span>type <span>()</span>](/api/reference/#type) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Reference.</span>FORMAT](/api/reference/#FORMAT)|  |
| [<span>Reference.</span>TYPE](/api/reference/#TYPE)|  |


## <a name='Reflog'></a>[Reflog](/api/reflog/)

| Class Methods |  |
| --- | ---: |
| [<span>Reflog.</span>delete <span>(repo, name)</span>](/api/reflog/#delete) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reflog.</span>read <span>(repo, name)</span>](/api/reflog/#read) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Reflog.</span>rename <span>(repo, old_name, name)</span>](/api/reflog/#rename) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Reflog#</span>append <span>(id, committer, msg)</span>](/api/reflog/#append) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reflog#</span>drop <span>(idx, rewrite_previous_entry)</span>](/api/reflog/#drop) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reflog#</span>entryByIndex <span>(idx)</span>](/api/reflog/#entryByIndex) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reflog#</span>entrycount <span>()</span>](/api/reflog/#entrycount) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Reflog#</span>write <span>()</span>](/api/reflog/#write) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |


## <a name='ReflogEntry'></a>[ReflogEntry](/api/reflog_entry/)

| Instance Methods |  |
| --- | ---: |
| [<span>ReflogEntry#</span>committer <span>()</span>](/api/reflog_entry/#committer) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>ReflogEntry#</span>idNew <span>()</span>](/api/reflog_entry/#idNew) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>ReflogEntry#</span>idOld <span>()</span>](/api/reflog_entry/#idOld) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>ReflogEntry#</span>message <span>()</span>](/api/reflog_entry/#message) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |


## <a name='Refspec'></a>[Refspec](/api/refspec/)

| Class Methods |  |
| --- | ---: |
| [<span>Refspec.</span>parse <span>(input, is_fetch)</span>](/api/refspec/#parse) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Refspec#</span>direction <span>()</span>](/api/refspec/#direction) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Refspec#</span>dst <span>()</span>](/api/refspec/#dst) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Refspec#</span>dstMatches <span>(refname)</span>](/api/refspec/#dstMatches) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Refspec#</span>force <span>()</span>](/api/refspec/#force) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Refspec#</span>src <span>()</span>](/api/refspec/#src) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Refspec#</span>srcMatches <span>(refname)</span>](/api/refspec/#srcMatches) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Refspec#</span>string <span>()</span>](/api/refspec/#string) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |


## <a name='Remote'></a>[Remote](/api/remote/)

| Class Methods |  |
| --- | ---: |
| [<span>Remote.</span>addFetch <span>(repo, remote, refspec)</span>](/api/remote/#addFetch) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote.</span>addPush <span>(repo, remote, refspec)</span>](/api/remote/#addPush) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote.</span>create <span>(repo, name, url)</span>](/api/remote/#create) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote.</span>createAnonymous <span>(repo, url)</span>](/api/remote/#createAnonymous) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote.</span>createDetached <span>(url)</span>](/api/remote/#createDetached) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote.</span>createWithFetchspec <span>(repo, name, url, fetch)</span>](/api/remote/#createWithFetchspec) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote.</span>createWithOpts <span>(url, opts)</span>](/api/remote/#createWithOpts) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote.</span>delete <span>(repo, name)</span>](/api/remote/#delete) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote.</span>isValidName <span>(remote_name)</span>](/api/remote/#isValidName) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote.</span>list <span>(repo)</span>](/api/remote/#list) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote.</span>lookup <span>(repo, name, callback)</span>](/api/remote/#lookup) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote.</span>setAutotag <span>(repo, remote, value)</span>](/api/remote/#setAutotag) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote.</span>setPushurl <span>(repo, remote, url)</span>](/api/remote/#setPushurl) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote.</span>setUrl <span>(repo, remote, url)</span>](/api/remote/#setUrl) |  <span class="tags"><span class="sync">Sync</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Remote#</span>autotag <span>()</span>](/api/remote/#autotag) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote#</span>connect <span>(direction, callbacks, proxyOpts, customHeaders, callback)</span>](/api/remote/#connect) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote#</span>connected <span>()</span>](/api/remote/#connected) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote#</span>defaultBranch <span>()</span>](/api/remote/#defaultBranch) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote#</span>disconnect <span>()</span>](/api/remote/#disconnect) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote#</span>download <span>(refSpecs, opts, callback)</span>](/api/remote/#download) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote#</span>dup <span>()</span>](/api/remote/#dup) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote#</span>fetch <span>(refSpecs, opts, message, callback)</span>](/api/remote/#fetch) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote#</span>getFetchRefspecs <span>()</span>](/api/remote/#getFetchRefspecs) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote#</span>getPushRefspecs <span>()</span>](/api/remote/#getPushRefspecs) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote#</span>getRefspec <span>(n)</span>](/api/remote/#getRefspec) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote#</span>name <span>()</span>](/api/remote/#name) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote#</span>owner <span>()</span>](/api/remote/#owner) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote#</span>prune <span>(callbacks)</span>](/api/remote/#prune) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote#</span>pruneRefs <span>()</span>](/api/remote/#pruneRefs) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote#</span>push <span>(refSpecs, options, callback)</span>](/api/remote/#push) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote#</span>pushurl <span>()</span>](/api/remote/#pushurl) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote#</span>referenceList <span>()</span>](/api/remote/#referenceList) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote#</span>refspecCount <span>()</span>](/api/remote/#refspecCount) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote#</span>stats <span>()</span>](/api/remote/#stats) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote#</span>stop <span>()</span>](/api/remote/#stop) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote#</span>updateTips <span>(callbacks, update_fetchhead, download_tags, reflog_message)</span>](/api/remote/#updateTips) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Remote#</span>upload <span>(refSpecs, options, callback)</span>](/api/remote/#upload) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Remote#</span>url <span>()</span>](/api/remote/#url) |  <span class="tags"><span class="sync">Sync</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Remote.</span>AUTOTAG_OPTION](/api/remote/#AUTOTAG_OPTION)|  |
| [<span>Remote.</span>COMPLETION](/api/remote/#COMPLETION)|  |
| [<span>Remote.</span>CREATE_FLAGS](/api/remote/#CREATE_FLAGS)|  |


## <a name='RemoteCallbacks'></a>[RemoteCallbacks](/api/remote_callbacks/)

| Instance Variables |  |
| --- | ---: |
| [<span>RemoteCallbacks#</span>certificateCheck](/api/remote_callbacks/#certificateCheck) |  |
| [<span>RemoteCallbacks#</span>credentials](/api/remote_callbacks/#credentials) |  |
| [<span>RemoteCallbacks#</span>payload](/api/remote_callbacks/#payload) |  |
| [<span>RemoteCallbacks#</span>pushTransferProgress](/api/remote_callbacks/#pushTransferProgress) |  |
| [<span>RemoteCallbacks#</span>pushUpdateReference](/api/remote_callbacks/#pushUpdateReference) |  |
| [<span>RemoteCallbacks#</span>resolveUrl](/api/remote_callbacks/#resolveUrl) |  |
| [<span>RemoteCallbacks#</span>transferProgress](/api/remote_callbacks/#transferProgress) |  |
| [<span>RemoteCallbacks#</span>transport](/api/remote_callbacks/#transport) |  |
| [<span>RemoteCallbacks#</span>version](/api/remote_callbacks/#version) |  |


## <a name='RemoteCreateOptions'></a>[RemoteCreateOptions](/api/remote_create_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>RemoteCreateOptions#</span>fetchspec](/api/remote_create_options/#fetchspec) |  |
| [<span>RemoteCreateOptions#</span>flags](/api/remote_create_options/#flags) |  |
| [<span>RemoteCreateOptions#</span>name](/api/remote_create_options/#name) |  |
| [<span>RemoteCreateOptions#</span>repository](/api/remote_create_options/#repository) |  |
| [<span>RemoteCreateOptions#</span>version](/api/remote_create_options/#version) |  |


## <a name='RemoteHead'></a>[RemoteHead](/api/remote_head/)

| Instance Variables |  |
| --- | ---: |
| [<span>RemoteHead#</span>local](/api/remote_head/#local) |  |
| [<span>RemoteHead#</span>loid](/api/remote_head/#loid) |  |
| [<span>RemoteHead#</span>name](/api/remote_head/#name) |  |
| [<span>RemoteHead#</span>oid](/api/remote_head/#oid) |  |
| [<span>RemoteHead#</span>symrefTarget](/api/remote_head/#symrefTarget) |  |


## <a name='Repository'></a>[Repository](/api/repository/)

| Class Methods |  |
| --- | ---: |
| [<span>Repository.</span>discover <span>(startPath, acrossFs, ceilingDirs)</span>](/api/repository/#discover) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository.</span>init <span>(path, is_bare)</span>](/api/repository/#init) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository.</span>initExt <span>(repo_path, opts)</span>](/api/repository/#initExt) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository.</span>open <span>(path)</span>](/api/repository/#open) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository.</span>openBare <span>(bare_path)</span>](/api/repository/#openBare) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository.</span>openExt <span>(path, flags, ceiling_dirs)</span>](/api/repository/#openExt) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository.</span>openFromWorktree <span>(wt)</span>](/api/repository/#openFromWorktree) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository.</span>wrapOdb <span>(odb)</span>](/api/repository/#wrapOdb) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Repository#</span>checkoutBranch <span>(branch, opts)</span>](/api/repository/#checkoutBranch) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>checkoutRef <span>(reference, opts)</span>](/api/repository/#checkoutRef) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>cleanup <span>()</span>](/api/repository/#cleanup) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>commondir <span>()</span>](/api/repository/#commondir) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>config <span>()</span>](/api/repository/#config) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>continueRebase <span>(signature, beforeNextFn, beforeFinishFn, rebaseOptions)</span>](/api/repository/#continueRebase) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>createBlobFromBuffer <span>(buffer)</span>](/api/repository/#createBlobFromBuffer) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>createBranch <span>(name, commit, force)</span>](/api/repository/#createBranch) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>createCommit <span>(updateRef, author, committer, message, Tree, parents)</span>](/api/repository/#createCommit) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>createCommitBuffer <span>(author, committer, message, treeOid, parents)</span>](/api/repository/#createCommitBuffer) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>createCommitOnHead <span>(filesToAdd, author, committer, message)</span>](/api/repository/#createCommitOnHead) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>createCommitWithSignature <span>(updateRef, author, committer, message, Tree, parents, onSignature)</span>](/api/repository/#createCommitWithSignature) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>createLightweightTag <span>(String, name)</span>](/api/repository/#createLightweightTag) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>createRevWalk <span>()</span>](/api/repository/#createRevWalk) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>createTag <span>(String, name, message)</span>](/api/repository/#createTag) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>defaultSignature <span>()</span>](/api/repository/#defaultSignature) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>deleteTagByName <span>(Short)</span>](/api/repository/#deleteTagByName) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>detachHead <span>()</span>](/api/repository/#detachHead) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>fetch <span>(remote, fetchOptions)</span>](/api/repository/#fetch) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>fetchAll <span>(fetchOptions, callback)</span>](/api/repository/#fetchAll) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>fetchheadForeach <span>(callback)</span>](/api/repository/#fetchheadForeach) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getBlob <span>(String)</span>](/api/repository/#getBlob) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getBranch <span>(name)</span>](/api/repository/#getBranch) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getBranchCommit <span>(name)</span>](/api/repository/#getBranchCommit) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getCommit <span>(String)</span>](/api/repository/#getCommit) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getCurrentBranch <span>()</span>](/api/repository/#getCurrentBranch) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getHeadCommit <span>()</span>](/api/repository/#getHeadCommit) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getMasterCommit <span>()</span>](/api/repository/#getMasterCommit) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getNamespace <span>()</span>](/api/repository/#getNamespace) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>getReference <span>(name)</span>](/api/repository/#getReference) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getReferenceCommit <span>(name)</span>](/api/repository/#getReferenceCommit) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getReferenceNames <span>(type)</span>](/api/repository/#getReferenceNames) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getReferences <span>()</span>](/api/repository/#getReferences) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getRemote <span>(remote, callback)</span>](/api/repository/#getRemote) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getRemoteNames <span>(Optional)</span>](/api/repository/#getRemoteNames) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getRemotes <span>()</span>](/api/repository/#getRemotes) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getStatus <span>(opts)</span>](/api/repository/#getStatus) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getStatusExt <span>(opts)</span>](/api/repository/#getStatusExt) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getSubmoduleNames <span>()</span>](/api/repository/#getSubmoduleNames) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getSubmodules <span>()</span>](/api/repository/#getSubmodules) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getTag <span>(String)</span>](/api/repository/#getTag) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getTagByName <span>(Short)</span>](/api/repository/#getTagByName) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>getTree <span>(String)</span>](/api/repository/#getTree) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>head <span>()</span>](/api/repository/#head) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>headDetached <span>()</span>](/api/repository/#headDetached) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>headDetachedForWorktree <span>(name)</span>](/api/repository/#headDetachedForWorktree) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>headForWorktree <span>(name)</span>](/api/repository/#headForWorktree) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>headUnborn <span>()</span>](/api/repository/#headUnborn) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>ident <span>()</span>](/api/repository/#ident) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>index <span>()</span>](/api/repository/#index) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>isApplyingMailbox <span>()</span>](/api/repository/#isApplyingMailbox) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>isBare <span>()</span>](/api/repository/#isBare) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>isBisecting <span>()</span>](/api/repository/#isBisecting) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>isCherrypicking <span>()</span>](/api/repository/#isCherrypicking) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>isDefaultState <span>()</span>](/api/repository/#isDefaultState) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>isEmpty <span>()</span>](/api/repository/#isEmpty) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>isMerging <span>()</span>](/api/repository/#isMerging) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>isRebasing <span>()</span>](/api/repository/#isRebasing) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>isReverting <span>()</span>](/api/repository/#isReverting) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>isShallow <span>()</span>](/api/repository/#isShallow) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>isWorktree <span>()</span>](/api/repository/#isWorktree) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>itemPath <span>(item)</span>](/api/repository/#itemPath) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>mergeBranches <span>(to, from, signature, mergePreference, mergeOptions, mergeBranchOptions)</span>](/api/repository/#mergeBranches) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>mergeheadForeach <span>(callback)</span>](/api/repository/#mergeheadForeach) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>messageRemove <span>()</span>](/api/repository/#messageRemove) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>odb <span>()</span>](/api/repository/#odb) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>path <span>()</span>](/api/repository/#path) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>rebaseBranches <span>(branch, upstream, onto, signature, beforeNextFn, beforeFinishFn, rebaseOptions)</span>](/api/repository/#rebaseBranches) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>refdb <span>()</span>](/api/repository/#refdb) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>refreshIndex <span>()</span>](/api/repository/#refreshIndex) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>refreshReferences <span>()</span>](/api/repository/#refreshReferences) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>setHead <span>(refname)</span>](/api/repository/#setHead) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>setHeadDetached <span>(commitish)</span>](/api/repository/#setHeadDetached) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>setHeadDetachedFromAnnotated <span>(commitish)</span>](/api/repository/#setHeadDetachedFromAnnotated) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>setIdent <span>(name, email)</span>](/api/repository/#setIdent) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>setIndex <span>(index)</span>](/api/repository/#setIndex) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>setNamespace <span>(nmspace)</span>](/api/repository/#setNamespace) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>setWorkdir <span>(workdir, update_gitlink)</span>](/api/repository/#setWorkdir) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>stageFilemode <span>(filePath, stageNew)</span>](/api/repository/#stageFilemode) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>stageLines <span>(filePath, selectedLines, isStaged)</span>](/api/repository/#stageLines) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Repository#</span>state <span>()</span>](/api/repository/#state) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>stateCleanup <span>()</span>](/api/repository/#stateCleanup) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>submoduleCacheAll <span>()</span>](/api/repository/#submoduleCacheAll) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>submoduleCacheClear <span>()</span>](/api/repository/#submoduleCacheClear) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>treeBuilder <span>(tree)</span>](/api/repository/#treeBuilder) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Repository#</span>workdir <span>()</span>](/api/repository/#workdir) |  <span class="tags"><span class="sync">Sync</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Repository.</span>INIT_FLAG](/api/repository/#INIT_FLAG)|  |
| [<span>Repository.</span>INIT_MODE](/api/repository/#INIT_MODE)|  |
| [<span>Repository.</span>ITEM](/api/repository/#ITEM)|  |
| [<span>Repository.</span>OPEN_FLAG](/api/repository/#OPEN_FLAG)|  |
| [<span>Repository.</span>STATE](/api/repository/#STATE)|  |


## <a name='RepositoryInitOptions'></a>[RepositoryInitOptions](/api/repository_init_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>RepositoryInitOptions#</span>description](/api/repository_init_options/#description) |  |
| [<span>RepositoryInitOptions#</span>flags](/api/repository_init_options/#flags) |  |
| [<span>RepositoryInitOptions#</span>initialHead](/api/repository_init_options/#initialHead) |  |
| [<span>RepositoryInitOptions#</span>mode](/api/repository_init_options/#mode) |  |
| [<span>RepositoryInitOptions#</span>originUrl](/api/repository_init_options/#originUrl) |  |
| [<span>RepositoryInitOptions#</span>templatePath](/api/repository_init_options/#templatePath) |  |
| [<span>RepositoryInitOptions#</span>version](/api/repository_init_options/#version) |  |
| [<span>RepositoryInitOptions#</span>workdirPath](/api/repository_init_options/#workdirPath) |  |


## <a name='Reset'></a>[Reset](/api/reset/)

| Class Methods |  |
| --- | ---: |
| [<span>Reset.</span>default <span>(repo, target, pathspecs)</span>](/api/reset/#default) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Reset.</span>fromAnnotated <span>(repo, target, resetType, opts)</span>](/api/reset/#fromAnnotated) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Reset.</span>reset <span>(repo, target, resetType, opts)</span>](/api/reset/#reset) |  <span class="tags"><span class="async">Async</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Reset.</span>TYPE](/api/reset/#TYPE)|  |


## <a name='Revert'></a>[Revert](/api/revert/)

| Class Methods |  |
| --- | ---: |
| [<span>Revert.</span>commit <span>(repo, revert_commit, our_commit, mainline, merge_options)</span>](/api/revert/#commit) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Revert.</span>revert <span>(repo, commit, revert_options)</span>](/api/revert/#revert) |  <span class="tags"><span class="async">Async</span></span> |


## <a name='RevertOptions'></a>[RevertOptions](/api/revert_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>RevertOptions#</span>checkoutOpts](/api/revert_options/#checkoutOpts) |  |
| [<span>RevertOptions#</span>mainline](/api/revert_options/#mainline) |  |
| [<span>RevertOptions#</span>mergeOpts](/api/revert_options/#mergeOpts) |  |
| [<span>RevertOptions#</span>version](/api/revert_options/#version) |  |


## <a name='Revparse'></a>[Revparse](/api/revparse/)

| Class Methods |  |
| --- | ---: |
| [<span>Revparse.</span>ext <span>(object_out, reference_out, repo, spec)</span>](/api/revparse/#ext) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Revparse.</span>single <span>(repo, spec)</span>](/api/revparse/#single) |  <span class="tags"><span class="async">Async</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Revparse.</span>MODE](/api/revparse/#MODE)|  |


## <a name='Revwalk'></a>[Revwalk](/api/revwalk/)

| Class Methods |  |
| --- | ---: |
| [<span>Revwalk.</span>create <span>(repo)</span>](/api/revwalk/#create) |  <span class="tags"><span class="sync">Sync</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Revwalk#</span>commitWalk <span>(max_count)</span>](/api/revwalk/#commitWalk) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Revwalk#</span>fastWalk <span>(max_count)</span>](/api/revwalk/#fastWalk) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Revwalk#</span>fileHistoryWalk <span>(filePath, max_count)</span>](/api/revwalk/#fileHistoryWalk) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Revwalk#</span>getCommits <span>(count)</span>](/api/revwalk/#getCommits) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Revwalk#</span>getCommitsUntil <span>(checkFn)</span>](/api/revwalk/#getCommitsUntil) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Revwalk#</span>hide <span>(commit_id)</span>](/api/revwalk/#hide) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Revwalk#</span>hideGlob <span>(glob)</span>](/api/revwalk/#hideGlob) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Revwalk#</span>hideHead <span>()</span>](/api/revwalk/#hideHead) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Revwalk#</span>hideRef <span>(refname)</span>](/api/revwalk/#hideRef) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Revwalk#</span>next <span>()</span>](/api/revwalk/#next) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Revwalk#</span>push <span>(id)</span>](/api/revwalk/#push) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Revwalk#</span>pushGlob <span>(glob)</span>](/api/revwalk/#pushGlob) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Revwalk#</span>pushHead <span>()</span>](/api/revwalk/#pushHead) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Revwalk#</span>pushRange <span>(range)</span>](/api/revwalk/#pushRange) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Revwalk#</span>pushRef <span>(refname)</span>](/api/revwalk/#pushRef) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Revwalk#</span>repository <span>()</span>](/api/revwalk/#repository) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Revwalk#</span>reset <span>()</span>](/api/revwalk/#reset) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Revwalk#</span>simplifyFirstParent <span>()</span>](/api/revwalk/#simplifyFirstParent) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Revwalk#</span>sorting <span>(sort)</span>](/api/revwalk/#sorting) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Revwalk#</span>walk <span>(oid, callback)</span>](/api/revwalk/#walk) |  <span class="tags"><span class="sync">Sync</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Revwalk.</span>SORT](/api/revwalk/#SORT)|  |


## <a name='Signature'></a>[Signature](/api/signature/)

| Class Methods |  |
| --- | ---: |
| [<span>Signature.</span>create <span>(name, email, time, offset)</span>](/api/signature/#create) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Signature.</span>default <span>(repo)</span>](/api/signature/#default) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Signature.</span>fromBuffer <span>(buf)</span>](/api/signature/#fromBuffer) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Signature.</span>now <span>(name, email)</span>](/api/signature/#now) |  <span class="tags"><span class="sync">Sync</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Signature#</span>toString <span>(withTime)</span>](/api/signature/#toString) |  <span class="tags"><span class="sync">Sync</span></span> |

| Instance Variables |  |
| --- | ---: |
| [<span>Signature#</span>email](/api/signature/#email) |  |
| [<span>Signature#</span>name](/api/signature/#name) |  |
| [<span>Signature#</span>when](/api/signature/#when) |  |


## <a name='Stash'></a>[Stash](/api/stash/)

| Class Methods |  |
| --- | ---: |
| [<span>Stash.</span>apply <span>(repo, index, options)</span>](/api/stash/#apply) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Stash.</span>drop <span>(repo, index)</span>](/api/stash/#drop) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Stash.</span>foreach <span>(repo, callback, payload)</span>](/api/stash/#foreach) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Stash.</span>pop <span>(repo, index, options)</span>](/api/stash/#pop) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Stash.</span>save <span>(repo, stasher, message, flags)</span>](/api/stash/#save) |  <span class="tags"><span class="async">Async</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Stash.</span>APPLY_FLAGS](/api/stash/#APPLY_FLAGS)|  |
| [<span>Stash.</span>APPLY_PROGRESS](/api/stash/#APPLY_PROGRESS)|  |
| [<span>Stash.</span>FLAGS](/api/stash/#FLAGS)|  |


## <a name='StashApplyOptions'></a>[StashApplyOptions](/api/stash_apply_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>StashApplyOptions#</span>checkoutOptions](/api/stash_apply_options/#checkoutOptions) |  |
| [<span>StashApplyOptions#</span>flags](/api/stash_apply_options/#flags) |  |
| [<span>StashApplyOptions#</span>progressCb](/api/stash_apply_options/#progressCb) |  |
| [<span>StashApplyOptions#</span>progressPayload](/api/stash_apply_options/#progressPayload) |  |
| [<span>StashApplyOptions#</span>version](/api/stash_apply_options/#version) |  |


## <a name='Status'></a>[Status](/api/status/)

| Class Methods |  |
| --- | ---: |
| [<span>Status.</span>byIndex <span>(statuslist, idx)</span>](/api/status/#byIndex) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Status.</span>file <span>(repo, path)</span>](/api/status/#file) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Status.</span>foreach <span>(repo, callback, payload)</span>](/api/status/#foreach) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Status.</span>foreachExt <span>(repo, opts, callback, payload)</span>](/api/status/#foreachExt) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Status.</span>shouldIgnore <span>(ignored, repo, path)</span>](/api/status/#shouldIgnore) |  <span class="tags"><span class="sync">Sync</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Status.</span>OPT](/api/status/#OPT)|  |
| [<span>Status.</span>SHOW](/api/status/#SHOW)|  |
| [<span>Status.</span>STATUS](/api/status/#STATUS)|  |


## <a name='StatusEntry'></a>[StatusEntry](/api/status_entry/)

| Instance Variables |  |
| --- | ---: |
| [<span>StatusEntry#</span>headToIndex](/api/status_entry/#headToIndex) |  |
| [<span>StatusEntry#</span>indexToWorkdir](/api/status_entry/#indexToWorkdir) |  |
| [<span>StatusEntry#</span>status](/api/status_entry/#status) |  |


## <a name='StatusList'></a>[StatusList](/api/status_list/)

| Class Methods |  |
| --- | ---: |
| [<span>StatusList.</span>create <span>(repo, opts)</span>](/api/status_list/#create) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>StatusList#</span>entrycount <span>()</span>](/api/status_list/#entrycount) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>StatusList#</span>getPerfdata <span>()</span>](/api/status_list/#getPerfdata) |  <span class="tags"><span class="sync">Sync</span></span> |


## <a name='StatusOptions'></a>[StatusOptions](/api/status_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>StatusOptions#</span>baseline](/api/status_options/#baseline) |  |
| [<span>StatusOptions#</span>flags](/api/status_options/#flags) |  |
| [<span>StatusOptions#</span>pathspec](/api/status_options/#pathspec) |  |
| [<span>StatusOptions#</span>show](/api/status_options/#show) |  |
| [<span>StatusOptions#</span>version](/api/status_options/#version) |  |


## <a name='Strarray'></a>[Strarray](/api/strarray/)

| Instance Methods |  |
| --- | ---: |
| [<span>Strarray#</span>copy <span>(src)</span>](/api/strarray/#copy) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |

| Instance Variables |  |
| --- | ---: |
| [<span>Strarray#</span>count](/api/strarray/#count) |  |
| [<span>Strarray#</span>strings](/api/strarray/#strings) |  |


## <a name='Submodule'></a>[Submodule](/api/submodule/)

| Class Methods |  |
| --- | ---: |
| [<span>Submodule.</span>addSetup <span>(repo, url, path, use_gitlink)</span>](/api/submodule/#addSetup) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Submodule.</span>foreach <span>(repo, callback, payload)</span>](/api/submodule/#foreach) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Submodule.</span>lookup <span>(repo, name)</span>](/api/submodule/#lookup) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Submodule.</span>resolveUrl <span>(repo, url)</span>](/api/submodule/#resolveUrl) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Submodule.</span>setBranch <span>(repo, name, branch)</span>](/api/submodule/#setBranch) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Submodule.</span>setFetchRecurseSubmodules <span>(repo, name, fetch_recurse_submodules)</span>](/api/submodule/#setFetchRecurseSubmodules) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Submodule.</span>setIgnore <span>(repo, name, ignore)</span>](/api/submodule/#setIgnore) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Submodule.</span>setUpdate <span>(repo, name, update)</span>](/api/submodule/#setUpdate) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Submodule.</span>setUrl <span>(repo, name, url)</span>](/api/submodule/#setUrl) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Submodule.</span>status <span>(repo, name, ignore)</span>](/api/submodule/#status) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Submodule#</span>addFinalize <span>()</span>](/api/submodule/#addFinalize) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Submodule#</span>addToIndex <span>(write_index)</span>](/api/submodule/#addToIndex) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Submodule#</span>branch <span>()</span>](/api/submodule/#branch) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Submodule#</span>fetchRecurseSubmodules <span>()</span>](/api/submodule/#fetchRecurseSubmodules) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Submodule#</span>headId <span>()</span>](/api/submodule/#headId) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Submodule#</span>ignore <span>()</span>](/api/submodule/#ignore) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Submodule#</span>indexId <span>()</span>](/api/submodule/#indexId) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Submodule#</span>init <span>(overwrite)</span>](/api/submodule/#init) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Submodule#</span>location <span>()</span>](/api/submodule/#location) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Submodule#</span>name <span>()</span>](/api/submodule/#name) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Submodule#</span>open <span>()</span>](/api/submodule/#open) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Submodule#</span>owner <span>()</span>](/api/submodule/#owner) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Submodule#</span>path <span>()</span>](/api/submodule/#path) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Submodule#</span>reload <span>(force)</span>](/api/submodule/#reload) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Submodule#</span>repoInit <span>(use_gitlink)</span>](/api/submodule/#repoInit) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Submodule#</span>sync <span>()</span>](/api/submodule/#sync) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Submodule#</span>update <span>(init, options)</span>](/api/submodule/#update) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Submodule#</span>updateStrategy <span>()</span>](/api/submodule/#updateStrategy) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Submodule#</span>url <span>()</span>](/api/submodule/#url) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Submodule#</span>wdId <span>()</span>](/api/submodule/#wdId) |  <span class="tags"><span class="sync">Sync</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Submodule.</span>IGNORE](/api/submodule/#IGNORE)|  |
| [<span>Submodule.</span>RECURSE](/api/submodule/#RECURSE)|  |
| [<span>Submodule.</span>STATUS](/api/submodule/#STATUS)|  |
| [<span>Submodule.</span>UPDATE](/api/submodule/#UPDATE)|  |


## <a name='SubmoduleUpdateOptions'></a>[SubmoduleUpdateOptions](/api/submodule_update_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>SubmoduleUpdateOptions#</span>allowFetch](/api/submodule_update_options/#allowFetch) |  |
| [<span>SubmoduleUpdateOptions#</span>checkoutOpts](/api/submodule_update_options/#checkoutOpts) |  |
| [<span>SubmoduleUpdateOptions#</span>fetchOpts](/api/submodule_update_options/#fetchOpts) |  |
| [<span>SubmoduleUpdateOptions#</span>version](/api/submodule_update_options/#version) |  |


## <a name='Tag'></a>[Tag](/api/tag/)

| Class Methods |  |
| --- | ---: |
| [<span>Tag.</span>annotationCreate <span>(repo, tag_name, target, tagger, message)</span>](/api/tag/#annotationCreate) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tag.</span>create <span>(repo, tag_name, target, tagger, message, force)</span>](/api/tag/#create) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tag.</span>createBuffer <span>(repo, tagName, target, tagger)</span>](/api/tag/#createBuffer) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tag.</span>createFromBuffer <span>(repo, buffer, force)</span>](/api/tag/#createFromBuffer) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tag.</span>createLightweight <span>(repo, tag_name, target, force)</span>](/api/tag/#createLightweight) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tag.</span>createWithSignature <span>(repo, tagName, target, tagger, message, force, signingCallback)</span>](/api/tag/#createWithSignature) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tag.</span>delete <span>(repo, tag_name)</span>](/api/tag/#delete) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tag.</span>list <span>(repo)</span>](/api/tag/#list) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tag.</span>listMatch <span>(pattern, repo)</span>](/api/tag/#listMatch) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tag.</span>lookup <span>(repo, id)</span>](/api/tag/#lookup) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tag.</span>lookupPrefix <span>(repo, id, len)</span>](/api/tag/#lookupPrefix) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Tag#</span>dup <span>()</span>](/api/tag/#dup) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tag#</span>extractSignature <span>(signatureType)</span>](/api/tag/#extractSignature) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tag#</span>id <span>()</span>](/api/tag/#id) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tag#</span>message <span>()</span>](/api/tag/#message) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tag#</span>name <span>()</span>](/api/tag/#name) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tag#</span>owner <span>()</span>](/api/tag/#owner) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tag#</span>peel <span>()</span>](/api/tag/#peel) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tag#</span>tagger <span>()</span>](/api/tag/#tagger) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tag#</span>target <span>()</span>](/api/tag/#target) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tag#</span>targetId <span>()</span>](/api/tag/#targetId) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tag#</span>targetType <span>()</span>](/api/tag/#targetType) |  <span class="tags"><span class="sync">Sync</span></span> |


## <a name='Time'></a>[Time](/api/time/)

| Instance Variables |  |
| --- | ---: |
| [<span>Time#</span>offset](/api/time/#offset) |  |
| [<span>Time#</span>sign](/api/time/#sign) |  |
| [<span>Time#</span>time](/api/time/#time) |  |


## <a name='Trace'></a>[Trace](/api/trace/)

| ENUMS |  |
| --- | ---: |
| [<span>Trace.</span>LEVEL](/api/trace/#LEVEL)|  |


## <a name='Transaction'></a>[Transaction](/api/transaction/)

| Class Methods |  |
| --- | ---: |
| [<span>Transaction.</span>create <span>(repo)</span>](/api/transaction/#create) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Transaction#</span>commit <span>()</span>](/api/transaction/#commit) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Transaction#</span>lockRef <span>(refname)</span>](/api/transaction/#lockRef) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Transaction#</span>remove <span>(refname)</span>](/api/transaction/#remove) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Transaction#</span>setReflog <span>(refname, reflog)</span>](/api/transaction/#setReflog) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Transaction#</span>setSymbolicTarget <span>(refname, target, sig, msg)</span>](/api/transaction/#setSymbolicTarget) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Transaction#</span>setTarget <span>(refname, target, sig, msg)</span>](/api/transaction/#setTarget) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |



## <a name='Tree'></a>[Tree](/api/tree/)

| Class Methods |  |
| --- | ---: |
| [<span>Tree.</span>entryCmp <span>(e1, e2)</span>](/api/tree/#entryCmp) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tree.</span>lookup <span>(repo, id, callback)</span>](/api/tree/#lookup) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tree.</span>lookupPrefix <span>(repo, id, len)</span>](/api/tree/#lookupPrefix) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Tree#</span>_entryByIndex <span>(idx)</span>](/api/tree/#_entryByIndex) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tree#</span>_entryByName <span>(filename)</span>](/api/tree/#_entryByName) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tree#</span>builder <span>()</span>](/api/tree/#builder) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tree#</span>createUpdated <span>(repo, nupdates, updates)</span>](/api/tree/#createUpdated) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tree#</span>diff <span>(tree, callback)</span>](/api/tree/#diff) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tree#</span>diffWithOptions <span>(tree, options, callback)</span>](/api/tree/#diffWithOptions) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tree#</span>dup <span>()</span>](/api/tree/#dup) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tree#</span>entries <span>()</span>](/api/tree/#entries) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tree#</span>entryById <span>(id)</span>](/api/tree/#entryById) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tree#</span>entryByIndex <span>(i)</span>](/api/tree/#entryByIndex) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tree#</span>entryByName <span>(name)</span>](/api/tree/#entryByName) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tree#</span>entryByPath <span>(path)</span>](/api/tree/#entryByPath) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tree#</span>entryCount <span>()</span>](/api/tree/#entryCount) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tree#</span>getEntry <span>(filePath)</span>](/api/tree/#getEntry) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>Tree#</span>id <span>()</span>](/api/tree/#id) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tree#</span>owner <span>()</span>](/api/tree/#owner) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tree#</span>path <span>()</span>](/api/tree/#path) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Tree#</span>walk <span>([blobsOnly)</span>](/api/tree/#walk) |  <span class="tags"><span class="sync">Sync</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Tree.</span>UPDATE](/api/tree/#UPDATE)|  |
| [<span>Tree.</span>WALK_MODE](/api/tree/#WALK_MODE)|  |


## <a name='TreeEntry'></a>[TreeEntry](/api/tree_entry/)

| Instance Methods |  |
| --- | ---: |
| [<span>TreeEntry#</span>filemode <span>()</span>](/api/tree_entry/#filemode) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>TreeEntry#</span>filemodeRaw <span>()</span>](/api/tree_entry/#filemodeRaw) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>TreeEntry#</span>getBlob <span>()</span>](/api/tree_entry/#getBlob) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>TreeEntry#</span>getTree <span>()</span>](/api/tree_entry/#getTree) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>TreeEntry#</span>id <span>()</span>](/api/tree_entry/#id) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>TreeEntry#</span>isBlob <span>()</span>](/api/tree_entry/#isBlob) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>TreeEntry#</span>isDirectory <span>()</span>](/api/tree_entry/#isDirectory) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>TreeEntry#</span>isFile <span>()</span>](/api/tree_entry/#isFile) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>TreeEntry#</span>isSubmodule <span>()</span>](/api/tree_entry/#isSubmodule) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>TreeEntry#</span>isTree <span>()</span>](/api/tree_entry/#isTree) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>TreeEntry#</span>name <span>()</span>](/api/tree_entry/#name) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>TreeEntry#</span>oid <span>()</span>](/api/tree_entry/#oid) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>TreeEntry#</span>path <span>()</span>](/api/tree_entry/#path) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>TreeEntry#</span>sha <span>()</span>](/api/tree_entry/#sha) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>TreeEntry#</span>toObject <span>(repo)</span>](/api/tree_entry/#toObject) |  <span class="tags"><span class="async">Async</span></span> |
| [<span>TreeEntry#</span>toString <span>()</span>](/api/tree_entry/#toString) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>TreeEntry#</span>type <span>()</span>](/api/tree_entry/#type) |  <span class="tags"><span class="sync">Sync</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>TreeEntry.</span>FILEMODE](/api/tree_entry/#FILEMODE)|  |


## <a name='TreeUpdate'></a>[TreeUpdate](/api/tree_update/)

| Instance Variables |  |
| --- | ---: |
| [<span>TreeUpdate#</span>action](/api/tree_update/#action) |  |
| [<span>TreeUpdate#</span>filemode](/api/tree_update/#filemode) |  |
| [<span>TreeUpdate#</span>id](/api/tree_update/#id) |  |
| [<span>TreeUpdate#</span>path](/api/tree_update/#path) |  |


## <a name='Treebuilder'></a>[Treebuilder](/api/treebuilder/)

| Class Methods |  |
| --- | ---: |
| [<span>Treebuilder.</span>create <span>(repo, source)</span>](/api/treebuilder/#create) |  <span class="tags"><span class="async">Async</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Treebuilder#</span>clear <span>()</span>](/api/treebuilder/#clear) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Treebuilder#</span>entrycount <span>()</span>](/api/treebuilder/#entrycount) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Treebuilder#</span>get <span>(filename)</span>](/api/treebuilder/#get) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Treebuilder#</span>insert <span>(filename, id, filemode)</span>](/api/treebuilder/#insert) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Treebuilder#</span>remove <span>(filename)</span>](/api/treebuilder/#remove) |  <span class="tags"><span class="sync">Sync</span></span> |
| [<span>Treebuilder#</span>write <span>()</span>](/api/treebuilder/#write) |  <span class="tags"><span class="async">Async</span></span> |


## <a name='Worktree'></a>[Worktree](/api/worktree/)

| Class Methods |  |
| --- | ---: |
| [<span>Worktree.</span>add <span>(repo, name, path, opts)</span>](/api/worktree/#add) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Worktree.</span>list <span>(repo)</span>](/api/worktree/#list) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Worktree.</span>lookup <span>(repo, name)</span>](/api/worktree/#lookup) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |
| [<span>Worktree.</span>openFromRepository <span>(repo)</span>](/api/worktree/#openFromRepository) |  <span class="tags"><span class="async">Async</span><span class="experimental">Experimental</span></span> |

| Instance Methods |  |
| --- | ---: |
| [<span>Worktree#</span>isLocked <span>(reason)</span>](/api/worktree/#isLocked) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Worktree#</span>isPrunable <span>(opts)</span>](/api/worktree/#isPrunable) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Worktree#</span>lock <span>(reason)</span>](/api/worktree/#lock) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Worktree#</span>name <span>()</span>](/api/worktree/#name) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Worktree#</span>path <span>()</span>](/api/worktree/#path) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Worktree#</span>prune <span>(opts)</span>](/api/worktree/#prune) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Worktree#</span>unlock <span>()</span>](/api/worktree/#unlock) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |
| [<span>Worktree#</span>validate <span>()</span>](/api/worktree/#validate) |  <span class="tags"><span class="sync">Sync</span><span class="experimental">Experimental</span></span> |

| ENUMS |  |
| --- | ---: |
| [<span>Worktree.</span>PRUNE](/api/worktree/#PRUNE)|  |


## <a name='WorktreeAddOptions'></a>[WorktreeAddOptions](/api/worktree_add_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>WorktreeAddOptions#</span>lock](/api/worktree_add_options/#lock) |  |
| [<span>WorktreeAddOptions#</span>ref](/api/worktree_add_options/#ref) |  |
| [<span>WorktreeAddOptions#</span>version](/api/worktree_add_options/#version) |  |


## <a name='WorktreePruneOptions'></a>[WorktreePruneOptions](/api/worktree_prune_options/)

| Instance Variables |  |
| --- | ---: |
| [<span>WorktreePruneOptions#</span>flags](/api/worktree_prune_options/#flags) |  |
| [<span>WorktreePruneOptions#</span>version](/api/worktree_prune_options/#version) |  |



