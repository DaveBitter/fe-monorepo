module.exports = {
  stories: [
    "./Introduction.stories.mdx",
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    },
  ],
  staticDirs: ["../public"],
  framework: "@storybook/web-components",
};
