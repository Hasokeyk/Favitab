(function ( $ ) {
 
	/*
		Hasan Yüksektepe
		www.hayatikodla.net
		02.01.2020
		V1.1.0
	*/
 
    $.fn.favitab = function( options ) {
		
		var outSoundPath 	= "assets/sound/dontgo.mp3"
		var InSoundPath 	= "assets/sound/welcome.mp3"

		var defaults  = {
			out  : {
				title : 'Nereye Gittin',
				time  : null,
				favicon : "assets/img/uzgun.png",
				sound : outSoundPath,
			},
			back : {
				title : null,
				time  : null,
				favicon : null,
				sound : InSoundPath,
			}
        };
		
        var settings = $.extend({
			
			out  : {
				title : 'Nereye Gittin',
				time  : null,
				favicon : "assets/img/uzgun.png",
				sound : outSoundPath,
			},
			back : {
				title : null,
				time  : null,
				favicon : null,
				sound : InSoundPath,
			}
			
		}, defaults , options );
		
		var outTitle = settings.out.title;
		var originalTitle,originalfav;
		
		var backTime = settings.back.time==undefined?0:settings.back.time;
		var outTime =  settings.out.time==undefined?0:settings.out.time;

		var backSound = settings.back.sound==undefined?defaults.back.sound:settings.back.sound;
		var outSound  = settings.out.sound==undefined?defaults.out.sound:settings.out.sound;
		
		var backFavicon = settings.back.favicon==undefined?defaults.back.favicon:settings.back.favicon;
		var outFavicon  = settings.out.favicon==undefined?defaults.out.favicon:settings.out.favicon;
		
		var backSoundPlay = new Audio(backSound);
		var outSoundPlay = new Audio(outSound);

		$(window).focus(function(){
			
			//SEKMEYE GERİ GELDİ
			if(originalTitle){
				setTimeout(function(){
					
					if(settings.back.title == undefined){
						document.title = originalTitle;
					}else{
						document.title = settings.back.title;
						setTimeout(function(){
							document.title = originalTitle;
						},1000);
					}
					
					if(settings.back.title==undefined){
						$('link[rel="icon"]').attr('href',originalfav);
					}else{
						$('link[rel="icon"]').attr('href',backFavicon);
						setTimeout(function(){
							$('link[rel="icon"]').attr('href',originalfav);
						},1000);
					}
					
				},backTime*1000);
				
			}
			//SEKMEYE GERİ GELDİ
			
			if(backSound != null || backSound != false){
				outSoundPlay.pause();
				outSoundPlay.currentTime = 0;
				
				backSoundPlay.play();
			}
			
		}).blur(function(){
			
			//SEKMEDEN ÇIKINCA
			setTimeout(function(){
				
				var title = $('title').text();
				if(title != outTitle){
					originalTitle = title;	
					originalfav = $('link[rel="icon"]').attr('href');				
				}
				document.title = outTitle;
				
				if($('html').has('link[rel="icon"]').length > 0){
					$('link[rel="icon"]').attr('href',outFavicon);
				}else{
					$('head').append('<link rel="icon" href="'+outFavicon+'" />');
				}
				
				if(outSound != null || outSound != false){
					backSoundPlay.pause();
					backSoundPlay.currentTime = 0;

					outSoundPlay.play();
				}
				
			},outTime*1000);
			//SEKMEDEN ÇIKINCA
			
		});
 
    };
 
}( jQuery ));