import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';
import dts from 'vite-plugin-dts';
import * as path from 'node:path';

// https://vitejs.dev/config//
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      skipDiagnostics: true
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'HMReactiveForm',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@emotion/react',
        '@mantine/core',
        '@mantine/dates',
        '@mantine/hooks',
        'react-hook-form',
        'react/jsx-runtime'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mantine/core': 'Mantine',
          'react/jsx-runtime': 'JsxRuntime',
          'react-hook-form': 'ReactHookForm'
        }
      },
      plugins: [
        // @see https://github.com/doesdev/rollup-plugin-analyzer
        visualizer()
      ]
    }
  }
});
