let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

const list = document.querySelectorAll('[name="nav-a"]')

function activeLink(){
	list.forEach((item) =>
	item.classList.remove('active'))
	this.classList.add('active')
}

list.forEach((item) =>
item.addEventListener('click', activeLink))

function toggleMode(){
  const html = document.documentElement

  html.classList.toggle('light')
  localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark')
}

// Restaurar preferência do tema ao carregar
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light')
  }
})

// Navegação ativa no scroll
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('[name="nav-a"]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 150
    const sectionId = section.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
    }
  })
}

window.addEventListener('scroll', scrollActive)

