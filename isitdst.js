class DateDST extends Date {
	isDST = function () {
		var year = this.getFullYear();
		var dst_start = new Date(year, 2, 14);
		var dst_end = new Date(year, 10, 7);
		dst_start.setDate(14 - dst_start.getDay()); // adjust date to 2nd Sunday
		dst_end.setDate(7 - dst_end.getDay()); // adjust date to the 1st Sunday

		return (this >= dst_start && this < dst_end);
	}
}

module.exports = DateDST;