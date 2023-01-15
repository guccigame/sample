window.addEventListener("load", function (e) {
  var first_btn = document.querySelector(".btn1"); // Вызываем через дом то что нужно
  var first_span = document.querySelector(".item-1 span");
  var fisrt_stop = document.querySelector(".stop1");
  var first_value = +first_span.innerHTML; //  1000 
  var first_reset = document.querySelector(".reset1"); 
  var first_start = first_value; // 1000 

  var second_btn = document.querySelector(".btn2"); 
  var second_span = document.querySelector(".item-2 span"); 
  var second_stop = document.querySelector(".stop2"); 
  var second_value = +second_span.innerHTML; //  1000 
  var second_reset = document.querySelector(".reset2"); 
  var second_start = second_value; // 1000 

  // first_btn.addEventListener("click", function (e) {
  //   this.disabled = true;
  //   fisrt_stop.disabled = false;

  //   var interval = setInterval(function () {
  //     first_value--;
  //     if (first_value === 0) {
  //       clearInterval(interval);
  //       first_value = 0;
  //     }
  //     first_span.innerHTML = first_value;
  //   }, 5);

  //   fisrt_stop.addEventListener("click", function (e) {
  //     clearInterval(interval);
  //     this.disabled = true;
  //     first_btn.disabled = false;
  //   });

  //   first_reset.addEventListener("click", function (e) {
  //     first_value = first_start;
  //     first_span.innerHTML = first_value;
  //   });
  // });

  // second_btn.addEventListener("click", function (e) {
  //   this.disabled = true;
  //   second_stop.disabled = false;

  //   var interval = setInterval(function () {
  //     second_value--;
  //     if (second_value === 0) {
  //       clearInterval(interval);
  //       second_value = 0;
  //     }
  //     second_span.innerHTML = second_value;
  //   }, 5);

  //   second_stop.addEventListener("click", function (e) {
  //     clearInterval(interval);
  //     this.disabled = true;
  //     second_btn.disabled = false;
  //   });

  //   second_reset.addEventListener("click", function (e) {
  //     second_value = second_start;
  //     second_span.innerHTML = second_value;
  //   });
  // });

  function Timer(btn, value, span, stop, reset, start) { // Cоздаем глобальную функцию (Купол*)
    this.btn = btn;
    this.value = value;
    this.span = span;
    this.stop = stop
    this.reset = reset
    this.start = start
    var comp = this; // Маскирем This 
    this.btn.addEventListener("click", function (e) { // Задаем действие для кнопки запуска
      comp.stop.disabled = false // Кнопка стоп включен
      comp.btn.disabled = true //  Кнопка запуска отключен 
      comp.interval = setInterval(function () { // Создаем таймер (Время будет все время уменьшаться)
        comp.value--; // Уменьшаеться на -1
        if (comp.value === 0) { // Если значение таймера будет равен 0, то таймер остановиться 
          clearInterval(comp.interval); // Таймер остановиться
          comp.value = 0; // Значение будет равен 0 
          comp.stop.disabled = true // Кнопка стоп отключен
        }
        comp.span.innerHTML = comp.value; // Значения после уменьшения
      }, 1000);
      comp.stop.addEventListener('click', function (e) { // Задаем действие для кнопки стопа
        clearInterval(comp.interval)
        comp.btn.disabled = false // Кнопка запуска включен
        comp.stop.disabled = true // кнопка стопа отключен
      })
      comp.reset.addEventListener('click', function (e) { //Задаем действие для кнопки рестарта
        comp.value = comp.start // Если кликнуть по кнопке рестарта то значение таймера будет изночальным
        comp.span.innerHTML = comp.value // Изночальное значение отображается на экране
        comp.btn.disabled = false // Кнопка запуска отключен
        comp.stop.disabled = false // Кнопка стопа включен
        if(comp.stop.disabled === false){ // Если кнопка стопа будет включен то
          comp.span.innerHTML = comp.value //
          clearInterval(comp.interval); 
        }
      })
    });
  }
  var first_timer = new Timer(first_btn, first_value, first_span, fisrt_stop, first_reset, first_start); //  object {btn: btn1} || Из него всегда будет выводиться объект! ||
  var second_timer = new Timer(second_btn, second_value, second_span, second_stop, second_reset, second_start); // object {btn: btn2} || Из него всегда будет выводиться объект! ||
});