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
  loadSections().then(()=>{
    const text = document.querySelector(".text p");
    // console.log(text2);
    text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 25}deg)">${char}</span>`
  )
  .join("");
  });
  
});

console.log("hello");
