function multiplyAll(arr) {
    let product = 1;
    // Cambia solo el código debajo de esta línea
  
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
   
    // Cambia solo el código encima de esta línea
    console.log(product);
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  