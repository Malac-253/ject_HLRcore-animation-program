//main function for the success of GreenTree

function mainFunction(){
    
    
    
    var FSTS = d3.select("#Full_SVG_Test_Space")
    
    var name = "john";
    
    var Char = {}
    Char.element = null; 
    Char.data = {};
    Char.data.id = ("FullChar_"+name);
    Char.data.origX = 1600;
    Char.data.origY = 5475;
    Char.data.scalX = 0.5;
    Char.data.scalY = 0.5;
    Char.data.tranX = 0;
    Char.data.tranY = 0;
    Char.data.rotat = 0;
    
    ChibiBuilder(FSTS,"john",TestChar)
    
    function ChibiBuilder(FSTS,name,Char){
        
        TestChar.name = name;

        //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
        var FullChar = element_group(FSTS,("FullChar_"+name),1600,5475,0.5,0.5,0,0,0)
        
        Char.element = FullChar; 
        Char.data = {};
        Char.data.id = ("FullChar_"+name);
        Char.data.origX = 1600;
        Char.data.origY = 5475;
        Char.data.scalX = 0.5;
        Char.data.scalY = 0.5;
        Char.data.tranX = 0;
        Char.data.tranY = 0;
        Char.data.rotat = 0;

        //Making Body parts by Half
    
        //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
        var UpperBody = element_group(FullChar,("UpperBody_"+name),1600,5475,1,1,0,0,0)
        TestChar.UpperBody = {};
        TestChar.UpperBody.Element = {};

            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            var FullHead = element_group(UpperBody,("FullHead_"+name),1600,3750,1,1,0,0,0)
    
                var Head = body_head(FullHead,name)
                
                //var FullEyes = body_eyes(FullHead,name,1,1)
        
                //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
                var FullEyes= element_group(FullHead,("FullEyes_"+name),1600,3750,1,1,0,90,0)
    
                    element_linearGradient(FullEyes,("mideyesLinColorGradient_"+name),0,0,0,100,0,"#cc6ab1",1,100,"#fdfeec",1)
                    //element_linearGradient(Outparent,id,x1,y1,x2,y2,ofst1,fill1,opac1,ofst2,fill2,opac2)

                    element_radialGradient(FullEyes,("PueyesRadColorGradient_"+name),0,"#b178ff",1,100,"#fccbf4",1)
                    //element_radialGradientt(Outparent,id,ofst1,fill1,opac1,ofst2,fill2,opac2)
    
                    //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
                    var LeftYEyes = element_group(FullEyes,("LeftYEyes_"+name),1600,3750,1,0.9,0,0,0)
                        
                        //Make the Eyes
                        var point_X = "860"; var point_Y = "-2000";
                        element_polygon(LeftYEyes,("LeftYEyesPoly_"+name),EyesPolyPD(point_X,point_Y),-0.8,0.8,0,0,180,"White","Black",0)
                        //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                    
                        element_ellipse(LeftYEyes,("LeftYEyeMElli_"+name),750,2000,300,390,"url(#mideyesLinColorGradient_"+name+")","black",35)
                        //element_ellipse(Outparent,id,cx,cy,rx,ry,fill,stroke,strokW)
    
                        element_ellipse(LeftYEyes,("LeftYEyeGElli_"+name),550,1900,120,90,"white","black",0)
                        //element_ellipse(Outparent,id,cx,cy,rx,ry,fill,stroke,strokW)
    
                        element_ellipse(LeftYEyes,("LeftYEyePElli_"+name),740,2000,130,190,"url(#PueyesRadColorGradient_"+name+")","black",5)
                        //element_ellipse(Outparent,id,cx,cy,rx,ry,fill,stroke,strokW)
    
                        //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                        element_path(LeftYEyes,("LeftYEyeOutLine_"+name),EyesLinePD(point_X,point_Y),-0.8,0.8,0,0,180,"Black","Black",1)
    
                    
                    //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
                    var RightEyes = element_group(FullEyes,("RightEyes_"+name),1600,3750,1,0.9,1500,0,0)
                        
                        //Right eye look find not flip, by the way
                    
                        //Make the Eyes
                        var point_X = "860"; var point_Y = "-2000";
                        element_polygon(RightEyes,("RightEyesPoly_"+name),EyesPolyPD(point_X,point_Y),0.8,0.8,2000,0,180,"White","Black",0)
                        //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                    
                        element_ellipse(RightEyes,("RightEyeMElli_"+name),770,2000,300,390,"url(#mideyesLinColorGradient_"+name+")","black",35)
                        //element_ellipse(Outparent,id,cx,cy,rx,ry,fill,stroke,strokW)
    
                        element_ellipse(RightEyes,("RightEyeGElli_"+name),570,1900,120,90,"white","black",0)
                        //element_ellipse(Outparent,id,cx,cy,rx,ry,fill,stroke,strokW)
    
                        element_ellipse(RightEyes,("RightEyePElli_"+name),740,2000,130,190,"url(#PueyesRadColorGradient_"+name+")","black",5)
                        //element_ellipse(Outparent,id,cx,cy,rx,ry,fill,stroke,strokW)
    
                        //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                        element_path(RightEyes,("RightEyeOutLine_"+name),EyesLinePD(point_X,point_Y),0.8,0.8,2000,0,180,"Black","Black",1)
                
                //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
                var HairAcce = element_group(FullHead,("HairAndAccess_"+name),1650,3750,1,1,0,90,0)
    
                    element_linearGradient(HairAcce,("hairLinColorGradient_"+name),0,0,0,100,0,"#298acd",1,100,"#fccbf4",1)
                    //element_linearGradient(Outparent,id,x1,y1,x2,y2,ofst1,fill1,opac1,ofst2,fill2,opac2)
    
                    //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
                    var HairBack = element_group(HairAcce,("HairBack_"+name),1650,3750,1,1,0,90,0)
                    
                        //Make the back Hair
                        var point_X = "3795"; var point_Y = "600";
                        element_polygon(HairBack,("HairBackPoly_"+name),HairBackPolyPD(point_X,point_Y),-0.9,0.9,0,0,180,"url(#hairLinColorGradient_"+name+")","Black",0)
                        //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                        
                        //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                        element_path(HairBack,("HairBackOutLine_"+name),HairBackLinePD(point_X,point_Y),-0.9,0.9,0,0,180,"Black","Black",1)
    
    
                        //Make the back Hair Addtional part1
                        var point_X = "3695"; var point_Y = "300";
                        //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                        element_polygon(HairBack,("HairBackA1Poly_"+name),HairBackA1PolyPD(point_X,point_Y),-0.9,0.9,0,0,180,"#f9cdd4","Black",0)
                         //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                        element_path(HairBack,("HairBackA1OutLine_"+name),HairBackA1LinePD(point_X,point_Y),-0.9,0.9,0,0,180,"Black","Black",1)
    
                        //Make the back Hair Addtional part2
                        var point_X = "-100"; var point_Y = "-100";
                        //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                        element_polygon(HairBack,("HairBackA2Poly_"+name),HairBackA2PolyPD(point_X,point_Y),-0.9,0.9,0,0,180,"#f9cdd4","Black",0)
                         //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                        element_path(HairBack,("HairBackA2OutLine_"+name),HairBackA2LinePD(point_X,point_Y),-0.9,0.9,0,0,180,"Black","Black",1)
    
                    //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
                    var HairFront = element_group(HairAcce,("HairFront_"+name),1650,3750,1,1,-300,0,0)
                        
                        //Make the front Hair
                        var point_X = "2450"; var point_Y = "0";
                        //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                        element_polygon(HairFront,("HairFrontPoly_"+name),HairFrontPolyPD(point_X,point_Y),-0.9,0.9,0,0,180,"url(#hairLinColorGradient_"+name+")","Black",0)
                         //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                        element_path(HairFront,("HairFrontOutLine_"+name),HairFrontLinePD(point_X,point_Y),-0.9,0.9,0,0,180,"Black","Black",1)
    

            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            var FullBody = element_group(UpperBody,("FullBody_"+name),1600,3750,1,1,0,0,0)
                //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
                var Body = element_group(FullBody,("Body_"+name),1600,3750,1,1,0,0,0)
                
                    //Make the Body
                    var point_X = "-1899"; var point_Y = "-3750";
                    //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                    element_polygon(Body,("BodyPoly_"+name),BodyPolyPD(point_X,point_Y),1,1,0,0,180,"#fce9db","Black",0)
                     //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                    element_path(Body,("BodyOutLine_"+name),BodyLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)
            
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            var RightArm = element_group(UpperBody,("RightArm_"+name),2150,4050,1,1,0,0,-15)
                
                //Make the Body
                var point_X = "-2250"; var point_Y = "-3895";
                //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                element_polygon(RightArm,("RightUpArmPoly_"+name),RightArmPolyPD(point_X,point_Y),1,1,0,0,180,"#fce9db","Black",0)
                 //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                element_path(RightArm,("RightUpArmOutLine_"+name),RightArmLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)

                //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
                var RightHand = element_group(RightArm,("RightHand_"+name),2600,4750,1,1,0,0,50)
                
                    //Make the Body
                    var point_X = "-3700"; var point_Y = "-4350";
                    //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                    element_polygon(RightHand,("RightHandPoly_"+name),RightHandPolyPD(point_X,point_Y),1,1,0,0,180,"#fce9db","Black",0)
                     //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                    element_path(RightHand,("RightHandOutLine_"+name),RightHandLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)
    
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            var LeftYArm = element_group(UpperBody,("LeftYArm_"+name),1150,4050,1,1,0,0,90)
                
                //Make the Body
                var point_X = "-1250"; var point_Y = "-3895";
                //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                element_polygon(LeftYArm,("LeftYUpArmPoly_"+name),LeftYArmPolyPD(point_X,point_Y),1,1,0,0,180,"#fce9db","Black",0)
                 //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                element_path(LeftYArm,("LeftYUpArmOutLine_"+name),LeftYArmLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)

                //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
                var LeftYHand = element_group(LeftYArm,("LeftYHand_"+name),2600,4750,1,1,0,0,00)
                
                    //Make the Body
                    var point_X = "-2700"; var point_Y = "-4350";
                    //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                    element_polygon(LeftYHand,("LeftYHandPoly_"+name),LeftYHandPolyPD(point_X,point_Y),1,1,0,0,180,"#fce9db","Black",0)
                     //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                    element_path(LeftYHand,("LeftYHandOutLine_"+name),LeftYHandLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)
            
        //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
        LowerBody = element_group(FullChar,("LowerBody_"+name),1600,5475,1,1,0,0,0)
    
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            var RightLeg = element_group(LowerBody,("RightLeg_"+name),1200,5475,1,1,0,0,0)
    
                //Make the leg
                var point_X = "-1296"; var point_Y = "6663";
                //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                element_polygon(RightLeg,("RightLegPoly_"+name),RightLegPolyPD(point_X,point_Y),-1,1,0,0,0,"#fce9db","Black",0)
                 //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                element_path(RightLeg,("RightLegOutLine_"+name),RightLegLinePD(point_X,point_Y),-1,1,0,0,0,"Black","Black",1)

                //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
                var RightFoot = element_group(RightLeg,("RightFoot_"+name),1200,6475,1,1,-20,0,00)
                
                    //Make the Body
                    var point_X = "-1325"; var point_Y = "-6163";
                    //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                    element_polygon(RightFoot,("RightFootPoly_"+name),RightFootPolyPD(point_X,point_Y),1,1,0,0,180,"#fce9db","Black",0)
                     //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                    element_path(RightFoot,("RightFootOutLine_"+name),RightFootLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)
    
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            var LeftYLeg = element_group(LowerBody,("LeftYLeg_"+name),2000,5475,1,1,0,0,0)
    
                //Make the leg
                var point_X = "1865"; var point_Y = "6663";
                //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                element_polygon(LeftYLeg,("LeftYLegPoly_"+name),LeftYLegPolyPD(point_X,point_Y),1,1,0,0,0,"#fce9db","Black",0)
                 //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                element_path(LeftYLeg,("LeftYLegOutLine_"+name),LeftYLegLinePD(point_X,point_Y),1,1,0,0,0,"Black","Black",1)

                //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
                var LeftYFoot = element_group(LeftYLeg,("LeftYFoot_"+name),2000,6475,1,1,0,0,0)
                
                    //Make the Body
                    var point_X = "-2125"; var point_Y = "-6163";
                    //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
                    element_polygon(LeftYFoot,("LeftYFootPoly_"+name),LeftYFootPolyPD(point_X,point_Y),1,1,0,0,180,"#fce9db","Black",0)
                     //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)-
                    element_path(LeftYFoot,("LeftYFootOutLine_"+name),LeftYFootLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)
            
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
    
    //Function to make BodyParts elements
    
        //function to make the basic Head shape
        function body_head(Outparent,name,charData){
            
            //Needs to be a function to take care of this in the future, and the point for the poly
            
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            var Head = element_group(Outparent,("Head_"+name),1600,3750,1,1,0,90,0)
                
            //Make The Head
            var point_X = "-2300"; 
            var point_Y = "0";
            //element_polygon(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
            element_polygon(Head,("HeadPoly_"+name),HeadPolyPD(point_X,point_Y),1,1,0,0,180,"#fce9db","Black",0)
            //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
            element_path(Head,("HeadLine_"+name),HeadLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)

            //Make the Ear
            var point_X = "-3650"; var point_Y = "-2750";
            //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,stroke,strokW)
            element_path(Head,("EarLine_"+name),EarLinePD(point_X,point_Y),1,1,0,0,180,"Black","Black",1)
            
            return Head
        }
    
        //function to make the basic Head shape
        function body_eyes(Outparent,name,charData){
            
            //Makeing Eye Group
            //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            var FullEyes= element_group(Outparent,("FullEyes_"+name),1600,3750,1,1,0,90,0)
            
            
            
            
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
        function element_linearGradient(Outparent,id,x1,y1,x2,y2,ofst1,fill1,opac1,ofst2,fill2,opac2){
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
                
            //style_options1
                //style_fill
                var style_fill1 = (" stop-color:" + fill1 +"; ")
                //console.log("style_fill1",style_fill1)

                //style_opac1
                var style_opac1 = (" stop-opacity:" + opac1 +"; ")
                //console.log("style_opac1",style_opac1)

            //style_options1_code
            var styl_cod1 = (style_fill1 + style_opac1)
            //console.log("styl_cod1",styl_cod1)
            
            //style_options2
                //style_fill
                var style_fill2 = (" stop-color:" + fill2 +"; ")
                //console.log("style_fill2",style_fill2)

                //style_opac1
                var style_opac2 = (" stop-opacity:" + opac2 +"; ")
                //console.log("style_opac2",style_opac2)

            //style_options1_code
            var styl_cod2 = (style_fill2 + style_opac2)
            //console.log("styl_cod1",styl_cod2)
            
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
            
            d3.select("#" + id) 
            .append("stop")
            .attr("offset",(ofst1+"%"))
            .attr("style",styl_cod1);
            
            d3.select("#" + id) 
            .append("stop")
            .attr("offset",(ofst2+"%"))
            .attr("style",styl_cod2)

            return d3.select("#" + id)  
        }
    
        //Function to make SVG_linearGradient element
        function element_radialGradient(Outparent,id,ofst1,fill1,opac1,ofst2,fill2,opac2){
        //element_radialGradientt(Outparent,id,ofst1,fill1,opac1,ofst2,fill2,opac2)
            //style_options1
                //style_fill
                var style_fill1 = (" stop-color:" + fill1 +"; ")
                //console.log("style_fill1",style_fill1)

                //style_opac1
                var style_opac1 = (" stop-opacity:" + opac1 +"; ")
                //console.log("style_opac1",style_opac1)

            //style_options1_code
            var styl_cod1 = (style_fill1 + style_opac1)
            //console.log("styl_cod1",styl_cod1)
            
            //style_options2
                //style_fill
                var style_fill2 = (" stop-color:" + fill2 +"; ")
                //console.log("style_fill2",style_fill2)

                //style_opac1
                var style_opac2 = (" stop-opacity:" + opac2 +"; ")
                //console.log("style_opac2",style_opac2)

            //style_options1_code
            var styl_cod2 = (style_fill2 + style_opac2)
            //console.log("styl_cod1",styl_cod2)
            
            //Creating the elememt
            Outparent
            .append("defs")
            .attr("id",("defs_"+id))
            .append("radialGradient")
            .attr("id",id);
            
            d3.select("#" + id) 
            .append("stop")
            .attr("offset",(ofst1+"%"))
            .attr("style",styl_cod1);
            
            d3.select("#" + id) 
            .append("stop")
            .attr("offset",(ofst2+"%"))
            .attr("style",styl_cod2)

            return d3.select("#" + id)  
        }
    
        //Function to make SVG_ellipse element
        function element_ellipse(Outparent,id,cx,cy,rx,ry,fill,stroke,strokW){
        //element_ellipse(Outparent,id,cx,cy,rx,ry,fill,stroke,strokW)
            
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
            .attr("style",style_cod);
            
            return d3.select("#" + id)  
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
    
        //EyesPolyPointData
        function EyesPolyPD(x,y){
            return (""+x+" "+y+", 261.000 -2303.000, 227.000 -2339.000, 255.000 -2427.000, 494.000 -2859.000, 527.000 -2921.000, 525.000 -2949.000, 982.000 -3011.000, 1277.000 -3018.000, 1513.000 -2990.000, 1695.000 -2840.000, 1765.000 -2532.000, 1752.000 -2463.000, 1726.000 -2417.000, 1604.000 -2212.000, 1278.000 -2039.000, 1040.000 -1994.000, 860.000 -2000.000")
        }
    
        //EyesLinePointData
        function EyesLinePD(x,y){
            return ("M"+x+" "+y+" c-200 -28 -465 -162 -599 -303 l-34 -36 28 -88 c55 -178 147 -343 245 -438 l52 -50 -47 94 c-60 121 -103 253 -115 355 -11 95 -20 82 135 189 218 150 467 192 724 122 120 -32 192 -71 287 -154 42 -36 103 -88 137 -116 l60 -50 -6 50 c-11 79 -51 148 -123 213 -83 75 -173 123 -326 173 -111 37 -135 42 -238 45 -63 1 -144 -1 -180 -6z")
        }
    
        //HairBackPolyPointData
        function HairBackPolyPD(x,y){
            return (""+x+" "+y+", 2986.000 109.000, 2888.000 22.000, 2821.000 29.000, 2720.000 44.000, 2224.000 84.000, 1660.000 44.000, 1515.000 14.000, 1360.000 -22.000, 1200.000 -66.000, 1045.000 -119.000, 968.000 -151.000, 940.000 -165.000, 915.000 -184.000, 844.000 -161.000, 785.000 -126.000, 696.000 -86.000, 607.000 -48.000, 565.000 -39.000, -267.000 161.000, -390.000 167.000, -391.000 103.000, -95.000 -1055.000, -45.000 -1496.000, -290.000 -3021.000, -374.000 -3471.000, -460.000 -3673.000, -489.000 -3746.000, -278.000 -3636.000, -226.000 -3596.000, -220.000 -3625.000, -61.000 -4047.000, 22.000 -4013.000, 16.000 -3956.000, 61.000 -4018.000, 464.000 -4372.000, 588.000 -4399.000, 545.000 -4302.000, 406.000 -4026.000, 350.000 -3891.000, 245.000 -3301.000, 295.000 -2886.000, 371.000 -2526.000, 425.000 -2216.000, 608.000 -1568.000, 620.000 -1579.000, 688.000 -1599.000, 840.000 -1615.000, 1017.000 -1631.000, 1116.000 -1620.000, 1340.000 -1146.000, 1377.000 -1111.000, 1466.000 -1370.000, 1517.000 -1555.000, 1594.000 -1574.000, 1686.000 -1291.000, 1785.000 -1343.000, 1836.000 -1435.000, 1916.000 -1213.000, 2015.000 -991.000, 2105.000 -1183.000, 2181.000 -1380.000, 2244.000 -1275.000, 2386.000 -1300.000, 2435.000 -1434.000, 2470.000 -1411.000, 2530.000 -1408.000, 2704.000 -1535.000, 2934.000 -1750.000, 3091.000 -2265.000, 3099.000 -3091.000, 2889.000 -3642.000, 2830.000 -3754.000, 2928.000 -3735.000, 3045.000 -3701.000, 3146.000 -3691.000, 3197.000 -3684.000, 3188.000 -3752.000, 2926.000 -4378.000, 2926.000 -4413.000, 3280.000 -4228.000, 3625.000 -3891.000, 3686.000 -3874.000, 3707.000 -3986.000, 3785.000 -3952.000, 3873.000 -3923.000, 3917.000 -3896.000, 3955.000 -3847.000, 4098.000 -3708.000, 4228.000 -3590.000, 4249.000 -3639.000, 4403.000 -3882.000, 4509.000 -3793.000, 4540.000 -3428.000, 4552.000 -3375.000, 4605.000 -3425.000, 4964.000 -3616.000, 5126.000 -3621.000, 5080.000 -3549.000, 4891.000 -3236.000, 4732.000 -2821.000, 4819.000 -2847.000, 5113.000 -2893.000, 5069.000 -2811.000, 4707.000 -2351.000, 4585.000 -2017.000, 4453.000 -1426.000, 4443.000 -1388.000, 4231.000 -897.000, 4179.000 -812.000, 4191.000 -727.000, 4181.000 -163.000, 3956.000 525.000, 3795.000 600.000")
        }
    
        //HairBackLinePointData
        function HairBackLinePD(x,y){
            return ("M"+x+" "+y+" c-253 -104 -629 -333 -809 -491 l-98 -87 -67 7 c-36 3 -82 10 -101 15 -59 15 -370 40 -496 40 -139 0 -499 -26 -564 -40 -25 -5 -90 -19 -145 -30 -55 -10 -125 -27 -155 -36 -30 -9 -102 -29 -160 -44 -58 -15 -127 -39 -155 -53 -27 -14 -62 -29 -77 -32 -16 -4 -28 -10 -28 -14 0 -4 -11 -13 -25 -19 -22 -10 -31 -8 -71 23 -25 19 -52 35 -59 35 -7 0 -48 18 -89 40 -42 23 -82 40 -89 38 -7 -1 -25 2 -42 9 -286 109 -622 190 -832 200 l-123 6 -1 -64 c-7 -350 99 -767 296 -1158 76 -152 75 -145 50 -441 -41 -483 -105 -886 -245 -1525 -53 -240 -80 -386 -84 -450 -4 -62 -34 -132 -86 -202 -41 -53 -49 -73 -29 -73 26 0 168 75 211 110 25 22 49 40 52 40 3 0 6 -13 6 -29 0 -140 73 -332 159 -422 73 -76 99 -65 83 34 -5 31 -8 57 -6 57 1 0 21 -28 45 -62 106 -157 241 -275 403 -354 99 -49 111 -51 124 -27 7 12 -3 36 -43 97 -64 99 -91 153 -139 276 -21 52 -46 113 -56 135 -55 117 -97 354 -105 590 -7 189 5 282 50 415 33 96 51 181 76 360 10 80 35 219 54 310 42 204 166 642 183 648 6 2 12 -3 12 -11 0 -10 18 -16 68 -20 37 -4 105 -11 152 -16 47 -5 127 -13 177 -16 85 -7 93 -6 99 11 9 26 200 430 224 474 11 20 27 35 37 35 23 0 42 -57 89 -259 18 -82 42 -165 51 -185 22 -44 54 -52 77 -19 16 22 75 204 92 283 15 68 41 55 99 -52 l51 -92 80 222 c66 184 83 222 99 222 16 0 32 -34 90 -192 38 -105 73 -194 76 -197 3 -3 31 44 63 105 78 149 85 147 142 -25 24 -71 46 -131 49 -134 3 -3 18 7 35 23 29 28 60 29 60 3 0 -26 67 -75 174 -127 129 -62 181 -111 230 -215 53 -110 92 -237 157 -515 89 -377 90 -488 8 -826 -62 -252 -113 -388 -210 -551 -32 -55 -59 -106 -59 -112 0 -19 26 -14 98 19 42 20 86 32 117 34 28 1 73 5 101 10 l51 7 -9 -68 c-22 -165 -136 -438 -262 -626 -18 -27 -18 -28 0 -35 25 -9 231 99 354 185 114 81 278 241 345 337 69 100 68 99 61 17 -8 -81 -2 -112 21 -112 9 0 44 15 78 34 43 23 70 32 88 29 22 -4 30 0 44 27 10 18 27 40 38 49 11 8 76 71 143 139 68 68 126 121 130 118 3 -4 13 -25 21 -49 31 -83 86 -170 154 -243 103 -111 106 -108 106 89 -1 157 8 256 31 365 l12 53 53 -50 c99 -94 219 -158 359 -191 98 -24 154 -26 162 -5 4 9 -14 37 -46 72 -64 72 -150 213 -189 313 -108 272 -162 413 -159 415 2 2 41 -10 87 -26 85 -30 264 -58 294 -46 33 12 17 42 -44 82 -125 82 -259 253 -362 460 -82 164 -105 229 -122 334 -23 143 -113 544 -132 591 -3 8 -8 25 -10 38 -16 95 -130 359 -212 491 l-52 85 12 85 c21 138 16 424 -10 564 -40 222 -131 500 -225 688 -56 113 -62 116 -161 75z m110 -118 c65 -144 112 -268 153 -413 72 -251 77 -292 76 -570 -1 -217 -11 -295 -64 -472 -30 -102 -28 -123 11 -123 21 0 39 36 58 118 7 28 16 54 20 57 11 6 84 -125 135 -245 78 -183 165 -510 222 -837 20 -113 35 -169 71 -251 85 -202 183 -357 306 -487 36 -39 62 -71 57 -73 -16 -6 -117 27 -187 60 -43 21 -94 58 -149 111 -87 82 -116 94 -122 46 -2 -20 10 -37 57 -82 45 -43 70 -79 105 -149 41 -86 124 -290 141 -348 4 -14 20 -51 36 -83 15 -31 26 -57 23 -57 -2 0 6 -19 18 -41 13 -23 27 -50 33 -60 5 -11 13 -19 17 -19 5 0 8 -6 8 -13 0 -8 14 -33 31 -56 17 -24 28 -45 25 -48 -11 -11 -148 41 -213 81 -86 53 -105 69 -155 133 l-40 52 25 76 c26 77 27 99 2 109 -26 9 -44 -20 -78 -129 -56 -173 -89 -395 -81 -545 l3 -64 -25 29 c-33 40 -107 164 -117 195 -16 52 -18 101 -7 154 6 31 15 58 19 61 5 2 21 -21 37 -53 39 -75 67 -82 85 -20 20 70 18 338 -4 430 -64 272 -207 517 -463 791 -396 424 -551 627 -671 877 -33 69 -81 153 -105 188 -55 78 -382 412 -403 412 -9 0 -18 -7 -22 -15 -4 -11 44 -63 155 -170 215 -208 275 -291 356 -492 56 -140 196 -628 220 -767 9 -48 147 -660 153 -676 28 -73 50 -194 48 -265 -4 -137 -52 -227 -164 -308 -63 -46 -199 -113 -246 -121 -11 -2 -40 -9 -65 -16 -84 -23 -83 -23 -39 41 50 73 82 146 112 247 19 67 22 100 21 252 0 179 1 171 -53 390 -25 97 -43 157 -57 177 -7 12 -14 30 -14 38 0 29 -127 485 -165 595 -97 278 -143 333 -352 416 -100 41 -113 49 -113 75 0 14 -11 19 -47 25 -58 8 -83 20 -83 39 0 20 -107 279 -117 282 -5 2 -32 -44 -61 -103 -37 -74 -57 -104 -68 -102 -10 2 -48 81 -102 215 -48 117 -90 213 -93 213 -3 0 -38 -102 -78 -227 -40 -126 -79 -234 -86 -241 -10 -11 -17 -8 -36 20 -13 18 -26 35 -30 38 -3 3 -10 19 -13 36 -4 17 -20 43 -35 58 l-28 27 -54 -217 c-50 -205 -65 -242 -89 -218 -4 5 -48 176 -97 381 l-88 371 -22 -107 c-11 -59 -35 -148 -51 -198 -36 -105 -185 -448 -210 -481 -17 -22 -19 -22 -127 -12 -244 24 -278 33 -316 84 -45 59 -36 289 25 616 20 103 22 127 11 139 -29 30 -43 1 -75 -149 -33 -161 -50 -320 -50 -476 0 -115 -4 -151 -20 -200 -79 -227 -175 -632 -211 -884 -11 -80 -48 -253 -81 -384 -51 -205 -59 -247 -53 -295 3 -31 8 -148 10 -261 4 -193 6 -211 35 -310 17 -58 32 -112 34 -120 11 -39 76 -230 92 -270 11 -25 38 -82 60 -127 23 -46 40 -83 37 -83 -3 0 -35 20 -72 44 -101 68 -222 196 -290 309 -45 74 -95 183 -106 230 -9 40 -18 63 -30 77 -18 21 -49 318 -41 388 8 63 27 128 63 216 25 61 25 86 -2 86 -17 0 -55 -78 -87 -184 -26 -85 -29 -200 -9 -381 14 -130 37 -289 51 -345 4 -19 11 -48 15 -65 l6 -30 -20 22 c-12 12 -21 25 -21 28 0 3 -7 22 -16 43 -41 91 -47 148 -47 407 1 282 11 394 64 689 22 121 38 225 35 233 -6 14 -32 18 -40 5 -10 -17 -86 -470 -95 -572 -6 -58 -13 -178 -17 -267 l-7 -163 -70 -45 c-39 -25 -72 -44 -73 -42 -2 2 6 28 17 57 20 52 51 193 69 310 5 30 31 163 60 295 61 287 126 626 154 810 2 11 6 27 9 35 16 45 40 142 47 187 5 28 11 56 14 61 7 11 29 385 28 477 -1 113 25 177 140 344 232 336 372 491 597 666 126 98 161 118 309 187 287 132 451 171 878 208 123 11 470 9 524 -3 14 -3 52 -8 85 -12 33 -3 76 -10 95 -15 19 -5 61 -14 92 -20 l57 -11 -49 -69 c-52 -70 -62 -103 -34 -114 28 -11 31 -8 106 96 158 221 356 375 710 551 107 54 291 136 304 137 6 0 28 -37 49 -82z m-4043 -392 c79 -14 181 -34 228 -46 47 -11 98 -23 114 -26 54 -10 275 -84 281 -94 3 -6 12 -10 20 -10 14 0 133 -53 195 -88 19 -11 52 -28 73 -38 20 -10 37 -26 37 -34 0 -9 -66 -74 -147 -145 -251 -220 -326 -305 -513 -583 -70 -103 -109 -152 -119 -150 -33 6 -177 317 -245 526 -71 220 -117 454 -129 650 l-3 62 32 0 c18 0 97 -11 176 -24z m3696 -1981 c66 -82 188 -222 272 -310 158 -167 269 -299 337 -400 50 -76 151 -273 159 -311 1 -7 11 -43 23 -80 26 -88 41 -192 41 -291 l0 -78 -20 30 c-11 17 -43 65 -70 107 -69 105 -199 249 -310 343 -93 78 -238 185 -297 220 -35 20 -49 63 -79 233 -8 47 -21 99 -29 116 -11 25 -157 583 -150 574 1 -2 56 -70 123 -153z m260 -1007 c180 -246 222 -481 135 -758 l-27 -85 -7 90 c-16 196 -29 284 -60 395 -11 41 -24 91 -29 111 -15 58 -61 181 -77 206 -9 13 -12 23 -9 23 4 0 -2 17 -12 38 -11 20 -22 51 -26 67 -4 17 -10 39 -13 50 -9 31 45 -28 125 -137z m-582 79 c34 -162 29 -401 -10 -519 -31 -93 -47 -120 -112 -189 -49 -53 -87 -84 -131 -107 -19 -11 -16 -1 22 75 81 164 151 408 191 670 18 117 27 133 40 70z m804 -204 c100 -105 190 -209 190 -219 0 -3 11 -21 24 -41 24 -35 24 -37 8 -77 -41 -103 -129 -235 -205 -305 -23 -22 -43 -39 -44 -38 0 1 10 43 24 92 20 73 25 114 26 215 1 150 -15 223 -79 356 -24 51 -44 95 -44 98 0 15 39 -16 100 -81z m-270 -381 c-54 -203 -92 -292 -184 -427 -108 -158 -316 -344 -492 -438 l-52 -27 53 106 c55 108 119 294 153 438 l19 80 67 22 c144 49 279 131 345 211 33 40 78 138 87 187 l7 41 12 -43 c12 -39 11 -53 -15 -150z m78 -264 l4 -166 -38 -24 c-22 -14 -45 -28 -53 -33 -11 -7 -13 -1 -8 31 33 224 49 324 59 357 20 68 32 15 36 -165z")
        }
    
        //HairBackPolyA1PointData
        function HairBackA1PolyPD(x,y){
            return (""+x+" "+y+", 3104.000 -133.000, 3065.000 -204.000, 3418.000 -555.000, 3639.000 -676.000, 3678.000 -690.000, 3775.000 -721.000, 3857.000 -742.000, 3921.000 -571.000, 3926.000 -66.000, 3801.000 316.000, 3695.000 300.000")
        }
    
        //HairBackLineA1PointData
        function HairBackA1LinePD(x,y){
            return ("M"+x+" "+y+" c-224 -94 -477 -279 -591 -433 -22 -29 -39 -61 -39 -71 0 -46 208 -253 353 -351 70 -47 205 -121 221 -121 4 0 22 -7 39 -14 18 -8 61 -22 97 -31 36 -9 73 -18 82 -21 30 -9 47 37 64 171 20 155 23 401 5 505 -25 148 -96 364 -125 382 -19 13 -49 8 -106 -16z m85 -86 c48 -93 94 -339 95 -503 0 -98 -27 -358 -39 -370 -11 -11 -164 39 -251 83 -41 21 -108 62 -149 91 -78 54 -222 188 -272 250 l-29 37 73 81 c79 89 186 175 313 252 97 58 225 119 236 113 5 -3 15 -18 23 -34z")
        }
    
        //HairBackPolyA1PointData
        function HairBackA2PolyPD(x,y){
            return (""+x+" "+y+", 66.000 -760.000, 139.000 -856.000, 219.000 -739.000, 474.000 -313.000, 495.000 -289.000, 460.000 -259.000, 173.000 -89.000, -86.000 -1.000, -100.000 -100.000")
        }
    
        //HairBackLineA1PointData
        function HairBackA2LinePD(x,y){
            return ("M"+x+" "+y+" c0 -195 61 -437 166 -660 45 -97 49 -102 73 -96 35 9 33 6 80 117 55 129 188 352 255 426 l21 24 -35 30 c-45 38 -202 131 -287 170 -71 32 -236 88 -259 88 -11 0 -14 -20 -14 -99z m184 -25 c92 -36 275 -135 295 -160 10 -12 5 -26 -32 -78 -63 -90 -98 -157 -153 -292 l-48 -120 -33 70 c-43 93 -111 305 -128 401 -19 104 -20 213 -2 213 8 0 53 -15 101 -34z")
        }
    
        //HairBackPolyA1PointData
        function HairFrontPolyPD(x,y){
            return (""+x+" "+y+", 2081.000 -111.000, 2006.000 -140.000, 1968.000 -154.000, 1856.000 -129.000, 1757.000 -90.000, 1738.000 -77.000, 1624.000 -59.000, 1324.000 -69.000, 1288.000 -78.000, 1127.000 -166.000, 1010.000 -260.000, 923.000 -335.000, 793.000 -572.000, 650.000 -920.000, 575.000 -1135.000, 550.000 -1215.000, 500.000 -1415.000, 464.000 -1520.000, 233.000 -2050.000, -35.000 -2717.000, -29.000 -2926.000, 78.000 -3180.000, 240.000 -3344.000, 363.000 -3414.000, 598.000 -3510.000, 640.000 -3518.000, 771.000 -3555.000, 789.000 -3558.000, 840.000 -3573.000, 900.000 -3583.000, 1065.000 -3614.000, 1172.000 -3633.000, 1523.000 -3659.000, 1493.000 -3609.000, 1099.000 -3318.000, 934.000 -2770.000, 1112.000 -1715.000, 1150.000 -1597.000, 1190.000 -1692.000, 1456.000 -2160.000, 1545.000 -2295.000, 1768.000 -2835.000, 1913.000 -3020.000, 1989.000 -3106.000, 2179.000 -3310.000, 2180.000 -3223.000, 2121.000 -2963.000, 2200.000 -3002.000, 2370.000 -3425.000, 2402.000 -3500.000, 2526.000 -3230.000, 2555.000 -3122.000, 2573.000 -3168.000, 2636.000 -3284.000, 2657.000 -3286.000, 2676.000 -3154.000, 2660.000 -2700.000, 2408.000 -2228.000, 2427.000 -2122.000, 2660.000 -1648.000, 2700.000 -1562.000, 2872.000 -1886.000, 3135.000 -2137.000, 3493.000 -2305.000, 3707.000 -2396.000, 3719.000 -2401.000, 3831.000 -2436.000, 3859.000 -2450.000, 3918.000 -2476.000, 4136.000 -2607.000, 4173.000 -2624.000, 4300.000 -2710.000, 4450.000 -2824.000, 4473.000 -2837.000, 4563.000 -2904.000, 4664.000 -3003.000, 4737.000 -3096.000, 4810.000 -3188.000, 4843.000 -3236.000, 4940.000 -3393.000, 4999.000 -3450.000, 5020.000 -3323.000, 5023.000 -3145.000, 5014.000 -3055.000, 5002.000 -2970.000, 4750.000 -2428.000, 4554.000 -2197.000, 4001.000 -1530.000, 3624.000 -831.000, 3233.000 -230.000, 2773.000 5.000, 2450.000 0.000")
        }
    
        //HairBackLineA1PointData
        function HairFrontLinePD(x,y){
            return ("M"+x+" "+y+" c-119 -19 -258 -61 -369 -111 -35 -16 -69 -29 -75 -29 -6 0 -23 -7 -38 -14 -26 -14 -33 -12 -112 25 -46 21 -91 39 -99 39 -8 0 -17 6 -19 13 -3 8 -40 14 -114 18 -120 6 -306 0 -300 -10 2 -3 -14 -7 -36 -9 -54 -4 -92 -24 -161 -88 -32 -30 -85 -72 -117 -94 -32 -22 -71 -55 -87 -75 -15 -19 -74 -126 -130 -237 -85 -169 -109 -227 -143 -348 -22 -80 -56 -176 -75 -215 -22 -44 -31 -73 -25 -80 9 -11 -8 -79 -50 -200 -10 -27 -26 -75 -36 -105 -32 -101 -164 -403 -231 -530 -218 -413 -235 -455 -268 -667 -14 -97 -14 -106 6 -209 22 -116 50 -183 107 -254 33 -40 162 -171 162 -164 0 7 89 -44 123 -70 56 -43 186 -96 235 -96 23 0 42 -4 42 -8 0 -12 117 -45 131 -37 6 4 14 3 18 -3 4 -7 27 -13 51 -15 25 -2 52 -7 60 -10 22 -9 131 -30 165 -31 17 -1 65 -10 107 -19 99 -22 327 -38 351 -26 28 15 20 28 -30 50 -243 109 -303 154 -394 291 -101 153 -155 333 -165 548 -11 216 61 645 178 1055 17 61 34 114 38 118 5 5 22 -38 40 -95 61 -198 139 -335 266 -468 61 -63 75 -85 89 -135 56 -203 133 -387 223 -540 79 -135 118 -185 145 -185 17 -1 35 -21 76 -86 52 -81 167 -204 190 -204 22 0 23 30 1 87 -29 77 -50 173 -59 260 -8 88 -3 86 79 -39 90 -138 170 -334 170 -423 0 -50 11 -75 32 -75 28 0 92 140 124 270 14 58 27 107 29 108 2 2 10 -18 18 -46 20 -66 43 -108 63 -116 9 -4 19 -5 21 -2 2 2 11 62 19 132 20 168 14 351 -16 454 -39 135 -149 341 -252 472 -32 41 -32 39 19 106 82 108 195 339 233 474 21 75 39 115 40 86 0 -29 125 -262 172 -324 61 -79 189 -201 263 -251 95 -64 216 -121 358 -168 168 -56 206 -72 214 -91 3 -10 8 -12 12 -5 8 12 87 -13 112 -35 8 -8 21 -14 28 -14 7 0 33 -12 59 -26 113 -64 189 -110 218 -131 17 -13 34 -20 37 -17 9 9 50 -19 127 -86 88 -76 150 -123 150 -114 0 4 10 -2 23 -13 12 -11 52 -41 90 -67 42 -29 80 -67 101 -99 19 -29 52 -71 73 -93 54 -59 73 -83 73 -92 0 -5 15 -26 33 -48 54 -64 75 -98 97 -157 24 -65 32 -72 59 -57 18 9 20 22 21 127 0 65 2 145 3 178 1 33 -3 74 -9 90 -6 17 -11 55 -12 85 -1 110 -119 363 -252 542 -42 57 -130 161 -196 231 -310 333 -405 447 -553 667 -174 258 -243 386 -377 699 -128 297 -225 447 -391 601 -141 130 -287 205 -460 235 -108 19 -178 18 -323 -5z m397 -75 c128 -46 236 -112 339 -208 154 -144 252 -296 369 -572 207 -489 465 -879 855 -1290 158 -167 269 -299 337 -400 50 -76 151 -273 159 -311 1 -7 11 -43 23 -80 26 -88 41 -192 41 -291 l0 -78 -20 30 c-11 17 -43 65 -70 107 -238 363 -779 729 -1367 923 -228 76 -366 158 -503 301 -123 128 -204 266 -265 453 -26 79 -27 90 -20 200 7 130 -4 266 -37 440 -18 94 -25 114 -42 121 -14 5 -26 3 -35 -6 -13 -11 -12 -29 7 -126 57 -299 51 -516 -18 -764 -40 -143 -146 -354 -234 -468 l-30 -39 -23 29 c-106 131 -223 335 -268 467 -49 148 -86 431 -105 811 -6 115 -13 213 -16 217 -9 15 -52 10 -58 -7 -4 -9 -2 -105 4 -213 22 -427 55 -678 110 -842 50 -147 177 -358 316 -524 37 -43 92 -118 123 -165 31 -47 58 -87 61 -90 3 -3 27 -50 53 -106 68 -147 97 -264 97 -396 0 -60 -4 -110 -10 -113 -5 -3 -10 1 -10 9 0 8 -16 66 -36 128 -69 217 -195 438 -249 438 -46 0 -39 -33 24 -121 33 -46 59 -86 58 -89 0 -3 15 -38 35 -78 21 -39 35 -72 32 -72 -2 0 3 -17 12 -38 26 -62 6 -251 -43 -410 l-17 -52 -21 72 c-41 136 -140 318 -239 438 -96 116 -115 137 -171 199 -33 36 -121 129 -195 207 -340 355 -407 436 -474 577 -86 178 -115 302 -123 522 -6 166 10 343 43 485 9 36 17 74 20 85 2 11 6 32 9 47 5 20 1 29 -15 38 -39 21 -47 4 -80 -150 -33 -161 -50 -320 -50 -476 0 -115 -4 -151 -20 -200 -77 -222 -174 -629 -210 -874 -25 -175 -40 -330 -36 -361 3 -13 7 -60 11 -104 7 -92 40 -247 61 -289 7 -16 14 -34 14 -39 0 -19 53 -122 93 -181 56 -83 122 -150 191 -197 l58 -39 -48 6 c-75 10 -212 52 -284 87 -45 21 -90 56 -146 112 -77 75 -83 85 -110 165 -24 75 -28 100 -28 220 -1 74 3 165 7 201 7 57 6 67 -8 73 -33 12 -53 -11 -62 -71 -10 -71 -11 -307 -1 -348 12 -50 20 -79 26 -95 3 -8 6 -17 7 -20 12 -34 43 -94 67 -130 19 -27 23 -39 12 -30 -28 22 -36 31 -74 80 -19 25 -37 47 -41 50 -11 10 -58 106 -78 163 -62 173 24 481 205 732 66 93 76 128 38 133 -25 4 -65 -42 -137 -153 -169 -265 -233 -563 -172 -806 17 -67 35 -102 94 -184 32 -45 32 -47 10 -40 -49 14 -170 75 -231 116 -75 51 -177 146 -224 210 -42 57 -92 157 -98 195 -23 144 -13 245 39 401 37 111 82 205 187 392 192 339 339 708 443 1116 56 219 84 303 142 420 110 222 270 375 473 453 56 21 82 25 180 25 144 0 249 -25 377 -89 l91 -47 30 21 c56 40 208 110 297 137 133 40 216 53 352 54 115 1 128 -1 220 -34z m-1073 -2525 c13 -63 27 -128 30 -145 6 -28 6 -28 -5 -7 -7 12 -16 22 -21 22 -4 0 -8 7 -8 16 0 9 -11 37 -24 63 -29 57 -86 192 -91 217 -2 6 -6 22 -10 35 -5 18 6 11 49 -31 l57 -56 23 -114z m240 -167 c22 -27 28 -45 32 -100 4 -61 15 -145 31 -227 6 -34 -9 -28 -30 12 -48 90 -82 148 -91 154 -6 4 -7 8 -2 8 5 0 3 7 -5 16 -20 24 -89 221 -103 292 -5 32 -2 30 68 -45 40 -43 85 -93 100 -110z")
        }
    
        //BodyPolyPointData
        function BodyPolyPD(x,y){
            return (""+x+" "+y+", -1919.000 -3783.000, -2046.000 -3861.000, -2153.000 -4188.000, -2139.000 -4545.000, -2133.000 -4850.000, -2181.000 -5085.000, -2216.000 -5210.000, -2249.000 -5325.000, -2275.000 -5522.000, -832.000 -5522.000, -875.000 -5253.000, -923.000 -4988.000, -932.000 -4937.000, -978.000 -4685.000, -992.000 -4613.000, -1009.000 -4518.000, -1057.000 -4280.000, -1097.000 -4159.000, -1133.000 -4029.000, -1297.000 -3891.000, -1413.000 -3801.000, -1418.000 -3751.000, -1654.000 -3730.000, -1899.000 -3750.000")
        }
    
        //BodyLinePointData
        function BodyLinePD(x,y){
            return ("M"+x+" "+y+" c-11 -11 -20 -26 -20 -33 0 -29 -50 -60 -127 -78 -119 -28 -114 -11 -107 -327 2 -147 9 -307 14 -357 19 -184 20 -221 6 -305 -24 -141 -37 -204 -48 -235 -6 -16 -22 -73 -35 -125 -13 -52 -28 -104 -33 -115 -49 -104 -58 -176 -26 -197 15 -10 1428 -10 1443 0 13 8 -11 161 -43 269 -23 79 -54 254 -48 265 4 5 -1 28 -9 51 -16 42 -33 136 -46 252 -3 33 -10 65 -14 72 -4 6 -12 49 -17 95 -21 172 -29 211 -48 238 -11 14 -29 69 -40 121 -11 52 -27 110 -36 130 -21 50 -92 109 -164 138 -102 40 -123 56 -116 90 3 15 1 38 -5 50 -11 20 -18 21 -236 21 -212 0 -226 -1 -245 -20z m400 -80 c0 -32 63 -85 138 -116 40 -16 77 -34 84 -39 34 -27 77 -96 95 -155 30 -94 108 -514 134 -715 5 -38 16 -86 23 -105 8 -19 29 -100 46 -180 18 -80 40 -178 51 -219 10 -41 16 -78 13 -83 -3 -4 -291 -8 -640 -8 -501 0 -634 3 -634 13 1 6 7 30 15 52 8 22 22 69 30 105 8 36 26 99 40 140 77 234 82 291 52 705 -22 323 -26 427 -16 447 8 16 65 41 120 52 37 8 77 42 99 87 l20 39 165 0 c157 0 165 -1 165 -20z")
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
            return ("M"+x+" "+y+" c-33 -16 -64 -35 -69 -42 -53 -69 -81 -271 -48 -341 22 -47 71 -81 155 -107 53 -17 106 -23 281 -29 230 -9 335 -24 522 -71 97 -25 138 -30 225 -30 114 1 129 7 158 62 22 43 25 85 14 175 -12 98 -17 107 -75 152 -41 31 -47 33 -156 38 -63 2 -157 13 -209 24 -52 10 -124 24 -160 30 -61 11 -183 52 -291 98 -59 25 -180 58 -241 66 -38 4 -56 0 -106 -25z m263 -88 c28 -11 91 -35 140 -54 50 -19 122 -47 160 -62 54 -21 91 -28 165 -31 131 -4 361 -34 386 -50 54 -33 73 -155 34 -219 -23 -37 -31 -41 -105 -49 -39 -5 -72 0 -150 24 -173 53 -298 71 -545 79 -256 9 -317 21 -371 77 -31 32 -32 36 -31 115 1 71 4 86 28 121 38 54 44 55 44 9 0 -27 7 -48 20 -61 26 -26 103 -60 137 -60 64 0 61 48 -4 75 -77 33 -95 73 -40 92 48 16 77 14 132 -6z")
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
            return ("M"+x+" "+y+" c-33 -16 -64 -35 -69 -42 -53 -69 -81 -271 -48 -341 22 -47 71 -81 155 -107 53 -17 106 -23 281 -29 230 -9 335 -24 522 -71 97 -25 138 -30 225 -30 114 1 129 7 158 62 22 43 25 85 14 175 -12 98 -17 107 -75 152 -41 31 -47 33 -156 38 -63 2 -157 13 -209 24 -52 10 -124 24 -160 30 -61 11 -183 52 -291 98 -59 25 -180 58 -241 66 -38 4 -56 0 -106 -25z m263 -88 c28 -11 91 -35 140 -54 50 -19 122 -47 160 -62 54 -21 91 -28 165 -31 131 -4 361 -34 386 -50 54 -33 73 -155 34 -219 -23 -37 -31 -41 -105 -49 -39 -5 -72 0 -150 24 -173 53 -298 71 -545 79 -256 9 -317 21 -371 77 -31 32 -32 36 -31 115 1 71 4 86 28 121 38 54 44 55 44 9 0 -27 7 -48 20 -61 26 -26 103 -60 137 -60 64 0 61 48 -4 75 -77 33 -95 73 -40 92 48 16 77 14 132 -6z")
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
mainFunction()