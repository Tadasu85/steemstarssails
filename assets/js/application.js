var steemaccount = "";
var cy;

document.addEventListener("DOMContentLoaded", function(event) {

if (window.location.pathname=='/permission/galaxy') {

var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),
    boxSelectionEnabled: false,
    autounselectify: false,
    autoungrabify: true,
    textureOnViewport: false,
    hideEdgesOnViewport: false,
    zoom: 1,
    pixelRatio: 5,
    layout: {name: 'preset'},
    style: [{
        selector: 'node',
            style: {
                'height': .25,
                'width': .25,
                'background-color': 'white',
                'label': 'data(label)',
                'color': 'white',
                'text-transform': 'lowercase',
                'font-size': .25,
                'font-weight': 'bold',
                'font-style': 'italic',
                'letter-spacing': 1,
                'font-family': '"Courier New", Courier',
                'text-shadow-blur': 100,
                'shadow-blur': 10,
                'background-opacity': 0.6,
                'min-zoomed-font-size': .5
            }
        },
        {
            selector: 'edge',
            style: {
                'line-color': '#FFFF',
                'width': 0.1,
                'opacity': 0.4
            }
        },
        {
            selector: '.followers',
            style: {
                'background-color': 'yellow',
                'label': 'data(label)',
                'color': '#FFFFFF',
                'text-transform': 'lowercase',
                'font-weight': 'bold',
                'font-style': 'italic',
                'font-family': '"Times New Roman", Georgia, Serif',
                'text-shadow-blur': 100,
                'shadow-blur': 10,
                'background-opacity': 0.6
            }
        }, 
        {
            selector: '.mutual',
            style: {
                'background-color': 'green',
                'label': 'data(label)',
                'color': '#FFFFFF',
                'text-transform': 'lowercase',
                'font-weight': 'bold',
                'font-style': 'italic',
                'font-family': '"Times New Roman", Georgia, Serif',
                'text-shadow-blur': 100,
                'shadow-blur': 10,
                'background-opacity': 0.6
            }
        },
        {
            selector: '.follows',
            style: {
                'background-color': 'blue',
                'label': 'data(label)',
                'color': '#FFFFFF',
                'text-transform': 'lowercase',
                'font-weight': 'bold',
                'font-style': 'italic',
                'font-family': '"Times New Roman", Georgia, Serif',
                'text-shadow-blur': 100,
                'shadow-blur': 10,
                'background-opacity': 0.6
            }
        },
        {
            selector: ':selected',
            style: {
                'height': .75,
                'width': .75,
                'label': 'data(label)',
                //'font-size': 18,
                //'color': '#FFFFFF',
                'text-transform': 'uppercase',
                'font-weight': 'bold',
                'font-style': 'italic',
                'font-family': '"Times New Roman", Georgia, Serif',
                //'text-shadow-blur': 100,
                'shadow-blur': 10,
                'background-opacity': 0.6
            }
        }],
    elements: [{
            data: {
                id: steemaccount,
                label: steemaccount,
                
                   },
            position: { x: 250, y: 250 }, 
            classes: 'background'
              }]
});
var cxtmenuApi = cy.cxtmenu(defaults);
var MenuOne = cy.contextMenus({
menuItems: [
{
    id: 'viewonsteem',
    title: 'View On Steem',
    selector: 'node',
    onClickFunction: function (event) {
var selectedNode = event.cyTarget.attr("label");
    window.open('https://steemit.com/@'+selectedNode,'_blank');
    }
  },
  {
    id: 'buildmenu',
    title: 'Build Menu',
    selector: '.parent',
    onClickFunction: function (event) {
    selectedNode = event.cyTarget.attr("id");
    $("#jigonsaseh-data").html("<center>" +event.cyTarget.attr("id").toUpperCase()+"</center>");
    document.getElementById('jigonsaseh').style.display='block';
    document.getElementById('fade').style.display='block';
  }

  },
  {
    id: 'viewjigonsaseh',
    title: 'View Jigonsaseh',
    selector: '.mutual, .followers, .follows', 
    onClickFunction: function (event) {
    
    $("#jigonsaseh-data").html("<center>" +event.cyTarget.attr("id").toUpperCase()+"</center>");
    document.getElementById('jigonsaseh').style.display='block';
    document.getElementById('fade').style.display='block';
    }
  },
  {
    id: 'viewlenged',
    title: 'View Legend',
    selector: '', 
    coreAsWell: true,
    onClickFunction: function () {
    document.getElementById('legend').style.display='block';
    document.getElementById('fade').style.display='block';
    }
  },
],
menuItemClasses: ['custom-menu-item'],
contextMenuClasses: ['custom-context-menu']
});
$('#closelegend').on("click", function closelegend(event) {
document.getElementById('legend').style.display='none';
document.getElementById('fade').style.display='none';
});
$('input#closejigonsaseh').on("click", function closelegend(event) {
document.getElementById('jigonsaseh').style.display='none';
document.getElementById('fade').style.display='none';
});
configureHUD();
//addFollowers();
//addFollows();
testing();
//setTimeout(function(){ cy.layout({name: 'preset', stop: function(){}});  }, 5000);

var defaults = {
  menuRadius: 100, // the radius of the circular menu in pixels
  selector: 'node', // elements matching this Cytoscape.js selector will trigger cxtmenus
  commands: [ // an array of commands to list in the menu or a function that returns the array
    
    /*{ // example command
      fillColor: 'rgba(200, 200, 200, 0.75)', // optional: custom background color for item
      content: 'a command name' // html/text content to be displayed in the menu
      select: function(ele){ // a function to execute when the command is selected
        console.log( ele.id() ) // `ele` holds the reference to the active element
      }
    }*/
    
  ], // function( ele ){ return [ /*...*/ ] }, // example function for commands
  fillColor: 'rgba(0, 0, 0, 0.75)', // the background colour of the menu
  activeFillColor: 'rgba(92, 194, 237, 0.75)', // the colour used to indicate the selected command
  activePadding: 20, // additional size in pixels for the active command
  indicatorSize: 24, // the size in pixels of the pointer to the active command
  separatorWidth: 3, // the empty spacing in pixels between successive commands
  spotlightPadding: 4, // extra spacing in pixels between the element and the spotlight
  minSpotlightRadius: 24, // the minimum radius in pixels of the spotlight
  maxSpotlightRadius: 38, // the maximum radius in pixels of the spotlight
  openMenuEvents: 'cxttapstart taphold', // space-separated cytoscape events that will open the menu; only `cxttapstart` and/or `taphold` work here
  itemColor: 'white', // the colour of text in the command's content
  itemTextShadowColor: 'black', // the text shadow colour of the command's content
  zIndex: 9999, // the z-index of the ui div
  atMouse: false // draw menu at mouse position
};
}
});
function addFollowers(){
cy.getElementById(steemaccount).addClass('parent');

steem.api.getFollowers(steemaccount, 0, "blog", 100, function(err, result) {

   cy.startBatch();
   for (var i = 0; i < result.length; i++) {
       var obj = result[i].follower;
       cy.add({group: "nodes", data: {id: obj, label: obj}, weight: 0, position: {}});
       cy.add({group: "edges", data: {source: obj, target: steemaccount}}).addClass('followersedge');
       cy.getElementById(obj).addClass('followers');
        }
        cy.endBatch();
        gotfollowers = true;
});
}
function addFollows(){
steem.api.getFollowing(steemaccount, 0, "blog", 100, function(err, result) {

          cy.startBatch();
           
           for (var i = 0; i < result.length; i++) {
           var obj = result[i].following;
               if (cy.getElementById(obj).length==0){
               cy.add({group: "nodes", data: {id: obj, label: obj}, weight: 0, position: {}});
               cy.add({group: "edges", data: {source: obj, target: steemaccount}}).addClass('followsedge');
               cy.getElementById(obj).addClass('follows');
               }
               else {
               cy.getElementById(obj).addClass('mutual');
               cy.getElementById(obj).data('weight', '0');
               cy.getElementById(obj).removeClass('followers')}
               }
           cy.endBatch();
           
           gotfollows = true;
    });
}
function addEdges(){

cy.startBatch();
cy.nodes().forEach(function( ele ){
steem.api.getFollowing(ele.id(), 0, "blog", 100, function(err, result) {
        
        for (var i = 0; i < result.length; i++) {
           var obj = result[i].following;
               if (cy.getElementById(obj).length==1){
                   cy.add({group: "edges", data: {source: obj, target: ele.id()}}).addClass('secondrelative');
               }
        }
        
        });
       
    });
    cy.endBatch();
}

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
        //console.log(body, response);
        //console.log(steemaccount);
        globalPopulation = body[0].amount;
        //console.log(globalPopulation);
    });
    
setTimeout(function(){
    $("#global-hud-top").html("Research: " + globalResearch+" Power: "+globalPower+" Materials: "+globalMaterials+
" Population: "+globalPopulation+" Ships: "+globalShips+" Embassies: "+globalEmbassies);
//console.log(globalPopulation);
}, 1000);

steem.api.getAccountCount(function(err, result) {
    globalJigs = result;
    //console.log(err, result);
    $("#global-hud-bottom").html("Global Accounts: " + globalJigs);
});
steem.api.getDynamicGlobalProperties(function(err, result) {
    globalTime = result.time;
     //console.log(err, result);
     $("#global-hud-bottom").append(" Current Block Time: " + globalTime );
});

}

function testing(){
    function allDone(notAborted, arr) {
        console.log("done", notAborted, arr);
        for(var obj = 0; obj<arr.length;obj++){
            console.log(arr[obj].name);
            cy.add({group: "nodes", data: {id: arr[obj].name, label: arr[obj].name}, position: {x: parseFloat(arr[obj].x_coord), y: parseFloat(arr[obj].y_coord)}});
        }
        cy.layout({name: 'preset', stop: function(){}});
    }
    io.socket.get('/planet', {limit: 10000}, function(things, jwr) 
    {
    forEach(things, function(item, index, arr) {
    //console.log("each", item, index, arr);
    //console.log(item[0].name);
    var done = this.async();
    setTimeout(function() {
    done();
    }, 25);
    }, allDone);
    
    });
   
}