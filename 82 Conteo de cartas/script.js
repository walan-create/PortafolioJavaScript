let count = 0;

function cc(card) {
  let text;
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
      
  }
    if (count<=0){
      text = " Hold";
    }else{
      text = " Bet";
    }
  return count+text;
  // Cambia solo el código encima de esta línea
}

cc(2); cc(3); cc(7); cc('K'); cc('A');