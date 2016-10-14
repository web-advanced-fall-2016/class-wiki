# Quiz 1

## Solutions with extensive explanation

#### 1.

Javascript is a dynamically typed language. This means that variables are not strictly typed in the declaration time and they have the ability to change their type in the runtime when needed. For instance, a statement like  `'34' - 4` will not result in an error, although we are subtracting a number from a string. In this instance, JavaScript engines will convert `'34'` to a number in the runtime and perform the arithmetic subtract operation that will result in `30`. This is also called **Type Coercion**.  `==` and `!=` are  loose comparison operators. This means that when performing a comparison, they do not care about the types of the variables (or literals or values)that are being compared. However, `===` and `!==` take into account the types of the variables when performing the comparison.

```javascript
let string = '2';
let number = 2;
if( string == number ) {
  console.log('This is a loose comparision');
}
if( !(string === number) ) {
  console.log('This is a strict comparision');
}
```

------

#### 2.

JavaScript is an Object Oriented Programming language. That said, it abstraction model is different from some very common **Class Base**  OOP languages like C++, Python, C#, Java, or … . JavaScript is a **Prototype Based** language. Both types have **inheritance** as one of their fundamental notions. In both types, inheritance happens when a new object inherits characteristics from a **Base Template**. Class Based OOP languages are structure inheritance upon **Classes** and **Instances**. A **Class** is the declaration of objects. Having **Class** as the declaration, you can instantiate arbitrary number of objects of that inherit from that class ( also referred to as **instances**). The **Class** is the so called **Base Template**. On the other hand, a **Prototype Based** OOP language **prototypes** are the **Base Templates** and every object that . BUT the base templates are objects themselves as well. So in this case, there is now difference between the instances and the base templates. QUITE CONFUSING!!. In a sense, one can look at an object's prototype as its parent. So, all objects have a parent and everything is object. This chain of parent/child or prototype/object relationship has to end somewhere (at least from programmers/users perspective). This ending object is called the root object. It terminates this chain of parent/child with having his prototype assigned to `null`.

In client-side JavaScript ( browsers) , the root object is `window`.  All the objects will end up to `window` following their prototype chain. In Node, this root object is called `global`.

------

#### 3.

In the base context/scope of our application, `this` is an alias of `window` ( explained in last question). So the IIFE is getting `window` as its argument. So, `module.x` refers to the variable **x** defined in the first line. However, in the `x++` expression, **x** refers back to the variable **x** locally defined in the function scope in line 3.  So we are assigning `10` to `window.x` and then incrementing the local **x** by one.

Now in the outer scope, the root scope, `window.x` is obviously same as `x`. So `window.x !== x` is false. So the ternary operator will execute `x-1` expression. 

So the result will be `10 -1` OR `9`.

------

#### 4.

```javascript
let time = 200;
let counter = 0;
let interval = setInterval(function(){
  if(counter*5 < 50){
	console.log(counter++ * 5);
  }else{
	clearInterval(interval);
  }
},time);
```

------

#### 5.

`'1551'`.

------

#### 6.

`'62'`.

------

#### 7.

In JavaScript, `this` keyword works and means different from its role in other programming languages like C++. `this` keyword is a special keyword for functions. It's value depends on what context the function is called in. You always manually determine the context in which you want a function to be called, using `bind()` method. In the global context (not inside any functions), `this` refers to `window` object (In browsers `window` is our global object, in Node, the global object is called  `global` ). Functions that are set as for properties of an object, will have their `this` keyword assign to the calling object. Arrow functions, introduced in ES2015, have their `this` keyword set to the object the function was declared in and regardless of the context it was called in.

These are just a few rules and exceptions about `this`. It's such a confusing thing in JavaScript. But if you wanna know everything about it, read this : https://rainsoft.io/gentle-explanation-of-this-in-javascript/.

Answer of the problem is:`My name is Laura! My name is John!, My name is Mike!`.

------

#### 8.

You just need to use the prefix keyword that Javascript functions  have called `arguments`. This property is an array that holds all the input parameters of the function call.

```javascript
function sum() {
  let s = 0;
  for(a of arguments) {
    s += a;
  }
  return s;
}
```

------

#### 9.

` 1 2 2 5 6 6 6 6`

