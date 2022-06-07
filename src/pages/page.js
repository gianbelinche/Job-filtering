import React from "react";
import Background from "../components/Background";
import Job from "../components/Job";

export default function Page() {
  return (
    <div>
      <Background />
      <Job
        company="Photosnap"
        new={true}
        featured={true}
        position="Senior Frontend Developer"
        postedAt="1d ago"
        contract="FullTime"
        location="USA only"
        tags={["Frontend", "Senior", "HTML", "CSS", "JavaScript"]}
      />
    </div>
  );
}
