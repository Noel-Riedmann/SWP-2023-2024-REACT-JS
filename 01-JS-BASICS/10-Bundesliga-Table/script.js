function getLastHtmlPart() {
  var parentPathname = window.parent
    ? window.parent.location.pathname
    : window.location.pathname;
  return parentPathname.split("/").pop();
}

function navigateTo(location) {
  var lastHtmlPart = getLastHtmlPart();

  if (location !== lastHtmlPart) {
    if (window.parent) {
      window.parent.location.href = location;
    } else {
      window.location.href = location;
    }
  }

  document.querySelectorAll(".menuButton").forEach((button) => {
    button.classList.remove("active");
  });

  document
    .getElementById(lastHtmlPart.replace(".html", "Button"))
    .classList.add("active");
}

window.onload = function () {
  navigateTo(getLastHtmlPart());
};

const loadRows = () => {
  fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023")
    .then((result) => result.json())
    .then((data) => {
      fillTable(data);
    })
    .catch((error) => {
      console.error("Error loading data:", error);
    });
};

const fillTable = (data) => {
  let html = "";

  data.forEach((element, index) => {
    html += `    
        <div class="tR">
        <div class="pos">${index + 1}</div>
        <div class="name"><div><img src="${
          element.teamIconUrl
        }" alt="logo" class="teamLogo"></div>&nbsp;&nbsp;
          ${element.teamName}</div>
        <div class="MP">${element.matches}</div>
        <div class="W">${element.won}</div>
        <div class="D">${element.draw}</div>
        <div class="L">${element.lost}</div>
        <div class="GF">${element.goals}</div>
        <div class="GA">${element.opponentGoals}</div>
        <div class="diff">${element.goals}:${element.opponentGoals}</div>
        <div class="PTS">${element.points}</div>
        </div>`;
  });
  document.getElementById("rows").innerHTML = html;
};

loadRows();

const loadGoalgetters = () => {
  fetch("https://api.openligadb.de/getgoalgetters/%C3%B6bl1/2023")
    .then((result) => result.json())
    .then((data) => {
      fillGoalgetters(data);
    })
    .catch((error) => {
      console.error("Error loading data:", error);
    });
};

const fillGoalgetters = (data) => {
  let html = "";

  data.forEach((element, index) => {
    html += `
    <div class="goalTR">
    <div class="playerPosition">${index + 1}</div>
    <div class="playerName">${element.goalGetterName}</div>
    <div class="playerGoals">${element.goalCount}</div></div>`;
  });
  document.getElementById("goalTR").innerHTML = html;
};

loadGoalgetters();
