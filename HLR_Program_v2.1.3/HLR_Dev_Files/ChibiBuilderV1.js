//main function for the success of GreenTree

function mainFunction(){
    
    //Need More eyebrows, only 1 and 2 work
    
    
    var FSTS = d3.select("#Full_SVG_Test_Space")
    
    
    //polygonEquation("1000.000 6507.000, 960.000 6396.000, 1072.000 6259.000, 1176.000 6312.000, 1230.000 6429.000, 1203.000 6495.000, 1119.000 6501.000, 1071.000 6501.000, 1000.000 6507.000",1000,6507)
    
    
    
    
    
    
    
    
    
    
    
    //Help Pikcker
    function char_1(Char,c1,c2){
        char_1_Eye_Color(Char)
        function char_1_Eye_Color(Char){
        //Eye Color LeftYEye and Right
        Char.UpperBody.FullHead.Eyes.LeftYEye.colorGroup = []
        Char.UpperBody.FullHead.Eyes.RightEye.colorGroup = []
            var a1colo = {};
                a1colo.type = 2 // 1 = linearGradient , 2 = radialGradient
                a1colo.color = []
                a1colo.color.push({color:"white", offset:0, opacity:1}) 
                //a1colo.color.push({color:"gray", offset:50, opacity:1}) 
                a1colo.color.push({color:"white", offset:100, opacity:1})
            Char.UpperBody.FullHead.Eyes.LeftYEye.colorGroup.push(a1colo)
            Char.UpperBody.FullHead.Eyes.RightEye.colorGroup.push(a1colo)
            var a2colo = {};
                a2colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                a2colo.color = []
                a2colo.color.push({color:c1, offset:0, opacity:1}) 
                //a2colo.color.push({color:"gray", offset:50, opacity:1}) 
                a2colo.color.push({color:"white", offset:100, opacity:1})
            Char.UpperBody.FullHead.Eyes.LeftYEye.colorGroup.push(a2colo)
            Char.UpperBody.FullHead.Eyes.RightEye.colorGroup.push(a2colo)
            var a3colo = {};
                a3colo.type = 2 // 1 = linearGradient , 2 = radialGradient
                a3colo.color = []
                a3colo.color.push({color:"white", offset:0, opacity:1}) 
                //a3colo.color.push({color:"gray", offset:50, opacity:1}) 
                a3colo.color.push({color:"white", offset:100, opacity:1})
            Char.UpperBody.FullHead.Eyes.LeftYEye.colorGroup.push(a3colo)
            Char.UpperBody.FullHead.Eyes.RightEye.colorGroup.push(a3colo)
            var a4colo = {};
                a4colo.type = 2 // 1 = linearGradient , 2 = radialGradient
                a4colo.color = []
                a4colo.color.push({color:c2, offset:0, opacity:1}) 
                //a4colo.color.push({color:"gray", offset:50, opacity:1}) 
                a4colo.color.push({color:c2, offset:100, opacity:1})
            Char.UpperBody.FullHead.Eyes.LeftYEye.colorGroup.push(a4colo)
            Char.UpperBody.FullHead.Eyes.RightEye.colorGroup.push(a4colo)
        }
        
        char_1_FrontHair_Color(Char)
        function char_1_FrontHair_Color(Char){
        Char.UpperBody.FullHead.HairandAcc.FrontHair.colorGroup = []
            var a1colo = {};
                a1colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                a1colo.color = []
                a1colo.color.push({color:c2, offset:0, opacity:1})
                a1colo.color.push({color:"#f9dc9b", offset:30, opacity:1}) 
                a1colo.color.push({color:"#804727", offset:60, opacity:1}) 
                a1colo.color.push({color:"#38111d", offset:100, opacity:1})
            Char.UpperBody.FullHead.HairandAcc.FrontHair.colorGroup.push(a1colo)
            var a2colo = {};
                a2colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                a2colo.color = []
                a2colo.color.push({color:c2, offset:0, opacity:1}) 
                a2colo.color.push({color:"#f9dc9b", offset:50, opacity:1}) 
                a2colo.color.push({color:"#f9dc9b", offset:100, opacity:1})
            Char.UpperBody.FullHead.HairandAcc.FrontHair.colorGroup.push(a2colo)
        }
        
        char_1_BackHair_Color(Char)
        function char_1_BackHair_Color(Char){
        Char.UpperBody.FullHead.HairandAcc.BackHair.colorGroup = []
            var a1colo = {};
                a1colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                a1colo.color = []
                a1colo.color.push({color:c2, offset:0, opacity:1})
                a1colo.color.push({color:"#f9dc9b", offset:24, opacity:1}) 
                a1colo.color.push({color:"#804727", offset:36, opacity:1}) 
                a1colo.color.push({color:"#f9dc9b", offset:48, opacity:1}) 
                a1colo.color.push({color:"#804727", offset:60, opacity:1}) 
                a1colo.color.push({color:"#38111d", offset:100, opacity:1})
                Char.UpperBody.FullHead.HairandAcc.BackHair.colorGroup.push(a1colo)
                var a2colo = {};
                    a2colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                    a2colo.color = []
                    a2colo.color.push({color:"#ffb6c1", offset:0, opacity:1}) 
                    a2colo.color.push({color:"#f9dc9b", offset:100, opacity:1})
                Char.UpperBody.FullHead.HairandAcc.BackHair.colorGroup.push(a2colo)
                var a3colo = {};
                    a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                    a3colo.color = []
                    a3colo.color.push({color:"#ffb6c1", offset:0, opacity:1}) 
                    a3colo.color.push({color:"#f9dc9b", offset:100, opacity:1})
                Char.UpperBody.FullHead.HairandAcc.BackHair.colorGroup.push(a3colo)
                var a4colo = {};
                    a4colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                    a4colo.color = []
                    a4colo.color.push({color:"#fdf5e2", offset:0, opacity:1}) 
                    a4colo.color.push({color:"#fdf5e2", offset:100, opacity:1})
                Char.UpperBody.FullHead.HairandAcc.BackHair.colorGroup.push(a4colo)
                var a5colo = {};
                    a5colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                    a5colo.color = []
                    a5colo.color.push({color:"#fdf5e2", offset:0, opacity:1}) 
                    a5colo.color.push({color:"#fdf5e2", offset:100, opacity:1})
                Char.UpperBody.FullHead.HairandAcc.BackHair.colorGroup.push(a5colo)             
        }
        
        char_1_Accesso_Color(Char)
        function char_1_Accesso_Color(Char){
            Char.UpperBody.FullHead.HairandAcc.Accesso.colorGroup = []
                var a1colo = {};
                    a1colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                    a1colo.color = []
                    a1colo.color.push({color:"#00d2d3", offset:0, opacity:1}) 
                    a1colo.color.push({color:"#8ce2e9", offset:100, opacity:1})
                Char.UpperBody.FullHead.HairandAcc.Accesso.colorGroup.push(a1colo)
                var a2colo = {};
                    a2colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                    a2colo.color = []
                    a2colo.color.push({color:"gray", offset:0, opacity:1}) 
                    a2colo.color.push({color:"gray", offset:100, opacity:1})
                Char.UpperBody.FullHead.HairandAcc.Accesso.colorGroup.push(a2colo)
                var a3colo = {};
                    a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                    a3colo.color = []
                    a3colo.color.push({color:"gray", offset:0, opacity:1}) 
                    a3colo.color.push({color:"gray", offset:100, opacity:1})
                Char.UpperBody.FullHead.HairandAcc.Accesso.colorGroup.push(a3colo)
                var a4colo = {};
                    a4colo.type = 1 // 1 = linearGradient , 2 = radialGradient 
                    a4colo.color = []
                    a4colo.color.push({color:"#8ce2e9", offset:0, opacity:1})
                    a4colo.color.push({color:"#8ce2e9", offset:60, opacity:1}) 
                    a4colo.color.push({color:"#5f27cd", offset:100, opacity:1})
                Char.UpperBody.FullHead.HairandAcc.Accesso.colorGroup.push(a4colo)
                var a5colo = {};
                    a5colo.type = 2 // 1 = linearGradient , 2 = radialGradient 
                    a5colo.color = []
                    a5colo.color.push({color:"#f368e0", offset:0, opacity:1}) 
                    a5colo.color.push({color:"#8ce2e9", offset:60, opacity:1})
                    a5colo.color.push({color:"#8ce2e9", offset:100, opacity:1})
                Char.UpperBody.FullHead.HairandAcc.Accesso.colorGroup.push(a5colo)
        }
        
        char_1_Shirt_Color(Char)
        function char_1_Shirt_Color(Char){
        Char.UpperBody.ChestandArms.Shirt.colorGroup = []
            var a1colo = {};
                a1colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                a1colo.color = []
                a1colo.color.push({color:"#182C61", offset:0, opacity:1}) 
                a1colo.color.push({color:"#82589F", offset:100, opacity:1})
            Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a1colo)
            var a2colo = {};
                a2colo.type = 2 // 1 = linearGradient , 2 = radialGradient
                a2colo.color = []
                a2colo.color.push({color:"Black", offset:0, opacity:1})
                a2colo.color.push({color:"Black", offset:100, opacity:1}) 
            Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a2colo)
            var a3colo = {};
                a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                a3colo.color = []
                a3colo.color.push({color:"#f6b3b6", offset:0, opacity:1}) 
                a3colo.color.push({color:"#f6b3b6", offset:100, opacity:1})
            Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a3colo)
            var a3colo = {};
                a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                a3colo.color = []
                a3colo.color.push({color:"#182C61", offset:0, opacity:1}) 
                a3colo.color.push({color:"#82589F", offset:100, opacity:1})
            Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a3colo)
            var a3colo = {};
                a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                a3colo.color = []
                a3colo.color.push({color:"#FC427B", offset:0, opacity:1}) 
                a3colo.color.push({color:"#FC427B", offset:100, opacity:1})
            Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a3colo)
            var a3colo = {};
                a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                a3colo.color = []
                a3colo.color.push({color:"#D6A2E8", offset:0, opacity:1}) 
                a3colo.color.push({color:"#D6A2E8", offset:100, opacity:1})
            Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a3colo)
            var a3colo = {};
                a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                a3colo.color = []
                a3colo.color.push({color:"#82589F", offset:0, opacity:1}) 
                a3colo.color.push({color:"#82589F", offset:100, opacity:1})
            Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a3colo)
            var a3colo = {};
                a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                a3colo.color = []
                a3colo.color.push({color:"#6D214F", offset:0, opacity:1}) 
                a3colo.color.push({color:"#6D214F", offset:100, opacity:1})
            Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a3colo)
            var a3colo = {};
                a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                a3colo.color = []
                a3colo.color.push({color:"#6D214F", offset:0, opacity:1}) 
                a3colo.color.push({color:"#6D214F", offset:100, opacity:1})
            Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a3colo)
            }
        
        return Char
    }
    
    
    function char_1_General_selection(Char,f,b,a,l,r,m){
            Char.UpperBody.FullHead.HairandAcc.FrontHair.ver = f //9
            Char.UpperBody.FullHead.HairandAcc.BackHair.ver = b //7
            Char.UpperBody.FullHead.HairandAcc.Accesso.ver = a //1
            Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.ver = l//8
            Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.ver = r //8
            Char.UpperBody.FullHead.eyebrowsandmouth.mouth.ver = m //19
         return Char
        }
    
    
    
    
    
    
    
    
    
    
    
    
    Char = ChibiBlueprinter("john","A")

    Char.data.scalX = -0.75;
    Char.data.scalY = 0.75;
    Char.data.tranX = -2000
    
    //working on front hair
    Char.UpperBody.FullHead.HairandAcc.FrontHair.ver = 4 //9
    Char.UpperBody.FullHead.HairandAcc.BackHair.ver = 2 //7
    Char.UpperBody.FullHead.HairandAcc.Accesso.ver = 1 //1
    Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.ver = 2 //8
    Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.ver = 8 //8
    Char.UpperBody.FullHead.eyebrowsandmouth.mouth.ver = 2 //19
    Char.UpperBody.ChestandArms.Body.ver = 1
    
    Char.UpperBody.FullHead.Eyes.RightEye.pos = false
    Char.UpperBody.FullHead.Eyes.LeftYEye.pos = false
    
    
    
    
    //var JSONChar = JSON.stringify(Char);
    
    //console.log(JSONChar)
     
    ChibiBuilder(FSTS,Char)

    
    
    
    ChibiAnimator(Char)
    
    
    
    //Create and give look to
    backUpDancerA = char_1(ChibiBlueprinter("backUpDancer","A"),"#cc6ab1","#a92faf")
    backUpDancerA.data.tranX = 00
    backUpDancerA = char_1_General_selection(backUpDancerA,2,3,1,4,4,2) //(Char,f,b,a,l,r,m)
    ChibiBuilder(FSTS,backUpDancerA)
    
    backUpDancerB = char_1(ChibiBlueprinter("backUpDancer","B"),"#25CCF7","#1B9CFC")
    backUpDancerB.data.tranX = 4000
    backUpDancerB = char_1_General_selection(backUpDancerB,3,5,1,4,4,2) //(Char,f,b,a,l,r,m)
    ChibiBuilder(FSTS,backUpDancerB)

    backUpDancerC = char_1(ChibiBlueprinter("backUpDancer","C"),"#b8e994","#78e08f")
    backUpDancerC.data.tranX = 8000
    backUpDancerC = char_1_General_selection(backUpDancerC,4,4,1,4,4,2) //(Char,f,b,a,l,r,m)
    ChibiBuilder(FSTS,backUpDancerC)
    
    Char.UpperBody.ChestandArms.LeftY.elementB.animate.rotate(20,1000,100)
    
    
    
    //Function to make the Blueprint and The Chibi
        
        //The Blueprint maker
        function ChibiBlueprinter(name,id){

            if (id == undefined){id = ""}

            var Char = {}
            Char.element = {}; 
            Char.data = {};
            Char.name = name +"_ID"+ id;
            Char.id = id;
            Char.data.id = ("FullChar_"+Char.name);
            Char.data.origX = 1600;
            Char.data.origY = 5475;
            Char.data.scalX = 0.5;
            Char.data.scalY = 0.5;
            Char.data.tranX = 0;
            Char.data.tranY = 0;
            Char.data.rotat = 0;

            
            blue_UpperBody(Char)
                blue_FullHead(Char)
                    blue_Head(Char)
                    blue_Eyes(Char)
                        blue_LeftYEye(Char)
                        blue_RightEye(Char)
                    blue_HairandAcc(Char)
                        blue_FrontHair(Char)
                        blue_BackHair(Char)
                        blue_RearHair(Char)
                        blue_PonyHair(Char)
                        blue_TipHair(Char)
                        blue_HairAccessories(Char)
                    blue_Eyebrowsandmouth(Char)
                        blue_LeftYeyebrows(Char)
                        blue_Righteyebrows(Char)
                        blue_Mouth(Char)
                blue_ChestandArms(Char)
                    blue_Body(Char)
                    blue_Shirt(Char)
                    blue_Sleeves_arms(Char)
                        blue_LeftYSleeves_arms(Char)
                        blue_RightSleeves_arms(Char)
                    blue_Gloves_Hand(Char)
                    blue_Belt_Waist(Char)
            
            blue_LowerBody(Char)
                blue_RightLeg(Char)
                blue_LeftYLeg(Char)
            
            console.log("ChibiBlueprinter Output of Char:"+Char.name+":",Char)
            
            return Char
            
            //Maker Parts
            function blue_UpperBody(Char){
                Char.UpperBody = {};
                    Char.UpperBody.element = {}
                    Char.UpperBody.data = {};
                        Char.UpperBody.data.id = ("UpperBody_"+Char.name);
                        Char.UpperBody.data.origX = 1600;
                        Char.UpperBody.data.origY = 5475;
                        Char.UpperBody.data.scalX = 1;
                        Char.UpperBody.data.scalY = 1;
                        Char.UpperBody.data.tranX = 0;
                        Char.UpperBody.data.tranY = 0;
                        Char.UpperBody.data.rotat = 0;
            }
            function blue_FullHead(Char){
                Char.UpperBody.FullHead = {}
                    Char.UpperBody.FullHead.element = {}
                    Char.UpperBody.FullHead.data = {};
                        Char.UpperBody.FullHead.data.id = ("FullHead_"+Char.name);
                        Char.UpperBody.FullHead.data.origX = 1600;
                        Char.UpperBody.FullHead.data.origY = 3750;
                        Char.UpperBody.FullHead.data.scalX = 1;
                        Char.UpperBody.FullHead.data.scalY = 1;
                        Char.UpperBody.FullHead.data.tranX = 0;
                        Char.UpperBody.FullHead.data.tranY = 0;
                        Char.UpperBody.FullHead.data.rotat = 0;
            }
            function blue_Head(Char){
                Char.UpperBody.FullHead.Head = {}
                    Char.UpperBody.FullHead.Head.element = {}
                    Char.UpperBody.FullHead.Head.data = {};
                        Char.UpperBody.FullHead.Head.data.ver = 1
                        Char.UpperBody.FullHead.Head.data.id = ("Head_"+Char.name);
                        Char.UpperBody.FullHead.Head.data.origX = 1600;
                        Char.UpperBody.FullHead.Head.data.origY = 3750;
                        Char.UpperBody.FullHead.Head.data.scalX = 1;
                        Char.UpperBody.FullHead.Head.data.scalY = 1;
                        Char.UpperBody.FullHead.Head.data.tranX = 0;
                        Char.UpperBody.FullHead.Head.data.tranY = 90;
                        Char.UpperBody.FullHead.Head.data.rotat = 0;   
            }
            function blue_Eyes(Char){
                Char.UpperBody.FullHead.Eyes = {}
                    Char.UpperBody.FullHead.Eyes.element = {}
                    Char.UpperBody.FullHead.Eyes.data = {};
                        Char.UpperBody.FullHead.Eyes.data.id = ("FullEyes_"+Char.name);
                        Char.UpperBody.FullHead.Eyes.data.origX = 1600;
                        Char.UpperBody.FullHead.Eyes.data.origY = 3750;
                        Char.UpperBody.FullHead.Eyes.data.scalX = 1;
                        Char.UpperBody.FullHead.Eyes.data.scalY = 1;
                        Char.UpperBody.FullHead.Eyes.data.tranX = 0;
                        Char.UpperBody.FullHead.Eyes.data.tranY = 90;
                        Char.UpperBody.FullHead.Eyes.data.rotat = 0;


            }
            function blue_LeftYEye(Char){
                Char.UpperBody.FullHead.Eyes.LeftYEye =  {}
                    Char.UpperBody.FullHead.Eyes.LeftYEye.element = {}
                    Char.UpperBody.FullHead.Eyes.LeftYEye.ver = 1
                    Char.UpperBody.FullHead.Eyes.LeftYEye.pos = false
                    Char.UpperBody.FullHead.Eyes.LeftYEye.data = {}
                        Char.UpperBody.FullHead.Eyes.LeftYEye.data.id = ("LeftYEyes_"+Char.name);
                        Char.UpperBody.FullHead.Eyes.LeftYEye.data.origX = 1650;
                        Char.UpperBody.FullHead.Eyes.LeftYEye.data.origY = 3750;
                        Char.UpperBody.FullHead.Eyes.LeftYEye.data.scalX = 1;
                        Char.UpperBody.FullHead.Eyes.LeftYEye.data.scalY = 1;
                        Char.UpperBody.FullHead.Eyes.LeftYEye.data.tranX = 0;
                        Char.UpperBody.FullHead.Eyes.LeftYEye.data.tranY = 0;
                        Char.UpperBody.FullHead.Eyes.LeftYEye.data.rotat = 0;
                    Char.UpperBody.FullHead.Eyes.LeftYEye.colortype = false // 1 = linearGradient , 2 = radialGradient , 3 = plain fill (color 1), 4 = plain fill (color 2
                        Char.UpperBody.FullHead.Eyes.LeftYEye.color = []
                            Char.UpperBody.FullHead.Eyes.LeftYEye.color.push({color:"red", offset:0, opacity:1})                   
                        Char.UpperBody.FullHead.Eyes.LeftYEye.colorGroup = []
                        var a1colo = {};
                            a1colo.type = 2 // 1 = linearGradient , 2 = radialGradient
                            a1colo.color = []
                            a1colo.color.push({color:"white", offset:0, opacity:1}) 
                            //a1colo.color.push({color:"gray", offset:50, opacity:1}) 
                            a1colo.color.push({color:"white", offset:100, opacity:1})
                        Char.UpperBody.FullHead.Eyes.LeftYEye.colorGroup.push(a1colo)
                        var a2colo = {};
                            a2colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                            a2colo.color = []
                            a2colo.color.push({color:"white", offset:0, opacity:1}) 
                            //a2colo.color.push({color:"gray", offset:50, opacity:1}) 
                            a2colo.color.push({color:"#cc6ab1", offset:100, opacity:1})
                        Char.UpperBody.FullHead.Eyes.LeftYEye.colorGroup.push(a2colo)
                        var a3colo = {};
                            a3colo.type = 2 // 1 = linearGradient , 2 = radialGradient
                            a3colo.color = []
                            a3colo.color.push({color:"white", offset:0, opacity:1}) 
                            //a3colo.color.push({color:"gray", offset:50, opacity:1}) 
                            a3colo.color.push({color:"white", offset:100, opacity:1})
                        Char.UpperBody.FullHead.Eyes.LeftYEye.colorGroup.push(a3colo)
                        var a4colo = {};
                            a4colo.type = 2 // 1 = linearGradient , 2 = radialGradient
                            a4colo.color = []
                            a4colo.color.push({color:"#b178ff", offset:0, opacity:1}) 
                            //a4colo.color.push({color:"gray", offset:50, opacity:1}) 
                            a4colo.color.push({color:"#b178ff", offset:100, opacity:1})
                        Char.UpperBody.FullHead.Eyes.LeftYEye.colorGroup.push(a4colo)
            }
            function blue_RightEye(Char){
                Char.UpperBody.FullHead.Eyes.RightEye =  {}
                    Char.UpperBody.FullHead.Eyes.RightEye.element = {}
                    Char.UpperBody.FullHead.Eyes.RightEye.ver = 1
                    Char.UpperBody.FullHead.Eyes.RightEye.pos = false
                    Char.UpperBody.FullHead.Eyes.RightEye.data = {}
                        Char.UpperBody.FullHead.Eyes.RightEye.data.id = ("RightEyes_"+Char.name);
                        Char.UpperBody.FullHead.Eyes.RightEye.data.origX = 1650;
                        Char.UpperBody.FullHead.Eyes.RightEye.data.origY = 3750;
                        Char.UpperBody.FullHead.Eyes.RightEye.data.scalX = 1;
                        Char.UpperBody.FullHead.Eyes.RightEye.data.scalY = 1;
                        Char.UpperBody.FullHead.Eyes.RightEye.data.tranX = 0;
                        Char.UpperBody.FullHead.Eyes.RightEye.data.tranY = 0;
                        Char.UpperBody.FullHead.Eyes.RightEye.data.rotat = 0;
                    Char.UpperBody.FullHead.Eyes.RightEye.colortype = false // 1 = linearGradient , 2 = radialGradient , 3 = plain fill (color 1), 4 = plain fill (color 2
                        Char.UpperBody.FullHead.Eyes.RightEye.color = []
                            Char.UpperBody.FullHead.Eyes.RightEye.color.push({color:"red", offset:0, opacity:1})                   
                        Char.UpperBody.FullHead.Eyes.RightEye.colorGroup = []
                        var a1colo = {};
                            a1colo.type = 2 // 1 = linearGradient , 2 = radialGradient
                            a1colo.color = []
                            a1colo.color.push({color:"white", offset:0, opacity:1}) 
                            //a1colo.color.push({color:"gray", offset:50, opacity:1}) 
                            a1colo.color.push({color:"white", offset:100, opacity:1})
                        Char.UpperBody.FullHead.Eyes.RightEye.colorGroup.push(a1colo)
                        var a2colo = {};
                            a2colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                            a2colo.color = []   
                            a2colo.color.push({color:"white", offset:0, opacity:1}) 
                            //a2colo.color.push({color:"gray", offset:50, opacity:1}) 
                            a2colo.color.push({color:"#cc6ab1", offset:100, opacity:1})
                        Char.UpperBody.FullHead.Eyes.RightEye.colorGroup.push(a2colo)
                        var a3colo = {};
                            a3colo.type = 2 // 1 = linearGradient , 2 = radialGradient
                            a3colo.color = []
                            a3colo.color.push({color:"white", offset:0, opacity:1}) 
                            //a3colo.color.push({color:"gray", offset:50, opacity:1}) 
                            a3colo.color.push({color:"white", offset:100, opacity:1})
                        Char.UpperBody.FullHead.Eyes.RightEye.colorGroup.push(a3colo)
                        var a4colo = {};
                            a4colo.type = 2 // 1 = linearGradient , 2 = radialGradient
                            a4colo.color = []
                            a4colo.color.push({color:"#b178ff", offset:0, opacity:1}) 
                            //a4colo.color.push({color:"gray", offset:50, opacity:1}) 
                            a4colo.color.push({color:"#b178ff", offset:100, opacity:1})
                        Char.UpperBody.FullHead.Eyes.RightEye.colorGroup.push(a4colo)
            }
            function blue_HairandAcc(Char){
            Char.UpperBody.FullHead.HairandAcc = {}
                Char.UpperBody.FullHead.HairandAcc.element = {}
                Char.UpperBody.FullHead.HairandAcc.data = {};
                    Char.UpperBody.FullHead.HairandAcc.data.ver = 1
                    Char.UpperBody.FullHead.HairandAcc.data.id = ("HairAndAccess_"+Char.name);
                    Char.UpperBody.FullHead.HairandAcc.data.origX = 1600;
                    Char.UpperBody.FullHead.HairandAcc.data.origY = 3750;
                    Char.UpperBody.FullHead.HairandAcc.data.scalX = 1;
                    Char.UpperBody.FullHead.HairandAcc.data.scalY = 1;
                    Char.UpperBody.FullHead.HairandAcc.data.tranX = 0;
                    Char.UpperBody.FullHead.HairandAcc.data.tranY = 0;
                    Char.UpperBody.FullHead.HairandAcc.data.rotat = 0;
            }
            function blue_FrontHair(Char){
               Char.UpperBody.FullHead.HairandAcc.FrontHair = {}
                    Char.UpperBody.FullHead.HairandAcc.FrontHair.element = {}
                    Char.UpperBody.FullHead.HairandAcc.FrontHair.ver = 1
                    Char.UpperBody.FullHead.HairandAcc.FrontHair.data = {}
                        Char.UpperBody.FullHead.HairandAcc.FrontHair.data.id = ("FrontHair_"+Char.name);
                        Char.UpperBody.FullHead.HairandAcc.FrontHair.data.origX = 1650;
                        Char.UpperBody.FullHead.HairandAcc.FrontHair.data.origY = 3750;
                        Char.UpperBody.FullHead.HairandAcc.FrontHair.data.scalX = 1;
                        Char.UpperBody.FullHead.HairandAcc.FrontHair.data.scalY = 1;
                        Char.UpperBody.FullHead.HairandAcc.FrontHair.data.tranX = -300;
                        Char.UpperBody.FullHead.HairandAcc.FrontHair.data.tranY = 0;
                        Char.UpperBody.FullHead.HairandAcc.FrontHair.data.rotat = 0;  
                    Char.UpperBody.FullHead.HairandAcc.FrontHair.colortype = false // 1 = linearGradient , 2 = radialGradient , 3 = plain fill (color 1), 4 = plain fill (color 2
                    Char.UpperBody.FullHead.HairandAcc.FrontHair.color = []
                        Char.UpperBody.FullHead.HairandAcc.FrontHair.color.push({color:"red", offset:0, opacity:1})
                        Char.UpperBody.FullHead.HairandAcc.FrontHair.color.push({color:"Red", offset:100, opacity:1})                   
                    Char.UpperBody.FullHead.HairandAcc.FrontHair.colorGroup = []
                    var a1colo = {};
                        a1colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a1colo.color = []
                        a1colo.color.push({color:"#298acd", offset:0, opacity:1}) 
                        //a1colo.color.push({color:"gray", offset:50, opacity:1}) 
                        a1colo.color.push({color:"#fccbf4", offset:100, opacity:1})
                    Char.UpperBody.FullHead.HairandAcc.FrontHair.colorGroup.push(a1colo)
                    var a2colo = {};
                        a2colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a2colo.color = []
                        a2colo.color.push({color:"gray", offset:0, opacity:1}) 
                        a2colo.color.push({color:"gray", offset:100, opacity:1})
                    Char.UpperBody.FullHead.HairandAcc.FrontHair.colorGroup.push(a2colo)
            }
            function blue_BackHair(Char){
                Char.UpperBody.FullHead.HairandAcc.BackHair = {}
                    Char.UpperBody.FullHead.HairandAcc.BackHair.element = {}
                    Char.UpperBody.FullHead.HairandAcc.BackHair.ver = 1
                    Char.UpperBody.FullHead.HairandAcc.BackHair.data = {}
                        Char.UpperBody.FullHead.HairandAcc.BackHair.data.id = ("BackHair_"+Char.name);
                        Char.UpperBody.FullHead.HairandAcc.BackHair.data.origX = 1650;
                        Char.UpperBody.FullHead.HairandAcc.BackHair.data.origY = 3750;
                        Char.UpperBody.FullHead.HairandAcc.BackHair.data.scalX = 1;
                        Char.UpperBody.FullHead.HairandAcc.BackHair.data.scalY = 1;
                        Char.UpperBody.FullHead.HairandAcc.BackHair.data.tranX = -300;
                        Char.UpperBody.FullHead.HairandAcc.BackHair.data.tranY = 0;
                        Char.UpperBody.FullHead.HairandAcc.BackHair.data.rotat = 0;
                    Char.UpperBody.FullHead.HairandAcc.BackHair.colortype = false // 1 = linearGradient , 2 = radialGradient , false = color group
                    Char.UpperBody.FullHead.HairandAcc.BackHair.color = []
                        //Char.UpperBody.FullHead.HairandAcc.BackHair.color.push({color:"#298acd", offset:0, opacity:1})
                        //Char.UpperBody.FullHead.HairandAcc.BackHair.color.push({color:"#fccbf4", offset:100, opacity:1})                    
                    Char.UpperBody.FullHead.HairandAcc.BackHair.colorGroup = []
                    var a1colo = {};
                        a1colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a1colo.color = []
                        a1colo.color.push({color:"#298acd", offset:0, opacity:1}) 
                        //a1colo.color.push({color:"gray", offset:50, opacity:1}) 
                        a1colo.color.push({color:"#fccbf4", offset:100, opacity:1})
                    Char.UpperBody.FullHead.HairandAcc.BackHair.colorGroup.push(a1colo)
                    var a2colo = {};
                        a2colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a2colo.color = []
                        a2colo.color.push({color:"gray", offset:0, opacity:1}) 
                        a2colo.color.push({color:"gray", offset:100, opacity:1})
                    Char.UpperBody.FullHead.HairandAcc.BackHair.colorGroup.push(a2colo)
                    var a3colo = {};
                        a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a3colo.color = []
                        a3colo.color.push({color:"gray", offset:0, opacity:1}) 
                        a3colo.color.push({color:"gray", offset:100, opacity:1})
                    Char.UpperBody.FullHead.HairandAcc.BackHair.colorGroup.push(a3colo)
                    var a4colo = {};
                        a4colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a4colo.color = []
                        a4colo.color.push({color:"yellow", offset:0, opacity:1}) 
                        a4colo.color.push({color:"yellow", offset:100, opacity:1})
                    Char.UpperBody.FullHead.HairandAcc.BackHair.colorGroup.push(a4colo)
                    var a5colo = {};
                        a5colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a5colo.color = []
                        a5colo.color.push({color:"yellow", offset:0, opacity:1}) 
                        a5colo.color.push({color:"yellow", offset:100, opacity:1})
                    Char.UpperBody.FullHead.HairandAcc.BackHair.colorGroup.push(a5colo)
            }
            function blue_RearHair(Char){   
                Char.UpperBody.FullHead.HairandAcc.RearHair = {}
                    Char.UpperBody.FullHead.HairandAcc.RearHair.element = {}
                    Char.UpperBody.FullHead.HairandAcc.RearHair.ver = 1
                    Char.UpperBody.FullHead.HairandAcc.RearHair.data = {}
                        Char.UpperBody.FullHead.HairandAcc.RearHair.data.id = ("RearHair_"+Char.name);
                        Char.UpperBody.FullHead.HairandAcc.RearHair.data.origX = 1650;
                        Char.UpperBody.FullHead.HairandAcc.RearHair.data.origY = 3750;
                        Char.UpperBody.FullHead.HairandAcc.RearHair.data.scalX = 1;
                        Char.UpperBody.FullHead.HairandAcc.RearHair.data.scalY = 1;
                        Char.UpperBody.FullHead.HairandAcc.RearHair.data.tranX = -300;
                        Char.UpperBody.FullHead.HairandAcc.RearHair.data.tranY = 0;
                        Char.UpperBody.FullHead.HairandAcc.RearHair.data.rotat = 0; 
                    Char.UpperBody.FullHead.HairandAcc.RearHair.colortype = 2 // 1 = linearGradient , 2 = radialGradient , false = color group
                    Char.UpperBody.FullHead.HairandAcc.RearHair.color = []
                        Char.UpperBody.FullHead.HairandAcc.RearHair.color.push({color:"#298acd", offset:0, opacity:1})
                        Char.UpperBody.FullHead.HairandAcc.RearHair.color.push({color:"#fccbf4", offset:100, opacity:1})                 
                    Char.UpperBody.FullHead.HairandAcc.RearHair.colorGroup = [] 
            }
            function blue_PonyHair(Char){
                Char.UpperBody.FullHead.HairandAcc.PonyHair = {}
                    Char.UpperBody.FullHead.HairandAcc.PonyHair.element = {}
                    Char.UpperBody.FullHead.HairandAcc.PonyHair.ver = 1
                    Char.UpperBody.FullHead.HairandAcc.PonyHair.data = {}
                        Char.UpperBody.FullHead.HairandAcc.PonyHair.data.id = ("PolyHair_"+Char.name);
                        Char.UpperBody.FullHead.HairandAcc.PonyHair.data.origX = 1650;
                        Char.UpperBody.FullHead.HairandAcc.PonyHair.data.origY = 3750;
                        Char.UpperBody.FullHead.HairandAcc.PonyHair.data.scalX = 1;
                        Char.UpperBody.FullHead.HairandAcc.PonyHair.data.scalY = 1;
                        Char.UpperBody.FullHead.HairandAcc.PonyHair.data.tranX = -300;
                        Char.UpperBody.FullHead.HairandAcc.PonyHair.data.tranY = 0;
                        Char.UpperBody.FullHead.HairandAcc.PonyHair.data.rotat = 0; 
                    Char.UpperBody.FullHead.HairandAcc.PonyHair.colortype = 2 // 1 = linearGradient , 2 = radialGradient , 3 = plain fill (color 1), 4 = plain fill (color 2
                    Char.UpperBody.FullHead.HairandAcc.PonyHair.color = []
                        Char.UpperBody.FullHead.HairandAcc.PonyHair.color.push({color:"#298acd", offset:0, opacity:1})
                        Char.UpperBody.FullHead.HairandAcc.PonyHair.color.push({color:"#fccbf4", offset:100, opacity:1})                    
                    Char.UpperBody.FullHead.HairandAcc.PonyHair.colorGroup = []
            }
            function blue_TipHair(Char){ 
                Char.UpperBody.FullHead.HairandAcc.TipHair = {}
                    Char.UpperBody.FullHead.HairandAcc.TipHair.element = {}
                    Char.UpperBody.FullHead.HairandAcc.TipHair.ver = 1
                    Char.UpperBody.FullHead.HairandAcc.TipHair.data = {}
                        Char.UpperBody.FullHead.HairandAcc.TipHair.data.id = ("TipHair_"+Char.name);
                        Char.UpperBody.FullHead.HairandAcc.TipHair.data.origX = 1650;
                        Char.UpperBody.FullHead.HairandAcc.TipHair.data.origY = 3750;
                        Char.UpperBody.FullHead.HairandAcc.TipHair.data.scalX = 1;
                        Char.UpperBody.FullHead.HairandAcc.TipHair.data.scalY = 1;
                        Char.UpperBody.FullHead.HairandAcc.TipHair.data.tranX = -300;
                        Char.UpperBody.FullHead.HairandAcc.TipHair.data.tranY = 0;
                        Char.UpperBody.FullHead.HairandAcc.TipHair.data.rotat = 0; 
                    Char.UpperBody.FullHead.HairandAcc.TipHair.colortype = 2 // 1 = linearGradient , 2 = radialGradient , 3 = plain fill (color 1), 4 = plain fill (color 2
                    Char.UpperBody.FullHead.HairandAcc.TipHair.color = []
                        Char.UpperBody.FullHead.HairandAcc.TipHair.color.push({color:"#298acd", offset:0, opacity:1})
                        Char.UpperBody.FullHead.HairandAcc.TipHair.color.push({color:"#fccbf4", offset:100, opacity:1}) 
                    Char.UpperBody.FullHead.HairandAcc.TipHair.colorGroup = []
            }
            function blue_HairAccessories(Char){ 
                Char.UpperBody.FullHead.HairandAcc.Accesso = {}
                    Char.UpperBody.FullHead.HairandAcc.Accesso.element = {}
                    Char.UpperBody.FullHead.HairandAcc.Accesso.ver = 1
                    Char.UpperBody.FullHead.HairandAcc.Accesso.data = {}
                        Char.UpperBody.FullHead.HairandAcc.Accesso.data.id = ("AccessoHair_"+Char.name);
                        Char.UpperBody.FullHead.HairandAcc.Accesso.data.origX = 1650;
                        Char.UpperBody.FullHead.HairandAcc.Accesso.data.origY = 3750;
                        Char.UpperBody.FullHead.HairandAcc.Accesso.data.scalX = 1;
                        Char.UpperBody.FullHead.HairandAcc.Accesso.data.scalY = 1;
                        Char.UpperBody.FullHead.HairandAcc.Accesso.data.tranX = -300;
                        Char.UpperBody.FullHead.HairandAcc.Accesso.data.tranY = 0;
                        Char.UpperBody.FullHead.HairandAcc.Accesso.data.rotat = 0; 
                    Char.UpperBody.FullHead.HairandAcc.Accesso.colortype = false
                    Char.UpperBody.FullHead.HairandAcc.Accesso.color = []                    
                    Char.UpperBody.FullHead.HairandAcc.Accesso.colorGroup = []
                    var a1colo = {};
                        a1colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a1colo.color = []
                        a1colo.color.push({color:"#00d2d3", offset:0, opacity:1}) 
                        a1colo.color.push({color:"#5f27cd", offset:100, opacity:1})
                    Char.UpperBody.FullHead.HairandAcc.Accesso.colorGroup.push(a1colo)
                    var a2colo = {};
                        a2colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a2colo.color = []
                        a2colo.color.push({color:"gray", offset:0, opacity:1}) 
                        a2colo.color.push({color:"gray", offset:100, opacity:1})
                    Char.UpperBody.FullHead.HairandAcc.Accesso.colorGroup.push(a2colo)
                    var a3colo = {};
                        a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a3colo.color = []
                        a3colo.color.push({color:"gray", offset:0, opacity:1}) 
                        a3colo.color.push({color:"gray", offset:100, opacity:1})
                    Char.UpperBody.FullHead.HairandAcc.Accesso.colorGroup.push(a3colo)
                    var a4colo = {};
                        a4colo.type = 1 // 1 = linearGradient , 2 = radialGradient 
                        a4colo.color = []
                        a4colo.color.push({color:"#5f27cd", offset:0, opacity:1}) 
                        a4colo.color.push({color:"#5f27cd", offset:100, opacity:1})
                    Char.UpperBody.FullHead.HairandAcc.Accesso.colorGroup.push(a4colo)
                    var a5colo = {};
                        a5colo.type = 1 // 1 = linearGradient , 2 = radialGradient 
                        a5colo.color = []
                        a5colo.color.push({color:"#f368e0", offset:0, opacity:1}) 
                        a5colo.color.push({color:"#5f27cd", offset:100, opacity:1})
                    Char.UpperBody.FullHead.HairandAcc.Accesso.colorGroup.push(a5colo)
            }
            function blue_Eyebrowsandmouth(Char){
                Char.UpperBody.FullHead.eyebrowsandmouth = {}
                    Char.UpperBody.FullHead.eyebrowsandmouth.element = {}
                    Char.UpperBody.FullHead.eyebrowsandmouth.data = {};
                        Char.UpperBody.FullHead.eyebrowsandmouth.data.ver = 1
                        Char.UpperBody.FullHead.eyebrowsandmouth.data.id = ("EyeBrowsandMouth_"+Char.name);
                        Char.UpperBody.FullHead.eyebrowsandmouth.data.origX = 1600;
                        Char.UpperBody.FullHead.eyebrowsandmouth.data.origY = 3750;
                        Char.UpperBody.FullHead.eyebrowsandmouth.data.scalX = 1;
                        Char.UpperBody.FullHead.eyebrowsandmouth.data.scalY = 1;
                        Char.UpperBody.FullHead.eyebrowsandmouth.data.tranX = 0;
                        Char.UpperBody.FullHead.eyebrowsandmouth.data.tranY = 0;
                        Char.UpperBody.FullHead.eyebrowsandmouth.data.rotat = 0;
            }
            function blue_LeftYeyebrows(Char){
               Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows = {}
                    Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.element = {}
                    Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.ver = 1
                    Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.data = {}
                        Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.data.id = ("LeftYEyeBrows_"+Char.name);
                        Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.data.origX = 1650;
                        Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.data.origY = 3750;
                        Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.data.scalX = 1;
                        Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.data.scalY = 1;
                        Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.data.tranX = -300;
                        Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.data.tranY = 0;
                        Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.data.rotat = 0;  
                    Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.colortype = false // 1 = linearGradient , 2 = radialGradient , 3 = plain fill (color 1), 4 = plain fill (color 2
                    Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.color = []
                        Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.color.push({color:"red", offset:0, opacity:1})
                        Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.color.push({color:"Red", offset:100, opacity:1})                   
                    Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.colorGroup = []
                    var a1colo = {};
                        a1colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a1colo.color = []
                        a1colo.color.push({color:"#298acd", offset:0, opacity:1}) 
                        //a1colo.color.push({color:"gray", offset:50, opacity:1}) 
                        a1colo.color.push({color:"#fccbf4", offset:100, opacity:1})
                    Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.colorGroup.push(a1colo)
                    var a2colo = {};
                        a2colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a2colo.color = []
                        a2colo.color.push({color:"gray", offset:0, opacity:1}) 
                        a2colo.color.push({color:"gray", offset:100, opacity:1})
                    Char.UpperBody.FullHead.eyebrowsandmouth.LeftYeyebrows.colorGroup.push(a2colo)
            }
            function blue_Righteyebrows(Char){
               Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows = {}
                    Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.element = {}
                    Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.ver = 1
                    Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.data = {}
                        Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.data.id = ("RightEyeBrows_"+Char.name);
                        Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.data.origX = 1650;
                        Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.data.origY = 3750;
                        Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.data.scalX = 1;
                        Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.data.scalY = 1;
                        Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.data.tranX = -300;
                        Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.data.tranY = 0;
                        Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.data.rotat = 0;  
                    Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.colortype = false // 1 = linearGradient , 2 = radialGradient , 3 = plain fill (color 1), 4 = plain fill (color 2
                    Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.color = []
                        Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.color.push({color:"red", offset:0, opacity:1})
                        Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.color.push({color:"Red", offset:100, opacity:1})                   
                    Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.colorGroup = []
                    var a1colo = {};
                        a1colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a1colo.color = []
                        a1colo.color.push({color:"#298acd", offset:0, opacity:1}) 
                        //a1colo.color.push({color:"gray", offset:50, opacity:1}) 
                        a1colo.color.push({color:"#fccbf4", offset:100, opacity:1})
                    Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.colorGroup.push(a1colo)
                    var a2colo = {};
                        a2colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a2colo.color = []
                        a2colo.color.push({color:"gray", offset:0, opacity:1}) 
                        a2colo.color.push({color:"gray", offset:100, opacity:1})
                    Char.UpperBody.FullHead.eyebrowsandmouth.Righteyebrows.colorGroup.push(a2colo)
            }
            function blue_Mouth(Char){
               Char.UpperBody.FullHead.eyebrowsandmouth.mouth = {}
                    Char.UpperBody.FullHead.eyebrowsandmouth.mouth.element = {}
                    Char.UpperBody.FullHead.eyebrowsandmouth.mouth.ver = 1
                    Char.UpperBody.FullHead.eyebrowsandmouth.mouth.data = {}
                        Char.UpperBody.FullHead.eyebrowsandmouth.mouth.data.id = ("Mouth_"+Char.name);
                        Char.UpperBody.FullHead.eyebrowsandmouth.mouth.data.origX = 1650;
                        Char.UpperBody.FullHead.eyebrowsandmouth.mouth.data.origY = 3750;
                        Char.UpperBody.FullHead.eyebrowsandmouth.mouth.data.scalX = 1;
                        Char.UpperBody.FullHead.eyebrowsandmouth.mouth.data.scalY = 1;
                        Char.UpperBody.FullHead.eyebrowsandmouth.mouth.data.tranX = -300;
                        Char.UpperBody.FullHead.eyebrowsandmouth.mouth.data.tranY = 0;
                        Char.UpperBody.FullHead.eyebrowsandmouth.mouth.data.rotat = 0;  
                    Char.UpperBody.FullHead.eyebrowsandmouth.mouth.colortype = false // 1 = linearGradient , 2 = radialGradient , 3 = plain fill (color 1), 4 = plain fill (color 2
                    Char.UpperBody.FullHead.eyebrowsandmouth.mouth.color = []
                        Char.UpperBody.FullHead.eyebrowsandmouth.mouth.color.push({color:"red", offset:0, opacity:1})
                        Char.UpperBody.FullHead.eyebrowsandmouth.mouth.color.push({color:"Red", offset:100, opacity:1})                   
                    Char.UpperBody.FullHead.eyebrowsandmouth.mouth.colorGroup = []
                    var a1colo = {};
                        a1colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a1colo.color = []
                        a1colo.color.push({color:"#c0392b", offset:0, opacity:1}) 
                        //a1colo.color.push({color:"gray", offset:50, opacity:1}) 
                        a1colo.color.push({color:"#c0392b", offset:100, opacity:1})
                    Char.UpperBody.FullHead.eyebrowsandmouth.mouth.colorGroup.push(a1colo)
                    var a2colo = {};
                        a2colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a2colo.color = []
                        a2colo.color.push({color:"#ff7979", offset:0, opacity:1}) 
                        a2colo.color.push({color:"#ff7979", offset:100, opacity:1})
                    Char.UpperBody.FullHead.eyebrowsandmouth.mouth.colorGroup.push(a2colo)
            }
            function blue_ChestandArms(Char){
                Char.UpperBody.ChestandArms = {}
                    Char.UpperBody.ChestandArms.element = {}
                    Char.UpperBody.ChestandArms.data = {};
                        Char.UpperBody.ChestandArms.data.id = ("FullBody_"+Char.name);
                        Char.UpperBody.ChestandArms.data.origX = 1600;
                        Char.UpperBody.ChestandArms.data.origY = 3750;
                        Char.UpperBody.ChestandArms.data.scalX = 1;
                        Char.UpperBody.ChestandArms.data.scalY = 1;
                        Char.UpperBody.ChestandArms.data.tranX = 0;
                        Char.UpperBody.ChestandArms.data.tranY = 0;
                        Char.UpperBody.ChestandArms.data.rotat = 0;
                    Char.UpperBody.ChestandArms.Right = {}
                        Char.UpperBody.ChestandArms.Right.elementA = {}
                        Char.UpperBody.ChestandArms.Right.elementB = {}
                        Char.UpperBody.ChestandArms.Right.elementC = {}
                    Char.UpperBody.ChestandArms.LeftY = {}
                        Char.UpperBody.ChestandArms.LeftY.elementA = {}
                        Char.UpperBody.ChestandArms.LeftY.elementB   = {}
            }
            function blue_Body(Char) {
                Char.UpperBody.ChestandArms.Body = {}
                    Char.UpperBody.ChestandArms.Body.element = {}
                    Char.UpperBody.ChestandArms.Body.ver = 1
                    Char.UpperBody.ChestandArms.Body.data = {};
                        Char.UpperBody.ChestandArms.Body.data.id = ("BodyFigure_"+Char.name);
                        Char.UpperBody.ChestandArms.Body.data.origX = 1600;
                        Char.UpperBody.ChestandArms.Body.data.origY = 3750;
                        Char.UpperBody.ChestandArms.Body.data.scalX = 1;
                        Char.UpperBody.ChestandArms.Body.data.scalY = 1;
                        Char.UpperBody.ChestandArms.Body.data.tranX = 0;
                        Char.UpperBody.ChestandArms.Body.data.tranY = 0;
                        Char.UpperBody.ChestandArms.Body.data.rotat = 0;
                    Char.UpperBody.ChestandArms.Body.colortype = false
                    Char.UpperBody.ChestandArms.Body.color = []                    
                    Char.UpperBody.ChestandArms.Body.colorGroup = []
                    var a1colo = {};
                        a1colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a1colo.color = []
                        a1colo.color.push({color:"#fce9db", offset:0, opacity:1}) 
                        a1colo.color.push({color:"#fce9db", offset:100, opacity:1})
                    Char.UpperBody.ChestandArms.Body.colorGroup.push(a1colo)
            }
            function blue_Shirt(Char) {
                Char.UpperBody.ChestandArms.Shirt = {}
                    Char.UpperBody.ChestandArms.Shirt.element = {}
                    Char.UpperBody.ChestandArms.Shirt.ver = 2
                    Char.UpperBody.ChestandArms.Shirt.data = {};
                        Char.UpperBody.ChestandArms.Shirt.data.id = ("BodyShirt_"+Char.name);
                        Char.UpperBody.ChestandArms.Shirt.data.origX = 1600;
                        Char.UpperBody.ChestandArms.Shirt.data.origY = 3750;
                        Char.UpperBody.ChestandArms.Shirt.data.scalX = 1;
                        Char.UpperBody.ChestandArms.Shirt.data.scalY = 1;
                        Char.UpperBody.ChestandArms.Shirt.data.tranX = 0;
                        Char.UpperBody.ChestandArms.Shirt.data.tranY = 0;
                        Char.UpperBody.ChestandArms.Shirt.data.rotat = 0;
                    Char.UpperBody.ChestandArms.Shirt.colortype = false
                    Char.UpperBody.ChestandArms.Shirt.color = []                    
                    Char.UpperBody.ChestandArms.Shirt.colorGroup = []
                    var a1colo = {};
                        a1colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a1colo.color = []
                        a1colo.color.push({color:"#98cdff", offset:0, opacity:1}) 
                        a1colo.color.push({color:"#98cdff", offset:100, opacity:1})
                    Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a1colo)
                    var a2colo = {};
                        a2colo.type = 2 // 1 = linearGradient , 2 = radialGradient
                        a2colo.color = []
                        a2colo.color.push({color:"white", offset:0, opacity:1})
                        a2colo.color.push({color:"white", offset:100, opacity:1}) 
                    Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a2colo)
                    var a3colo = {};
                        a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a3colo.color = []
                        a3colo.color.push({color:"#f6b3b6", offset:0, opacity:1}) 
                        a3colo.color.push({color:"#f6b3b6", offset:100, opacity:1})
                    Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a3colo)
                    var a3colo = {};
                        a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a3colo.color = []
                        a3colo.color.push({color:"red", offset:0, opacity:1}) 
                        a3colo.color.push({color:"red", offset:100, opacity:1})
                    Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a3colo)
                    var a3colo = {};
                        a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a3colo.color = []
                        a3colo.color.push({color:"Yellow", offset:0, opacity:1}) 
                        a3colo.color.push({color:"Yellow", offset:100, opacity:1})
                    Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a3colo)
                    var a3colo = {};
                        a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a3colo.color = []
                        a3colo.color.push({color:"Pink", offset:0, opacity:1}) 
                        a3colo.color.push({color:"Pink", offset:100, opacity:1})
                    Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a3colo)
                    var a3colo = {};
                        a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                        a3colo.color = []
                        a3colo.color.push({color:"blue", offset:0, opacity:1}) 
                        a3colo.color.push({color:"blue", offset:100, opacity:1})
                    Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a3colo)
                    var a3colo = {};
                            a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                            a3colo.color = []
                            a3colo.color.push({color:"green", offset:0, opacity:1}) 
                            a3colo.color.push({color:"green", offset:100, opacity:1})
                        Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a3colo)
                    var a3colo = {};
                            a3colo.type = 1 // 1 = linearGradient , 2 = radialGradient
                            a3colo.color = []
                            a3colo.color.push({color:"orange", offset:0, opacity:1}) 
                            a3colo.color.push({color:"orange", offset:100, opacity:1})
                        Char.UpperBody.ChestandArms.Shirt.colorGroup.push(a3colo)
            }
            function blue_Sleeves_arms(Char){
                
            }
            function blue_LeftYSleeves_arms(Char){
                
            }
            function blue_RightSleeves_arms(Char){
                
            }
            function blue_Gloves_Hand(Char){
                
            }
            function blue_Belt_Waist(Char){
                
            }         
            
            
            
            
            
            
            
            
            function blue_LowerBody(Char){
                Char.LowerBody = {};
                    Char.LowerBody.element = {}
                    Char.LowerBody.data = {};
                        Char.LowerBody.data.id = ("LowerBody_"+Char.name);
                        Char.LowerBody.data.origX = 1600;
                        Char.LowerBody.data.origY = 5475;
                        Char.LowerBody.data.scalX = 1;
                        Char.LowerBody.data.scalY = 1;
                        Char.LowerBody.data.tranX = 0;
                        Char.LowerBody.data.tranY = 0;
                        Char.LowerBody.data.rotat = 0;
            }
            function blue_RightLeg(Char){
                Char.LowerBody.Right = {};
                    Char.LowerBody.Right.elementA = {}
                        Char.LowerBody.Right.elementA.data = {};
                        Char.LowerBody.Right.elementA.data.id = ("RightLeg_"+Char.name);
                    Char.LowerBody.Right.elementB  = {}
                        Char.LowerBody.Right.elementB.data = {};
                        Char.LowerBody.Right.elementB.data.id = ("RightFoot_"+Char.name);
            }
            function blue_LeftYLeg(Char){ 
                Char.LowerBody.LeftY = {};
                    Char.LowerBody.LeftY.elementA  = {}
                        Char.LowerBody.LeftY.elementA.data = {};
                        Char.LowerBody.LeftY.elementA.data.id = ("LeftYLeg_"+Char.name);
                    Char.LowerBody.LeftY.elementB  = {}
                        Char.LowerBody.LeftY.elementB.data = {};
                        Char.LowerBody.LeftY.elementB.data.id = ("LeftYFoot_"+Char.name);
            }       
    }
    
        //The element Builder
        function ChibiBuilder(FSTS,Char){
            //Making the Full Character
            Char.element = element_group(FSTS,Char.data.id,Char.data.origX,Char.data.origY,Char.data.scalX,
                                            Char.data.scalY,Char.data.tranX,Char.data.tranY,Char.data.rotat);
                //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            //Making the lower body
                body_LowerBody(Char.element,Char.LowerBody,Char.name)
            //Making UpperBody
                body_UpperBody(Char.element,Char.UpperBody,Char.name)
                        //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
                    //Making the Head Group
                        body_head(Char.UpperBody.FullHead.element,Char.UpperBody.FullHead.Head,Char.name)
                    //Making the Eyes
                        body_eyes(Char.UpperBody.FullHead.element,Char.UpperBody.FullHead.Eyes,Char.name)
                    //Making the Hair
                        body_hairandacc(Char.UpperBody.FullHead.element,Char.UpperBody.FullHead.HairandAcc,Char.name)
                    //Making the eyebrows mouth and nose
                        body_eyebrowsandmouth(Char.UpperBody.FullHead.element,Char.UpperBody.FullHead.eyebrowsandmouth,Char.name)
                //Making the body and arms
                    body_ChestandArms(Char.UpperBody.element,Char.UpperBody.ChestandArms,Char.name)
            

            console.log("ChibiBuilder Output of Char:"+Char.name+":",Char)
            return true
        }
    
    //The element Builder
        function ChibiAnimator(Char){
            Char.UpperBody.ChestandArms.LeftY.elementB.animate = {}
            Char.UpperBody.ChestandArms.LeftY.elementB.animate.rotate = function(angle,durationL,delayL){
                animate_general_rotate(Char.UpperBody.ChestandArms.LeftY.elementB,angle,durationL,delayL)
            }
            
            // Char.animate.LeftYElementB.rotate = Char.UpperBody.ChestandArms.LeftY.elementB.animate.rotate
            
            //animate_general_rotate(Char.UpperBody.Fullbody.LeftY.elementB,280,1000,100)
            
            
            
        console.log("ChibiAnimator has Run")
        return true
    }
   
        //The Easy Manger
        function ChibiManger(FSTS,name,id){
            if (id == undefined){id = ""}
            
            Char = ChibiBlueprinter("john",id)
            ChibiBuilder(FSTS,Char)
            
            return Char
        }
    
    //Function to animate elements
        function animate_general_rotate(element,angle,durationL,delayL){   
            element
                .transition()
                .duration(durationL)
                .style("transform", "rotate("+angle+"deg)")
                .delay(delayL)
        }

     
    //Function to make BodyParts elements
    
        //function to make the basic hair set
        function body_hairandacc(Outparent,bodyPartData,name){
            bodyPartData.element = element_group(Outparent,bodyPartData.data.id,bodyPartData.data.origX,
                                     bodyPartData.data.origY,bodyPartData.data.scalX,bodyPartData.data.scalY,
                                     bodyPartData.data.tranX,bodyPartData.data.tranY,bodyPartData.data.rotat)
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            sub_body_Processing(bodyPartData.element,bodyPartData.BackHair,data_HairBack("3795","600",bodyPartData.BackHair.ver))
            sub_body_Processing(bodyPartData.element,bodyPartData.Accesso,data_HairAccessories("-2000","0",bodyPartData.Accesso.ver))
            sub_body_Processing(bodyPartData.element,bodyPartData.FrontHair,data_HairFront("2450","0",bodyPartData.FrontHair.ver)) 
            //sub_body_Processing(Outparent,bodyPartData,Data)
        }
        
        //function to make the basic Head set
        function body_head(Outparent,bodyPartData,name){
            
            
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            bodyPartData.element = element_group(Outparent,bodyPartData.data.id,bodyPartData.data.origX,
                                     bodyPartData.data.origY,bodyPartData.data.scalX,bodyPartData.data.scalY,
                                     bodyPartData.data.tranX,bodyPartData.data.tranY,bodyPartData.data.rotat)
            
            if ((bodyPartData.data.ver) == 1){
                //Make The Head
                var point_X = "-2300"; 
                var point_Y = "0";
                //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                element_polygon(bodyPartData.element,("HeadPoly_"+name),HeadPolyPD(point_X,point_Y),1,1,0,0,180,"#fce9db","Black",0)
                //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                element_path(bodyPartData.element,("HeadLine_"+name),HeadLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)

                //Make the Ear
                var point_X = "-3650"; var point_Y = "-2750";
                //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                element_path(bodyPartData.element,("EarLine_"+name),EarLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)    
            } 
        }
    
        //function to make the basic Eyes set
        function body_eyes(Outparent,bodyPartData,name){
            bodyPartData.element = element_group(Outparent,bodyPartData.data.id,bodyPartData.data.origX,
                                     bodyPartData.data.origY,bodyPartData.data.scalX,bodyPartData.data.scalY,
                                     bodyPartData.data.tranX,bodyPartData.data.tranY,bodyPartData.data.rotat)
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            sub_body_Processing(bodyPartData.element,bodyPartData.LeftYEye,data_Eyes(760,-2000,true,bodyPartData.LeftYEye.ver,bodyPartData.LeftYEye.pos))
            sub_body_Processing(bodyPartData.element,bodyPartData.RightEye,data_Eyes(-2540,-2000,false,bodyPartData.RightEye.ver,bodyPartData.RightEye.pos))
            //sub_body_Processing(Outparent,bodyPartData,Data) 
        }
    
        //function to make the basic Eyes set
        function body_eyebrowsandmouth(Outparent,bodyPartData,name){
            bodyPartData.element = element_group(Outparent,bodyPartData.data.id,bodyPartData.data.origX,
                                     bodyPartData.data.origY,bodyPartData.data.scalX,bodyPartData.data.scalY,
                                     bodyPartData.data.tranX,bodyPartData.data.tranY,bodyPartData.data.rotat)
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            sub_body_Processing(bodyPartData.element,bodyPartData.LeftYeyebrows,data_Eyebrows(500,-1900,true,bodyPartData.LeftYeyebrows.ver)) //LeftY eyebrows
            sub_body_Processing(bodyPartData.element,bodyPartData.Righteyebrows,data_Eyebrows(350,-1900,false,bodyPartData.Righteyebrows.ver))//Right eyebrows
            sub_body_Processing(bodyPartData.element,bodyPartData.mouth,data_Mouth(400,-1000,bodyPartData.mouth.ver)) //Mouth
            //sub_body_Processing(Outparent,bodyPartData,Data)
        }
        
        //function to make the basic Body set
        function body_ChestandArms(Outparent,bodyPartData,name){
            
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            bodyPartData.element = element_group(Outparent,bodyPartData.data.id,bodyPartData.data.origX,
                                     bodyPartData.data.origY,bodyPartData.data.scalX,bodyPartData.data.scalY,
                                     bodyPartData.data.tranX,bodyPartData.data.tranY,bodyPartData.data.rotat)
            
            
            sub_body_Processing(bodyPartData.element,bodyPartData.Body,data_Body("-1899","-3750",bodyPartData.Body.ver))
            
            sub_body_Processing(bodyPartData.element,bodyPartData.Shirt,data_Shirt("-1899","-3750",bodyPartData.Shirt.ver))
            
            
//                //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tran Y,rotat)
//                bodyPartData.Body.element = element_group(bodyPartData.element,("Body_"+name),1600,3750,1,1,0,0,0)
//                
//                    //Make the Body
//                    var point_X = "-1899"; var point_Y = "-3750";
//                    //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
//                    element_polygon(bodyPartData.Body.element,("BodyPoly_"+name),BodyPolyPD(point_X,point_Y),1,1,0,0,180,"#fce9db","Black",0)
//                     //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
//                    element_path(bodyPartData.Body.element,("BodyOutLine_"+name),BodyLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)
            
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            bodyPartData.Right.elementA = element_group(bodyPartData.element,("RightArm_"+name),2150,4050,1,1,0,0,-15)
                
                //Make the Body
                var point_X = "-2250"; var point_Y = "-3895";
                //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                element_polygon(bodyPartData.Right.elementA,("RightUpArmPoly_"+name),RightArmPolyPD(point_X,point_Y),1,1,0,0,180,"#fce9db","Black",0)
                 //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                element_path(bodyPartData.Right.elementA,("RightUpArmOutLine_"+name),RightArmLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)

                //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
                bodyPartData.Right.elementB = element_group(bodyPartData.Right.elementA,("RightHand_"+name),2600,4750,1,1,0,0,0)
                
                    //Make the Body
                    var point_X = "-3700"; var point_Y = "-4350";
                    //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                    element_polygon(bodyPartData.Right.elementB,("RightHandPoly_"+name),RightHandPolyPD(point_X,point_Y),1,1,0,0,180,"#fce9db","Black",0)
                     //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                    element_path(bodyPartData.Right.elementB,("RightHandOutLine_"+name),RightHandLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)
    
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            bodyPartData.LeftY.elementA = element_group(bodyPartData.element,("LeftYArm_"+name),1150,4050,1,1,0,0,90)
                
                //Make the Body
                var point_X = "-1250"; var point_Y = "-3895";
                //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                element_polygon(bodyPartData.LeftY.elementA,("LeftYUpArmPoly_"+name),LeftYArmPolyPD(point_X,point_Y),1,1,0,0,180,"#fce9db","Black",0)
                 //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                element_path(bodyPartData.LeftY.elementA,("LeftYUpArmOutLine_"+name),LeftYArmLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)

                //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
                bodyPartData.LeftY.elementB = element_group(bodyPartData.LeftY.elementA,("LeftYHand_"+name),1660,4750,1,1,0,0,00)
                
                    //Make the Body
                    var point_X = "-2700"; var point_Y = "-4350";
                    //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                    element_polygon(bodyPartData.LeftY.elementB,("LeftYHandPoly_"+name),LeftYHandPolyPD(point_X,point_Y),1,1,0,0,180,"#fce9db","Black",0)
                     //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                    element_path(bodyPartData.LeftY.elementB,("LeftYHandOutLine_"+name),LeftYHandLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)
            
        }
    
        //function to make the basic leg ste
        function body_LowerBody(Outparent,bodyPartData,name){
            
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            bodyPartData.element = element_group(Outparent,bodyPartData.data.id,bodyPartData.data.origX,
                                     bodyPartData.data.origY,bodyPartData.data.scalX,bodyPartData.data.scalY,
                                     bodyPartData.data.tranX,bodyPartData.data.tranY,bodyPartData.data.rotat)
    
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            bodyPartData.Right.elementA = element_group(bodyPartData.element,bodyPartData.Right.elementA.data.id,1200,5475,1,1,0,0,0)
    
                //Make the leg
                var point_X = "-1296"; var point_Y = "6663";
                //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                element_polygon(bodyPartData.Right.elementA,("RightLegPoly_"+name),RightLegPolyPD(point_X,point_Y),-1,1,0,0,0,"#fce9db","Black",0)
                 //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                element_path(bodyPartData.Right.elementA,("RightLegOutLine_"+name),RightLegLinePD(point_X,point_Y),-1,1,0,0,0,"Black","Black",1)

                //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
                bodyPartData.Right.elementB = element_group(bodyPartData.Right.elementA,bodyPartData.Right.elementB.data.id,1200,6475,1,1,-20,0,00)
                
                    //Make the Body
                    var point_X = "-1325"; var point_Y = "-6163";
                    //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                    element_polygon(bodyPartData.Right.elementB,("RightFootPoly_"+name),RightFootPolyPD(point_X,point_Y),1,1,0,0,180,"#fce9db","Black",0)
                     //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                    element_path(bodyPartData.Right.elementB,("RightFootOutLine_"+name),RightFootLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)
    
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            bodyPartData.LeftY.elementA = element_group(bodyPartData.element,bodyPartData.LeftY.elementA.data.id,2000,5475,1,1,0,0,0)
    
                //Make the leg
                var point_X = "1865"; var point_Y = "6663";
                //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                element_polygon(bodyPartData.LeftY.elementA,("LeftYLegPoly_"+name),LeftYLegPolyPD(point_X,point_Y),1,1,0,0,0,"#fce9db","Black",0)
                 //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                element_path(bodyPartData.LeftY.elementA,("LeftYLegOutLine_"+name),LeftYLegLinePD(point_X,point_Y),1,1,0,0,0,"Black","Black",1)

                //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
                bodyPartData.LeftY.elementB = element_group(bodyPartData.LeftY.elementA,bodyPartData.LeftY.elementB.data.id,2000,6475,1,1,0,0,0)
                
                    //Make the Body
                    var point_X = "-2125"; var point_Y = "-6163";
                    //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                    element_polygon(bodyPartData.LeftY.elementB,("LeftYFootPoly_"+name),LeftYFootPolyPD(point_X,point_Y),1,1,0,0,180,"#fce9db","Black",0)
                     //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                    element_path(bodyPartData.LeftY.elementB,("LeftYFootOutLine_"+name),LeftYFootLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)
        }
    
        //function to make the basic upper body set
        function body_UpperBody(Outparent,bodyPartData,name){
            //Makeing Upper Group
            bodyPartData.element = element_group(Outparent,bodyPartData.data.id,bodyPartData.data.origX,
                                     bodyPartData.data.origY,bodyPartData.data.scalX,bodyPartData.data.scalY,
                                     bodyPartData.data.tranX,bodyPartData.data.tranY,bodyPartData.data.rotat)
                //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            
            //Making the Full Head Group
            bodyPartData.FullHead.element = element_group(bodyPartData.element,bodyPartData.FullHead.data.id,bodyPartData.FullHead.data.origX,
                                    bodyPartData.FullHead.data.origY,bodyPartData.FullHead.data.scalX,bodyPartData.FullHead.data.scalY,
                                    bodyPartData.FullHead.data.tranX,bodyPartData.FullHead.data.tranY,bodyPartData.FullHead.data.rotat)
                //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
        }
    
    //Function to make Sub Body part
    
        //Function to make the HairAccessories
        function sub_body_Processing(Outparent,bodyPartData,Data){
            if(!((Data.Line.length) == (Data.Poly.length))){ 
                if(!((Data.Data.length) == (Data.Poly.length))){ 
                    console.error("The Poly and Line data are not in sycn for ID:" + bodyPartData.data.id) 
                }}
            //console.log(":",bodyPartData)
            //console.log(bodyPartData.data.id,":",bodyPartData)
            //console.log(bodyPartData.data.id,":",Data)
            
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            bodyPartData.element = element_group(Outparent,bodyPartData.data.id,bodyPartData.data.origX,
                                     bodyPartData.data.origY,bodyPartData.data.scalX,bodyPartData.data.scalY,
                                     bodyPartData.data.tranX,bodyPartData.data.tranY,bodyPartData.data.rotat)
            
            bodyPartData.shapeData = Data
            
            if(bodyPartData.colortype != false){
                    if((bodyPartData.colortype)==1){
                        element_linearGradient(Outparent,("ColorGradient_1"+bodyPartData.data.id),0,0,0,100,bodyPartData.color)
                        //element_linearGradient(Outparent,id,x1,y1,x2,y2,FillandOpac)
                    }else if ((bodyPartData.colortype)==2){
                        element_radialGradient(Outparent,("ColorGradient_1"+bodyPartData.data.id),bodyPartData.color)
                        //element_radialGradient(Outparent,id,FillandOpac)
                    }else{
                        element_radialGradient(Outparent,("ColorGradient_1"+bodyPartData.data.id),bodyPartData.color)
                        //element_radialGradient(Outparent,id,FillandOpac)
                        console.error("bodyPartData.colortype was not 1,2 for ID:" + bodyPartData.data.id)
                    }
            }
            else{
                bodyPartData.colorGroup.forEach(function(item, index, array) {
                    if((item.type)==1){
                        element_linearGradient(Outparent,("ColorGradient_"+(index+1)+bodyPartData.data.id),0,0,0,100,item.color)
                        //element_linearGradient(Outparent,id,x1,y1,x2,y2,FillandOpac)
                    }else if ((item.type)==2){
                        element_radialGradient(Outparent,("ColorGradient_"+(index+1)+bodyPartData.data.id),item.color)
                        //element_radialGradient(Outparent,id,FillandOpac)
                    }else{
                        element_radialGradient(Outparent,("ColorGradient_"+(index+1)+bodyPartData.data.id),0,item.color)
                        //element_radialGradient(Outparent,id,FillandOpac)
                        console.error("bodyPartData.colortype was not 1,2 for ID:" + bodyPartData.data.id)
                    }
                })
            }
            
            
                
            
                //ans.Data.push({scalX:-1, scalY:1, tranX:0, tranY:0, rotat:180,})
                Data.Poly.forEach(function(item, index, array) {
                    
                    if (item != false){
                        
                        if(bodyPartData.colortype != false){
                            element_polygon(bodyPartData.element,("Poly_"+(index+1)+bodyPartData.data.id),item,Data.Data[index].scalX,Data.Data[index].scalY
                                            ,Data.Data[index].tranX,Data.Data[index].tranY,Data.Data[index].rotat,("url(#ColorGradient_"+(1)+bodyPartData.data.id+")"),"Black",0)
                        }else{
                            element_polygon(bodyPartData.element,("Poly_"+(index+1)+bodyPartData.data.id),item,Data.Data[index].scalX,Data.Data[index].scalY
                                            ,Data.Data[index].tranX,Data.Data[index].tranY,Data.Data[index].rotat,("url(#ColorGradient_"+(index+1)+bodyPartData.data.id+")"),"Black",0)
                        }
                        
                    }
                })
                Data.Elli.forEach(function(item, index, array) {
                    if (item != false){
                        
                        if(bodyPartData.colortype != false){
                            element_ellipse(bodyPartData.element,("Elli_"+(index+1)+bodyPartData.data.id),item.cx,item.cy,item.rx,item.ry,("url(#ColorGradient_"+(1)+bodyPartData.data.id+")"),"black",
                                            item.st,Data.Data[index].scalX,Data.Data[index].scalY,Data.Data[index].tranX,Data.Data[index].tranY,Data.Data[index].rotat)
                        }else{
                            element_ellipse(bodyPartData.element,("Elli_"+(index+1)+bodyPartData.data.id),item.cx,item.cy,item.rx,item.ry,("url(#ColorGradient_"+(index+1)+bodyPartData.data.id+")"),"black",
                                            item.st,Data.Data[index].scalX,Data.Data[index].scalY,Data.Data[index].tranX,Data.Data[index].tranY,Data.Data[index].rotat)
                        }
                    }
                })
                Data.Line.forEach(function(item, index, array) {
                    if (item != false){
                    element_path(bodyPartData.element,("Line_"+(index+1)+bodyPartData.data.id),item,Data.Data[index].scalX,Data.Data[index].scalY
                                        ,Data.Data[index].tranX,Data.Data[index].tranY,Data.Data[index].rotat,"Black","Black",1)
                    }
                })
        }
    
    //Function to make SVG elements
    
        //Function to make SVG_Group element
        function element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat){
        //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            
            //transform_origin
            var trans_ori = (origX+"px "+origY+"px")
            //console.log("transform_origin",trans_ori)

            //transform_code
                //transform_scale
                var trans_sca = (" scale("+scalX+","+scalY+") ")
                //console.log("transform_scale",trans_sca)

                //transform_translate
                var trans_tra = (" translate("+tranX+","+tranY+") ")
                //console.log("transform_translate",trans_tra)

                //transform_rotate
                var trans_rot = (" rotate("+rotat+") ")
                //console.log("transform_rotate",trans_rot)

            //transform_code
            var trans_cod = (trans_sca + trans_tra + trans_rot)
            //console.log("transform_code",trans_cod)

            
            
            //Creating the elememt
            Outparent
            .append("g")
            .attr("id",id)
            .attr("transform-origin",trans_ori)
            .attr("transform",trans_cod)

            return d3.select("#" + id)  
        }
    
        //Function to make SVG_Polygon element
        function element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW){
        //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
            
            //transform_code
                //transform_scale
                var trans_sca = (" scale("+scalX+","+scalY+") ")
                //console.log("transform_scale",trans_sca)

                //transform_translate
                var trans_tra = (" translate("+tranX+","+tranY+") ")
                //console.log("transform_translate",trans_tra)

                //transform_rotate
                var trans_rot = (" rotate("+rotat+") ")
                //console.log("transform_rotate",trans_rot)

            //transform_code
            var trans_cod = (trans_sca + trans_tra + trans_rot)
            //console.log("transform_code",trans_cod)
            
            
            //style_options
                //style_fill
                var style_fill = (" fill:" + fill +"; ")
                //console.log("style_fill",style_fill)

                //style_stroke
                var style_stro = (" stroke:" + stroke +"; ")
                //console.log("style_stroke",style_stro)

                //style_stroke_width
                var style_strw = (" stroke-width:" + strokW +"; ")
                //console.log("style_stroke_width",style_strw)

            //transform_code
            var style_cod = (style_fill + style_stro + style_strw)
            //console.log("style_code",trans_cod)
            
            //Need to add txt file to point converter
            
            //Creating the elememt
            Outparent
            .append("polygon")
            .attr("id",id)
            .attr("points",point_text)
            .attr("style",style_cod)
            .attr("transform",trans_cod)
            

            return d3.select("#" + id)  
        }
    
        //Function to make SVG_Path element
        function element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW){
        //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
            
            //transform_code
                //transform_scale
                var trans_sca = (" scale("+scalX+","+scalY+") ")
                //console.log("transform_scale",trans_sca)

                //transform_translate
                var trans_tra = (" translate("+tranX+","+tranY+") ")
                //console.log("transform_translate",trans_tra)

                //transform_rotate
                var trans_rot = (" rotate("+rotat+") ")
                //console.log("transform_rotate",trans_rot)}

            //transform_code
            var trans_cod = (trans_sca + trans_tra + trans_rot)
            //console.log("transform_code",trans_cod)
            
            
            //style_options
                //style_fill
                var style_fill = (" fill:" + fill +"; ")
                //console.log("style_fill",style_fill)

                //style_stroke
                var style_stro = (" stroke:" + fill +"; ")
                //console.log("style_stroke",style_stro)

                //style_stroke_width
                var style_strw = (" stroke-width:" + strokW +"; ")
                //console.log("style_stroke_width",style_strw)

            //transform_code
            var style_cod = (style_fill + style_stro + style_strw)
            //console.log("style_code",trans_cod)
            
            //Need to add txt file to point converter
            

            //Creating the elememt
            Outparent
            .append("path")
            .attr("id",id)
            .attr("d",point_text)
            .attr("style",style_cod)
            .attr("transform",trans_cod)
            

            return d3.select("#" + id)  
        }
    
        //Function to make SVG_linearGradient element
        function element_linearGradient(Outparent,id,x1,y1,x2,y2,FillandOpac){
        //element_linearGradient(Outparent,id,x1,y1,x2,y2,ofst1,fill1,opac1,ofst2,fill2,opac2)
            
            //linearGradient
                //points
                var x1p = "0%";
                if(x1>100){
                    console.log("(element_linearGradient) - max x1 is 100");
                    var x1p = "100%";
                }else if(x1<0){
                    console.log("(element_linearGradient) - min x1 is 0");
                    var x1p = "0%";
                }else{
                    var x1p = (x1+"%");
                }
            
                var y1p = "0%";
                if(y1>100){
                    console.log("(element_linearGradient) - max y1 is 100");
                    var y1p = "100%";
                }else if(y1<0){
                    console.log("(element_linearGradient) - min y1 is 0");
                    var y1p = "0%";
                }else{
                    var y1p = (y1+"%");
                }
            
                var x2p = "0%";
                if(x2>100){
                    console.log("(element_linearGradient) - max x2 is 100");
                    var x2p = "100%";
                }else if(x2<0){
                    console.log("(element_linearGradient) - min x2 is 0");
                    var x2p = "0%";
                }else{
                    var x2p = (y1+"%");
                }
            
                var y2p = "0%";
                if(y2>100){
                    console.log("(element_linearGradient) - max y2 is 100");
                    var y2p = "100%";
                }else if(y2<0){
                    console.log("(element_linearGradient) - min y2 is 0");
                    var y2p = "0%";
                }else{
                    var y2p = (y2+"%");
                }
                
            
            //Creating the elememt
            Outparent
            .append("defs")
            .attr("id",("defs_"+id))
            .append("linearGradient")
            .attr("id",id)
            .attr("x1",x1p)
            .attr("y1",y1p)
            .attr("x2",x2p)
            .attr("y2",y2p);
            
            
            FillandOpac.forEach(function(item, index, array) {
               
                var style_fill = (" stop-color:" + item.color +"; ") 
                
                var style_opac = (" stop-opacity:" + item.opacity +"; ")
                
                var styl_cod = (style_fill + style_opac)
                
                d3.select("#" + id) 
                .append("stop")
                .attr("offset",(item.offset+"%"))
                .attr("style",styl_cod)
                
            })

            return d3.select("#" + id)  
        }
    
        //Function to make SVG_linearGradient element
        function element_radialGradient(Outparent,id,FillandOpac){
        //element_radialGradientt(Outparent,id,ofst1,fill1,opac1,ofst2,fill2,opac2)
            
            
            //Creating the elememt
            Outparent
            .append("defs")
            .attr("id",("defs_"+id))
            .append("radialGradient")
            .attr("id",id);
            
            FillandOpac.forEach(function(item, index, array) {
               
                var style_fill = (" stop-color:" + item.color +"; ") 
                
                var style_opac = (" stop-opacity:" + item.opacity +"; ")
                
                var styl_cod = (style_fill + style_opac)
                
                d3.select("#" + id) 
                .append("stop")
                .attr("offset",(item.offset+"%"))
                .attr("style",styl_cod)
                
            })

            return d3.select("#" + id)  
        }
    
        //Function to make SVG_ellipse element
        function element_ellipse(Outparent,id,cx,cy,rx,ry,fill,stroke,strokW,scalX,scalY,tranX,tranY,rotat){
        //element_ellipse(Outparent,id,cx,cy,rx,ry,fill,stroke,strokW)
            //transform_code
                //transform_scale
                var trans_sca = (" scale("+scalX+","+scalY+") ")
                //console.log("transform_scale",trans_sca)

                //transform_translate
                var trans_tra = (" translate("+tranX+","+tranY+") ")
                //console.log("transform_translate",trans_tra)

                //transform_rotate
                var trans_rot = (" rotate("+rotat+") ")
                //console.log("transform_rotate",trans_rot)}

            //transform_code
            var trans_cod = (trans_sca + trans_tra + trans_rot)
            //console.log("transform_code",trans_cod)
            
            
            //style_options
                //style_fill
                var style_fill = (" fill:" + fill +"; ")
                //console.log("style_fill",style_fill)

                //style_stroke
                var style_stro = (" stroke:" + stroke +"; ")
                //console.log("style_stroke",style_stro)

                //style_stroke_width
                var style_strw = (" stroke-width:" + strokW +"; ")
                //console.log("style_stroke_width",style_strw)

            //transform_code
            var style_cod = (style_fill + style_stro + style_strw)
            //console.log("style_code",trans_cod)
            
            //Creating the elememt
            Outparent
            .append("ellipse")
            .attr("id",id)
            .attr("cx",cx)
            .attr("cy",cy)
            .attr("rx",rx)
            .attr("ry",ry)
            .attr("style",style_cod)
            .attr("transform",trans_cod);
            
            return d3.select("#" + id)  
        }
    //Temporary Line/Poly DataBase Part 2
        
        //All the data_Shirt_###
        function data_Shirt(x,y,v){
            //Object Answer
            var ans =  Standard_Process_Answer()
            //No Shirt
                if(v == 0){
                   //null 
                }
            //Shirt_001
                else if(v == 1){
                    //Body_001 js
                    //Part 1
                    ans.Line.push("M"+x+" "+y+" c-11 -70 -61 -102 -184 -116 -35 -4 -56 -11 -60 -21 -3 -9 3 -101 14 -206 27 -271 24 -667 -6 -788 -44 -174 -91 -318 -145 -447 -31 -73 -55 -143 -53 -154 3 -19 14 -23 88 -34 47 -7 150 -24 230 -38 317 -54 468 -62 640 -31 126 22 511 126 529 143 12 10 13 21 3 60 -6 27 -27 154 -47 283 -112 738 -136 850 -243 1125 l-38 100 -71 12 c-115 19 -167 56 -167 118 l0 35 -242 0 -241 0 -7 -41z m431 -81 c37 -68 63 -85 161 -106 l82 -17 26 -80 c15 -44 35 -96 45 -115 37 -71 82 -302 175 -890 26 -162 49 -307 51 -322 6 -34 -1 -38 -167 -81 -315 -82 -501 -98 -729 -63 -58 9 -126 16 -153 16 -26 0 -48 4 -48 9 0 9 -147 41 -187 41 -13 0 -23 3 -23 7 0 4 20 55 45 114 50 118 128 381 146 486 18 112 15 555 -4 727 -9 82 -17 150 -17 151 0 2 32 11 72 20 82 21 140 64 158 121 l12 34 163 0 164 0 28 -52z")
                    ans.Poly.push(polygonSolver("0,0 184,116 244,137 230,343 236,1131 381,1578 434,1732 346,1766 116,1804 -524,1835 -1053,1692 -1056,1632 -1009,1349 -766,224 -728,124 -657,112 -490,-6 -490,-41 -248,-41 -7,-41 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1, scalY:1, tranX:0, tranY:0, rotat:180})
                    //Part 2
                    ans.Line.push("M"+x+" "+y+" c-40 -17 -71 -58 -85 -109 -14 -52 0 -126 37 -199 32 -63 141 -173 205 -207 l46 -25 49 29 c198 115 302 357 203 470 -61 70 -147 68 -213 -5 -20 -22 -36 -46 -36 -53 0 -6 -8 2 -19 18 -27 44 -63 74 -102 85 -42 12 -47 12 -85 -4z m114 -42 c13 -9 38 -38 55 -66 27 -44 33 -48 42 -33 57 99 124 141 180 114 50 -24 70 -63 70 -132 0 -109 -74 -225 -196 -306 l-61 -41 -41 23 c-106 58 -210 200 -221 303 -14 124 79 199 172 138z")
                    ans.Poly.push(polygonSolver("0,0 85,109 48,308 -157,515 -203,540 -252,511 -455,41 -242,46 -206,99 -187,81 -85,-4 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1, scalY:1, tranX:-100, tranY:650, rotat:180})
                }
            //Shirt_002
                else if(v == 2){
                    //Shirt_002 js
                    //Part 2
                    ans.Line.push("M"+x+" "+y+" c-3 -5 1 -22 8 -37 8 -15 23 -55 35 -88 17 -52 19 -68 9 -120 -5 -33 -12 -54 -14 -47 -3 6 -13 12 -24 12 -10 0 -19 4 -19 8 0 5 -20 19 -45 32 -58 30 -151 122 -190 189 -18 30 -37 51 -47 51 -10 0 -18 -4 -18 -9 0 -4 -26 -18 -59 -30 -44 -16 -61 -28 -70 -49 -12 -29 -9 -111 8 -242 21 -153 8 -419 -25 -534 -8 -27 -14 -77 -14 -110 0 -59 -2 -62 -38 -88 -120 -85 -292 -261 -351 -358 -102 -172 -101 -168 -101 -266 0 -78 3 -93 20 -109 11 -10 20 -25 20 -33 0 -8 12 -31 26 -50 24 -31 30 -33 63 -28 80 14 86 13 89 -17 2 -19 15 -36 44 -54 37 -25 42 -26 71 -13 44 20 125 17 312 -9 207 -29 396 -38 484 -22 37 7 110 28 162 48 52 20 119 38 151 40 37 3 63 11 77 24 22 21 46 25 56 9 9 -15 63 -12 90 6 13 8 30 33 39 55 9 21 23 39 31 39 8 0 15 4 15 9 0 5 12 12 26 15 l25 7 -6 92 c-10 137 -40 188 -248 432 -56 66 -126 142 -154 170 -58 55 -74 97 -91 245 l-9 75 40 68 c76 129 59 212 -71 349 -56 59 -71 80 -70 104 1 44 -11 75 -50 122 -50 63 -71 80 -103 87 -15 4 -33 13 -40 21 -13 16 -35 18 -44 4z m-231 -137 c41 -62 144 -149 199 -169 33 -12 17 -21 -58 -34 -66 -11 -81 -11 -129 4 -29 9 -63 26 -74 37 -12 10 -24 19 -27 19 -10 0 -31 24 -59 65 -44 64 -31 115 36 145 40 18 41 18 63 -3 11 -12 34 -41 49 -64z m354 43 c48 -25 72 -62 72 -111 0 -58 -27 -115 -54 -115 -39 0 -47 14 -41 66 3 27 0 76 -8 112 -14 66 -12 70 31 48z m-397 -276 c66 -34 205 -27 303 15 19 9 39 10 60 4 50 -14 72 -11 105 17 l31 26 21 -26 c12 -15 41 -50 66 -79 24 -29 52 -65 60 -81 19 -36 21 -108 4 -139 -17 -31 -69 -65 -116 -75 -30 -6 -40 -13 -40 -27 0 -21 3 -22 48 -11 27 6 28 5 25 -26 -3 -31 -6 -33 -58 -46 -105 -26 -590 -25 -616 1 -9 8 -8 107 1 234 7 102 2 179 -21 308 -5 29 -3 27 42 -23 25 -29 64 -62 85 -72z m578 -509 c6 -22 15 -60 20 -85 8 -44 7 -48 -20 -71 -17 -14 -48 -26 -77 -30 -26 -4 -64 -11 -85 -17 -56 -14 -371 -8 -435 9 -29 7 -64 13 -78 13 -48 0 -64 17 -64 66 0 25 5 66 11 91 12 45 12 45 48 39 20 -3 63 -11 96 -16 88 -15 413 -2 495 20 36 9 68 18 71 19 3 0 11 -17 18 -38z m56 -296 c36 -210 -7 -347 -127 -410 -61 -32 -111 -34 -210 -9 -104 27 -140 48 -225 137 -94 98 -98 105 -147 250 -37 106 -39 141 -10 116 33 -27 389 -48 499 -29 83 14 146 30 160 42 5 4 16 8 25 8 13 0 20 -22 35 -105z m-759 10 c22 -75 33 -105 55 -147 5 -10 9 -24 9 -31 0 -8 9 -24 20 -37 11 -13 20 -29 20 -36 0 -8 9 -19 20 -26 11 -7 20 -16 20 -20 0 -13 72 -77 130 -116 64 -43 115 -58 221 -68 100 -9 156 11 221 78 36 38 51 64 67 117 24 80 27 202 7 296 -7 33 -11 62 -9 64 2 3 14 -5 26 -17 18 -18 22 -33 20 -75 -1 -37 4 -59 18 -78 23 -33 24 -60 4 -99 -14 -27 -14 -34 0 -66 22 -53 19 -70 -19 -99 -31 -24 -33 -28 -28 -74 4 -42 1 -51 -16 -60 -13 -7 -38 -9 -62 -5 -38 6 -41 5 -51 -24 -6 -17 -19 -34 -29 -37 -29 -9 -87 5 -106 26 -17 19 -18 19 -39 -1 -12 -11 -36 -24 -53 -29 -33 -10 -54 4 -93 60 -13 18 -20 21 -30 13 -61 -48 -139 -8 -139 71 0 21 -4 25 -30 25 -17 0 -44 7 -60 15 -29 15 -30 18 -30 85 0 69 0 69 -34 85 -47 22 -63 63 -47 117 12 37 11 41 -10 57 -57 41 -63 54 -44 91 26 50 45 35 71 -55z m-116 11 c0 -13 11 -31 25 -42 14 -10 25 -24 25 -31 0 -6 6 -13 13 -16 9 -3 9 -7 -2 -20 -22 -27 -5 -82 37 -124 23 -24 37 -47 38 -65 1 -15 2 -41 3 -57 1 -38 43 -78 89 -86 34 -5 39 -11 55 -56 22 -62 48 -76 115 -63 46 9 48 9 84 -28 44 -44 68 -47 117 -14 l35 22 43 -23 c59 -31 76 -29 116 12 29 30 41 35 78 35 39 0 47 4 68 35 18 27 22 42 17 69 -6 30 -3 37 25 59 33 25 31 18 28 147 -1 25 2 58 6 73 7 26 -7 71 -26 87 -3 3 -9 22 -12 43 -4 26 -2 37 7 37 7 0 53 -48 103 -107 140 -166 168 -203 203 -271 l31 -62 -82 -81 -83 -81 -11 39 c-6 22 -18 39 -28 41 -9 2 -38 -15 -65 -37 -27 -23 -53 -41 -58 -41 -5 0 -16 -9 -24 -20 -8 -11 -20 -20 -28 -20 -7 0 -37 -11 -65 -24 -71 -34 -213 -48 -364 -35 -63 5 -119 12 -124 15 -5 3 -47 16 -92 28 -45 13 -118 42 -161 64 -44 23 -85 42 -92 42 -17 0 -26 -45 -18 -97 l7 -45 -24 15 c-13 8 -43 21 -66 27 -22 7 -76 39 -118 71 -43 32 -113 76 -156 99 -70 36 -97 60 -70 60 5 0 24 26 42 58 68 121 115 181 222 285 61 59 117 107 124 107 7 0 13 -11 13 -24z m-349 -508 c49 -26 109 -68 154 -111 17 -16 46 -36 65 -44 19 -8 37 -18 40 -22 10 -13 122 -51 152 -51 24 0 29 4 25 18 -3 9 -12 38 -20 65 -17 54 -8 61 35 27 49 -38 184 -88 295 -110 169 -33 382 -22 481 25 117 56 161 82 200 118 l32 31 0 -41 c0 -43 13 -56 47 -47 11 3 53 40 94 82 l74 77 -4 -49 c-3 -42 -7 -50 -30 -59 -17 -6 -37 -28 -52 -56 -21 -41 -28 -46 -62 -49 -24 -2 -48 3 -65 14 -25 16 -27 16 -37 -1 -21 -38 -55 -62 -79 -58 -13 3 -85 -17 -162 -43 l-139 -49 -155 1 c-88 1 -207 8 -275 18 -276 39 -347 45 -362 30 -8 -8 -23 -14 -33 -14 -25 0 -70 49 -70 77 0 12 -3 28 -6 37 -7 18 -31 21 -36 5 -2 -6 -26 -13 -52 -16 -54 -7 -76 9 -76 54 0 13 -9 31 -20 40 -15 13 -20 30 -20 70 0 29 4 53 8 53 5 0 29 -10 53 -22z")
                    ans.Poly.push(polygonSolver("0,0 -8,37 -43,125 -52,245 -38,292 -14,280 5,272 50,240 240,51 287,0 305,9 364,39 434,88 426,330 451,864 465,974 503,1062 854,1420 955,1686 935,1795 915,1828 889,1878 826,1906 737,1923 693,1977 622,1990 310,1999 -174,2021 -336,1973 -487,1933 -564,1909 -620,1900 -710,1894 -749,1839 -780,1800 -795,1791 -821,1776 -846,1769 -840,1677 -592,1245 -438,1075 -347,830 -338,755 -378,687 -307,338 -237,234 -187,112 -84,25 -44,4 0,00",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1.7, scalY:1.4, tranX:-1000, tranY:-1050, rotat:180})
                    //Part 2
                    ans.Line.push(false)
                    ans.Poly.push(polygonSolver("0,0 39,39 69,69 124,121 168,159 176,123 244,105 312,150 353,185 410,212 479,239 594,258 1003,232 1071,207 1158,171 1273,117 1291,174 1288,232 1327,229 1506,130 1741,2 1749,15 1758,50 1713,207 1693,246 1584,264 1544,286 1412,367 1108,386 676,414 380,338 309,327 244,306 177,296 57,237 26,197 13,188 -12,173 -33,76 -24,-19 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1.7, scalY:1.4, tranX:-1800, tranY:550, rotat:180})
                    //Part 3
                    ans.Line.push(false)
                    ans.Poly.push(polygonSolver("0,0 -22,97 -318,97 -333,46 -323,9 -197,2 -39,-10 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1.7, scalY:1.4, tranX:-700, tranY:-1050, rotat:180})
                    //Part 4
                    ans.Line.push(false)
                    ans.Poly.push(polygonSolver("0,0 285,339 347,475 332,487 268,492 -25,675 -148,696 -157,635 -161,588 -228,617 -519,728 -696,749 -843,732 -898,713 -1063,639 -1218,568 -1232,598 -1250,635 -1349,547 -1432,425 -1258,165 -1123,5 -1057,-22 -1051,103 -1070,209 -1068,260 -1071,374 -1041,407 -1022,428 -1017,473 -952,524 -866,569 -761,583 -687,583 -655,598 -577,543 -534,517 -401,470 -346,415 -264,302 -228,222 -183,122 -159,34 -112,-72 -113,-92 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1.7, scalY:1.4, tranX:-400, tranY:100, rotat:180})
                    //Part 5
                    ans.Line.push(false)
                    ans.Poly.push(polygonSolver("0,0 40,18 556,41 674,25 736,19 746,57 762,155 739,237 552,301 -21,260 -91,228 -77,177 -63,94 -30,-9 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1.7, scalY:1.4, tranX:-1300, tranY:-220, rotat:180})
                    //Part 6
                    ans.Line.push(false)
                    ans.Poly.push(polygonSolver("0,0 12,88 15,152 -23,172 -55,219 -87,323 -102,378 -157,504 -206,517 -245,534 -310,605 -386,625 -419,633 -445,671 -584,677 -629,677 -789,649 -809,637 -909,548 -925,527 -959,357 -964,327 -964,190 -965,134 -975,74 -864,-2 -863,212 -782,487 -759,518 -555,548 -493,532 -227,347 -172,255 -150,202 -32,-17 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1.7, scalY:1.4, tranX:-500, tranY:00, rotat:180})
                    //Part 8
                    ans.Line.push(false)
                    ans.Poly.push(polygonSolver("0,0 -15,208 -14,470 0,586 -35,615 -71,643 -362,643 -672,626 -726,601 -761,552 -782,504 -855,308 -741,126 -616,103 -537,115 -429,134 -272,147 -77,62 -21,-21 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1.7, scalY:1.4, tranX:-600, tranY:-850, rotat:180})
                    //Part 9
                    ans.Line.push(false)
                    ans.Poly.push(polygonSolver("0,0 56,15 132,44 160,127 92,287 12,345 -126,381 -288,342 -342,331 -397,346 -493,315 -520,230 -490,133 -391,31 -351,11 -294,16 -322,82 -349,207 -342,286 -202,213 -97,85 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1.7, scalY:1.4, tranX:-700, tranY:-1050, rotat:180})
                    
                }
            //Reture Object Answer data
            return ans 
        }
    
    
        //All the data_Body_###
        function data_Body(x,y,v){
            //Object Answer
            var ans = Standard_Process_Answer()
            //No Body
                if(v == 0){
                    //null
                }
            //Shirt_001
                else if(v == 001){
                    //Body_001 js
                    ans.Line.push("M"+x+" "+y+" c-11 -70 -61 -102 -184 -116 -35 -4 -56 -11 -60 -21 -3 -9 3 -101 14 -206 27 -271 24 -667 -6 -788 -44 -174 -91 -318 -145 -447 -31 -73 -55 -143 -53 -154 3 -19 14 -23 88 -34 47 -7 150 -24 230 -38 317 -54 468 -62 640 -31 126 22 511 126 529 143 12 10 13 21 3 60 -6 27 -27 154 -47 283 -112 738 -136 850 -243 1125 l-38 100 -71 12 c-115 19 -167 56 -167 118 l0 35 -242 0 -241 0 -7 -41z m431 -81 c37 -68 63 -85 161 -106 l82 -17 26 -80 c15 -44 35 -96 45 -115 37 -71 82 -302 175 -890 26 -162 49 -307 51 -322 6 -34 -1 -38 -167 -81 -315 -82 -501 -98 -729 -63 -58 9 -126 16 -153 16 -26 0 -48 4 -48 9 0 9 -147 41 -187 41 -13 0 -23 3 -23 7 0 4 20 55 45 114 50 118 128 381 146 486 18 112 15 555 -4 727 -9 82 -17 150 -17 151 0 2 32 11 72 20 82 21 140 64 158 121 l12 34 163 0 164 0 28 -52z")
                    ans.Poly.push(polygonSolver("0,0 184,116 244,137 230,343 236,1131 381,1578 434,1732 346,1766 116,1804 -524,1835 -1053,1692 -1056,1632 -1009,1349 -766,224 -728,124 -657,112 -490,-6 -490,-41 -248,-41 -7,-41 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1, scalY:1, tranX:0, tranY:0, rotat:180})
                }
            //Reture Object Answer data
            return ans 
        }
    
        //All the data_Mouth_###
        function data_Mouth(x,y,v){
            //Object Answer
            var ans =  Standard_Process_Answer()
            //No Eyes
                if(v == 0){
               //do nonthing
            }
            //Mouth_001 js
                else if(v == 001){
                //Mouth_001 js
                ans.Line.push("M"+x+" "+y+" c-12 -30 8 -127 37 -183 86 -163 237 -239 457 -230 98 4 114 7 184 41 91 44 174 117 210 184 53 100 43 135 -31 108 -80 -28 -203 -45 -326 -45 l-123 0 -48 -40 c-27 -22 -52 -40 -55 -40 -4 0 -15 23 -25 51 -25 69 -34 74 -79 43 -21 -14 -43 -23 -49 -21 -7 3 -18 24 -25 46 -8 30 -24 50 -53 71 -46 33 -66 37 -74 15z m99 -132 c18 -37 40 -69 48 -71 9 -1 28 10 43 25 l28 27 19 -24 c10 -14 19 -32 19 -41 0 -21 36 -53 53 -46 7 3 35 21 63 41 l49 37 157 4 c87 2 161 6 166 9 5 3 27 9 50 14 l41 10 -14 -27 c-28 -52 -97 -104 -206 -152 -119 -54 -157 -59 -250 -35 -167 44 -241 96 -290 204 -31 68 -36 92 -19 92 6 0 25 -30 43 -67z")
                ans.Poly.push(polygonSolver("0,0 -37,183 -494,413 -678,372 -888,188 -857,80 -531,125 -408,125 -360,165 -305,205 -280,154 -201,111 -152,132 -127,86 -74,15 0,0",x,y))
                ans.Elli.push(false)
                ans.Data.push({scalX:-1.7, scalY:2, tranX:-300, tranY:400, rotat:180})
                    
                //Part 1
                ans.Line.push(false)
                ans.Poly.push(polygonSolver("0,0 -34,180 -209,360 -497,414 -616,400 -541,252 -388,155 -350,175 -324,250 -270,140 -247,125 -204,130 -171,136 -131,130 -57,-0 0,0",x,y))
                ans.Elli.push(false)
                ans.Data.push({scalX:-1.7, scalY:2, tranX:-300, tranY:400, rotat:180})
            }
            //Mouth_002 js
                else if(v == 002){
                //Mouth_002 js
                ans.Line.push("M"+x+" "+y+" c-21 -25 22 -80 88 -112 46 -23 70 -28 132 -28 85 0 139 22 184 75 29 35 32 52 12 69 -18 15 -40 6 -55 -23 -21 -39 -63 -56 -138 -56 -79 0 -142 25 -168 64 -19 29 -37 33 -55 11z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                ans.Data.push({scalX:1.5, scalY:1.5, tranX:1800, tranY: 1200, rotat:180})   
            }
            //Mouth_003 js
                else if(v == 003){
                //Mouth_003 js
                ans.Line.push("M"+x+" "+y+" c-18 -18 -15 -26 24 -74 28 -33 38 -56 41 -92 7 -77 12 -92 31 -92 28 0 42 20 42 60 l0 35 48 1 c29 0 65 10 96 26 47 24 51 24 97 11 43 -13 55 -13 104 2 31 8 69 28 86 43 28 25 29 29 15 47 -15 20 -15 20 -64 -7 -56 -32 -105 -35 -159 -13 -35 15 -37 14 -82 -16 -42 -28 -51 -30 -106 -26 -39 4 -63 11 -72 22 -23 33 -74 85 -81 85 -5 0 -13 -5 -20 -12z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                ans.Data.push({scalX:1.5, scalY:1.5, tranX:1800, tranY: 1200, rotat:180})   
            }
            //Mouth_004 js
                else if(v == 004){
                //Mouth_004 js
                ans.Line.push("M"+x+" "+y+" c-12 -9 -57 -24 -99 -35 -138 -35 -514 -23 -594 20 -18 10 -25 9 -38 -4 -15 -15 -15 -17 0 -32 31 -31 127 -46 334 -51 217 -6 313 6 393 47 48 24 58 38 39 56 -12 12 -17 12 -35 -1z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                ans.Data.push({scalX:1.5, scalY:1.5, tranX:1200, tranY: 1200, rotat:180})   
            }
            //Mouth_005 js
                else if(v == 005){
                //Mouth_005 js
                ans.Line.push("M"+x+" "+y+" c-5 -7 -9 -42 -9 -77 0 -50 4 -66 18 -75 14 -9 21 -6 40 16 l22 26 246 7 c243 6 246 6 252 -14 7 -29 45 -27 57 3 11 30 -7 106 -28 114 -9 3 -22 -3 -31 -15 -16 -19 -32 -20 -263 -25 l-246 -5 -6 28 c-6 31 -36 40 -52 17z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                ans.Data.push({scalX:1.5, scalY:1.5, tranX:1900, tranY: 1200, rotat:180})   
            }
            //Mouth_006 js
                else if(v == 006){
                //Mouth_006 js
                ans.Line.push("M"+x+" "+y+" c-3 -10 13 -36 45 -71 67 -75 82 -112 74 -184 -8 -66 7 -90 40 -66 14 10 20 31 24 87 l6 74 35 2 c19 1 61 -5 92 -14 64 -17 88 -13 88 17 0 32 -61 53 -164 55 l-89 2 -49 57 c-51 57 -89 73 -102 41z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                ans.Data.push({scalX:1.5, scalY:1.5, tranX:1900, tranY: 1100, rotat:180})   
            }
            //Mouth_007 js
                else if(v == 007){
                //Mouth_007 js
                ans.Line.push("M"+x+" "+y+" c-89 -10 -245 -51 -332 -88 -51 -21 -69 -34 -71 -50 -4 -29 6 -28 107 12 143 58 408 104 426 76 5 -7 -16 -35 -51 -71 -43 -43 -55 -62 -47 -70 19 -19 48 -1 123 76 56 58 70 78 61 89 -6 7 -8 16 -4 19 3 4 -5 7 -18 7 -13 0 -46 2 -74 4 -27 3 -81 1 -120 -4z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                ans.Data.push({scalX:1.5, scalY:1.5, tranX:1500, tranY: 1100, rotat:180})   
            }
            //Mouth_008 js
                else if(v == 008){
                //Mouth_008 js
                //Part 1
                ans.Line.push("M"+x+" "+y+" c-34 -7 -83 -23 -110 -35 -64 -29 -80 -31 -87 -14 -6 16 -32 19 -41 3 -12 -18 54 -139 75 -139 28 0 33 16 15 44 -16 23 -15 25 7 40 94 61 283 79 390 37 32 -12 85 -40 118 -62 58 -39 80 -43 80 -14 0 20 -67 72 -135 104 -107 51 -196 61 -312 36z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                ans.Data.push({scalX:1.5, scalY:1.5, tranX:1900, tranY: 1100, rotat:180})
                //Part 2
                ans.Line.push("M"+x+" "+y+" c-2 -4 -8 -38 -12 -75 -8 -78 -21 -99 -100 -153 -55 -38 -68 -66 -34 -73 25 -5 142 88 162 129 10 22 18 64 20 105 2 57 -1 69 -15 72 -9 2 -18 -1 -21 -5z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                ans.Data.push({scalX:1.1, scalY:1.1, tranX:2100, tranY: 2050, rotat:180})  
            }
            //Mouth_009 js
                else if(v == 009){
                //Mouth_009 js
                //Part 1
                ans.Line.push("M"+x+" "+y+" c-18 -30 22 -37 286 -47 220 -8 267 -7 280 4 30 29 -5 37 -192 45 -269 11 -366 11 -374 -2z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                ans.Data.push({scalX:1.5, scalY:1.5, tranX:1900, tranY: 1200, rotat:180})
                //Part 2
                ans.Line.push("M"+x+" "+y+" c-53 -56 -65 -80 -65 -136 0 -81 127 -237 140 -171 1 8 -12 33 -29 55 -78 96 -79 147 -8 220 27 28 40 48 36 58 -10 26 -30 19 -74 -26z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                ans.Data.push({scalX:1.1, scalY:1.1, tranX:2500, tranY: 1850, rotat:180})  
            }
            //Mouth_010 js
                else if(v == 10){
                    //Mouth_010 js
                    //Part 1
                    ans.Line.push("M"+x+" "+y+" c-7 -7 -12 -20 -12 -30 0 -24 -30 -38 -82 -38 -83 -1 -128 -16 -168 -55 l-39 -38 -45 37 c-81 66 -125 80 -261 82 -111 2 -120 3 -129 23 -12 28 -40 23 -44 -7 -4 -27 35 -112 72 -157 20 -25 27 -28 38 -17 11 11 9 20 -8 52 -32 57 -21 64 82 57 115 -7 165 -26 238 -88 l59 -50 50 50 c52 52 54 53 180 64 47 5 49 4 44 -19 -2 -13 1 -31 7 -39 10 -13 14 -14 30 -2 25 19 36 156 14 175 -11 9 -17 9 -26 0z")
                    ans.Poly.push(false)
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1.5, scalY:1.5, tranX:1400, tranY: 1100, rotat:180})
                    //Part 2
                    ans.Line.push("M"+x+" "+y+" c-4 -12 5 -26 28 -45 61 -50 152 -99 185 -99 37 0 97 41 137 93 31 41 34 55 11 64 -11 4 -32 -12 -68 -51 -67 -72 -82 -72 -186 -1 -44 30 -85 55 -91 55 -5 0 -12 -7 -16 -16z")
                    ans.Poly.push(false)
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1.1, scalY:1.1, tranX:2400, tranY: 2150, rotat:180})  
                }
            //Mouth_011 js
                else if(v == 11){
                    //Mouth_011 js
                    //Part 1
                    ans.Line.push("M"+x+" "+y+" c-105 -64 -342 -318 -342 -366 0 -39 39 -14 98 61 112 145 257 275 318 286 65 12 109 -58 120 -192 7 -87 16 -104 42 -79 13 14 14 28 4 106 -12 103 -45 171 -96 202 -45 27 -75 24 -144 -18z")
                    ans.Poly.push(false)
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1.5, scalY:1.5, tranX:1500, tranY: 950, rotat:180})
                    //Part 2
                    ans.Line.push("M"+x+" "+y+" c-4 -7 -14 -44 -22 -83 -22 -108 -41 -155 -95 -239 -56 -87 -60 -121 -16 -126 22 -3 32 5 66 55 61 90 91 156 113 249 26 111 23 148 -13 152 -14 2 -29 -2 -33 -8z")
                    ans.Poly.push(false)
                    ans.Elli.push(false)
                    ans.Data.push({scalX:0.9, scalY:0.9, tranX:2300, tranY: 2550, rotat:180})
                    //Part 3
                    ans.Line.push("M"+x+" "+y+" c-4 -13 -13 -81 -20 -151 -12 -140 -23 -175 -77 -248 -42 -58 -43 -92 -2 -97 23 -3 34 6 72 58 25 34 53 85 61 113 18 60 42 305 32 330 -10 26 -56 22 -66 -5z")
                    ans.Poly.push(false)
                    ans.Elli.push(false)
                    ans.Data.push({scalX:0.9, scalY:0.9, tranX:2100, tranY: 2550, rotat:180}) 
                }
            //Mouth_012 js
                else if(v == 12){
                    //Mouth_012 js
                    //Part 1
                    ans.Line.push("M"+x+" "+y+" c-14 -13 -6 -99 12 -138 89 -193 467 -217 641 -40 39 39 42 47 30 60 -9 9 -133 35 -325 70 -316 56 -347 60 -358 48z m223 -77 c74 -13 193 -35 264 -47 l128 -23 -33 -27 c-108 -88 -348 -96 -457 -15 -46 33 -74 73 -79 110 -4 30 -2 33 19 30 13 -2 84 -15 158 -28z")
                    ans.Poly.push(polygonSolver("0,0 -20,138 -60,190 -160,270 -300,300 -653,178 -683,118 -358,48 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1.7, scalY:1.5, tranX:1900, tranY: 1050, rotat:180})
                    //Part 2
                    ans.Line.push(false)
                    ans.Poly.push(polygonSolver("0,0 -12,138 -653,178 -683,118 -358,48 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1.7, scalY:1.5, tranX:1900, tranY: 1050, rotat:180})
                }
            //Mouth_013 js
                else if(v == 13){
                    //Mouth_013 js
                    ans.Line.push("M"+x+" "+y+" c-35 -8 -74 -21 -88 -30 l-24 -16 23 -41 c26 -46 91 -93 153 -109 23 -7 91 -9 160 -7 99 3 128 8 166 26 64 31 95 62 108 107 17 62 6 71 -100 78 -145 11 -328 7 -398 -8z m446 -49 c14 -13 -22 -57 -66 -78 -41 -20 -61 -23 -181 -23 -133 0 -136 0 -185 31 -27 17 -52 39 -54 50 -2 10 0 16 3 13 3 -3 28 0 54 7 49 14 415 14 429 0z")
                    ans.Poly.push(polygonSolver("0,0 88,30 112,46 89,87 -64,196 -224,203 -390,177 -498,70 -398,-8 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1.7, scalY:1.5, tranX:1700, tranY: 1150, rotat:180})
                }
            //Mouth_014 js
                else if(v == 14){
                    //Mouth_014 js
                    ans.Line.push("M"+x+" "+y+" c-366 -20 -489 -50 -697 -171 l-70 -41 -87 45 c-100 52 -139 56 -144 12 -3 -24 3 -31 65 -62 79 -39 143 -103 143 -142 0 -38 18 -64 43 -64 27 0 61 36 50 53 -4 6 -10 31 -13 54 -6 40 -5 44 18 50 13 3 178 3 365 0 420 -7 503 -18 785 -109 108 -34 122 -31 166 30 l25 35 -24 53 c-43 98 -78 138 -144 168 -56 25 -376 98 -411 94 -8 -1 -40 -3 -70 -5z m-106 -121 c5 -37 5 -67 0 -72 -13 -12 -433 -32 -469 -22 -47 13 -44 39 7 60 131 57 330 103 418 99 l35 -2 9 -63z m282 56 c3 -3 2 -40 -2 -82 l-7 -76 -38 0 c-21 0 -70 5 -109 12 l-70 12 0 67 c0 56 3 68 18 73 21 6 201 1 208 -6z m175 -49 c50 -11 89 -26 89 -32 0 -14 -38 -135 -46 -149 -4 -5 -10 -5 -17 0 -7 5 -35 14 -62 20 -103 22 -104 22 -98 94 8 103 0 99 134 67z m243 -174 l19 -35 -26 -26 c-24 -24 -29 -25 -64 -14 -42 14 -73 37 -73 54 0 6 11 34 25 61 13 28 25 57 25 65 1 19 68 -56 94 -105z")
                    ans.Poly.push(polygonSolver("0,0 697,171 767,212 854,167 998,155 933,117 790,259 747,323 697,270 710,316 692,266 127,256 -258,325 -525,355 -624,345 -649,310 -625,257 -481,89 -70,-5 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1, scalY:0.9, tranX:2100, tranY: 2450, rotat:180})
                }
            //Mouth_015 js
                else if(v == 15){
                    //Mouth_015 js
                    ans.Line.push("M"+x+" "+y+" c-7 -7 -12 -22 -12 -35 0 -43 -33 -108 -78 -155 -41 -43 -48 -68 -18 -68 7 0 25 14 41 30 16 17 33 30 38 30 5 0 32 -20 60 -44 163 -138 280 -184 443 -172 51 3 100 9 107 12 12 4 13 -2 4 -41 -8 -33 -7 -49 1 -57 19 -19 40 0 47 44 11 68 47 119 155 218 55 51 100 99 100 107 0 26 -31 26 -59 -1 -34 -32 -94 -50 -240 -72 -95 -13 -130 -14 -203 -5 -99 13 -219 55 -293 104 -43 28 -51 38 -55 71 -5 42 -18 54 -38 34z m204 -217 c125 -46 285 -61 399 -38 11 3 38 8 60 12 l39 7 -49 -54 c-44 -47 -57 -54 -110 -65 -156 -31 -273 -3 -410 100 -104 78 -127 100 -120 119 6 15 13 13 58 -17 29 -19 89 -48 133 -64z")
                    ans.Poly.push(polygonSolver("0,0 12,35 90,190 108,258 67,228 29,198 -31,242 -474,414 -581,402 -585,443 -586,500 -633,456 -788,238 -888,131 -829,132 -589,204 -386,209 -93,105 -38,34 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1, scalY:0.9, tranX:2800, tranY: 2450, rotat:180})
                }
            //Mouth_016 js
                else if(v == 16){
                    //Mouth_016 js
                    ans.Line.push("M"+x+" "+y+" c-80 -27 -109 -27 -333 9 -62 10 -87 11 -125 1 -146 -39 -226 -198 -165 -334 50 -111 173 -117 295 -12 64 54 145 86 217 85 47 0 73 -9 182 -66 132 -68 160 -75 195 -50 37 25 47 67 42 177 -5 118 -19 154 -75 193 -50 33 -130 33 -233 -3z m195 -34 c33 -15 72 -75 57 -90 -36 -36 -258 -61 -412 -47 -191 17 -370 58 -370 84 0 7 14 21 31 29 49 25 117 29 194 12 105 -22 213 -29 270 -16 28 6 56 11 63 12 6 1 12 5 12 9 0 19 116 25 155 7z m-595 -138 c47 -10 114 -22 150 -26 51 -5 60 -9 40 -15 -50 -14 -126 -58 -164 -94 -86 -81 -174 -73 -208 18 -17 46 -12 102 13 148 9 18 12 18 47 3 20 -8 75 -23 122 -34z m660 -59 c0 -42 -5 -65 -18 -81 -17 -21 -20 -21 -52 -8 -19 8 -49 27 -66 42 -18 14 -51 35 -74 45 -36 16 -39 20 -22 25 11 4 24 6 28 4 20 -5 141 15 164 27 14 7 28 11 32 8 5 -2 8 -30 8 -62z")
                    ans.Poly.push(polygonSolver("0,0 173,30 560,40 623,324 490,364 190,275 111,251 -71,317 -266,367 -308,190 -233,-3 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1, scalY:0.9, tranX:2400, tranY: 2450, rotat:180})
                }
            //Mouth_017 js
                else if(v == 17){
                    //Mouth_017 js
                    ans.Line.push("M"+x+" "+y+" c-288 -19 -441 -42 -478 -73 -11 -8 -13 -29 -10 -82 9 -131 63 -208 190 -269 200 -95 402 -74 522 54 54 58 80 107 96 183 13 64 5 160 -15 177 -19 15 -151 20 -305 10z m271 -59 c0 -3 2 -21 5 -40 6 -46 -21 -147 -51 -193 -52 -79 -139 -132 -229 -141 -100 -9 -249 32 -343 95 -49 33 -54 58 -16 76 38 17 38 17 84 -33 47 -51 55 -49 84 15 10 21 20 38 24 38 7 -2 252 15 264 18 4 1 14 2 22 3 8 0 15 8 15 17 0 15 -9 16 -72 11 -40 -4 -114 -10 -164 -13 l-90 -7 -23 -39 -22 -39 -22 28 c-23 30 -57 63 -65 63 -3 0 -20 -12 -39 -26 -42 -32 -58 -27 -66 23 -12 71 -9 93 16 102 53 20 227 38 467 49 165 7 219 5 221 -7z")
                    ans.Poly.push(polygonSolver("0,0 478,73 488,155 298,424 100,480 000,480 -224,370 -320,187 -305,10 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1, scalY:0.9, tranX:2400, tranY: 2450, rotat:180})
                }
            //Mouth_018 js
                else if(v == 18){
                    //Mouth_018 js
                    ans.Line.push("M"+x+" "+y+" c-137 -57 -242 -167 -302 -316 -14 -35 -33 -71 -42 -81 -36 -40 -16 -46 172 -53 111 -5 188 -12 204 -20 49 -25 70 8 25 41 -23 17 -25 26 -31 138 -4 67 -4 151 0 187 7 62 9 67 37 77 21 7 30 16 27 28 -5 26 -26 25 -90 -1z m-25 -239 l5 -167 -126 6 c-70 4 -128 7 -129 8 -1 1 11 30 25 66 l28 65 64 5 c49 4 65 9 65 20 0 10 -13 16 -42 18 -24 2 -43 8 -43 14 0 18 137 146 146 135 1 -1 4 -77 7 -170z")
                    ans.Poly.push(polygonSolver("0,0 302,316 344,397 172,450 -32,470 -57,429 -26,291 -26,104 -63,27 -90,-1 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1, scalY:0.9, tranX:2400, tranY: 2450, rotat:180})
                }
            //Mouth_019 js
                else if(v == 19){
                    //Mouth_019 js
                    ans.Line.push("M"+x+" "+y+" c-87 -44 -114 -138 -70 -236 45 -99 252 -252 340 -252 46 0 183 75 251 137 139 129 148 286 19 351 -62 31 -131 30 -199 -4 -29 -15 -55 -33 -58 -40 -4 -10 -13 -8 -37 11 -78 59 -169 71 -246 33z m166 -77 c18 -11 44 -35 59 -55 15 -20 35 -36 45 -36 10 0 33 18 50 40 39 49 77 70 125 70 42 0 90 -22 99 -45 33 -87 -58 -207 -212 -279 l-62 -30 -62 30 c-190 90 -281 254 -173 312 31 18 97 14 131 -7z")
                    ans.Poly.push(polygonSolver("0,0 70,236 -270,488 -521,351 -590,40 -341,4 -283,44 -246,33 0,0",x,y))
                    ans.Elli.push(false)
                    ans.Data.push({scalX:1, scalY:0.9, tranX:2400, tranY: 2450, rotat:180})
                }
            //Reture Object Answer data
            return ans
        }
    
        //All the data_Eyebrows_###
        function data_Eyebrows(x,y,side,v){
            //Object Answer
            var ans =  Standard_Process_Answer()
            //No Eyebrows
                if(v == 0){
               //do nonthing
            }
            //Eyebrows_001 js
                else if(v == 001){
                //Eyebrows_001 js
                ans.Line.push("M"+x+" "+y+" c-4 -8 -4 -21 -1 -29 7 -17 102 -49 227 -75 152 -32 190 -31 190 9 0 22 -10 25 -105 40 -84 13 -176 36 -228 55 -48 19 -76 19 -83 0z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                if(side){ans.Data.push({scalX:2, scalY:-1.5, tranX:1950, tranY:-3000, rotat:180})}
                    else{ans.Data.push({scalX:-2, scalY:-1.5, tranX:10, tranY:-3000, rotat:180})}
            }
            //Eyebrows_002 js
                else if(v == 002){
                //Eyebrows_002 js
                //Part 1
                ans.Line.push("M"+x+" "+y+" c-11 -2 -46 -9 -77 -15 -60 -12 -79 -32 -54 -57 12 -13 24 -13 72 -4 148 30 359 6 517 -59 88 -37 107 -37 107 -3 0 22 -10 30 -67 56 -106 48 -242 79 -368 83 -60 2 -119 2 -130 -1z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                if(side){ans.Data.push({scalX:1.25, scalY:-1.25, tranX:2800, tranY:-3200, rotat:180})}
                    else{ans.Data.push({scalX:-1.25, scalY:-1.25, tranX:-300, tranY:-3200, rotat:180})}
                //Part 2
                ans.Line.push("M"+x+" "+y+" c-83 -13 -112 -26 -112 -51 0 -25 30 -31 98 -18 146 29 345 7 483 -51 35 -15 79 -30 97 -32 29 -5 32 -3 32 21 0 20 -9 30 -37 45 -79 39 -199 74 -316 90 -95 13 -137 13 -245 -4z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                if(side){ans.Data.push({scalX:1.25, scalY:-1.25, tranX:2800, tranY:-3100, rotat:180})}
                    else{ans.Data.push({scalX:-1.25, scalY:-1.25, tranX:-300, tranY:-3100, rotat:180})}
            }
            //Eyebrows_003 js
                else if(v == 003){
                //Eyebrows_003 js
                //Part 1
                ans.Line.push("M"+x+" "+y+" c-99 -19 -226 -63 -322 -112 -98 -51 -141 -86 -132 -108 10 -26 31 -25 79 5 161 102 340 158 528 163 115 4 140 13 121 44 -9 14 -28 17 -110 19 -54 0 -128 -4 -164 -11z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                if(side){ans.Data.push({scalX:1.25, scalY:1.25, tranX:2600, tranY:-800, rotat:180})}
                    else{ans.Data.push({scalX:-1.25, scalY:1.25, tranX:-400, tranY:-800, rotat:180})}
                //Part 2
                ans.Line.push("M"+x+" "+y+" c-161 -30 -335 -101 -442 -179 -46 -34 -54 -55 -25 -70 14 -8 27 -4 53 13 167 113 353 175 553 185 100 5 121 9 130 24 30 49 -87 61 -269 27z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                if(side){ans.Data.push({scalX:1.25, scalY:1.25, tranX:2600, tranY:-900, rotat:180})}
                    else{ans.Data.push({scalX:-1.25, scalY:1.25, tranX:-400, tranY:-900, rotat:180})}
              }
            //Eyebrows_004 js
                else if(v == 004){
                //Eyebrows_004 js
                ans.Line.push("M"+x+" "+y+" c-27 -7 -69 -20 -92 -29 -68 -28 -80 -95 -22 -126 15 -9 35 -6 87 12 71 24 179 31 259 15 35 -7 45 -5 62 12 26 26 27 72 3 94 -39 35 -199 47 -297 22z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                if(side){ans.Data.push({scalX:1.25, scalY:1.25, tranX:2600, tranY:-800, rotat:180})}
                    else{ans.Data.push({scalX:-1.25, scalY:1.25, tranX:-400, tranY:-800, rotat:180})}
            }
            //Eyebrows_005 js
                else if(v == 005){
                //Eyebrows_005 js
                ans.Line.push("M"+x+" "+y+" c-32 -13 -82 -43 -111 -65 -51 -40 -59 -42 -182 -61 -71 -10 -142 -24 -159 -30 -39 -15 -80 -54 -95 -91 -13 -30 -24 -36 -36 -18 -10 17 -122 66 -190 83 -72 19 -151 20 -226 5 -78 -15 -108 -29 -108 -49 0 -25 19 -29 64 -13 63 21 169 27 237 13 35 -8 105 -35 156 -62 52 -26 98 -48 103 -48 6 0 21 21 34 48 42 83 62 92 256 118 118 16 127 19 159 50 42 41 128 83 185 90 51 7 119 -10 168 -42 43 -28 63 -30 72 -9 7 19 -48 61 -114 86 -68 26 -142 24 -213 -5z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                if(side){ans.Data.push({scalX:0.7, scalY:1.2, tranX:3700, tranY:-800, rotat:180})}
                    else{ans.Data.push({scalX:-0.7, scalY:1.2, tranX:-1400, tranY:-800, rotat:180})}
            }
            //Eyebrows_006 js
                else if(v == 006){
                //Eyebrows_006 js
                ans.Line.push("M"+x+" "+y+" c-88 -25 -145 -58 -145 -81 0 -27 13 -25 100 12 66 28 86 32 170 32 109 1 188 -21 285 -79 64 -39 95 -44 95 -17 0 21 -44 51 -140 95 -129 60 -249 72 -365 38z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                if(side){ans.Data.push({scalX:1.25, scalY:1.4, tranX:2700, tranY:-800, rotat:180})}
                    else{ans.Data.push({scalX:-1.25, scalY:1.4, tranX:-500, tranY:-800, rotat:180})}
            }
            //Eyebrows_007 js
                else if(v == 007){
                //Eyebrows_007 js
                ans.Line.push("M"+x+" "+y+" c-220 -32 -413 -88 -566 -164 -120 -60 -155 -87 -169 -129 -20 -61 32 -136 94 -136 8 0 68 27 132 60 65 33 167 76 228 95 113 35 318 75 387 75 68 0 107 23 130 79 13 32 -5 85 -38 111 -28 22 -88 25 -198 9z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                if(side){ans.Data.push({scalX:1.25, scalY:1.1, tranX:2400, tranY:-800, rotat:180})}
                    else{ans.Data.push({scalX:-1.25, scalY:1.1, tranX:-700, tranY:-800, rotat:180})}
            }
            //Eyebrows_008 js
                else if(v == 008){
                //Eyebrows_008 js
                ans.Line.push("M"+x+" "+y+" c-72 -26 -152 -85 -156 -115 -5 -32 20 -28 78 14 102 73 189 89 290 54 48 -16 57 -17 70 -4 13 12 13 16 0 28 -25 23 -111 46 -169 45 -31 0 -82 -10 -113 -22z")
                ans.Poly.push(false)
                ans.Elli.push(false)
                if(side){ans.Data.push({scalX:1.25, scalY:1.3, tranX:2600, tranY:-800, rotat:180})}
                    else{ans.Data.push({scalX:-1.25, scalY:1.3, tranX:-400, tranY:-800, rotat:180})}
            }
            //Reture Object Answer data
            return ans
        }
    
        //All the data_Eyes_###
        function data_Eyes(x,y,side,v,p){
            //Object Answer
            var ans =  Standard_Process_Answer()
            //No Eyes
                if(v == 0){
               //do nonthing
            }
            //Eyes_001 js
                else if(v == 001){
                //Eyes_001 js
                //Part 1
                    ans.Line.push("M"+x+" "+y+" c-200 -28 -465 -162 -599 -303 l-34 -36 28 -88 c55 -178 147 -343 245 -438 l52 -50 -47 94 c-60 121 -103 253 -115 355 -11 95 -20 82 135 189 218 150 467 192 724 122 120 -32 192 -71 287 -154 42 -36 103 -88 137 -116 l60 -50 -6 50 c-11 79 -51 148 -123 213 -83 75 -173 123 -326 173 -111 37 -135 42 -238 45 -63 1 -144 -1 -180 -6z")
                    ans.Poly.push(polygonSolver("0,0 599,303 633,339 605,427 366,859 333,921 335,949 -122,1011 -417,1018 -653,990 -835,840 -905,532 -892,463 -866,417 -744,212 -418,39 -180,-6 0,0",x,y))
                    ans.Elli.push(false)
                    if(side){ans.Data.push({scalX:-0.6, scalY:0.85, tranX:-300, tranY:100, rotat:180})}
                        else{ans.Data.push({scalX:0.85, scalY:0.85, tranX:200, tranY:100, rotat:180})}
                //part 2
                    ans.Line.push(false)
                    ans.Poly.push(false)
                    ans.Elli.push({cx:(parseInt(x) - 90), cy:(parseInt(y) + 4000), rx:300, ry:390, st:30})
                    if(p){
                       if(side){ans.Data.push({scalX:0.8, scalY:1, tranX:1700, tranY:4250, rotat:180})}
                        else{ans.Data.push({scalX:1, scalY:1, tranX:-550, tranY:4250, rotat:180})}   
                    }else{
                        if(side){ans.Data.push({scalX:0.8, scalY:1, tranX:1600, tranY:4250, rotat:180})}
                        else{ans.Data.push({scalX:1, scalY:1, tranX:-450, tranY:4250, rotat:180})}  
                    }
                //part 3
                    ans.Line.push(false)
                    ans.Poly.push(false)
                    ans.Elli.push({cx:(parseInt(x) - 290), cy:(parseInt(y) + 3900), rx:150, ry:90, st:0})
                    if(p){
                        if(side){ans.Data.push({scalX:-1, scalY:1, tranX:-150, tranY:4100, rotat:180})}
                            else{ans.Data.push({scalX:1, scalY:1, tranX:-1000, tranY:4100, rotat:180})}
                        
                        
                    }else{
                        if(side){ans.Data.push({scalX:-1, scalY:1, tranX:0, tranY:4100, rotat:180})}
                            else{ans.Data.push({scalX:1, scalY:1, tranX:-950, tranY:4100, rotat:180})}
                    }
                //part 4
                    ans.Line.push(false)
                    ans.Poly.push(false)
                    ans.Elli.push({cx:(parseInt(x) - 120), cy:(parseInt(y) + 4000), rx:130, ry:190, st:5})
                    if(p){
                        if(side){ans.Data.push({scalX:-0.85, scalY:1, tranX:-340, tranY:4250, rotat:180})}
                            else{ans.Data.push({scalX:1, scalY:1, tranX:-570, tranY:4250, rotat:180})}
                    }else{
                        if(side){ans.Data.push({scalX:-0.85, scalY:1, tranX:-190, tranY:4250, rotat:180})}
                            else{ans.Data.push({scalX:1, scalY:1, tranX:-570, tranY:4250, rotat:180})}
                    }
            }
            //Eyes_002 js (Unfinised)
                else if(v == 002){
                
            }
            //Reture Object Answer data
            return ans
        }
    
        //All the HairBack_###
        function data_HairBack(x,y,v){
            //Object Answer
            var ans =  Standard_Process_Answer()
            //No HairBack
                if(v == 0){
               //do nonthing
            }
            //HairBack_001 js
                else if(v == 001){
                //HairBack_001 js
                //Part 1
                ans.Line.push("M"+x+" "+y+" c-253 -104 -629 -333 -809 -491 l-98 -87 -67 7 c-36 3 -82 10 -101 15 -59 15 -370 40 -496 40 -139 0 -499 -26 -564 -40 -25 -5 -90 -19 -145 -30 -55 -10 -125 -27 -155 -36 -30 -9 -102 -29 -160 -44 -58 -15 -127 -39 -155 -53 -27 -14 -62 -29 -77 -32 -16 -4 -28 -10 -28 -14 0 -4 -11 -13 -25 -19 -22 -10 -31 -8 -71 23 -25 19 -52 35 -59 35 -7 0 -48 18 -89 40 -42 23 -82 40 -89 38 -7 -1 -25 2 -42 9 -286 109 -622 190 -832 200 l-123 6 -1 -64 c-7 -350 99 -767 296 -1158 76 -152 75 -145 50 -441 -41 -483 -105 -886 -245 -1525 -53 -240 -80 -386 -84 -450 -4 -62 -34 -132 -86 -202 -41 -53 -49 -73 -29 -73 26 0 168 75 211 110 25 22 49 40 52 40 3 0 6 -13 6 -29 0 -140 73 -332 159 -422 73 -76 99 -65 83 34 -5 31 -8 57 -6 57 1 0 21 -28 45 -62 106 -157 241 -275 403 -354 99 -49 111 -51 124 -27 7 12 -3 36 -43 97 -64 99 -91 153 -139 276 -21 52 -46 113 -56 135 -55 117 -97 354 -105 590 -7 189 5 282 50 415 33 96 51 181 76 360 10 80 35 219 54 310 42 204 166 642 183 648 6 2 12 -3 12 -11 0 -10 18 -16 68 -20 37 -4 105 -11 152 -16 47 -5 127 -13 177 -16 85 -7 93 -6 99 11 9 26 200 430 224 474 11 20 27 35 37 35 23 0 42 -57 89 -259 18 -82 42 -165 51 -185 22 -44 54 -52 77 -19 16 22 75 204 92 283 15 68 41 55 99 -52 l51 -92 80 222 c66 184 83 222 99 222 16 0 32 -34 90 -192 38 -105 73 -194 76 -197 3 -3 31 44 63 105 78 149 85 147 142 -25 24 -71 46 -131 49 -134 3 -3 18 7 35 23 29 28 60 29 60 3 0 -26 67 -75 174 -127 129 -62 181 -111 230 -215 53 -110 92 -237 157 -515 89 -377 90 -488 8 -826 -62 -252 -113 -388 -210 -551 -32 -55 -59 -106 -59 -112 0 -19 26 -14 98 19 42 20 86 32 117 34 28 1 73 5 101 10 l51 7 -9 -68 c-22 -165 -136 -438 -262 -626 -18 -27 -18 -28 0 -35 25 -9 231 99 354 185 114 81 278 241 345 337 69 100 68 99 61 17 -8 -81 -2 -112 21 -112 9 0 44 15 78 34 43 23 70 32 88 29 22 -4 30 0 44 27 10 18 27 40 38 49 11 8 76 71 143 139 68 68 126 121 130 118 3 -4 13 -25 21 -49 31 -83 86 -170 154 -243 103 -111 106 -108 106 89 -1 157 8 256 31 365 l12 53 53 -50 c99 -94 219 -158 359 -191 98 -24 154 -26 162 -5 4 9 -14 37 -46 72 -64 72 -150 213 -189 313 -108 272 -162 413 -159 415 2 2 41 -10 87 -26 85 -30 264 -58 294 -46 33 12 17 42 -44 82 -125 82 -259 253 -362 460 -82 164 -105 229 -122 334 -23 143 -113 544 -132 591 -3 8 -8 25 -10 38 -16 95 -130 359 -212 491 l-52 85 12 85 c21 138 16 424 -10 564 -40 222 -131 500 -225 688 -56 113 -62 116 -161 75z m110 -118 c65 -144 112 -268 153 -413 72 -251 77 -292 76 -570 -1 -217 -11 -295 -64 -472 -30 -102 -28 -123 11 -123 21 0 39 36 58 118 7 28 16 54 20 57 11 6 84 -125 135 -245 78 -183 165 -510 222 -837 20 -113 35 -169 71 -251 85 -202 183 -357 306 -487 36 -39 62 -71 57 -73 -16 -6 -117 27 -187 60 -43 21 -94 58 -149 111 -87 82 -116 94 -122 46 -2 -20 10 -37 57 -82 45 -43 70 -79 105 -149 41 -86 124 -290 141 -348 4 -14 20 -51 36 -83 15 -31 26 -57 23 -57 -2 0 6 -19 18 -41 13 -23 27 -50 33 -60 5 -11 13 -19 17 -19 5 0 8 -6 8 -13 0 -8 14 -33 31 -56 17 -24 28 -45 25 -48 -11 -11 -148 41 -213 81 -86 53 -105 69 -155 133 l-40 52 25 76 c26 77 27 99 2 109 -26 9 -44 -20 -78 -129 -56 -173 -89 -395 -81 -545 l3 -64 -25 29 c-33 40 -107 164 -117 195 -16 52 -18 101 -7 154 6 31 15 58 19 61 5 2 21 -21 37 -53 39 -75 67 -82 85 -20 20 70 18 338 -4 430 -64 272 -207 517 -463 791 -396 424 -551 627 -671 877 -33 69 -81 153 -105 188 -55 78 -382 412 -403 412 -9 0 -18 -7 -22 -15 -4 -11 44 -63 155 -170 215 -208 275 -291 356 -492 56 -140 196 -628 220 -767 9 -48 147 -660 153 -676 28 -73 50 -194 48 -265 -4 -137 -52 -227 -164 -308 -63 -46 -199 -113 -246 -121 -11 -2 -40 -9 -65 -16 -84 -23 -83 -23 -39 41 50 73 82 146 112 247 19 67 22 100 21 252 0 179 1 171 -53 390 -25 97 -43 157 -57 177 -7 12 -14 30 -14 38 0 29 -127 485 -165 595 -97 278 -143 333 -352 416 -100 41 -113 49 -113 75 0 14 -11 19 -47 25 -58 8 -83 20 -83 39 0 20 -107 279 -117 282 -5 2 -32 -44 -61 -103 -37 -74 -57 -104 -68 -102 -10 2 -48 81 -102 215 -48 117 -90 213 -93 213 -3 0 -38 -102 -78 -227 -40 -126 -79 -234 -86 -241 -10 -11 -17 -8 -36 20 -13 18 -26 35 -30 38 -3 3 -10 19 -13 36 -4 17 -20 43 -35 58 l-28 27 -54 -217 c-50 -205 -65 -242 -89 -218 -4 5 -48 176 -97 381 l-88 371 -22 -107 c-11 -59 -35 -148 -51 -198 -36 -105 -185 -448 -210 -481 -17 -22 -19 -22 -127 -12 -244 24 -278 33 -316 84 -45 59 -36 289 25 616 20 103 22 127 11 139 -29 30 -43 1 -75 -149 -33 -161 -50 -320 -50 -476 0 -115 -4 -151 -20 -200 -79 -227 -175 -632 -211 -884 -11 -80 -48 -253 -81 -384 -51 -205 -59 -247 -53 -295 3 -31 8 -148 10 -261 4 -193 6 -211 35 -310 17 -58 32 -112 34 -120 11 -39 76 -230 92 -270 11 -25 38 -82 60 -127 23 -46 40 -83 37 -83 -3 0 -35 20 -72 44 -101 68 -222 196 -290 309 -45 74 -95 183 -106 230 -9 40 -18 63 -30 77 -18 21 -49 318 -41 388 8 63 27 128 63 216 25 61 25 86 -2 86 -17 0 -55 -78 -87 -184 -26 -85 -29 -200 -9 -381 14 -130 37 -289 51 -345 4 -19 11 -48 15 -65 l6 -30 -20 22 c-12 12 -21 25 -21 28 0 3 -7 22 -16 43 -41 91 -47 148 -47 407 1 282 11 394 64 689 22 121 38 225 35 233 -6 14 -32 18 -40 5 -10 -17 -86 -470 -95 -572 -6 -58 -13 -178 -17 -267 l-7 -163 -70 -45 c-39 -25 -72 -44 -73 -42 -2 2 6 28 17 57 20 52 51 193 69 310 5 30 31 163 60 295 61 287 126 626 154 810 2 11 6 27 9 35 16 45 40 142 47 187 5 28 11 56 14 61 7 11 29 385 28 477 -1 113 25 177 140 344 232 336 372 491 597 666 126 98 161 118 309 187 287 132 451 171 878 208 123 11 470 9 524 -3 14 -3 52 -8 85 -12 33 -3 76 -10 95 -15 19 -5 61 -14 92 -20 l57 -11 -49 -69 c-52 -70 -62 -103 -34 -114 28 -11 31 -8 106 96 158 221 356 375 710 551 107 54 291 136 304 137 6 0 28 -37 49 -82z m-4043 -392 c79 -14 181 -34 228 -46 47 -11 98 -23 114 -26 54 -10 275 -84 281 -94 3 -6 12 -10 20 -10 14 0 133 -53 195 -88 19 -11 52 -28 73 -38 20 -10 37 -26 37 -34 0 -9 -66 -74 -147 -145 -251 -220 -326 -305 -513 -583 -70 -103 -109 -152 -119 -150 -33 6 -177 317 -245 526 -71 220 -117 454 -129 650 l-3 62 32 0 c18 0 97 -11 176 -24z m3696 -1981 c66 -82 188 -222 272 -310 158 -167 269 -299 337 -400 50 -76 151 -273 159 -311 1 -7 11 -43 23 -80 26 -88 41 -192 41 -291 l0 -78 -20 30 c-11 17 -43 65 -70 107 -69 105 -199 249 -310 343 -93 78 -238 185 -297 220 -35 20 -49 63 -79 233 -8 47 -21 99 -29 116 -11 25 -157 583 -150 574 1 -2 56 -70 123 -153z m260 -1007 c180 -246 222 -481 135 -758 l-27 -85 -7 90 c-16 196 -29 284 -60 395 -11 41 -24 91 -29 111 -15 58 -61 181 -77 206 -9 13 -12 23 -9 23 4 0 -2 17 -12 38 -11 20 -22 51 -26 67 -4 17 -10 39 -13 50 -9 31 45 -28 125 -137z m-582 79 c34 -162 29 -401 -10 -519 -31 -93 -47 -120 -112 -189 -49 -53 -87 -84 -131 -107 -19 -11 -16 -1 22 75 81 164 151 408 191 670 18 117 27 133 40 70z m804 -204 c100 -105 190 -209 190 -219 0 -3 11 -21 24 -41 24 -35 24 -37 8 -77 -41 -103 -129 -235 -205 -305 -23 -22 -43 -39 -44 -38 0 1 10 43 24 92 20 73 25 114 26 215 1 150 -15 223 -79 356 -24 51 -44 95 -44 98 0 15 39 -16 100 -81z m-270 -381 c-54 -203 -92 -292 -184 -427 -108 -158 -316 -344 -492 -438 l-52 -27 53 106 c55 108 119 294 153 438 l19 80 67 22 c144 49 279 131 345 211 33 40 78 138 87 187 l7 41 12 -43 c12 -39 11 -53 -15 -150z m78 -264 l4 -166 -38 -24 c-22 -14 -45 -28 -53 -33 -11 -7 -13 -1 -8 31 33 224 49 324 59 357 20 68 32 15 36 -165z")
                ans.Poly.push(polygonSolver("0,0 809,491 907,578 974,571 1075,556 1571,516 2135,556 2280,586 2435,622 2595,666 2750,719 2827,751 2855,765 2880,784 2951,761 3010,726 3099,686 3188,648 3230,639 4062,439 4185,433 4186,497 3890,1655 3840,2096 4085,3621 4169,4071 4255,4273 4284,4346 4073,4236 4021,4196 4015,4225 3856,4647 3773,4613 3779,4556 3734,4618 3331,4972 3207,4999 3250,4902 3389,4626 3445,4491 3550,3901 3500,3486 3424,3126 3370,2816 3187,2168 3175,2179 3107,2199 2955,2215 2778,2231 2679,2220 2455,1746 2418,1711 2329,1970 2278,2155 2201,2174 2109,1891 2010,1943 1959,2035 1879,1813 1780,1591 1690,1783 1614,1980 1551,1875 1409,1900 1360,2034 1325,2011 1265,2008 1091,2135 861,2350 704,2865 696,3691 906,4242 965,4354 867,4335 750,4301 649,4291 598,4284 607,4352 869,4978 869,5013 515,4828 170,4491 109,4474 88,4586 10,4552 -78,4523 -122,4496 -160,4447 -303,4308 -433,4190 -454,4239 -608,4482 -714,4393 -745,4028 -757,3975 -810,4025 -1169,4216 -1331,4221 -1285,4149 -1096,3836 -937,3421 -1024,3447 -1318,3493 -1274,3411 -912,2951 -790,2617 -658,2026 -648,1988 -436,1497 -384,1412 -396,1327 -386,763 -161,75 0,0",x,y))
                ans.Data.push({scalX:-1, scalY:1, tranX:0, tranY:0, rotat:180,})
                //Part 2
                var x2 = x - 100; var y2 = y - 300; 
                ans.Line.push("M"+x2+" "+y2+" c-224 -94 -477 -279 -591 -433 -22 -29 -39 -61 -39 -71 0 -46 208 -253 353 -351 70 -47 205 -121 221 -121 4 0 22 -7 39 -14 18 -8 61 -22 97 -31 36 -9 73 -18 82 -21 30 -9 47 37 64 171 20 155 23 401 5 505 -25 148 -96 364 -125 382 -19 13 -49 8 -106 -16z m85 -86 c48 -93 94 -339 95 -503 0 -98 -27 -358 -39 -370 -11 -11 -164 39 -251 83 -41 21 -108 62 -149 91 -78 54 -222 188 -272 250 l-29 37 73 81 c79 89 186 175 313 252 97 58 225 119 236 113 5 -3 15 -18 23 -34z")
                ans.Poly.push(polygonSolver("0,0 591,433 630,504 277,855 56,976 17,990 -80,1021 -162,1042 -226,871 -231,366 -106,-16 0,0",x2,y2))
                ans.Data.push({scalX:-1, scalY:1, tranX:0, tranY:0, rotat:180,})
                //Part 3
                var x3 = x - 3895; var y3 = y - 700; 
                ans.Line.push("M"+x3+" "+y3+" c0 -195 61 -437 166 -660 45 -97 49 -102 73 -96 35 9 33 6 80 117 55 129 188 352 255 426 l21 24 -35 30 c-45 38 -202 131 -287 170 -71 32 -236 88 -259 88 -11 0 -14 -20 -14 -99z m184 -25 c92 -36 275 -135 295 -160 10 -12 5 -26 -32 -78 -63 -90 -98 -157 -153 -292 l-48 -120 -33 70 c-43 93 -111 305 -128 401 -19 104 -20 213 -2 213 8 0 53 -15 101 -34z")
                ans.Poly.push(polygonSolver("0,0 -166,660 -239,756 -319,639 -574,213 -595,189 -560,159 -273,-11 -14,-99 0,0",x3,y3))
                ans.Data.push({scalX:-0.9, scalY:0.9, tranX:0, tranY:0, rotat:180,})
            }
            //HairBack_002 js
                else if(v == 002){
                //HairBack_002 js
                //Part 1
                ans.Line.push("M"+x+" "+y+" c-253 -104 -629 -333 -809 -491 l-98 -87 -67 7 c-36 3 -82 10 -101 15 -59 15 -370 40 -496 40 -139 0 -499 -26 -564 -40 -25 -5 -90 -19 -145 -30 -55 -10 -125 -27 -155 -36 -30 -9 -102 -29 -160 -44 -58 -15 -127 -39 -155 -53 -27 -14 -62 -29 -77 -32 -16 -4 -28 -10 -28 -14 0 -4 -11 -13 -25 -19 -22 -10 -31 -8 -71 23 -25 19 -52 35 -59 35 -7 0 -48 18 -89 40 -42 23 -82 40 -89 38 -7 -1 -25 2 -42 9 -286 109 -622 190 -832 200 l-123 6 -1 -64 c-7 -350 99 -767 296 -1158 76 -152 75 -145 50 -441 -41 -483 -105 -886 -245 -1525 -53 -240 -80 -386 -84 -450 -4 -62 -34 -132 -86 -202 -41 -53 -49 -73 -29 -73 26 0 168 75 211 110 25 22 49 40 52 40 3 0 6 -13 6 -29 0 -140 73 -332 159 -422 73 -76 99 -65 83 34 -5 31 -8 57 -6 57 1 0 21 -28 45 -62 106 -157 241 -275 403 -354 99 -49 111 -51 124 -27 7 12 -3 36 -43 97 -64 99 -91 153 -139 276 -21 52 -46 113 -56 135 -55 117 -97 354 -105 590 -7 189 5 282 50 415 33 96 51 181 76 360 24 180 81 458 109 536 12 33 27 88 35 124 8 36 19 81 25 100 6 19 15 61 20 93 14 91 87 307 128 377 20 35 58 85 84 111 51 51 212 189 221 189 9 0 -34 -182 -65 -275 -73 -216 -238 -483 -330 -531 -34 -18 -38 -58 -8 -74 16 -8 31 -6 66 10 26 11 58 20 72 20 13 0 50 15 81 32 31 18 104 54 163 79 200 87 324 192 393 332 20 40 55 128 79 196 39 113 44 121 49 91 4 -18 7 -102 7 -187 0 -221 -18 -280 -151 -505 -68 -116 -71 -123 -63 -162 16 -76 52 -64 259 82 66 47 154 120 195 161 103 104 135 172 200 431 28 112 53 206 55 208 9 10 149 -94 234 -174 89 -84 159 -171 196 -244 10 -19 38 -89 62 -155 24 -66 50 -125 57 -131 32 -23 119 7 101 36 -2 4 18 66 45 138 63 170 74 221 68 326 -2 47 -3 86 -1 86 1 0 23 -39 47 -87 65 -131 210 -635 306 -1063 58 -260 63 -350 31 -535 -54 -312 -135 -553 -252 -751 -32 -55 -59 -106 -59 -112 0 -19 26 -14 98 19 42 20 86 32 117 34 28 1 73 5 101 10 l51 7 -9 -68 c-22 -165 -136 -438 -262 -626 -18 -27 -18 -28 0 -35 25 -9 231 99 354 185 114 81 278 241 345 337 69 100 68 99 61 17 -8 -81 -2 -112 21 -112 9 0 44 15 78 34 43 23 70 32 88 29 22 -4 30 0 44 27 10 18 27 40 38 49 11 8 76 71 143 139 68 68 126 121 130 118 3 -4 13 -25 21 -49 31 -83 86 -170 154 -243 103 -111 106 -108 106 89 -1 157 8 256 31 365 l12 53 53 -50 c99 -94 219 -158 359 -191 98 -24 154 -26 162 -5 4 9 -14 37 -46 72 -64 72 -150 213 -189 313 -108 272 -162 413 -159 415 2 2 41 -10 87 -26 85 -30 264 -58 294 -46 33 12 17 42 -44 82 -125 82 -259 253 -362 460 -82 164 -105 229 -122 334 -23 143 -113 544 -132 591 -3 8 -8 25 -10 38 -16 95 -130 359 -212 491 l-52 85 12 85 c21 138 16 424 -10 564 -40 222 -131 500 -225 688 -56 113 -62 116 -161 75z m110 -118 c65 -144 112 -268 153 -413 72 -251 77 -292 76 -570 -1 -217 -11 -295 -64 -472 -30 -102 -28 -123 11 -123 21 0 39 36 58 118 7 28 16 54 20 57 11 6 84 -125 135 -245 78 -183 165 -510 222 -837 20 -113 35 -169 71 -251 85 -202 183 -357 306 -487 36 -39 62 -71 57 -73 -16 -6 -117 27 -187 60 -43 21 -94 58 -149 111 -87 82 -116 94 -122 46 -2 -20 10 -37 57 -82 45 -43 70 -79 105 -149 41 -86 124 -290 141 -348 4 -14 20 -51 36 -83 15 -31 26 -57 23 -57 -2 0 6 -19 18 -41 13 -23 27 -50 33 -60 5 -11 13 -19 17 -19 5 0 8 -6 8 -13 0 -8 14 -33 31 -56 17 -24 28 -45 25 -48 -11 -11 -148 41 -213 81 -86 53 -105 69 -155 133 l-40 52 25 76 c26 77 27 99 2 109 -26 9 -44 -20 -78 -129 -56 -173 -89 -395 -81 -545 l3 -64 -25 29 c-33 40 -107 164 -117 195 -16 52 -18 101 -7 154 6 31 15 58 19 61 5 2 21 -21 37 -53 39 -75 67 -82 85 -20 20 70 18 338 -4 430 -64 272 -207 517 -463 791 -393 421 -554 631 -666 868 -30 64 -73 142 -95 175 -22 32 -66 104 -98 159 -59 101 -144 203 -154 187 -3 -6 -14 -11 -24 -13 -15 -3 -9 -16 38 -74 138 -172 211 -334 441 -975 102 -286 111 -317 99 -337 -14 -21 -7 -70 13 -96 5 -7 35 -127 66 -267 32 -140 60 -262 63 -270 28 -72 50 -194 48 -265 -4 -137 -52 -227 -164 -308 -63 -46 -199 -113 -246 -121 -11 -2 -40 -9 -65 -16 -84 -23 -83 -23 -39 41 50 73 82 146 112 247 19 67 22 100 21 252 0 146 -4 190 -23 265 -12 50 -26 107 -30 128 -5 21 -11 41 -15 44 -3 3 2 12 11 18 16 12 16 17 1 81 -9 38 -24 112 -34 164 -24 130 -173 677 -241 884 -65 198 -127 322 -242 486 l-83 120 -44 0 c-55 0 -55 0 -8 -185 58 -233 60 -328 6 -500 l-28 -90 -56 108 c-102 195 -186 294 -376 446 -35 28 -89 63 -120 77 -32 15 -65 34 -75 42 -10 10 -21 12 -26 6 -5 -5 -23 -69 -40 -142 -77 -323 -137 -434 -320 -602 -135 -124 -139 -126 -97 -42 63 125 106 239 106 281 0 23 5 41 10 41 22 0 11 183 -16 286 -15 55 -32 124 -38 154 -11 50 -15 55 -42 58 -16 2 -34 8 -40 13 -7 6 -16 -10 -28 -46 -27 -86 -130 -298 -190 -389 -29 -46 -73 -102 -97 -125 -39 -38 -286 -211 -301 -211 -3 0 25 57 62 128 81 150 130 267 160 377 67 247 65 234 38 244 -13 5 -32 23 -43 40 -11 17 -25 33 -31 35 -23 9 -305 -231 -377 -319 -94 -117 -138 -239 -202 -569 -19 -94 -52 -254 -75 -356 -22 -102 -50 -250 -61 -330 -11 -80 -48 -253 -81 -384 -51 -205 -59 -247 -53 -295 3 -31 8 -148 10 -261 4 -193 6 -211 35 -310 17 -58 32 -112 34 -120 11 -39 76 -230 92 -270 11 -25 38 -82 60 -127 23 -46 40 -83 37 -83 -3 0 -35 20 -72 44 -101 68 -222 196 -290 309 -45 74 -95 183 -106 230 -9 40 -18 63 -30 77 -18 21 -49 318 -41 388 8 63 27 128 63 216 25 61 25 86 -2 86 -17 0 -55 -78 -87 -184 -26 -85 -29 -200 -9 -381 14 -130 37 -289 51 -345 4 -19 11 -48 15 -65 l6 -30 -20 22 c-12 12 -21 25 -21 28 0 3 -7 22 -16 43 -41 91 -47 148 -47 407 1 282 11 394 64 689 22 121 38 225 35 233 -6 14 -32 18 -40 5 -10 -17 -86 -470 -95 -572 -6 -58 -13 -178 -17 -267 l-7 -163 -70 -45 c-39 -25 -72 -44 -73 -42 -2 2 6 28 17 57 20 52 51 193 69 310 5 30 31 163 60 295 61 287 126 626 154 810 2 11 6 27 9 35 16 45 40 142 47 187 5 28 11 56 14 61 7 11 29 385 28 477 -1 113 25 177 140 344 232 336 372 491 597 666 126 98 161 118 309 187 287 132 451 171 878 208 123 11 470 9 524 -3 14 -3 52 -8 85 -12 33 -3 76 -10 95 -15 19 -5 61 -14 92 -20 l57 -11 -49 -69 c-52 -70 -62 -103 -34 -114 28 -11 31 -8 106 96 158 221 356 375 710 551 107 54 291 136 304 137 6 0 28 -37 49 -82z m-4043 -392 c79 -14 181 -34 228 -46 47 -11 98 -23 114 -26 54 -10 275 -84 281 -94 3 -6 12 -10 20 -10 14 0 133 -53 195 -88 19 -11 52 -28 73 -38 20 -10 37 -26 37 -34 0 -9 -66 -74 -147 -145 -251 -220 -326 -305 -513 -583 -70 -103 -109 -152 -119 -150 -33 6 -177 317 -245 526 -71 220 -117 454 -129 650 l-3 62 32 0 c18 0 97 -11 176 -24z m3696 -1981 c66 -82 188 -222 272 -310 158 -167 269 -299 337 -400 50 -76 151 -273 159 -311 1 -7 11 -43 23 -80 26 -88 41 -192 41 -291 l0 -78 -20 30 c-11 17 -43 65 -70 107 -69 105 -199 249 -310 343 -93 78 -238 185 -297 220 -34 20 -43 50 -88 275 -19 97 -100 408 -144 553 -16 55 -28 97 -27 95 2 -1 57 -70 124 -153z m260 -1007 c180 -246 222 -481 135 -758 l-27 -85 -7 90 c-16 196 -29 284 -60 395 -11 41 -24 91 -29 111 -15 58 -61 181 -77 206 -9 13 -12 23 -9 23 4 0 -2 17 -12 38 -11 20 -22 51 -26 67 -4 17 -10 39 -13 50 -9 31 45 -28 125 -137z m-582 79 c34 -162 29 -401 -10 -519 -31 -93 -47 -120 -112 -189 -49 -53 -87 -84 -131 -107 -19 -11 -16 -1 22 75 81 164 151 408 191 670 18 117 27 133 40 70z m804 -204 c100 -105 190 -209 190 -219 0 -3 11 -21 24 -41 24 -35 24 -37 8 -77 -41 -103 -129 -235 -205 -305 -23 -22 -43 -39 -44 -38 0 1 10 43 24 92 20 73 25 114 26 215 1 150 -15 223 -79 356 -24 51 -44 95 -44 98 0 15 39 -16 100 -81z m-270 -381 c-54 -203 -92 -292 -184 -427 -108 -158 -316 -344 -492 -438 l-52 -27 53 106 c55 108 119 294 153 438 l19 80 67 22 c144 49 279 131 345 211 33 40 78 138 87 187 l7 41 12 -43 c12 -39 11 -53 -15 -150z m78 -264 l4 -166 -38 -24 c-22 -14 -45 -28 -53 -33 -11 -7 -13 -1 -8 31 33 224 49 324 59 357 20 68 32 15 36 -165z")
                ans.Poly.push(polygonSolver("0,0 809,491 907,578 974,571 1075,556 1571,516 2135,556 2280,586 2435,622 2595,666 2750,719 2827,751 2855,765 2880,784 2951,761 3010,726 3099,686 3188,648 3230,639 4062,439 4185,433 4186,497 3890,1655 3840,2096 4085,3621 4169,4071 4255,4273 4284,4346 4073,4236 4021,4196 4015,4225 3856,4647 3773,4613 3779,4556 3734,4618 3331,4972 3207,4999 3250,4902 3389,4626 3445,4491 3550,3901 3500,3486 3424,3126 3315,2590 3280,2466 3255,2366 3235,2273 3107,1896 3023,1785 2802,1596 2867,1871 3197,2402 3205,2476 3139,2466 3067,2446 2986,2414 2823,2335 2430,2003 2351,1807 2302,1716 2295,1903 2446,2408 2509,2570 2250,2488 2055,2327 1855,1896 1800,1688 1566,1862 1370,2106 1308,2261 1251,2392 1150,2356 1105,2218 1037,1892 1038,1806 991,1893 685,2956 654,3491 906,4242 965,4354 867,4335 750,4301 649,4291 598,4284 607,4352 869,4978 869,5013 515,4828 170,4491 109,4474 88,4586 10,4552 -78,4523 -122,4496 -160,4447 -303,4308 -433,4190 -454,4239 -608,4482 -714,4393 -745,4028 -757,3975 -810,4025 -1169,4216 -1331,4221 -1285,4149 -1096,3836 -937,3421 -1024,3447 -1318,3493 -1274,3411 -912,2951 -790,2617 -658,2026 -648,1988 -436,1497 -384,1412 -396,1327 -386,763 -161,75 0,0",x,y))
                ans.Data.push({scalX:-1, scalY:1, tranX:0, tranY:0, rotat:180,})
                //Part 2
                var x2 = x - 100; var y2 = y - 300; 
                ans.Line.push("M"+x2+" "+y2+" c-224 -94 -477 -279 -591 -433 -22 -29 -39 -61 -39 -71 0 -46 208 -253 353 -351 70 -47 205 -121 221 -121 4 0 22 -7 39 -14 18 -8 61 -22 97 -31 36 -9 73 -18 82 -21 30 -9 47 37 64 171 20 155 23 401 5 505 -25 148 -96 364 -125 382 -19 13 -49 8 -106 -16z m85 -86 c48 -93 94 -339 95 -503 0 -98 -27 -358 -39 -370 -11 -11 -164 39 -251 83 -41 21 -108 62 -149 91 -78 54 -222 188 -272 250 l-29 37 73 81 c79 89 186 175 313 252 97 58 225 119 236 113 5 -3 15 -18 23 -34z")
                ans.Poly.push(polygonSolver("0,0 591,433 630,504 277,855 56,976 17,990 -80,1021 -162,1042 -226,871 -231,366 -106,-16 0,0",x2,y2))
                ans.Data.push({scalX:-1, scalY:1, tranX:0, tranY:0, rotat:180,})
                //Part 3
                var x3 = x - 3895; var y3 = y - 700; 
                ans.Line.push("M"+x3+" "+y3+" c0 -195 61 -437 166 -660 45 -97 49 -102 73 -96 35 9 33 6 80 117 55 129 188 352 255 426 l21 24 -35 30 c-45 38 -202 131 -287 170 -71 32 -236 88 -259 88 -11 0 -14 -20 -14 -99z m184 -25 c92 -36 275 -135 295 -160 10 -12 5 -26 -32 -78 -63 -90 -98 -157 -153 -292 l-48 -120 -33 70 c-43 93 -111 305 -128 401 -19 104 -20 213 -2 213 8 0 53 -15 101 -34z")
                ans.Poly.push(polygonSolver("0,0 -166,660 -239,756 -319,639 -574,213 -595,189 -560,159 -273,-11 -14,-99 0,0",x3,y3))
                ans.Data.push({scalX:-0.9, scalY:0.9, tranX:0, tranY:0, rotat:180,})
            }
            //HairBack_003 js
                else if(v == 003){
                //HairBack_003 js
                //Part 1
                ans.Line.push("M"+x+" "+y+" c-985 -1098 -1168 -1331 -1683 -2133 -81 -126 -171 -266 -200 -310 -50 -76 -54 -87 -79 -220 -14 -77 -31 -174 -37 -215 -15 -95 -6 -356 16 -512 l17 -118 -70 -157 c-147 -333 -172 -453 -252 -1228 -43 -423 -54 -468 -128 -547 -24 -26 -103 -91 -174 -144 l-129 -97 3 -41 c3 -41 3 -41 48 -44 61 -5 337 16 435 34 52 9 107 27 158 53 92 46 106 58 159 129 24 32 46 52 55 50 9 -2 21 -22 28 -46 7 -23 16 -50 20 -60 60 -143 173 -515 204 -672 27 -133 69 -408 82 -525 5 -49 24 -222 43 -383 36 -313 41 -332 93 -332 21 0 30 14 68 95 61 131 138 342 164 449 33 134 66 339 105 661 20 160 40 324 46 365 5 41 17 181 25 310 32 484 60 753 91 875 18 68 74 218 80 212 2 -2 11 -64 20 -138 18 -153 14 -422 -11 -759 -21 -285 -21 -296 13 -314 19 -10 33 -11 45 -4 34 18 240 454 297 628 21 63 49 174 61 245 22 121 23 153 22 485 -1 195 -6 436 -10 535 -10 219 -1 435 22 550 9 47 15 92 12 99 -3 7 3 22 12 35 16 21 18 21 31 6 10 -12 13 -51 12 -153 -2 -260 -8 -332 -37 -427 -50 -162 -50 -165 -39 -183 17 -27 46 -25 79 5 45 42 334 405 399 502 91 137 65 73 -51 -122 -61 -102 -65 -113 -57 -146 7 -26 15 -37 32 -39 39 -6 376 177 542 293 81 57 327 260 400 329 75 71 117 71 84 -1 -10 -21 -21 -40 -24 -43 -3 -3 -16 -20 -28 -37 -13 -18 -73 -66 -135 -107 -169 -113 -171 -114 -163 -162 6 -34 12 -41 49 -57 23 -9 52 -17 64 -17 12 0 24 -4 28 -10 3 -5 48 -9 99 -9 52 0 104 -2 117 -5 66 -15 391 -25 494 -16 192 19 296 53 579 189 l163 78 -64 -146 c-77 -179 -96 -253 -117 -448 l-17 -152 47 -143 c25 -79 56 -165 69 -193 12 -27 32 -70 43 -95 24 -57 113 -156 147 -164 18 -5 31 0 49 19 l26 25 -14 74 c-8 40 -17 107 -20 147 -6 72 -6 73 8 37 19 -48 42 -204 61 -403 25 -273 85 -1083 85 -1143 0 -31 4 -106 10 -167 6 -60 15 -155 19 -210 13 -144 39 -316 67 -424 26 -105 79 -228 104 -241 8 -5 25 -28 37 -52 12 -24 47 -73 78 -110 49 -60 61 -68 90 -68 38 0 55 20 55 65 0 24 5 20 56 -39 96 -113 204 -179 282 -174 42 3 47 6 50 29 2 16 -16 62 -47 122 -59 111 -131 278 -156 357 -11 37 -19 118 -26 252 -5 116 -13 205 -20 216 -9 14 -6 60 14 203 59 417 71 618 63 1004 -6 254 -12 344 -42 585 -57 473 -102 710 -168 892 -19 53 -40 127 -46 165 -12 71 -104 395 -120 425 -17 31 -11 50 34 107 135 173 307 409 347 477 26 44 63 115 82 160 51 118 138 407 148 494 11 87 96 898 101 950 3 35 3 35 -37 34 -28 0 -113 -33 -275 -104 -129 -57 -247 -112 -262 -122 -14 -10 -33 -18 -41 -18 -9 0 -112 -40 -229 -89 -201 -84 -575 -213 -808 -280 -214 -60 -637 -170 -683 -177 -47 -6 -51 -10 -100 -81 -29 -40 -59 -95 -69 -121 -9 -27 -23 -48 -33 -50 -9 -2 -53 7 -98 20 -76 21 -98 23 -283 20 l-202 -2 -51 80 c-58 91 -68 95 -138 54 -25 -14 -47 -23 -50 -20 -3 3 6 66 21 139 68 341 59 612 -38 1147 -14 74 -39 214 -56 310 -39 220 -39 220 -88 220 -35 0 -44 -6 -104 -72z m106 -125 c6 -22 98 -552 123 -713 14 -87 18 -174 18 -355 0 -225 -2 -252 -33 -428 -36 -213 -38 -235 -17 -243 41 -16 81 -10 117 19 l38 29 17 -32 c47 -85 45 -84 157 -74 192 17 339 10 461 -20 161 -40 172 -41 183 -19 5 10 13 36 16 58 4 22 24 66 44 98 30 47 48 63 97 87 79 38 239 86 575 171 365 93 525 140 705 206 128 47 621 255 863 363 40 18 74 31 77 28 2 -2 0 -44 -5 -94 -6 -49 -24 -215 -40 -369 -47 -432 -77 -600 -141 -774 -98 -264 -310 -596 -488 -764 -43 -39 -61 -64 -61 -81 0 -14 4 -27 9 -31 19 -11 185 -590 241 -838 23 -100 48 -204 55 -232 8 -27 14 -76 14 -107 0 -32 2 -66 5 -75 3 -10 19 -119 35 -243 25 -192 31 -273 36 -550 11 -537 -16 -813 -181 -1799 l-28 -164 -30 39 c-17 21 -52 62 -78 91 -26 29 -56 70 -68 92 -31 61 -83 258 -77 294 4 31 -36 386 -47 417 -3 8 -8 85 -10 170 -4 145 -36 628 -71 1080 -29 370 -58 539 -111 647 -25 52 -25 53 -9 111 22 78 18 106 -17 110 -34 4 -39 -6 -73 -143 -28 -110 -35 -226 -20 -330 l6 -40 -26 30 c-58 67 -65 78 -65 97 0 25 -56 186 -76 215 -7 12 -14 36 -14 52 0 16 -4 40 -9 53 -12 33 13 289 37 378 11 41 50 143 86 227 79 182 87 212 58 220 -11 3 -23 11 -26 19 -3 8 -15 14 -26 14 -23 0 -123 -48 -128 -61 -2 -5 -9 -9 -16 -9 -7 0 -70 -27 -139 -60 -70 -32 -165 -73 -212 -89 -46 -17 -97 -37 -112 -44 -17 -9 -60 -15 -107 -15 -44 -1 -98 -4 -121 -7 -22 -4 -119 -1 -215 5 -96 7 -218 13 -271 15 -52 1 -111 7 -130 13 -19 6 -44 12 -57 14 -18 2 -3 18 84 82 58 43 108 85 111 92 3 8 11 14 18 14 19 0 75 68 97 117 15 34 18 62 16 140 -3 96 -3 98 -28 101 -20 2 -57 -25 -175 -129 -82 -72 -162 -141 -177 -152 -16 -11 -28 -27 -28 -34 0 -7 -5 -13 -11 -13 -6 0 -66 -42 -134 -92 -104 -79 -276 -191 -358 -234 -42 -23 -117 -54 -117 -49 0 3 19 35 42 72 100 164 124 247 113 401 -6 95 -9 107 -33 129 -16 15 -35 23 -51 21 -29 -3 -32 -13 -50 -158 -12 -93 -59 -202 -126 -290 -19 -25 -56 -76 -82 -113 -60 -86 -152 -197 -162 -197 -5 0 -2 28 5 63 7 34 17 115 20 180 9 143 -14 530 -31 554 -11 14 -19 15 -51 8 l-39 -10 -42 -125 c-23 -69 -49 -160 -58 -203 -28 -138 -36 -437 -24 -857 19 -661 -4 -833 -161 -1180 -50 -112 -108 -230 -118 -240 -4 -5 -1 74 19 385 13 215 8 423 -16 600 -21 158 -24 165 -75 165 l-41 0 -44 -92 c-103 -220 -121 -326 -170 -993 -36 -497 -115 -1141 -171 -1393 -27 -122 -84 -296 -131 -401 l-29 -64 -23 204 c-93 835 -129 1011 -304 1504 -100 280 -102 285 -131 285 -17 0 -40 -22 -89 -84 -114 -144 -159 -173 -307 -200 -83 -15 -340 -39 -346 -33 -2 2 34 31 80 65 133 99 190 161 219 240 39 105 45 135 62 322 26 289 73 699 95 826 38 221 85 369 187 584 l55 115 -22 196 c-29 255 -24 418 19 632 16 81 33 153 37 160 36 62 361 562 488 752 254 379 429 607 766 995 233 270 609 692 629 707 19 14 67 -8 75 -34z m3092 -6766 c15 -45 53 -138 86 -206 32 -68 57 -126 55 -128 -11 -10 -109 77 -172 152 -82 97 -78 78 -50 240 8 44 17 103 21 130 l7 50 13 -78 c7 -43 25 -115 40 -160z")
                ans.Poly.push(polygonSolver("0,0 1683,2133 1883,2443 1962,2663 1999,2878 1983,3390 1966,3508 2036,3665 2288,4893 2416,5440 2590,5584 2719,5681 2716,5722 2668,5766 2233,5732 2075,5679 1916,5550 1861,5500 1833,5546 1813,5606 1609,6278 1527,6803 1484,7186 1391,7518 1323,7423 1159,6974 1054,6313 1008,5948 983,5638 892,4763 812,4551 792,4689 803,5448 790,5762 745,5766 448,5138 387,4893 365,4408 375,3873 353,3323 341,3224 329,3189 298,3183 286,3336 323,3763 362,3946 283,3941 -116,3439 -65,3561 -8,3707 -40,3746 -582,3453 -982,3124 -1066,3125 -1042,3168 -1014,3205 -879,3312 -716,3474 -765,3531 -829,3548 -857,3558 -956,3567 -1073,3572 -1567,3588 -2146,3399 -2309,3321 -2245,3467 -2128,3915 -2111,4067 -2158,4210 -2227,4403 -2270,4498 -2417,4662 -2466,4643 -2492,4618 -2478,4544 -2458,4397 -2466,4360 -2527,4763 -2612,5906 -2622,6073 -2641,6283 -2708,6707 -2812,6948 -2849,7000 -2927,7110 -3017,7178 -3072,7113 -3128,7152 -3410,7326 -3460,7297 -3413,7175 -3257,6818 -3231,6566 -3211,6350 -3225,6147 -3288,5143 -3246,4558 -3078,3666 -3032,3501 -2912,3076 -2946,2969 -3293,2492 -3375,2332 -3523,1838 -3624,888 -3587,854 -3312,958 -3050,1080 -3009,1098 -2780,1187 -1972,1467 -1289,1644 -1189,1725 -1120,1846 -1087,1896 -989,1876 -706,1856 -504,1858 -453,1778 -315,1724 -265,1744 -286,1605 -248,458 -192,148 -104,-72 0,0",x,y))
                ans.Data.push({scalX:0.85, scalY:0.85, tranX:7000, tranY:-1400, rotat:180})
                //Part 2
                ans.Line.push("M"+x+" "+y+" c-23 -35 -45 -65 -48 -68 -16 -13 -91 -138 -91 -151 0 -14 -58 -127 -195 -379 -197 -363 -341 -683 -501 -1117 -86 -233 -98 -260 -145 -316 -88 -105 -96 -159 -31 -219 39 -37 59 -45 132 -53 36 -4 69 -9 73 -12 4 -3 -24 -27 -63 -55 -43 -30 -88 -72 -113 -107 -23 -32 -62 -71 -86 -87 -66 -42 -217 -190 -368 -359 -106 -119 -133 -155 -131 -175 2 -19 10 -26 29 -28 22 -3 41 13 123 106 223 254 381 373 627 473 151 62 221 83 329 104 114 21 130 29 130 60 0 35 -21 40 -109 26 -80 -13 -337 -73 -387 -90 l-29 -11 24 18 c12 9 62 40 109 67 89 53 105 69 74 77 -11 3 -21 17 -24 31 -5 24 4 30 136 96 205 102 264 123 371 128 63 3 116 -2 177 -14 l86 -19 5 36 c3 26 -2 45 -19 72 -13 21 -24 45 -24 53 0 21 47 154 64 179 7 12 27 102 44 201 78 454 73 628 -35 1275 -20 118 -37 238 -37 265 -1 46 -3 50 -28 53 -23 3 -32 -6 -69 -60z m65 -328 c67 -411 71 -447 70 -705 0 -237 -1 -243 -43 -480 -23 -132 -45 -254 -48 -270 -2 -17 -11 -39 -18 -49 -13 -18 -15 -18 -52 5 -21 12 -40 24 -42 25 -1 2 11 20 28 41 62 78 120 259 104 324 -14 54 -40 49 -148 -27 -53 -36 -120 -75 -148 -86 l-52 -19 57 51 c60 53 158 199 158 234 0 27 -29 56 -55 56 -20 0 -124 -29 -173 -47 -8 -4 16 25 55 63 53 52 79 88 107 147 21 46 36 90 34 105 -3 23 -9 28 -48 35 -40 8 -60 4 -172 -36 -71 -25 -128 -44 -128 -41 0 16 401 784 449 860 14 23 27 39 28 35 1 -3 18 -103 37 -221z m-275 -712 c-37 -74 -68 -106 -185 -195 -119 -89 -131 -108 -97 -145 9 -10 27 -18 41 -18 19 0 154 38 270 75 19 7 -62 -109 -99 -139 -18 -15 -86 -54 -151 -87 -99 -50 -118 -63 -118 -82 0 -51 42 -58 193 -31 99 17 183 45 239 80 l37 24 -20 -34 c-37 -64 -97 -122 -152 -149 -49 -24 -223 -65 -352 -83 -27 -3 -58 -11 -67 -16 -41 -20 -6 -98 44 -98 16 0 109 12 206 26 270 39 351 30 401 -45 15 -23 15 -23 -9 -16 -104 35 -287 -19 -697 -203 -102 -46 -118 -50 -163 -45 -38 4 -56 12 -70 31 -23 29 -19 40 46 113 56 63 53 57 165 363 50 138 122 322 161 410 38 89 72 168 75 178 3 11 57 35 161 71 87 30 158 55 160 56 1 0 -7 -18 -19 -41z")
                ans.Poly.push(polygonSolver("0,0 48,68 139,219 334,598 835,1715 980,2031 1011,2250 879,2303 806,2315 869,2370 982,2477 1068,2564 1436,2923 1567,3098 1538,3126 1415,3020 788,2547 459,2443 329,2383 438,2357 825,2447 854,2458 830,2440 721,2373 647,2296 671,2265 535,2169 164,2041 -13,2055 -99,2074 -104,2038 -85,1966 -61,1913 -125,1734 -169,1533 -134,258 -97,-7 -69,-60 0,0",x,y))
                ans.Data.push({scalX:0.85, scalY:0.85, tranX:7000, tranY:-1200, rotat:180})
                //Part 3
                ans.Line.push("M"+x+" "+y+" c-58 -40 -150 -122 -334 -299 -183 -177 -249 -235 -360 -317 -94 -69 -272 -180 -373 -233 -121 -63 -116 -102 11 -107 l77 -4 -45 -19 c-25 -11 -72 -33 -105 -50 l-60 -30 -137 92 c-161 108 -266 163 -438 227 -140 53 -173 55 -178 13 -4 -30 15 -41 153 -87 153 -52 355 -170 625 -365 41 -29 91 -62 110 -72 60 -31 235 -210 383 -391 123 -151 144 -173 166 -170 56 6 28 72 -83 197 -24 27 -19 24 24 -12 71 -61 97 -61 117 3 28 92 34 143 23 191 l-11 47 42 44 c40 43 44 45 75 35 24 -7 41 -7 59 1 22 10 25 18 25 61 0 26 -6 67 -14 89 -12 34 -12 41 -1 46 14 5 25 26 107 216 72 166 109 284 172 557 56 242 67 328 44 351 -18 18 -31 15 -74 -14z m-53 -342 c-65 -278 -120 -441 -219 -649 l-29 -62 -53 54 -53 54 59 63 c62 67 154 218 154 254 0 41 -23 48 -99 29 -55 -13 -89 -15 -158 -10 l-88 8 60 51 c33 28 152 140 264 250 113 109 207 193 209 188 2 -6 -20 -109 -47 -230z m-288 -402 c-67 -105 -137 -159 -208 -160 -37 0 -55 -16 -55 -46 0 -26 17 -34 70 -34 47 0 107 -43 162 -115 32 -42 64 -112 55 -121 -1 -2 -36 6 -77 17 -43 12 -123 23 -186 26 -107 5 -112 5 -123 -16 -19 -34 -5 -55 81 -128 62 -52 86 -80 104 -121 27 -60 28 -61 14 -98 l-11 -27 -27 26 c-16 15 -33 27 -39 27 -6 0 -20 11 -30 25 -27 37 -235 205 -254 205 -9 0 -45 21 -80 47 -35 26 -88 63 -116 84 -41 29 -50 39 -40 47 7 6 60 30 118 52 122 47 129 51 143 73 14 22 -14 52 -72 77 l-45 20 26 20 c14 11 28 20 32 20 3 0 56 32 118 72 66 42 128 74 152 79 22 3 104 6 181 5 l141 -1 -34 -55z")
                ans.Poly.push(polygonSolver("0,0 334,299 694,616 1067,849 1056,956 979,960 1024,979 1129,1029 1189,1059 1326,967 1764,740 1942,727 1789,814 1164,1179 1054,1251 671,1642 505,1812 588,1615 564,1627 447,1624 424,1433 435,1386 393,1342 318,1307 259,1306 234,1245 248,1156 249,1110 142,894 -30,337 -74,-14 0,0",x,y))
                ans.Data.push({scalX:0.85, scalY:0.85, tranX:3800, tranY:-100, rotat:180})
                //Part 4
                ans.Line.push(false)
                ans.Poly.push(polygonSolver("0,0 138,45 204,66 288,178 521,758 666,1073 697,1292 559,1345 489,1352 346,1276 -53,1095 -327,1098 -413,1116 -418,1080 -399,1008 -375,963 -277,860 -256,851 -273,804 -378,479 -230,506 -82,592 -30,611 -87,560 -245,324 -188,270 -17,317 -72,254 -179,108 -206,-24 -153,-35 0,0",x,y))
                ans.Data.push({scalX:0.82, scalY:0.83, tranX:7450, tranY:-250, rotat:180})
                //Part 5
                ans.Line.push(false)
                ans.Poly.push(polygonSolver("0,0 210,8 371,2 460,63 779,256 757,356 680,361 725,380 930,498 712,670 495,849 410,928 320,985 266,1020 213,1055 171,981 233,663 204,650 99,688 64,704 14,709 -65,646 -50,556 -41,515 48,406 109,347 50,283 -105,29 -66,-14 0,0",x,y))
                ans.Data.push({scalX:0.82, scalY:0.80, tranX:4180, tranY:550, rotat:180})
                //Part 6
                ans.Line.push("M"+x+" "+y+" c-14 -30 1 -51 41 -60 16 -3 41 -19 56 -35 16 -17 38 -30 50 -30 22 0 436 -226 634 -347 180 -110 283 -186 394 -292 144 -139 225 -253 423 -601 104 -182 114 -195 140 -195 55 0 44 35 -88 265 -241 419 -353 558 -597 739 -47 34 -103 72 -125 83 -22 11 -56 33 -76 49 -49 39 -422 249 -442 249 -9 0 -29 10 -45 23 -38 31 -120 80 -163 97 -19 7 -42 19 -50 25 -27 22 -99 55 -120 55 -12 0 -25 -10 -32 -25z")
                ans.Poly.push(false)
                ans.Data.push({scalX:0.85, scalY:0.85, tranX:6000, tranY:600, rotat:180})
            }
            //HairBack_004 js
                else if(v == 004){
                //HairBack_004 js
                //Part 1
                ans.Line.push("M"+x+" "+y+" c-41 -14 -151 -50 -245 -79 -211 -67 -457 -187 -765 -373 -205 -124 -241 -153 -210 -172 13 -8 270 -3 279 5 2 3 17 5 33 5 48 0 32 -31 -49 -95 -129 -103 -187 -167 -236 -262 -84 -163 -167 -360 -182 -432 -34 -164 -60 -434 -95 -988 -25 -398 -25 -413 -4 -413 46 0 111 81 155 194 9 22 24 43 34 45 16 3 17 -3 11 -50 -11 -78 -53 -259 -87 -369 -16 -53 -29 -106 -29 -118 0 -12 -4 -22 -10 -22 -14 0 -13 -33 2 -48 25 -25 46 -14 166 94 31 28 78 61 104 73 112 53 160 172 162 403 1 104 11 131 40 103 9 -9 16 -23 16 -31 0 -8 11 -41 25 -73 13 -32 26 -70 29 -83 4 -25 18 -55 76 -163 70 -131 218 -288 346 -367 110 -68 224 -131 224 -125 0 3 -47 84 -105 181 -273 460 -330 597 -380 927 -23 144 -19 162 37 178 60 18 438 163 593 228 253 106 416 205 745 452 107 81 208 153 223 161 26 13 43 11 170 -14 78 -16 221 -48 317 -72 488 -120 529 -163 710 -754 28 -91 60 -199 71 -240 38 -143 36 -140 72 -133 18 3 33 7 35 8 1 1 9 40 18 86 19 104 21 381 3 694 -11 206 -13 222 -36 251 -20 27 -21 33 -9 43 12 10 18 8 33 -8 9 -12 21 -21 25 -21 4 0 29 -16 55 -36 26 -20 56 -40 68 -44 11 -4 53 -28 94 -54 84 -52 149 -75 306 -111 135 -30 132 -30 137 0 10 50 -43 134 -359 570 -171 236 -193 261 -267 319 -41 31 -38 47 11 51 41 4 253 127 250 145 -2 16 -27 23 -311 85 -292 63 -425 115 -661 255 -97 58 -149 81 -274 121 -196 63 -286 73 -376 39 -33 -12 -86 -26 -118 -30 -32 -4 -71 -13 -88 -20 -25 -11 -43 -8 -137 19 -201 58 -321 81 -447 86 -108 3 -128 1 -195 -21z m310 -54 c127 -9 308 -54 405 -100 l40 -19 110 35 c139 44 221 56 305 44 88 -13 269 -67 302 -90 41 -30 266 -146 339 -175 66 -26 405 -133 444 -140 11 -2 36 -9 55 -15 19 -7 54 -19 78 -27 55 -19 57 -45 3 -61 -43 -13 -210 -14 -346 -2 -49 4 -303 45 -564 89 -492 84 -490 84 -491 40 0 -13 45 -25 243 -63 341 -65 748 -133 837 -141 46 -3 94 -14 125 -29 57 -26 201 -158 248 -226 17 -25 47 -60 68 -78 21 -18 40 -45 44 -60 3 -15 27 -54 53 -86 26 -32 54 -68 62 -80 8 -11 33 -41 55 -64 53 -58 155 -224 155 -253 0 -14 -66 -3 -95 15 -11 7 -63 25 -115 40 -133 38 -137 40 -396 253 -105 85 -171 149 -223 213 -63 78 -77 91 -100 88 -51 -6 -39 -44 45 -148 199 -246 228 -327 240 -665 3 -88 10 -180 15 -205 11 -48 2 -260 -11 -260 -4 0 -11 12 -14 27 -6 26 -134 451 -155 516 -21 63 -109 196 -171 257 -126 127 -268 169 -870 260 -307 46 -343 47 -348 11 -5 -30 9 -43 55 -50 l38 -7 -160 -114 c-600 -427 -750 -505 -1280 -665 -65 -20 -120 -37 -122 -38 -4 -5 15 -159 36 -292 40 -250 90 -387 227 -631 89 -158 91 -163 54 -134 -56 44 -154 152 -201 221 -73 107 -137 268 -245 614 -54 174 -75 215 -110 215 -14 0 -27 -7 -31 -16 -3 -9 1 -110 11 -223 35 -429 19 -505 -135 -665 -45 -47 -85 -86 -90 -86 -4 0 1 19 11 42 10 24 31 84 46 133 25 83 27 107 31 305 5 243 0 273 -44 268 -25 -3 -31 -11 -58 -93 -31 -90 -94 -219 -103 -211 -5 5 10 263 34 576 58 781 124 940 554 1333 197 181 182 164 170 187 -15 29 -38 25 -189 -26 -115 -39 -247 -68 -231 -52 11 12 394 216 560 299 196 98 296 136 485 185 146 37 142 37 315 24z")
                ans.Poly.push(polygonSolver("0,0 245,79 1010,452 1220,624 941,619 908,614 957,709 1193,971 1375,1403 1470,2391 1474,2804 1319,2610 1285,2565 1274,2615 1361,2984 1390,3102 1400,3124 1398,3172 1232,3078 1128,3005 966,2602 926,2499 910,2530 885,2603 856,2686 780,2849 434,3216 210,3341 315,3160 695,2233 658,2055 65,1827 -680,1375 -903,1214 -073,1228 -1390,1230 -1690,1290 -1890,1500 -2100,2054 -2171,2294 -2243,2427 -2278,2419 -2296,2333 -2299,1639 -2263,1388 -2254,1345 -2287,1353 -2312,1374 -2367,1410 -2435,1454 -2529,1508 -2835,1619 -2972,1619 -2613,1049 -2346,730 -2357,679 -2607,534 -2296,449 -1635,194 -1361,73 -985,34 -867,64 -779,84 -642,65 -195,-21 0,0",x,y))
                ans.Data.push({scalX:1.05, scalY:1.1, tranX:6500, tranY:600, rotat:180})
                //Part 2
                ans.Line.push("M"+x+" "+y+" c-11 -10 -28 -43 -37 -73 -19 -56 -251 -417 -322 -498 -20 -24 -154 -156 -298 -295 -252 -242 -377 -351 -436 -382 l-29 -15 29 63 c16 34 55 157 85 272 75 279 71 268 115 361 48 100 103 161 241 271 82 64 109 91 109 108 0 16 -7 25 -26 29 -21 6 -40 -3 -101 -50 -129 -97 -221 -191 -271 -279 -51 -88 -79 -156 -92 -225 -16 -86 -91 -345 -115 -397 -13 -29 -37 -72 -54 -97 -17 -25 -31 -48 -31 -51 0 -4 -9 -20 -21 -36 -29 -41 -24 -113 8 -117 25 -4 212 100 283 156 154 124 337 292 479 441 90 94 169 171 177 171 12 0 118 142 223 298 38 57 76 132 141 279 19 43 21 55 10 68 -17 20 -43 19 -67 -2z")
                ans.Poly.push(false)
                ans.Data.push({scalX:0.9, scalY:0.85, tranX:6500, tranY:1100, rotat:180})
            }
            //HairBack_005 js
                else if(v == 005){
                //HairBack_005 js
                ans.Line.push("M"+x+" "+y+" c-288 -42 -432 -77 -665 -164 -189 -70 -279 -112 -365 -169 -178 -117 -551 -473 -638 -608 -48 -72 -143 -281 -178 -385 -20 -64 -30 -128 -60 -423 -31 -297 -35 -451 -15 -563 30 -174 97 -306 292 -579 86 -120 98 -134 122 -131 41 5 39 43 -8 203 -22 76 -40 145 -40 154 1 10 13 1 33 -24 18 -22 73 -85 123 -140 l91 -100 17 -290 c58 -975 91 -1143 339 -1715 65 -148 75 -165 98 -168 18 -2 31 4 41 20 14 21 13 35 -4 138 -11 63 -21 167 -22 230 -2 63 -15 214 -29 335 -34 284 -48 475 -42 539 3 28 7 110 9 181 2 72 11 177 20 235 9 58 25 180 36 272 11 92 31 236 44 320 30 192 46 322 46 380 0 59 43 266 116 556 l59 232 40 11 c167 45 621 223 635 249 5 10 53 41 106 69 53 29 180 101 283 161 103 61 195 110 205 110 9 0 32 -15 50 -34 73 -72 234 -211 301 -259 109 -77 216 -124 371 -162 123 -30 566 -105 621 -105 20 0 22 -7 28 -107 4 -60 5 -292 2 -518 -8 -535 -19 -631 -114 -955 -79 -271 -122 -400 -200 -590 -149 -363 -170 -445 -183 -693 -8 -164 -8 -172 20 -302 16 -74 33 -142 39 -153 5 -10 26 -81 45 -158 22 -89 41 -143 52 -151 26 -19 62 -16 74 6 11 22 13 156 1 184 -13 34 42 450 73 547 l15 45 0 -59 c1 -77 20 -235 31 -263 7 -18 18 -23 45 -23 44 0 50 12 65 145 16 148 41 240 146 550 109 324 230 727 269 900 34 155 58 318 85 590 12 121 26 224 31 230 22 23 3 548 -27 720 -21 124 -73 275 -150 435 -36 74 -70 147 -74 163 -17 55 -136 251 -196 321 -33 39 -94 97 -135 128 -94 72 -339 228 -358 228 -8 0 -50 23 -93 51 -173 111 -413 216 -624 274 -227 62 -341 77 -619 80 -137 2 -263 1 -280 -1z m525 -69 c225 -26 562 -132 792 -248 189 -95 249 -134 373 -237 50 -41 115 -93 145 -114 219 -156 320 -271 401 -456 20 -47 59 -132 87 -190 106 -224 136 -349 153 -650 13 -230 11 -273 -25 -620 -31 -289 -32 -301 -57 -450 -38 -230 -138 -585 -293 -1040 -51 -151 -102 -308 -112 -348 -10 -39 -22 -72 -25 -72 -21 0 17 217 73 414 46 165 46 190 1 194 -23 2 -34 -2 -41 -15 -15 -29 -148 -417 -187 -548 -37 -121 -68 -289 -82 -445 l-8 -85 -42 165 -42 165 9 170 c11 197 19 235 88 406 28 69 66 171 86 227 19 55 48 134 64 174 29 71 137 409 166 518 24 87 55 256 67 365 6 55 13 325 16 600 3 275 9 510 14 522 6 17 26 26 109 45 98 22 101 24 95 48 -4 14 -7 26 -8 26 -1 1 -157 64 -347 139 -524 208 -710 305 -796 411 -75 94 -134 186 -177 277 -43 91 -48 97 -76 97 -16 0 -32 -4 -35 -9 -10 -16 131 -290 189 -367 110 -147 234 -223 615 -382 118 -49 254 -104 302 -123 49 -19 88 -38 88 -42 0 -16 -34 -20 -74 -8 -23 6 -128 25 -234 41 -229 35 -357 65 -511 119 -190 67 -302 154 -542 421 -130 145 -157 170 -179 168 -46 -5 -38 -45 25 -121 31 -38 55 -70 53 -72 -6 -5 -423 -242 -485 -275 -35 -18 -63 -37 -63 -41 0 -30 -530 -232 -725 -277 -138 -32 -446 -62 -630 -62 l-60 0 125 71 c69 40 258 141 420 227 500 262 633 349 1073 700 150 119 168 137 165 160 -2 20 -9 28 -28 30 -19 2 -59 -25 -170 -114 -169 -136 -392 -305 -494 -373 -142 -96 -280 -173 -741 -416 -259 -136 -476 -254 -482 -263 -19 -24 -16 -51 10 -78 20 -22 30 -24 128 -24 l107 0 -35 -112 c-18 -62 -46 -169 -60 -238 -25 -116 -27 -143 -27 -370 1 -135 4 -267 8 -295 l8 -50 -32 30 c-63 59 -156 185 -200 271 l-45 87 1 216 c0 214 0 217 39 386 22 94 39 190 40 215 0 42 -2 45 -27 48 -36 4 -39 -4 -83 -210 -54 -258 -58 -298 -51 -546 6 -208 21 -336 47 -420 6 -18 9 -35 6 -38 -2 -3 -31 37 -64 88 -185 286 -204 422 -133 988 24 193 38 269 66 358 72 232 138 353 266 488 87 92 338 320 425 387 103 79 263 156 488 234 245 86 239 85 460 128 150 29 190 33 340 34 94 1 226 -6 295 -14z m-1213 -1629 c-3 -8 -28 -87 -56 -177 -107 -349 -126 -465 -156 -949 -9 -135 -22 -299 -30 -365 -62 -508 -60 -819 11 -1429 14 -120 23 -223 21 -229 -8 -26 -188 446 -227 597 -40 157 -51 263 -60 576 -4 151 -14 361 -23 465 -32 388 -41 565 -41 775 0 247 8 303 81 553 l46 157 49 0 c63 0 280 20 333 30 58 11 58 11 52 -4z")
                ans.Poly.push(polygonSolver("0,0 665,164 1030,333 1668,941 1846,1326 1906,1749 1921,2312 1629,2891 1507,3022 1515,2819 1555,2665 1522,2689 1399,2829 1308,2929 1291,3219 952,4934 854,5102 813,5082 817,4944 839,4714 868,4379 910,3840 901,3659 881,3424 845,3152 801,2832 755,2452 639,1896 580,1664 540,1653 -95,1404 -201,1335 -484,1174 -689,1064 -739,1098 -1040,1357 -1411,1519 -2032,1624 -2060,1731 -2062,2249 -1948,3204 -1748,3794 -1565,4487 -1585,4789 -1624,4942 -1669,5100 -1721,5251 -1795,5245 -1796,5061 -1869,4514 -1884,4469 -1884,4528 -1915,4791 -1960,4814 -2025,4669 -2171,4119 -2440,3219 -2525,2629 -2556,2399 -2529,1679 -2379,1244 -2305,1081 -2109,760 -1974,632 -1616,404 -1523,353 -899,79 -280,-1 0,0",x,y))
                ans.Data.push({scalX:0.95, scalY:1.05, tranX:6300, tranY:400, rotat:180})
            }
            //HairBack_006 js
                else if(v == 006){
                //HairBack_006 js
                //Part 1
                ans.Line.push("M"+x+" "+y+" c-7 -12 -3 -80 5 -80 3 0 14 -24 25 -52 33 -96 93 -205 134 -244 23 -21 71 -55 107 -76 l67 -36 -54 -11 c-30 -6 -126 -24 -214 -41 -214 -41 -203 -38 -215 -60 -8 -15 -5 -25 14 -47 21 -24 34 -29 88 -33 l63 -5 -170 -72 c-210 -89 -382 -147 -500 -169 -65 -12 -172 -18 -383 -21 -259 -5 -294 -7 -302 -22 -6 -12 9 -59 51 -161 113 -276 194 -415 292 -508 32 -29 57 -59 57 -66 0 -7 -11 -23 -25 -36 -14 -13 -25 -29 -25 -36 0 -6 -52 -81 -116 -165 -268 -353 -351 -434 -754 -733 -102 -76 -187 -140 -189 -142 -2 -1 -1 -14 3 -27 l6 -25 106 39 c58 22 111 39 118 39 7 0 52 16 101 35 49 19 91 33 93 30 2 -2 -16 -25 -40 -52 -149 -161 -203 -268 -214 -428 -7 -89 19 -396 40 -479 11 -44 17 -51 39 -54 33 -4 34 -2 86 183 96 336 136 407 335 604 71 71 86 82 92 67 9 -22 -2 -256 -17 -380 -22 -184 -92 -401 -238 -735 -22 -52 -40 -95 -38 -96 12 -8 221 16 251 29 21 9 73 50 116 92 74 71 79 74 85 52 18 -59 129 -276 176 -343 82 -119 279 -299 321 -293 26 3 37 40 19 62 -9 10 -67 355 -126 736 -69 452 -90 706 -62 751 8 13 20 49 27 79 20 86 98 238 150 291 43 44 141 94 225 115 l30 7 -38 -42 c-21 -24 -59 -75 -84 -114 -25 -40 -54 -84 -64 -99 -42 -60 -11 -95 75 -84 73 8 548 102 696 137 155 36 322 91 417 136 94 44 237 161 492 404 112 107 211 195 220 197 9 2 50 -19 91 -46 124 -82 368 -222 489 -280 63 -31 212 -90 330 -133 l216 -77 -3 -43 c-2 -24 -8 -48 -13 -53 -5 -6 -9 -26 -9 -45 0 -41 -26 -202 -40 -246 -9 -26 -15 -63 -35 -193 -3 -18 -16 -79 -30 -135 -64 -272 -159 -524 -385 -1027 -78 -173 -144 -326 -147 -340 -7 -41 13 -80 41 -80 36 0 301 215 423 343 l101 107 -49 -108 c-27 -59 -49 -115 -49 -125 0 -35 29 -77 54 -77 24 0 218 149 342 263 102 93 185 231 258 432 20 55 46 123 57 150 10 28 21 60 23 71 8 40 68 229 75 237 4 4 16 -48 27 -115 23 -150 25 -366 5 -530 -11 -87 -12 -123 -4 -140 6 -13 14 -31 17 -41 3 -10 15 -17 31 -17 45 0 243 285 282 408 9 26 18 98 22 160 l6 113 50 -63 c58 -73 125 -116 234 -153 102 -34 118 -33 134 7 13 31 11 39 -40 152 -64 141 -95 254 -167 610 l-53 266 55 -30 c31 -17 63 -30 72 -30 9 0 25 -9 36 -21 10 -12 50 -37 89 -56 38 -20 74 -42 80 -50 7 -10 24 -13 50 -11 34 3 40 7 43 28 2 19 -19 51 -83 130 -118 143 -215 290 -253 382 -37 88 -94 283 -113 379 -6 35 -22 105 -35 155 -13 51 -24 96 -24 100 0 5 64 9 142 9 l143 0 3 26 c3 24 -14 38 -175 150 -283 195 -361 256 -478 374 -101 100 -306 359 -296 374 2 3 63 38 135 76 137 73 151 88 126 134 -10 20 -19 21 -298 21 -309 1 -458 11 -536 36 -34 12 -70 37 -120 85 l-72 68 -135 -10 c-219 -16 -294 -34 -394 -98 -27 -17 -55 -31 -62 -31 -7 0 -84 42 -171 93 -229 137 -444 234 -645 292 -103 30 -427 105 -587 136 -30 6 -63 15 -72 20 -23 12 -55 12 -63 -1z m420 -160 c398 -94 544 -153 915 -364 102 -58 193 -106 202 -106 9 0 34 11 55 26 110 74 201 100 396 112 116 7 118 7 133 -16 9 -13 31 -30 50 -38 19 -8 34 -20 34 -27 0 -23 40 -37 127 -46 56 -6 91 -14 97 -23 18 -25 138 -28 330 -10 168 15 179 15 191 -1 7 -9 20 -17 30 -17 13 0 8 -7 -16 -25 -41 -29 -356 -193 -384 -199 -11 -3 -36 -8 -55 -11 -19 -4 -91 -21 -160 -37 -234 -56 -304 -50 -522 43 -135 58 -159 59 -169 11 -7 -32 -6 -33 65 -66 39 -19 91 -40 116 -46 25 -7 71 -21 104 -31 90 -31 251 -42 344 -24 42 8 87 15 98 15 24 0 395 168 405 183 12 17 39 -1 39 -24 0 -23 126 -197 222 -307 94 -108 291 -271 438 -362 30 -19 69 -45 85 -59 17 -15 42 -34 55 -44 25 -17 24 -18 -44 -11 -183 16 -269 65 -554 315 l-103 90 -34 -21 c-19 -12 -35 -23 -35 -25 0 -1 90 -71 200 -154 110 -84 200 -158 200 -164 0 -14 51 -47 73 -47 8 0 20 -7 27 -15 7 -8 29 -20 49 -26 56 -17 76 -64 111 -264 17 -93 41 -208 53 -255 26 -102 156 -364 227 -460 27 -36 47 -66 46 -68 -2 -1 -47 22 -101 53 -54 30 -104 55 -111 55 -7 0 -21 11 -30 26 -23 35 -68 30 -72 -7 -4 -34 97 -555 143 -734 18 -74 50 -171 70 -217 20 -46 39 -89 42 -95 8 -20 -17 -15 -82 16 -72 34 -134 97 -210 216 -50 77 -59 86 -83 83 l-27 -3 -5 -205 c-5 -175 -9 -212 -26 -255 -18 -45 -104 -183 -152 -243 -18 -23 -18 -23 -15 45 2 37 8 104 13 147 16 131 12 170 -49 436 -78 342 -81 342 -177 -15 -58 -216 -200 -546 -289 -671 -57 -80 -236 -246 -251 -232 -7 8 47 128 58 128 5 0 6 5 3 10 -3 6 -2 10 3 10 5 0 9 6 9 13 0 6 53 122 117 257 103 216 116 250 114 290 -3 42 -5 45 -32 45 -26 0 -39 -16 -158 -205 -169 -266 -255 -387 -348 -484 -76 -80 -268 -241 -277 -232 -2 2 0 13 6 24 6 12 11 33 11 47 0 15 13 44 29 64 29 37 170 348 260 573 134 338 186 530 271 1003 52 294 47 275 69 275 13 0 20 9 23 30 3 17 2 33 -2 35 -4 2 -121 42 -261 88 -372 124 -468 170 -831 394 -92 56 -176 103 -187 103 -11 0 -70 -57 -150 -144 -379 -415 -543 -514 -1035 -621 -89 -20 -181 -41 -206 -47 -25 -7 -49 -11 -54 -10 -5 2 -23 -2 -40 -9 -17 -6 -53 -15 -81 -20 -27 -4 -68 -12 -90 -18 -109 -28 -106 -31 -37 45 166 182 329 302 647 476 180 99 190 105 190 133 0 54 -34 44 -225 -61 -170 -95 -303 -151 -660 -281 -219 -79 -299 -132 -352 -230 -26 -48 -82 -225 -100 -318 -14 -66 -3 -284 22 -465 11 -80 20 -166 20 -191 0 -38 94 -552 131 -718 5 -24 8 -45 6 -48 -9 -9 -133 137 -192 227 -35 52 -98 165 -141 250 -75 148 -80 155 -109 155 -24 0 -31 -5 -35 -27 -7 -38 -64 -114 -102 -138 -33 -21 -177 -70 -203 -70 -11 0 -5 21 21 78 205 441 242 592 228 937 -8 197 -19 245 -57 245 -15 0 -58 -37 -138 -117 -190 -193 -254 -292 -322 -503 -19 -57 -36 -99 -40 -94 -3 6 -9 66 -13 135 -13 249 21 325 264 586 57 61 117 117 133 124 37 15 50 38 38 61 -13 25 -49 22 -88 -6 -17 -13 -40 -22 -49 -20 -9 3 -73 -18 -141 -46 -69 -27 -129 -50 -135 -50 -6 0 33 29 87 65 53 36 97 70 97 75 0 5 33 30 72 56 40 25 121 93 179 150 58 58 109 101 114 97 4 -5 5 -2 1 5 -5 8 -1 21 10 32 11 10 30 34 44 54 14 20 34 36 45 36 14 0 16 3 8 8 -9 6 14 45 80 138 50 72 108 154 127 182 39 59 32 58 150 16 107 -37 285 -70 515 -93 277 -28 538 -46 558 -38 26 10 22 56 -5 66 -38 13 -339 32 -409 26 -42 -5 -123 1 -234 14 -376 47 -484 87 -609 222 -77 83 -186 238 -186 264 0 12 -23 77 -51 144 -28 66 -49 127 -46 135 5 11 50 14 249 13 275 0 368 13 567 80 99 33 478 191 564 235 35 17 46 18 140 8 166 -18 308 -46 552 -110 126 -34 241 -60 255 -58 19 2 26 10 28 30 4 35 4 35 -230 97 -297 79 -475 113 -663 129 l-90 7 155 29 c85 16 164 33 175 38 15 7 84 -3 234 -31 117 -23 225 -41 241 -41 15 0 30 -6 33 -14 4 -10 34 -16 99 -21 100 -8 140 -23 218 -82 54 -42 93 -42 98 -1 3 22 -6 33 -60 71 -35 24 -77 52 -94 60 -18 9 -123 30 -235 47 -262 41 -488 84 -570 111 -88 29 -190 83 -227 122 -34 35 -97 151 -107 195 l-6 29 48 -8 c26 -4 147 -30 268 -59z")
                ans.Poly.push(polygonSolver("0,0 -5,80 -30,132 -164,376 -271,452 -338,488 -284,499 -70,540 145,600 131,647 43,680 -20,685 150,757 650,926 1033,947 1335,969 1284,1130 992,1638 935,1704 960,1740 985,1776 1101,1941 1855,2674 2044,2816 2041,2843 2035,2868 1929,2829 1811,2790 1710,2755 1617,2725 1657,2777 1871,3205 1831,3684 1792,3738 1706,3555 1371,2951 1279,2884 1296,3264 1534,3999 1572,4095 1321,4066 1205,3974 1120,3922 944,4265 623,4558 604,4496 730,3760 792,3009 765,2930 615,2639 390,2524 360,2517 398,2559 482,2673 546,2772 471,2856 -225,2719 -642,2583 -1134,2179 -1354,1982 -1445,2028 -1934,2308 -2264,2441 -2480,2518 -2477,2561 -2464,2614 -2455,2659 -2415,2905 -2380,3098 -2350,3233 -1965,4260 -1818,4600 -1859,4680 -2282,4337 -2383,4230 -2334,4338 -2285,4463 -2339,4540 -2681,4277 -2939,3845 -2996,3695 -3019,3624 -3094,3387 -3121,3502 -3126,4032 -3122,4172 -3139,4213 -3170,4230 -3452,3822 -3474,3662 -3480,3549 -3530,3612 -3764,3765 -3898,3758 -3858,3606 -3691,2996 -3638,2730 -3693,2760 -3765,2790 -3801,2811 -3890,2867 -3970,2917 -4020,2928 -4063,2900 -3980,2770 -3727,2388 -3614,2009 -3579,1854 -3555,1754 -3697,1745 -3840,1745 -3843,1719 -3668,1569 -3190,1195 -2894,821 -3029,745 -3155,611 -2857,590 -2321,554 -2201,469 -2129,401 -1994,411 -1600,509 -1538,540 -1367,447 -722,155 -135,19 -63,-1 0,0",x,y))
                ans.Data.push({scalX:-0.9, scalY:1., tranX:2500, tranY:-100, rotat:180})
                //Part 2
                ans.Line.push("M"+x+" "+y+" c-26 -7 -51 -15 -55 -17 -104 -56 -174 -105 -179 -125 -15 -57 26 -70 87 -27 l38 26 60 -37 c160 -96 263 -181 336 -275 44 -57 100 -158 92 -167 -8 -7 -266 136 -356 199 -128 88 -165 93 -289 37 -58 -26 -63 -31 -60 -56 3 -25 7 -28 38 -27 19 1 61 12 94 24 l58 24 47 -25 c25 -13 68 -47 96 -75 52 -53 278 -242 425 -356 182 -141 393 -257 603 -333 124 -44 756 -225 789 -225 30 0 48 17 48 46 0 15 -17 31 -62 59 -35 21 -113 71 -174 110 -114 74 -170 128 -670 645 -71 74 -182 188 -245 253 -169 176 -259 237 -451 308 -89 32 -183 37 -270 14z m330 -129 c87 -41 107 -56 284 -222 268 -252 868 -863 868 -886 0 -24 -2 -24 -148 18 -390 112 -588 207 -855 412 -102 78 -135 110 -76 75 19 -11 91 -50 161 -87 l127 -67 21 21 c31 31 15 49 -109 116 -61 32 -111 65 -111 73 0 7 -27 68 -60 135 -76 155 -135 221 -310 346 -152 108 -152 108 10 109 103 0 107 -1 198 -43z")
                ans.Poly.push(polygonSolver("0,0 55,17 234,142 147,169 109,143 49,180 -287,455 -379,622 -23,423 266,386 326,442 288,469 194,445 136,421 89,446 -7,521 -432,877 -1035,1210 -1824,1435 -1872,1389 -1810,1330 -1636,1220 -966,575 -721,322 -270,14 0,0",x,y))
                ans.Data.push({scalX:-1.2, scalY:1, tranX:1700, tranY:1000, rotat:180})
            }   
            //HairBack_007 js
                else if(v == 007){
                //HairBack_007 js
                //Part 1
                ans.Line.push("M"+x+" "+y+" c -985 -1098 -1168 -1331 -1683 -2133 c -81 -126 -171 -266 -200 -310 c -49 -76 -54 -87 -79 -219 c -25 -130 -30 -144 -68 -195 c -89 -120 -319 -377 -455 -509 c -34 -34 -43 -50 -41 -70 c 2 -21 9 -28 30 -30 c 48 -6 330 79 430 129 c 32 16 62 29 68 29 c 5 0 10 -14 10 -31 c 0 -35 -32 -83 -278 -409 c -85 -113 -194 -246 -243 -295 c -84 -85 -89 -93 -89 -133 c 0 -54 14 -82 42 -82 c 29 0 290 138 518 275 c 104 62 190 111 190 107 c 0 -19 -39 -105 -73 -162 c -53 -88 -109 -166 -206 -285 c -61 -75 -81 -106 -79 -125 c 4 -36 54 -39 103 -6 c 21 15 41 26 44 26 c 11 0 -16 -231 -34 -290 c -15 -47 -66 -185 -156 -420 c -12 -30 -38 -84 -57 -120 c -20 -36 -46 -85 -58 -110 c -27 -55 -95 -120 -242 -229 c -110 -81 -112 -84 -112 -122 c 0 -34 4 -41 28 -50 c 33 -14 158 -6 353 21 c 172 24 164 22 266 72 c 78 38 107 62 161 133 c 12 17 20 23 17 15 c -57 -175 -105 -352 -103 -375 c 2 -24 8 -31 30 -33 c 33 -4 377 105 501 158 l 89 39 l 35 -20 c 20 -11 45 -19 57 -17 c 18 3 22 11 26 63 c 4 51 11 68 47 115 c 22 30 58 87 79 125 c 20 39 39 72 41 74 c 6 8 32 -35 89 -148 c 30 -62 77 -141 105 -177 c 27 -36 49 -69 49 -73 c 0 -5 60 -60 133 -123 c 220 -190 220 -189 247 -186 c 22 3 26 10 33 56 c 8 50 6 58 -41 162 l -50 110 l 102 -107 c 55 -59 162 -155 236 -215 c 123 -98 139 -108 177 -108 c 38 0 43 3 49 27 c 8 32 18 6 -151 383 c -223 497 -317 748 -380 1017 c -14 56 -27 117 -30 135 c -20 130 -26 167 -35 193 c -14 44 -40 205 -40 245 c 0 20 -4 40 -9 45 c -5 6 -11 29 -13 53 l -3 44 l 216 77 c 119 43 267 103 330 133 c 121 58 365 198 489 280 c 41 27 82 48 91 46 c 9 -2 108 -90 220 -197 c 350 -333 434 -393 651 -467 c 154 -52 425 -117 558 -133 c 36 -5 127 -23 203 -40 c 168 -39 280 -41 285 -5 c 3 23 -44 103 -100 171 c -21 24 -38 50 -38 57 c 0 7 -13 25 -30 41 c -16 16 -28 30 -26 33 c 9 8 185 -81 179 -91 c -3 -6 -1 -7 6 -3 c 17 11 78 -39 111 -91 c 29 -45 56 -133 96 -313 c 12 -58 27 -123 33 -144 c 12 -47 -6 -210 -64 -596 c -51 -339 -117 -726 -126 -736 c -18 -22 -7 -59 19 -62 c 42 -6 239 174 321 293 c 47 67 158 284 176 343 c 6 22 11 19 85 -52 c 43 -42 95 -83 116 -92 c 47 -20 244 -35 244 -19 c 0 6 -31 85 -69 176 c -169 405 -201 534 -217 870 c -4 75 -4 145 0 155 c 6 15 21 4 92 -67 c 202 -200 240 -271 353 -665 c 20 -66 48 -108 79 -116 c 21 -5 39 80 58 273 c 33 348 -1 463 -204 682 c -24 27 -42 50 -40 52 c 2 3 44 -11 94 -29 c 163 -61 313 -108 322 -102 c 16 10 21 44 8 59 c -6 8 -69 54 -141 102 c -260 177 -363 270 -423 384 c -27 51 -102 250 -102 272 c 0 12 117 -31 173 -64 c 69 -41 145 -115 262 -256 c 87 -105 112 -130 137 -133 c 21 -3 37 1 49 13 c 16 16 16 20 -1 80 c -23 81 -125 331 -174 429 c -21 41 -60 104 -86 140 c -46 62 -216 234 -344 348 c -48 44 -56 55 -46 67 c 7 8 18 15 24 15 c 24 0 176 108 365 259 c 167 134 192 157 189 179 c -6 47 -25 49 -187 21 l -149 -26 l 24 32 c 26 35 31 64 12 83 c -20 20 -33 14 -108 -44 l -71 -56 l 30 59 c 51 103 156 415 191 573 c 35 158 94 705 101 950 l 3 65 l -40 -1 c -34 -1 -298 -109 -518 -213 c -22 -11 -138 -60 -256 -109 c -191 -79 -241 -104 -449 -233 c -128 -79 -244 -155 -256 -169 c -190 -204 -378 -370 -420 -370 c -3 0 27 39 66 88 c 105 129 158 250 147 337 c -4 35 -39 46 -66 21 c -42 -38 -225 -89 -662 -185 c -112 -25 -251 -64 -342 -97 c -63 -23 -112 -46 -237 -113 c -14 -8 -90 -56 -169 -107 l -143 -94 l -30 16 c -25 12 -28 18 -18 30 c 12 15 42 161 84 424 c 35 217 45 525 21 705 c -16 124 -171 933 -187 973 c -7 17 -16 22 -47 22 c -35 0 -44 -6 -104 -72 Z m 100 -64 c 5 -9 7 -25 5 -34 c -3 -10 20 -135 51 -279 c 104 -483 111 -539 110 -831 c 0 -246 -2 -262 -36 -460 c -32 -181 -72 -328 -97 -353 c -12 -12 -61 11 -61 28 c 0 9 18 69 39 133 c 25 73 46 161 56 232 c 8 63 20 134 25 158 c 19 81 5 454 -26 702 c -13 104 -89 586 -97 613 c -1 5 -50 -49 -108 -120 c -78 -95 -122 -160 -171 -253 c -36 -69 -98 -186 -138 -260 c -105 -193 -268 -530 -340 -705 c -62 -148 -260 -678 -260 -694 c 0 -5 7 -14 15 -21 c 11 -9 33 -10 102 0 c 97 13 253 44 323 65 c 55 16 135 34 175 40 c 17 2 59 11 95 18 c 149 33 231 27 340 -21 l 45 -21 l -82 0 c -210 -2 -1004 -150 -1038 -193 c -5 -8 -56 -53 -111 -101 c -92 -79 -120 -110 -208 -229 c -15 -21 -33 -38 -40 -38 c -7 0 -19 -12 -27 -26 c -13 -24 -12 -28 5 -38 c 11 -6 27 -19 37 -28 c 10 -9 19 -13 21 -8 c 2 4 72 -14 156 -41 c 203 -64 287 -81 407 -82 c 78 -1 117 4 175 22 c 95 29 241 106 396 208 c 66 43 175 110 243 147 c 67 38 125 75 128 83 c 3 8 1 28 -4 46 c -15 53 -44 47 -157 -33 c -55 -39 -134 -89 -175 -112 c -42 -23 -92 -53 -111 -66 c -51 -35 -193 -101 -290 -135 c -121 -42 -263 -48 -461 -17 c -79 13 -164 30 -188 40 l -43 17 l 45 37 c 25 20 72 72 105 114 c 134 173 208 209 547 272 c 284 53 514 80 682 80 c 160 0 203 7 203 33 c 0 14 278 174 459 264 c 69 35 188 83 266 108 c 135 44 519 140 618 154 l 48 8 l -6 -29 c -10 -44 -73 -160 -107 -195 c -37 -39 -139 -93 -227 -122 c -82 -27 -308 -70 -570 -111 c -112 -17 -217 -38 -235 -47 c -17 -8 -59 -36 -94 -60 c -54 -38 -63 -49 -60 -71 c 5 -41 44 -41 98 1 c 78 59 118 74 218 82 c 60 5 95 12 98 20 c 3 7 33 15 71 19 c 36 4 78 13 94 21 c 15 8 46 15 68 15 c 22 0 88 9 147 21 c 73 14 114 17 128 11 c 12 -5 91 -22 176 -38 l 155 -29 l -90 -7 c -188 -16 -366 -50 -663 -129 c -234 -62 -234 -62 -230 -97 c 2 -20 9 -28 28 -30 c 14 -2 129 24 255 58 c 244 64 386 92 552 110 c 100 11 103 10 155 -16 c 32 -15 91 -63 148 -119 c 139 -136 234 -211 323 -255 c 43 -22 73 -42 66 -44 c -8 -3 -185 -28 -394 -56 c -209 -28 -390 -56 -403 -61 c -18 -7 -23 -16 -20 -37 c 2 -22 9 -28 34 -30 c 17 -2 292 33 610 76 c 318 44 651 87 739 96 c 113 12 229 33 393 71 c 239 57 271 62 288 45 c 5 -5 24 -6 47 -1 c 20 5 37 8 37 6 c 0 -2 -53 -45 -117 -97 c -720 -576 -896 -648 -1663 -688 c -124 -7 -236 -15 -250 -19 c -20 -6 -25 -14 -25 -42 c 0 -32 2 -34 39 -37 c 50 -4 549 34 696 54 c 63 8 147 22 185 31 c 156 35 376 136 547 251 l 104 69 l 95 -62 c 162 -107 230 -190 408 -499 c 137 -237 137 -234 0 -101 c -142 138 -197 176 -312 216 c -83 29 -123 35 -143 21 c -13 -8 28 -198 46 -216 c 6 -6 10 -21 10 -36 c 0 -31 60 -149 103 -204 c 18 -22 67 -79 109 -126 c 43 -47 78 -90 78 -97 c 0 -7 9 -17 21 -23 c 51 -28 3 -15 -121 31 c -151 56 -183 59 -188 16 c -3 -24 2 -30 40 -47 c 29 -12 76 -54 143 -126 c 239 -256 274 -335 261 -583 c -4 -69 -10 -129 -13 -135 c -4 -5 -21 37 -40 94 c -68 211 -132 310 -322 503 c -80 80 -123 117 -138 117 c -38 0 -49 -48 -57 -245 c -9 -209 3 -344 40 -473 c 24 -84 113 -305 188 -464 c 26 -57 32 -78 21 -78 c -26 0 -170 49 -203 70 c -38 24 -95 100 -102 138 c -4 22 -11 27 -35 27 c -29 0 -34 -7 -109 -155 c -92 -183 -180 -319 -266 -413 c -34 -37 -64 -66 -66 -64 c -2 1 26 149 62 327 c 102 508 116 610 118 845 c 1 192 0 204 -28 300 c -16 55 -36 135 -46 177 c -37 163 -108 222 -380 321 c -357 130 -490 186 -660 281 c -191 105 -225 115 -225 61 c 0 -28 10 -34 190 -133 c 318 -174 481 -294 647 -476 c 69 -76 72 -73 -37 -45 c -22 6 -62 14 -90 18 c -27 5 -64 14 -81 20 c -17 7 -35 11 -40 9 c -5 -1 -29 3 -54 10 c -25 6 -117 27 -206 47 c -492 107 -656 206 -1035 621 c -80 87 -139 144 -150 144 c -11 0 -95 -47 -187 -103 c -220 -137 -366 -217 -482 -268 c -102 -44 -1071 -372 -1078 -364 c -7 7 85 220 141 329 c 121 232 264 328 808 541 c 380 149 354 136 354 170 c 0 25 -5 31 -25 33 c -23 3 -373 -129 -605 -228 c -355 -151 -499 -269 -620 -510 c -51 -100 -145 -328 -145 -350 c 0 -22 25 -70 41 -80 c 6 -4 131 32 278 81 c 146 49 270 88 275 86 c 5 -2 33 -131 61 -288 c 75 -404 111 -551 186 -767 c 86 -242 296 -728 340 -783 c 16 -20 29 -49 29 -64 c 0 -14 5 -35 11 -47 c 6 -11 8 -22 6 -24 c -9 -9 -201 152 -277 232 c -93 97 -179 218 -348 484 c -119 189 -132 205 -158 205 c -27 0 -29 -3 -32 -45 c -2 -40 11 -74 114 -290 c 64 -135 117 -251 117 -257 c 0 -7 4 -13 9 -13 c 5 0 6 -5 3 -10 c -3 -5 -2 -10 3 -10 c 11 0 65 -120 58 -128 c -15 -14 -184 149 -251 243 c -77 107 -205 403 -284 656 c -11 35 -35 111 -53 169 c -37 117 -56 135 -81 78 c -9 -18 -37 -139 -62 -268 c -41 -202 -46 -246 -41 -310 c 3 -41 9 -124 12 -185 l 7 -110 l -35 45 c -64 83 -120 181 -140 243 c -17 54 -19 86 -16 237 c 1 96 -1 181 -5 188 c -5 6 -19 12 -32 12 c -19 0 -37 -20 -90 -100 c -36 -55 -72 -100 -79 -100 c -8 0 -23 -16 -35 -35 c -15 -27 -40 -45 -103 -75 c -48 -23 -86 -36 -91 -31 c -11 11 0 31 17 31 c 13 0 51 74 82 161 c 42 118 188 823 182 878 c -4 37 -49 42 -72 7 c -9 -15 -22 -26 -29 -26 c -8 0 -55 -23 -106 -51 c -50 -29 -94 -50 -96 -47 c -3 2 15 31 39 64 c 53 71 185 326 211 409 c 26 80 20 149 -13 153 c -16 3 -117 -56 -338 -197 c -339 -216 -330 -213 -177 -43 c 40 45 152 188 250 319 l 177 238 l 167 354 c 92 194 165 359 162 366 c -9 25 -52 46 -71 36 c -10 -5 -49 -61 -87 -123 c -178 -292 -275 -424 -363 -493 c -54 -42 -166 -92 -252 -110 c -33 -7 -30 -3 64 96 c 116 123 218 256 392 514 c 70 105 133 195 139 201 c 6 6 34 47 63 92 c 62 94 66 125 15 130 c -32 3 -35 0 -143 -165 c -66 -101 -110 -160 -110 -147 c 0 30 30 82 179 312 c 72 112 131 209 131 216 c 0 7 11 23 25 36 c 13 12 22 26 20 30 c -3 4 2 14 11 21 c 9 7 79 108 157 223 c 279 415 527 726 1027 1286 c 56 63 161 186 232 273 c 100 120 136 157 154 157 c 13 0 27 -7 32 -16 Z m -44 -444 c 66 -406 71 -448 70 -700 c 0 -219 -2 -248 -33 -428 c -18 -106 -43 -223 -55 -260 c -20 -60 -26 -67 -51 -70 c -15 -2 -44 0 -64 4 l -36 8 l 35 5 c 32 5 38 13 71 77 c 43 87 74 216 61 259 c -14 49 -41 44 -147 -31 c -53 -36 -120 -75 -148 -86 l -52 -19 l 57 51 c 60 53 158 199 158 234 c 0 27 -29 56 -55 56 c -20 0 -124 -29 -173 -47 c -8 -4 16 25 55 63 c 53 52 79 88 107 147 c 21 46 36 90 34 105 c -3 23 -9 28 -48 35 c -40 8 -60 4 -172 -36 c -71 -25 -128 -44 -128 -41 c 0 9 137 277 272 534 c 171 323 201 377 204 364 c 2 -5 19 -106 38 -224 Z m 3486 -462 c 0 -13 -7 -97 -15 -188 c -8 -91 -19 -219 -25 -285 c -5 -66 -13 -129 -16 -140 c -3 -11 -7 -40 -10 -65 c -26 -238 -74 -389 -225 -712 l -64 -138 l -133 0 l -133 0 l 28 40 c 15 22 34 40 42 40 c 8 0 12 3 8 6 c -3 4 2 14 12 23 c 25 23 86 165 101 233 c 6 32 19 63 29 70 c 22 16 51 89 51 127 c 0 16 11 53 24 82 c 14 30 29 90 35 134 c 24 178 33 221 50 240 c 21 24 41 108 41 175 c 0 127 -66 87 -416 -252 c -187 -180 -253 -238 -364 -320 c -82 -60 -236 -158 -316 -202 l -51 -28 l -42 21 l -41 21 l -20 -20 c -30 -30 -14 -51 85 -107 l 84 -48 l -62 -17 c -102 -29 -160 -24 -252 21 l -80 38 l 58 26 c 47 22 57 30 57 51 c 0 31 -15 40 -57 38 c -18 -2 -93 9 -166 23 c -199 38 -192 34 -109 56 c 146 37 216 86 407 280 c 206 210 382 315 935 557 c 151 67 334 148 405 181 c 72 32 133 60 138 60 c 4 1 7 -9 7 -21 Z m -3761 -250 c -37 -74 -68 -106 -185 -195 c -119 -89 -131 -108 -97 -145 c 9 -10 27 -18 41 -18 c 19 0 154 38 270 75 c 19 7 -62 -109 -99 -139 c -18 -15 -86 -54 -151 -87 c -99 -50 -118 -63 -118 -82 c 0 -51 42 -58 193 -31 c 99 17 183 45 239 80 l 37 24 l -20 -34 c -37 -64 -97 -122 -152 -149 c -49 -24 -223 -65 -352 -83 c -27 -3 -58 -11 -67 -16 c -22 -11 -23 -41 -3 -72 l 16 -24 l -53 -6 c -29 -4 -70 -9 -90 -12 l -38 -6 l 36 99 c 89 246 168 449 224 578 c 34 77 64 147 67 157 c 3 11 57 35 161 71 c 87 30 158 55 160 56 c 1 0 -7 -18 -19 -41 Z m 3422 -406 c -65 -278 -120 -441 -219 -649 l -29 -62 l -53 54 l -53 54 l 59 63 c 62 67 154 218 154 254 c 0 41 -23 48 -99 29 c -55 -13 -89 -15 -158 -10 l -88 8 l 60 51 c 33 28 152 140 264 250 c 113 109 207 193 209 188 c 2 -6 -20 -109 -47 -230 Z m -288 -402 c -67 -105 -137 -159 -208 -160 c -37 0 -55 -16 -55 -46 c 0 -25 17 -34 69 -34 c 39 0 66 -14 119 -64 c 57 -52 58 -61 16 -118 l -38 -51 l -115 8 c -153 9 -259 28 -389 70 c -59 18 -118 35 -132 37 c -18 3 5 14 75 37 c 126 42 152 56 160 82 c 9 27 -16 54 -73 79 l -45 20 l 26 20 c 14 11 28 20 32 20 c 3 0 56 32 118 72 c 66 42 128 74 152 79 c 22 3 104 6 181 5 l 141 -1 l -34 -55 Z m -838 -394 c 130 -54 284 -103 401 -127 c 95 -19 139 -22 352 -22 c 134 1 241 -2 238 -5 c -9 -9 -238 -40 -387 -53 c -228 -19 -371 6 -507 89 c -62 37 -201 152 -185 152 c 5 0 44 -15 88 -34 Z m -3911 -2122 c -69 -345 -102 -467 -158 -592 c -25 -56 -46 -108 -46 -116 c 0 -7 10 -26 22 -41 c 19 -25 26 -27 72 -22 c 28 2 60 8 70 12 c 27 12 -114 -194 -164 -239 c -86 -78 -208 -118 -415 -135 c -70 -6 -130 -10 -131 -8 c -2 2 35 32 81 66 c 47 35 115 93 150 129 c 59 59 70 78 125 209 c 34 79 90 219 126 311 c 35 92 73 185 84 207 c 10 22 21 63 24 90 c 4 44 14 115 31 208 c 2 15 1 26 -4 23 c -15 -10 6 64 25 85 c 9 10 25 19 34 19 c 9 0 41 13 71 30 c 30 16 54 30 55 30 c 1 0 -23 -120 -52 -266 Z m 640 -519 c 15 -47 29 -96 32 -110 c 2 -13 13 -44 23 -68 l 19 -44 l -57 -104 c -100 -183 -93 -187 -88 61 c 4 197 20 350 36 350 c 4 0 19 -38 35 -85 Z m -401 -307 c 19 -60 75 -163 127 -233 c 22 -30 40 -58 40 -64 c 0 -5 -35 -24 -77 -41 c -103 -43 -383 -134 -390 -126 c -9 9 159 549 177 571 c 10 11 35 47 56 79 l 39 59 l 6 -99 c 4 -54 13 -120 22 -146 z")
                ans.Poly.push(polygonSolver("0,0 1683,2133 1883,2443 1962,2662 2030,2857 2485,3366 2526,3436 2496,3466 2066,3337 1998,3308 1988,3339 2266,3748 2509,4043 2598,4176 2556,4258 2038,3983 1848,3876 1921,4038 2127,4323 2206,4448 2103,4454 2059,4428 2093,4718 2249,5138 2306,5258 2364,5368 2606,5597 2718,5719 2690,5769 2337,5748 2071,5676 1910,5543 1893,5528 1996,5903 1966,5936 1465,5778 1376,5739 1341,5759 1284,5776 1258,5713 1211,5598 1132,5473 1091,5399 1002,5547 897,5724 848,5797 715,5920 468,6106 435,6050 476,5888 526,5778 424,5885 188,6100 11,6208 -38,6181 113,5798 493,4781 523,4646 558,4453 598,4208 607,4163 620,4110 623,4066 407,3989 77,3856 -412,3576 -503,3530 -723,3727 -1374,4194 -1932,4327 -2135,4367 -2420,4372 -2320,4201 -2282,4144 -2252,4103 -2226,4070 -2405,4161 -2411,4164 -2522,4255 -2618,4568 -2651,4712 -2587,5308 -2461,6044 -2480,6106 -2801,5813 -2977,5470 -3062,5522 -3178,5614 -3422,5633 -3353,5457 -3136,4587 -3136,4432 -3228,4499 -3581,5164 -3660,5280 -3718,5007 -3514,4325 -3474,4273 -3568,4302 -3890,4404 -3898,4345 -3757,4243 -3334,3859 -3232,3587 -3405,3651 -3667,3907 -3804,4040 -3853,4027 -3852,3947 -3678,3518 -3592,3378 -3248,3030 -3202,2963 -3226,2948 -3591,2689 -3780,2510 -3593,2489 -3444,2515 -3468,2483 -3480,2400 -3372,2444 -3301,2500 -3331,2441 -3522,1868 -3623,918 -3626,853 -3586,854 -3068,1067 -2812,1176 -2363,1409 -2107,1578 -1687,1948 -1753,1860 -1900,1523 -1834,1502 -1172,1687 -830,1784 -593,1897 -424,2004 -281,2098 -251,2082 -233,2052 -317,1628 -338,923 -151,-50 -104,-72 0,0",x,y))
                ans.Data.push({scalX:0.9, scalY:0.95, tranX:7000, tranY:-1400, rotat:180})
                //Part 2
                ans.Line.push(false)
                ans.Poly.push(polygonSolver("0,0 171,253 309,513 649,1218 909,1912 894,1933 792,1933 469,1868 294,1828 194,1808 -32,1796 -99,1715 -205,1353 -231,1195 -205,493 -108,-120 0,0",x,y))
                ans.Data.push({scalX:0.9, scalY:0.95, tranX:7030, tranY:-1150, rotat:180})
                //Part 3
                ans.Line.push(false)
                ans.Poly.push(polygonSolver("0,0 334,299 694,616 1010,818 1061,846 1103,825 1144,804 1164,824 1079,931 995,979 1057,996 1261,999 1301,984 1281,1059 1258,1089 783,1262 558,1289 437,1296 388,1259 309,1178 265,1134 257,1128 245,1105 144,872 115,802 64,675 40,593 5,459 -45,219 -74,-14 0,0",x,y))
                ans.Data.push({scalX:0.9, scalY:0.95, tranX:3750, tranY:-100, rotat:180})
                //Part 4
                ans.Line.push(false)
                ans.Poly.push(polygonSolver("0,0 125,36 174,39 219,50 272,164 533,819 496,1066 173,1001 -2,961 -177,907 -221,850 -236,815 -257,807 -328,730 -389,471 -242,502 -94,588 -42,607 -99,556 -257,320 -200,266 -29,313 -84,250 -191,104 -218,-28 -165,-39 0,0",x,y))
                ans.Data.push({scalX:0.9, scalY:0.95, tranX:7330, tranY:-250, rotat:180})
                //Part 5
                ans.Line.push(false)
                ans.Poly.push(polygonSolver("0,0 110,11 204,16 259,15 325,1 420,34 711,218 762,246 804,225 845,204 865,224 780,331 696,379 758,396 962,399 1002,384 982,459 959,489 484,662 259,689 138,696 89,659 10,578 -33,534 -40,524 -47,514 24,430 108,345 49,282 -105,28 -66,-15 0,0",x,y))
                ans.Data.push({scalX:0.9, scalY:0.95, tranX:4100, tranY:550, rotat:180})
            }    
            //Reture Object Answer data
            return ans
        }
        
        //All the HairFront_###
        function data_HairFront(x,y,v){
            //Object Answer
            var ans =  Standard_Process_Answer()
            //No Hair Front js
                if(v == 000){
               //do nonthing
            }
            //HairFront_001 js
                else if(v == 001){
                //HairFront_001 js
                ans.Line.push("M"+x+" "+y+" c-119 -19 -258 -61 -369 -111 -35 -16 -69 -29 -75 -29 -6 0 -23 -7 -38 -14 -26 -14 -33 -12 -112 25 -46 21 -91 39 -99 39 -8 0 -17 6 -19 13 -3 8 -40 14 -114 18 -120 6 -306 0 -300 -10 2 -3 -14 -7 -36 -9 -54 -4 -92 -24 -161 -88 -32 -30 -85 -72 -117 -94 -32 -22 -71 -55 -87 -75 -15 -19 -74 -126 -130 -237 -85 -169 -109 -227 -143 -348 -22 -80 -56 -176 -75 -215 -22 -44 -31 -73 -25 -80 9 -11 -8 -79 -50 -200 -10 -27 -26 -75 -36 -105 -32 -101 -164 -403 -231 -530 -218 -413 -235 -455 -268 -667 -14 -97 -14 -106 6 -209 22 -116 50 -183 107 -254 33 -40 162 -171 162 -164 0 7 89 -44 123 -70 56 -43 186 -96 235 -96 23 0 42 -4 42 -8 0 -12 117 -45 131 -37 6 4 14 3 18 -3 4 -7 27 -13 51 -15 25 -2 52 -7 60 -10 22 -9 131 -30 165 -31 17 -1 65 -10 107 -19 99 -22 327 -38 351 -26 28 15 20 28 -30 50 -243 109 -303 154 -394 291 -101 153 -155 333 -165 548 -11 216 61 645 178 1055 17 61 34 114 38 118 5 5 22 -38 40 -95 61 -198 139 -335 266 -468 61 -63 75 -85 89 -135 56 -203 133 -387 223 -540 79 -135 118 -185 145 -185 17 -1 35 -21 76 -86 52 -81 167 -204 190 -204 22 0 23 30 1 87 -29 77 -50 173 -59 260 -8 88 -3 86 79 -39 90 -138 170 -334 170 -423 0 -50 11 -75 32 -75 28 0 92 140 124 270 14 58 27 107 29 108 2 2 10 -18 18 -46 20 -66 43 -108 63 -116 9 -4 19 -5 21 -2 2 2 11 62 19 132 20 168 14 351 -16 454 -39 135 -149 341 -252 472 -32 41 -32 39 19 106 82 108 195 339 233 474 21 75 39 115 40 86 0 -29 125 -262 172 -324 61 -79 189 -201 263 -251 95 -64 216 -121 358 -168 168 -56 206 -72 214 -91 3 -10 8 -12 12 -5 8 12 87 -13 112 -35 8 -8 21 -14 28 -14 7 0 33 -12 59 -26 113 -64 189 -110 218 -131 17 -13 34 -20 37 -17 9 9 50 -19 127 -86 88 -76 150 -123 150 -114 0 4 10 -2 23 -13 12 -11 52 -41 90 -67 42 -29 80 -67 101 -99 19 -29 52 -71 73 -93 54 -59 73 -83 73 -92 0 -5 15 -26 33 -48 54 -64 75 -98 97 -157 24 -65 32 -72 59 -57 18 9 20 22 21 127 0 65 2 145 3 178 1 33 -3 74 -9 90 -6 17 -11 55 -12 85 -1 110 -119 363 -252 542 -42 57 -130 161 -196 231 -310 333 -405 447 -553 667 -174 258 -243 386 -377 699 -128 297 -225 447 -391 601 -141 130 -287 205 -460 235 -108 19 -178 18 -323 -5z m397 -75 c128 -46 236 -112 339 -208 154 -144 252 -296 369 -572 207 -489 465 -879 855 -1290 158 -167 269 -299 337 -400 50 -76 151 -273 159 -311 1 -7 11 -43 23 -80 26 -88 41 -192 41 -291 l0 -78 -20 30 c-11 17 -43 65 -70 107 -238 363 -779 729 -1367 923 -228 76 -366 158 -503 301 -123 128 -204 266 -265 453 -26 79 -27 90 -20 200 7 130 -4 266 -37 440 -18 94 -25 114 -42 121 -14 5 -26 3 -35 -6 -13 -11 -12 -29 7 -126 57 -299 51 -516 -18 -764 -40 -143 -146 -354 -234 -468 l-30 -39 -23 29 c-106 131 -223 335 -268 467 -49 148 -86 431 -105 811 -6 115 -13 213 -16 217 -9 15 -52 10 -58 -7 -4 -9 -2 -105 4 -213 22 -427 55 -678 110 -842 50 -147 177 -358 316 -524 37 -43 92 -118 123 -165 31 -47 58 -87 61 -90 3 -3 27 -50 53 -106 68 -147 97 -264 97 -396 0 -60 -4 -110 -10 -113 -5 -3 -10 1 -10 9 0 8 -16 66 -36 128 -69 217 -195 438 -249 438 -46 0 -39 -33 24 -121 33 -46 59 -86 58 -89 0 -3 15 -38 35 -78 21 -39 35 -72 32 -72 -2 0 3 -17 12 -38 26 -62 6 -251 -43 -410 l-17 -52 -21 72 c-41 136 -140 318 -239 438 -96 116 -115 137 -171 199 -33 36 -121 129 -195 207 -340 355 -407 436 -474 577 -86 178 -115 302 -123 522 -6 166 10 343 43 485 9 36 17 74 20 85 2 11 6 32 9 47 5 20 1 29 -15 38 -39 21 -47 4 -80 -150 -33 -161 -50 -320 -50 -476 0 -115 -4 -151 -20 -200 -77 -222 -174 -629 -210 -874 -25 -175 -40 -330 -36 -361 3 -13 7 -60 11 -104 7 -92 40 -247 61 -289 7 -16 14 -34 14 -39 0 -19 53 -122 93 -181 56 -83 122 -150 191 -197 l58 -39 -48 6 c-75 10 -212 52 -284 87 -45 21 -90 56 -146 112 -77 75 -83 85 -110 165 -24 75 -28 100 -28 220 -1 74 3 165 7 201 7 57 6 67 -8 73 -33 12 -53 -11 -62 -71 -10 -71 -11 -307 -1 -348 12 -50 20 -79 26 -95 3 -8 6 -17 7 -20 12 -34 43 -94 67 -130 19 -27 23 -39 12 -30 -28 22 -36 31 -74 80 -19 25 -37 47 -41 50 -11 10 -58 106 -78 163 -62 173 24 481 205 732 66 93 76 128 38 133 -25 4 -65 -42 -137 -153 -169 -265 -233 -563 -172 -806 17 -67 35 -102 94 -184 32 -45 32 -47 10 -40 -49 14 -170 75 -231 116 -75 51 -177 146 -224 210 -42 57 -92 157 -98 195 -23 144 -13 245 39 401 37 111 82 205 187 392 192 339 339 708 443 1116 56 219 84 303 142 420 110 222 270 375 473 453 56 21 82 25 180 25 144 0 249 -25 377 -89 l91 -47 30 21 c56 40 208 110 297 137 133 40 216 53 352 54 115 1 128 -1 220 -34z m-1073 -2525 c13 -63 27 -128 30 -145 6 -28 6 -28 -5 -7 -7 12 -16 22 -21 22 -4 0 -8 7 -8 16 0 9 -11 37 -24 63 -29 57 -86 192 -91 217 -2 6 -6 22 -10 35 -5 18 6 11 49 -31 l57 -56 23 -114z m240 -167 c22 -27 28 -45 32 -100 4 -61 15 -145 31 -227 6 -34 -9 -28 -30 12 -48 90 -82 148 -91 154 -6 4 -7 8 -2 8 5 0 3 7 -5 16 -20 24 -89 221 -103 292 -5 32 -2 30 68 -45 40 -43 85 -93 100 -110z")
                ans.Poly.push(polygonSolver("0,0 369,111 444,140 482,154 594,129 693,90 712,77 826,59 1126,69 1162,78 1323,166 1440,260 1527,335 1657,572 1800,920 1875,1135 1900,1215 1950,1415 1986,1520 2217,2050 2485,2717 2479,2926 2372,3180 2210,3344 2087,3414 1852,3510 1810,3518 1679,3555 1661,3558 1610,3573 1550,3583 1385,3614 1278,3633 927,3659 957,3609 1351,3318 1516,2770 1338,1715 1300,1597 1260,1692 994,2160 905,2295 682,2835 537,3020 461,3106 271,3310 270,3223 329,2963 250,3002 80,3425 48,3500 -76,3230 -105,3122 -123,3168 -186,3284 -207,3286 -226,3154 -210,2700 42,2228 23,2122 -210,1648 -250,1562 -422,1886 -685,2137 -1043,2305 -1257,2396 -1269,2401 -1381,2436 -1409,2450 -1468,2476 -1686,2607 -1723,2624 -1850,2710 -2000,2824 -2023,2837 -2113,2904 -2214,3003 -2287,3096 -2360,3188 -2393,3236 -2490,3393 -2549,3450 -2570,3323 -2573,3145 -2564,3055 -2552,2970 -2300,2428 -2104,2197 -1551,1530 -1174,831 -783,230 -323,-5 0,0",x,y))
                ans.Data.push({scalX:-0.95, scalY:0.95, tranX:200, tranY:0, rotat:180})
            }
            //HairFront_002 js
                else if(v == 002){
                //HairFront_002 js
                ans.Line.push("M"+x+" "+y+" c-597 -66 -1149 -289 -1602 -647 -118 -92 -334 -306 -428 -422 -287 -354 -481 -805 -535 -1242 -26 -205 -17 -1034 15 -1429 42 -517 101 -765 383 -1635 191 -588 216 -645 218 -488 1 115 12 191 27 196 6 2 65 -47 130 -110 109 -105 270 -228 300 -228 16 0 50 -20 74 -43 20 -19 51 -11 61 16 2 7 -29 98 -69 202 -165 422 -202 549 -239 818 -14 106 -33 206 -42 224 -14 29 -14 36 5 97 23 73 62 166 98 237 13 26 24 54 24 64 0 9 8 29 19 43 21 30 141 280 141 294 0 5 25 73 56 151 221 555 305 956 440 2092 20 176 40 324 44 328 4 4 33 -29 66 -74 336 -464 430 -583 575 -728 408 -408 820 -553 2199 -775 124 -20 233 -41 242 -46 10 -6 33 -10 51 -10 18 0 59 -7 90 -15 32 -8 68 -15 80 -15 13 0 33 -7 45 -16 29 -20 29 -25 -8 -540 -97 -1355 -134 -1560 -379 -2124 -40 -91 -81 -175 -92 -187 -28 -29 -22 -67 11 -71 21 -2 41 13 106 80 44 46 103 110 132 142 29 33 52 57 52 52 0 -4 -9 -29 -21 -56 -29 -67 -23 -85 26 -84 33 1 45 9 87 55 27 30 80 103 118 163 l70 110 0 -55 c0 -31 7 -125 15 -210 35 -372 79 -482 315 -797 140 -186 166 -214 200 -210 40 5 36 38 -25 238 -96 317 -135 582 -135 920 0 246 14 385 64 645 19 99 38 209 41 245 4 36 20 110 35 165 66 229 122 461 144 596 62 365 96 1155 69 1564 -21 309 -33 417 -53 460 -11 22 -31 82 -45 132 -15 51 -37 121 -51 155 -13 34 -24 76 -24 93 0 51 -285 509 -424 681 -79 99 -149 164 -333 311 -203 163 -370 270 -598 384 -288 142 -571 232 -884 279 -75 11 -155 25 -179 30 -60 14 -564 10 -702 -5z m833 -113 c622 -111 672 -129 1141 -414 341 -208 547 -376 698 -572 66 -85 238 -350 238 -365 0 -5 6 -16 13 -23 23 -23 91 -141 115 -198 31 -74 129 -376 136 -420 11 -64 36 -402 46 -619 15 -334 -3 -577 -95 -1285 -32 -241 -50 -351 -64 -380 -22 -47 -42 -135 -105 -472 -35 -185 -49 -291 -61 -460 -8 -120 -20 -280 -27 -354 -18 -193 -15 -425 6 -535 9 -49 37 -162 61 -251 25 -89 45 -165 45 -170 0 -15 -137 177 -175 245 -62 113 -136 345 -150 477 -16 145 30 435 150 954 35 152 101 483 134 680 54 310 72 599 65 998 -10 550 -64 843 -231 1252 -31 74 -64 160 -75 190 -10 30 -32 72 -49 92 -16 21 -53 88 -83 150 -137 290 -235 409 -601 726 -82 71 -163 144 -179 161 -17 17 -35 31 -40 31 -6 0 -38 23 -71 51 -69 57 -108 63 -113 18 -3 -23 25 -49 235 -225 282 -234 487 -436 562 -549 29 -44 94 -165 146 -270 76 -156 106 -231 164 -415 120 -383 160 -565 228 -1055 33 -244 37 -535 9 -750 -61 -473 -123 -812 -216 -1185 -52 -209 -92 -326 -149 -445 -94 -194 -111 -184 -43 27 109 336 123 448 128 1048 3 312 9 482 16 497 12 24 1 224 -11 204 -4 -6 -9 59 -10 146 -1 113 -5 163 -15 178 -8 11 -26 86 -41 165 -15 80 -33 159 -40 175 -7 17 -20 55 -30 85 -24 76 -136 298 -199 395 -61 93 -176 238 -302 381 -453 512 -436 495 -463 492 -19 -2 -27 -9 -29 -28 -2 -20 25 -56 125 -170 345 -393 486 -564 595 -725 93 -137 127 -197 172 -307 44 -106 45 -118 8 -118 -35 0 -536 92 -927 171 -1215 244 -1532 428 -2126 1231 -68 92 -148 206 -177 252 -114 182 -165 225 -277 233 -81 6 -117 -8 -113 -45 3 -26 5 -27 78 -33 83 -6 102 -13 144 -58 28 -29 29 -33 27 -128 -2 -112 -54 -564 -76 -665 -8 -37 -15 -84 -15 -105 0 -22 -4 -43 -9 -49 -5 -5 -28 -124 -50 -264 -133 -822 -251 -1249 -483 -1744 -159 -339 -219 -484 -290 -701 l-39 -120 6 155 c6 180 39 568 60 720 33 241 206 971 316 1336 58 191 59 218 12 222 -35 3 -45 -9 -58 -68 -4 -19 -11 -37 -15 -40 -3 -3 -28 -88 -54 -190 -26 -102 -70 -261 -96 -355 -27 -93 -67 -240 -89 -325 -28 -108 -41 -147 -45 -130 -3 14 -22 138 -42 275 -20 138 -39 255 -44 260 -4 6 -8 37 -9 70 -1 33 -12 143 -26 245 -53 410 -54 545 -4 642 28 54 23 92 -14 96 -25 3 -30 -2 -57 -60 -78 -167 -71 -250 142 -1718 9 -64 7 -104 -11 -250 -32 -267 -41 -425 -48 -930 l-7 -465 -58 180 c-32 99 -93 288 -134 420 -41 132 -98 309 -125 394 -53 165 -119 491 -118 584 0 28 -6 126 -15 217 -39 423 -44 831 -15 1349 16 298 40 402 154 687 53 131 97 220 161 325 261 431 337 520 609 724 185 140 323 227 485 310 297 151 542 231 870 286 259 43 315 47 575 44 220 -2 240 -4 458 -43z m1714 -4297 c-5 -524 -11 -610 -62 -820 -53 -225 -77 -279 -181 -418 -89 -119 -117 -148 -130 -134 -3 3 19 63 49 134 184 431 231 709 292 1713 8 135 16 252 16 260 1 8 6 -43 11 -115 5 -71 7 -350 5 -620z m-4302 -545 c13 -118 54 -348 80 -446 32 -121 101 -306 192 -511 11 -26 -26 -11 -98 38 -100 69 -186 154 -275 272 l-74 98 0 67 c0 55 13 111 71 302 39 129 74 243 77 254 8 29 19 0 27 -74z")
                ans.Poly.push(polygonSolver("0,0 1602,647 2030,1069 2565,2311 2550,3740 2167,5375 1949,5863 1922,5667 1792,5777 1492,6005 1418,6048 1357,6032 1426,5830 1665,5012 1707,4788 1702,4691 1604,4454 1580,4390 1561,4347 1420,4053 1364,3902 924,1810 880,1482 814,1556 490,1940 -239,2584 -1960,3059 -2202,3105 -2253,3115 -2343,3130 -2423,3145 -2520,3161 -2460,3701 -2450,4801 -2081,5825 -1989,6012 -2000,6083 -2106,6003 -2238,5861 -2290,5809 -2269,5865 -2295,5949 -2382,5894 -2500,5731 -2570,5621 -2570,5676 -2585,5886 -2900,6683 -3100,6893 -3075,6655 -2940,5735 -3004,5090 -3045,4845 -3080,4680 -3224,4084 -3293,2520 -3240,2060 -3195,1928 -3144,1773 -3120,1680 -2696,999 -2363,688 -1765,304 -881,25 -702,-5 0,0",x,y))
                ans.Data.push({scalX:-0.65, scalY:0.6, tranX:-200, tranY:600, rotat:180})
            }
            //HairFront_003 js
                else if(v == 003){
                //HairFront_003 js
                ans.Line.push("M"+x+" "+y+" c-486 -61 -944 -290 -1310 -654 -281 -280 -500 -625 -559 -880 -37 -161 -44 -208 -76 -555 -32 -344 -39 -644 -19 -846 15 -156 93 -618 140 -829 70 -319 112 -431 220 -582 130 -184 282 -353 452 -502 223 -196 230 -202 257 -199 40 5 40 50 0 80 -39 28 -116 177 -153 294 -43 135 -106 440 -127 614 -62 501 -33 715 214 1632 47 175 86 332 86 351 0 18 9 82 20 142 18 101 49 323 51 363 0 19 -1 23 50 -98 66 -158 196 -363 443 -699 289 -394 290 -394 340 -375 24 9 20 28 -34 176 -43 120 -67 209 -141 528 -11 47 -24 121 -29 165 -5 44 -18 129 -30 189 -11 61 -20 114 -20 119 0 5 53 -41 118 -101 64 -61 164 -150 222 -198 58 -48 127 -107 153 -130 50 -45 420 -286 627 -409 164 -97 568 -302 613 -310 23 -5 43 -3 49 3 6 6 26 73 45 149 26 104 36 170 41 267 l7 128 34 -48 c19 -27 50 -65 70 -85 20 -19 56 -58 81 -85 46 -50 167 -151 208 -173 30 -16 29 -29 -18 -358 -76 -526 -107 -651 -194 -778 -83 -120 -100 -154 -85 -171 16 -19 49 -18 104 6 69 30 79 27 71 -17 -4 -21 -18 -78 -31 -128 -13 -49 -28 -118 -34 -152 -22 -119 -120 -397 -246 -696 -15 -36 -15 -38 2 -28 41 22 220 190 304 284 173 195 302 388 423 637 92 190 128 293 161 470 36 195 40 274 25 473 -9 122 -10 171 -2 179 28 28 314 -153 485 -307 53 -49 66 -56 97 -53 54 5 52 35 -8 121 -103 149 -468 808 -536 967 -27 63 -55 152 -70 225 -46 216 -211 634 -311 787 -414 631 -1004 1015 -1685 1098 -100 12 -395 11 -495 -1z m584 -104 c395 -61 504 -105 903 -368 101 -66 170 -118 175 -131 4 -12 46 -56 93 -97 219 -192 315 -318 421 -552 28 -62 59 -121 70 -133 10 -11 19 -27 19 -36 0 -8 11 -40 24 -69 57 -131 97 -255 116 -365 11 -65 30 -153 41 -194 23 -86 100 -251 132 -283 12 -12 38 -53 58 -92 20 -38 97 -178 172 -310 74 -132 134 -241 132 -243 -2 -2 -33 19 -69 47 -122 93 -189 128 -416 215 -112 43 -162 70 -295 158 -128 84 -179 125 -255 204 -93 97 -170 186 -170 197 0 3 -16 29 -36 58 -74 111 -204 371 -204 410 0 49 -132 321 -219 450 -115 172 -365 469 -394 469 -26 0 -40 -18 -34 -42 4 -14 70 -101 148 -194 154 -183 252 -323 314 -449 22 -44 42 -82 45 -85 3 -3 11 -23 19 -45 7 -22 32 -80 53 -130 22 -49 47 -110 55 -135 9 -25 22 -60 30 -79 8 -19 25 -81 39 -138 23 -98 24 -112 14 -229 -8 -101 -51 -318 -65 -332 -5 -6 -369 181 -510 261 -147 84 -579 355 -611 383 -22 20 -255 215 -390 326 -117 97 -202 192 -236 263 -38 83 -55 177 -69 391 -6 98 -15 187 -20 197 -13 23 -31 22 -48 -5 -16 -26 -16 -89 3 -268 15 -137 27 -214 90 -580 19 -113 35 -216 34 -230 0 -14 28 -148 61 -299 34 -150 60 -275 59 -276 -2 -2 -82 110 -178 248 -96 138 -187 265 -201 282 -38 43 -145 234 -180 318 -55 133 -106 350 -155 662 -18 119 -34 153 -54 116 -9 -17 -3 -75 25 -279 22 -151 35 -273 31 -297 -59 -414 -131 -778 -215 -1090 -171 -638 -221 -894 -221 -1130 0 -159 19 -449 37 -555 17 -108 115 -501 137 -554 8 -20 13 -36 10 -36 -2 0 -56 47 -118 105 -129 118 -234 244 -328 390 -108 167 -106 163 -198 560 -55 240 -124 634 -141 810 -27 273 27 1086 87 1333 20 78 97 264 155 372 162 299 396 534 815 816 114 76 263 157 281 152 4 -1 28 8 53 20 73 34 280 87 515 130 28 5 128 10 224 11 141 1 206 -4 340 -24z m1661 -2591 c19 -10 47 -29 62 -41 15 -11 49 -28 76 -37 l49 -17 7 -62 c14 -135 18 -389 7 -512 -9 -112 -17 -149 -55 -262 -118 -343 -324 -695 -544 -928 -26 -28 -57 -64 -68 -80 -12 -17 -25 -27 -29 -23 -5 5 -1 16 8 26 10 10 17 23 17 28 0 6 11 32 24 60 12 27 36 90 51 139 15 50 40 131 56 180 88 283 125 447 106 481 -7 12 -6 55 3 133 20 185 77 611 107 798 l27 172 30 -18 c17 -10 47 -27 66 -37z")
                ans.Poly.push(polygonSolver("0,0 1310,654 1869,1534 1945,2089 1964,2935 1824,3764 1604,4346 1152,4848 895,5047 895,4967 1048,4673 1275,3559 961,2427 875,2076 855,1934 804,1571 754,1669 311,2368 -29,2743 5,2567 146,2039 175,1874 205,1685 225,1566 107,1667 -115,1865 -268,1995 -895,2404 -1508,2714 -1557,2711 -1602,2562 -1643,2295 -1650,2167 -1684,2215 -1754,2300 -1835,2385 -2043,2558 -2025,2916 -1831,3694 -1746,3865 -1850,3859 -1921,3876 -1890,4004 -1856,4156 -1610,4852 -1612,4880 -1916,4596 -2339,3959 -2500,3489 -2525,3016 -2523,2837 -3008,3144 -3105,3197 -3097,3076 -2561,2109 -2491,1884 -2180,1097 -1495,380 -795,70 0,0",x,y))
                ans.Data.push({scalX:-0.85, scalY:0.8, tranX:400, tranY:300, rotat:180})
            }
            //HairFront_004 js
                else if(v == 004){
                //HairFront_004 js
                ans.Line.push("M"+x+" "+y+" c-568 -100 -1053 -492 -1338 -1081 -159 -327 -231 -653 -231 -1039 0 -285 32 -492 116 -756 102 -319 306 -657 525 -870 105 -101 137 -123 151 -103 6 9 8 100 5 237 -2 122 -3 222 -1 222 3 0 49 -22 104 -50 55 -27 111 -50 125 -50 43 0 42 27 -2 73 -50 51 -103 130 -176 262 -43 78 -58 115 -66 170 -26 177 -23 1160 4 1228 4 9 17 17 29 17 28 0 458 120 616 171 243 80 339 137 473 280 48 50 87 96 87 100 0 5 5 9 11 9 8 0 10 -73 6 -257 -4 -212 -9 -273 -25 -343 -44 -185 -108 -361 -271 -743 -56 -132 -101 -249 -99 -260 2 -17 11 -23 39 -25 36 -3 39 0 185 173 180 213 268 330 354 468 36 58 66 104 68 102 5 -5 -38 -558 -58 -730 -27 -240 -58 -396 -155 -784 -47 -187 -85 -353 -85 -370 0 -21 7 -34 21 -42 19 -10 34 2 163 133 78 78 175 179 215 223 69 76 72 78 64 45 -13 -54 -8 -282 7 -309 12 -23 20 -15 252 220 203 207 311 331 400 459 17 24 17 23 2 -15 -24 -59 -115 -238 -171 -335 -87 -151 -123 -237 -123 -292 0 -49 1 -50 25 -44 42 11 213 136 303 221 135 129 222 258 330 492 94 203 154 354 163 408 4 28 19 104 33 170 35 169 46 286 46 500 0 280 -24 455 -96 692 -159 525 -479 953 -905 1211 -170 102 -375 178 -576 212 -153 26 -394 26 -544 0z m474 -51 c197 -40 411 -113 542 -185 243 -133 339 -215 576 -487 135 -156 138 -162 208 -313 39 -85 71 -162 71 -171 0 -8 23 -86 51 -172 85 -262 100 -336 106 -511 6 -172 -8 -345 -58 -694 -16 -115 -29 -221 -29 -237 0 -16 -27 -93 -61 -171 -169 -398 -254 -526 -495 -743 -48 -44 -85 -75 -82 -70 3 6 45 80 93 165 128 223 205 391 273 590 l59 175 18 290 c21 340 17 688 -9 825 -32 171 -179 719 -207 773 -6 9 -21 17 -34 17 -23 0 -25 -4 -25 -45 0 -26 24 -128 55 -233 74 -255 122 -453 140 -583 26 -185 19 -583 -16 -938 l-12 -114 -130 -196 c-158 -239 -229 -328 -428 -540 l-154 -164 -3 63 c-2 46 5 91 27 171 17 60 31 120 31 132 0 12 29 78 64 147 35 69 93 197 129 285 60 145 70 178 101 350 58 318 61 356 59 662 -2 306 -5 326 -51 321 l-27 -3 -6 -355 c-6 -371 -7 -379 -65 -673 -47 -235 -218 -609 -363 -792 -47 -59 -314 -346 -318 -341 -2 2 26 120 61 262 70 278 113 485 126 598 4 39 15 130 24 201 18 154 56 652 56 745 0 71 39 266 101 510 10 41 29 140 40 220 19 128 21 172 15 370 -5 218 -34 532 -49 558 -12 18 -57 15 -64 -5 -4 -9 2 -103 13 -207 28 -279 26 -620 -4 -778 -47 -250 -114 -523 -137 -558 -12 -19 -57 -93 -99 -165 -42 -71 -105 -169 -139 -217 -68 -94 -228 -291 -233 -286 -2 2 34 93 80 203 99 238 154 399 192 561 24 104 28 144 32 324 2 113 -1 266 -6 340 -17 222 -43 463 -52 488 -12 27 -31 28 -55 2 -18 -19 -18 -27 -1 -193 9 -94 16 -183 16 -197 0 -33 -147 -210 -232 -281 -114 -94 -251 -149 -683 -270 -205 -57 -242 -65 -251 -53 -14 18 -7 51 10 51 23 0 177 64 280 116 101 51 225 137 481 335 130 101 146 116 143 140 -5 45 -41 41 -112 -14 -267 -209 -445 -336 -543 -386 -127 -65 -221 -103 -230 -94 -15 15 32 203 69 276 59 116 91 173 120 210 15 19 70 94 123 165 103 140 116 177 64 183 -22 3 -35 -9 -82 -70 -31 -40 -77 -97 -101 -126 -52 -61 -186 -294 -233 -405 -110 -260 -141 -564 -128 -1257 9 -513 10 -544 24 -843 7 -137 11 -251 8 -253 -4 -4 -143 346 -193 486 -142 399 -162 649 -93 1190 11 85 24 211 29 280 5 69 16 143 24 165 8 22 15 62 16 88 0 57 -19 71 -54 38 -18 -17 -25 -40 -35 -118 -7 -52 -26 -159 -42 -237 -51 -243 -71 -806 -35 -1006 34 -193 96 -393 208 -675 22 -55 49 -122 59 -150 l19 -50 -50 55 c-97 106 -270 378 -305 478 -15 42 -44 124 -65 182 -103 284 -114 359 -114 770 -1 529 15 600 224 1022 167 336 248 450 425 593 52 43 95 81 95 85 0 14 228 170 314 216 85 45 250 104 292 104 14 0 75 13 137 29 143 38 143 38 265 40 70 1 136 -6 205 -20z")
                ans.Poly.push(polygonSolver("0,0 600,290 1038,631 1338,1081 1569,2120 1453,2876 928,3746 777,3849 772,3612 773,3390 669,3440 544,3490 546,3417 722,3155 788,2985 784,1757 755,1740 139,1569 -334,1289 -421,1189 -432,1180 -438,1437 -413,1780 -142,2523 -43,2783 -82,2808 -267,2635 -621,2167 -689,2065 -631,2795 -476,3579 -391,3949 -412,3991 -575,3858 -790,3635 -854,3590 -861,3899 -1113,3679 -1513,3220 -1515,3235 -1344,3570 -1221,3862 -1246,3906 -1549,3685 -1879,3193 -2042,2785 -2075,2615 -2121,2115 -2025,1423 -1620,712 -1290,412 -890,112 -544,0 0,0",x,y))
                ans.Data.push({scalX:-1, scalY:0.9, tranX:700, tranY:300, rotat:180})
            }
            //HairFront_005 js
                else if(v == 005){
                //HairFront_005 js
                //Part 1
                ans.Line.push("M"+x+" "+y+" c-225 -19 -375 -67 -875 -281 -288 -124 -300 -129 -300 -147 0 -10 -42 -14 -182 -20 -210 -7 -304 -23 -396 -66 -87 -40 -192 -125 -192 -154 0 -12 -5 -27 -11 -33 -18 -18 -6 -58 19 -61 13 -2 89 8 170 22 231 41 214 40 162 9 -89 -52 -227 -161 -330 -260 -58 -55 -118 -107 -135 -115 -40 -22 -115 -49 -115 -43 0 3 -15 -2 -32 -12 -18 -9 -114 -44 -213 -78 -179 -61 -180 -61 -180 -90 0 -29 2 -30 50 -33 86 -6 410 22 503 43 20 5 15 -4 -31 -62 -64 -81 -132 -182 -210 -314 l-57 -95 -160 -58 c-88 -32 -176 -60 -197 -63 -47 -6 -79 -43 -64 -72 14 -25 132 -36 325 -28 119 4 162 11 280 41 157 41 189 43 194 8 2 -13 -28 -97 -67 -188 -39 -90 -78 -190 -86 -221 -15 -59 -20 -125 -9 -136 10 -10 253 191 269 223 9 17 17 30 18 30 2 0 3 -69 3 -153 l-1 -153 34 -64 c48 -93 137 -217 160 -223 23 -6 41 10 41 36 0 26 162 468 225 615 59 136 123 245 196 332 61 73 219 240 228 240 3 0 19 -31 34 -69 36 -90 108 -209 189 -313 71 -91 317 -372 420 -482 59 -61 67 -67 87 -57 26 14 26 26 2 71 -10 19 -21 49 -25 67 -4 17 -14 37 -22 44 -8 6 -14 18 -14 27 0 8 -13 39 -30 68 -32 58 -114 244 -108 249 1 1 31 -31 65 -73 98 -119 178 -288 297 -632 57 -162 63 -175 87 -178 50 -6 51 4 46 315 -4 237 -9 302 -24 368 -11 44 -23 88 -26 98 -27 70 -17 60 89 -80 210 -280 253 -378 328 -750 13 -67 27 -127 31 -133 9 -14 51 -13 62 3 13 16 53 407 54 522 0 55 -6 109 -15 139 -20 63 -19 92 1 46 37 -83 65 -179 92 -314 16 -80 32 -150 36 -156 9 -14 82 -13 91 2 4 7 24 71 44 143 48 172 60 175 89 23 39 -206 27 -285 -71 -466 -57 -106 -59 -135 -12 -140 29 -3 44 10 177 149 81 84 148 151 150 148 2 -2 -24 -109 -58 -237 -58 -219 -61 -235 -46 -254 14 -17 22 -18 51 -11 32 9 45 26 167 229 150 247 248 434 288 544 38 105 44 226 17 340 -27 115 -14 95 109 -157 89 -182 101 -203 124 -203 44 0 48 24 42 269 -7 285 -25 359 -113 468 -19 23 -34 50 -34 61 0 17 5 19 45 14 59 -6 230 33 257 60 12 12 18 29 16 46 -3 25 -13 30 -178 87 -248 86 -369 148 -500 257 -19 16 -61 50 -93 75 -32 25 -56 47 -54 49 2 2 44 -5 93 -16 49 -11 136 -23 194 -27 170 -9 251 19 518 180 l152 91 0 45 0 44 -107 -7 c-406 -25 -626 -16 -756 29 -64 22 -267 147 -267 164 0 5 37 14 83 20 120 18 153 28 228 73 73 44 84 57 66 82 -16 22 -239 112 -357 144 -92 25 -105 26 -410 29 l-315 2 -90 31 c-49 17 -115 33 -146 37 l-57 6 63 59 c35 32 98 105 141 161 42 56 88 114 101 128 15 17 23 36 21 50 -3 24 -3 24 -158 25 -85 0 -173 -1 -195 -2z m203 -96 c-4 -28 -200 -207 -297 -270 -51 -33 -84 -48 -107 -48 -45 0 -63 -31 -34 -60 17 -17 33 -20 119 -20 134 0 238 -16 335 -51 l81 -29 325 -3 c356 -3 345 -2 539 -73 144 -54 122 -70 -131 -103 -80 -10 -151 -22 -157 -25 -6 -4 -11 -17 -11 -29 0 -16 27 -42 103 -98 273 -204 338 -224 735 -224 144 0 262 -2 262 -5 0 -13 -184 -114 -252 -138 -63 -23 -88 -27 -183 -26 -126 1 -224 14 -377 50 -130 31 -162 29 -166 -7 -3 -23 12 -39 105 -116 311 -258 388 -306 652 -412 l123 -49 -57 -7 c-46 -6 -80 -2 -170 20 -181 45 -190 21 -49 -128 149 -159 184 -253 184 -495 l0 -83 -66 131 c-54 107 -79 145 -137 206 -61 66 -74 75 -101 72 -44 -4 -44 -25 -1 -164 45 -147 55 -258 31 -354 -9 -36 -47 -128 -85 -205 -72 -145 -230 -419 -237 -412 -3 2 21 98 52 213 127 473 134 513 134 804 0 181 -2 190 -45 190 l-32 0 -6 -247 c-8 -334 -29 -421 -139 -568 -49 -66 -149 -178 -154 -172 -2 1 4 27 13 56 12 43 14 85 10 200 -4 124 -10 168 -41 290 -20 79 -35 149 -33 155 8 21 -14 46 -39 46 -21 0 -29 -9 -50 -57 -14 -31 -43 -124 -65 -207 -41 -153 -49 -175 -49 -139 0 59 -64 263 -130 413 -39 91 -77 191 -85 223 -15 68 -24 80 -56 75 -22 -3 -24 -7 -22 -63 1 -33 11 -103 22 -156 26 -121 40 -281 34 -395 -7 -141 -12 -151 -35 -64 -47 180 -117 298 -335 561 -76 91 -162 195 -191 231 -61 74 -135 183 -175 258 -24 45 -31 51 -55 48 -19 -2 -28 -10 -30 -25 -2 -12 42 -111 102 -230 174 -347 196 -417 204 -653 2 -85 2 -153 -1 -150 -3 3 -33 75 -67 160 -34 85 -85 199 -113 253 -52 101 -195 290 -246 326 -22 16 -30 31 -35 69 -3 26 -15 66 -26 87 -11 22 -20 54 -20 71 0 18 -4 44 -9 58 -6 13 -22 94 -36 178 -32 188 -36 200 -73 196 -40 -4 -39 -30 8 -293 67 -381 112 -538 214 -746 43 -87 45 -91 17 -59 -17 19 -50 62 -73 94 -24 33 -64 87 -90 120 -81 104 -246 355 -283 430 -59 122 -87 268 -105 567 -14 225 -16 234 -55 234 l-30 0 1 -127 c2 -148 18 -339 39 -453 l15 -80 -130 -132 c-228 -232 -285 -327 -442 -737 -38 -99 -78 -210 -90 -245 l-20 -65 -19 25 c-59 77 -104 207 -93 269 3 14 8 77 12 141 8 114 9 117 43 152 50 52 281 421 313 499 21 54 63 211 101 386 5 18 1 22 -19 22 -31 0 -41 -19 -50 -89 -4 -30 -28 -109 -53 -175 -37 -97 -73 -164 -181 -336 -197 -312 -207 -326 -301 -425 -48 -49 -98 -106 -113 -125 -14 -19 -29 -32 -33 -28 -11 10 32 143 72 223 41 81 163 278 322 520 112 172 128 210 94 231 -36 21 -62 0 -140 -111 -247 -351 -317 -398 -653 -436 -119 -13 -150 -13 -164 1 -16 16 1 25 109 65 258 94 393 184 639 426 146 143 157 158 147 177 -22 42 -50 26 -180 -100 -69 -68 -155 -148 -191 -179 -67 -57 -190 -144 -190 -134 0 3 17 32 37 63 20 31 49 81 65 111 29 56 91 135 143 183 53 50 158 107 331 179 93 38 174 77 181 86 17 22 -1 53 -32 53 -33 0 -326 -123 -409 -172 -62 -36 -84 -43 -190 -59 -233 -35 -234 -26 -6 51 312 104 416 154 683 327 89 57 98 66 95 91 -6 49 -38 40 -180 -51 -174 -110 -305 -180 -323 -173 -8 3 -15 17 -15 30 0 43 202 201 339 264 55 26 59 26 296 27 l240 0 0 30 c0 28 -3 31 -55 42 -70 14 -391 16 -535 3 -97 -9 -243 -31 -300 -46 -32 -8 42 51 100 81 97 49 158 55 625 66 239 5 441 12 448 14 6 2 12 16 12 30 0 38 -36 47 -183 43 -122 -3 -128 -2 -125 16 3 22 76 56 373 175 323 130 465 165 698 169 86 2 88 1 85 -20z")
                ans.Poly.push(polygonSolver("0,0 875,281 1175,428 1357,448 1753,514 1945,668 1956,701 1937,762 1767,740 1605,731 1935,991 2070,1106 2185,1149 2217,1161 2430,1239 2610,1329 2560,1362 2057,1319 2088,1381 2298,1695 2355,1790 2515,1848 2712,1911 2776,1983 2451,2011 2171,1970 1977,1962 2044,2150 2130,2371 2139,2507 1870,2284 1852,2254 1849,2407 1850,2560 1816,2624 1656,2847 1615,2811 1390,2196 1194,1864 966,1624 932,1693 743,2006 323,2488 236,2545 234,2474 259,2407 281,2363 295,2336 325,2268 433,2019 368,2092 71,2724 -16,2902 -62,2587 -38,2219 -12,2121 -101,2201 -429,2951 -460,3084 -522,3081 -576,2559 -561,2420 -562,2374 -654,2688 -690,2844 -781,2842 -825,2699 -914,2676 -843,3142 -831,3282 -1008,3133 -1158,2985 -1100,3222 -1054,3476 -1105,3487 -1272,3258 -1560,2714 -1577,2374 -1686,2531 -1810,2734 -1852,2465 -1739,1997 -1705,1936 -1750,1922 -2007,1862 -2023,1816 -1845,1729 -1345,1472 -1252,1397 -1198,1348 -1291,1364 -1485,1391 -2003,1211 -2155,1120 -2155,1075 -2155,1031 -2048,1038 -1292,1009 -1025,845 -1108,825 -1336,752 -1402,670 -1045,526 -635,497 -320,495 -230,464 -84,427 -27,421 -90,362 -231,201 -332,73 -353,23 -195,-2 0,0",x,y))
                ans.Data.push({scalX:-0.9, scalY:0.9, tranX:00, tranY:300, rotat:180})
                //Part 2
                ans.Line.push("M"+x+" "+y+" c-26 -7 -51 -15 -55 -17 -104 -56 -174 -105 -179 -125 -15 -57 26 -70 87 -27 l38 26 60 -37 c160 -96 263 -181 336 -275 44 -57 100 -158 92 -167 -8 -7 -266 136 -356 199 -128 88 -165 93 -289 37 -58 -26 -63 -31 -60 -56 3 -25 7 -28 38 -27 19 1 61 12 94 24 l58 24 47 -25 c25 -13 68 -47 96 -75 52 -53 278 -242 425 -356 182 -141 393 -257 603 -333 124 -44 756 -225 789 -225 30 0 48 17 48 46 0 15 -17 31 -62 59 -35 21 -113 71 -174 110 -114 74 -170 128 -670 645 -71 74 -182 188 -245 253 -169 176 -259 237 -451 308 -89 32 -183 37 -270 14z m330 -129 c87 -41 107 -56 284 -222 268 -252 868 -863 868 -886 0 -24 -2 -24 -148 18 -390 112 -588 207 -855 412 -102 78 -135 110 -76 75 19 -11 91 -50 161 -87 l127 -67 21 21 c31 31 15 49 -109 116 -61 32 -111 65 -111 73 0 7 -27 68 -60 135 -76 155 -135 221 -310 346 -152 108 -152 108 10 109 103 0 107 -1 198 -43z")
                ans.Poly.push(polygonSolver("0,0 55,17 234,142 147,169 109,143 49,180 -287,455 -379,622 -23,423 266,386 326,442 288,469 194,445 136,421 89,446 -7,521 -432,877 -1035,1210 -1824,1435 -1872,1389 -1810,1330 -1636,1220 -966,575 -721,322 -270,14 0,0",x,y))
                ans.Data.push({scalX:-0.9, scalY:0.9, tranX:500, tranY:1000, rotat:180})
            }
            //HairFront_006 js
                else if(v == 006){
                //HairFront_006 js
                ans.Line.push("M"+x+" "+y+" c-132 -26 -210 -47 -225 -60 -9 -7 -41 -30 -72 -51 -211 -143 -314 -220 -430 -319 -138 -118 -330 -315 -383 -392 -27 -40 -64 -92 -82 -116 -17 -24 -41 -60 -52 -80 -12 -20 -45 -65 -73 -99 -29 -35 -67 -83 -85 -108 -18 -24 -59 -80 -92 -124 -33 -44 -79 -107 -103 -140 -23 -33 -44 -62 -48 -65 -16 -13 -119 -183 -152 -250 -19 -41 -47 -121 -62 -178 -23 -92 -26 -121 -26 -282 0 -244 20 -343 94 -471 33 -58 65 -103 205 -286 25 -32 73 -88 108 -124 l64 -65 -42 -55 c-24 -30 -67 -84 -96 -120 -29 -36 -71 -103 -94 -148 l-41 -83 -5 -162 c-4 -117 -3 -165 6 -170 6 -4 11 -27 11 -51 0 -109 153 -284 399 -455 148 -104 168 -118 206 -144 50 -34 171 -177 184 -219 12 -36 9 -95 -9 -209 -7 -42 -10 -84 -7 -92 7 -18 38 -21 53 -6 13 13 165 100 174 100 17 0 142 144 163 188 22 43 23 54 16 137 -5 50 -10 99 -12 110 -7 35 -47 169 -63 205 -20 49 -44 146 -44 178 1 40 16 61 124 172 94 97 99 100 117 84 11 -9 19 -23 19 -31 0 -7 15 -44 34 -81 19 -37 44 -101 56 -141 l22 -72 -21 -57 c-12 -31 -36 -78 -52 -105 -17 -27 -29 -56 -27 -66 4 -22 61 -26 109 -7 22 9 58 16 82 16 52 0 141 54 177 108 14 20 31 43 38 50 30 32 87 204 78 236 -4 11 -11 84 -16 161 -5 77 -14 183 -19 235 -6 52 -13 160 -17 240 -4 105 -10 148 -20 156 -11 9 -12 21 -4 60 5 27 14 190 20 361 7 224 14 326 24 360 8 27 27 86 41 133 33 108 108 261 179 369 67 101 73 108 52 57 -9 -21 -16 -50 -16 -63 0 -14 -6 -46 -14 -72 -20 -64 -36 -127 -47 -190 -5 -30 -18 -66 -29 -81 -11 -15 -22 -47 -26 -71 -3 -24 -15 -80 -25 -124 -10 -44 -19 -116 -19 -161 0 -44 -5 -107 -11 -140 -7 -39 -9 -121 -4 -241 6 -166 9 -183 25 -183 10 0 59 33 110 73 50 39 100 77 111 83 10 6 27 18 36 26 42 38 297 111 518 149 39 6 75 15 80 19 6 4 28 11 50 15 41 7 146 56 223 103 48 30 210 191 293 291 29 36 73 105 99 155 25 50 57 109 71 131 14 22 30 51 34 65 4 14 20 50 35 80 66 130 94 225 110 370 11 107 1 311 -19 362 -5 13 -14 52 -21 88 -14 80 -47 173 -76 220 -25 39 -190 203 -270 268 -29 23 -61 42 -72 42 -11 0 -25 7 -33 16 -13 16 -112 84 -122 84 -3 0 -53 23 -112 51 -222 104 -310 140 -371 148 -37 6 -75 18 -92 31 -37 28 -114 115 -186 213 -31 42 -61 77 -67 77 -5 0 -49 22 -97 49 -171 97 -282 118 -447 85z m275 -71 c198 -90 242 -119 295 -195 27 -38 83 -104 124 -147 60 -61 86 -80 123 -91 l47 -14 -20 -25 c-53 -70 -189 -282 -212 -331 -32 -71 -62 -176 -77 -270 -6 -41 -15 -93 -20 -115 -5 -22 -12 -80 -15 -128 l-7 -89 27 4 28 3 24 150 c45 288 86 415 179 554 16 24 40 61 55 83 14 21 36 52 50 69 13 16 33 42 45 56 l20 26 105 -46 c58 -25 170 -77 250 -115 79 -38 154 -73 167 -77 13 -4 45 -25 71 -48 27 -23 68 -58 92 -77 24 -19 80 -75 124 -124 72 -81 87 -104 100 -156 2 -8 10 -35 18 -60 17 -51 34 -120 48 -194 15 -80 12 -282 -5 -371 -9 -44 -18 -90 -20 -102 -3 -12 -14 -43 -25 -69 -12 -26 -21 -51 -21 -57 0 -6 -7 -18 -15 -27 -9 -10 -17 -26 -20 -36 -4 -20 -30 -79 -46 -104 -5 -8 -23 -44 -39 -78 -17 -35 -39 -77 -50 -92 -11 -15 -20 -38 -20 -50 0 -29 -318 -347 -375 -375 -22 -10 -47 -25 -56 -33 -19 -15 -175 -73 -181 -66 -6 5 -177 -31 -258 -56 -36 -10 -83 -21 -105 -24 -22 -2 -81 -22 -130 -43 -50 -22 -95 -38 -101 -36 -6 2 -33 -16 -60 -39 -65 -57 -131 -108 -140 -108 -13 0 6 428 22 508 8 43 17 91 19 107 9 80 31 189 60 290 8 28 16 61 19 75 2 14 13 49 25 78 11 28 19 52 16 52 -2 0 5 21 15 46 11 25 22 55 24 67 2 12 13 46 25 75 11 28 19 52 16 52 -2 0 4 19 14 43 31 72 -9 105 -61 50 -48 -51 -236 -340 -277 -425 -22 -47 -60 -145 -84 -218 -41 -126 -44 -140 -46 -259 -1 -69 -9 -211 -17 -316 -8 -104 -17 -233 -20 -285 -4 -66 -10 -97 -20 -103 -8 -4 -14 -13 -14 -20 0 -6 -11 -23 -25 -37 -36 -36 -78 -89 -105 -135 -52 -86 -129 -178 -311 -372 -244 -260 -239 -245 -156 -478 70 -200 93 -344 63 -407 -34 -70 -105 -141 -189 -186 -75 -41 -79 -42 -73 -20 17 61 19 176 3 222 -18 54 -138 199 -194 235 -49 32 -176 124 -183 132 -3 3 -41 29 -84 59 -110 73 -252 218 -305 308 l-43 74 5 161 c6 224 20 257 212 500 152 192 166 220 168 322 1 73 -18 249 -44 407 -10 64 -19 131 -19 150 0 18 -6 44 -13 58 -8 15 -17 47 -20 73 -7 52 -31 116 -83 222 -19 39 -34 85 -34 104 0 45 26 147 90 356 10 33 28 103 40 155 64 283 109 386 251 575 33 44 68 94 79 110 33 52 364 354 477 436 238 172 365 259 372 254 4 -2 46 7 93 19 111 29 285 33 338 9z m-1640 -1240 c-19 -89 -50 -221 -63 -263 -8 -25 -24 -79 -36 -120 -11 -41 -30 -107 -41 -146 -26 -94 -27 -215 -2 -252 68 -98 121 -280 147 -509 8 -67 19 -143 25 -168 5 -25 11 -102 12 -173 2 -118 0 -131 -22 -170 -13 -23 -27 -42 -30 -42 -32 0 -390 458 -378 483 0 1 -8 20 -19 42 -11 22 -25 81 -32 130 -7 50 -17 121 -23 160 -18 120 -4 258 41 383 49 136 85 207 158 310 32 46 70 106 86 134 15 28 38 59 52 70 14 11 48 53 77 94 28 41 52 74 53 74 1 0 -1 -17 -5 -37z m1405 -2358 c3 -82 13 -190 21 -240 9 -49 18 -108 20 -130 2 -22 6 -52 10 -67 8 -39 -57 -169 -125 -250 -36 -43 -111 -82 -173 -91 -35 -4 -36 -4 -28 19 5 13 17 38 25 54 21 41 26 155 8 200 -26 65 -30 74 -85 186 l-55 112 44 53 c24 30 57 71 74 92 66 82 95 123 109 157 8 19 41 62 75 95 l60 60 7 -50 c4 -27 10 -117 13 -200z")
                ans.Poly.push(polygonSolver("0,0 225,60 297,111 727,430 1110,822 1192,938 1244,1018 1317,1117 1402,1225 1494,1349 1597,1489 1645,1554 1797,1804 1859,1982 1885,2264 1791,2735 1586,3021 1478,3145 1414,3210 1456,3265 1552,3385 1646,3533 1687,3616 1692,3778 1686,3948 1675,3999 1276,4454 1070,4598 886,4817 895,5026 902,5118 849,5124 675,5024 512,4836 496,4699 508,4589 571,4384 615,4206 491,4034 374,3950 355,3981 321,4062 265,4203 243,4275 264,4332 316,4437 343,4503 234,4510 152,4494 -25,4386 -63,4336 -141,4100 -125,3939 -106,3704 -89,3464 -69,3308 -65,3248 -85,2887 -109,2527 -150,2394 -329,2025 -381,1968 -365,2031 -351,2103 -304,2293 -275,2374 -249,2445 -224,2569 -205,2730 -194,2870 -190,3111 -215,3294 -325,3221 -436,3138 -472,3112 -990,2963 -1070,2944 -1120,2929 -1343,2826 -1636,2535 -1735,2380 -1806,2249 -1840,2184 -1875,2104 -1985,1734 -1966,1372 -1945,1284 -1869,1064 -1599,796 -1527,754 -1494,738 -1372,654 -1260,603 -889,455 -797,424 -611,211 -544,134 -447,85 0,0",x,y))
                ans.Data.push({scalX:-0.65, scalY:0.6, tranX:-100, tranY:500, rotat:180})  
            }
            //HairFront_007 js
                else if(v == 007){
                //HairFront_007 js
                ans.Line.push("M"+x+" "+y+" c-225 -35 -423 -71 -500 -94 -49 -14 -163 -62 -253 -107 -152 -75 -166 -85 -220 -147 -81 -93 -326 -364 -528 -581 -200 -216 -356 -369 -473 -463 -46 -37 -92 -78 -103 -92 -11 -14 -26 -25 -35 -25 -8 0 -55 -28 -104 -62 -61 -42 -95 -73 -108 -99 -32 -62 -22 -68 185 -100 98 -16 205 -28 237 -29 79 0 203 27 255 55 37 21 42 22 37 7 -3 -10 -21 -93 -40 -185 -77 -367 -67 -507 65 -928 36 -113 44 -131 70 -144 46 -24 62 0 115 167 l47 148 38 -6 37 -6 209 258 c412 510 547 706 747 1082 33 63 63 110 66 105 4 -4 15 -94 24 -200 20 -229 50 -409 77 -470 11 -25 20 -57 20 -70 0 -14 16 -61 35 -105 23 -55 32 -85 26 -97 -5 -9 -11 -77 -13 -151 -5 -144 -21 -205 -94 -352 -24 -49 -26 -62 -18 -95 18 -73 76 -48 178 77 29 36 77 91 106 123 l52 57 34 -37 c18 -21 41 -57 51 -80 14 -33 23 -43 41 -43 12 0 25 7 29 17 3 9 -6 77 -20 152 -31 155 -34 213 -12 231 8 7 15 16 15 21 0 5 21 39 47 76 60 87 89 139 168 298 35 72 71 137 79 146 9 8 32 60 51 114 20 55 41 106 48 113 6 8 14 35 18 60 3 26 14 90 24 142 9 52 15 123 13 157 -2 34 -3 61 -2 60 37 -47 208 -351 263 -468 87 -184 127 -326 215 -766 30 -150 58 -277 61 -283 3 -5 17 -10 29 -10 22 0 24 -6 34 -87 6 -49 14 -117 17 -153 8 -85 12 -98 35 -105 33 -11 78 21 89 63 166 631 177 822 72 1239 -17 65 -29 118 -28 120 2 1 25 -17 52 -40 68 -58 141 -76 313 -77 119 0 134 2 152 20 37 37 26 57 -107 197 -274 287 -324 358 -489 686 -103 206 -119 232 -167 272 -79 68 -186 144 -242 172 -109 56 -408 126 -516 121 -40 -1 -53 4 -105 44 -32 25 -102 73 -155 107 -105 67 -116 69 -244 50z m239 -143 c186 -123 252 -194 289 -311 30 -95 93 -478 102 -625 7 -107 -6 -178 -19 -99 -9 58 -103 405 -122 447 -12 28 -19 33 -42 30 -40 -4 -39 -28 7 -190 49 -177 79 -318 89 -425 6 -66 4 -98 -11 -160 -10 -43 -16 -90 -13 -106 11 -54 -97 -292 -258 -572 l-46 -80 0 132 c0 158 17 257 88 504 28 96 53 194 57 218 l7 43 -33 -7 c-19 -4 -36 -9 -38 -11 -7 -6 -83 -261 -111 -374 -53 -211 -63 -404 -32 -587 10 -57 15 -99 11 -95 -4 4 -28 43 -53 87 -37 65 -50 100 -65 180 -32 165 -34 230 -16 340 14 79 76 324 100 392 7 21 -28 53 -51 47 -17 -4 -26 -21 -39 -67 -36 -126 -87 -355 -97 -437 l-11 -85 -23 88 c-25 102 -58 354 -74 572 -7 83 -15 159 -20 170 -6 16 17 70 100 235 87 172 107 218 99 233 -7 12 -19 17 -37 15 -23 -3 -43 -36 -197 -338 -337 -660 -441 -821 -880 -1365 -164 -204 -177 -217 -171 -180 75 492 97 562 304 966 l125 246 -22 22 c-12 12 -28 20 -35 18 -15 -6 -154 -270 -232 -440 -111 -241 -139 -328 -180 -554 -13 -73 -30 -143 -38 -155 -13 -21 -31 -76 -114 -340 -15 -48 -30 -88 -33 -88 -3 0 -22 55 -42 123 -111 374 -110 463 4 957 33 145 50 197 77 244 71 120 275 595 270 628 -2 18 -9 23 -33 23 -29 0 -32 -4 -107 -180 -114 -264 -189 -423 -206 -437 -8 -7 -23 -31 -32 -53 -58 -134 -217 -194 -441 -165 -57 7 -129 18 -160 24 l-57 11 122 86 c179 128 291 226 491 430 184 188 658 704 709 771 51 68 372 213 551 249 83 17 414 67 448 68 20 1 64 -22 141 -73z m476 -162 c58 -9 138 -29 178 -44 65 -25 253 -142 324 -202 16 -14 73 -115 142 -253 162 -324 215 -400 454 -654 l126 -133 -115 4 c-153 5 -167 13 -309 178 -97 112 -117 131 -139 128 -31 -4 -41 -41 -17 -67 20 -22 130 -454 152 -596 30 -195 16 -359 -58 -678 -30 -130 -48 -171 -48 -110 0 16 -9 81 -21 147 l-21 118 22 134 c43 264 43 459 0 636 -30 123 -147 486 -167 518 -9 13 -35 81 -57 150 -41 123 -42 125 -71 125 -24 0 -31 -5 -33 -23 -2 -12 30 -116 71 -230 148 -411 192 -567 206 -730 11 -131 -5 -347 -35 -472 -4 -17 -20 39 -49 175 -102 480 -153 612 -392 1010 -84 139 -114 180 -133 185 -33 8 -50 43 -50 105 -1 124 -69 451 -113 545 -12 25 -23 49 -25 54 -5 9 6 7 178 -20z m-653 -2093 l32 -56 -77 -87 c-41 -48 -77 -86 -78 -85 -2 2 8 34 23 72 18 49 27 98 31 165 6 107 3 107 69 -9z")
                ans.Poly.push(polygonSolver("0,0 500,94 753,201 973,348 1501,929 1974,1392 2077,1484 2112,1509 2216,1571 2324,1670 2139,1770 1902,1799 1647,1744 1610,1737 1650,1922 1585,2850 1515,2994 1400,2827 1353,2679 1315,2685 1278,2691 1069,2433 322,1351 256,1246 232,1446 155,1916 135,1986 100,2091 74,2188 87,2339 181,2691 199,2786 21,2709 -85,2586 -137,2529 -171,2566 -222,2646 -263,2689 -292,2672 -272,2520 -260,2289 -275,2268 -322,2192 -490,1894 -569,1748 -620,1634 -668,1521 -686,1461 -710,1319 -723,1162 -721,1102 -984,1570 -1199,2336 -1260,2619 -1289,2629 -1323,2716 -1340,2869 -1375,2974 -1464,2911 -1536,1672 -1508,1552 -1560,1592 -1873,1669 -2025,1649 -1880,1452 -1518,1052 -1429,766 -1262,494 -1020,322 -504,201 -399,157 -244,50 0,0",x,y))
                ans.Data.push({scalX:-0.95, scalY:1, tranX:500, tranY:500, rotat:180})   
            }
            //HairFront_008 js
                else if(v == 008){
                //HairFront_008 js
                ans.Line.push("M"+x+" "+y+" c-220 -8 -268 -13 -392 -45 -58 -16 -252 -90 -348 -134 -25 -11 -56 -21 -69 -21 -25 0 -137 -64 -286 -164 -169 -112 -265 -224 -383 -446 l-51 -95 -20 -180 c-59 -529 -55 -648 34 -1025 21 -92 23 -99 30 -110 10 -16 54 -11 63 8 5 9 20 99 33 200 13 104 26 177 31 170 4 -7 8 -26 8 -43 0 -41 53 -189 82 -230 12 -18 58 -79 101 -135 42 -55 77 -105 77 -110 0 -15 26 -12 39 4 7 8 18 107 27 237 8 123 21 258 28 299 l12 75 8 -60 c11 -76 21 -95 51 -95 30 0 36 13 98 216 25 82 67 201 94 264 l48 113 3 -49 c4 -64 -12 -156 -49 -271 -36 -111 -36 -156 0 -161 18 -3 41 13 98 70 92 91 162 193 201 295 28 73 110 357 113 392 1 9 6 -22 10 -69 14 -150 -4 -247 -82 -434 -57 -134 -61 -179 -19 -184 15 -1 47 12 80 32 30 19 80 50 110 67 30 18 78 57 106 86 28 29 55 53 59 53 11 0 41 38 92 117 25 40 48 71 50 69 7 -7 -17 -185 -43 -317 -15 -75 -24 -143 -21 -152 4 -11 18 -17 36 -17 34 0 160 97 236 182 39 43 46 48 42 28 -21 -101 -39 -231 -34 -244 11 -27 39 -18 168 50 236 127 336 203 413 315 43 62 41 43 -10 -76 -37 -88 -44 -149 -18 -159 37 -14 56 -2 143 92 197 213 250 311 326 606 38 150 30 158 84 -86 54 -241 61 -306 61 -554 0 -249 2 -259 51 -252 24 3 51 44 120 178 45 87 42 97 39 -140 -2 -168 6 -203 47 -198 20 2 35 16 60 58 27 45 32 50 28 25 -57 -308 -79 -446 -75 -466 4 -16 14 -25 31 -27 25 -3 40 11 136 128 93 112 171 251 237 418 20 52 43 104 50 115 8 12 24 76 37 142 32 159 32 339 2 435 -11 36 -28 97 -38 135 -9 39 -30 95 -47 125 -48 86 -74 143 -82 174 -9 38 -91 158 -156 229 -28 31 -104 96 -168 144 -65 48 -134 100 -156 116 -49 38 -347 168 -499 218 -182 60 -262 70 -582 74 -154 2 -381 -1 -505 -5z m495 -70 c405 -13 482 -29 814 -171 165 -70 201 -90 316 -174 206 -150 266 -214 389 -412 50 -80 63 -113 102 -255 25 -90 50 -201 56 -248 l11 -85 -52 -195 c-66 -247 -112 -385 -156 -469 -35 -66 -125 -194 -132 -187 -2 1 21 139 52 306 55 301 61 350 48 364 -4 3 -6 89 -4 189 2 163 -10 419 -25 535 -5 40 -8 43 -32 40 l-27 -3 0 -390 c0 -428 -2 -444 -65 -579 l-28 -61 -1 132 c-1 72 -5 134 -10 137 -5 3 -7 23 -4 44 4 38 -1 77 -37 272 -12 63 -24 131 -27 150 -22 170 -56 370 -66 393 -13 30 -53 38 -63 12 -4 -9 3 -57 15 -108 12 -50 21 -123 21 -160 0 -38 6 -80 14 -95 15 -30 30 -190 28 -297 -2 -103 -20 -192 -52 -260 l-28 -60 -1 157 c-1 107 -7 193 -21 275 -25 147 -100 485 -110 498 -4 6 -15 66 -24 135 -20 143 -28 170 -55 170 -29 0 -43 -70 -30 -154 8 -47 8 -75 0 -94 -6 -15 -31 -108 -55 -207 -54 -217 -75 -278 -121 -361 -31 -55 -149 -214 -159 -214 -1 0 8 37 21 82 13 45 28 127 34 183 6 55 17 125 26 155 8 31 13 72 10 95 -4 24 3 77 16 135 12 52 21 114 19 138 -3 37 -6 42 -27 42 -34 0 -47 -30 -53 -127 -3 -54 -10 -90 -19 -99 -8 -8 -28 -65 -43 -127 -39 -153 -74 -256 -111 -330 -43 -84 -150 -188 -266 -257 -89 -53 -173 -99 -183 -100 -3 0 9 87 27 193 34 201 39 272 23 282 -5 3 -7 29 -5 58 5 50 19 332 29 540 l4 97 -28 0 c-36 0 -34 10 -55 -290 -20 -286 -32 -385 -55 -487 -31 -133 -90 -232 -180 -303 l-41 -32 7 63 c3 35 10 82 16 104 28 114 36 287 14 329 -12 23 -11 34 0 75 11 34 14 92 12 207 l-3 159 -30 0 -30 0 -6 -155 c-5 -119 -11 -170 -27 -220 -12 -36 -22 -73 -22 -82 0 -10 -4 -18 -10 -18 -5 0 -10 -9 -10 -19 0 -23 -105 -184 -151 -230 -39 -39 -141 -116 -182 -138 -28 -14 -28 -14 -17 7 6 12 17 43 25 68 7 26 26 81 41 122 27 72 28 82 28 265 1 226 -9 281 -73 409 -43 84 -48 91 -76 91 -43 0 -43 -29 -1 -113 l35 -69 -15 -54 c-8 -30 -19 -88 -25 -129 -6 -41 -15 -80 -20 -86 -5 -6 -27 -75 -50 -155 -45 -160 -100 -284 -152 -344 l-34 -39 19 89 c12 61 18 135 19 230 0 77 1 158 2 180 2 37 0 40 -25 43 -26 3 -31 -4 -93 -129 -36 -72 -65 -140 -65 -150 0 -11 -4 -19 -9 -19 -9 0 -65 -141 -97 -243 -18 -58 -34 -60 -34 -5 0 15 -5 38 -11 51 -9 20 -5 53 21 165 37 167 37 196 -2 200 -35 4 -39 -5 -73 -163 -80 -367 -105 -524 -121 -753 l-6 -104 -35 49 c-51 71 -102 182 -119 260 -9 43 -17 150 -21 288 -6 241 -13 275 -58 275 -17 0 -29 -8 -35 -22 -5 -13 -25 -151 -45 -308 -20 -157 -38 -289 -39 -295 -1 -5 -11 33 -20 85 -27 144 -31 327 -12 530 42 433 37 406 90 505 74 137 149 245 208 301 80 76 352 254 387 254 10 0 45 12 77 26 306 138 436 173 679 183 96 4 178 10 181 14 9 9 11 9 369 -3z")
                ans.Poly.push(polygonSolver("0,0 392,45 740,179 809,200 1095,364 1478,810 1529,905 1549,1085 1515,2110 1485,2220 1422,2212 1389,2012 1358,1842 1350,1885 1268,2115 1167,2250 1090,2360 1051,2356 1024,2119 996,1820 984,1745 976,1805 925,1900 827,1684 733,1420 685,1307 682,1356 731,1627 731,1788 633,1718 432,1423 319,1031 309,1100 391,1534 410,1718 330,1686 220,1619 114,1533 55,1480 -37,1363 -87,1294 -44,1611 -23,1763 -59,1780 -295,1598 -337,1570 -303,1814 -471,1764 -884,1449 -874,1525 -856,1684 -999,1592 -1325,986 -1325,586 -1409,1072 -1470,1626 -1521,1878 -1641,1700 -1680,1840 -1727,2038 -1787,1980 -1815,1955 -1740,2421 -1771,2448 -1907,2320 -2144,1902 -2194,1787 -2231,1645 -2233,1210 -2195,1075 -2148,950 -2066,776 -1910,547 -1742,403 -1586,287 -1087,69 -505,-5 0,0",x,y))
                ans.Data.push({scalX:-0.85, scalY:0.9, tranX:500, tranY:650, rotat:180})
            }
            //HairFront_009 js
                else if(v == 009){
                //HairFront_009 js
                //Part 1
                ans.Line.push("M"+x+" "+y+" c-96 -24 -139 -39 -150 -53 -28 -36 -849 -506 -1129 -647 -316 -159 -422 -190 -632 -189 -120 0 -167 5 -275 28 -161 35 -188 37 -193 13 -5 -25 66 -114 171 -213 172 -162 271 -207 453 -208 117 -1 113 11 46 -122 -75 -149 -154 -234 -410 -443 -118 -96 -127 -116 -63 -149 22 -12 75 -28 118 -37 84 -18 139 -14 208 13 62 24 192 101 199 117 3 8 11 15 19 15 7 0 30 9 52 20 22 11 40 20 41 20 1 0 -2 -16 -6 -34 -4 -19 -5 -37 -3 -40 3 -3 -2 -26 -11 -53 -8 -26 -22 -84 -30 -128 -8 -44 -32 -165 -53 -270 -37 -188 -37 -193 -37 -430 0 -200 3 -247 17 -285 9 -25 17 -58 17 -73 0 -15 7 -41 15 -56 8 -16 18 -62 24 -102 5 -41 22 -112 38 -159 27 -81 29 -85 60 -88 23 -2 34 2 41 15 5 10 15 92 22 183 7 91 15 169 18 175 3 5 14 -56 24 -135 28 -227 66 -361 147 -525 38 -77 114 -210 169 -295 80 -125 104 -156 124 -158 38 -5 50 18 38 71 -5 25 -10 133 -10 239 0 106 -4 218 -9 248 -6 30 -15 132 -21 226 -8 139 -7 180 4 220 8 27 19 92 25 144 20 162 117 548 133 532 8 -8 26 -64 50 -157 5 -22 12 -47 15 -55 3 -8 5 -30 4 -48 -3 -41 99 -256 128 -272 11 -5 22 -23 26 -40 4 -16 10 -30 15 -30 4 0 11 -19 15 -42 7 -43 70 -233 117 -358 23 -59 28 -65 54 -65 32 0 18 -34 178 415 51 146 105 288 119 315 13 28 49 102 78 165 l54 114 7 -99 c4 -55 7 -133 7 -174 0 -84 30 -375 42 -408 11 -29 49 -31 73 -4 22 24 84 219 106 332 5 26 25 80 44 120 19 41 53 126 76 189 24 63 70 171 104 240 64 132 175 324 183 316 8 -7 -83 -218 -162 -376 -83 -165 -91 -203 -44 -208 51 -6 354 258 468 409 79 104 159 238 176 295 8 26 25 57 39 68 21 18 251 453 270 511 3 11 17 37 29 57 l23 38 21 -53 c136 -343 253 -665 332 -912 137 -427 180 -746 197 -1486 4 -150 11 -282 16 -291 10 -21 47 -23 72 -5 24 17 164 556 196 752 7 39 16 88 21 111 23 109 32 376 20 652 -6 152 -14 309 -17 347 l-5 70 51 -95 c28 -52 58 -115 67 -140 8 -25 27 -72 43 -105 15 -33 36 -87 48 -120 51 -150 47 -140 80 -196 55 -93 68 -109 96 -119 54 -19 59 -2 58 172 -2 229 -37 377 -147 605 l-53 112 41 -15 c23 -9 58 -24 77 -34 20 -10 75 -30 124 -44 85 -25 97 -26 372 -26 308 0 296 -2 274 54 -5 15 -27 34 -52 47 -125 63 -366 201 -455 261 -101 69 -244 199 -319 292 -21 27 -49 62 -62 77 l-24 29 97 -35 c54 -19 112 -35 130 -35 18 0 44 -9 58 -20 44 -35 216 -71 368 -77 l135 -6 22 28 c26 32 15 65 -21 65 -12 0 -32 6 -43 14 -11 8 -72 33 -135 56 -141 52 -257 109 -329 161 l-55 41 50 -6 c77 -8 529 -26 534 -20 3 2 1 16 -5 31 -8 23 -37 37 -229 114 -277 111 -417 181 -524 260 -95 69 -364 328 -421 404 -57 77 -168 193 -214 224 -22 15 -81 45 -130 66 l-89 38 -100 -18 c-66 -12 -106 -24 -118 -36 -14 -14 -33 -19 -68 -19 -36 0 -89 -15 -195 -56 l-145 -55 -70 29 c-71 30 -279 150 -316 182 -28 24 -92 56 -196 96 -88 34 -89 34 -251 33 -150 0 -173 -3 -297 -34z m414 -39 c33 -8 90 -27 126 -43 l67 -28 -186 -100 c-350 -189 -463 -279 -550 -443 -50 -94 -347 -538 -471 -702 -159 -213 -307 -344 -628 -559 -94 -62 -123 -87 -123 -103 0 -28 28 -58 55 -58 28 0 251 75 281 95 13 8 32 15 44 15 28 0 328 111 488 180 283 123 541 290 984 637 58 45 109 83 112 83 3 0 -8 -29 -24 -65 -16 -36 -27 -65 -23 -65 3 0 -2 -11 -11 -25 -9 -13 -64 -136 -122 -272 -166 -386 -282 -690 -320 -835 -8 -33 -59 -149 -113 -257 -140 -280 -190 -399 -266 -631 -37 -113 -78 -229 -93 -258 l-25 -52 -19 27 c-10 16 -18 37 -18 49 0 11 -9 47 -20 80 -45 130 -55 193 -54 354 0 179 17 298 100 724 30 153 54 291 52 305 -2 20 -9 27 -30 29 -37 4 -40 -5 -82 -223 -92 -476 -126 -695 -126 -815 l0 -55 -24 40 c-63 103 -118 274 -137 423 -22 175 -22 177 -46 180 -50 7 -84 -79 -178 -443 -49 -191 -59 -348 -51 -815 3 -201 8 -387 11 -415 l6 -50 -43 65 c-221 339 -268 496 -322 1088 -12 139 -27 257 -33 263 -6 6 -21 9 -34 7 -21 -3 -24 -9 -27 -48 -2 -24 -7 -49 -12 -55 -5 -6 -12 -85 -15 -175 -5 -113 -12 -172 -21 -187 -8 -12 -14 -44 -14 -70 0 -93 -16 -79 -45 39 -15 62 -34 123 -41 135 -19 31 -19 292 1 449 18 146 60 383 115 644 22 107 40 209 38 225 -5 55 -38 45 -213 -62 -217 -134 -271 -153 -374 -132 -34 6 -61 14 -60 18 0 3 39 38 86 76 226 183 319 294 408 489 l48 104 111 22 c143 28 606 140 629 152 27 14 19 62 -11 66 -13 2 -126 -22 -252 -53 -574 -140 -727 -153 -885 -76 -58 29 -199 144 -230 188 -13 18 -11 18 89 1 199 -34 377 -18 569 52 114 42 397 182 617 305 314 176 815 467 835 485 16 14 142 48 310 83 44 10 133 6 190 -7z m413 -203 c124 -76 267 -143 307 -143 11 0 82 25 157 55 161 63 262 93 373 109 75 11 85 11 147 -11 111 -38 172 -88 299 -248 84 -105 384 -393 469 -451 41 -28 143 -81 225 -118 83 -37 157 -74 166 -82 8 -8 22 -14 31 -14 8 0 18 -3 22 -7 4 -5 22 -13 39 -20 59 -22 -182 -16 -304 7 -156 30 -427 107 -479 137 -25 14 -94 50 -155 80 -60 30 -194 100 -298 155 -114 61 -196 98 -210 96 -25 -3 -35 -41 -17 -63 15 -18 303 -183 455 -260 143 -73 251 -113 440 -164 136 -37 143 -40 234 -109 103 -76 216 -140 326 -184 49 -19 62 -27 44 -28 -46 0 -207 46 -413 119 -110 39 -210 71 -222 71 -31 0 -37 -13 -29 -60 10 -56 175 -246 345 -395 150 -132 204 -169 398 -275 72 -40 132 -75 132 -78 0 -11 -318 7 -390 22 -41 9 -111 30 -155 47 -44 17 -99 36 -122 43 -23 6 -50 19 -60 28 -10 9 -30 21 -44 26 -26 11 -33 23 -163 302 -59 129 -63 135 -92 135 -24 0 -30 -5 -32 -25 -3 -25 194 -468 222 -499 43 -49 154 -305 207 -476 22 -72 24 -91 33 -280 l6 -110 -38 110 c-70 199 -109 309 -127 355 -15 36 -276 515 -658 1205 -31 57 -50 81 -66 83 -59 9 -31 -58 168 -398 152 -260 213 -382 247 -495 25 -87 26 -103 36 -455 12 -484 3 -640 -52 -905 -30 -144 -102 -436 -107 -431 -2 2 -8 116 -14 252 -11 285 -33 564 -55 709 -21 135 -143 598 -204 770 -50 143 -155 420 -253 670 l-55 140 -47 9 c-28 5 -50 5 -56 -1 -5 -5 -80 -146 -165 -314 -305 -595 -339 -646 -646 -957 -37 -38 -32 -11 17 88 25 52 45 101 45 110 0 9 41 128 90 265 50 137 90 258 88 270 -2 13 -12 21 -30 23 -29 4 -29 4 -204 -278 -109 -174 -109 -174 -181 -324 -32 -65 -68 -137 -80 -160 -11 -23 -63 -163 -113 -311 -51 -149 -96 -274 -100 -278 -11 -12 -30 231 -30 375 0 124 28 337 50 378 5 10 12 34 14 52 7 51 32 128 98 303 118 311 448 1078 480 1112 27 29 21 67 -12 71 -19 2 -57 -23 -155 -100 -568 -447 -836 -624 -1150 -758 -130 -56 -535 -203 -541 -197 -2 2 33 30 79 62 277 197 398 333 713 800 81 121 152 221 156 223 4 2 33 52 64 111 71 137 122 195 242 275 103 69 498 286 520 286 7 0 70 -35 140 -77z")
                ans.Poly.push(polygonSolver("0,0 150,53 1279,700 1911,889 2186,861 2379,848 2208,1061 1755,1269 1709,1391 2119,1834 2182,1983 2064,2020 1856,2007 1657,1890 1638,1875 1586,1855 1545,1835 1551,1869 1554,1909 1565,1962 1595,2090 1648,2360 1685,2790 1668,3075 1651,3148 1636,3204 1612,3306 1574,3465 1514,3553 1473,3538 1451,3355 1433,3180 1409,3315 1262,3840 1093,4135 969,4293 931,4222 941,3983 950,3735 971,3509 967,3289 942,3145 809,2613 759,2770 744,2825 740,2873 612,3145 586,3185 571,3215 556,3257 439,3615 385,3680 207,3265 88,2950 10,2785 -44,2671 -51,2770 -58,2944 -100,3352 -173,3356 -279,3024 -323,2904 -399,2715 -503,2475 -686,2159 -524,2535 -480,2743 -948,2334 -1124,2039 -1163,1971 -1433,1460 -1462,1403 -1485,1365 -1506,1418 -1838,2330 -2050,2916 -2042,3816 -2051,4107 -2123,4112 -2319,3360 -2340,3249 -2360,2597 -2343,2250 -2338,2180 -2389,2275 -2456,2415 -2499,2520 -2547,2640 -2627,2836 -2723,2955 -2781,2783 -2634,2178 -2581,2066 -2622,2081 -2699,2115 -2823,2159 -3195,2185 -3469,2131 -3417,2084 -2962,1823 -2643,1531 -2581,1454 -2557,1425 -2654,1460 -2784,1495 -2842,1515 -3210,1592 -3345,1598 -3367,1570 -3346,1505 -3303,1491 -3168,1435 -2839,1274 -2784,1233 -2834,1239 -3368,1259 -3363,1228 -3134,1114 -2610,854 -2189,450 -1975,226 -1845,160 -1756,122 -1656,140 -1538,176 -1470,195 -1275,251 -1130,306 -1060,277 -744,95 -548,-1 -297,-34 0,0",x,y))
                ans.Data.push({scalX:-0.75, scalY:0.7, tranX:500, tranY:700, rotat:180})
            }
            //Reture Object Answer data
            return ans
        }
          
        //All the HairAccessories_###
        function data_HairAccessories(x,y,v){
            //Object Answer
            var ans =  Standard_Process_Answer()
            //No Accessorie
                if(v == 0){
               //do nonthing
            }
            //HeadPhone Accessories_001 js
                else if(v == 1){
                //HeadPhone Accessories_001 js
                //Part 1
                ans.Line.push("M"+x+" "+y+" c-24 -4 -105 -17 -179 -28 -217 -35 -527 -117 -800 -212 -484 -170 -504 -180 -731 -362 -388 -311 -689 -730 -849 -1181 -41 -118 -89 -308 -100 -398 -5 -40 -16 -99 -25 -131 -8 -33 -14 -65 -11 -72 3 -7 24 -16 49 -19 l43 -7 -51 -359 c-28 -197 -53 -360 -56 -361 -2 -2 -35 -18 -72 -37 -47 -23 -91 -57 -140 -107 -119 -121 -144 -154 -206 -280 -129 -260 -190 -554 -191 -912 0 -190 11 -315 40 -468 84 -431 274 -746 520 -859 l65 -30 413 0 c356 0 415 2 425 15 7 8 34 26 62 39 257 121 462 515 520 1001 17 137 19 442 4 578 -24 224 -83 448 -164 620 -77 163 -148 255 -302 390 l-72 62 -91 0 -91 0 6 43 c3 23 19 167 35 321 16 153 30 280 32 281 2 2 29 15 61 29 55 24 68 41 47 62 -7 7 -4 43 9 113 53 270 165 524 340 772 76 107 270 312 391 413 279 233 670 428 1056 527 242 61 391 80 681 86 281 6 460 -8 671 -54 64 -14 145 -27 180 -30 56 -5 62 -4 62 14 0 10 4 23 8 29 5 5 17 37 27 71 l18 61 -77 91 c-195 227 -292 260 -840 281 -343 13 -662 17 -717 8z m873 -78 c193 -11 297 -30 383 -70 64 -29 158 -106 224 -181 l40 -46 -103 18 c-667 115 -1328 54 -1901 -176 -770 -309 -1314 -885 -1480 -1569 -14 -54 -26 -100 -27 -101 -3 -3 -572 86 -576 89 -6 7 61 244 94 333 127 342 321 641 594 914 161 162 259 243 431 359 109 73 128 81 290 133 570 182 867 258 1149 292 128 16 648 19 882 5z m139 -261 c148 -11 348 -39 457 -64 l71 -16 -11 -30 c-11 -32 -16 -33 -69 -19 -251 70 -747 101 -1059 66 -666 -75 -1263 -348 -1686 -771 -276 -278 -476 -613 -562 -945 -19 -73 -20 -75 -56 -84 -21 -4 -39 -6 -41 -4 -2 2 5 43 15 91 157 717 762 1321 1615 1614 398 136 891 196 1326 162z m-3304 -1849 c142 -22 267 -42 278 -45 20 -4 20 -8 11 -95 -7 -76 -12 -90 -25 -86 -9 2 -137 21 -286 42 -148 20 -274 40 -279 45 -13 11 15 179 30 179 7 0 129 -18 271 -40z m-166 -249 c4 -3 -14 -158 -39 -343 l-47 -338 -52 0 c-36 0 -53 4 -53 13 0 6 21 164 47 349 l47 337 46 -6 c25 -3 48 -8 51 -12z m92 -34 c-7 -45 -83 -625 -83 -636 0 -6 -9 -11 -20 -11 -12 0 -20 7 -20 18 0 20 78 594 86 633 7 34 43 30 37 -4z m124 5 c9 -5 3 -83 -22 -312 -19 -168 -35 -313 -35 -322 0 -15 -9 -18 -50 -18 -27 0 -50 3 -50 8 0 16 82 628 85 640 5 13 53 16 72 4z m179 -25 c0 -1 -15 -143 -34 -314 l-36 -313 -58 0 c-39 0 -58 4 -58 12 0 23 61 583 66 607 5 23 8 23 62 17 31 -4 57 -8 58 -9z m89 -34 c-3 -16 -16 -136 -30 -268 -35 -337 -33 -325 -56 -325 -14 0 -19 7 -19 28 1 38 67 590 69 572 1 -12 4 -12 12 3 15 26 29 20 24 -10z m-446 -712 c235 -120 420 -483 476 -936 17 -138 20 -439 5 -570 -55 -474 -244 -851 -486 -970 -53 -27 -69 -30 -159 -30 -90 0 -106 3 -160 30 -84 40 -205 165 -272 279 -104 176 -179 420 -209 676 -20 167 -14 515 10 660 81 471 283 808 536 891 14 5 63 7 110 5 73 -2 94 -7 149 -35z")
                ans.Poly.push(polygonSolver("0,0 179,28 989,240 1890,759 2559,1783 2655,2161 2681,2296 2692,2389 2033,2488 1813,2379 1800,2268 1800,2000 1460,1470 1069,1084 569,684 13,557 -300,457 -668,471 -968,471 -1339,525 -1519,555 -1581,541 -1589,512 -1616,441 -1634,380 -1557,289 -1017,40 0,0",x,y))
                ans.Data.push({scalX:0.8, scalY:0.55, tranX:800, tranY:0, rotat:180,})
                //Part 2
                var x2 = x - 2310; var y2 = y -2438; 
                ans.Line.push(false)
                ans.Poly.push(polygonSolver("0,0 -33,20 -77,24 -53,352 -9,675 0,693 -271,707 -530,692 -423,677 -329,677 -335,634 -370,313 -411,27 -322,13 -176,-2 -38,-23 0,0",x2,y2))
                ans.Data.push({scalX:0.8, scalY:0.55, tranX:800, tranY:0, rotat:180,})
                //Part 3
                var x3 = x - 2597; var y3 = y -2438; 
                ans.Line.push(false)
                ans.Poly.push(polygonSolver("0,0 50,344 124,722 -77,728 -294,714 -249,699 -204,691 -249,344 -290,2 -145,-8 0,0",x3,y3))
                ans.Data.push({scalX:0.8, scalY:0.55, tranX:800, tranY:0, rotat:180,})
                //Part 4
                var x4 = x - 2797; var y4 = y -3198; 
                ans.Line.push(false)
                ans.Poly.push(polygonSolver("0,0 200,186 395,557 493,996 520,1570 200,2411 -100,2600 -571,2621 -956,2521 -1018,2487 -1538,1586 -1542,1008 -1378,389 -1106,26 -1033,-34 -545,-34 -57,-34 0,0",x4,y4))
                ans.Data.push({scalX:0.8, scalY:0.55, tranX:800, tranY:0, rotat:180,})
                //Part 5
                var x5 = x - 2677; var y5 = y - 3738;
                ans.Line.push("M"+x5+" "+y5+" c-122 -55 -224 -239 -269 -484 -23 -125 -23 -398 1 -524 55 -302 195 -503 350 -502 208 1 376 348 376 775 0 98 -25 282 -50 375 -78 281 -249 432 -408 360z m173 -60 c87 -54 168 -212 208 -405 27 -134 30 -407 5 -541 -46 -245 -158 -428 -275 -450 -209 -39 -386 389 -345 834 38 424 222 677 407 562z")
                ans.Poly.push(polygonSolver("0,0 269,484 268,1008 230,1198 -82,1510 -300,1310 -458,735 -408,360 -320,160 -300,120 0,0",x5,y5))
                ans.Data.push({scalX:0.8, scalY:0.55, tranX:800, tranY:0, rotat:180,})
            }
            //Reture Object Answer data
            return ans
        }
    
    //Temporary Line/Poly DataBase
    
        //HeadPolyPointData
        function HeadPolyPD(x,y){
            return (" "+x+" "+y+", -2401.000 -19.000, -2511.000 -45.000, -2580.000 -60.000, -2650.000 -84.000, -2809.000 -159.000, -3071.000 -306.000, -3352.000 -528.000, -3568.000 -787.000, -3733.000 -1141.000, -3795.000 -1650.000, -3716.000 -2411.000, -3699.000 -2487.000, -3747.000 -2510.000, -3879.000 -2755.000, -3880.000 -2845.000, -3831.000 -2927.000, -3431.000 -3198.000, -3350.000 -3202.000, -3310.000 -3262.000, -3104.000 -3456.000, -2375.000 -3680.000, -2175.000 -3707.000, -1550.000 -3741.000, -1280.000 -3717.000, -1062.000 -3685.000, -570.000 -3515.000, -291.000 -3250.000, -205.000 -3114.000, -185.000 -3060.000, -185.000 -2672.000, -164.000 -2118.000, -164.000 -1755.000, -230.000 -1333.000, -270.000 -1185.000, -337.000 -986.000, -775.000 -435.000, -1475.000 -99.000, -1572.000 -58.000, -1677.000 -23.000, -2015.000 5.000, -2300.000 0.000" )
        }
    
        //HeadLinePointData
        function HeadLinePD(x,y){
            return ("M"+x+" "+y+" c-22 -4 -67 -13 -101 -19 -33 -6 -82 -18 -110 -26 -27 -8 -58 -15 -69 -15 -11 0 -42 -11 -70 -24 -27 -13 -99 -47 -159 -75 -61 -29 -178 -95 -262 -147 -130 -81 -170 -113 -281 -222 -104 -102 -146 -153 -216 -259 -104 -157 -125 -201 -165 -354 -51 -188 -62 -282 -62 -509 1 -310 22 -520 79 -761 l17 -76 -48 -23 c-94 -45 -130 -112 -132 -245 l-1 -90 49 -82 c97 -165 242 -263 400 -271 l81 -4 40 -60 c42 -63 117 -134 206 -194 112 -76 517 -201 729 -224 58 -7 148 -19 200 -27 92 -15 359 -30 625 -34 104 -2 158 3 270 24 77 14 175 29 218 32 168 14 387 90 492 170 89 68 237 209 279 265 67 90 86 120 86 136 0 8 9 32 20 54 29 56 29 269 0 388 -33 139 -26 328 21 554 22 101 21 116 0 363 -17 184 -42 347 -66 422 -13 43 -31 110 -40 148 -9 39 -39 128 -67 199 -86 217 -212 376 -438 551 -106 82 -397 221 -700 336 -47 17 -91 36 -97 41 -7 6 -54 21 -105 35 -85 23 -114 25 -338 28 -135 2 -263 0 -285 -5z m461 -90 c71 -6 154 -17 184 -26 63 -18 246 -84 335 -121 120 -50 430 -207 474 -240 90 -68 252 -236 306 -317 50 -77 135 -235 135 -253 0 -4 6 -20 14 -34 15 -30 59 -169 77 -244 6 -27 15 -59 20 -70 4 -11 10 -36 13 -55 37 -235 40 -265 39 -470 0 -145 -5 -246 -16 -310 -33 -199 -32 -300 3 -550 9 -61 -3 -171 -26 -240 -38 -115 -202 -319 -323 -401 -90 -62 -213 -111 -346 -139 -33 -6 -70 -16 -83 -21 -13 -5 -35 -9 -49 -9 -15 0 -40 -4 -57 -9 -97 -30 -545 -54 -756 -41 -279 17 -385 26 -395 32 -6 3 -62 13 -126 22 -215 30 -474 116 -596 198 -23 15 -45 28 -50 28 -21 1 -196 188 -222 238 -14 26 -33 28 -52 6 -11 -14 -26 -15 -89 -10 -41 4 -95 16 -120 27 -46 21 -160 124 -160 146 0 6 -6 16 -14 20 -20 12 -73 131 -80 181 -9 62 8 115 49 151 49 43 79 48 129 23 22 -12 53 -31 68 -43 15 -12 33 -19 42 -16 30 12 16 45 -39 94 -51 44 -58 55 -85 139 -41 129 -69 301 -82 499 -18 303 -1 581 42 680 5 11 14 45 21 75 7 30 16 59 21 65 4 5 8 17 8 26 0 57 192 355 284 441 145 136 213 190 317 255 97 60 255 143 272 143 3 0 35 14 72 31 79 36 150 59 187 59 15 0 30 5 33 10 3 6 21 10 38 11 18 0 59 6 92 14 73 16 314 19 491 5z")
        }
    
        //EarLinePointData
        function EarLinePD(x,y){
            return ("M"+x+" "+y+" c-29 -48 -27 -96 5 -108 14 -5 25 -16 25 -25 0 -8 7 -15 15 -15 21 0 19 22 -5 43 -22 19 -26 48 -10 78 14 25 42 24 67 -3 32 -37 133 -210 133 -230 0 -32 -39 -21 -62 17 -11 20 -26 34 -32 32 -22 -7 -16 -42 12 -76 21 -26 36 -34 60 -34 84 0 85 66 1 200 -83 133 -103 153 -151 153 -32 0 -41 -5 -58 -32z")
        }
    
        //RightArmPointData
        function RightArmPolyPD(x,y){
            return (""+x+" "+y+", -2493.000 -4201.000, -2715.000 -4526.000, -2740.000 -4750.000, -2658.000 -4890.000, -2650.000 -4903.000, -2602.000 -4939.000, -2512.000 -4950.000, -2191.000 -4464.000, -2056.000 -3931.000, -2169.000 -3881.000, -2250.000 -3895.000")
        }
    
        //RightArmPointData
        function RightArmLinePD(x,y){
            return ("M"+x+" "+y+" c-30 -11 -65 -56 -243 -306 -115 -162 -214 -308 -222 -325 -27 -65 -39 -167 -25 -224 12 -51 65 -140 82 -140 4 0 8 -6 8 -13 0 -8 22 -24 48 -36 44 -20 53 -22 90 -11 76 23 106 68 321 486 242 472 238 453 135 533 -59 45 -72 51 -113 50 -25 -1 -62 -7 -81 -14z m140 -50 c16 -8 38 -28 50 -45 l21 -30 -19 -55 c-29 -80 -389 -749 -422 -785 -15 -16 -38 -30 -50 -30 -29 0 -107 55 -124 88 -26 51 -48 159 -37 181 6 11 11 30 11 43 0 13 83 143 200 313 174 253 205 293 242 312 51 26 89 28 128 8z")
        }
    
        //RightHandPointData
        function RightHandPolyPD(x,y){
            return (""+x+" "+y+", -3769.000 -4392.000, -3817.000 -4733.000, -3662.000 -4840.000, -3381.000 -4869.000, -2859.000 -4940.000, -2634.000 -4970.000, -2476.000 -4908.000, -2462.000 -4733.000, -2537.000 -4581.000, -2693.000 -4543.000, -2902.000 -4519.000, -3062.000 -4489.000, -3353.000 -4391.000, -3594.000 -4325.000, -3700.000 -4350.000")
        }
    
        //RightHandLinePointData
        function RightHandLinePD(x,y){
            return ("M"+x+" "+y+" c-33 -16 -64 -35 -69 -42 -53 -69 -81 -271 -48 -341 22 -47 71 -81 155 -107 53 -17 106 -23 281 -29 230 -9 335 -24 522 -71 97 -25 138 -30 225 -30 114 1 129 7 158 63 l14 26 -28 -13 c-46 -24 -230 -13 -332 19 -155 49 -288 67 -530 75 -256 9 -317 21 -371 77 -31 32 -32 36 -31 115 1 71 4 86 28 121 38 54 44 55 44 9 0 -27 7 -48 20 -61 26 -26 103 -60 137 -60 64 0 61 48 -4 75 -85 36 -96 74 -28 94 49 14 108 5 167 -25 15 -8 63 -27 105 -43 43 -16 110 -41 148 -56 55 -22 91 -28 170 -31 55 -2 136 -9 180 -16 44 -6 127 -12 185 -12 l106 -1 -26 20 c-14 11 -32 26 -41 33 -10 8 -62 15 -130 18 -63 2 -157 13 -209 24 -52 10 -124 24 -160 30 -61 11 -183 52 -291 98 -59 25 -180 58 -241 66 -38 4 -56 0 -106 -25z")
        }
    
        //LeftYArmPointData
        function LeftYArmPolyPD(x,y){
            return (""+x+" "+y+", -1493.000 -4201.000, -1715.000 -4526.000, -1740.000 -4750.000, -1658.000 -4890.000, -1650.000 -4903.000, -1602.000 -4939.000, -1512.000 -4950.000, -1191.000 -4464.000, -1056.000 -3931.000, -1169.000 -3881.000, -1250.000 -3895.000")
        }
    
        //LeftYArmPointData
        function LeftYArmLinePD(x,y){
            return ("M"+x+" "+y+" c-30 -11 -65 -56 -243 -306 -115 -162 -214 -308 -222 -325 -27 -65 -39 -167 -25 -224 12 -51 65 -140 82 -140 4 0 8 -6 8 -13 0 -8 22 -24 48 -36 44 -20 53 -22 90 -11 76 23 106 68 321 486 242 472 238 453 135 533 -59 45 -72 51 -113 50 -25 -1 -62 -7 -81 -14z m140 -50 c16 -8 38 -28 50 -45 l21 -30 -19 -55 c-29 -80 -389 -749 -422 -785 -15 -16 -38 -30 -50 -30 -29 0 -107 55 -124 88 -26 51 -48 159 -37 181 6 11 11 30 11 43 0 13 83 143 200 313 174 253 205 293 242 312 51 26 89 28 128 8z")
        }
    
        //LeftYHandPointData
        function LeftYHandPolyPD(x,y){
            return (""+x+" "+y+", -2769.000 -4392.000, -2817.000 -4733.000, -2662.000 -4840.000, -2381.000 -4869.000, -1859.000 -4940.000, -1634.000 -4970.000, -1476.000 -4908.000, -1462.000 -4733.000, -1537.000 -4581.000, -1693.000 -4543.000, -1902.000 -4519.000, -2062.000 -4489.000, -2353.000 -4391.000, -2594.000 -4325.000, -2700.000 -4350.000")
        }
    
        //LeftYHandLinePointData
        function LeftYHandLinePD(x,y){
            return ("M"+x+" "+y+" c-33 -16 -64 -35 -69 -42 -53 -69 -81 -271 -48 -341 22 -47 71 -81 155 -107 53 -17 106 -23 281 -29 230 -9 335 -24 522 -71 97 -25 138 -30 225 -30 114 1 129 7 158 63 l14 26 -28 -13 c-46 -24 -230 -13 -332 19 -155 49 -288 67 -530 75 -256 9 -317 21 -371 77 -31 32 -32 36 -31 115 1 71 4 86 28 121 38 54 44 55 44 9 0 -27 7 -48 20 -61 26 -26 103 -60 137 -60 64 0 61 48 -4 75 -85 36 -96 74 -28 94 49 14 108 5 167 -25 15 -8 63 -27 105 -43 43 -16 110 -41 148 -56 55 -22 91 -28 170 -31 55 -2 136 -9 180 -16 44 -6 127 -12 185 -12 l106 -1 -26 20 c-14 11 -32 26 -41 33 -10 8 -62 15 -130 18 -63 2 -157 13 -209 24 -52 10 -124 24 -160 30 -61 11 -183 52 -291 98 -59 25 -180 58 -241 66 -38 4 -56 0 -106 -25z")
        }
    
        //RightArmPointData
        function RightLegPolyPD(x,y){
            return (""+x+" "+y+", -1476.000 6583.000, -1521.000 6539.000, -1543.000 6484.000, -1578.000 6360.000, -1601.000 5625.000, -1591.000 5499.000, -1490.000 5314.000, -1232.000 5226.000, -1036.000 5255.000, -861.000 5422.000, -850.000 5461.000, -795.000 5665.000, -768.000 5759.000, -758.000 6117.000, -760.000 6460.000, -793.000 6515.000, -964.000 6641.000, -1149.000 6669.000, -1296.000 6663.000")
        }
    
        //RightArmPointData
        function RightLegLinePD(x,y){
            return ("M"+x+" "+y+" c-81 -21 -142 -48 -180 -80 -25 -20 -45 -40 -45 -44 0 -3 -10 -28 -22 -55 -12 -27 -28 -83 -35 -124 -17 -105 -34 -648 -23 -735 5 -38 9 -95 10 -126 0 -64 29 -118 101 -185 87 -81 105 -87 258 -88 132 -1 138 0 196 29 66 33 175 137 175 167 0 11 5 28 11 39 14 27 35 105 55 204 9 44 21 86 27 94 9 10 11 109 10 358 l-2 343 -33 55 c-33 56 -37 59 -171 126 -55 28 -63 29 -185 28 -70 -1 -136 -4 -147 -6z m250 -68 c79 -21 155 -64 183 -105 22 -32 22 -38 21 -334 0 -332 -3 -366 -48 -576 -31 -140 -33 -147 -74 -188 -62 -64 -113 -90 -200 -104 -62 -9 -88 -9 -130 1 -98 24 -173 83 -218 170 l-22 43 6 399 c8 446 16 531 57 587 70 97 269 147 425 107z")
        }
    
        //RightHandPointData
        function RightFootPolyPD(x,y){
            return (""+x+" "+y+", -1430.000 -6198.000, -1533.000 -6272.000, -1570.000 -6480.000, -1588.000 -6719.000, -1532.000 -7297.000, -1387.000 -7543.000, -1320.000 -7585.000, -1002.000 -7668.000, -822.000 -7630.000, -837.000 -7446.000, -891.000 -7282.000, -868.000 -6868.000, -828.000 -6571.000, -806.000 -6407.000, -846.000 -6246.000, -1053.000 -6164.000, -1325.000 -6163.000")
        }
    
        //RightHandLinePointData
        function RightFootLinePD(x,y){
            return ("M"+x+" "+y+" c-18 -4 -65 -20 -105 -35 -64 -23 -76 -32 -103 -74 -30 -47 -31 -52 -37 -208 -4 -87 -12 -195 -18 -239 -21 -161 5 -430 56 -578 36 -103 109 -227 145 -246 16 -8 46 -27 67 -42 46 -33 202 -73 318 -83 93 -8 157 5 180 38 25 35 19 108 -15 184 -16 38 -41 111 -54 164 -28 112 -26 157 23 414 16 88 34 222 40 297 6 76 16 150 22 164 15 41 -8 133 -40 161 -35 30 -132 68 -207 82 -68 12 -222 13 -272 1z m289 -84 c78 -18 147 -60 155 -93 7 -27 -10 -235 -26 -328 -5 -27 -12 -77 -16 -110 -3 -33 -16 -76 -28 -95 -20 -33 -21 -46 -19 -230 2 -205 11 -256 62 -373 25 -58 27 -102 5 -111 -57 -22 -301 17 -375 60 -63 37 -124 125 -197 284 -48 102 -58 299 -32 580 6 58 10 144 10 191 0 125 6 146 51 176 64 42 143 62 254 62 55 1 125 -5 156 -13z")
        }
    
        //LeftYArmPointData
        function LeftYLegPolyPD(x,y){
            return (""+x+" "+y+", 1685.000 6583.000, 1640.000 6539.000, 1618.000 6484.000, 1583.000 6360.000, 1560.000 5625.000, 1570.000 5499.000, 1671.000 5314.000, 1929.000 5226.000, 2125.000 5255.000, 2300.000 5422.000, 2311.000 5461.000, 2366.000 5665.000, 2393.000 5759.000, 2403.000 6117.000, 2401.000 6460.000, 2368.000 6515.000, 2197.000 6641.000, 2012.000 6669.000, 1865.000 6663.000")
        }
    
        //LeftYArmPointData
        function LeftYLegLinePD(x,y){
            return ("M"+x+" "+y+" c-81 -21 -142 -48 -180 -80 -25 -20 -45 -40 -45 -44 0 -3 -10 -28 -22 -55 -12 -27 -28 -83 -35 -124 -17 -105 -34 -648 -23 -735 5 -38 9 -95 10 -126 0 -64 29 -118 101 -185 87 -81 105 -87 258 -88 132 -1 138 0 196 29 66 33 175 137 175 167 0 11 5 28 11 39 14 27 35 105 55 204 9 44 21 86 27 94 9 10 11 109 10 358 l-2 343 -33 55 c-33 56 -37 59 -171 126 -55 28 -63 29 -185 28 -70 -1 -136 -4 -147 -6z m250 -68 c79 -21 155 -64 183 -105 22 -32 22 -38 21 -334 0 -332 -3 -366 -48 -576 -31 -140 -33 -147 -74 -188 -62 -64 -113 -90 -200 -104 -62 -9 -88 -9 -130 1 -98 24 -173 83 -218 170 l-22 43 6 399 c8 446 16 531 57 587 70 97 269 147 425 107z")
        }
    
        //LeftYHandPointData
        function LeftYFootPolyPD(x,y){
            return (""+x+" "+y+", -2230.000 -6198.000, -2333.000 -6272.000, -2370.000 -6480.000, -2388.000 -6719.000, -2332.000 -7297.000, -2187.000 -7543.000, -2120.000 -7585.000, -1802.000 -7668.000, -1622.000 -7630.000, -1637.000 -7446.000, -1691.000 -7282.000, -1668.000 -6868.000, -1628.000 -6571.000, -1606.000 -6407.000, -1646.000 -6246.000, -1853.000 -6164.000, -2125.000 -6163.000")
        }
    
        //LeftYHandLinePointData
        function LeftYFootLinePD(x,y){
            return ("M"+x+" "+y+" c-18 -4 -65 -20 -105 -35 -64 -23 -76 -32 -103 -74 -30 -47 -31 -52 -37 -208 -4 -87 -12 -195 -18 -239 -21 -161 5 -430 56 -578 36 -103 109 -227 145 -246 16 -8 46 -27 67 -42 46 -33 202 -73 318 -83 93 -8 157 5 180 38 25 35 19 108 -15 184 -16 38 -41 111 -54 164 -28 112 -26 157 23 414 16 88 34 222 40 297 6 76 16 150 22 164 15 41 -8 133 -40 161 -35 30 -132 68 -207 82 -68 12 -222 13 -272 1z m289 -84 c78 -18 147 -60 155 -93 7 -27 -10 -235 -26 -328 -5 -27 -12 -77 -16 -110 -3 -33 -16 -76 -28 -95 -20 -33 -21 -46 -19 -230 2 -205 11 -256 62 -373 25 -58 27 -102 5 -111 -57 -22 -301 17 -375 60 -63 37 -124 125 -197 284 -48 102 -58 299 -32 580 6 58 10 144 10 191 0 125 6 146 51 176 64 42 143 62 254 62 55 1 125 -5 156 -13z")
        }
    
    //Object functions
        //Create Standard Process answer
        function Standard_Process_Answer(){
            var ans =  {}
                ans.Line = []
                ans.Poly = []
                ans.Data = []
                ans.Elli = []
            return ans
        }
    //Helper functions
        //make polygon in to equation
        function polygonEquation(text,x,y){
            //console.log(text)
            var step1 = text.split(',');
            var step2 = []
            //console.log(step1)
            step1.forEach(function(item, index, array) {
                var step2help = []
                step2help = item.split(' ');
                step2.push(step2help)
            })
            //console.log(step2)
            step2.forEach(function(item, index, array) {
                    if(item[0] == ""){
                        item.shift()
                    }
            
            })
            //console.log(ans)
            var ans = []
            step2.forEach(function(item, index, array) {
                var step3help = []
                step3help.push(parseInt(x) - parseInt(item[0]))
                step3help.push(parseInt(y) - parseInt(item[1]))
                ans.push(step3help)
            })
            console.log("PolygonEquation : ",ans.join(" ")) 
        }
        
        //Solves polygon equation
        function polygonSolver(text,x,y){
            var step1 = text.split(' ');
            var step2 = []
            step1.forEach(function(item, index, array) {
                var step2help = []
                step2help = item.split(',');
                step2.push(step2help)
            })  
            var step3 = []
            step2.forEach(function(item, index, array) {
                var step3help = []
                step3help.push(parseInt(x) - parseInt(item[0]))
                step3help.push(parseInt(y) - parseInt(item[1]))
                step3.push(step3help)
            })  
            step4 = step3.join("_")
            step4 = step4.replaceAll(',', ' ')
            step4 = step4.replaceAll('_', ',')
            return step4
        }
    
    //    var TestChar = {} 
//        TestChar.name = "john";
//        TestChar.FullChar = FullChar;
//        TestChar.UpperBody = UpperBody;
//        
//    d3.select("#LeftYFoot_"+name)
//        .transition()
//        .duration(1000)
//      	.style("transform", "rotate(280deg)")
//        .delay(2100)
//        .transition()
//        .duration(1000)
//      	.style("transform", "rotate(80deg)")
//        .delay(200)
//        .transition()
//        .duration(1000)
//      	.style("transform", "rotate(280deg)")
//        .delay(200)
//        .transition()
//        .duration(1000)
//      	.style("transform", "rotate(80deg)")
//        .delay(200)
//    
//     d3.select("#LeftYFootOutLine_"+name)
//        .transition()
//        .duration(10000)
//      	.style("transform", "scale(1,1) translate(0,0) rotate(100deg)")
//        .delay(2000)
//        .transition()
//        .duration(10000)
//        .attr("d", "M-2300 0 c-22 -4 -67 -13 -101 -19 -33 -6 -82 -18 -110 -26 -27 -8 -58 -15 -69 -15 -11 0 -42 -11 -70 -24 -27 -13 -99 -47 -159 -75 -61 -29 -178 -95 -262 -147 -130 -81 -170 -113 -281 -222 -104 -102 -146 -153 -216 -259 -104 -157 -125 -201 -165 -354 -51 -188 -62 -282 -62 -509 1 -310 22 -520 79 -761 l17 -76 -48 -23 c-94 -45 -130 -112 -132 -245 l-1 -90 49 -82 c97 -165 242 -263 400 -271 l81 -4 40 -60 c42 -63 117 -134 206 -194 112 -76 517 -201 729 -224 58 -7 148 -19 200 -27 92 -15 359 -30 625 -34 104 -2 158 3 270 24 77 14 175 29 218 32 168 14 387 90 492 170 89 68 237 209 279 265 67 90 86 120 86 136 0 8 9 32 20 54 29 56 29 269 0 388 -33 139 -26 328 21 554 22 101 21 116 0 363 -17 184 -42 347 -66 422 -13 43 -31 110 -40 148 -9 39 -39 128 -67 199 -86 217 -212 376 -438 551 -106 82 -397 221 -700 336 -47 17 -91 36 -97 41 -7 6 -54 21 -105 35 -85 23 -114 25 -338 28 -135 2 -263 0 -285 -5z m461 -90 c71 -6 154 -17 184 -26 63 -18 246 -84 335 -121 120 -50 430 -207 474 -240 90 -68 252 -236 306 -317 50 -77 135 -235 135 -253 0 -4 6 -20 14 -34 15 -30 59 -169 77 -244 6 -27 15 -59 20 -70 4 -11 10 -36 13 -55 37 -235 40 -265 39 -470 0 -145 -5 -246 -16 -310 -33 -199 -32 -300 3 -550 9 -61 -3 -171 -26 -240 -38 -115 -202 -319 -323 -401 -90 -62 -213 -111 -346 -139 -33 -6 -70 -16 -83 -21 -13 -5 -35 -9 -49 -9 -15 0 -40 -4 -57 -9 -97 -30 -545 -54 -756 -41 -279 17 -385 26 -395 32 -6 3 -62 13 -126 22 -215 30 -474 116 -596 198 -23 15 -45 28 -50 28 -21 1 -196 188 -222 238 -14 26 -33 28 -52 6 -11 -14 -26 -15 -89 -10 -41 4 -95 16 -120 27 -46 21 -160 124 -160 146 0 6 -6 16 -14 20 -20 12 -73 131 -80 181 -9 62 8 115 49 151 49 43 79 48 129 23 22 -12 53 -31 68 -43 15 -12 33 -19 42 -16 30 12 16 45 -39 94 -51 44 -58 55 -85 139 -41 129 -69 301 -82 499 -18 303 -1 581 42 680 5 11 14 45 21 75 7 30 16 59 21 65 4 5 8 17 8 26 0 57 192 355 284 441 145 136 213 190 317 255 97 60 255 143 272 143 3 0 35 14 72 31 79 36 150 59 187 59 15 0 30 5 33 10 3 6 21 10 38 11 18 0 59 6 92 14 73 16 314 19 491 5z")
    
    
}
mainFunction()