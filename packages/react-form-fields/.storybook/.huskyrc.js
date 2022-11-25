module.exports = {
    "husky": {
        "hooks": {
            "pre-commit": "yarn test:staged && yarn lint && yarn format",
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
    }
}