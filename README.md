# Configurations:

## Next.js inside workspace, no other dependencies

- Added missing `version` to `package.json` (workspaces requirement)
- Removed `node_modules` as originally installed by `create-next-app`, and re-installed dependencies from monorepo root

Example page works fine ✅

## Added TS dependency

Requires building project to generate output in `build/`
Example page works fine ✅
Exported method works fine ✅

## Added TS project ref

Changes to types are picked up automatically (even without building, since TS is using the ts project directly and not the generated output)
Example page works fine ✅

## Added random third party dependency

Example page works fine ✅
Next.js warns about sending large amounts of data from SSR for performance reasons
