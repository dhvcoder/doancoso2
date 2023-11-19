$.ajax({
  url: "http://localhost:7070/getlist",
  type: "GET",
})
  .done(function (data) {
    // Xử lý dữ liệu đã nhận được từ API khi yêu cầu thành công
    data.forEach(value => {
        let html = `<div class="col-sm-6 col-md-4 col-lg-3">
                                 <div class="iq-card iq-card-block iq-card-stretch iq-card-height browse-bookcontent">
                                    <div class="iq-card-body p-0">
                                       <div class="d-flex align-items-center">
                                          <div class="col-6 p-0 position-relative image-overlap-shadow">
                                             <a href="javascript:void();"><img class="img-fluid rounded w-100" src="https://drive.google.com/uc?id=${value.img}" alt=""></a>
                                             <div class="view-book">
                                                <a href="book-page.html" class="btn btn-sm btn-white">Mua Ngay</a>
                                             </div>
                                          </div>
                                          <div class="col-6">
                                             <div class="mb-2">
                                                <h6 class="mb-1">Bí Quyết Làm Giàu Của Napoleon Hill (Tái Bản 2019)</h6>
                                                <p class="font-size-13 line-height mb-1">Napoleon Hill</p>
                                                <div class="d-block line-height">
                                                   <span class="font-size-11 text-warning">
                                                      <i class="fa fa-star"></i>
                                                      <i class="fa fa-star"></i>
                                                      <i class="fa fa-star"></i>
                                                      <i class="fa fa-star"></i>
                                                      <i class="fa fa-star"></i>
                                                   </span>                                             
                                                </div>
                                             </div>
                                             <div class="price d-flex align-items-center">
                                                <h6><b>79.000 đ</b></h6>
                                             </div>
                                             <div class="iq-product-action">
                                                <a href="javascript:void();"><i class="ri-shopping-cart-2-fill text-primary"></i></a>
                                                <a href="javascript:void();" class="ml-2"><i class="ri-heart-fill text-danger"></i></a>
                                             </div>                                      
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>`;
                    $(".productAll").append(html);
    });
  })
  .fail(function (xhr, status, error) {
    // Xử lý lỗi nếu có khi yêu cầu thất bại
    console.error("Error:", status, error);
  });

  