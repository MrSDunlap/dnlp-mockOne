let professions = [
  "Front-end Developer",
  "Web Designer",
  "Creative Strategist",
];

let count = 0;

// selecting the container to append to ========
let container = document.querySelector(".professions");

function cycleArray() {
  let profession = professions[count];
  let newItem = document.createElement("li");
  container.append(newItem);

  newItem.innerHTML = profession;

  count++;

  if (count === professions.length) {
    count = 0;
  }
}

export default cycleArray;
