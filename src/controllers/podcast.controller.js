const { status } = require("http-status");

const { podcastService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const createPodcast = catchAsync(async (req, res) => {
  const podcast = await podcastService.createPodcast(
    req.body.name,
    req.body.trancript,
    req.body.projectId
  );
  res.status(status.CREATED).send(podcast);
});

const getPodcasts = catchAsync(async (req, res) => {
  const allPodcasts = await podcastService.getPodcasts(req.params.projectId);
  res.status(status.OK).send(allPodcasts);
});

const updatePodcast = catchAsync(async (req, res) => {
  const updatedPodcast = await podcastService.updatePodcast(
    req.params.id,
    req.body
  );
  res.status(status.OK).send(updatedPodcast);
});

const deletePodcast = catchAsync(async (req, res) => {
  await podcastService.deletePodcast(req.params.id);
  res.status(status.NO_CONTENT).send();
});

module.exports = {
  createPodcast,
  deletePodcast,
  getPodcasts,
  updatePodcast,
};
