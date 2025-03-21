function testElseIf(val) {
    let response;
  
    if (val > 10) {
      response = "Greater than 10";
    }else if (val < 5){
      response = "Smaller than 5";
    }else{
      response ="Between 5 and 10";
    }
  
    return response;
  }
  
  testElseIf(7);