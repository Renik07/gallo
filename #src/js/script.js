const swiper = new Swiper('.slider', {
	pagination: {
    el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
  },
	autoplay: {
		delay: 4000,
	},
	autoheight: true,
	loop: true,

	preloadImages: true,
	lazy: true,
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
});

const micro = new Swiper('.micro', {
	effect: 'fade',
	fadeEffect: {
    crossFade: true
  },
	thumbs: {
		swiper: {
			el: '.micro-mini',
			slidesPerView: 14,
		}
	}
});
const strada2 = new Swiper('.strada-2', {
	effect: 'fade',
	fadeEffect: {
    crossFade: true
  },
	thumbs: {
		swiper: {
			el: '.strada-2-mini',
			slidesPerView: 14,
		}
	}
});
const subwoofers = new Swiper('.subwoofers', {
	effect: 'fade',
	fadeEffect: {
    crossFade: true
  },
	thumbs: {
		swiper: {
			el: '.subwoofers-mini',
			slidesPerView: 14,
		}
	}
});
const droplet = new Swiper('.droplet', {
	effect: 'fade',
	fadeEffect: {
    crossFade: true
  },
	thumbs: {
		swiper: {
			el: '.droplet-mini',
			slidesPerView: 14,
		}
	}
});

function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});


	const productsLink = document.querySelectorAll('.products__link'),
				productImage = document.querySelector('.products__image img'),
				goodsSlider = document.querySelectorAll('.goods-slider'),
				goods = document.querySelectorAll('.goods');

	productsLink.forEach(item => {
		item.addEventListener('mouseover', () => {
			if (item.classList.contains('active')) {
				item.classList.toggle('active');
			}
			const value = item.getAttribute('data-src');
			productImage.setAttribute('src', value);
		})
	});

	function showProduct(id) {
		for (let i = 0; i < goodsSlider.length; i++) {
			if (goodsSlider[i].id == id) {
				goodsSlider[i].style.position = (goodsSlider[i].style.position == 'absolute') ? 'inherit' : 'absolute';
			} else {
				goodsSlider[i].style.position = 'absolute';
			}
		}
	}