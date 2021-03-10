$(document).ready(function(){

	$("input[type='phone']").mask("+7 (999) 999-99-99");
	$('#request-a-call-form').validationEngine({scroll: false});

	$('#request-a-call-form').submit(function(e){
		e.preventDefault();
		if($(this).find('input').val() !== ''){
			var data = $(this).serialize();
			console.log(data);
			$.ajax({
				url: 'index.html',
				type: 'POST',
				data: data,
				success: function(resp){

				},
				error: function(){
					alert('Ошибка!');
				}
			});
		}
		// $('.modal input').val('');
		// $('.modal').modal('hide');
		// $('#request-success').modal('show');
	});

	// карусель
		$('.owl-carousel').owlCarousel({
			items: 1,
			loop: true,
			mouseDrag: true,
			autoplayHoverPause: true,
			autoplayTimeout: 5000,
			smartSpeed: 1500,
			responsive: {
				0: {
					autoplay: false
				},
				576: {
					autoplay: true
				}
			}
		});
		$('.owl-dots').addClass('container-xl');
	// карусель END
	

	// переключение табов с помощью стрелок
		$('.nav-right').click(function(e){
			e.preventDefault();
			var tab = $(this).parent().find('.nav.nav-tabs');
			var num = tab.find('.nav-link').length - 1;
			var cur = tab.find('.nav-link.active');
			var index = cur.index();

			if (index == num){
				var next = tab.find('.nav-link').eq(0);
			}
			else {
				var next = cur.next('.nav-link')
			}
			next.tab('show');
		});
		$('.nav-left').click(function(e){
			e.preventDefault();
			var tab = $(this).parent().find('.nav.nav-tabs');
			var num = tab.find('nav-link').length - 1;
			var cur = tab.find('.nav-link.active');
			var index = cur.index();

			if (index == 0){
				var prev = tab.find('.nav-link').eq(num);
			}
			else {
				var prev = cur.prev('.nav-link');
			}

			prev.tab('show');
		});
	// переключение табов с помощью стрелок - END	

	// строка поиска
		$('.search').on('click', function(){
			if (window.matchMedia('(min-width: 720px)').matches){
				$(this).parent().find('.search-form-container').toggleClass('d-none');
			} else {
				$('.main-content').toggleClass('menu-opened');
				$('.burger').toggleClass('d-none');
				$('body').toggleClass('overflow-y-hidden');
			}
		});

		$(document).mouseup(function(e){
			var mainContent = $('.main-content');
			var asideMenu = $('.aside-menu');
			var search = $('.search-form-container');
			if( !search.is(e.target) && search.has(e.target).length === 0){
				search.addClass('d-none');
			}
		});
	// строка поиска END
	
	// бургер-меню
		$('.burger').on('click', function(){
			$('.main-content').toggleClass('menu-opened');
			$('.burger').toggleClass('d-none');
			$('body').toggleClass('overflow-y-hidden');
		});
	// бургер-меню END
	// закрыть мобильное меню при вызове модального окна 
		$('[data-toggle="modal"]').on('click', function(){
			var mainContent =  $('.main-content');
			var body = $('body');
			if( mainContent.hasClass('menu-opened') && body.hasClass('overflow-y-hidden')){
				mainContent.removeClass('menu-opened');
				body.removeClass('overflow-y-hidden');
				$('.burger').toggleClass('d-none');
			}
		});
	// закрыть мобильное меню при вызове модального окна END
});


