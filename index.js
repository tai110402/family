function myFunction() {
    //Remove current div inside
    var parentDiv = document.getElementById("death-anniversary-list");
parentDiv.innerHTML = "";

    for(var i=0; i < 3; i++) {
        // Tạo div ngoài cùng
var newDiv = document.createElement("div");
newDiv.className = "py-1 my-1 text-center border border-primary";

// Tạo và thêm h1 vào div
var newH1 = document.createElement("h1");
newH1.className = "display-5 fw-bold text-body-emphasis fs-4";
newH1.textContent = "Ong: Tran Huu Loan";
newDiv.appendChild(newH1);

// Tạo div con để chứa p
var innerDiv = document.createElement("div");
innerDiv.className = "col-lg-6 mx-auto";

// Tạo và thêm p vào div con
var newP = document.createElement("p");
newP.className = "lead mb-0 fs-4";
newP.textContent = "01-01-1951 -- 01-01-2002";
innerDiv.appendChild(newP);

// Thêm div con vào div ngoài cùng
newDiv.appendChild(innerDiv);

// Tìm phần tử trong DOM để chèn div mới
var targetContainer = document.getElementById("death-anniversary-list");

// Chèn div mới vào DOM
targetContainer.appendChild(newDiv);
    }
}

var danhSachNguoiDung = "tai"