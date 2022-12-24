// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: "jsdom",
//     setupFiles: "./vitest.setup.ts",
//     watch: false,
//   },
// });

import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// import dts from 'vite-plugin-dts'
// import EsLint from 'vite-plugin-linter'
// import tsConfigPaths from 'vite-tsconfig-paths'
const { EsLinter, linterPlugin } = EsLint
import * as packageJson from './package.json'
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    //   tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    // dts({
    //   include: ['src/component/'],
    // }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'component/index.ts'),
      name: 'ReactViteLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `react-vite-library.${format}.js`,
    },
    rollupOptions: {
      // external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}))
