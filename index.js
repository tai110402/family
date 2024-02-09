function myFunction() {
    // Tạo một phần tử div mới
var newDiv = document.createElement("div");

// Thêm các lớp của Bootstrap cho div mới
newDiv.classList.add("ok", "my-3", "bg-light", "p-3");

// Tạo một thẻ img mới
var newImg = document.createElement("img");
newImg.src = "https://example.com/image.jpg"; // Đặt đường dẫn hình ảnh
newImg.classList.add("img-fluid", "rounded");

// Tạo một thẻ p mới
var newP = document.createElement("p");
newP.innerHTML = danhSachNguoiDung;

// Chèn thẻ img và thẻ p vào trong thẻ div
newDiv.appendChild(newImg);
newDiv.appendChild(newP);

// Tìm phần tử trong DOM nơi bạn muốn chèn div mới
var container = document.getElementById("collapseExample1");

// Chèn div mới vào container
container.appendChild(newDiv);
}

var danhSachNguoiDung = "tai"