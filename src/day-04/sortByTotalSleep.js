function sortByTotalSleep(totals) {
	return totals.sort((a, b) => {
		return b.total - a.total;
	});
}

module.exports = sortByTotalSleep;
