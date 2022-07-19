const listCategories = document.querySelectorAll("#categories .item");
console.log("Number of categories: " + listCategories.length);
listCategories.forEach(function (item) {
    console.log("");
    console.log(`Category: ${item.children[0].innerHTML}`);
    console.log(`Elements: ${item.children[1].childElementCount}`);
});
