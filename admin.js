let listProduct = JSON.parse(localStorage.getItem("listProduct"));
function saveButton() {
  let nameProductInput = document.getElementById("nameProduct").value;
  let imgProductInput = document.getElementById("imgProduct");
  let priceProductInput = document.getElementById("priceProduct").value;
  let desProductInput = document.getElementById("desProduct").value;
  let infoProduct = {
    nameProduct: nameProductInput,
    imgProduct: imgProductInput,
    priceProduct: priceProductInput,
    desProduct: desProductInput,
  };
  if (listProduct == null) {
    listProduct = []; 
    listProduct.push(infoProduct);
    localStorage.setItem("listProduct", JSON.stringify(listProduct));
  } else {
    listProduct.push(infoProduct);
    localStorage.setItem("listProduct", JSON.stringify(listProduct));
  }
  nameProductInput = document.getElementById("nameProduct").value = "";
  imgProductInput = document.getElementById("imgProduct").value = "";
  priceProductInput = document.getElementById("priceProduct").value = "";
  desProductInput = document.getElementById("desProduct").value = "";
  renderProduct();
}

function renderProduct() {
  let result = `
        <tr>
          <td class="tr1" >ID</td>
          <td class="tr1">Tên</td>
          <td class="tr1">Ảnh</td>
          <td class="tr1">Giá</td>
          <td class="tr1">Mô tả</td>
          </tr>
          `;
          for (let i = 0; i < listProduct.length; i++) {
              result += `
              <tr class="tr1">
              <td class="td1">${i + 1}</td>
              <td class="td1">${listProduct[i].nameProduct}</td>
              <td class="td1"><img src="${listProduct[i].imgProduct}"></td>
              <td class="td1">${listProduct[i].priceProduct}</td>
              <td class="td1">${listProduct[i].desProduct}</td>
              <td class="td1"><button class="change" onclick="editButton(${i})">Edit</button></td>
              <td class="td1"><button class="change" onclick="deleteButton(${i})">Delete</button></td>
              </tr>
          `;
  }
  document.getElementById("tableAdded").innerHTML = result;
}
function deleteButton(index) {
    console.log(index);
    listProduct.splice(index, 1);
    localStorage.setItem("listProduct", JSON.stringify(listProduct));
    renderProduct();
}
renderProduct();