'use strict';

const api = require('../../api');
const topics = require('../../topics');

const helpers = require('../helpers');

const Topics = module.exports;

Topics.create = async (req, res) => {
	const payload = await api.topics.create(req, req.body);
	if (payload.queued) {
		helpers.formatApiResponse(202, res, payload);
	} else {
		helpers.formatApiResponse(200, res, payload);
	}
};

Topics.reply = async (req, res) => {
	const payload = await api.topics.reply(req, { ...req.body, tid: req.params.tid });
	helpers.formatApiResponse(200, res, payload);
};

Topics.delete = async (req, res) => {
	await api.topics.delete(req, req.params);
	helpers.formatApiResponse(200, res);
};

Topics.restore = async (req, res) => {
	await api.topics.restore(req, req.params);
	helpers.formatApiResponse(200, res);
};

Topics.purge = async (req, res) => {
	await api.topics.purge(req, req.params);
	helpers.formatApiResponse(200, res);
};

Topics.pin = async (req, res) => {
	await api.topics.pin(req, req.params);
	helpers.formatApiResponse(200, res);
};

Topics.unpin = async (req, res) => {
	await api.topics.unpin(req, req.params);
	helpers.formatApiResponse(200, res);
};

Topics.lock = async (req, res) => {
	await api.topics.lock(req, req.params);
	helpers.formatApiResponse(200, res);
};

Topics.unlock = async (req, res) => {
	await api.topics.unlock(req, req.params);
	helpers.formatApiResponse(200, res);
};

Topics.follow = async (req, res) => {
	await api.topics.follow(req, req.params);
	helpers.formatApiResponse(200, res);
};

Topics.ignore = async (req, res) => {
	await api.topics.ignore(req, req.params);
	helpers.formatApiResponse(200, res);
};

Topics.unfollow = async (req, res) => {
	await api.topics.unfollow(req, req.params);
	helpers.formatApiResponse(200, res);
};

Topics.addTags = async (req, res) => {
	await topics.createTags(req.body.tags, req.params.tid, Date.now());
	helpers.formatApiResponse(200, res);
};

Topics.deleteTags = async (req, res) => {
	await topics.deleteTopicTags(req.params.tid);
	helpers.formatApiResponse(200, res);
};
