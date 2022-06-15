import React from "react";

import Page from "../pages/page";

export default {
  title: "JobListing/Page",
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <Page {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Main = Template.bind({});

Main.args = {
  getCorrectLogo: (logo) => {
    return logo;
  },
  background: "./images/bg-header-desktop.svg",
};
