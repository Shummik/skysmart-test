window.onload = function () {
  let pizza = document.getElementById("action__pizza"),
    pizzaAlert = document.getElementById("action__done"),
    target = document.getElementById("action__target"),
    ellaImg = document.getElementById("signup__ella"),
    signupArrowDesk = document.getElementById('action__arrow-desktop'),
    signupArrowMobile = document.getElementById('ella__arrow-mobile'),
    btnTop = document.getElementById("button__to-top");

  function toTarget() {
    let precision = 50,
      distY = Math.abs(Math.abs(pizza.getBoundingClientRect().top) - Math.abs(target.getBoundingClientRect().top - 40)),
      distX = Math.abs(Math.abs(pizza.getBoundingClientRect().left) - Math.abs(target.getBoundingClientRect().left - 40));

    if ( distX <=  precision && distY <= precision ){
      pizzaAlert.classList.add('checked');
      pizza.classList.add('checked');
      setTimeout(function () {
        target.classList.add('checked');
      }, 500);
      signupArrowDesk.classList.add('checked');
      signupArrowMobile.classList.add('checked');
      ellaImg.scrollIntoView({block: "center"});
    };
  }

  function makeDraggable(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    elmnt.onmousedown = dragMouseDown;
    elmnt.ontouchstart = dragMouseDown;
    // elmnt.onpointerdown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();

      if (
        e.type == "touchstart" ||
        e.type == "touchmove" ||
        e.type == "touchend" ||
        e.type == "touchcancel"
      ) {
        let evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
        let touch = evt.touches[0] || evt.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
      } else if (
        e.type == "mousedown" ||
        e.type == "mouseup" ||
        e.type == "mousemove" ||
        e.type == "mouseover" ||
        e.type == "mouseout" ||
        e.type == "mouseenter" ||
        e.type == "mouseleave"
      ) {
        x = e.clientX;
        y = e.clientY;
      }

      pos3 = x;
      pos4 = y;
      document.onmouseup = closeDragElement;
      document.ontouchend = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
      document.ontouchmove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();

      if (
        e.type == "touchstart" ||
        e.type == "touchmove" ||
        e.type == "touchend" ||
        e.type == "touchcancel"
      ) {
        let evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
        let touch = evt.touches[0] || evt.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
      } else if (
        e.type == "mousedown" ||
        e.type == "mouseup" ||
        e.type == "mousemove" ||
        e.type == "mouseover" ||
        e.type == "mouseout" ||
        e.type == "mouseenter" ||
        e.type == "mouseleave"
      ) {
        x = e.clientX;
        y = e.clientY;
      }

      // calculate the new cursor position:
      pos1 = pos3 - x;
      pos2 = pos4 - y;
      pos3 = x;
      pos4 = y;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.ontouchcancel = null; //added touch event
      document.ontouchend = null; //added touch event
      document.onmousemove = null;
      document.ontouchmove = null; //added touch event

      toTarget();
    }
  }

  makeDraggable(pizza);

  btnTop.onclick = function () {
    window.scrollTo({
      top: 0,
    });
  };
};

const signupArrowDesk = new Vivus(
  'action__arrow-desktop',
  {
    type: 'delayed',
    duration: 50
  }
);
const signupArrowMobile = new Vivus(
  'ella__arrow-mobile',
  {
    type: 'delayed',
    duration: 50
  }
);