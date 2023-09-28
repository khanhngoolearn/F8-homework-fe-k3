var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// Lấy các nút button "Thêm vào giỏ hàng"
var addCartListButton = $$('.addCart button');
// Lấy ra giỏ hàng
var cartData = $('#cart-data');
// Khai báo biến tổng số lượng hàng mua 
var totalInputValue = 0;
// Khai báo biến tổng tiền tất cả cần thanh toán
var totalBill = 0;
// Biến đếm sản phẩm
var productCount = 0;

// Handle các thao tác khi click button
addCartListButton.forEach(button => {
    button.addEventListener('click', handleAddCart);
});


function handleAddCart(e) {
    e.preventDefault();
    let cartShopping = $("#cart-data .cart-shopping");
    // Lấy các giá trị để thêm vào innerText
    let inputValue = +(e.target.parentElement.querySelector('input').value);
    let productName = e.target.parentElement.parentElement.querySelector('td:nth-child(2)').innerText;
    let priceValue = +(e.target.parentElement.parentElement.querySelector('td:nth-child(3)').innerText);
    let totalMoney = inputValue * priceValue;
    totalInputValue += inputValue;
    totalBill += totalMoney;

    // Kiểm tra xem có trùng sản phẩm hay không, nếu trùng thì += số lượng và ko in ra dòng mới
    let existedProduct = Array.from($$('.product-name')).find(product => product.innerText === productName);
    if (existedProduct) {
        // Cập nhật số lượng và thành tiền của sản phẩm đã có
        let quantityInput = existedProduct.parentElement.parentElement.querySelector('td:nth-child(4) input');
        let quantityValue = +quantityInput.value;
        quantityInput.value = quantityValue + inputValue;
        let moneyBody = existedProduct.parentElement.parentElement.querySelector('td:nth-child(5)');
        let moneyValue = +moneyBody.innerText;
        moneyBody.innerText = moneyValue + totalMoney;

        // Cập nhật hiển thị tổng số lượng và tổng tiền
        let totalQuantity = $("#cart-data .cart-shopping tfoot td:nth-child(2)");
        let totalMoneyBill = $("#cart-data .cart-shopping tfoot td:nth-child(3)");
        totalQuantity.innerText = totalInputValue;
        totalMoneyBill.innerText = totalBill;
        return;
    }
    
    
    if (!cartShopping) {
        // Tạo các  thẻ để thêm vào #cart-data
    let table = document.createElement('table');
    table.style.border = '1px solid #000';
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    let thead = document.createElement('thead');
    thead.style.border = '1';
    thead.style.fontWeight = 'bold';
    let tbody = document.createElement('tbody');
    let tfoot = document.createElement('tfoot');
    
    let headerRow = document.createElement('tr');
    
    // set up các mục trong phần header row
        let sttHeader = document.createElement('td');
        sttHeader.innerText = 'STT';
        sttHeader.style.width = '5%';
        let nameHeader = document.createElement('td');
        nameHeader.innerText = 'Sản phẩm';
        nameHeader.style.width = '30%';
        let priceHeader = document.createElement('td');
        priceHeader.innerText = 'Giá';
        priceHeader.style.width = '20%';
        let quantityHeader = document.createElement('td');
        quantityHeader.innerText = 'Số lượng';
        quantityHeader.style.width = '20%';
        let moneyHeader = document.createElement('td');
        moneyHeader.innerText = 'Thành tiền';
        moneyHeader.style.width = '20%';
        let deleteHeader = document.createElement('td');
        deleteHeader.innerText = 'Xóa';
        
        headerRow.appendChild(sttHeader);
        headerRow.appendChild(nameHeader);
        headerRow.appendChild(priceHeader);
        headerRow.appendChild(quantityHeader);
        headerRow.appendChild(moneyHeader);
        headerRow.appendChild(deleteHeader);
        
        
        let bodyRow = document.createElement('tr');
        
        // set up các thư mục trong row body
        let sttBody = document.createElement('td');
        let productBody = document.createElement('td');
        productBody.className = 'product-name';
        let priceBody = document.createElement('td');
        let quantityBody = document.createElement('td');
        let quantityBodyInput = document.createElement('input');
        quantityBodyInput.type = 'number';
        quantityBody.appendChild(quantityBodyInput);

        let moneyBody = document.createElement('td');
        let deleteBody = document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.width = '100%';
        deleteButton.style.height = '100%';
        deleteButton.className = 'deleteBtn';
    
        // Đưa các giá trị inner vào các ô tương ứng
        productCount++;
        sttBody.innerText = productCount;
        productBody.innerText = productName;
        priceBody.innerText = priceValue;
        quantityBodyInput.value = inputValue;
        
        moneyBody.innerText = totalMoney;
        deleteBody.appendChild(deleteButton);
        
        bodyRow.appendChild(sttBody);
        bodyRow.appendChild(productBody);
        bodyRow.appendChild(priceBody);
        bodyRow.appendChild(quantityBody);
        bodyRow.appendChild(moneyBody);
        bodyRow.appendChild(deleteBody);
        
        let totalRow = document.createElement('tr');
        
        // set up các thư mục trong row total
        let totalText = document.createElement('td');
        totalText.colSpan = '3';
        let totalQuantity = document.createElement('td');
        totalQuantity.colSpan = '1';
        let totalMoneyBill = document.createElement('td');
        totalMoneyBill.colSpan = '2';
        
        totalText.innerText = 'Tổng';
        totalQuantity.innerText = totalInputValue;
        totalMoneyBill.innerText = totalBill;

        totalRow.appendChild(totalText);
        totalRow.appendChild(totalQuantity);
        totalRow.appendChild(totalMoneyBill);
        
        // Gắn các mục Row vào thead, tbody, table
        thead.appendChild(headerRow);
        tbody.appendChild(bodyRow);
        tfoot.appendChild(totalRow);
        
        table.appendChild(thead);
        table.appendChild(tbody);
        table.appendChild(tfoot);
        table.className = 'cart-shopping';
        
        // Tạo Footer
        let line = document.createElement('hr');
        line.style.margin = '8px 0px';
        let updateButton = document.createElement('button');
        updateButton.textContent = 'Cập nhật giỏ hàng';
        updateButton.className = 'updateBtn';
        updateButton.addEventListener('click', handleUpdateCart);
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Xóa giỏ hàng';
        removeButton.style.marginLeft = '4px';
        removeButton.className = 'removeBtn';

        cartData.innerHTML = '';
        cartData.appendChild(table);
        cartData.appendChild(line);
        cartData.appendChild(updateButton);
        cartData.appendChild(removeButton);

        // vẽ border cho các ô
        let cartShopping = $('#cart-data .cart-shopping');
        let rows = cartShopping.querySelectorAll('tr');
        for (let i = 0; i < rows.length; i++) {
            let cells = rows[i].querySelectorAll('td');

            for (var j = 0; j < cells.length; j++) {
                cells[j].style.border = '1px solid #000';
            }
        }

    
    } else {
        let tbody = cartShopping.querySelector('tbody');
        let bodyRow = document.createElement('tr');

        // set up các thư mục trong row body
        let sttBody = document.createElement('td');
        let productBody = document.createElement('td');
        productBody.className = 'product-name';
        let priceBody = document.createElement('td');
        let quantityBody = document.createElement('td');
        let quantityBodyInput = document.createElement('input');
        quantityBodyInput.type = 'number';
        quantityBody.appendChild(quantityBodyInput);

        let moneyBody = document.createElement('td');
        let deleteBody = document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.width = '100%';
        deleteButton.style.height = '100%';
        deleteButton.className = 'deleteBtn';

        // Đưa các giá trị inner vào các ô tương ứng
        let productCount = tbody.childElementCount + 1;
        sttBody.innerText = productCount;
        productBody.innerText = productName;
        priceBody.innerText = priceValue;
        quantityBodyInput.value = inputValue;

        moneyBody.innerText = totalMoney;
        deleteBody.appendChild(deleteButton);

        bodyRow.appendChild(sttBody);
        bodyRow.appendChild(productBody);
        bodyRow.appendChild(priceBody);
        bodyRow.appendChild(quantityBody);
        bodyRow.appendChild(moneyBody);
        bodyRow.appendChild(deleteBody);

        tbody.appendChild(bodyRow);

        let tfoot = cartShopping.querySelector('tfoot');
        let totalRow = document.createElement('tr');

        let totalText = document.createElement('td');
        totalText.colSpan = '3';
        let totalQuantity = document.createElement('td');
        totalQuantity.colSpan = '1';
        let totalMoneyBill = document.createElement('td');
        totalMoneyBill.colSpan = '2';

        totalText.innerText = 'Tổng';
        totalQuantity.innerText = totalInputValue;
        totalMoneyBill.innerText = totalBill;

        totalRow.appendChild(totalText);
        totalRow.appendChild(totalQuantity);
        totalRow.appendChild(totalMoneyBill);

        tfoot.innerHTML = '';
        tfoot.appendChild(totalRow);

        // set border cho các ô

        let rows = cartShopping.querySelectorAll('tr');
        for (let i = 0; i < rows.length; i++) {
            let cells = rows[i].querySelectorAll('td');

            for (var j = 0; j < cells.length; j++) {
                cells[j].style.border = '1px solid #000';
            }
        }
    }

    // Xóa từng dòng

    var deleteBtns = Array.from($$('.deleteBtn'));
    deleteBtns.forEach(button => {
        button.addEventListener('click', handleDeleteProduct);
    });

    // Xóa sạch
    let removeBtn = $('.removeBtn');
    let cartDataremove = removeBtn.parentElement;
    removeBtn.onclick = () => {
        if(confirm('Are u sure')) {
            cartDataremove.remove();
            alert('Xóa giỏ hàng thành công');
            cartData.innerHTML = '';
            let p = document.createElement('p');
            p.innerHTML = 'Giỏ hàng không có sản phẩm';
            cartData.appendChild(p);
            let container = $('.container');
            container.appendChild(cartData);
        }
    }
        
}

handleDeleteProduct = function(e) {
    e.preventDefault();

    if(confirm('Are you sure you want to delete')) {
        let rowDeleted = e.target.parentElement.parentElement;
        console.log(rowDeleted);
        rowDeleted.remove();
        // Cập nhật lại tổng số lượng và tổng tiền
        totalInputValue -= +rowDeleted.querySelector('td:nth-child(4) input').value;
        totalBill -= +rowDeleted.querySelector('td:nth-child(5)').innerText;

        let totalQuantity = $("#cart-data .cart-shopping tfoot td:nth-child(2)");
        let totalMoneyBill = $("#cart-data .cart-shopping tfoot td:nth-child(3)");
        totalQuantity.innerText = totalInputValue;
        totalMoneyBill.innerText = totalBill;
        alert('Xóa sản phẩm thành công!')
    }
}

function handleUpdateCart(e) {
    e.preventDefault();

    let quantityInputs = $$('.cart-shopping tbody input');
    quantityInputs.forEach(input => {
        let inputValue = +input.value;
        let priceValue = +input.parentElement.previousElementSibling.innerText;
        let totalMoney = inputValue * priceValue;

        totalInputValue += inputValue;
        totalBill += totalMoney;
    });

    let totalQuantity = $("#cart-data .cart-shopping tfoot td:nth-child(2)");
    let totalMoneyBill = $("#cart-data .cart-shopping tfoot td:nth-child(3)");
    totalQuantity.innerText = totalInputValue;
    totalMoneyBill.innerText = totalBill;
    alert('Cập nhật giỏ hàng thành công');
}
