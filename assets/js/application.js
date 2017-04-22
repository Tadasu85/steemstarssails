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
                'background-color': 'black',
                'label': 'data(label)',
                'color': 'black',
                'text-transform': 'lowercase',
                'font-size': .25,
                //'font-weight': 'bold',
                //'font-style': 'italic',
                'font-family': '"Times New Roman", Georgia, Serif',
                //'text-shadow-blur': 100,
                //'shadow-blur': 10,
                'background-opacity': 0.6,
                //'min-zoomed-font-size': 6
            }
        },
        {
            selector: 'edge',
            style: {
                'line-color': '#FFFF',
                'width': 1,
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
        }
          ],
    elements: [{
            data: {
                id: steemaccount,
                label: steemaccount,
                
                   },
            position: { x: 250, y: 250 }, 
            classes: 'background'
              }]
});

cy.contextMenus({
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
    io.socket.get('/planet', {limit: 500, skip:500}, function(things, jwr) 
    { 
        console.log(jwr); 
        cy.startBatch();
        for (var i = 0; i < things.length; i++) {
        var obj = things[i];
        cy.add({group: "nodes", data: {id:obj.name,label: obj.name}, weight: 0, position: {x:parseFloat(obj.x_coord),y:parseFloat(obj.y_coord)}, classes: 'background'});
           }
        cy.endBatch();
        setTimeout(function(){ cy.layout({name: 'preset', stop: function(){}}); console.log("done"); }, 1000);
        
    });
    forEach(["a","b","c"], function(item, index) {
  // Only when `this.async` is called does iteration becomes asynchronous. The
  // loop won't be continued until the `done` function is executed.
  console.log(item[0]);
  var done = this.async();
  // Continue in one second.
  setTimeout(done, 1000);
});

}