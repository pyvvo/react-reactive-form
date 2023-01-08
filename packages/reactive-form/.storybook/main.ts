import { mergeConfig } from 'vite';

// const config: StorybookConfig = {
const config = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react-vite',
  // core: {
  //   builder: '@storybook/builder-vite'
  // },
  // features: {
  //   interactionsDebugger: true
  // },
  async viteFinal(config, options) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      //   resolve: {
      //     alias: { foo: 'bar' }
      //   }
    });
  },
  docs: {
    autodocs: true
  }
};
export default config;
