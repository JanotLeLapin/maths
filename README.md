# maths
I'm lazy so I made math things so I don't have to think during class.

### Rectangle calculator
```js
const r = new Rectangle({
    height: 7,
    width: 9,
});

console.log(r.area) // 63
```
The rectangle class can figure out its properties based on other parameters
```js
const r = new Rectangle({
    perimeter: 10,
    width: 3,
});
console.log(r.height); // 2
```
