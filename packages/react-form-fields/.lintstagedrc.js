module.exports = {
    "*.{js,jsx,ts,tsx}": [

        "yarn format",
        "yarn lint",
        "yarn test:staged"
    ],
    "*.{md,json}": [
        "yarn format"
    ]
}