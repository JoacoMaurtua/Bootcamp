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

/*var x = [1, 2, 3, 4, 5, 10];
for (var i = 0; i < 5; i++) {
  i = i + 3;
  console.log(i);
}

/*****EJERCICIO 11*****/

/*var x = 15;
console.log(x);
function awesome(){
  var x = 10;
  console.log(x);
}
console.log(x);
awesome();
console.log(x); //15 15 10 15

/*****EJERCICIO 12*****/

/*for(var i =0; i<15; i+=2)
{
  console.log(i); // 0 2 4 6 8 10 12 14
} 

/*****EJERCICIO 13*****/

/*for(var i=0; i<3; i++) {  //O(n^2)
  for(var j=0; j<2; j++)
  {   
      console.log(i*j);  // 0 0 0 1 0 2
  }
}

/*****EJERCICIO 14*****/

/*function looping(x,y)
{
  for(var i = 0; i<x; i++){
    for(var j=0; j<x; j++){
      console.log(i*j);
    }
  }
}
z = looping(3,3);
console.log(z);

/*****EJERCICIO 15******/

/*function looping(x,y)
{
  for(var i = 0; i<x; i++){
    for(var j=0; j<y; j++){
      console.log(i*j);
    }
  }
  return x*y;
}
z = looping(3,5);
console.log(z);


/*****EJERCICIO 16******/
//Por favor, completa los siguientes códigos para que la función imprima (print) todos los enteros (integers) de 1 a x. Si x es negativo, haz que se muestre (print/log) “número negativo” y que la función devuelva falso.

/*function printUpTo(x)
{
  if(x<0)
  {
    console.log('numero negativo');
    return false;
  }
  else{
    for(var i =0; i<x; i++)
    {
      console.log(i);
    }
    
  }

}

 printUpTo(1000);
/*y = printUpTo(10);
console.log(y);*/

/*******EJERCICIO 17*****/

  /*function printSum(x){
    var sum = 0;
    for(var i = 0; i<=x; i++)
    {
      sum += i;
      console.log(sum);
    }
    return sum; 

  }
  y = printSum(255);
  console.log('y es',y)


  /*****EJERCICIO 18******/

  function printSumArray(x)
  {
    var sum = 0;
    for(var i = 0; i<x.length; i++)
    {
      sum += x[i];
    }
    return sum;
  }

  console.log(printSumArray([1,2,3]));


