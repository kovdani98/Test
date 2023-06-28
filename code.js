function addItemToCart(data) {
  console.log(data);
}
function percentage(num, per) {
  return (num / 100) * per;
}
window.addEventListener("load", async () => {

  const test = document.getElementById("test");

  try {
    const res = await fetch("https://sheetdb.io/api/v1/a1i3y3b816qc8");
    if (!res.ok) {
      throw new Error("Unable to fetch data");
    }
    
    const data = await res.json();
    
    for (const key in data) {
      const parsedData = data[key];
      displayDetail(parsedData);
    }

    function displayDetail(parsedData) {
      test.innerHTML += `
        <div class="products" id="${parsedData.ID}">
        <img src="img/${parsedData.ID}.webp" width="200px" height="350px"></img>
        <h2>${parsedData.DESC}</h2>
        <h3 id="price">${Number(parsedData.PRICE) + percentage(parsedData.PRICE, 10)} Ft</h3>
        <h4>Készleten: ${parsedData.QUANTITY} db</h4>
        <button id="addCart" onclick="addItemToCart(${parsedData.ID})" >Add to Cart</button>
        </div>
  `;
    }
 
  } catch (err) {
    console.log(err);
  }
});
