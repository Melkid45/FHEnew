function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}

$('.burger').on('click', function(e){
    if ($('header').hasClass('active')){
        $('header').removeClass('active')
        $('body').removeClass('hidden')
        $(this).removeClass('active')
    }else{
        $('header').addClass('active')
        $('body').addClass('hidden')
        $(this).addClass('active')
    }
})

$(window).on('click', function(e){
    if (($('#nav').is(e.target) && $('#nav').has(e.target).length=== 0) || ($('.link__box').is(e.target) && $('.link__box').has(e.target).length=== 0)){
        $('.link__box').addClass('active')
    }else{
        $('.link__box').removeClass('active')
    }
})
SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 800,
    // Размер шага в пикселях 
    stepSize         : 45,

    // Дополнительные настройки:
    
    // Ускорение 
    accelerationDelta : 30,  
    // Максимальное ускорение
    accelerationMax   : 1,   

    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 100,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Поддержка тачпада
    touchpadSupport   : true,
})



var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			.to(".anim", 1, {top: "-100%",ease: "power1.inOut"})  // in from left

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: ".main",
				triggerHook: "onLeave",
				duration: "100%"
			})
			.setTween(wipeAnimation)
			.addTo(controller);