var quote = document.getElementById("quote"),
  functionsArray = [randomQuote1,randomQuote2];
function randomQuote1() {
  $("body").fadeOut(200);
  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?",
    dataType: "json",
    data: "method=getQuote&format=json&lang=en",
			success:callback1
  });
}
function callback1(data) {
  $("body").fadeIn(150);
	quote.innerHTML = data.quoteText + "<br />" ;
	quote.innerHTML += "<small id = 'author'> - "+ data.quoteAuthor +"</small>";

  var twitter = "https://twitter.com/intent/tweet?text=" + quote.textContent + "&hashtags=quote";
  $(".twitter-share-button").attr("href", twitter);
}
function randomQuote2() {
  $("body").fadeOut(200);
  $.ajax({
      url: "https://quotesondesign.com/wp-json/posts?",
      dataType: "jsonp",
      data: "filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?",
			success:callback2
  });
}
function callback2(data) {
  $("body").fadeIn(150);
	quote.innerHTML = data[0].content + "<br />" ;
	quote.innerHTML += "<small id = 'author'> - "+ data[0].title +"</small>";

  var twitter = "https://twitter.com/intent/tweet?text= "+ quote.textContent + "&hashtags=quote";
  $(".twitter-share-button").attr("href", twitter);
}
$(document).ready(
  functionsArray[Math.floor(Math.random() * 2)]());
$("#btn").click(function(){
  var choosenFunction = Math.floor(Math.random() * 2);
  functionsArray[choosenFunction]();
});
