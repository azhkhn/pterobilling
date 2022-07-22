module.exports = {
  stories: [
    '../resources/stories/**/*.stories.mdx',
    '../resources/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../resources/app/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  }
}
