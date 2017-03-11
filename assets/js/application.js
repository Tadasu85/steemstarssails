var steemaccount = "";
var cy;


document.addEventListener("DOMContentLoaded", function(event) {

var cy = window.cy = cytoscape({
    
    container: document.getElementById('cy'),
    boxSelectionEnabled: false,
    autounselectify: false,
    autoungrabify: true,
    textureOnViewport: false,
    hideEdgesOnViewport: false,
    zoom: 1,
    pixelRatio: 1,
    layout: {name: 'cose'},
                
    style: [{
        selector: 'node',
            style: {
                'height': 10,
                'width': 10,
                'background-color': 'yellow',
                'label': 'data(label)',
                'color': '#FFFFFF',
                'text-transform': 'lowercase',
                'font-size': 12,
                'font-weight': 'bold',
                'font-style': 'italic',
                'font-family': '"Times New Roman", Georgia, Serif',
                'text-shadow-blur': 100,
                'shadow-blur': 10,
                'background-opacity': 0.6,
                'min-zoomed-font-size': 16
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
                'height': 20,
                'width': 20,
                'label': 'data(label)',
                'font-size': 18,
                'color': '#FFFFFF',
                'text-transform': 'uppercase',
                'font-weight': 'bold',
                'font-style': 'italic',
                'font-family': '"Times New Roman", Georgia, Serif',
                'text-shadow-blur': 100,
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
var selectedNode = event.cyTarget.attr("id");
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
    //alert(event.cyTarget.attr("id"));
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
/*configureHUD();
addFollowers();
addFollows();
*/

//cy.$('.mutual').layout( {name: 'cola', randomize: true, edgeLength: function( node ){ return 10; }});

setTimeout(function(){ cy.layout({name: 'cola', stop: function(){}});  }, 5000);

});
function addFollowers(){
cy.getElementById(steemaccount).addClass('parent');
//console.log("adding followers");
steem.api.getFollowers(steemaccount, 0, "blog", 100, function(err, result) {
//console.log(err + result);
   cy.startBatch();
   for (var i = 0; i < result.length; i++) {
       var obj = result[i].follower;
       cy.add({group: "nodes", data: {id: obj, label: obj}, weight: 0, position: {}});
       cy.add({group: "edges", data: {source: obj, target: steemaccount}}).addClass('followersedge');
       cy.getElementById(obj).addClass('followers');
        }
        cy.endBatch();
        //console.log("Followers:" + followerS.length);
        gotfollowers = true;
});
}
function addFollows(){

steem.api.getFollowing(steemaccount, 0, "blog", 100, function(err, result) {
//console.log(err + "adding follows");
//$.getJSON('/accounts/' + steemaccount + '/follows.json', function(followS) {
          cy.startBatch();
           //for (var prop in followS) {
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
           //console.log("Follows:" + followS.length);
           gotfollows = true;
    });
}
function addEdges(){
//console.log("adding edges");
cy.startBatch();
cy.nodes().forEach(function( ele ){
steem.api.getFollowing(ele.id(), 0, "blog", 100, function(err, result) {
        
        for (var i = 0; i < result.length; i++) {
           var obj = result[i].following;
               if (cy.getElementById(obj).length==1){
                   cy.add({group: "edges", data: {source: obj, target: ele.id()}}).addClass('secondrelative');
               }
        }
        //console.log(ele.id());
       // console.log(err, result);
       
        });
        //console.log(ele);
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
$("#global-hud-top").html("Research: " + globalResearch+" Power: "+globalPower+" Materials: "+globalMaterials+
" Population: "+globalPopulation+" Ships: "+globalShips+" Embassies: "+globalEmbassies);

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
// function testing(){

// steem.api.getFollowers(steemaccount, 0, "blog", 100, function(err, result1) {
//     console.log(err, result1);
    
//     if (result1.length==100){
//         steem.api.getFollowers(steemaccount, result1[99].follower, "blog", 100, function(err, result2) {
//         console.log(err, result2);
//         });        
//     }

// });
// }