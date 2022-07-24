document.addEventListener( 'DOMContentLoaded', function () {
	var secondarySlider = new Splide( '#perviy-slider', {
		fixedWidth  : 100,
		height      : 450,
		gap         : 10,
		cover       : false,
		isNavigation: true,
        autoplay: true,
        interval: 3000,
        arrows:false,
		focus       : 'center',
        direction:      'ttb',
        heightRatio: 0.6,
        perPage    : 4,
		breakpoints : {
			'968': {
				fixedWidth: 85,
				height    : 450,
			},
			'850': {
				fixedWidth: 85,
				height    : 400,
			},
			'768': {
				fixedWidth: 78,
				height    : 340,
			},
			'600': {
				fixedWidth: 85,
				height    : 400,
			},
			'480': {
				fixedWidth: 85,
				height    : 400,
			}
		},
	} ).mount();
	
	var primarySlider = new Splide( '#vtoroy-slider', {
		type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
        autoplay: true,
        interval: 3000,
		arrows     : false,
		cover      : true,
        height: 500,
        fixedWidth: 410,
		breakpoints : {
			'1040': {
				fixedWidth: 340,
				height    : 450,
			},
			'968': {
				fixedWidth: 340,
				height    : 450,
			},
			'850': {
				fixedWidth: 300,
				height    : 400,
			},
			'768': {
				fixedWidth: 300,
				height    : 350,
			},
			'600': {
				fixedWidth: 340,
				height    : 400,
			},
			'480': {
				fixedWidth: 300,
				height    : 350,
			}
		},
	} ); // do not call mount() here.
	
	primarySlider.sync( secondarySlider ).mount();
} );



function categoryBtnTop() {
    document.querySelector('.category__top').classList.toggle('active')
    document.querySelector('.category__box--top').classList.toggle('active')
	
}

function categoryBtnBottom() {
    document.querySelector('.category__bottom').classList.toggle('active')
    document.querySelector('.category__box--bottom').classList.toggle('active')
}

function categoryBtnJacket() {
    document.querySelector('.category__jacket').classList.toggle('active')
    document.querySelector('.category__box--jacket').classList.toggle('active')
}

function sizeBtn() {
    // document.querySelector('.size__item').classList.remove("active")
    document.querySelector('.size__item').classList.toggle('active')
}

function productSizeBtn() {
    document.querySelector('.product__table--size').classList.toggle('active')
}

function succsessOrder() {
    document.querySelector(' .order__success--modal').classList.toggle('active')
}