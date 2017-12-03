$("#search_button").click(function(){
    alert("search");
    $getJSON("json/gousiedb.js", function(data){
        var photodb = $parseJSON(data);
        alert(photodb);
    });
});