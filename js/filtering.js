$grid =  $('#grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  masonry: {
		columnWidth: '.grid-item'
  }
});

$('.filter-button-group').on( 'click', 'button', function() {
		$('.filterbutton').removeClass('is-checked');
	    var filterValue = $(this).attr('data-filter');
	    $grid.isotope({ filter: filterValue });
	    $(this).addClass('is-checked');
	});
