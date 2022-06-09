import React from "react";
import Background from "../components/Background";
import Job from "../components/Job";
import Filter from "../components/Filter";
import { getByTags } from "../modules/jobs_api";
import { Divider, Row, Col } from "antd";

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
    setJobs(getByTags(tags));
  }, [tags]);

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
          <>
            <Job
              company={job.company}
              new={job.new}
              featured={job.featured}
              position={job.position}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              tags={job.tags}
              logo={job.logo2}
              onClick={(tag) => addTag(tag)}
            />
            <Divider></Divider>
          </>
        ))}
      </Row>
    </div>
  );
}
