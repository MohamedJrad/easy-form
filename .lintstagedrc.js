module.exports = {
    "src/**/*.{js,jsx,ts,tsx}": [
        "yarn format",
        "yarn lint",
        "yarn test"
    ],
    "*.{md,json}": [
        "yarn format"
    ]
}