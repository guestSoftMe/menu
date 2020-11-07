let menu = document.querySelector('.btn')
menu.addEventListener('click', function () {
	document.querySelector('.menu').classList.toggle('active')
	document.querySelector('.block').classList.toggle('active')
})