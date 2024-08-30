import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'node:path';
import * as pkg from './package.json';
import { libInjectCss } from 'vite-plugin-lib-inject-css'
// import tsconfigPaths from 'vite-tsconfig-paths';
// import { visualizer } from 'rollup-plugin-visualizer';
// import { ViteAliases } from 'vite-aliases';

const peerDep = Object.keys(pkg.peerDependencies);

// https://vitejs.dev/config//
// build for lib @see https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  plugins: [
    react(),
    // libInjectCss(),
    // tsconfigPaths(),
    // ViteAliases() as any, // @see https://github.com/qmhc/vite-plugin-dts/issues/60
    dts({
      // entryRoot: path.join('./src'),
      tsconfigPath: path.join(__dirname, 'tsconfig.json'),
      rollupTypes:true
      // insertTypesEntry: true,
      // skipDiagnostics: true
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'HMReactiveForm',
      formats: ['es',"umd"],
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
          '@tabler/icons-react': 'TablerIcons',
          'react-router-dom': 'ReactRouterDom',
          dayjs: 'DayJS',
          '@mantine/hooks': 'MantineHooks',
          '@mantine/spotlight': 'MantineSpotlights',
          echarts: 'Echarts'
        }
      },
      // plugins: [
      //   // @see https://github.com/doesdev/rollup-plugin-analyzer
      //   visualizer()
      // ]
    }
  }
});
