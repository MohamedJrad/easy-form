module.exports = {
    "parser": "@typescript-eslint/parser", // Specifies the ESLint parser
    "parserOptions": {
        "ecmaVersion": 2020, // Allows for the parsing of modern ECMAScript features
        "sourceType": "module", // Allows for the use of imports
        " ecmaFeatures": {
            "jsx": true // Allows for the parsing of JSX
        },
        "project": ["tsconfig.json"]
    },
    "settings": {
        "react": {
            "version": "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    "plugins": ["@typescript-eslint", "testing-library", "jest-dom"],
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "next/core-web-vitals",
        "prettier",
        "eslint:recommended",
        "next",
        "turbo",
        "plugin:@next/next/recommended",
        "plugin:react-hooks/recommended", //react hooks rules
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:react/recommended", // React rules
        "plugin:react-hooks/recommended", // React hooks rules
        "plugin:jsx-a11y/recommended", // Accessibility rules
        "plugin:prettier/recommended", // Prettier plugin
        "plugin:testing-library/react", //React Testing library plugin
        "plugin:jest-dom/recommended"
    ],
    "rules": {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        // "@typescript-eslint/explicit-function-return-type": "off",
        // "@typescript-eslint/explicit-module-boundary-types": "off",
        // "testing-library/await-async-query": "error",
        // "testing-library/no-await-sync-query": "error",
        // "testing-library/no-debug": "off",
        // "testing-library/no-dom-import": "off",
        // "@typescript-eslint/ban-ts-comment": "warn",
        // "@typescript-eslint/no-empty-function": "warn",
        // "react/react-in-jsx-scope": "off",,
        "@typescript-eslint/no-var-requires": 0,
        "react/prop-types": 0,
        "react/jsx-filename-extension": [2, { "extensions": [".tsx", ".jsx"] }],
        "import/prefer-default-export": 0,
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": [
                    "**/*.test.ts",
                    "**/*.test.tsx",
                    "**/*.spec.ts",
                    "**/*.spec.tsx",
                    "**/*.stories.ts",
                    "**/*.stories.tsx",
                    "**/*.stories.ts",
                    "**/*.stories.tsx",
                    "**/*.setup.js",
                    "**/*.config.js"
                ]
            }
        ],
        "react/function-component-definition": [
            2,
            {
                "namedComponents": "arrow-function",
                "unnamedComponents": "arrow-function"
            }
        ]
    }
}