# What is Favitab?

## APP NAME : Favitab
#### Versiyon : V2.0.0


* You can customize your Tab when the user who visits your website changes the Browser tab.
 	* Play Music
 	* Change Favicon
 	* Change Title

```javascript
jQuery(function($){
    $(window).favitab({
        out  : {  //Transactions to be done when you exit the tab
            title : 'Where are you go?', // (string) Out title text
            time  : null, // (null | int ) Let the process begin after a few seconds.
            favicon : "assets/img/sad.png", // (string) Out favicon path
            sound : "assets/sound/dontgo.mp3", // (string) Out mp3 path
        },
        back : { //Sekmeye geri gelince yapılacak işlemler
            title : null, // (string) Back title text
            time  : null, // (null | int ) Let the process begin after a few seconds.
            favicon : null, // (string) Back favicon path
            sound : "asstes/sound/welcome.mp3", //(string) mp3 tam yolu
        }
    });
});
```

## Favitab Demo
https://hasokeyk.github.io/Favitab/
