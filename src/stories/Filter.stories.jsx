import React from "react";

import Filter from "../components/Filter";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "JobListing/Filter",
  component: Filter,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Filter {...args} />;

export const Empty = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Empty.args = {
  tags: [],
};

export const OneTag = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OneTag.args = {
  tags: ["Tag1"],
  onRemove: () => {},
  onClear: () => {},
};

export const MultipleTags = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MultipleTags.args = {
  tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
  onRemove: () => {},
  onClear: () => {},
};
