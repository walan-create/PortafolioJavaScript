// Configuración
function phoneticLookup(val) {
    let result = "";
  
    // Cambia solo el código debajo de esta línea
  
    const phoneticLookup = {
      "alpha" : "Adams",
      "bravo" : "Boston",
      "charlie" : "Chicago",
      "delta" : "Denver",
      "echo" : "Easy",
      "foxtrot" : "Frank"
    }
    result = phoneticLookup[val];
  
    // Cambia solo el código encima de esta línea
    return result;
  }
  
  phoneticLookup("charlie");