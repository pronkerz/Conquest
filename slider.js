new Swiper('.banner-slider', {
	navigation: {
		nextEl: '.custom-button-next button',
		prevEl: '.custom-button-prev button',
	 },
	 pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	 },
});


document.querySelectorAll('.swiper-pagination').forEach(function(element) {
	element.innerHTML = `0<span class="swiper-pagination-current">1</span>`;
});