$prt = $("#portal");
$(".thumb").click(magnify);
function magnify() {
    $prt.attr("src", this.src);     
}

$curr = -1;
var imageSlots = document.getElementsByClassName('thumb');
$("#next").click(function(){
    if($curr < 20){
        $curr++;
    }
    else{
        $curr = 0;
    }
    $prt.attr("src", imageSlots[$curr].src);

});
$("#previous").click(function(){
    if($curr > 0){
        $curr--;
    }
    else{
        $curr = 19;
    }
    $prt.attr("src", imageSlots[$curr].src);

});

function doSubmit() {
	$("#search").submit();
}

$("#search_button").click(doSubmit);
$("#search-icon").click(doSubmit);

var databaseObj = { "janedb":      [
        {
            "link": "images/rose.jpg",
            "year": "2017",
            "country": "United States",
            "state": "NM",
            "location": "park", 
            "description": "roses in snow"
            
        }, 
        {
            "link": "images/chicago.jpg",
            "year": "2016",
            "country": "United States",
            "state": "IL",
            "location": "city", 
            "description": "chicago by air"
            
        },
        {
            "link": "images/sunset.jpg",
            "year": "2015",
            "country": "Germany",
            "state": "",
            "location": "beach", 
            "description": "sunset by the beach"
            
        },
        {
            "link": "images/troll.jpg",
            "year": "2015",
            "country": "United States",
            "state": "Florida",
            "location": "river", 
            "description": "troll in a river"
            
        }
    ]
};
  
var all_photos = [];
for (i = 0; i < databaseObj.janedb.length; i++) {
        all_photos.push(databaseObj.janedb[i].link);
    }
refreshGallery(all_photos);
$prt = $("#portal");
$prt.attr("src", all_photos[0]);
    
$("#search").submit(function(){
    var search_term = $("#search_input").val();
    var photos = [];
    for (i = 0; i < databaseObj.janedb.length; i++) {
        if (databaseObj.janedb[i].year === search_term) {
            photos.push(databaseObj.janedb[i].link);
        }
    }
    for (i = 0; i < databaseObj.janedb.length; i++) {
        if (databaseObj.janedb[i].country === search_term) {
            photos.push(databaseObj.janedb[i].link);
        }
    }
    for (i = 0; i < databaseObj.janedb.length; i++) {
        if (databaseObj.janedb[i].state === search_term) {
            photos.push(databaseObj.janedb[i].link);
        }
    }
    for (i = 0; i < databaseObj.janedb.length; i++) {
        if (databaseObj.janedb[i].location === search_term) {
            photos.push(databaseObj.janedb[i].link);
        }
    }
    refreshGallery(photos);
    $prt = $("#portal");
    $prt.attr("src", photos[0]);	
});


function refreshGallery(photo_array) {
	var imageSlots = document.getElementsByClassName('thumb');
	for (var i = 0; i < imageSlots.length; i++) {
		if (i < photo_array.length) {
			$slot = imageSlots[i];
			$slot.src = photo_array[i];
		}else{
			$slot = imageSlots[i];
			$slot.src = "images/blockB.png";
		}
	}
}

//refreshGallery();
