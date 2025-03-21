function testSize(num) {
    let response;
    
    if(num < 5){
      response = "Tiny";
    }else if(num < 10){
      response = "Small";
    }else if(num < 15){
      response = "Medium";
    }else if(num < 20){
      response = "Large";
    }else if(num < 5){
      response = "Tiny";
    }else if(num >= 20){
      response = "Huge";
    }
  
    return response;
  }
  
  testSize(7);