/*********Function1*********/
/**Configura un array para que los valores negativos se transformen en 0. Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0]. */

function convertNegatives(Arr)
{
  for(let i = 0; i<Arr.length; i++){
    if(Arr[i]<0){
      Arr[i] = 0;
    }
  }
  return Arr;
}

console.log(convertNegatives([1,2,-1,-3]));

/*********Function2*********/
/*Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].*/

function moverAdelante(Arr){
  let i = 0;
  while(i<Arr.length-1){
    Arr[i] = Arr[i+1];
    i++;
  }
  Arr[Arr.length-1] = 0;
  return Arr;
}
console.log(moverAdelante([1,2,3,4,5,6,7]));

/*********Function3*********/
/** Configura un array para que el resultado sean los valores en el orden contrario. Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].*/
function swap(a,b)
{
  let temp = a;
  a = b;
  b = temp;
}

function returnReverso(Arr)
{
  for(let i = 0; i<Arr.length/2; i++){
    //swap(Arr[i],Arr[Arr.length-i-1]); 
      let temp = Arr[i];
      Arr[i] = Arr[Arr.length-i-1];
      Arr[Arr.length-i-1] = temp;
  }
  return Arr;
}

let x = returnReverso([1,2,3,4]);
console.log(x);

/*********Function4*********/
/** Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].*/

function repetirValores(Arr)
{
  for(let i = Arr.length-1; i>=0; i--)
  {
    Arr[2*i+1] = Arr[i];
    Arr[2*i] = Arr[i]
                                                                                   
  }
  console.log(Arr);
}

repetirValores([4,"Ulyses",42,false]);

