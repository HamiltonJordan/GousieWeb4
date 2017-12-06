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
};
$("#search_button").click(doSubmit);
$("#search-icon").click(doSubmit);

var databaseObj = { "joedb":      [
        {
            "link": "images/NM1.jpg",
            "year": "2017",
            "country": "United States",
            "state": "NM",
            "location": "Mountain", 
            "description": "Baldy Mountain from Copper Park"
            
        }, 
        {
            "link": "images/NM2.jpg",
            "year": "2017",
            "country": "United States",
            "state": "NM",
            "location": "Mountain", 
            "description": "Hiking the canyon"  
        },
        {
            "link": "images/NM3.jpg",
            "year": "2017",
            "country": "United States",
            "state": "NM",
            "location": "Mountain", 
            "description": "Looking up the canyon to the north"
            
        },
        {
            "link": "images/NM4.jpg",
            "year": "2017",
            "country": "United States",
            "state": "NM",
            "location": "Mountain", 
            "description": "Evening in the canyon"
            
        }, 
        {
            "link": "images/NM5.jpg",
            "year": "2017",
            "country": "United States",
            "state": "NM",
            "location": "Mountain", 
            "description": "Climbing a spar pole"   
        },
        {
            "link": "images/NM6.jpg",
            "year": "2017",
            "country": "United States",
            "state": "NM",
            "location": "Mountain", 
            "description": "Low clouds heading to Rich Cabin"   
        },
        {
            "link": "images/NM7.jpg",
            "year": "2017",
            "country": "United States",
            "state": "NM",
            "location": "Mountain", 
            "description": "Baldy Mountain from meadow south of Miranda"   
        },
        {
            "link": "images/NM8.jpg",
            "year": "2017",
            "country": "United States",
            "state": "NM",
            "location": "Mountain", 
            "description": "Where are we going? "
        },
        {
            "link": "images/NM9.jpg",
            "year": "2017",
            "country": "United States",
            "state": "NM",
            "location": "Mountain", 
            "description": "The Tooth of Time"   
        },
        {
            "link": "images/yStone1.jpg",
            "year": "2016",
            "country": "United States",
            "state": "WY",
            "location": "Park", 
            "description": "Lower Falls in the Grand Canyon of the Yellowstone, Yellowstone National Park"   
        },
        {
            "link": "images/yStone2.jpg",
            "year": "2016",
            "country": "United States",
            "state": "WY",
            "location": "Park", 
            "description": "Lower Falls, Yellowstone National Park"   
        },
        {
            "link": "images/yStone3.jpg",
            "year": "2016",
            "country": "United States",
            "state": "WY",
            "location": "Park", 
            "description": "Grand Prismatic Spring, Yellowstone National Park"   
        },
        {
            "link": "images/yStone4.jpg",
            "year": "2016",
            "country": "United States",
            "state": "WY",
            "location": "Park", 
            "description": "Bison in the way, Yellowstone National Park"   
        },
        {
            "link": "images/yStone5.jpg",
            "year": "2016",
            "country": "United States",
            "state": "WY",
            "location": "Park", 
            "description": "Looking towards Lake Yellowstone from the top of Mt. Washburn (10,243 ft.), Yellowstone National Park"   
        },
        {
            "link": "images/yStone6.jpg",
            "year": "2016",
            "country": "United States",
            "state": "WY",
            "location": "Park", 
            "description": "Mud pot, Yellowstone National Park"   
        },
        {
            "link": "images/yStone7.jpg",
            "year": "2016",
            "country": "United States",
            "state": "WY",
            "location": "Park", 
            "description": "Castle Geyser, Yellowstone National Park"   
        },
        {
            "link": "images/yStone8.jpg",
            "year": "2016",
            "country": "United States",
            "state": "WY",
            "location": "Park", 
            "description": "Yellowstone Lake, Yellowstone National Park"   
        },
        {
            "link": "images/cape1.jpg",
            "year": "2016",
            "country": "United States",
            "state": "MA",
            "location": "creek", 
            "description": "Paines Creek, Brewster, Cape Cod"   
        },
        {
            "link": "images/cape2.jpg",
            "year": "2015",
            "country": "United States",
            "state": "MA",
            "location": "West Chop", 
            "description": "West Chop lighthouse, Martha's Vineyard"   
        },
        {
            "link": "images/cape3.jpg",
            "year": "2015",
            "country": "United States",
            "state": "MA",
            "location": "Jaws Bridge", 
            "description": "Jumping off the Jaws Bridge, Martha's Vineyard"   
        },
        {
            "link": "images/cape4.jpg",
            "year": "2015",
            "country": "United States",
            "state": "MA",
            "location": "Vineyard Haven harbor", 
            "description": "Vineyard Haven harbor, Martha's Vineyard"   
        },
        {
            "link": "images/cape5.jpg",
            "year": "2015",
            "country": "United States",
            "state": "MA",
            "location": "West Chop", 
            "description": "West Chop, Martha's Vineyard"   
        },
        {
            "link": "images/cape6.jpg",
            "year": "2015",
            "country": "United States",
            "state": "MA",
            "location": "Oak Bluffs", 
            "description": "MVCMA cottages, Oak Bluffs, Martha's Vineyard"   
        },
        {
            "link": "images/cape7.jpg",
            "year": "2015",
            "country": "United States",
            "state": "Florida",
            "location": "Islamorada", 
            "description": "Boy Scout Sea Base, Islamorada, Florida Keys"   
        },
        {
            "link": "images/cape8.jpg",
            "year": "2015",
            "country": "United States",
            "state": "Florida",
            "location": "Islamorada", 
            "description": "Sail boats, Islamorada, Florida Keys"   
        },
        {
            "link": "images/cape9.jpg",
            "year": "2015",
            "country": "United States",
            "state": "Florida",
            "location": "Islamorada", 
            "description": "At the dock at Sea Base, Islamorada, Florida Keys"   
        },
        {
            "link": "images/cape10.jpg",
            "year": "2015",
            "country": "United States",
            "state": "Florida",
            "location": "sea Florida Keys", 
            "description": "Under sail, Florida Keys"   
        },
        {
            "link": "images/cape11.jpg",
            "year": "2015",
            "country": "United States",
            "state": "Florida",
            "location": "Gulf of Mexico", 
            "description": "Evening sets in, somewhere in the Gulf of Mexico off the Florida Keys"   
        }, 
        {
            "link": "images/europe1.jpg",
            "year": "2010",
            "country": "Germany",
            "state": "",
            "location": "Neuschwanstein Castle", 
            "description": "Neuschwanstein Castle, Bavaria, Germany"   
        },
        {
            "link": "images/europe2.jpg",
            "year": "2012",
            "country": "Germany",
            "state": "",
            "location": "The Old Town Hall", 
            "description": "The Old Town Hall, Bonn, Germany"   
        },
        {
            "link": "images/europe3.jpg",
            "year": "2012",
            "country": "Germany",
            "state": "",
            "location": "University", 
            "description": "TThe university in Bonn, Germany"   
        },
        {
            "link": "images/europe4.jpg",
            "year": "2012",
            "country": "Germany",
            "state": "",
            "location": "Northern Bavaria", 
            "description": "Downtown Hof, Northern Bavaria, Germany. This is the home of my mother's side of the family"   
        },
        {
            "link": "images/europe5.jpg",
            "year": "2010",
            "country": "Germany",
            "state": "",
            "location": "Wallgau", 
            "description": "NFestival in Wallgau, Bavaria, Germany"   
        },
        {
            "link": "images/europe6.jpg",
            "year": "2010",
            "country": "Germany",
            "state": "",
            "location": "Wallgau", 
            "description": "Children at the festival in Wallgau, Bavaria, Germany"   
        },
        {
            "link": "images/europe7.jpg",
            "year": "2010",
            "country": "Germany",
            "state": "",
            "location": "Garmisch", 
            "description": "Bavarian Alps in Garmisch, Bavaria, Germany"   
        },
        {
            "link": "images/europe8.jpg",
            "year": "2008",
            "country": "UK",
            "state": "",
            "location": "Dartmouth", 
            "description": "View from Dartmouth, Devon, UK"   
        },
        {
            "link": "images/europe9.jpg",
            "year": "2008",
            "country": "UK",
            "state": "",
            "location": "Dartmouth", 
            "description": "Rainbow over Dartmouth, Devon, UK"   
        },
        {
            "link": "images/europe10.jpg",
            "year": "2008",
            "country": "UK",
            "state": "",
            "location": "Street", 
            "description": "TyyStoneal street in Dartmouth, Devon, UK"   
        },
        {
            "link": "images/europe11.jpg",
            "year": "2008",
            "country": "UK",
            "state": "",
            "location": "Tintagel", 
            "description": "The site of the castle of the mythical King Arthur in Tintagel, Cornwall, UK"   
        },
        {
            "link": "images/europe12.jpg",
            "year": "2007",
            "country": "Spain",
            "state": "",
            "location": "Park", 
            "description": "The Magic Fountain in Barcelona, Spain"   
        },
        {
            "link": "images/europe13.jpg",
            "year": "2007",
            "country": "Spain",
            "state": "",
            "location": "Park", 
            "description": "Roof of Gaudi's House of Bones, Barcelona, Spain"   
        },
        {
            "link": "images/europe14.jpg",
            "year": "2007",
            "country": "United State",
            "state": "New Hampshire",
            "location": "Park", 
            "description": "Covered bridge in Lincoln, New Hampshire"   
        },
        {
            "link": "images/europe15.jpg",
            "year": "2007",
            "country": "US",
            "state": "New Hampshire",
            "location": "Mountain", 
            "description": "Mts. Lincoln and Flume, Lincoln, New Hampshire"   
        }
    ]
}

var all_photos = [];
for (i = 0; i < 20; i++) {
        all_photos.push(databaseObj.joedb[i].link);
    }
refreshGallery(all_photos);
$prt = $("#portal");
$prt.attr("src", all_photos[0])

$("#search").submit(function(){
        var search_term = $("#search_input").val();
		var photos = [];
        for (i = 0; i < databaseObj.joedb.length; i++) {
            if (databaseObj.joedb[i].year === search_term) {
                photos.push(databaseObj.joedb[i].link);
            }
        }
        for (i = 0; i < databaseObj.joedb.length; i++) {
            if (databaseObj.joedb[i].country === search_term) {
                photos.push(databaseObj.joedb[i].link);
            }
        }
        for (i = 0; i < databaseObj.joedb.length; i++) {
            if (databaseObj.joedb[i].state === search_term) {
                photos.push(databaseObj.joedb[i].link);
            }
        }
        for (i = 0; i < databaseObj.joedb.length; i++) {
            if (databaseObj.joedb[i].location === search_term) {
                photos.push(databaseObj.joedb[i].link);
            }
        }
        refreshGallery(photos);
        $prt = $("#portal");
        $prt.attr("src", photos[0]);	
    });



//var galleryRAW = '{"images":[{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"},{"url":"images/blockC.png"}]}';
//var gallery = JSON.parse (galleryRAW);
//alert(gallery.images[0].url);

//$count = gallery.images.length;


//$("#search").submit(refreshGallery);
function refreshGallery(photo_array) {
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
