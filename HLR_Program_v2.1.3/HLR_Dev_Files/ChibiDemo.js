function mainFunction(){
    
    
    
    var FSTS = d3.select("#Full_SVG_Test_Space")
    
    
    
    
    Char = ChibiBlueprinter("john","A")
    Char2 = ChibiBlueprinter("john","B")
    Char.data.scalX = -1;
    Char.data.scalY = 1;
    Char2.data.tranX = 15000
    
    ChibiBuilder(FSTS,Char)
    ChibiBuilder(FSTS,Char2)
    
    
    ChibiAnimator(Char)
    
    
    Char.UpperBody.ChestandArms.LeftY.elementB.animate.rotate(280,1000,100)
    
    }

mainFunction()