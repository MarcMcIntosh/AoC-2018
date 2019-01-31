function compose(...funcs) {
	return (val) => funcs.reduce((acc, func) => {
		return func(acc);
	}, val);
}

module.exports = compose
