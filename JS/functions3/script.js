/*********Function 1********/
/*Dados un array y un valor Y, cuenta e imprime (print) el número de valores 
del array que sean mayores que Y*/

/*function greatherThan(arr,y)
{
  count = 0;
  for(let i = 0; i<arr.length; i++)
  {
    if(arr[i] > y)
    {
      count++;
      console.log('Numero mayor que y:',arr[i]);
    }
  }
  return count;
}

arr = [1,3,7,10,13,19,20];
y = 11;
console.log(greatherThan(arr,y));


/*********Function 2********/
/*Dado un array, imprime los valores máximos (max), mínimos (min) 
y promedio (average) para el array.*/

/*function maxMinMiddle(arr)
{
  max = min = arr[0];
  sum = 0;
  for(let i = 0; i<arr.length; i++)
  {
    sum += arr[i];
    if(arr[i] > max){
      max = arr[i];
    }
    else if(arr[i] < min){
      min = arr[i];
    }
  }
  average = Math.round(sum/arr.length); 
  console.log('El numero maximo es: ',max);
  console.log('El numero minimo es: ',min);
  console.log('El numero medio es: ',average);
}

Arr = [3,19,0,4,23,41,53,42];
maxMinMiddle(Arr);


/**********Function 3**********/
/*Dado un array de números, crea una función que dé como resultado un nuevo 
array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’.
Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5]. */

/*function replaceNegatives(arr)
{
  for(let i = 0; i<arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 'Dojo';
    }
  }
  return arr;
}

x = replaceNegatives([1,2,-3,-5,5]);
console.log(x);

/**********Function 4**********/
/*Dado un array y su respectivo índice, remueve los valores en el rango del 
índice dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)
debiera devolver [20,30,70].*/

function removeRange(Arr, x, y) {
  aux = y - x + 1; /*3*/
  for (let i = x; i <= aux; i++) {
    Arr[i] = Arr[i + aux];
  }
  Arr.splice(aux);
  return Arr;
}

x = removeRange([20, 30, 40, 50, 60, 70], 2, 4);
console.log(x);


