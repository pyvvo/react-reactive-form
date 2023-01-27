import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';
// import { ViteAliases } from 'vite-aliases';
import dts from 'vite-plugin-dts';
import * as path from 'node:path';
import * as pkg from './package.json';

const peerDep = Object.keys(pkg.peerDependencies);

// https://vitejs.dev/config//
export default defineConfig({
  plugins: [
    react(),
    // tsconfigPaths(),
    // ViteAliases() as any, // @see https://github.com/qmhc/vite-plugin-dts/issues/60
    dts({
      // entryRoot: path.join('./src'),
      tsConfigFilePath: path.join(__dirname, 'tsconfig.json'),
      insertTypesEntry: true,
      skipDiagnostics: true
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'HMReactiveForm',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: [...peerDep],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mantine/core': 'Mantine',
          // 'react/jsx-runtime': 'JsxRuntime',
          'react-hook-form': 'ReactHookForm',
          '@tabler/icons': 'TablerIcons',
          'react-router-dom': 'ReactRouterDom',
          '@emotion/styled': 'EmotionStyled',
          dayjs: 'DayJS',
          '@mantine/hooks': 'MantineHooks',
          '@mantine/spotlight': 'MantineSpotlights',
          echarts: 'Echarts'
        }
      },
      plugins: [
        // @see https://github.com/doesdev/rollup-plugin-analyzer
        visualizer()
      ]
    }
  }
});
