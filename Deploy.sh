#!/usr/bin/env bash
set -e

# 1. Build project
pnpm build

# 2. Sync dist → live-worktree, but keep .git, CNAME, .nojekyll
rsync -av --delete \
  --exclude='.git' \
  --exclude='CNAME' \
  --exclude='.nojekyll' \
  dist/ ../live-worktree/

# 3. Ensure CNAME and .nojekyll exist in live-worktree
echo "ismetalp.com" > ../live-worktree/CNAME
touch ../live-worktree/.nojekyll

# 4. Commit & push in live branch
cd ../live-worktree
git add -A
git commit -m "Deploy $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"
git push origin live

# 5. Back to main branch working dir
cd -