const id_product = new URLSearchParams(window.location.search).get(
  "idProduct"
);
function GetByID(id) {
    $(document).ready(function () {
  $.ajax({
    url: `http://localhost:7070/getbyid/${id}`,
    type: "GET",
  })
    .done(function (data) {
      console.log(data);
      if (data && data.length > 0) {
        // Sử dụng forEach để lặp qua dữ liệu
        data.forEach(function (value) {
          let html = `   <div class="description-contens align-items-top row">
                              <div class="col-md-6">
                                 <div class="iq-card-transparent iq-card-block iq-card-stretch iq-card-height">
                                    <div class="iq-card-body p-0">
                                       <div class="row align-items-center">
                                          <div class="col-3">
                                             <ul id="description-slider-nav" class="list-inline p-0 m-0  d-flex align-items-center">
                                                <li>
                                                   <a href="javascript:void(0);">
                                                   <img src="images/book-dec/01.jpg" class="img-fluid rounded w-100" alt="">
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="javascript:void(0);">
                                                   <img src="images/book-dec/02.jpg" class="img-fluid rounded w-100" alt="">
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="javascript:void(0);">
                                                   <img src="images/book-dec/03.jpg" class="img-fluid rounded w-100" alt="">
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="javascript:void(0);">
                                                   <img src="images/book-dec/04.jpg" class="img-fluid rounded w-100" alt="">
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="javascript:void(0);">
                                                   <img src="images/book-dec/05.jpg" class="img-fluid rounded w-100" alt="">
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="javascript:void(0);">
                                                   <img src="images/book-dec/06.jpg" class="img-fluid rounded w-100" alt="">
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                          <div class="col-9">
                                             <ul id="description-slider" class="list-inline p-0 m-0  d-flex align-items-center">
                                                <li>
                                                   <a href="javascript:void(0);">
                                                   <img src="images/new_realeases/img01.jpg" class="img-fluid w-100 rounded" alt="">
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="javascript:void(0);">
                                                   <img src="images/book-dec/02.jpg" class="img-fluid w-100 rounded" alt="">
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="javascript:void(0);">
                                                   <img src="images/book-dec/03.jpg" class="img-fluid w-100 rounded" alt="">
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="javascript:void(0);">
                                                   <img src="images/book-dec/04.jpg" class="img-fluid w-100 rounded" alt="">
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="javascript:void(0);">
                                                   <img src="images/book-dec/05.jpg" class="img-fluid w-100 rounded" alt="">
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="javascript:void(0);">
                                                   <img src="https://drive.google.com/uc?id=${value.img}" class="img-fluid w-100 rounded" alt="">
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-md-6">
                                 <div class="iq-card-transparent iq-card-block iq-card-stretch iq-card-height">
                                    <div class="iq-card-body p-0">
                                       <h3 class="mb-3">Payback Time - Ngày Đòi Nợ</h3>
                                       <div class="price d-flex align-items-center font-weight-500 mb-2">
                                          <span class="font-size-20 pr-2 old-price">350.000 ₫</span>
                                          <span class="font-size-24 text-dark">299.000 ₫</span>
                                       </div>
                                       <div class="mb-3 d-block">
                                          <span class="font-size-20 text-warning">
                                          <i class="fa fa-star mr-1"></i>
                                          <i class="fa fa-star mr-1"></i>
                                          <i class="fa fa-star mr-1"></i>
                                          <i class="fa fa-star mr-1"></i>
                                          <i class="fa fa-star"></i>
                                          </span>
                                       </div>
                                       <span class="text-dark mb-4 pb-4 iq-border-bottom d-block">"Trong chứng khoán và thị trường tài chính, dám tham gia đầu tư cũng là một thành công tâm lý ban đầu. Dù vậy, 95% nhà đầu tư Việt Nam thuộc nhóm nhà đầu tư nhỏ lẻ với vốn kiến thức tài chính vô cùng hạn chế. Họ tham gia vào thị trường chứng khoán với 100% ý chí và sự quyết tâm chiến thắng thị trường, nhưng thật không may mắn kết cục cuối cùng của họ luôn là sự thất bại và mất tiền.</span>
                                       <div class="text-primary mb-4">Tác giả: <span class="text-body">HappyLive</span></div>
                                       <div class="mb-4 d-flex align-items-center">                                       
                                          <a href="checkout.html" class="btn btn-primary view-more mr-2">Thêm vào giỏ hàng</a>
                                          <a href="book-pdf.html" class="btn btn-primary view-more mr-2">Mua ngay</a>
                                       </div>
                                       <div class="mb-3">
                                          <a href="#" class="text-body text-center"><span class="avatar-30 rounded-circle bg-primary d-inline-block mr-2"><i class="ri-heart-fill"></i></span><span>Thêm vào danh sách yêu thích</span></a>
                                       </div>
                                       <div class="iq-social d-flex align-items-center">
                                          <h5 class="mr-2">Chia sẻ:</h5>
                                          <ul class="list-inline d-flex p-0 mb-0 align-items-center">
                                             <li>
                                                <a href="#" class="avatar-40 rounded-circle bg-primary mr-2 facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                             </li>
                                             <li>
                                                <a href="#" class="avatar-40 rounded-circle bg-primary mr-2 twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                             </li>
                                             <li>
                                                <a href="#" class="avatar-40 rounded-circle bg-primary mr-2 youtube"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                                             </li>
                                             <li >
                                                <a href="#" class="avatar-40 rounded-circle bg-primary pinterest"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>`;
                $(".bookpage").append(html);
        });
      }
    })
    .fail(function (error) {
      console.log("Error:", error);
    });
    })
}

GetByID(id_product)
