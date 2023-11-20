
function showAuthor() {
    $.ajax({
      url: `http://localhost:7070/v3/getAuthor`,
      type: "GET",
    })
      .done(function (data) {
        let stt = 1;
        data.forEach((value) => {
          let html = `<tr>
                        <td>${stt++}</td>
                        <td>${value.tentacgia}</td>
                        <td>
                            <p class="mb-0">${value.motaAuthor}</p>
                        </td>
                        <td>
                            <div class="flex align-items-center list-user-action">
                                <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="admin-add-category.html"><i class="ri-pencil-line"></i></a>
                                <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Xoá" href="#"><i class="ri-delete-bin-line"></i></a>
                            </div>
                        </td>
                    </tr>`;
          $(".t-body-author").append(html);
        });
      })
      .fail(function (xhr, status, error) {
        // Xử lý lỗi nếu có khi yêu cầu thất bại
        console.error("Error:", status, error);
      });
}
showAuthor();



$(document).ready(function () {
  // Initialize ClassicEditor
  ClassicEditor.create(document.querySelector("#editor"))
    .catch((error) => {
      console.error(error);
    })
    .then((editor) => {
      // ClassicEditor initialization completed
      $("#form-add-author").submit(function (e) {
        e.preventDefault();

        // Lấy giá trị của #tendanhmuc
        const tentacgia = $("#tentacgia").val();

        // Get the value from the editor
        const mota = editor.getData();
        console.log(tentacgia, mota);

        $.ajax({
          url: "http://localhost:7070/v3/insertAuthor",
          type: "POST",
          data: {
            tentacgia: tentacgia,
            mota: mota,
          },
          success: function (data) {
             location.reload();
          },
          error: function () {
            console.log("loi");
          },
        });
      });
    });
});

