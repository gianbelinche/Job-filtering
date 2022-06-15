import json from "../data.json";

function getCorrectLogo(logo) {
  return "/Job-filtering" + logo.slice(1, logo.length);
}

function getAll(getCorrectLogo) {
  return json.map((job) => {
    job.tags = [job.role, job.level];
    job.tags = [...job.tags, ...job.languages];
    job.tags = [...job.tags, ...job.tools];
    job.logo2 = getCorrectLogo(job.logo);
    return job;
  });
}

function isSubarray(subArray, Array) {
  for (var i = 0; i < subArray.length; i++) {
    if (!Array.includes(subArray[i])) {
      return false;
    }
  }
  return true;
}

export function getByTags(tags, getCorrectLogo) {
  var jobs = getAll(getCorrectLogo);
  return jobs.filter((job) => isSubarray(tags, job.tags));
}
