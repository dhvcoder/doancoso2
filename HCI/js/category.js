$.ajax({
  url: "http://localhost:7070/v1/getcategory",
  type: "GET",
})
  .done(function (data) {
    let stt = 1;
    // Xử lý dữ liệu đã nhận được từ API khi yêu cầu thành công
    data.forEach((value) => {
      let html = `  <tr>
                        <td>${stt++}</td>
                        <td>${value.tendanhmuc}</td>
                        <td>
                            <div class="flex align-items-center list-user-action">
                              <button type="button" class="btn btn-sm btn-warning mx-1 px-1 py-1" data-toggle="modal" data-target="#update" onclick =getBYID(${
                                value.id
                              })  >
                               <i class="ri-pencil-line"></i>
                            </button>
                             <button type="button" class="btn btn-sm btn-warning mx-1 px-1 py-1" onclick="openConfirmationModal(${
                               value.id
                             })" data-toggle="modal" data-target="#modalDelete">
                                <i class="ri-delete-bin-line"></i>
                            </button>

                            </div>
                        </td>
                        <td><a class="btn btn-primary" href="admin-books.html?id=${
                          value.id
                        }" role="button">Xem sản phẩm</a></td>
                    </tr>`;
      $(".t-body").append(html);
    });
  })
  .fail(function (xhr, status, error) {
    // Xử lý lỗi nếu có khi yêu cầu thất bại
    console.error("Error:", status, error);
  });

$(document).ready(function () {
  $("#add-category-form").submit(function (e) {
    e.preventDefault();

    // Lấy giá trị của #tendanhmuc
    const tendanhmuc = $("#tendanhmuc").val();
    console.log(tendanhmuc);
    //  Gửi yêu cầu Ajax
    $.ajax({
      url: "http://localhost:7070/v1/addcategory",
      type: "POST",
      data: { tendanhmuc: tendanhmuc }, // Đảm bảo gửi dữ liệu theo dạng object
    })
      .done(function (data) {
        location.reload();
      })
      .fail(function () {
        // Xử lý khi yêu cầu thất bại
        console.log("loi");
      });
  });
});

function getBYID(id) {
  $.ajax({
    url: `http://localhost:7070/v1/getcategory/${id}`,
    type: "GET",
    statusCode: {
      401: function () {
        // Xử lý khi trạng thái là 401 Unauthorized
        console.log("Unauthorized");
      },
      500: function () {
        // Xử lý khi trạng thái là 500 Internal Server Error
        console.log("Internal Server Error");
      },
      // Thêm các trạng thái khác nếu cần
    },
  })
    .done(function (data) {
      // Kiểm tra xem dữ liệu có tồn tại không
      if (data && data.length > 0) {
        // Sử dụng forEach để lặp qua dữ liệu
        data.forEach(function (value) {
          $("#id_danhmuc").val(value.id);
          $("#tendanhmuc-up").val(value.tendanhmuc);
        });
      }
    })
    .fail(function () {
      // Xử lý khi yêu cầu thất bại với các trạng thái không được xử lý bởi statusCode
      console.log("Unhandled Error");
    });
}

function Update() {
  $("#update-category-form").submit(function (event) {
    event.preventDefault();
    const id = $("#id_danhmuc").val();
    const newtendanhmuc = $("#tendanhmuc-up").val();

    $.ajax({
      url: `http://localhost:7070/v1/updatecategory/${id}`, // Make sure to use the correct URL
      type: "PUT",
      data: { tendanhmuc: newtendanhmuc },
      success: function (data) {
        location.reload();
      },
      error: function (xhr, status, error) {
        console.log(xhr.status + ": " + xhr.statusText);
        // Handle the error appropriately
      },
    });
  });
}

// delete category

function openConfirmationModal(id) {
  console.log(id);
  $(".button-delete").empty();
  let modalDelete = `<button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                  <button type="button" class="btn btn-danger" onclick="deletecategory(${id})" id="confirmDelete">Xoá</button>`;
  $(".button-delete").append(modalDelete);
}
function deletecategory(id) {
  $.ajax({
    url: `http://localhost:7070/v1/deletecategory/${id}`,
    type: "DELETE",
    success: function (data) {
      location.reload();
    },
    error: function (xhr, status, error) {
      console.log(xhr.status + ": " + xhr.statusText);
      // Handle the error appropriately
    },
  });
}
