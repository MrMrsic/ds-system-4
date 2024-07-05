/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    //actions: { argTypesRegex: "^on[A-Z].*" },
  },
  tags: ["autodocs"],
};

export default preview;
