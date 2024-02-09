var deathAnniversaryList = [
  {
    name: "Ông: Trần Hữu Loan",
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

function getNearDateList() {
  // Lấy ngày hôm qua
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  // Lọc ra các phần tử có deathAnniversary lớn hơn ngày hôm qua (chỉ quan trọng đến ngày và tháng)
  var filteredList = deathAnniversaryList
    .filter(function (item) {
      var deathDate = new Date(item.deathAnniversary);
      deathDate.setFullYear(yesterday.getFullYear()); // Đặt năm giống với ngày hôm qua
      return deathDate > yesterday;
    })
    .map(function (item) {
      // Tạo một bản sao của phần tử để tránh ảnh hưởng đến mảng gốc
      return { ...item, year: yesterday.getFullYear() };
    });

  filteredList.sort((a, b) => {
    let dateA = new Date(a.deathAnniversary);
    let dateB = new Date(b.deathAnniversary);

    // Chuyển cả hai ngày về dạng chuỗi không bao gồm năm để so sánh
    let dateStringA = a.deathAnniversary.substring(5);
    let dateStringB = b.deathAnniversary.substring(5);

    return dateStringA.localeCompare(dateStringB);
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
