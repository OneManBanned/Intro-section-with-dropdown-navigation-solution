const nav = document.querySelector('nav')
const navToggle = document.querySelectorAll('.menu-button')
const overlay = document.querySelector('.blend')
const dropdownMenu = document.querySelectorAll('.dropdown')

// NAV WINDOW RESIZE RESET

window.addEventListener('resize', () => {
    let query = window.matchMedia('(min-width: 376px)');
    if (query.matches) {
        nav.classList.add('nav-is-open')
        dropdownMenu.forEach(
            drop => {
                drop.classList.remove('active')
            })
    } else {
        nav.classList.remove('nav-is-open')
        dropdownMenu.forEach(
            drop => {
                drop.classList.remove('active')
            })
    }
});

// NAV OPEN/CLOSE

navToggle.forEach(
    button => {
        button.addEventListener('click', () => {
            nav.classList.toggle('nav-is-open')

        })
    });


// NAV BUTTONS

document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]')
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})





