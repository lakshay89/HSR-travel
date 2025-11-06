$(function () {
    $('#datetimepicker').datetimepicker({  
        minDate:new Date()
    });
});
$(function(){
    $('.nav a').filter(function(){return this.href==location.href}).parent().addClass('active').siblings().removeClass('active')
    $('.nav a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active')    
    });
})
$("#btnSubmit").click(function(event) {
    var form = $("#myForm")
    if (form[0].checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    
    form.addClass('was-validated');   
$('#carousel').carousel();
});
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            stagePadding:50
        },
        480:{
            items:2,
            nav:false,
            stagePadding:40
        },
        768:{
            items:3,
            nav:false,
            stagePadding:50
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});


(function() {
    var nav = document.getElementById('myNav'),
        anchor = nav.getElementsByTagName('a'),
        current = window.location.pathname.split('/')[1];
        for (var i = 0; i < anchor.length; i++) {
        if(anchor[i].href == current) {
            anchor[i].className = "active";
        }
    }
})();
