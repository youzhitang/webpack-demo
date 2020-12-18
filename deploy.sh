yarn build &&
git checkout gh-pages &&
rm -rf src *.js *.json *.sh *.html *.css *.jpg &&
mv dist/* ./ &&
rm -rf dist ;
git add . &&
git commit . -m 'create website' &&
git push