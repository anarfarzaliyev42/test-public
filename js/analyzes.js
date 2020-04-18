$(function () {

  //Payment
  $(document).on("keyup", "#amount", function () {
    let valuePrice = $(this).val();

    
    if (valuePrice == "") {
      valuePrice = 0;
      $(".price").removeClass("price-active");
         $(".price strong").text(valuePrice);
    }
     else if(valuePrice>=0){
      $(".price").addClass("price-active");
      $(".price strong").text(valuePrice);
    }

 
  });
 
});
