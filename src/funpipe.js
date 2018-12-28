function funpipe(value, ...args) {
	return args.reduce((acc, func) => func(acc), value);
}

module.exports = funpipe;
