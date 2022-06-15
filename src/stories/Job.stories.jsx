import React from "react";

import Job from "../components/Job";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "JobListing/Job",
  component: Job,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Job {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  company: "Photosnap",
  new: false,
  featured: false,
  position: "Senior Frontend Developer",
  postedAt: "1d ago",
  contract: "Full Time",
  location: "USA Only",
  tags: ["FrontEnd", "React"],
  logo: "./images/photosnap.svg",
  onClick: () => {},
};

export const New = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
New.args = {
  company: "Photosnap",
  new: true,
  featured: false,
  position: "Senior Frontend Developer",
  postedAt: "1d ago",
  contract: "Full Time",
  location: "USA Only",
  tags: ["FrontEnd", "React"],
  logo: "./images/photosnap.svg",
  onClick: () => {},
};

export const Featured = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Featured.args = {
  company: "Photosnap",
  new: false,
  featured: true,
  position: "Senior Frontend Developer",
  postedAt: "1d ago",
  contract: "Full Time",
  location: "USA Only",
  tags: ["FrontEnd", "React"],
  logo: "./images/photosnap.svg",
  onClick: () => {},
};

export const NewAndFeatured = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NewAndFeatured.args = {
  company: "Photosnap",
  new: true,
  featured: true,
  position: "Senior Frontend Developer",
  postedAt: "1d ago",
  contract: "Full Time",
  location: "USA Only",
  tags: ["FrontEnd", "React"],
  logo: "./images/photosnap.svg",
  onClick: () => {},
};
