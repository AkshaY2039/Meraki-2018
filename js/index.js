window.addEventListener('scroll', () => {
  let parent =  document.getElementById('parallax-container');
  let children = parent.getElementsByTagName('div');
  for(let i = 0; i < children.length; i++) {
    children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
  }
}, false)


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var sectionID = $(this.hash);
      sectionID = sectionID.length ? sectionID : $('[name=' + this.hash.slice(1) + ']');

      if (sectionID.length) {
        $('html,body').animate({
          scrollTop: sectionID.offset().top
        }, 1000); // This animation is 1 second long - measured in milliseconds
        
        return false;
      }
    }
  });
});

$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 100 ){
    
 		$('.bg').addClass('show');
    
  } else {
    
    $('.bg').removeClass('show');
    
 	};   	
});

$('.scroll').on('click', function(e){		
		e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});


