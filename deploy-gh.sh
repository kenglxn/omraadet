#!/bin/bash

set -e
git checkout gh-pages
ember build --environment production
git add dist --force
git commit -m "deploy to gh-pages"
git subtree push --prefix dist origin gh-pages
git checkout master
