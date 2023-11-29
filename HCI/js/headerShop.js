var token = $.cookie("token");
var user = $.cookie("username");

$(document).ready(function () {
  if (token) {
    $("#account").removeClass("hidden");
    $("#db").removeClass("hidden");
    $(".buttonSign-in").addClass("hidden");
  }
  if (user) {
    $(".name-user").text("Xin chao " + user);
  }
});

$("#sign-out").on("click", function (e) {
  e.preventDefault();
  $.ajax({
    url: `http://localhost:7070/v2/logout`,
    type: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    success: function (response) {
      $.removeCookie("token", { path: "/" });
      $.removeCookie("username", { path: "/" });
      alert(response);
      location.href = "sign-in.html";
    },
    error: function (error) {
      // Show an alert and log the error if the token is not valid
      alert("Bạn không có quyền truy cập");
      console.error(error);
    },
  }); // Remove the trailing comma here
});

function checkToken() {
  $.ajax({
    url: "http://localhost:7070/v2/checkToken",
    type: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    success: function (response) {
      location.href = "admin-dashboard.html";
    },
    error: function (error) {
      // Show an alert and log the error if the token is not valid
      alert("Lỗi: " + error.responseText);
      console.error(error);
    },
  });
}

$("#admin").on("click", function (e) {
  e.preventDefault();
  // Call the function to check the token when the #admin element is clicked
  checkToken();
});

$.ajax({
  url: "http://localhost:7070/v1/getcategory",
  type: "GET",
})
  .done(function (data) {
    data.forEach((value) => {
      let html = `<li><a href="category.html?categoryId=${value.id}"><i class="ri-play-circle-line"></i>${value.tendanhmuc}</a></li>`;
      $(".category").append(html);
    });
  })
  .fail(function (xhr, status, error) {
    console.error("Error:", status, error);
  });

