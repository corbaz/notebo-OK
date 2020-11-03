cls
REM cd C:\www
call www

call pnpm add --global vuepress

mkdir %1

cd %1

call npm init -y

call pnpm add -D vuepress

mkdir docs && echo '# Hello VuePress' > docs/README.md

REM package.json

REM Este paso es opcional pero muy recomendable, el resto de la documentación asumirá que se agregan esos scripts.

REM {
REM   "scripts": {
REM    "build": "vuepress build docs",
REM    "dev": "vuepress dev docs",
REM    "update": "ncu -u && pnpm install",
REM    "notebo-ok": "npm run build && cd dist && surge --domain notebo-ok.surge.sh",
REM    "corbaz": "npm run build && cd docs/.vuepress/dist && surge --domain corbaz.surge.sh"
REM    "vue-press": "npm run build && cd docs/.vuepress/dist && surge --domain vue-press.surge.sh"
REM  },
REM }

call code c:\www\%1

