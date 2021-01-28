var scrolltop = 0;

$(function() {
	
	$('img').each(function(){
		
		$(this).load(function(){
			$('.row.equal > [class*="col-"]').matchHeight();
		})
		
	});
    
});


	
	$(".rollmedios").each(function(){
		
		var $this = this;
		
		var time =  $($this).data("time")  ?  $($this).data("time") : 2000; 
		
		
		var interval = setInterval(function(){		

			var gap =  $($this).data("gap")  ?  $($this).data("gap") : 15; 
			
			if ( !$this.vuelta ) $this.vuelta = 1 ;
			
			if ( !$this.posy ) $this.posy =  $($this).height()+ gap ;
			
			if ( $($this).data("total") == $this.vuelta ) { $this.posy = 0; $this.vuelta = 0}

			$($this).css("background-position-y", -$this.posy+"px");

			$this.posy += $($this).height()+ gap ;
			
			$this.vuelta++;
		
			}, time);
			
			
			
	});
	

		
		
		
		
		
		
		
		
		
		
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

		
var storeValue = [];
var elementItem = [];
var i = 0;

$(".graphics").each(function(){
	
	storeValue[i] = [];
	
	elementItem[i] = [];
	
	var ii = 0;
	$(this).find(".progress-bar").each(function(){
		value = parseInt( $(this).data("value") );
		storeValue[i][ii] = value;
		elementItem[i][ii] = this;
		ii++;
	});
	
	i++;
	
});

for( var indexx = 0; storeValue.length > indexx; indexx++){
	
	for( var index = 0; storeValue[indexx].length > index; index++){
		
		var porcent =  ( storeValue[indexx][index] * 100 ) / Math.max.apply(null, storeValue[indexx]) ;
		
		var ele = elementItem[indexx][index] ;
		
		if ( porcent < 6 ) { porcent = 6; }
		
		$(ele).data("porcentvalue", porcent);
		
	}
	
}
	
$(window).on("scroll", function() {

	scrolltop = $(this).scrollTop() + $(window).height();

	$('.count, .nocount').each(function () {
		
		if ( $(this).offset().top < scrolltop && $(this).offset().top > scrolltop - $(window).height() ){
			
			if ( !$(this).data("finish") ){
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
				}, {
					duration: 2000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			}
			$(this).data("finish", true);
		
		} else {
			
			$(this).data("finish", false);
			
		}
		
	});	
	
	
	
	$(".progress-bar").each(function(){
	
		if ( $(this).offset().top < scrolltop && $(this).offset().top > scrolltop - $(window).height() ){
			
			$(this).css("width", $(this).data( "porcentvalue" )+"%");
			
		} else {
			$(this).css("width", 0+"%");
		}
	
	
	});
	
});



$(document).ready(function(){
	 $('.owl-campania').owlCarousel({
		items:1,
		singleItem: true,
		loop: true,
		nav: true,
		dots: false,
		navText: ["<img src='../assets/imgs/previmage.png'>","<img src='../assets/imgs/nextimage.png'>"]
	})	

	 $('.owl-tarjetas').owlCarousel({
		items:3,
		loop: true,
		nav: true,
		dots: false,
		navText: ["<img src='../assets/imgs/previmage2.png'>","<img src='../assets/imgs/nextimage2.png'>"]
	})	
	
	 $('.owl-slides').owlCarousel({
		items:1,
		singleItem: true,
		loop: true,
		nav: true,
		dots: false,
		navText: ["<img src='../assets/imgs/previmage2.png'>","<img src='../assets/imgs/nextimage2.png'>"]
	})	
	
})	
