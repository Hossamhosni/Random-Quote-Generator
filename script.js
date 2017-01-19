var quote = document.getElementById("quote");
function randomQuote() {
  $.ajax({
      url: "https://quotesondesign.com/wp-json/posts?",
      dataType: "jsonp",
      data: "filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?",
			success:callback
  });
}
function callback(data) {
	console.log(data[0].content);
	quote.innerHTML = data[0].content + "<br />" ;
	quote.innerHTML += "<small id = 'author'> - "+ data[0].title +"</small>";
}
$(document).ready(randomQuote());
$("#btn").click(function(){
  randomQuote();
});
