// Declara la variable myGlobal debajo de esta línea


function fun1() {
    // Asigna 5 a oopsGlobal aquí
  
  }
  
  // Cambia solo el código encima de esta línea
  const myGlobal = 10;
  const oopsGlobal = 5;
  
  function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }