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
      " alt=''>"+ 
      "<div id='name'>"+
      element.teamName +
      "</div>" +
      "<div id='points'>"+
      element.points +
      "</div>" +
      "</div>" 
  });
  document.getElementById("output").innerHTML = html;
  console.log(html + "help");
};

loadData();
