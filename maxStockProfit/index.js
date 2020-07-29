const maxStockProfit = (pricesArray) => {
 let maxProfit = -1;
 let buyPrice = 0;
 let sellPrice = 0;

 let changeBuyPrice = true;

 for (let i = 0; i < pricesArray.length; i++) {
  if (changeBuyPrice) buyPrice = pricesArray[i];
  sellPrice = pricesArray[i + 1];

  if (sellPrice < buyPrice) changeBuyPrice = true;
  else {
    let tempProfit = sellPrice - buyPrice;
    if (tempProfit > maxProfit) maxProfit = tempProfit;
    changeBuyPrice = false;
  }
 }
 return maxProfit;
}

console.log(maxStockProfit([67, -5, 3, 5, -46, 8, 2, 1, 4]))