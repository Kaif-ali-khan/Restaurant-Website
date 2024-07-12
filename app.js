const text = document.querySelector(".text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 25}deg)">${char}</span>`
  )
  .join("");


  // testimonial slider

  // $(document).ready(function(){
  //   $('.slider-boxes').owlCarousel({
  //     loop:true,
  //     margin:10,
  //     nav:false,
  //     dots:true,
  //     responsive:{
  //         0:{
  //             items:1
  //         },
  //         600:{
  //             items:1
  //         },
  //         1000:{
  //             items:1
  //         }
  //     }
  // })  
  // });