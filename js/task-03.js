const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];

const gallery = document.querySelector(".gallery");
gallery.style.display = "flex";
gallery.style.flexDirection = "column";
gallery.style.listStyleType = "disclosure-closed";
gallery.style.gap = "10px";
const newLi = images
    .map((item) => {
        const createLi = `<li><img src="${item.url}" alt="${item.alt}" style="display: block; width: 150px;"></li>`;
        return createLi;
    })
    .join("");
gallery.insertAdjacentHTML("afterbegin", newLi);
