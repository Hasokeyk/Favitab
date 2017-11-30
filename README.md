# Favitab Nedir?

#### APP : Favitab
#### Versiyon : V1.0.0


* Favitab web sitesine gelen kullanıcı sayfanızdan çıkınca veya sekme değiştirince işlem yapmanıza olanak sağlar.
 * Kullanıcı ayrılınca
 	* Müzik çalabilir
 	* Favicon değiştirebilirsiniz
 	* Title değiştirebilirsiniz
* Kullanıcı sekmeye geri gelince
	* Müzik Çalabilir
	* Favicon eski haline gelir veya yeni bir favicon tanımlayabilirsiniz.
	* Title değişebilir veya istediğiniz title belirlersiniz ve 1sn sonra orjinal title geri aktif olur

```javascript
jQuery(function($){
    $(window).favitab({
        out  : { //Sekmeden çıkınca yapılacak işlemler
            title : 'Nereye Gittin', //(string) Başlıkta yazacak yazı
            time  : null, //(null | int ) kaç sn sonra işlem yapılacak
            favicon : "//app.hayatikodla.net/favitab/uzgun.png", //(string) favicon tam yolu
            sound : "//app.hayatikodla.net/favitab/dontgo.mp3", //(string) mp3 tam yolu
        },
        back : { //Sekmeye geri gelince yapılacak işlemler
            title : null, //(string) Başlıkta yazacak yazı
            time  : null, //(null | int ) kaç sn sonra işlem yapılacak
            favicon : null, //(string) favicon tam yolu
            sound : "//app.hayatikodla.net/favitab/welcome.mp3", //(string) mp3 tam yolu
        }
    });
});
```

## Favitab Demo
https://app.hayatikodla.net/favitab/
