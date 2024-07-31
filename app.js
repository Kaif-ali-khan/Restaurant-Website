const boxdetails = [
  {
    id: 1,
    img: "img/section2-boxes/dish-1 1.png",
    pricetag: "$12",
    foodname: "Lumpia with Suace",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Itaque, et.",
  },
  {
    id: 2,
    img: "img/section2-boxes/dish-3 1.png",
    pricetag: "$15",
    foodname: "Fish and Veggie",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Itaque, et.",
  },
  {
    id: 3,
    img: "img/section2-boxes/dish-4.png",
    pricetag: "$20",
    foodname: "Tofu Chili",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Itaque, et.",
  },
  {
    id: 4,
    img: "img/section2-boxes/dish-5.png",
    pricetag: "$50",
    foodname: "Egg and Cocumber",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Itaque, et.",
  },
];



function loadHTML(id, url) {
  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => console.error("Error loading HTML:", error));
}

function loadSections() {
  const mainContent = document.getElementById("main-content");
  if (!mainContent) {
    console.error("Main content container not found");
    return;
  }

  const sections = [
    "section1.html",
    "section2.html",
    "section3.html",
    "section4.html",
    "section5.html",
    "section6.html",
  ];

  const promisesArr = sections.map((section) => {
    return fetch(section)
      .then((response) => response.text())
      .then((data) => {
        const sectionElement = document.createElement("div");
        sectionElement.innerHTML = data;
        mainContent.appendChild(sectionElement);
      })
      .catch((error) => console.error("Error loading section:", error));
  });
  return Promise.all(promisesArr);
}

// Load HTML files into containers
Promise.all([
  loadHTML("header-container", "header.html"),
  loadHTML("main-container", "main.html"),
  loadHTML("footer-container", "footer.html"),
]).then(() => {
  // Load sections into the main content area after main.html has been loaded
  loadSections().then(() => {
    const text = document.querySelector(".text p");
    // console.log(text2);
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 25}deg)">${char}</span>`
      )
      .join("");

      const menuarr = boxdetails.map((data) => {
        return `<div class="box">
          <div class="box-top">
            <img src="${data.img}" alt="" />
            <div class="price-tag"><p>${data.pricetag}</p></div>
          </div>
          <div class="box-bottom">
            <h3>${data.foodname}</h3>
            <p>
              ${data.details}
            </p>
          </div>
        </div>`;
      });
      const targmenu = document.querySelector(".food-info-boxes");
      
      // console.log(targmenu);
      targmenu.innerHTML = menuarr.join("")
  });
  
});

// let menulist = document.getElementById("menuList")

//       menuList.style.maxHeight = "0%";

// function toggleMenu() {
//   let menuList = document.getElementById("menuList");
//   if (menuList.style.maxHeight == "0%") {
//     menuList.style.maxHeight = "100%";
//   } else {
//     menuList.style.maxHeight = "0%";
//   }
// }

// let menulist = document.getElementById("menuList");

// menuList.style.maxHeight = "0%";
// menuList.style.display = "none";

// function toggleMenu() {
//   if (menuList.style.maxHeight == "0%") {
//     console.log("hey", menuList.style);
//     menuList.style.maxHeight = "100%";
//     menuList.style.display = "block";
//   } else {
//     menuList.style.maxHeight = "0%";
//     console.log("not", menuList.style.maxHeight);
//     menuList.style.display = "none";
//   }
// }

// const arr = [
//   {
//     id: 1,
//     title: "Restaurant Dish 1",
//   },

//   {
//     id: 2,
//     title: "Restaurant dish 2",
//   },
// ];

// arr.map((data, index) => {
//   return (
//     <div key={index}>
//       <p>{data.title}</p>
//     </div>
//   );
// });

const card = document.querySelector(".box");




