const burgerBtn = document.querySelector('.burger-btn')
const navItems = document.querySelectorAll('.nav__item')
const nav = document.querySelector('.nav')
const navActive = document.querySelectorAll('.nav-active')
const textChange = document.querySelector('.extra-text')
let scrollHeight = window.scrollY

const showMenu = () => {
	nav.classList.toggle('nav-active')
	navItemsAnimation()

	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav-active')
		})
	})
}

const textLoad = () => {
	setTimeout(() => {
		textChange.textContent = 'create'
	}, 0)
	setTimeout(() => {
		textChange.textContent = 'design'
	}, 4000)
	setTimeout(() => {
		textChange.textContent = 'prepare'
	}, 8000)
	setTimeout(() => {
		textChange.textContent = 'write'
	}, 12000)
}

const navItemsAnimation = () => {
	let delayTime = 0

	navItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

textLoad()
setInterval(textLoad, 16000)

addEventListener('scroll', () => {
	if (window.innerWidth > 1200 && window.scrollY >= 0) {
		nav.style.height = '100vh'
	} else if (window.scrollY > 0) {
		nav.style.height = '100vh'
	} else {
		nav.style.height = '70vh'
	}
})




burgerBtn.addEventListener('click', showMenu)
