$(function() {

  var $grid = $('.portfolio-content').isotope({
    itemSelector: '.portfolio',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-sizer',
      gutter: 20
    }
  });

  $('.filter-container').on('click', 'p', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

});
