//main function for the success of malachi

function mainFunction(){

    BGMain = d3.select("#mainScene")
    
    newcharacter("test one",1600,5475,0.5,BGMain)
    
    function newcharacter(Cahrname,mainx,mainy,scale,BGMain){
        var testing = true
        
        //Adding body group to the scene
        BGMain
            .append("g")
            .attr("id",("ID"+(Cahrname.replace(/\s+/g, '_'))))
            .attr("transform-origin",(mainx +"px "+mainy+"px"))
            .attr("transform",(
                    ("scale("+scale+","+scale+") ")+ 
                    ("translate("+(-1*((1/scale)-1)*mainx)+","+(-1*((1/scale)-1)*mainy)+") ")+
                    ("rotate("+0+") ")))
        //get
        
    }
    

}


mainFunction()