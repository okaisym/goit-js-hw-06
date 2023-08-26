const categoriesListEl = document.querySelector("#categories");
console.log('Number of categories:', categoriesListEl.children.length);

const categoryItems = document.querySelectorAll(".item");

categoryItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryEl = item.querySelectorAll('ul li').length;

    console.log('Category: ', categoryName);
    console.log('Elements: ', categoryEl);
});

