module.exports = {
    "app/**/*.{js,jsx,ts,tsx}": [
        "yarn format",
        "yarn lint",
        "yarn test"
    ],
    "packages/**/*.{js,jsx,ts,tsx}": [
        "yarn format",
        "yarn lint",
        "yarn test"
    ],
    "*.{md,json}": [
        "yarn format"
    ]
}