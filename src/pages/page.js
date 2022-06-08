import React from "react";
import Background from "../components/Background";
import Job from "../components/Job";
import Filter from "../components/Filter";
import { getAll } from "../modules/jobs_api";
import { Col, Divider, Row } from "antd";

export default function Page() {
  const [tags, setTags] = React.useState([]);
  const [jobs, setJobs] = React.useState([]);

  const addTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tag) => {
    if (tags.includes(tag)) {
      var tags_copy = [...tags];
      tags_copy.splice(tags_copy.indexOf(tag), 1);
      setTags(tags_copy);
    }
  };

  const clearTags = () => {
    setTags([]);
  };

  React.useEffect(() => {
    setJobs(getAll());
  }, []);
  return (
    <div>
      <Background />
      <Row style={{ justifyContent: "center" }}>
        {!(tags.length === 0) && (
          <Filter
            tags={tags}
            onRemove={(tag) => removeTag(tag)}
            onClear={() => clearTags()}
          />
        )}
        <Divider></Divider>
        {jobs.map((job) => (
          <Job
            company={job.company}
            new={job.new}
            featured={job.featured}
            position={job.position}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            tags={job.tags}
            logo={job.logo}
            onClick={(tag) => addTag(tag)}
          />
        ))}
      </Row>
    </div>
  );
}
