// transform <img title="caption" ...> into <figure><img ...><figcaption>caption</figcaption></figure>
$('img[title]').each(function() {
  var img, caption;
  img = $(this).attr('src');
  caption = $(this).attr('title');
  if ($(this).is('[width]'))
    width = ' style="width:' + $(this).attr('width') +'"';
  else
    width=''
  if ($(this).is('[class]'))
    cls = ' class="' + $(this).attr('class') +'"';
  else
    cls=''
  $(this).parent().replaceWith($('<figure' + cls + width + '><img src="' + img + '"><figcaption>' + caption + '</figcaption></figure>'));
});

// add two buttons to publication pages to switch between the two sort orders
$("#page-title:contains('Publications')").append(" <a class=\"btn btn--primary btn--small\" href=\"/publications/\">by year</a> <a class=\"btn btn--primary btn--small\" href=\"/publications-bytype/\">by publication type</a>")
