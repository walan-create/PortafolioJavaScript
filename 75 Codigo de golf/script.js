const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  let response;
  const diferencia = strokes - par;

  if (strokes === 1){
    response = names[0];
  }else if (diferencia <= -2){
    response = names[1];
  }else if (diferencia <= -1){
    response = names[2];
  }else if (diferencia === 0){
    response = names[3];
  }else if (diferencia === 1){
    response = names[4];
  }else if (diferencia === 2){
    response = names[5];
  }else if (diferencia >= 3){
    response = names[6];
  }
  return response;
}
golfScore(5, 4);
