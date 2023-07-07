
const elements = document.querySelector("#traffic-light");

const red = document.querySelector(".red")
const yellow = document.querySelector(".yellow")
const green = document.querySelector(".green")

function start() {
  yellow.classList.remove("yellow");
  green.classList.remove("green");
  red.classList.add("red");

  setTimeout(() => {
    yellow.classList.add("yellow");

    setTimeout(() => {
      red.classList.remove("red");
      yellow.classList.remove("yellow");
      green.classList.add("green");

      setTimeout(() => {
        green.classList.remove("green");

        setTimeout(() => {
          green.classList.add("green");

          setTimeout(() => {
            green.classList.remove("green");

            setTimeout(() => {
              green.classList.add("green");

              setTimeout(() => {
                green.classList.remove("green");
                yellow.classList.add("yellow");
              }, 1000);
            }, 500);
          }, 500);
        }, 500);
      }, 5000);
    }, 1000);
  }, 4000);
}

start();
setInterval(start, 13500);




