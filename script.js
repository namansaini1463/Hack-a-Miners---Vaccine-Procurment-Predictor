// Javascript program for implementation
// of Lagrange's Interpolation

// To represent a data point
// corresponding to x and y = f(x)
class Data {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// function to interpolate the given
// data points using Lagrange's formula
// xi corresponds to the new data point
// whose value is to be obtained n
// represents the number of known data points
function interpolate(f, xi, n) {
  let result = 0; // Initialize result

  for (let i = 0; i < n; i++) {
    // Compute individual terms of above formula
    let term = f[i].y;
    for (let j = 0; j < n; j++) {
      if (j != i) term = (term * (xi - f[j].x)) / (f[i].x - f[j].x);
    }

    // Add current term to result
    result += term;
  }

  return result;
}

// Driver code
// creating an array of 4 known data points
let f = [new Data(0, 2), new Data(1, 3), new Data(2, 12), new Data(5, 147)];

// Using the interpolate function to obtain
// a data point corresponding to x=3
document.write("Value of f(3) is : " + interpolate(f, 3, 4));

const arrow = document.getElementsByClassName("arrow-ini");
const open = document.getElementsByClassName("open");
const options = document.getElementsByClassName("options");

let a, b, c;

function display_options(n) {
  let arrow = document.getElementsByClassName("arrow")[n];
  let options = document.getElementsByClassName("options")[n];

  if (!options.classList.contains("active")) {
    options.classList.add("active");
    options.style.height = "auto";
    let height = options.clientHeight + "px";
    options.style.height = "0px";
    setTimeout(function () {
      options.style.height = height;
      if (height.slice(0, -2) >= 10) {
        options.classList.add("sub_drop");
      }
    }, 0);
  } else {
    options.style.height = "0px";
    options.addEventListener(
      "transitionend",
      function () {
        options.classList.remove("active");
      },
      {
        once: true,
      }
    );
  }

  if (arrow.classList.contains("reverse")) {
    arrow.classList.add("forward");
    arrow.classList.remove("arrow-ini");
    arrow.classList.add("arrow-fin");
    arrow.classList.remove("reverse");
  } else {
    arrow.classList.add("reverse");
    arrow.classList.remove("arrow-fin");
    arrow.classList.add("arrow-ini");
    arrow.classList.remove("forward");
  }
}

arrow[0].addEventListener("click", display_options.bind(this, 0));
open[0].addEventListener("click", display_options.bind(this, 0));
arrow[1].addEventListener("click", display_options.bind(this, 1));
open[1].addEventListener("click", display_options.bind(this, 1));
arrow[2].addEventListener("click", display_options.bind(this, 2));
open[2].addEventListener("click", display_options.bind(this, 2));

window.onclick = function (event) {
  for (let i = 0; i < 3; i++) {
    let arrow = document.getElementsByClassName("arrow")[i];
    let options = document.getElementsByClassName("options")[i];

    if (
      !(
        event.target.matches(".open") ||
        event.target.matches(".arrow-ini") ||
        event.target.matches(".arrow-fin")
      )
    ) {
      arrow.classList.add("forward");
      arrow.classList.remove("arrow-ini");
      arrow.classList.add("arrow-fin");
      arrow.classList.remove("reverse");

      options.style.height = "0px";
      options.addEventListener(
        "transitionend",
        function () {
          options.classList.remove("active");
        },
        {
          once: true,
        }
      );
    }
  }
};

function selected(value, n) {
  open[n].textContent = value;
  if (n == 0) {
    a = value;
  } else if (n == 1) {
    b = value;
  } else if (n == 2) {
    c = value;
  }
  display_options(n);
}

function submit() {
  console.log(a);
  console.log(b);
  console.log(c);
}
