document.addEventListener('DOMContentLoaded', () => {
    let menu_header = document.querySelectorAll("#navbar-search ul li a");
    let menu_footer = document.querySelectorAll("#navbar-search-footer ul li a");
    let menu_category = document.querySelectorAll("#navbar-search-category div button");

    const cleanActiveMenuNav = () => {
        menu_header.forEach(item => item.classList.remove("active"));
        menu_footer.forEach(item => item.classList.remove("active-footer"));
    }

    const cleanActiveMenuCategories = () => {
        menu_category.forEach(item => item.classList.remove("active-category"));
    }

    const addActiveCategory = (clickedCategory, menu, nameClass = "active") => {
        cleanActiveMenuNav();

        if (nameClass === "active") {
            clickedCategory.target.classList.add("active-footer");
            let match = Array.from(menu).find(item => item.textContent === clickedCategory.target.textContent );
            if (match) match.classList.add(nameClass);
        } else {
            clickedCategory.target.classList.add("active");
            let match = Array.from(menu).find(item => item.textContent === clickedCategory.target.textContent );
            if (match) match.classList.add(nameClass);
        }
    }

    menu_header.forEach(item => item.addEventListener('click', ev => {
        ev.preventDefault();
        addActiveCategory(ev, menu_footer, 'active-footer');
    }));

    menu_footer.forEach(item => item.addEventListener('click', ev => {
        ev.preventDefault();
        addActiveCategory(ev, menu_header);
    }));

    menu_category.forEach(item => item.addEventListener('click', ev => {
        ev.preventDefault();
        cleanActiveMenuCategories();
        ev.target.classList.add("active-category");
    }));
});
