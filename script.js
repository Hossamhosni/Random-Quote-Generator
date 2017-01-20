var quote = document.getElementById("quote");
function randomQuote() {
  $("body").fadeOut(200);
  $.ajax({
      url: "https://quotesondesign.com/wp-json/posts?",
      dataType: "jsonp",
      data: "filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?",
			success:callback
  });
}
function callback(data) {
  $("body").fadeIn(150);
	quote.innerHTML = data[0].content + "<br />" ;
	quote.innerHTML += "<small id = 'author'> - "+ data[0].title +"</small>";

  var twitter = "https://twitter.com/intent/tweet?text=" + quote.textContent + "&hashtags=quote";
  $(".twitter-share-button").attr("href", twitter);
}
$(document).ready(randomQuote());
$("#btn").click(function(){
  randomQuote();
});
