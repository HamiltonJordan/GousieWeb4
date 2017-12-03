$prt = $("#portal");
$(".thumb").hover(magnify);
function magnify() {
	$prt.attr("src", this.src);		
}