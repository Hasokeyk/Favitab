(function ( $ ) {
 
	/*
		Hasan Yüksektepe
		www.hayatikodla.net
		02.01.2020
		V2.0.5
	*/
 
    $.fn.favitab = function( options ) {
		
		var defaults  = {
			out  : {
				title 		: null,
				time  		: 0,
				favicon 	: null,
				sound 		: null,
				callback	: null
			},
			back : {	
				title 		: null,
				time  		: 0,
				favicon 	: null,
				sound 		: null,
				callback	: null
			}
        };
		
		var settings 	= $.extend(true,defaults , options);
		
		var originalTitle,originalfav;

		var outTime 	= settings.out.time;
		var backTime 	= settings.back.time;

		var outTitle	= settings.out.title;
		var backTitle	= settings.back.title;

		var outFavicon	= settings.out.favicon;
		var backFavicon	= settings.back.favicon;

		//SES ÇALMASI İSTENİRSE SESLER ÖNCEDEN YÜKLENSİN
		if(settings.back.sound != null){
			try {
				var backSoundPlay = new Audio(settings.back.sound);
				backSoundPlay.load();
			} catch (error) {
				var backSoundPlay = null;
			} 
		}

		if(settings.out.sound != null){
			try {
				var outSoundPlay = new Audio(settings.out.sound);
				outSoundPlay.load();
			} catch (error) {
				var outSoundPlay = null;
			}
		}
		//SES ÇALMASI İSTENİRSE SESLER ÖNCEDEN YÜKLENSİN

		$(window).focus(function(){
			
			//SEKMEYE GERİ GELDİ
			setTimeout(function(){
				
				//TİTLE
				if(backTitle == null){
					document.title = originalTitle;
				}else{
					document.title = backTitle;
					setTimeout(function(){
						document.title = originalTitle;
					},1000);
				}
				//TİTLE
				
				//FAVİCON
				if(backFavicon == null){
					$('link[rel="icon"]').attr('href',originalfav);
				}else{
					$('link[rel="icon"]').attr('href',backFavicon);
					setTimeout(function(){
						$('link[rel="icon"]').attr('href',originalfav);
					},1000);
				}
				//FAVİCON

				//SES
				if(backSoundPlay != null){
					
					var backSoundPly = backSoundPlay.play();
					if (backSoundPly !== undefined) {
						backSoundPly.then(_ => {

						})
						.catch(error => {
							console.error('Back Sound not load',error)
						});
					}

				}
					
				if(outSoundPlay != null){
					outSoundPlay.pause();
					outSoundPlay.currentTime = 0;
				}
				//SES

				//FONKSİYON
				if(typeof settings.back.callback == 'function'){
					settings.back.callback();
				}
				//FONKSİYON
				
			},backTime);
			//SEKMEYE GERİ GELDİ
			
			
		}).blur(function(){
			
			//SEKMEDEN ÇIKINCA
			setTimeout(function(){
				
				//TİTLE VE FAVİCON
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
				//TİTLE VE FAVİCON

				//SES
				if(outSoundPlay != null){
					
					var outSoundPly = outSoundPlay.play();
					if (outSoundPly !== undefined) {
						outSoundPly.then(_ => {
							
						})
						.catch(error => {
							console.error('Out Sound not load',error)
						});
					}

				}

				
				if(backSoundPlay != null){
					backSoundPlay.pause();
					backSoundPlay.currentTime = 0;
				}
				//SES

				//FONKSİYON
				if(typeof settings.out.callback == 'function'){
					settings.out.callback();
				}
				//FONKSİYON
				
				
			},outTime);
			//SEKMEDEN ÇIKINCA
			
		});
 
    };
 
}( jQuery ));