import type { StorybookConfig } from '@storybook/builder-vite';
import { loadConfigFromFile, mergeConfig, UserConfig } from 'vite';

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  framework: '@storybook/react-vite',
  features: {
    interactionsDebugger: true
  },
  async viteFinal(config: UserConfig, { configType }) {
    // return the customized config
    // const newPlugins = config.plugins?.filter(
    //   (plugin) => (plugin as any).name !== 'vite-tsconfig-paths'
    // );

    // const { config: mainConfig } = await loadConfigFromFile(
    //   configType,
    //   path.resolve(__dirname, '../vite-base.config.ts')
    // );

    return mergeConfig(config, {
      // customize the Vite config here
      // alias not working #85 : https://github.com/storybookjs/builder-vite/issues/85
      // Absolute path not working in Vite project React TS : https://stackoverflow.com/questions/68241263/absolute-path-not-working-in-vite-project-react-ts
      // resolve: {
      //   alias: {
      //     // Native support for tsconfig's paths resolution : https://github.com/vitejs/vite/issues/6828
      //     '@mantine/core': '@mantine/core',
      //     react: 'react',
      //     'react-hook-form': 'react-hook-form'
      //   }
      // }
    });
  }
  // docs: {
  //   autodocs: true
  // }
};
export default config;
