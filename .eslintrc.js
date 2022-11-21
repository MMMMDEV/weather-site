module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "prettier"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",
        "prettier/prettier": "error"
    },
    "eslint.workingDirectories": [{ mode: "auto" }]
}
