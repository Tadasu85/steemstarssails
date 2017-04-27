var steemaccount = "";
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
    var globalPopulation = 0;
    var globalShips = 0;
    var globalEmbassies = 0;
io.socket.get('/population/?user=' + steemaccount, function gotResponse(body, response){
    globalPopulation = body[0].amount;
});
    
setTimeout(function(){
$("#global-hud-top").html("Research: " + globalResearch+" Power: "+globalPower+" Materials: "+globalMaterials+
" Population: "+globalPopulation+" Ships: "+globalShips+" Embassies: "+globalEmbassies);
}, 1000);

steem.api.getAccountCount(function(err, result) {
globalJigs = result;
$("#global-hud-bottom").html("Global Accounts: " + globalJigs);
});
steem.api.getDynamicGlobalProperties(function(err, result) {
globalTime = result.time;
$("#global-hud-bottom").append(" Current Block Time: " + globalTime );
});
    }
