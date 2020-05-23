$(document).ready(function(){
    //Отслеживваем нажатия на кнопку(Гамбургер) для выплывающего меню
    $('body').on('click', '.header__btn-nav', function(event){
        event.preventDefault();
        // добавляем / удаляем класс onoff
        $('.header__navigation').toggleClass('onoff')
    });

    //Отслеживаем все нажатия на кнопки для вызова popap
    $('body').on('click','.btn-order-call-tab, #info-btn, #services-btn, .portfolio__btn-order-project, .footer__btn-feelback', function(){
        //Показывем popap
        $('#popap').css('display','block');
        // Убираем скролл 
        $('body').css('overflow','hidden');
    });

    //Отслеживаем нажатия кнопки popap закрытьpap
    $('body').on('click','.close', function(){
        // скрываем popap
        $('#popap').css('display','none');
        // возвращем скрол в прежнее состояние 
        $('body').css('overflow','auto');
    });
    
    // Валидация формы телефона 
    $("#tel").mask("+7 (999) 999-99-99");

    // Отправка формы без перезагрузки страницы(AJAX)
    $("form").submit(function(){
        let $form = $(this) // Определяем переменную для удобства 
				let name = $('input[name]').val() // Имя пользавателя  

        $.post(
            $form.attr("action"), // ссылка куда отправляем данные
            $form.serialize()     // данные формы
				);
				
				// Добавляем уведомления об успешной отправке формы
				$form.append("<div class='popap__text'>" + name  + ", данные отправлены, мы скоро свяжемся с Вами</div>");
				
				// Функция для удаления уведомления об успешной отправке формы 
				function popapTextClose () {
					$('.popap__text').hide();
				} 

				// Автомотическое закрытие уведомления об успешной отправке формы
				setTimeout(popapTextClose, 5000)

        // отключаем действие по умолчанию
        return false
    });

});

// Настраиваем слайдер SWIBER

const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 20,
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        1024: {
            slidesPerView: 2,
 
        },
        1400: {
            slidesPerView: 3,
        }
    }
});


