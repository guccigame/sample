window.addEventListener("load", function (e) {
  var first_next = document.querySelector(".gallery-1 .next"); 
  var first_prev = document.querySelector(".gallery-1 .prev"); 
  var first_imgs = document.querySelectorAll(".gallery-1 .photo img"); 
  var s = 0;

  var second_next = document.querySelector(".gallery-2 .next"); 
  var second_prev = document.querySelector(".gallery-2 .prev"); 
  var second_imgs = document.querySelectorAll(".gallery-2 .photo img"); 

  var last_next = document.querySelector(".gallery-3 .next"); 
  var last_prev = document.querySelector(".gallery-3 .prev"); 
  var last_imgs = document.querySelectorAll(".gallery-3 .photo img"); 

  // first_next.addEventListener("click", function (e) {
  //   first_imgs[i].classList.remove("active");
  //   i++
  //   if(i > first_imgs.length - 1){
  //       i = 0
  //   }
  //   first_imgs[i].classList.add('active')
  // });

  // second_next.addEventListener("click", function (e) {
  //   second_imgs[j].classList.remove("active");
  //   j++
  //   if(j > second_imgs.length - 1){
  //       j = 0
  //   }
  //   second_imgs[j].classList.add('active')
  // });

  function Slider(next, prev, imgs, i){
    this.next = next
    this.prev = prev
    this.imgs = imgs
    this.i = i
    var comp = this
    this.next.addEventListener('click', function(e){
      comp.imgs[comp.i].classList.remove("active");
        comp.i++
        if(comp.i > comp.imgs.length - 1){
            comp.i = 0
        }
        comp.imgs[comp.i].classList.add('active')
    })
    this.prev.addEventListener('click', function(e){
      comp.imgs[comp.i].classList.remove("active");
      comp.i--
        if(comp.i < 0){
          comp.i = comp.imgs.length - 1
        }
        comp.imgs[comp.i].classList.add('active')
    })
  }
  var first_slider = new Slider(first_next, first_prev, first_imgs, s)
  var second_slider = new Slider(second_next, second_prev, second_imgs, s)
  var last_slider = new Slider(last_next, last_prev, last_imgs, s)
});
