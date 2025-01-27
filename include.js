async function getText(xId) {
  let myObject = await fetch("books.json");
  let myText = await myObject.text();

  var obj = JSON.parse(myText);
  const decodedURL = decodeURI(xId);
  var keywordtext ="";
  var i;
  var k;

  for (var i = 0; i < obj.books.length; i++) {
    if (obj.books[i].id == decodedURL) { 
      var k = 0;
      while (k < (obj.books[i].keyword.length - 1)) {
        {
          keywordtext += "<a href='list.html?keyword=" + obj.books[i].keyword[k] + "'>" + obj.books[i].keyword[k] + "</a>, ";
          k++;
        }
      }
      keywordtext += "<a href='list.html?keyword=" + obj.books[i].keyword[k] + "'>" + obj.books[i].keyword[k] + "</a>";
    break; 
    }
  }
  document.querySelector('meta[name~="title"][content]').content = obj.books[i].title;
  document.querySelector('meta[property~="og:title"][content]').content = obj.books[i].title;
  document.querySelector('meta[property~="og:description"][content]').content = obj.books[i].tagline;
  document.querySelector('meta[property~="og:image"][content]').content = "https://www.elladrake.com/covers/" + obj.books[i].cover240;
  document.getElementById("cover240").src = "https://www.elladrake.com/covers/" + obj.books[i].cover240;
  document.getElementById("booktitle").innerHTML = obj.books[i].title;
  document.getElementById("heatlevel").innerHTML = obj.books[i].heatlevel;
  document.getElementById("length").innerHTML = obj.books[i].length;
  document.getElementById("series").innerHTML = "<a href='series.html#" + obj.books[i].series.replace(/\s/g, "") + "'>" + obj.books[i].series + "</a>";
  document.getElementById("genre").innerHTML = obj.books[i].genre;
 
  document.getElementById("keyword").innerHTML = keywordtext;
  document.getElementById("pub").innerHTML = "pub: " + obj.books[i].pub;
  document.getElementById("date").innerHTML = obj.books[i].date;
  document.getElementById("tagline").innerHTML = obj.books[i].tagline;
  document.getElementById("Amz").href = "http://www.amazon.com/dp/" + obj.books[i].Amz;
  document.getElementById("Nook").href = "http://www.barnesandnoble.com/s/" + obj.books[i].Nook;
  document.getElementById("Kobo").href = "https://store.kobobooks.com/en-us/ebook/" + obj.books[i].Kobo;
  document.getElementById("iTune").href = "https://itunes.apple.com/us/book/" + obj.books[i].iTune;
  document.getElementById("blurb").innerHTML = obj.books[i].blurb;
}

function getId() {
  var matches = /id=([^&#=]*)/.exec(window.location.search);
  var param1 = matches[1]
  return param1;
}
function getKeyword() {
  var matches = /keyword=([^&#=]*)/.exec(window.location.search);
  var param2 = matches[1]
  return param2;
}

async function getBookList() {
  let myObject = await fetch("books.json");
  let myText = await myObject.text();
  let text = "";
  var obj = JSON.parse(myText);

  for (var i = 0; i < obj.books.length; i++) {
    text += "<div>"
    text += "<img src='https://www.elladrake.com/covers/" + obj.books[i].cover125 + "' alt='" + obj.books[i].title + "' class='thumbnail'><br>";
    text += "<a href='books.html?id=" + obj.books[i].id + "'>" + obj.books[i].title + "</a>";
    text += "<p class='spacer'>" + obj.books[i].series + "</p>";
    text += "<p class='w3-text-theme'>" + obj.books[i].genre + "</p>";
    text += "<p class='w3-text-theme-2'>" + obj.books[i].length + "</p>";
    text += "<p class='spacer'>" + obj.books[i].tagline + "</p></div>";
  }

  document.getElementById("list").innerHTML = text;
}

async function getKeywordList(xkeyword) {
  let myObject = await fetch("books.json");
  let myText = await myObject.text();
  let text = "";
  var obj = JSON.parse(myText);
  const decodedKeyword = decodeURI(xkeyword);

  for (var i = 0; i < obj.books.length; i++)
    for (var k = 0; k < obj.books[i].keyword.length; k++) {
      if (obj.books[i].keyword[k] === decodedKeyword) {
        text += "<div>"
        text += "<img src='https://www.elladrake.com/covers/" + obj.books[i].cover125 + "' alt='" + obj.books[i].title + "' class='thumbnail'><br>";
        text += "<a href='books.html?id=" + obj.books[i].id + "'>" + obj.books[i].title + "</a>";
        text += "<p class='spacer'>" + obj.books[i].series + "</p>";
        text += "<p class='w3-text-theme'>" + obj.books[i].genre + "</p>";
        text += "<p class='w3-text-theme-2 spacer'>" + obj.books[i].length + "</p>";
        text += "<p class='spacer'>" + obj.books[i].tagline + "</p></div>";
      }
    }
  document.getElementById("keywordTitle").innerHTML = decodedKeyword;
  document.getElementById("list").innerHTML = text;
}

async function getSeriesList(xseries) {
  let myObject = await fetch("books.json");
  let myText = await myObject.text();
  let text = "";

  var obj = JSON.parse(myText);

  for (var i = 0; i < obj.books.length; i++)
    if (obj.books[i].series === xseries) {
      text += "<div>"
      text += "<img src='https://www.elladrake.com/covers/" + obj.books[i].cover125 + "' alt='" + obj.books[i].title + "' class='thumbnail'><br>";
      text += "<a href='books.html?id=" + obj.books[i].id + "'>" + obj.books[i].title + "</a>";
      text += "<p class='w3-text-theme'>" + obj.books[i].genre + "</p>";
      text += "<p class='w3-text-theme-2 spacer'>" + obj.books[i].length + "</p>";
      text += "<p class='spacer'>" + obj.books[i].tagline + "</p></div>";
    }

  let n = "list-" + xseries.replace(/\s/g, "");
  document.getElementById(n).innerHTML = text;
}
