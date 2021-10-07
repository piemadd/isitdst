# Is It DST?

While looking for an easy way to figure out whether or not it is currently DST, you may have come across [isdst](https://www.npmjs.com/package/isdst). One thing about this package is that its a lil old (though nothing is wrong with that), is synchronous, and doesn't actually extend the Date class (more convenient).

## FAQ

Q: [isdst](https://www.npmjs.com/package/isdst) exists, why should I use this?  
A: It's asynchronous, extends the Date class, and has typescript support.

Q: Why are you modifying the date class?  
A: I'm not modifying the Date class, simply extending it. This is common-practice and is not modifying the actual Date class. 

Q: i dOn'T wANt iT eXTeNdInG tHe dAtE OBjEcT  
A: lulwut, its just the date object. If you dont want a class extention (for some reason), you can use [isdst](https://www.npmjs.com/package/isdst).

Q: This shouldn't be a library.  
A: You're the one looking for how to judge whether or not it is DST, you are in no space to criticize the work of isitdst or isdst.

Q: Poop?  
A: Pee

## Usage

Ok, so this is very simple, simply import it like this:

```js
const DateDST = require('isitdst');
```
You can now use the DateDST class as a normal Date class, but calling `isDST()` will return a boolean of whether or not it is currently Daylight savings time, like this:

```js
const DateDST = require('isitdst');

var date = new DateDST(2069, 4, 20);

console.log(date.isDST());
```

Thats all!