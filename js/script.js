$(document).ready(function(){
	$('.dashboard-nav .navbar-toggle').click(function(){
		$('.floating-sidebar').addClass('active');
	})

	$('.fs-top').click(function(){
		$('.floating-sidebar').removeClass('active');
	})
})

$(window).scroll(function(){
	if($("header .dropdown.yamm-fw").hasClass("open")){
		$("header .dropdown.yamm-fw a").trigger("click");
	}
})

$(document).on('click', '.yamm .dropdown-menu', function(e) {
  e.stopPropagation()
})