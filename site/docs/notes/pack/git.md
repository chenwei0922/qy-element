---
layout: doc
---

# GIT

## 基础命令
- `git push --set-upstream origin <local_branch>`                      将本地分支推送到远端同名分支
- `git branch --set-upstream-to=origin/<remote_branch> <local_branch>` 本地分支绑定远端分支
- `git branch -a`                          查看所有分支(本地和远程(红色标记的))
- `git branch -D <branchName>`             移除本地分支
- `git push origin --delete <branchName>`  删除远程分支
- `git push origin <branchName>`           推送本地分支
- `git pull origin <branchName>`           从远程分支拉取代码
- `git checkout -b <branchName>`           建本地分支
- `git checkout <branchName>`              将分支上内容拷贝下来,并切换到该分支 
- `git reset --hard`               放弃当前的改变
- `git reset --hard HEAD~3`        回退版本
- `git merge <branchName>`         合并分支
- `git diff -- <filename>`         查看文件的改变
- `git checkout -- <filename>`     放弃文件当前的改变
- `git status`                     检查状态
- `git reset HEAD <file>` 撤销某个文件的`add`操作
- `git reset HEAD`        撤销所有文件的`add`操作
- `git branch -M main`    重命名当前分支名为`main`分支

## 重命名文件并区分大小写
- `git config --global core.ignorecase false` 全局设置，大小写敏感
- `git mv -f a.js A.js`                       重命名文件 a->A 

## 删除文件夹
> 当远端仓库同时存在小写 `home`和大写`Home`文件夹时，本地只有大写`Home`，可执行以下操作，完成远端小写文件夹的删除。

```bash
git rm -r <dir_path> 
git restore <dir_path>
//示例
git rm -r src/pages/home
git restore src/pages/Home
```


## 初始化仓库
### 新建仓库
```shell
git clone <repo_url>
cd <dir_name>
git switch --create main
touch README.md
git add README.md
git commit -m "add README"
git push --set-upstream origin main
```
### 存在项目目录
```shell
cd <dir_name>
git init --initial-branch=main
git remote add origin <repo_url>
git add .
git commit -m "initial commit"
git push --set-upstream origin main
```
### 存在远端仓库
```shell
cd <repo_name>
# 移除原有或者重命名，二选一
# git remote rm origin
git remote rename origin old-origin
git remote add origin <repo_url>
git push --set-upstream origin --all
git push --set-upstream origin --tags
```

## 回退版本
- `git log`                           查看 commit 的记录编号
- `git reset <commit_number>`         回退本地的改变
- `git push -u origin +<branchName>`  当远程改变时，把远程也回退,即你不小心将不想提交的代码，给 `push` 到了远端的时候


## 暂存区`stash`
- `git stash save <message>`                          存储时加上备注
- `git stash list`                                    列表
- `git stash show` / `git stash show stash@{<num>}`   显示某个stash 哪些文件变动
- `git stash show -p` / `git stash show stash@{<num>} -p` 显示某个stash文件具体改动
- `git stash apply` / `git stash apply stash@{<num>}`     应用某个存储，但不会从列表删除
- `git stash pop` / `git stash pop stash@{<num>}`         应用某个存储，并从对应列表删除
- `git stash drop` / `git stash drop stash@{<num>}`       从列表中删除某个存储
- `git stash clear`                       删除所有stash
- `git stash push -m "message" **/*.java` 仅缓存某些文件
- `git stash -u`                          缓存工作区所有改动(包括untrack files) 


## 合并`commit`
- `git cherry-pick <commit_number>` 合并某个提交
- `git cherry-pick --abort`         撤销上个命令操作
- `git cherry-pick --continue`      若合并有冲突，解决完冲突，使用该命令继续合并过程


## 合并`merge`
> 当`merge`冲突时，如果要从冲突的两者之间进行选择时, `ours`当前分支
- `git checkout --ours <file>`   放弃自己的更改，保留对方的更改
- `git checkout --theirs <file>` 放弃对方的更改，保留自己的更改


## 标签`tag`
- `git tag`                               查看本地标签
- `git ls-remote --tags`                  查看远程标签
- `git tag -d <tag_name>`                 删除本地标签
- `git push origin :refs/tags/<tag_name>` 删除远程标签
- `git tag v1.0.0 1.0.0`                  将1.0.0重命名为v1.0.0
- `git tag -d 1.0.0`                      删除标签1.0.0（本地删除）
- `git push origin :refs/tags/1.0.0`      删除标签1.0.0（远端删除）
- `git push --tags`                       将本地tag推送到远端
- `git checkout -b branch_name tag_name`  从tag标签新建分支

## 撤销`add`
- `git restore --staged <file>`  撤销某个文件的 `add`
- `git reset -- <file>` 撤销指定文件
- `git reset -- .` 撤销所有文件
  
## 撤销所有未add文件的变更
- `git checkout -- .`

## 将项目中指定目录发布到特定分支
```bash
git subtree split -P <dir> -b <branch>
git push <repo_url> <branch>
```

## 设置`global`用户信息
```shell
git config --global user.name "your_name"
git config --golobal user.email "email_address"
```

## 设置`git`正确识别中文文件名
```bash
git config --global core.quotepath false
git config --global gui.encoding utf-8
git config --global i18n.commitEncoding utf-8


```