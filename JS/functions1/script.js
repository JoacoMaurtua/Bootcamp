/*****EJERCICIO 1******/

/*function a(){
  console.log('hello');
}
console.log('dojo');*/

//dojo

/*****EJERCICIO 2******/

/*function a(){
  console.log('hello');
  return 15;
}
x = a();
console.log('x is',x);*/ // x is 15

/*****EJERCICIO 3******/

/*function a(n){
  console.log('n is', n);
  return n+15;
}
x = a(3);
console.log('x is', x); //n is 3, x is 18

/*****EJERCICIO 4******/

/*function a(n)
{
  console.log('n is',n);
  y = n*2;
  return y;
}
x = a(3) + a(5);
console.log('x is',x);

/*****EJERCICIO 5******/

/*function op(a,b)
{
  c = a+b;
  console.log('c is',c);
  return c;
}
x = op(2,3) + op(3,5);
console.log('x is',x);

/*****EJERCICIO 6******/

/*function op(a,b)
{
  c = a+b;
  console.log('c is',c);
  return c;
}
x = op(2,3) + op(3,op(2,1)) + op(op(2,1), op(2,3));
console.log('x is',x);//19

/*****EJERCICIO 7******/

/*var x = 15;
function a(){
  var x = 10;
}
console.log(x);
a();
console.log(x);  
//15
//15

/*****EJERCICIO 8******/

/*function multiply(x,y) {
  console.log(x);
  console.log(y);
}
b = multiply(2,3);
console.log(b);

/*****EJERCICIO 9******/

/*function multiply(x,y) {
  return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2)); //6 10

/*****EJERCICIO 10*****/

var x = [1, 2, 3, 4, 5, 10];
for (var i = 0; i < 5; i++) {
  i = i + 3;
  console.log(i);
}
