function openNav() {
    document.getElementById("mySidenav").style.left = "0px";
}
function closeNav() {
    document.getElementById("mySidenav").style.left = "-250px";
}
// END: RESPONSIVE NAVBAR 

$(window).scroll(function() {

    var scroll = $(window).scrollTop();

    //>=, not <=

    if (scroll >= 100) {

        //clearHeader, not clearheader - caps H

        $("header").addClass("stickyheader");

    } else {

        $("header").removeClass("stickyheader");

    }

});


// WOW ANIMATION

  new WOW().init();

// WOW ANIMATION

function setButtonURL()
{
    $zopim.livechat.window.toggle();
}


 function getURLParameter(name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    }
    var a=getURLParameter('pack');
$('#packages option:eq('+ a +')').prop('selected', true);


$('.platform_logo').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centermode: false,
    speed: 2000,
    arrows: false,
    dots: false,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1610,
          settings: {
          slidesToShow: 5,
          arrows: false,
          dots: false,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 1026,
          settings: {
          slidesToShow: 4,
          arrows: false,
          dots: false,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 580,
          settings: {
          slidesToShow: 2,
          arrows: false,
          dots: false,
          slidesToScroll: 1,
        }
      },

      

      {
        breakpoint: 992,
          settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 830,
          settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 1,
        }
      },
    ]
  });


$('.services_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    dots: false,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 580,
          settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 992,
          settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 500,
          settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 770,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 830,
          settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 1,
        }
      },
    ]
  });

$('.inner_services_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    dots: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 580,
          settings: {
          slidesToShow: 2,
          arrows: false,
          dots: false,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 992,
          settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 830,
          settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 1,
        }
      },
    ]
  });


$('.process_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centermode: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    dots: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 580,
          settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 992,
          settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 830,
          settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
        }
      },
    ]
  });


$('.pkg_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centermode: false,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: true,
    dots: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 580,
          settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 992,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 1110,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 770,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 830,
          settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 1,
        }
      },
    ]
  });


$('.seo_pkg_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centermode: false,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: true,
    dots: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 580,
          settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 992,
          settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 830,
          settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
        }
      },
    ]
  });


$('.review_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 2000,
    arrows: false,
    dots: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 580,
          settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 992,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 830,
          settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        }
      },
    ]
  });







   


//=========== FLOATING FORM STARTS
  $(".clickbutton").click(function(){
   $('.floatbutton').toggleClass("active");
   //$('.crossplus').toggleClass("rotate");
});
//=========== FLOATING FORM ENDS

function order_now_value(objButton, packid=1){
    x = objButton.name;
    $('#packages').val($('#packages').find('[pack="'+packid+'"]').attr('value'));
    try{
        document.getElementById('lead_area_popup1').value = x;
        document.getElementById('lead_text').innerHTML = x;
    }catch(ex){}
}


 // intel Tel Input
let ip; 
let ip_value;
 $("#phone-country,#phone-coun,#phone-order").intlTelInput({
     
      allowDropdown: false,
      // autoHideDialCode: false,
      // autoPlaceholder: "off",
      // dropdownContainer: "body",
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
    geoIpLookup: function(callback) {
            $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
              ip=resp.ip;
            
              
            });
          },
       initialCountry: "auto",
       nationalMode: true,
       separateDialCode: true,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      // preferredCountries: ['cn', 'jp'],
     // utilsScript: "<?php echo $basesurl;?>js/utils.js"
    });

setTimeout(function(){
    $('input[name="countryCode"]').val($('.selected-dial-code').text());
    $('input[name="ip"]').val(ip);
    $('input[name="countryName"]').val( $('.country-list .country.active .country-name').text());
}, 3000);


$('body').delegate('.country','click',function(){
$('input[name="countryCode"]').val($(this).find('.dial-code').text());
$('input[name="ip"]').val(ip);
$('input[name="countryName"]').val($(this).closest("form").find('.country-list .country.active .country-name').text());

/*var oldString2=$('.selected-flag').attr('title').toUpperCase();
  var newString12 = oldString2.split(':',1)[0];
               $('input[name="ctry"]').val(newString12);*/
 });



 if($(window).innerWidth() <= 751) {
  $('.portfolio_slid').slick({
       dots: true,
       infinite: true,
       autoplay:true,
       speed: 300,
       arrows:false,
       slidesToShow: 1,
       adaptiveHeight: true
    });
 }


const stats = document.querySelectorAll(".counter");

stats.forEach(stat => {
  // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
  const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
  const time = 1000;
  let result = [...patt.exec(stat.textContent)];
  let fresh = true;
  let ticks;

  // Remove first full match from result array (we dont need the full match, just the individual match groups).
  result.shift();
  // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
  result = result.filter(res => res != null);

  while (stat.firstChild) {
    stat.removeChild(stat.firstChild);
  }

  for (let res of result) {
    if (isNaN(res)) {
      stat.insertAdjacentHTML("beforeend", `<span>${res}</span>`);
    } else {
      for (let i = 0; i < res.length; i++) {
        stat.insertAdjacentHTML(
          "beforeend",
          `<span data-value="${res[i]}">
            <span>&ndash;</span>
            ${Array(parseInt(res[i]) + 1)
              .join(0)
              .split(0)
              .map(
                (x, j) => `
              <span>${j}</span>
            `
              )
              .join("")}
          </span>`
        );
      }
    }
  }

  ticks = [...stat.querySelectorAll("span[data-value]")];

  let activate = () => {
    let top = stat.getBoundingClientRect().top;
    let offset = window.innerHeight * 0.8;

    setTimeout(() => {
      fresh = false;
    }, time);

    if (top < offset) {
      setTimeout(() => {
        for (let tick of ticks) {
          let dist = parseInt(tick.getAttribute("data-value")) + 1;
          tick.style.transform = `translateY(-${dist * 100}%)`;
        }
      }, fresh ? time : 0);
      window.removeEventListener("scroll", activate);
    }
  };
  window.addEventListener("scroll", activate);
  activate();
});


// document.onkeydown = function(e) {
//   if(event.keyCode == 123) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//      return false;
//   }
//   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//      return false;
//   }
// }


// $(document).on({
//     "contextmenu": function(e) {
//         console.log("ctx menu button:", e.which); 

//         // Stop the context menu
//         e.preventDefault();
//     },
//     "mousedown": function(e) { 
//         console.log("normal mouse down:", e.which); 
//     },
//     "mouseup": function(e) { 
//         console.log("normal mouse up:", e.which); 
//     }
// });

//*****************************

// Mobile Navigation

//*****************************

$('.mobile-nav-btn').click(function() {

    $('.mobile-nav-btn, .mobile-nav, .app-container').toggleClass('active');

});





$('.firstlevel li a').click(function() {

    if ($(this).hasClass('active')) {

        $(this).removeClass('active');

        $(this).siblings('ul').slideUp();

    } else {

        $('.firstlevel li a').removeClass('active');

        $(this).addClass('active');

        $('.dropdown').slideUp();

        $(this).siblings('ul').slideDown();

    }

});



$('.mainnav > li > a').click(function() {

    if ($(this).hasClass('active')) {

        $(this).removeClass('active');

        $(this).parents('li').children('.firstlevel').slideUp();

    } else {

        $(this).addClass('active');

        $(this).parents('li').children('.firstlevel').slideDown();

        $(this).parents('li').siblings('li').children('a').removeClass('active');

        $(this).parents('li').siblings('li').children('.firstlevel').slideUp();

    }

});

$(function () {
    
    $(document).on("submit", ".leadForm", function () {
        // var captchaResponse = grecaptcha.getResponse($(this).find('[captcha-index]').attr('captcha-index'));
        // if (captchaResponse == "") {
        //     generalHelper.errorHandler(["Captcha required"]);
        // } else {
            $(this).find('#formResult').removeClass("alert alert-success alert-danger").html('');
            $(this).find('#signupBtn').hide();
            $(this).find('#formResult').html('<img src="/order/img/loader.gif" alt="Loading, Please Wait..." />');
            var formType = $(this).parents('[data-form-type]').attr('data-form-type');
            $(this).find("#formType").val(formType);
            $(this).find("#referer").val(document.URL);
            var formData = new FormData(this);
            console.log(formData);
            // formData.append('captcha', captchaResponse);
            var currentForm = $(this);
            _ajax.postFormData("../crm_inc/core/leadManagement", formData, function (response) {
                currentForm.find('#signupBtn').show();
                if (response.status) {
                    currentForm.find('#formResult').addClass('alert alert-success').html("Congratulations! You've Signed up, redirecting please wait.....");
                    currentForm.find('input:not([type="hidden"]),textarea,select').val('');
                    generalHelper.redirectToNextPage(formType, currentForm.find("#package_sku").val());
                } else {
                    currentForm.find('#formResult').hide();
                    generalHelper.errorHandler(response.messages);
                }
            });
        // }
    });
}

);


// var abc = document.location.href.match(/[^\/]+$/)[0];
// var newabc = abc.split('.').slice(0, -1).join('.');
// // console.log(newabc);
// var myArray = newabc.split("-");
// // console.log(myArray[2]);
// if(myArray[2] == 'package')
// {
//   $('body').addClass('packages_banner');
// }


