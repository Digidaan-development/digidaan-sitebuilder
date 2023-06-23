$(".w95-window").draggable({
    handle: ".card-header",
    containment: "window"
  })
  
  $(".w95-window").resizable({
    animate: true
  });
  
  $(".w95-window").on('shown.bs.w95-window', function (e) {
    $(".w95-window iframe").attr('src', "https://www.youtube-nocookie.com/embed/nEkiYKsYtqo?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;start=0" ); 
  })
  
  $(".w95-window").on('hide.bs.w95-window', function (e) {
    $(".w95-window iframe").attr('src'," "); 
  })
