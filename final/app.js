const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 14.99,
    img: "./images/item-1.jpg",
    desc: `Have the best breakast you can ever imagine of`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 12.99,
    img: "./images/item-2.jpg",
    desc: `A good food for a sunny day`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 5.99,
    img: "./images/item-3.jpg",
    desc: `Shake it up!`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 10.99,
    img: "./images/item-4.jpg",
    desc: `Good Morning, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 20.99,
    img: "./images/item-5.jpeg",
    desc: `Enjoy your day`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 8.99,
    img: "./images/item-6.jpg",
    desc: `lorem ipsum`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 9.99,
    img: "./images/item-7.jpg",
    desc: `A good meal to start the day`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 10.99,
    img: "./images/item-8.jpg",
    desc: `Regain your energy `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 15.99,
    img: "./images/item-9.jpg",
    desc: `The best thing to happen to your lips`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 12.99,
    img: "./images/item-10.jpeg",
    desc: `Last meal`,
  },
];


// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) { //menu replaces menuitems
  let displayMenu = menuItems.map(function (item) { //item is an iterator
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join(""); //this wraps everything in a double-quotatoin mark 
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) { //values here is ['all']
      if (!values.includes(item.category)) {
        values.push(item.category); //return the array or category if it is not the same as the one being iterated
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dautaset.id; //asssigning the data-id to variable
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
