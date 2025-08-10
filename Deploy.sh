#!/usr/bin/env bash
set -e

# Build project on main
pnpm build

# Sync dist → ./deploy-live, protect .git, CNAME, .nojekyll
rsync -av --delete \
  --exclude='.git' \
  --exclude='CNAME' \
  --exclude='.nojekyll' \
  dist/ ./deploy-live/

# Ensure CNAME and .nojekyll exist
echo "ismetalp.com" > ./deploy-live/CNAME
touch ./deploy-live/.nojekyll

# Commit & push on live
cd ./deploy-live
git add -A
git commit -m "Deploy $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"
git push origin live
cd -