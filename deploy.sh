#!/usr/bin/env sh
# 说明：一键双击 自动上传部署脚本 双击执行即可
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件 命令行同package.json中script命令一致
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
# 如果发布到 https://<USERNAME>.github.io
git remote add origin https://github.com/GH-LiuYu/GH-LiuYu.github.io.git
git push -u origin master -f
#以上步骤可以先测试一次，因为github提交要提供账号密码

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
