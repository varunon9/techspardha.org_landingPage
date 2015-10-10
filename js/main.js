( function(d, w, $) {
	var documentObject = $(d),
	    windowObject = $(w);
	documentObject.on('ready', function(){
		var resizeFlipCircle = function(windowWidth) {
			var scale = windowWidth/1366;
			if(scale<.5)
				scale = .5;
			TweenMax.set($("#flipCircle"),{scale : scale});
		};
		var windowWidth = windowObject.width();
		resizeFlipCircle(windowWidth);
		var r = 180, hoverFlag = 0;
		/*
		var r=1800, stop=1;
		var flipTheFlipCircle = function(r) {
			TweenMax.to(
				$("#comingSoon"),
				1.2,
				{
					transformPersepective : 1500,
					rotationX : r
				}
			); 
			TweenMax.to(
				$("#techspardha"),
				1.2,
				{
					transformPersepective : 1500,
					rotationX : r-180
				}
			);
			//console.log(r);
		}; 
		var startAnimation = function() {
			setTimeout(function(){
                flipTheFlipCircle(1620*2-180);
			},500);
			setTimeout(function(){
                flipTheFlipCircle(0);
                //console.log("k");
                setTimeout(function(){
                	stop=1;
                },500);
			},2500);
		}
		setInterval(function() {
			if(stop ==1){
				startAnimation();
				stop =0;
			}
		}, 1000);*/ 
        var flipTheFlipCircle = function(r) {
			TweenMax.to(
				$("#comingSoon"),
				.5,
				{
					transformPersepective : 1500,
					rotationX : r
				}
			); 
			TweenMax.to(
				$("#techspardha"),
				.5,
				{
					transformPersepective : 1500,
					rotationX : r-180
				}
			);
		};
		setInterval(function() {
			flipTheFlipCircle(r);
			if(hoverFlag == 0) {
				r -= 180;
				if(r == -180)
				    r = 180;
			}
			else {
				r -= 1800;
				if(r == -1800)
				    r = 1800;
			}
		}, 1000);
		$("#circleContent").hover(function() {
            r = 1800;
            hoverFlag = 1;
		},
		function() {
            r = 180;
            hoverFlag = 0;
		});
		windowObject.on('resize', function(){
			var windowWidth = windowObject.width();
		    resizeFlipCircle(windowWidth);
			
		})
	});
} (document, window, jQuery));