`script/bootstrap`
`script/server`
`open http://localhost:4000`

## Generating the site

While in development, the generator will not clone the nodegit repo. You'll need to soft-link the nodegit repository into `generate/`.

```bash
ln -s /path/to/nodegit generate/nodegit
```

Once linked, generate the site.

```bash
node generate
```

If you're running `script/server` in another terminal tab, it will read the changes and regenerate the site.
