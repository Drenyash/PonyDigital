import './index.html';
import './index.scss';
import './script.js'
import 'swiper/scss';

import Swiper, {Navigation, Pagination} from 'swiper';

const swiper = new Swiper(".swiper", {
	modules: [ Navigation, Pagination ],
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	mousewheel: true,
	keyboard: true,
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30
		},
		400: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		640: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		970: {
			slidesPerView: 4,
			spaceBetween: 30
		}
	}
});