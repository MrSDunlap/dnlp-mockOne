let professions = [
  "Front-end Developer",
  "Web Designer",
  "Creative Strategist",
];

let count = 0;

function cycleArray() {
  let profession = professions[count];
  let newItem = document.querySelector(".professions");

  newItem.innerHTML = profession;

  count++;

  if (count === professions.length) {
    count = 0;
  }
}

export default cycleArray;
