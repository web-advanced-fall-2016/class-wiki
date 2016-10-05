# Quiz 1

## Questions

#### 1. What is the difference between `== / !=` and `=== / !==` ?

#### 2. What is the root object ( parent ) of all JavaScript objects in Node and in Browsers? 

#### 3. Given the code below,  what is the value of this expression `window.x !== x ? x+1 : x-1` ?

```
var x = 6;
(function(module){
  var x = 10;
  module.x = x++;
})(this);
```

#### 4. Write a script that prints a multiple of 5 every 200ms, up to 50. 

#### 5. What does the following statement evaluate to : ` 1 + '5' + 5 + '1'` ?

#### 6. What does the following statement evaluate to : ` 1 + 5 + '2'` ?

#### 7. What are the statements printed/logged in the following code (order matters)?  

```javascript
var x = 'John';
var quiz = {
    x: 'Mike',
    y: {
        x: 'Laura',
        z: function() {
            return this.x;
        }
    },
    z: function() {
      return this.x;
    }
}
var func = quiz.y.z;
console.log(`My name is ${quiz.y.z()}!`);
console.log(`My name is ${func()}!`);
console.log(`My name is ${quiz.z()}!`);
```

#### 8. Write a function sums all the numbers that it receives in its arguments.

#### 9. What are the lengths printed/logged (order matters) ?

```javascript
let array = [1];
console.log(array.length);
array[1] = 2;
console.log(array.length);
array.concat([3,4,5]);
console.log(array.length);
console.log([-1,'john',undefined].concat(array).length);
array[5] = 3;
console.log(array.length);
array.name = 12;
console.log(array.length);
array.'3' = 6;
console.log(array.length);
array.'30.0' = 30.01;
console.log(array.length);
```

#### 10. Give the HTML tree below, answer the following questions:

```html
<div class="accordion">
    Snake
    <div class="accordion-item open">
        <div id="item-title">Turtle</div>
        <div class="item-content" style="color:pink;">
            Pig
            <p>Fox</p>
        </div>
    </div>
    <div class="accordion-item">
        <div class="item-title">Whale</div>
        <div class="item-content special">
            Wolf
            <div>
                Lion
                <div>
                    Frog
                </div>
                <div>
                    Zebra
                </div>
            </div>
            <div>
                Tiger
            </div>
        </div>
    </div>
</div>
```

When CSS below applied, what color will be the animals have ?

```css
.item-content p {
  color: blue;
}

div.special div {
  color: grey;
}

div.special>div {
  color: purple;
}

.item-content>p {
  color: red;
}

div>.accordion-item.open .item-content {
  color: blue;
}

div>.accordion-item.open {
  color: green;
}

div:nth-of-type(2) {
  color: yellow;
}

div {
  color: black;
}

#item-title {
  color: magenta;
}

ul.shopping-list li .highlight {
  color: red;
}

.special>div>div:nth-of-type(odd) {
  color: blue;
}
```

1. ​