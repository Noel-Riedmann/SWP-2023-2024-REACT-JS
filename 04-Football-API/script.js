const loadData = () => {
  fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023").then(
    (result) => {
      result.json().then((data) => {
        fillTable(data);
      });
    }
  );
};

const fillTable = (data) => {
  let html = "";

  data.forEach((element) => {
    html +=
      "<div id='teamRow'>" +
      "<img id='img' src=" +
      element.teamIconUrl +
      " alt=''>" +
      "<div id='name'>" +
      element.teamName +
      "</div>" +
      "<div id='points'>" +
      element.points +
      "</div>" +
      "</div>";
  });
  document.getElementById("output").innerHTML = html;
};

const loadDataRecent = () => {
  fetch("https://api.openligadb.de/getmatchdata/5844/5841").then((result) => {
    result.json().then((data) => {
      fillTableRecent(data);
    });
  });
};

const fillTableRecent = (data) => {
  let html = "";
  data.forEach((element) => {
    html += "<div id='recentMatch'>" +
      "<div id='team1'>" +
      "<img id='img1' src=" + element.team1.teamIconUrl + " alt=''>" +
      "<div id='team1Name'>" + element.team1.teamName + "</div>" +
      "</div>" +
      "<div id='team2'>" +
      "<img id='img1' src=" + element.team2.teamIconUrl + " alt=''>" +
      "<div id='team2Name'>" + element.team2.teamName + "</div>" +
      "</div>" +
      "<div id='result'>" + "Result: " +
      (element.matchResults.length > 0
        ? element.matchResults[1].pointsTeam1 + " - " + element.matchResults[1].pointsTeam2
        : "Game not finished") +
      "</div>" +
      "</div>";
  });
  
  // Now you can use the 'html' variable as needed, for example, appending it to a container element.
  

  document.getElementById("recent").innerHTML = html;
};

loadData();
loadDataRecent();
