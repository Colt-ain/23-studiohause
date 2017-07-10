// $(document).ready(function() {

// 	//Таймер обратного отсчета
// 	//Документация: http://keith-wood.name/countdown.html
// 	//<div class="countdown" date-time="2015-01-07"></div>
// 	var austDay = new Date($(".countdown").attr("date-time"));
// 	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

// 	//Попап менеджер Magnific Popup
// 	//Документация: http://dimsemenov.com/plugins/magnific-popup/
// 	//<div class="image-popup-no-margins"><a href="image.jpg"><img src="image.jpg" /></a></div>
//   $('.image-popup-no-margins').each(function(){
//     $(this).magnificPopup({
//       delegate: 'a',
//       type: 'image',
//       closeOnContentClick: true,
//       closeBtnInside: false,
//       fixedContentPos: true,
//       mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
//       image: {
//         verticalFit: true
//       },
//       gallery: {
//         enabled: true
//       },
//       zoom: {
//         enabled: true,
//         duration: 300 // don't foget to change the duration also in CSS
//       }
//     });
//   });
// 	//Навигация по Landing Page
// 	//$(".top_mnu") - это верхняя панель со ссылками.
// 	//Ссылки вида <a href="#contacts">Контакты</a>
// 	$(".top_mnu").navigation();

// 	//Добавляет классы дочерним блокам .block для анимации
// 	//Документация: http://imakewebthings.com/jquery-waypoints/
// 	$(".block").waypoint(function(direction) {
// 		if (direction === "down") {
// 			$(".class").addClass("active");
// 		} else if (direction === "up") {
// 			$(".class").removeClass("deactive");
// 		};
// 	}, {offset: 100});

// 	//Плавный скролл до блока .div по клику на .scroll
// 	//Документация: https://github.com/flesler/jquery.scrollTo
// 	$("a.scroll").click(function() {
// 		$.scrollTo($(".div"), 800, {
// 			offset: -90
// 		});
// 	});

// 	//Каруселька
// 	//Документация: http://owlgraphic.com/owlcarousel/
// 	//Обычная карусель
//   $('.owl-carousel').owlCarousel({
//     loop:true,
//     nav:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
//   });
// 	$(".next_button").click(function(){
// 		owl.trigger("owl.next");
// 	});
// 	$(".prev_button").click(function(){
// 		owl.trigger("owl.prev");
// 	});
// 	//Кнопка "Наверх"
// 	//Документация:
// 	//http://api.jquery.com/scrolltop/
// 	//http://api.jquery.com/animate/
// 	$("#top").click(function () {
// 		$("body, html").animate({
// 			scrollTop: 0
// 		}, 800);
// 		return false;
// 	});

// 	// mmenu крутой послойный слайдер http://mmenu.frebsite.nl/
//   $(function() {
//     $('#mmenu').mmenu({
//       setSelected: {
//             "hover": true
//          },
//       extensions	: [ 'effect-slide-menu', 'pageshadow' ],
//       navbar 		: {
//         title		: 'Меню'
//       },
//       navbars		: [
//         {
//           position	: 'top',
//           content		: [
//             'prev',
//             'title',
//             'close'
//           ]
//         }, {
//           position	: 'bottom',
//           content		: [
//             "<a class='fa fa-envelope' href='#/'></a>",
//             "<a class='fa fa-vk' href='#/'></a>",
//             "<a class='fa fa-youtube-square' href='#/'></a>",
//             "<a class='fa fa-facebook' href='#/'></a>",
//             "<a class='fa fa-twitter' href='#/'></a>"
//           ]
//         }
//       ]
//     });
//     /*var API = $("#mmenu").data("mmenu");
//     $('#menu-button').click(function(){
//         API.open();
//     });*/
//   });
// });