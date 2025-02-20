const { Podcast } = require("../models");

const getPodcasts = async (projectId) => {
  return await Podcast.find({ projectId });
};

const createPodcast = async (name, transcript, projectId) => {
    return await Podcast.create({name, transcript, projectId});
}

const updatePodcast = async (id, data) => {
    return await Podcast.findByIdAndUpdate(id, data, {new: true})
}

const deletePodcast = async (id) => {
    return await Podcast.findByIdAndDelete(id)
}

module.exports = {
    createPodcast,
    deletePodcast,
    getPodcasts,
    updatePodcast
}