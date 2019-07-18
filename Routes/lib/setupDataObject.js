module.exports = function setupDataObject(data, url, active) {
	data.current = url.substring(4);
	data.active = { [active]: true };
	return data;
};
