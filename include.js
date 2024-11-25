async function getText(xtitle) {
  let myObject = await fetch("books.json");
  let myText = await myObject.text();

  var obj = JSON.parse(myText);
  const decodedURL = decodeURI(xtitle);

  for (var i=0 ; i < obj.books.length ; i++)
  {
      if (obj.books[i].title===decodedURL) { break; }
  }
  document.getElementById("booktitle").innerHTML = obj.books[i].title;
  document.getElementById("cover240").src = "covers/" + obj.books[i].cover240;
}

function getTitle(){
  var matches = /title=([^&#=]*)/.exec(window.location.search);
  var param1 = matches[1]
  return param1;
}