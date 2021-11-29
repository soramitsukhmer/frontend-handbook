# Release Flow

**How to create release and build docker image**

- [ ] Fetch and pull latest code base from `develop` or `master/main` branch.
- [ ] Run `lint` and `unit test`.
  - [ ] Run `yarn lint`.
  - [ ] Run `yarn test:unit`.
- [ ] Make decision between `major`, `minor`, `patch`, or pre-release `alpha/beta` channels.  
  *e.g*: Run `yarn version` or `yarn bump:release` *(The `bump:release` can be found in `package.json`)*.

  **Options:**
  ```
  --major                             auto-increment major version number
  --minor                             auto-increment minor version number
  --patch                             auto-increment patch version number
  --premajor                          auto-increment premajor version number
  --preminor                          auto-increment preminor version number
  --prepatch                          auto-increment prepatch version number
  --prerelease                        auto-increment prerelease version number
  ```

  **Example**: Release a patch version: `yarn version --patch`.
- [ ] Push release `commit` and `tag` to GitHub.  
  Run `git push --tag --verbose` to push commit and tag.
- [ ] Wait for GitHub Action job `Unit test and Lint` to finished.
- [ ] Then create release or edit the drafted release with newly create tag version.  
  This will start a new task to build **Docker** image with the given version.
