let userSe = document.querySelectorAll(".pics");
let cpuSe = document.querySelectorAll(".cpuimg");
let key = true;
// changes on clicking of user
for (let i = 0; i < userSe.length; i++) {
  userSe[i].addEventListener("click", () => {
    if (key) {
      hide(i);
      let random = Math.floor(Math.random() * 3);
      cpuSe[random].classList.remove("hidden");
      logic(i, random);
      key = false;
    }
  });
}
//use of display none as a function
function hide(i) {
  for (let j = 0; j < userSe.length; j++) {
    if (j != i) {
      userSe[j].classList.add("hidden");
    }
  }
}

//logic of the game
function logic(user, cpu) {
  let userpo = document.querySelector("#user-point");
  let cpupo = document.querySelector("#cpu-points");
  if (user != cpu) {
    if (user == 0) {
      if (cpu == 1) {
        cpupo.textContent = Number(cpupo.textContent) + 1;
      } else {
        userpo.textContent = Number(userpo.textContent) + 1;
      }
    }
    if (user == 1) {
      if (cpu == 0) {
        userpo.textContent = Number(userpo.textContent) + 1;
      } else {
        cpupo.textContent = Number(cpupo.textContent) + 1;
      }
    }
    if (user == 2) {
      if (cpu == 0) {
        cpupo.textContent = Number(cpupo.textContent) + 1;
      } else {
        userpo.textContent = Number(userpo.textContent) + 1;
      }
    }
  }
}
// ref button
function ref() {
  for (let i = 0; i < userSe.length; i++) {
    userSe[i].classList.remove("hidden");
  }
  for (let a = 0; a < cpuSe.length; a++) {
    cpuSe[a].classList.add("hidden");
    key = true;
  }
}

//excute refresh function on button click and R on keyboard
document.querySelector("#refbut").addEventListener("click", ref);

document.addEventListener("keydown", (f) => {
  if (f.key == "r") {
    ref();
  }
});
