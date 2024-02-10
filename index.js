var deathAnniversaryList = [
  {
    name: "Ông: Trần Hữu Loan",
    dateOfBirth: "2024-02-11",
    deathAnniversary: "2023-02-07",
  },
  {
    name: "Ông: Trần Hữu Loan 2",
    dateOfBirth: "2024-02-11",
    deathAnniversary: "2023-02-07",
  },
  {
    name: "Ông: Trần Hữu Loan 3",
    dateOfBirth: "2024-02-11",
    deathAnniversary: "2023-02-07",
  },
  {
    name: "Ông: Trần Hữu Loan",
    dateOfBirth: "2024-02-11",
    deathAnniversary: "2023-02-07",
  },
  {
    name: "Ông: Trần Hữu Loan 2",
    dateOfBirth: "2024-02-11",
    deathAnniversary: "2023-02-07",
  },
  {
    name: "Ông: Trần Hữu Loan 3",
    dateOfBirth: "2024-02-11",
    deathAnniversary: "2023-02-07",
  },
  {
    name: "Ông: Trần Hữu Loan",
    dateOfBirth: "2024-02-11",
    deathAnniversary: "2024-08-11",
  },
  {
    name: "Ông: Nguyễn Văn A",
    dateOfBirth: "2024-03-15",
    deathAnniversary: "2005-03-10",
  },
  {
    name: "Ông: Phạm Thị B",
    dateOfBirth: "2024-04-20",
    deathAnniversary: "2024-04-18",
  },
];

var memberList = [
  {
    id: "000001",
    name: "Trần Văn Tài",
    dateOfBirth: "2002-04-11",
    deathAnniversary: "2023-02-07",
  },
  {
    name: "Ông: Trần Hữu Loan 2",
    dateOfBirth: "2024-02-11",
    deathAnniversary: "2023-02-07",
  },
  {
    name: "Ông: Trần Hữu Loan 3",
    dateOfBirth: "2024-02-11",
    deathAnniversary: "2023-02-07",
  },
  {
    name: "Ông: Trần Hữu Loan",
    dateOfBirth: "2024-02-11",
    deathAnniversary: "2023-02-07",
  },
  {
    name: "Ông: Trần Hữu Loan 2",
    dateOfBirth: "2024-02-11",
    deathAnniversary: "2023-02-07",
  },
];

function getListDeathAnniversarInMonth(month) {
  // Chuyển đổi tháng thành chuỗi dạng "MM"
  const targetMonth = month < 10 ? `0${month}` : `${month}`;

  // Lọc danh sách theo điều kiện
  const filteredList = deathAnniversaryList.filter((item) => {
    // Lấy tháng từ ngày mất (deathAnniversary)
    const anniversaryMonth = item.deathAnniversary.split("-")[1];

    // So sánh với tháng cần tìm kiếm
    return anniversaryMonth === targetMonth;
  });

  return filteredList;
}

function myFunction(month) {
  //Remove current div inside
  var parentDiv = document.getElementById("death-anniversary-list");
  parentDiv.innerHTML = "";

  var list = getListDeathAnniversarInMonth(month);

  for (var i = 0; i < list.length; i++) {
    // Tạo div ngoài cùng
    var newDiv = document.createElement("div");
    newDiv.className = "py-1 my-1 text-center border border-primary";

    // Tạo và thêm h1 vào div
    var newH1 = document.createElement("h1");
    newH1.className = "display-5 fw-bold text-body-emphasis fs-4";
    newH1.textContent = list[i].name;
    newDiv.appendChild(newH1);

    // Tạo div con để chứa p
    var innerDiv = document.createElement("div");
    innerDiv.className = "col-lg-6 mx-auto";

    // Tạo và thêm p vào div con
    // death date
    var dateDeathString = list[i].deathAnniversary;
    var customDeathDate = new Date(dateDeathString);
    var year = customDeathDate.getFullYear();
    var month = (customDeathDate.getMonth() + 1).toString().padStart(2, "0"); // Tháng bắt đầu từ 0
    var day = customDeathDate.getDate().toString().padStart(2, "0");

    var formattedDeathDate = `${year}-${month}-${day}`;

    //date of birth
    var dateOfBirthString = list[i].dateOfBirth;
    var customDateOfBirth = new Date(dateOfBirthString);
    var year1 = customDateOfBirth.getFullYear();
    var month1 = (customDateOfBirth.getMonth() + 1).toString().padStart(2, "0"); // Tháng bắt đầu từ 0
    var day1 = customDateOfBirth.getDate().toString().padStart(2, "0");

    var formattedDateOfBirth = `${year1}-${month1}-${day1}`;

    var formattedDate = formattedDateOfBirth + " -- " + formattedDeathDate;

    var newP = document.createElement("p");
    newP.className = "lead mb-0 fs-4";
    newP.textContent = formattedDate;
    innerDiv.appendChild(newP);

    // Thêm div con vào div ngoài cùng
    newDiv.appendChild(innerDiv);

    // Tìm phần tử trong DOM để chèn div mới
    var targetContainer = document.getElementById("death-anniversary-list");

    // Chèn div mới vào DOM
    targetContainer.appendChild(newDiv);
  }
}

function openForm(id) {
  // Lấy phần tử img bằng cách sử dụng id
  var imgElement = document.getElementById("profileImg");

  // Gán src cho phần tử img
  imgElement.src =
    "data:image/jpeg;base64,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";
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
