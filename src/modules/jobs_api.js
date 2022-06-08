import json from "../data.json";

export function getAll() {
  return json.map((job) => {
    job.tags = [job.role, job.level];
    job.tags = [...job.tags, ...job.languages];
    job.tags = [...job.tags, ...job.tools];
    return job;
  });
}
