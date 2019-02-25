---
id: javascript-es6
title: ES6 | ES2015
sidebar_label: ES6
---
## طلوع

`ECMAScript 2015` که به `ES6` هم شناخته شده، بزرگترین و اساسی ترین نسخه اکما به حساب میاد.

> فقط برای اینکه بزرگی این نسخه را درک کنید کافیه بگم اسناد معرفی امکانات این زبان از ۲۵۰ صفحه به بیش از ۶۰۰ صفحه ارتقا یافت.

مهمترین تغییرات ES2015 شامل موارد زیر است:

<div dir="ltr" style="text-align: left">

- [طلوع](#%D8%B7%D9%84%D9%88%D8%B9)
- [Arrow functions](#arrow-functions)
- [scope جدید برای `this`](#scope-%D8%AC%D8%AF%DB%8C%D8%AF-%D8%A8%D8%B1%D8%A7%DB%8C-this)
- [Promises](#promises)
- [Generators](#generators)
- [let and const](#let-and-const)
- [Classes](#classes)
- [Modules](#modules)
- [Multiline strings](#multiline-strings)
- [Template literals](#template-literals)
- [Default parameters](#default-parameters)
- [The spread operator](#the-spread-operator)
- [Destructuring assignments](#destructuring-assignments)
- [Enhanced object literals](#enhanced-object-literals)
- [The for..of loop](#the-forof-loop)
- [Map and Set](#map-and-set)

</div>


## Arrow functions

`Arrow function` ها باعث شدن تغییراتی در ظاهر و (نحوه اجرا)ی کدهای جاوا اسکریپت به وجود بیاد. به طور خلاصه باعث شد فانکشن ها از: 

```js
const foo = function foo() {
  //...
}
```

به

```js
const foo = () => {
  //...
}
```

تبدیل بشه، و اگر بدنه فانکشن فقط یک خط بود:

```js
const foo = () => doSomething()
```

و فانکشن فقط یک پارامتر دریافت می‌کرد به این شکل نوشته بشه:

```js
const foo = param => doSomething(param)
```
این ها یک breaking change به حساب نمیاد، یعنی نوشتن فانکشن ها به سبک قدیمیشون مثل قبل کار می‌کنه.

## scope جدید برای `this`

اسکوپ `this` با arrow function ها فرق میکنه. به این صورت که در حالت قبلی فانکشن ها `this` همیشه به نزدیک ترین فانکشن که درونش بود اشاره داشت. ولی با arrow functions این مشکل برطرف شده و شما دیگه نیازی به نوشتن `var self = this` ندارید.

## Promises

پرامیس ما رو از `Callback hell` نجات داد، البته کار کردن باهاشون کمی سخته که با معرفی `async - await` در ES2017 راحت تر شد.

با Promises شما میتونید همچین کدی رو:

```js
setTimeout(function() {
  console.log('I promised to run after 1s')
  setTimeout(function() {
    console.log('I promised to run after 2s')
  }, 1000)
}, 1000)
```

به این شکل بنویسید:

```js
const wait = () => new Promise((resolve, reject) => {
  setTimeout(resolve, 1000)
})

wait().then(() => {
  console.log('I promised to run after 1s')
  return wait()
})
.then(() => console.log('I promised to run after 2s'))
```

## Generators

جنریتور نوع ویژه‌ای از فانکشن‌ هست که می‌تونه در اجرای خودش مکث ایجاد کرده و هر زمان که خواست ادامه پیدا کنه. بدون اینکه جلوی اجرای فانکشن های دیگه رو بگیره.

جنریتور تصمیم می‌گیره که مکث کنه، و اجازه میده کدهای دیگه که در صف هستند اجرا بشن و در زمانی که مایل بود به کارش ادامه میده.

این کار به راحتی با کیورد `yield` انجام میشه. در جنریتور هر زمان که به این کد برسیم، مکث شروع میشه.

یک جنریتور میتونه شامل بینهایت `yield` باشه. برای ساخت `Generator` فانکشن رو به این حالت می‌نویسیم: `*function`

جنیرتورها امکان کاملا جدیدی نظیر:

- ارتباط دو سویه در زمانی که جنریتور در حال اجراست
- `while` لوپی که با اجرا شدنش باعث فریز شدن برنامه ما نمیشه

به زبان جاوا اسکریپت می‌دهند.

این یک مثال هست که با کارکرد `Generator` بهتر آشنا بشید.

```js
function *calculator(input) {
    var doubleThat = 2 * (yield (input / 2))
    var another = yield (doubleThat)
    return (input * doubleThat * another)
}
```

برای اجرا به این شکل اقدام می‌کنیم

```js
const calc = calculator(10)
```

سپس `iterator` یا تکرار رو آغاز می‌کنیم:

```js
calc.next()
```

کدی که برمیگرده شامل این آبجکت هست:

```js
{
  done: false,
  value: 5
}
```

اتفاقی که می‌افته اینه که فاکشن با مقدار `input = 10` اجرا می‌شه تا به اولین `yield` برسه. اولین `yield` مقدار 5 رو برمیگردونه. چون `input / 2` = `5` و همینطور مقدار `done` در آبجکت برگشتی برار با `false` هست. چون هنوز اجرای جنریتور به اتمام نرسیده و فقط متوقف شده.

در ادامه ما مقدار `7` رو به جنریتور پاس می‌دیم:

```js
calc.next(7)
```

و این آبجکت رو دریافت می‌کنیم:

```js
{
  done: false,
  value: 14
}
```

در اینجا `7` مقدار `doubleThat` می‌باشد.

پس ما مقدار 14 رو دریافت کردیم و سپس یک بار دیگه مقدار 100 رو به جنریتور می‌فرستیم.

```js
calc.next(100)
```

و این مقدار رو دریافت می‌کنیم:

```js
{
  done: true,
  value: 14000
}
```

به این صورت که وقتی `yield` وجود نداره، مقدار `(input * doubleThat * another)` بر میگرده که برابر میشه با `10 * 14 * 100`.

## let and const

`var` اصطلاحا **function scoped** هست.

در صورتی که `let` و **block scoped** `const`  هستند.

## Classes


## Modules


## Multiline strings


## Template literals


## Default parameters


## The spread operator


## Destructuring assignments


## Enhanced object literals


## The for..of loop


## Map and Set