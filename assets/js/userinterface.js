var steemaccount = "";
var data = "";
var userid = "";
var idealid = "";

document.addEventListener("DOMContentLoaded", function(event) {
if (window.location.pathname=='/permission/galaxy') {
//Fire and attach CXT menu and items to cytoscape here, define buttons so on.
setTimeout(function(){
    cy.cxtmenu({
	selector: 'node',
	commands: [
		{
		content: 'View On Steem',
		select: function(ele)
			{
			var selectedNode = ele.data('label');
            window.open('https://steemit.com/@'+selectedNode,'_blank');
            }
		},
		{
		content: 'Build Menu',
		select: function(ele){
			if(ele.data('label') == steemaccount){
				
			    $("#jigonsaseh-data").html("<center>" +steemaccount.toUpperCase()+"</center>");
			    document.getElementById('jigonsaseh').style.display='block';
                document.getElementById('fade').style.display='block';
			        }
			else{
			    alert("This is not your home!");
			}
				},
			disabled: false
		},
		{
		content: 'View Legend',
		select: function(ele){
			    document.getElementById('legend').style.display='block';
                document.getElementById('fade').style.display='block';
		            }
		},
		{
		content: 'View Planet',
		select: function(ele){
			$("#jigonsaseh-data").html("<center>" +ele.data("label").toUpperCase()+"</center>");
            document.getElementById('jigonsaseh').style.display='block';
            document.getElementById('fade').style.display='block';
		        }
		}]
	});
    cy.cxtmenu({
	    selector: 'core',
	    commands: [
	        {
	            content: 'View Legend',
		select: function(ele){
			    document.getElementById('legend').style.display='block';
                document.getElementById('fade').style.display='block';
		      }
        }]
    });
$('#closelegend').on("click", function closelegend(event) {
document.getElementById('legend').style.display='none';
document.getElementById('fade').style.display='none';
});
$('input#closejigonsaseh').on("click", function closelegend(event) {
document.getElementById('jigonsaseh').style.display='none';
document.getElementById('fade').style.display='none';
});

//Setup outer UI IE top and bottom heads up displays.
}, 750);	
configureHUD();
    }

});

function configureHUD(){
    var globalJigs;
    var globalTime;
    var globalResearch = 0;
    var globalPower = 0;
    var globalMaterials = 0;
    var globalIdeal = 0;
    var globalShips = 0;
    var globalEmbassies = 0;
io.socket.get('/user/?username='+ steemaccount, function gotResponse(body, response){
	userid = body[0].id;
	console.log(body);
	io.socket.get('/ideal/?userid='+ userid, function gotResponse(body, response){
		console.log(body, response);
		idealid = body[0].id;
		globalIdeal = body[0].amount;
	});
});

    
setTimeout(function(){
$("#global-hud-top").append("<p id='research'>Research: " + globalResearch + "</p>") 
$("#global-hud-top").append("<p id='power'>Power: " + globalPower + "</p>")
$("#global-hud-top").append("<p id='materials'>Materials: " + globalMaterials + "</p>")
$("#global-hud-top").append("<p id='ideal'>Ideal: " + globalIdeal + "</p>")
$("#global-hud-top").append("<p id='ships'>Ships: " + globalShips + "</p>")
$("#global-hud-top").append("<p id='embassies'>Embassies: " + globalEmbassies + "</p>")

steem.api.getAccountCount(function(err, result) {
globalJigs = result;
$("#global-hud-bottom").html("<p id='globalaccounts'>" + "Global Accounts: " + globalJigs + "</p>");
});
steem.api.getDynamicGlobalProperties(function(err, result) {
globalTime = result.time;
$("#global-hud-bottom").append("<p id='blocktime'>Current Block Time: " + globalTime + "</p>" );
$("#global-hud-bottom").append("<p id='graphnodes'>Current Graph Nodes: " + cy.collection('node').length+ "</p>" );
});
}, 7000);

io.socket.on('ideal', function(event){
  	console.log(event);
  	console.log(event.id);
  	var compare = String(event.id);
  	console.log(compare, idealid);
  	if(event.id == userid) {
    	$("#ideal").replaceWith("<p id='ideal'> Ideal: "+ event.data.amount +"</p>");
    	console.log("TRUE");
	}
});
 }


