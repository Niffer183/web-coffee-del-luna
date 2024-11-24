let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar .classList.toggle('active')
    searchFrom .classList.remove('active')
    cartItem .classList.remove('active')
}

let searchFrom = document.querySelector('.search-from')

document.querySelector('#search-btn').onclick = () => {
    searchFrom .classList.toggle('active')
    navbar .classList.remove('active')
    cartItem .classList.remove('active')
}

let cartItem = document.querySelector('.cart-item-container')

document.querySelector('#cart-btn').onclick = () => {
    cartItem .classList.toggle('active')
    navbar .classList.remove('active')
    searchFrom .classList.remove('active')
}

window.onscroll = () => {
    navbar .classList.remove('active')
    searchFrom .classList.remove('active')
    cartItem .classList.remove('active')
}

    function disableDefault(event) {
        event.preventDefault();
    }

    // Vô hiệu hóa menu chuột phải
    document.addEventListener('contextmenu', disableDefault);

    // Vô hiệu hóa Ctrl + C (sao chép)
    document.addEventListener('keydown', event => {
        if (event.ctrlKey && event.key == 'c') {
            event.preventDefault();
        }
    });

    // Vô hiệu hóa việc chọn văn bản
    document.addEventListener('selectstart', disableDefault);

    // Vô hiệu hóa việc kéo
    document.addEventListener('dragstart', disableDefault);
// Lắng nghe sự kiện click trên nút "Thêm vào giỏ hàng"
const addToCartButtons = document.querySelectorAll(".fas.fa-shopping-cart");
addToCartButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Ngừng hành động mặc định của liên kết

        // Lấy thông tin sản phẩm từ các thuộc tính data- của nút "Thêm vào giỏ hàng"
        const product = {
            name: this.dataset.productName,
            price: parseFloat(this.dataset.productPrice),
            image: this.dataset.productImage
        };

        // Lấy giỏ hàng từ localStorage, nếu không có thì khởi tạo mảng rỗng
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Thêm sản phẩm vào giỏ hàng
        cart.push(product);

        // Lưu lại giỏ hàng vào localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Thông báo cho người dùng
        alert(product.name + " đã được thêm vào giỏ hàng!");
    });
});


    // Hiển thị giỏ hàng trong dropdown khi người dùng click vào nút giỏ hàng
const cartBtn = document.getElementById("cart-btn");
const cartDropdown = document.getElementById("cart-dropdown");

cartBtn.addEventListener("click", function() {
    cartDropdown.classList.toggle("show"); // Hiển thị hoặc ẩn dropdown
    displayCartItems(); // Cập nhật nội dung giỏ hàng
});

// Hàm hiển thị các sản phẩm trong giỏ hàng
function displayCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = ""; // Làm sạch nội dung cũ

    // Lấy giỏ hàng từ localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Nếu giỏ hàng trống
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Giỏ hàng trống!</p>";
        return;
    }

    // Duyệt qua các sản phẩm trong giỏ hàng và hiển thị chúng
    cart.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("cart-item");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div>
                <h4>${product.name}</h4>
                <p>${product.price}đ</p>
            </div>
        `;
        cartItemsContainer.appendChild(productElement);
    });
}

// Đảm bảo giỏ hàng được hiển thị khi tải trang
document.addEventListener("DOMContentLoaded", displayCartItems);
// Chức năng "Tìm kiếm"
const searchBox = document.getElementById("search-box");
if (searchBox) {
    searchBox.addEventListener("input", function() {
        let searchQuery = this.value.toLowerCase();

        // Mảng sản phẩm giả định
        const products = [
            { name: "Bạc Xỉu", price: 35000, image: "img/bạc xỉu.jpg" },
            { name: "Bánh Quên Tên", price: 35000, image: "img/banh.jpg" },
            { name: "Bánh Sừng Bò", price: 35000, image: "img/bánh sừng bỏ.jpg" },
            { name: "Cà Cao Dừa", price: 35000, image: "img/ca-cao-dừa.jpg" },
            { name: "Cà Phê Đen", price: 35000, image: "img/ĐEN.jpg" },
            { name: "Cà Phê Latte", price: 35000, image: "img/cà-phê-latte.jpg" },
            { name: "Cà Phê Sữa Đá", price: 35000, image: "img/CÀ PHÊ SỮA ĐÁ.webp" },
            { name: "Capuchino", price: 35000, image: "img/Capuchino.jpg" },
            { name: "Crinkle Cookies", price: 35000, image: "img/crinkle cookies.jpg" },
            { name: "Croissant Kem Dâu", price: 35000, image: "img/croissant_kem_dâu bestseller.png" },
            { name: "Croissant", price: 35000, image: "img/croissant.jpg" },
            { name: "Espresso", price: 35000, image: "img/espresso_cafe.jpg" },
            { name: "Italian", price: 35000, image: "img/Italian_Sodas_29.jpg" },
            { name: "Machiato", price: 35000, image: "img/machiato_cafe.jpg" },
            { name: "Matcha Latte", price: 35000, image: "img/matcha latte.webp" },
            { name: "Màu Đá", price: 35000, image: "img/màu-đá.jpg" },
            { name: "Soda Bạc Hà", price: 35000, image: "img/soda-bac-ha.jpg" },
            { name: "Soda Blue Sky", price: 35000, image: "img/crinkle cookies.jpg" },
            { name: "Soda Thơm", price: 35000, image: "img/soda_thom.png" },
            { name: "Soda Sinomente", price: 35000, image: "img/soda Sinomente.png" },
            { name: "Soda Vải", price: 35000, image: "img/soda_vai.png" },
            { name: "Soda Việt Quất", price: 35000, image: "img/soda-viet-quat.png" }
        ];
        

        // Lọc sản phẩm theo từ khóa tìm kiếm
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
        displaySearchResults(filteredProducts);
    });
}

// Hàm hiển thị kết quả tìm kiếm
function displaySearchResults(products) {
    const resultsContainer = document.getElementById("products");
    if (resultsContainer) {
        resultsContainer.innerHTML = ""; // Xóa nội dung cũ

        // Duyệt qua các sản phẩm tìm thấy và tạo các phần tử HTML để hiển thị
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("box");

            productElement.innerHTML = `
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart add-to-cart" 
                        data-product-name="${product.name}" 
                        data-product-price="${product.price}" 
                        data-product-image="${product.image}"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="content">
                    <h3>${product.name}</h3>
                    <div class="price">${product.price}đ</div>
                </div>
            `;

            resultsContainer.appendChild(productElement);
        });
    }
}
