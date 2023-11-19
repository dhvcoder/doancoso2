const id_categogy = new URLSearchParams(window.location.search).get("id");
let currentPage = 1;
var itemsPerPage = 4;

function loadData(page) {
  $.ajax({
    url: `http://localhost:7070/getlist/${id_categogy}/${page}`,
    type: "GET",
  })
    .done(function (response) {
      console.log(response);
      $(".t-body").empty(); // Clear previous data
      let isFirstOptionAdded = false; // Biến để kiểm tra xem đã thêm option hay chưa
      if (Array.isArray(response.data)) {
        let sttStart = (page - 1) * itemsPerPage + 1;

        response.data.forEach((value, idx) => {
          let stt = sttStart + idx;
          let selectOption = "";
          let html = `<tr>
            <td>${stt}</td>
            <td><img class="img-fluid rounded" src="https://drive.google.com/uc?id=${value.img}" alt=""></td>
            <td>${value.ten}</td>
            <td>${value.tendanhmuc}</td>
            <td>Jhone Steben</td>
            <td>${value.gia}$</td>                                      
            <td>
                <div class="flex align-items-center list-user-action">
                    <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="admin-add-book.html"><i class="ri-pencil-line"></i></a>
                    <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Xoá" href="#"><i class="ri-delete-bin-line"></i></a>
                </div>
            </td>
          </tr>`;
          if (!isFirstOptionAdded) {
            selectOption = `<option value="${value.id_danhmuc}">${value.tendanhmuc}</option>`;
            $("#select-category").append(selectOption);
            isFirstOptionAdded = true;
          }
          console.log(selectOption);
          $(".t-body").append(html);
        });
      }

      // Update current page
      currentPage = page;

      // Update pagination
      updatePagination(response.total_page);
    })
    .fail(function (error) {
      console.log("Error:", error);
    });
}

function updatePagination(totalPages) {
  $(".pagination").empty();

  // Add "Previous" button
  $(".pagination").append(
    `<li class="page-item ${
      currentPage === 1 ? "disabled" : ""
    }"><a class="page-link" href="#" data-page="${
      currentPage - 1
    }" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>`
  );

  // Add individual page links
  for (let i = 1; i <= totalPages; i++) {
    let sttStart = (i - 1) * itemsPerPage + 1;
    let sttEnd = i * itemsPerPage;
    let isActive = i === currentPage ? "active" : "";
    let html = `<li class="page-item ${isActive}"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
    $(".pagination").append(html);
  }

  // Add "Next" button
  $(".pagination").append(
    `<li class="page-item ${
      currentPage === totalPages ? "disabled" : ""
    }"><a class="page-link" href="#" data-page="${
      currentPage + 1
    }" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>`
  );

  // Add click event listener to each page link
  $(".pagination")
    .find("a.page-link")
    .click(function (event) {
      event.preventDefault();
      let clickedPage = parseInt($(this).data("page"));
      loadData(clickedPage);
    });
}

// Load initial data
loadData(currentPage);


// add-product
var formadd = document.getElementById("form-add-product");

$(formadd).submit(function (e) {
  e.preventDefault();

  var formData = new FormData(formadd);

  $.ajax({
    url: "http://localhost:7070/insertProduct",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function (data) {
      // Xử lý dữ liệu trả về từ server nếu cần
      console.log("Success:", data);
       location.reload();
    },
    error: function (error) {
      // Xử lý lỗi nếu có
      console.error("Error:", error);
    },
  });
});

