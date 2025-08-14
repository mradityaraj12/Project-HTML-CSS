const menuItems = document.querySelectorAll('.sidebar ul li');
const sections = document.querySelectorAll('.section');

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        document.querySelector('.sidebar ul li.active').classList.remove('active');
        item.classList.add('active');

        document.querySelector('.section.active').classList.remove('active');
        sections[index].classList.add('active');
    });
});
