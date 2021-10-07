const DateDST = require('./isitdst.js')

const pass = ((val, wanted) => {
	if (val == wanted) {
		return "\u001b[32mPass\u001b[0m"
	} else {
		return "\u001b[31mFail\u001b[0m"
	}
})

console.log("\u001b[34mMarch 1st\u001b[0m")
var date1 = new DateDST(2015, 2, 1);
console.log(pass(false, date1.isDST()))

console.log("\u001b[34mMarch 10th\u001b[0m")
var date2 = new DateDST(2015, 2, 10); //wait isnt this fucking february
console.log(pass(true, date2.isDST()))

console.log("\u001b[34mOctober 31st\u001b[0m")
var date3 = new DateDST(2015, 9, 31);
console.log(pass(true, date3.isDST()))

console.log("\u001b[34mNovember 10th\u001b[0m")
var date4 = new DateDST(2015, 10, 10);
console.log(pass(false, date4.isDST()))