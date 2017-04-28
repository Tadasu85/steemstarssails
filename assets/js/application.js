var steemaccount = "";
var cy;
var home_x_coord;
var home_y_coord;




document.addEventListener("DOMContentLoaded", function(event) {
    
    
    

if (window.location.pathname=='/permission/galaxy') {
io.socket.get('/planet/?name='+steemaccount, {limit: 1}, function(things, jwr) {
        //console.log(things, jwr);
        home_x_coord = parseFloat(things[0].x_coord);
        home_y_coord = parseFloat(things[0].y_coord);
    });
    
setTimeout(function(){

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
            position: { x: home_x_coord, y: home_y_coord }, 
            classes: 'background'
              }]
});
 }, 500);
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



function testing(){
    function allDone(notAborted, arr) {
        console.log("done", notAborted, arr);
        for(var obj = 0; obj<arr.length;obj++){
            console.log(arr[obj].name);
            cy.add({group: "nodes", data: {id: arr[obj].name, label: arr[obj].name}, position: {x: parseFloat(arr[obj].x_coord), y: parseFloat(arr[obj].y_coord)}});
        }
        cy.layout({name: 'preset', stop: function(){}});
    }
    io.socket.get('/edge/', {limit: 1000}, function(things, jwr) 
    {
        console.log(things, jwr);
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