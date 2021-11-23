//main function for the success of malachi
var mainFunction = function(){
 
    
    
    //creates svg and gives it background
    VidConfigs = {} 
    VidConfigs.SVGwidth = 1920/2
    VidConfigs.SVGheight = 1080/2
    VidConfigs.SVGborderMagrin = 20
    
    ider = 'id="OutterBorderBackGround"'
    adder = ';margin-left: 0;'
    

     //creates svg and gives it background
    d3.select("body").html(BorderBackGroundA(VidConfigs,ider,adder)) 

    BorderBackGroundMain = d3.select("#OutterBorderBackGround")
    
    var theChar = newchar(BorderBackGroundMain,"testernew")
    console.log(theChar)
    
//Main tool Function
    function newchar(BorderBackGroundMain,varname){
        var TestChar = {} 
        TestChar.name = varname
        TestChar.bodyparts = []
        TestChar.bodyjoints = []

        var testing = true
        
            //adds in parts useing CharPMM
            function newcharPMM(testing,TestChar,testing){
            //<!--Big Head Main --><circle cx="247.5" cy="145" r="125" style="fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1" /> 
            charPMM("P_Big_Head_MainP","circle",TestChar,testing,
                    ["cx",247.5,"cy",145,"style","fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1","r",125])

            //<!-- Big Head Sec --><rect x="190" y="120" rx="10" ry="10" width="120" height="120" style="fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1" />
            charPMM("P_Big_Head_Sec_P","rect",TestChar,testing,
                    ["x",190,'y',120,'rx',10,'ry',10,'width',120,'height',120,'style',"fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1"])

            //<!-- Chest Muscle --> <rect x="205" y="250" rx="10" ry="10" width="80" height="40" style="fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1" />
            charPMM("P_Chest_Muscle_P","rect",TestChar,testing,
                    ["x",205,'y',250,'rx',10,'ry',10,'width',80,'height',40,'style',"fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1"])   

            //<!-- Right BArm   --><rect x="270" y="250" rx="10" ry="10" width="80" height="20" style="fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1" transform = "rotate(45 280 260)"/>
            charPMM("P_Right_BArm___P","rect",TestChar,testing,
                    ["x",270,'y',250,'rx',10,'ry',10,'width',80,'height',20,'transform',"rotate(45 280 260)",'style',"fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1"])

            //<!-- Left BArm  --><rect x="200" y="250" rx="10" ry="10" width="80" height="20" style="fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1" transform = "rotate(135 210 260)"/>
            charPMM("P_Left_BArm____P","rect",TestChar,testing,
                    ["x",200,'y',250,'rx',10,'ry',10,'width',80,'height',20,'style',"fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1",'transform',"rotate(135 210 260)"])

            //<!-- Right FArm   --><rect x="310" y="295" rx="10" ry="10" width="50" height="20" style="fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1" transform = "rotate(135 320 305)" />
            charPMM("P_Right_FArm___P","rect",TestChar,testing,
                    ["x",310,'y',295,'rx',10,'ry',10,'width',50,'height',20,'style',"fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1",'transform',"rotate(135 320 305)"])

            //<!-- Left FArm  --><rect x="160" y="295" rx="10" ry="10" width="50" height="20" style="fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1" transform = "rotate(45 170 305)"/>
            charPMM("P_Left_FArm____P","rect",TestChar,testing,
                    ["x",160,'y',295,'rx',10,'ry',10,'width',50,'height',20,'style',"fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1",'transform',"rotate(45 170 305)"])

            //<!-- Core Muscle --><rect x="205" y="290" rx="10" ry="10" width="80" height="40" style="fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1" />
            charPMM("P_Core_Muscle__P","rect",TestChar,testing,
                    ["x",205,'y',290,'rx',10,'ry',10,'width',80,'height',40,'style',"fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1"])

            //<!-- Pelvis Muscl--><polygon points="190,380 300,380 290,330 200,330" style="fill:#cfe2f3ff;stroke:black;stroke-width:2" />
            charPMM("P_Pelvis_MuscleP","polygon",TestChar,testing,
                    ['points',"190,380 300,380 290,330 200,330",'style',"fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1"])

            //<!-- Left  Thigh --><rect x="200" y="360" rx="20" ry="20" width="40" height="90" style="fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1" />
            charPMM("P_Left_Thigh___P","rect",TestChar,testing,
                    ["x",200,'y',360,'rx',20,'ry',20,'width',40,'height',90,'style',"fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1"])

            //<!-- Right Thigh --><rect x="250" y="360" rx="20" ry="20" width="40" height="90" style="fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1" />
            charPMM("P_Right_Thigh__P","rect",TestChar,testing,
                    ["x",250,'y',360,'rx',20,'ry',20,'width',40,'height',90,'style',"fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1"])

            //<!-- Left  Calf  --><rect x="200" y="420" rx="20" ry="20" width="40" height="70" style="fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1" />
            charPMM("P_Left_Calf____P","rect",TestChar,testing,
                    ["x",200,'y',420,'rx',20,'ry',20,'width',40,'height',70,'style',"fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1"])

            //<!-- Right Calf  --><rect x="250" y="420" rx="20" ry="20" width="40" height="70" style="fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1" />
            charPMM("P_Right_Calf___P","rect",TestChar,testing,
                    ["x",250,'y',420,'rx',20,'ry',20,'width',40,'height',70,'style',"fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1"])

            //<!-- Left  Foot  --><rect x="200" y="470" rx="20" ry="20" width="40" height="50" style="fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1" />
            charPMM("P_Left_Foot____P","rect",TestChar,testing,
                    ["x",200,'y',470,'rx',20,'ry',20,'width',40,'height',50,'style',"fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1"])

            //<!-- Right Foot  --><rect x="250" y="470" rx="20" ry="20" width="40" height="50" style="fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1" />
            charPMM("P_Right_Foot___P","rect",TestChar,testing,
                    ["x",250,'y',470,'rx',20,'ry',20,'width',40,'height',50,'style',"fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1"])

            //<!-- Neck Muscle --><rect x="240" y="230" rx="5" ry="5" width="10" height="40" style="fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1" />
            charPMM("P_Neck_Muscle__P","rect",TestChar,testing,
                    ["x",240,'y',230,'rx',5,'ry',5,'width',10,'height',40,'style',"fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1"])
            
            //<!-- Back Bone --><rect x="240" y="270" rx="5" ry="5" width="10" height="80" style="fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1" />
            charPMM("P_Back_Bone____P","rect",TestChar,testing,
                    ["x",240,'y',270,'rx',5,'ry',5,'width',10,'height',80,'style',"fill:#cfe2f3ff;stroke:black;stroke-width:2;opacity:1"])
                
            } newcharPMM(testing,TestChar,testing)
            
            //adds in Joints useing CharJMM
            function newcharJMM(testing,TestChar,testing){
                
            //<!-- Neck Top    --><circle cx="245" cy="235" r="2" style="fill:red;stroke:black;stroke-width:0;opacity:1" />
            charJMM("J_Neck_Top____J",TestChar,testing,
                    ["cx",245,"cy",235,"r",2,"style","fill:red;stroke:black;stroke-width:0;opacity:1"],"P_Big_Head_MainP","P_Neck_Muscle__P")
                
            //<!-- Neck Bottom --><circle cx="245" cy="265" r="2" style="fill:red;stroke:black;stroke-width:0;opacity:1" />
            charJMM("J_Neck_Bottom_J",TestChar,testing,
                    ["cx",245,"cy",265,"r",2,"style","fill:red;stroke:black;stroke-width:0;opacity:1"],"P_Neck_Muscle__P","P_Chest_Muscle_P")
                
            //<!-- Back Top    --><circle cx="245" cy="275" r="2" style="fill:red;stroke:black;stroke-width:0;opacity:1" />
            charJMM("J_Back_Top____J",TestChar,testing,
                    ["cx",245,"cy",275,"r",2,"style","fill:red;stroke:black;stroke-width:0;opacity:1"],"P_Chest_Muscle_P","P_Back_Bone____P")        
                    
            //<!-- Back Middle <circle cx="245" cy="310" r="2" style="fill:red;stroke:black;stroke-width:0;opacity:1" />
            charJMM("J_Back_Middle_J",TestChar,testing,
                    ["cx",245,"cy",310,"r",2,"style","fill:red;stroke:black;stroke-width:0;opacity:1"],"P_Core_Muscle__P","P_Back_Bone____P")
                
            //<!-- Back Bottom --><circle cx="245" cy="345" r="2" style="fill:red;stroke:black;stroke-width:0;opacity:1" />
            charJMM("J_Back_Bottom_J",TestChar,testing,
                    ["cx",245,"cy",345,"r",2,"style","fill:red;stroke:black;stroke-width:0;opacity:1"],"P_Pelvis_MuscleP","P_Back_Bone____P")
                
            //<!-- LeftShoulder--><circle cx="210" cy="260" r="2" style="fill:red;stroke:black;stroke-width:0;opacity:1" />
            charJMM("J_LeftShoulderJ",TestChar,testing,
                    ["cx",210,"cy",260,"r",2,"style","fill:red;stroke:black;stroke-width:0;opacity:1"],"P_Chest_Muscle_P","P_Left_BArm____P")
                
            //<!-- RightShoulde--><circle cx="280" cy="260" r="2" style="fill:red;stroke:black;stro ke-width:0;opacity:1" />
            charJMM("J_RightShouldeJ",TestChar,testing,
                    ["cx",280,"cy",260,"r",2,"style","fill:red;stroke:black;stroke-width:0;opacity:1"],"P_Chest_Muscle_P","P_Right_BArm___P")
                
            //<!-- Left Elbow  --><circle cx="170" cy="305" r="2" style="fill:red;stroke:black;stroke-width:0;opacity:1" />
            charJMM("J_Left_Elbow__J",TestChar,testing,
                    ["cx",170,"cy",305,"r",2,"style","fill:red;stroke:black;stroke-width:0;opacity:1"],"P_Left_BArm____P","P_Left_FArm____P")
                
            //<!-- Right Elbow --><circle cx="320" cy="305" r="2" style="fill:red;stroke:black;stroke-width:0;opacity:1" />
            charJMM("J_Right_Elbow_J",TestChar,testing,
                    ["cx",320,"cy",305,"r",2,"style","fill:red;stroke:black;stroke-width:0;opacity:1"],"P_Right_BArm___P","P_Right_FArm___P")
                
            //<!-- LeftJelvis  --><circle cx="220" cy="380" r="2" style="fill:red;stroke:black;stroke-width:0;opacity:1" />
            charJMM("J_Left_Jelvis_J",TestChar,testing,
                    ["cx",220,"cy",380,"r",2,"style","fill:red;stroke:black;stroke-width:0;opacity:1"],"P_Pelvis_MuscleP","P_Left_Thigh___P")
            
            //<!-- RightJelvis --><circle cx="270" cy="380" r="2" style="fill:red;stroke:black;stroke-width:0;opacity:1" />
            charJMM("J_Right_JelvisJ",TestChar,testing,
                    ["cx",270,"cy",380,"r",2,"style","fill:red;stroke:black;stroke-width:0;opacity:1"],"P_Pelvis_MuscleP","P_Right_Thigh__P")
                
            //<!-- LeftKnees   --><circle cx="220" cy="435" r="2" style="fill:red;stroke:black;stroke-width:0;opacity:1" />
            charJMM("J_Left_Knees__J",TestChar,testing,
                    ["cx",220,"cy",435,"r",2,"style","fill:red;stroke:black;stroke-width:0;opacity:1"],"P_Left_Thigh___P","P_Left_Calf____P")
                
            //<!-- RightKnees  --><circle cx="270" cy="435" r="2" style="fill:red;stroke:black;stroke-width:0;opacity:1" />
            charJMM("J_Right_Knees_J",TestChar,testing,
                    ["cx",270,"cy",435,"r",2,"style","fill:red;stroke:black;stroke-width:0;opacity:1"],"P_Right_Thigh__P","P_Right_Calf___P")
                
            //<!-- LeftAnkle   --><circle cx="220" cy="485" r="2" style="fill:red;stroke:black;stroke-width:0;opacity:1" />
            charJMM("J_Left_Ankle__J",TestChar,testing,
                    ["cx",220,"cy",485,"r",2,"style","fill:red;stroke:black;stroke-width:0;opacity:1"],"P_Left_Calf____P","P_Left_Foot____P")
                
            //<!-- RightAnkle  --><circle cx="270" cy="485" r="2" style="fill:red;stroke:black;stroke-width:0;opacity:1" />
            charJMM("J_Right_Ankle_J",TestChar,testing,
                    ["cx",270,"cy",485,"r",2,"style","fill:red;stroke:black;stroke-width:0;opacity:1"],"P_Right_Calf___P","P_Right_Foot___P")
                
            } newcharJMM(testing,TestChar,testing)
            
            
        //console.log(arrayofAttrs)
        //console.log(arrayofAttrsObject)
        console.log(TestChar)

        for (i = 0; i < TestChar.bodyparts.length; i++) {
            addingCharPartClipBox(BorderBackGroundMain,TestChar,TestChar.bodyparts[i].partName,i,testing)
        } 
        
        for (i = 0; i < TestChar.bodyjoints.length; i++) {
            addingCharJointClipBox(BorderBackGroundMain,TestChar,TestChar.bodyjoints[i].jointName,i,testing)
        }
        return TestChar
    }
//Helper Function
    function addingCharPartClipBox(BorderBackGroundMain,char,charPart,bodynum,testing){
        var ClipBoxid = "CN_"+char.name+"_CP_"+char.bodyparts[bodynum].partName+"_ClipBox"
        
        if (testing){
            addingCharParts(BorderBackGroundMain,char.bodyparts[bodynum].partShape,char,charPart,bodynum,testing) 
        }else{
            BorderBackGroundMain.append("clipPath").attr("id",ClipBoxid)
            var clipPathBox = d3.select("#"+ClipBoxid)
            addingCharParts(clipPathBox,char.bodyparts[bodynum].partShape,char,charPart,bodynum,testing)
        }
    }
    function addingCharParts(clipPathBox,shape,char,charPart,bodynum,testing){
        var ShapeBoxid = "CN_"+char.name+"_CP_"+char.bodyparts[bodynum].partName+"_ShapeType_"+shape
        clipPathBox.append(shape).attr("id",ShapeBoxid)
        var i;
        for (i = 0; i < char.bodyparts[bodynum].partDime.length; i++) {
            fastaddattr(ShapeBoxid,char.bodyparts[bodynum].partDime[i].type,char.bodyparts[bodynum].partDime[i].valu)
        }     
    }
    function newbodypart(theChar,newbodypartname,newbodypartshape,newbodypartattr,testing){
        var newbodypartObject = {}
            newbodypartObject.partName = newbodypartname  
            newbodypartObject.partShape = newbodypartshape
            var partDime = []
            for (i = 0; i < newbodypartattr.length; i++) {
                var attrTemp = {}
                    attrTemp.type = newbodypartattr[i].type
                    attrTemp.valu = newbodypartattr[i].valu
                partDime.push(attrTemp)
            }
        newbodypartObject.partDime = partDime
        theChar.bodyparts.push(newbodypartObject)
            
    }
    
    function addingCharJointClipBox(BorderBackGroundMain,char,charPart,bodynum,testing){
        var ClipBoxid = "CN_"+char.name+"_CJ_"+char.bodyjoints[bodynum].jointName+"_ClipBox"
        
        if (testing){
            addingCharJoints(BorderBackGroundMain,char.bodyjoints[bodynum].jointShape,char,charPart,bodynum,testing) 
        }else{
            BorderBackGroundMain.append("clipPath").attr("id",ClipBoxid)
            var clipPathBox = d3.select("#"+ClipBoxid)
            addingCharJoints(clipPathBox,char.bodyjoints[bodynum].jointShape,char,charPart,bodynum,testing)
        }
    }
    function addingCharJoints(clipPathBox,shape,char,charPart,bodynum,testing){
        var ShapeBoxid = "CN_"+char.name+"_CJ_"+char.bodyjoints[bodynum].jointName+"_ShapeType_"+shape
        clipPathBox.append(shape).attr("id",ShapeBoxid)
        var i;
        for (i = 0; i < char.bodyjoints[bodynum].jointDime.length; i++) {
            fastaddattr(ShapeBoxid,char.bodyjoints[bodynum].jointDime[i].type,char.bodyjoints[bodynum].jointDime[i].valu)
        }     
    }
    function newbodyjoint(theChar,newbodypartname,newbodyjointattr,testing,leadPart,connPart){
        var newbodyjointObject = {}
            newbodyjointObject.jointName = newbodypartname  
            newbodyjointObject.jointShape ="circle"
            newbodyjointObject.jointType = "rev"
            newbodyjointObject.leadPart = leadPart
            newbodyjointObject.connPart = connPart
            var jointDime = []
            for (i = 0; i < newbodyjointattr.length; i++) {
                var attrTemp = {}
                    attrTemp.type = newbodyjointattr[i].type
                    attrTemp.valu = newbodyjointattr[i].valu
                jointDime.push(attrTemp)
            }
        newbodyjointObject.jointDime = jointDime
        theChar.bodyjoints.push(newbodyjointObject)
            
    }
    
    function givingAttrMain(arrayofAttrs){
        arrayofAttrsObject = []
        var i;
        for (i = 0; i < arrayofAttrs.length; i=i+2) {
           var attrTemp = {} 
            attrTemp.type = arrayofAttrs[i]
            attrTemp.valu = arrayofAttrs[i+1]
            arrayofAttrsObject.push(attrTemp)
        }
        return arrayofAttrsObject
    }
//Small Helper Function
    function charPMM(partName,partShape,TestChar,testing,arrayofAttrs){
        newbodypart(TestChar,partName,partShape,givingAttrMain(arrayofAttrs),testing)
    }
    function charJMM(partName,TestChar,testing,arrayofAttrs,leadPart,connPart){
        newbodyjoint(TestChar,partName,givingAttrMain(arrayofAttrs),testing,leadPart,connPart)
    }
    function fastaddattr(id,attrb,attrv){
      d3.select("#"+id).attr(attrb,attrv)  
    }
//BorderBackGround Stuff
    function BorderBackGroundA(VidConfigs,ider,adder){
    //width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" preserveAspectRatio="xMidYMid" viewBox="0 0 -'+VidConfigs.SVGheight+' '+VidConfigs.SVGwidth+'">
    return '<svg '+ider+' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#f1f2f3;display:block;z-index:1;position:relative'+adder+'" width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'" preserveAspectRatio="xMidYMid" viewBox="0 0 -'+VidConfigs.SVGheight+' '+VidConfigs.SVGwidth+'"><defs><pattern id="pid-0.5261205252211978" x="0" y="0" width="186.88" height="186.88" patternUnits="userSpaceOnUse"><g transform="scale(0.73)"><defs><g id="stripe-0.25788878211222865"><path d="M 128 -128 L 213.33333333333331 -128 L -128 213.33333333333331 L -128 128 Z" fill="#f9ca24"></path><path d="M 384 -128 L 384 -42.66666666666667 L -42.66666666666667 384 L -128 384 Z" fill="#f9ca24"></path><path d="M 213.33333333333331 -128 L 298.66666666666663 -128 L -128 298.66666666666663 L -128 213.33333333333331 Z" fill="#22a6b3"></path><path d="M 384 -42.66666666666667 L 384 42.66666666666666 L 42.66666666666666 384 L -42.66666666666667 384 Z" fill="#22a6b3"></path><path d="M 298.66666666666663 -128 L 384 -128 L -128 384 L -128 298.66666666666663 Z" fill="#ffffff"></path><path d="M 384 42.66666666666666 L 384 128 L 128 384 L 42.66666666666666 384 Z" fill="#ffffff"></path></g></defs><g transform="translate(81.0877 0)"><use xlink:href="#stripe-0.25788878211222865" x="-256" y="0"></use><use xlink:href="#stripe-0.25788878211222865" x="0" y="0"></use> <animateTransform attributeName="transform" type="translate" keyTimes="0;1" repeatCount="indefinite" dur="4.761904761904762s" values="0 0; 256 0"></animateTransform> </g></g> </pattern></defs><rect x="0" y="0" width="'+VidConfigs.SVGwidth+'" height="'+VidConfigs.SVGheight+'"  fill="url(#pid-0.5261205252211978)"></rect><rect x= "'+VidConfigs.SVGborderMagrin+'" y="'+VidConfigs.SVGborderMagrin+'" width="'+(VidConfigs.SVGwidth - (VidConfigs.SVGborderMagrin*2))+'" height="'+ (VidConfigs.SVGheight - (VidConfigs.SVGborderMagrin*2)) +'" style="fill:white;stroke-width:4;stroke:#dcdde1" /></svg><script src="https://d3js.org/d3.v5.min.js"></script><link href="style.css" rel="stylesheet" type="text/css"><script type="text/javascript" src="script.js"></script>'

    } 

    
}
mainFunction()