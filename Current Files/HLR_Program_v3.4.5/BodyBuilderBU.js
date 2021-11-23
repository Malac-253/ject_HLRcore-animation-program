//main function for the success of GreenTree

async function mainFunction(){  
//the Chars
    function char7Intel(intel){
        intel.HairFront = {
                ver:11,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#7d393c", offset:0, opacity:1},
                        {color:"#7d393c", offset:10, opacity:1},
                        {color:"#e84118", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    intel.bodyLineColorGroup,
                    intel.bodyLineColorGroup,
                    intel.bodyLineColorGroup
                ])
            }  
        intel.HairBack = {
                ver:12,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#7d393c", offset:0, opacity:1},
                        {color:"#7d393c", offset:50, opacity:1},
                        {color:"#e84118", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        } 
        intel.HairTip = {
                ver:0,
                colorGroup:([]),
                lineGroup:([])
        }
        intel.HairPony = {
                ver:0,
                colorGroup:([]),
                lineGroup:([])
        }
        intel.HairHind = {
                ver:0,
                colorGroup:([]),
                lineGroup:([])
        }
        //face data
        intel.FaceEyes = {
                ver:2,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1, color:[//Group for PolyandLine
                        {color:"#63390f", offset:0, opacity:0.75},
                        {color:"#603101", offset:100, opacity:0.75}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#451800", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#2C3A47", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    (false),intel.bodyLineColorGroup,(false),intel.bodyLineColorGroup,(false)
                ])
        }
        intel.FaceEyebrows = {
                ver:1,
                colorGroup:([
                    (false)
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,
                ])
        }
        intel.FacePupils = {
                ver:1,
                colorGroup:([]),
                lineGroup:([])
        }
        intel.FaceGlasses = {
                ver:0,
                colorGroup:([
                    {type:1,color:[]},
                    {type:1,color:[]}
                ]),
                lineGroup:([])
        }
        intel.FaceMouth = {
                ver:2,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#2f3542", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup
                ])
        }
        intel.FaceAccessory = {
                ver:0,
                colorGroup:([]),
                lineGroup:([])
        }
        
        //Clothes Data
        intel.ClothesBelt = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#2f3542", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup
                ])
        }
        intel.ClothesGloves = {
                ver:0,
                colorGroup:([]),
                lineGroup:([])
        }
        intel.ClothesPants = {
                ver:2,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#2f3542", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup
                ])
        }
        intel.ClothesShirt = {
                ver:2,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#747d8c", offset:0, opacity:1},
                        {color:"#747d8c", offset:20, opacity:1},
                        {color:"#57606f", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#57606f", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.ClothesShoes = {
                ver:3,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#eb2f06", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#eb2f06", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#eb2f06", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.ClothesSleeves = {
            ver:3,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#747d8c", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1},
                        {color:"#ffffff", offset:70, opacity:1},
                        {color:"#5f27cd", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
    } 
        
        return intel
    }
    function char6Intel(intel){
        intel.skinColor="#d3a584"
        intel.skinColorGroup = {type:1,color:[{color:intel.skinColor, offset:0, opacity:1},
                                        {color:intel.skinColor, offset:100, opacity:1}]}
        
        intel.HairFront = {
                ver:10,
                colorGroup:([
//                    {type:1,color:[//Group for PolyandLine
//                        {color:"#47261d", offset:0, opacity:1},
//                        {color:"#3D2314", offset:100, opacity:1}
//                    ]}
                    {type:1,color:[//Group for PolyandLine
                        //{color:"#47261d", offset:0, opacity:1},
                        {color:"#e55039", offset:0, opacity:1},
                        {color:"#eb2f06", offset:50, opacity:1},
                        {color:"#b71540", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    intel.bodyLineColorGroup,
                    intel.bodyLineColorGroup,
                    intel.bodyLineColorGroup
                ])
            }  
        intel.HairBack = {
                ver:11,
                colorGroup:([
//                    {type:1,color:[//Group for PolyandLine
//                        {color:"#47261d", offset:0, opacity:1},
//                        {color:"#47261d", offset:65, opacity:1},
//                        {color:"#5f27cd", offset:80, opacity:1},
//                        {color:"#3D2314", offset:100, opacity:1}
//                    ]}
                    {type:1,color:[//Group for PolyandLine
                        //{color:"#47261d", offset:0, opacity:1},
                        {color:"#e55039", offset:0, opacity:1},
                        {color:"#eb2f06", offset:65, opacity:1},
                        {color:"#b71540", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        } 
        intel.HairTip = {
                ver:0,
                colorGroup:([]),
                lineGroup:([])
        }
        intel.HairPony = {
                ver:0,
                colorGroup:([]),
                lineGroup:([])
        }
        intel.HairHind = {
                ver:2,
                colorGroup:([
//                    {type:1,color:[//Group for PolyandLine
//                        {color:"#47261d", offset:0, opacity:1},
//                        {color:"#47261d", offset:30, opacity:1},
//                        {color:"#3D2314", offset:70, opacity:1},
//                        {color:"#3D2314", offset:100, opacity:1}
//                    ]}
                    {type:1,color:[//Group for PolyandLine
                        //{color:"#47261d", offset:0, opacity:1},
                        //{color:"#e55039", offset:65, opacity:1},
                        {color:"#eb2f06", offset:25, opacity:1},
                        {color:"#b71540", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        //face data
        intel.FaceEyes = {
                ver:2,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1, color:[//Group for PolyandLine
                        {color:"#f6b93b", offset:0, opacity:0.75},
                        {color:"#fa983a", offset:100, opacity:0.75}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#485460", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#1e272e", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    (false),intel.bodyLineColorGroup,(false),intel.bodyLineColorGroup,(false)
                ])
        }
        intel.FaceEyebrows = {
                ver:1,
                colorGroup:([
                    (false)
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,
                ])
        }
        intel.FacePupils = {
                ver:1,
                colorGroup:([]),
                lineGroup:([])
        }
        intel.FaceGlasses = {
                ver:0,
                colorGroup:([]),
                lineGroup:([])
        }
        intel.FaceMouth = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#2f3542", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup
                ])
        }
        intel.FaceAccessory = {
                ver:1,
                colorGroup:([
                    {type:2,color:[//Group for PolyandLine
                        {color:"#e55039", offset:0, opacity:.5},
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup
                ])
        }
        
        //Clothes Data
        intel.ClothesBelt = {
                ver:0,
                colorGroup:([]),
                lineGroup:([])
        }
        intel.ClothesGloves = {
                ver:0,
                colorGroup:([]),
                lineGroup:([])
        }
        intel.ClothesPants = {
                ver:0,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"2f3542", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup
                ])
        }
        intel.ClothesShirt = {
                ver:3,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#9980FA", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#130f40", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#130f40", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#2f3640", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.ClothesShoes = {
                ver:2,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#5f27cd", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#5f27cd", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#5f27cd", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.ClothesSleeves = {
            ver:0,
            colorGroup:([]),
            lineGroup:([])
    } 
        
        return intel
    }
    //back up
    function char5Intel(intel){
        intel.HairFront = {
                ver:9,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffda79", offset:0, opacity:1},
                        {color:"#ffda79", offset:90, opacity:1},
                        {color:"#ffb142", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    intel.bodyLineColorGroup,
                    intel.bodyLineColorGroup,
                    intel.bodyLineColorGroup
                ])
            }  
        intel.HairBack = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffda79", offset:0, opacity:1},
                        {color:"#ffda79", offset:90, opacity:1},
                        {color:"#ffb142", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        } 
        intel.HairTip = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffda79", offset:0, opacity:1},
                        {color:"#ffda79", offset:90, opacity:1},
                        {color:"#ffb142", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.HairPony = {
                ver:2,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#5352ed", offset:0, opacity:1},
                        {color:"#3742fa", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffda79", offset:0, opacity:1},
                        {color:"#ffda79", offset:90, opacity:1},
                        {color:"#ffb142", offset:100, opacity:1}
                    ]},
                    {type:2,color:[//Group for PolyandLine
                        {color:"#5352ed", offset:0, opacity:1},
                        {color:"#3742fa", offset:100, opacity:1}
                    ]},
                    {type:2,color:[//Group for PolyandLine
                        {color:"#5352ed", offset:0, opacity:1},
                        {color:"#3742fa", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.HairHind = {
                ver:0,
                colorGroup:([]),
                lineGroup:([])
        }
        //face data
        intel.FaceEyes = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1},
                        {color:"#ffffff", offset:50, opacity:1},
                        {color:"#ffffff", offset:100, opacity:1}
                    ]},
                    {type:2,color:[//Group for PolyandLine
                        {color:"#2f3542", offset:0, opacity:1},
                        {color:"#2f3542", offset:50, opacity:0.50},
                        {color:"#ffffff", offset:100, opacity:0.0}
                    ]},
                    {type:1, color:[//Group for PolyandLine
                        {color:"#4cd137", offset:0, opacity:0.75},
                        {color:"#44bd32", offset:100, opacity:0.75}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#1e272e", offset:0, opacity:1},
                        {color:"#1e272e", offset:50, opacity:1},
                        {color:"#1e272e", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#485460", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    (false),
                    (false),
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    (false),
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    (false),
                    (false),
                ])
        }
        intel.FaceEyebrows = {
                ver:1,
                colorGroup:([
                    (false)
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,
                ])
        }
        intel.FacePupils = {
                ver:1,
                colorGroup:([]),
                lineGroup:([ ])
        }
        intel.FaceGlasses = {
                ver:0,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#2f3542", offset:0, opacity:.3},
                        {color:"#d2dae2", offset:50, opacity:.2},
                        {color:"#2f3542", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#2f3542", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.FaceMouth = {
                ver:1,
                colorGroup:([
                    (false)
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup
                ])
        }
        intel.FaceAccessory = {
                ver:2,
                colorGroup:([
                    {type:2,color:[//Group for PolyandLine
                        {color:"#e55039", offset:0, opacity:.5},
                        {color:"#e55039", offset:100, opacity:.1},
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"Blue", offset:0, opacity:1},
                        {color:"Blue", offset:50, opacity:1},
                        {color:"Blue", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"Red", offset:0, opacity:1},
                        {color:"Red", offset:50, opacity:1},
                        {color:"Red", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    (false)
                ])
        }
        return intel
    }
    function char4Intel(intel){
        intel.HairFront = {
                ver:8,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#9980FA", offset:0, opacity:1},
                        {color:"#5758BB", offset:50, opacity:1},
                        {color:"#1B1464", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    intel.bodyLineColorGroup,
                    intel.bodyLineColorGroup,
                    intel.bodyLineColorGroup
                ])
            }  
        intel.HairBack = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#9980FA", offset:20, opacity:1},
                        {color:"#5758BB", offset:50, opacity:1},
                        {color:"#1B1464", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        } 
        intel.HairTip = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#9980FA", offset:20, opacity:1},
                        {color:"#5758BB", offset:50, opacity:1},
                        {color:"#1B1464", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.HairPony = {
                ver:5,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#f368e0", offset:20, opacity:1},
                        {color:"#ee5253", offset:50, opacity:1},
                        {color:"#341f97", offset:100, opacity:1}
                    ]},
                    {type:2,color:[//Group for PolyandLine
                        {color:"#0abde3", offset:0, opacity:1},
                        {color:"#54a0ff", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.HairHind = {
                ver:0,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#34e7e4", offset:0, opacity:1},
                        {color:"#4bcffa", offset:50, opacity:1},
                        {color:"#0fbcf9", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        //face data
        intel.FaceEyes = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1},
                        {color:"#ffffff", offset:50, opacity:1},
                        {color:"#ffffff", offset:100, opacity:1}
                    ]},
                    {type:2,color:[//Group for PolyandLine
                        {color:"#2f3542", offset:0, opacity:1},
                        {color:"#2f3542", offset:50, opacity:0.50},
                        {color:"#ffffff", offset:100, opacity:0.0}
                    ]},
                    {type:1, color:[//Group for PolyandLine
                        {color:"#dfe4ea", offset:0, opacity:0.75},
                        {color:"#ced6e0", offset:100, opacity:0.75}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#1e272e", offset:0, opacity:1},
                        {color:"#1e272e", offset:50, opacity:1},
                        {color:"#1e272e", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#485460", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    (false),
                    (false),
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    (false),
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    (false),
                    (false),
                ])
        }
        intel.FaceEyebrows = {
                ver:1,
                colorGroup:([
                    (false)
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,
                ])
        }
        intel.FacePupils = {
                ver:1,
                colorGroup:([]),
                lineGroup:([ ])
        }
        intel.FaceGlasses = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#2f3542", offset:0, opacity:.3},
                        {color:"#d2dae2", offset:50, opacity:.2},
                        {color:"#2f3542", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#2f3542", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.FaceMouth = {
                ver:1,
                colorGroup:([
                    (false)
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup
                ])
        }
        intel.FaceAccessory = {
                ver:2,
                colorGroup:([
                    {type:2,color:[//Group for PolyandLine
                        {color:"#e55039", offset:0, opacity:.5},
                        {color:"#e55039", offset:100, opacity:.1},
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"Blue", offset:0, opacity:1},
                        {color:"Blue", offset:50, opacity:1},
                        {color:"Blue", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"Red", offset:0, opacity:1},
                        {color:"Red", offset:50, opacity:1},
                        {color:"Red", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    (false)
                ])
        }
        return intel
    }
    function char3Intel(intel){
        intel.HairFront = {
                ver:6,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#C4E538", offset:0, opacity:1},
                        {color:"#A3CB38", offset:50, opacity:1},
                        {color:"#009432", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    intel.bodyLineColorGroup,
                    intel.bodyLineColorGroup,
                    intel.bodyLineColorGroup
                ])
            }  
        intel.HairBack = {
                ver:7,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#C4E538", offset:20, opacity:1},
                        {color:"#A3CB38", offset:50, opacity:1},
                        {color:"#009432", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        } 
        intel.HairTip = {
                ver:3,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#C4E538", offset:0, opacity:1},
                        {color:"#A3CB38", offset:50, opacity:1},
                        {color:"#009432", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.HairPony = {
                ver:0,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#C4E538", offset:0, opacity:1},
                        {color:"#A3CB38", offset:50, opacity:1},
                        {color:"#009432", offset:100, opacity:1}
                    ]},
                    {type:2,color:[//Group for PolyandLine
                        {color:"#0abde3", offset:0, opacity:1},
                        {color:"#54a0ff", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.HairHind = {
                ver:0,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#C4E538", offset:0, opacity:1},
                        {color:"#A3CB38", offset:50, opacity:1},
                        {color:"#009432", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        //face data
        intel.FaceEyes = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1},
                        {color:"#ffffff", offset:50, opacity:1},
                        {color:"#ffffff", offset:100, opacity:1}
                    ]},
                    {type:2,color:[//Group for PolyandLine
                        {color:"#2f3542", offset:0, opacity:1},
                        {color:"#2f3542", offset:50, opacity:0.50},
                        {color:"#ffffff", offset:100, opacity:0.0}
                    ]},
                    {type:1, color:[//Group for PolyandLine
                        {color:"#833471", offset:0, opacity:0.75},
                        {color:"#6F1E51", offset:100, opacity:0.75}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#1e272e", offset:0, opacity:1},
                        {color:"#1e272e", offset:50, opacity:1},
                        {color:"#1e272e", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#485460", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    (false),
                    (false),
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    (false),
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    (false),
                    (false),
                ])
        }
        intel.FaceEyebrows = {
                ver:2,
                colorGroup:([
                    (false)
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,
                ])
        }
        intel.FacePupils = {
                ver:1,
                colorGroup:([]),
                lineGroup:([ ])
        }
        intel.FaceGlasses = {
                ver:0,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#34e7e4", offset:0, opacity:.2},
                        {color:"#d2dae2", offset:50, opacity:.1},
                        {color:"#b71540", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#b71540", offset:0, opacity:1},
                        {color:"#b71540", offset:50, opacity:1},
                        {color:"#b71540", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.FaceMouth = {
                ver:1,
                colorGroup:([
                    (false)
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup
                ])
        }
        intel.FaceAccessory = {
                ver:1,
                colorGroup:([
                    {type:2,color:[//Group for PolyandLine
                        {color:"#e55039", offset:0, opacity:.5},
                        {color:"#f8c291", offset:100, opacity:.1},
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"Blue", offset:0, opacity:1},
                        {color:"Blue", offset:50, opacity:1},
                        {color:"Blue", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"Red", offset:0, opacity:1},
                        {color:"Red", offset:50, opacity:1},
                        {color:"Red", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    (false)
                ])
        }
        return intel
    }
    function char2Intel(intel){
        intel.HairFront = {
                ver:2,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#34e7e4", offset:0, opacity:1},
                        {color:"#4bcffa", offset:50, opacity:1},
                        {color:"#0fbcf9", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    intel.bodyLineColorGroup,
                    intel.bodyLineColorGroup,
                    intel.bodyLineColorGroup
                ])
            }  
        intel.HairBack = {
                ver:4,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#34e7e4", offset:20, opacity:1},
                        {color:"#4bcffa", offset:50, opacity:1},
                        {color:"#0fbcf9", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        } 
        intel.HairTip = {
                ver:2,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#34e7e4", offset:0, opacity:1},
                        {color:"#4bcffa", offset:50, opacity:1},
                        {color:"#0fbcf9", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.HairPony = {
                ver:5,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#f368e0", offset:20, opacity:1},
                        {color:"#ee5253", offset:50, opacity:1},
                        {color:"#341f97", offset:100, opacity:1}
                    ]},
                    {type:2,color:[//Group for PolyandLine
                        {color:"#0abde3", offset:0, opacity:1},
                        {color:"#54a0ff", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.HairHind = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#34e7e4", offset:0, opacity:1},
                        {color:"#4bcffa", offset:50, opacity:1},
                        {color:"#0fbcf9", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        //face data
        intel.FaceEyes = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1},
                        {color:"#ffffff", offset:50, opacity:1},
                        {color:"#ffffff", offset:100, opacity:1}
                    ]},
                    {type:2,color:[//Group for PolyandLine
                        {color:"#2f3542", offset:0, opacity:1},
                        {color:"#2f3542", offset:50, opacity:0.50},
                        {color:"#ffffff", offset:100, opacity:0.0}
                    ]},
                    {type:1, color:[//Group for PolyandLine
                        {color:"#f7d794", offset:0, opacity:0.75},
                        {color:"#f3a683", offset:100, opacity:0.75}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#1e272e", offset:0, opacity:1},
                        {color:"#1e272e", offset:50, opacity:1},
                        {color:"#1e272e", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#485460", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    (false),
                    (false),
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    (false),
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    (false),
                    (false),
                ])
        }
        intel.FaceEyebrows = {
                ver:1,
                colorGroup:([
                    (false)
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,
                ])
        }
        intel.FacePupils = {
                ver:1,
                colorGroup:([]),
                lineGroup:([ ])
        }
        intel.FaceGlasses = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#34e7e4", offset:0, opacity:.2},
                        {color:"#d2dae2", offset:50, opacity:.1},
                        {color:"#b71540", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#b71540", offset:0, opacity:1},
                        {color:"#b71540", offset:50, opacity:1},
                        {color:"#b71540", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.FaceMouth = {
                ver:1,
                colorGroup:([
                    (false)
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup
                ])
        }
        intel.FaceAccessory = {
                ver:1,
                colorGroup:([
                    {type:2,color:[//Group for PolyandLine
                        {color:"#e55039", offset:0, opacity:.5},
                        {color:"#f8c291", offset:100, opacity:.1},
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"Blue", offset:0, opacity:1},
                        {color:"Blue", offset:50, opacity:1},
                        {color:"Blue", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"Red", offset:0, opacity:1},
                        {color:"Red", offset:50, opacity:1},
                        {color:"Red", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    (false)
                ])
        }
        return intel
    }
    //Standard Char intel
    function standardchar(){
       //bodyLineColor:"#13366c"
        var intel = {
            skinColor:"#FFDBAC", 
            bodyLineColor:"Black",      
            bodyLineColorWi:2.5
        }
        intel.skinColorGroup = {type:1,color:[{color:intel.skinColor, offset:0, opacity:1}]}
        intel.bodyLineColorGroup = {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1}],w:12}
        intel.HairFront = {
                ver:9,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#f368e0", offset:0, opacity:1},
                        {color:"#ee5253", offset:50, opacity:1},
                        {color:"#341f97", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    intel.bodyLineColorGroup,
                    intel.bodyLineColorGroup,
                    intel.bodyLineColorGroup
                ])
            }  
        intel.HairBack = {
                ver:2,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#f368e0", offset:20, opacity:1},
                        {color:"#ee5253", offset:50, opacity:1},
                        {color:"#341f97", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        } 
        intel.HairTip = {
                ver:4,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#f368e0", offset:20, opacity:1},
                        {color:"#ee5253", offset:50, opacity:1},
                        {color:"#341f97", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.HairPony = {
                ver:4,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#f368e0", offset:20, opacity:1},
                        {color:"#ee5253", offset:50, opacity:1},
                        {color:"#341f97", offset:100, opacity:1}
                    ]},
                    {type:2,color:[//Group for PolyandLine
                        {color:"#0abde3", offset:0, opacity:1},
                        {color:"#54a0ff", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.HairHind = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#f368e0", offset:20, opacity:1},
                        {color:"#ee5253", offset:50, opacity:1},
                        {color:"#341f97", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        //face data
        intel.FaceEyes = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1},
                        {color:"#ffffff", offset:50, opacity:1},
                        {color:"#ffffff", offset:100, opacity:1}
                    ]},
                    {type:2,color:[//Group for PolyandLine
                        {color:"#2f3542", offset:0, opacity:1},
                        {color:"#2f3542", offset:50, opacity:0.50},
                        {color:"#ffffff", offset:100, opacity:0.0}
                    ]},
                    {type:1, color:[//Group for PolyandLine
                        {color:"#34e7e4", offset:0, opacity:0.75},
                        {color:"#0fbcf9", offset:100, opacity:0.75}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#1e272e", offset:0, opacity:1},
                        {color:"#1e272e", offset:50, opacity:1},
                        {color:"#1e272e", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ffffff", offset:0, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#485460", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    (false),
                    (false),
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    (false),
                    {type:1,color:[{color:intel.bodyLineColor, offset:0, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1},
                                {color:intel.bodyLineColor, offset:100, opacity:1}]
                    ,w:20},
                    (false),
                    (false),
                ])
        }
        intel.FaceEyebrows = {
                ver:1,
                colorGroup:([
                    (false)
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,
                ])
        }
        intel.FacePupils = {
                ver:1,
                colorGroup:([]),
                lineGroup:([ ])
        }
        intel.FaceGlasses = {
                ver:2,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#34e7e4", offset:0, opacity:.2},
                        {color:"#d2dae2", offset:50, opacity:.1},
                        {color:"#b71540", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#b71540", offset:0, opacity:1},
                        {color:"#b71540", offset:50, opacity:1},
                        {color:"#b71540", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.FaceMouth = {
                ver:1,
                colorGroup:([
                    (false)
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup
                ])
        }
        intel.FaceAccessory = {
                ver:2,
                colorGroup:([
                    {type:2,color:[//Group for PolyandLine
                        {color:"#e55039", offset:0, opacity:.5},
                        {color:"#f8c291", offset:100, opacity:.1},
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"Blue", offset:0, opacity:1},
                        {color:"Blue", offset:50, opacity:1},
                        {color:"Blue", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"Red", offset:0, opacity:1},
                        {color:"Red", offset:50, opacity:1},
                        {color:"Red", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    (false)
                ])
        }

        //Clothes Data
        intel.ClothesBelt = {
                ver:0,
                colorGroup:([]),
                lineGroup:([])
        }
        intel.ClothesGloves = {
                ver:2,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"Green", offset:0, opacity:1},
                        {color:"Green", offset:50, opacity:1},
                        {color:"Green", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"Blue", offset:0, opacity:1},
                        {color:"Blue", offset:50, opacity:1},
                        {color:"Blue", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"Red", offset:0, opacity:1},
                        {color:"Red", offset:50, opacity:1},
                        {color:"Red", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.ClothesPants = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"2f3542", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup
                ])
        }
        intel.ClothesShirt = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#5f27cd", offset:0, opacity:1},
                        {color:"#5f27cd", offset:30, opacity:1},
                        {color:"#2f3640", offset:90, opacity:1},
                        {color:"#2f3640", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#ff5252", offset:0, opacity:1},
                        {color:"#ff5252", offset:50, opacity:1},
                        {color:"#5f27cd", offset:100, opacity:1}
                    ]},
                    {type:2,color:[//Group for PolyandLine
                        {color:"#222f3e", offset:0, opacity:1},
                        {color:"#222f3e", offset:50, opacity:1},
                        {color:"#222f3e", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#222f3e", offset:0, opacity:1},
                        {color:"#222f3e", offset:50, opacity:1},
                        {color:"#222f3e", offset:100, opacity:1}
                    ]},
                    {type:1,color:[//Group for PolyandLine
                        {color:"#2f3640", offset:0, opacity:1},
                        {color:"#2f3640", offset:90, opacity:1},
                        {color:"#e84118", offset:100, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
                ])
        }
        intel.ClothesShoes = {
                ver:1,
                colorGroup:([
                    {type:1,color:[//Group for PolyandLine
                        {color:"#2f3542", offset:0, opacity:1}
                    ]}
                ]),
                lineGroup:([ 
                    intel.bodyLineColorGroup
                ])
        }
        intel.ClothesSleeves = {
            ver:1,
            colorGroup:([
                {type:2,color:[//Group for PolyandLine
                    {color:"#5f27cd", offset:0, opacity:1}
                ]},
                {type:1,color:[//Group for PolyandLine
                    {color:"#EA2027", offset:0, opacity:1},
                ]},
                {type:1,color:[//Group for PolyandLine
                    {color:"Red", offset:0, opacity:1},
                    {color:"Red", offset:50, opacity:1},
                    {color:"Red", offset:100, opacity:1}
                ]}
            ]),
            lineGroup:([ 
                intel.bodyLineColorGroup,intel.bodyLineColorGroup,intel.bodyLineColorGroup
            ])
    } 
        
        return intel
    }
    
//Scene set up
    var FSTS = d3.select("#Full_SVG_Test_Space")
    var GreenScreen = element_rect(FSTS,"GreenScreen",5000,5000,"#4cd137","Black",0,1,1,0,0,0)
    //var ImgScreen = element_img(FSTS,"ImgScreen",2000,1000,"HallwayF.png","Black",0,1,1,0,0,0)
    var ruler = element_group(FSTS,("ruler"),0,0,1,1,0,0,0)
    var testing = false
    if(false){
        for (var x = 0; x < 2100; x = x + 100) {
            for (var y = 0; y < 1100; y = y + 100) {
                    element_circle(ruler,("CL_X"+x+"Y"+y),x,y,5,"gray","black",0,1,1,0,0,0)
                    //element_circle(Outparent,id,cx,cy,r,fill,stroke,strokW,scalX,scalY,tranX,tranY,rotat){
                    element_text(ruler,(""+x+","+y),("TE_X"+x+"Y"+y),x,y,"black",0,1,1,0,0,0)
                    //element_text(Outparent,id,x,y,stroke,strokW,scalX,scalY,tranX,tranY,rotat)
            }
        }
    }//ruler parts
    
    
//Scene Event set up
    var Event1 = element_group(FSTS,("Event1"),0,0,1,1,0,0,0)
    //Scene Char render
    var charSTAND = standardchar()
    var char1 = JSON.parse(JSON.stringify(charSTAND));
    var char2 = char2Intel(JSON.parse(JSON.stringify(charSTAND)))
    var char3 = char3Intel(JSON.parse(JSON.stringify(charSTAND)))
    var char4 = char4Intel(JSON.parse(JSON.stringify(charSTAND)))
    var char5 = char5Intel(JSON.parse(JSON.stringify(charSTAND)))
    var char6 = char6Intel(JSON.parse(JSON.stringify(charSTAND)))
    var char7 = char7Intel(JSON.parse(JSON.stringify(charSTAND)))
    var val1 = await multiBodyPromise([
        BodyPromise("back","1_1",Event1,char1),
        BodyPromise("back","1_2",Event1,char2),
        BodyPromise("back","1_3",Event1,char3),
        BodyPromise("back","1_4",Event1,char4),
        BodyPromise("back","1_5",Event1,char5),
        BodyPromise("mainGirl","1_6",Event1,char6),
        BodyPromise("mainGuy","1_7",Event1,char7)])    //,BodyPromise("test","1_2",Event1,intel)])
    var val2 = multiBodyCreator(val1); var val3 = multiBodyBuilder(val2,testing)
    var LipPath = {}
    await d3.json("HLR_UseageFiles/Body_Part/raw/Other/LipSync/LipPath_001.json").then(values => {LipPath = values})
    
    console.log(LipPath)
    
//Event Code
    var back1 = val3[0]
    var back2 = val3[1]
    var back3 = val3[2]
    var back4 = val3[3]
    var back5 = val3[4]
    var mainGirl = val3[5]
    var mainGuy = val3[6]
    
    var Event_1 = true
    if (Event_1){
        TO_Standby(back1) 
        TO_Standby(back2)
        TO_Standby(back3)
        TO_Standby(back4)
        TO_Standby(back5)
        TO_Standby(mainGuy)
        
        
        
        
        
        
        
        //You don't know what goes on behind these eyes
        //You don't know the loneliness hidden inside
        
        var wait = 200
        var gofor = 47
        var delay = 30
        //17 sec
        await sleep(3000)
        console.log("starting")
        //await mainGirl.anim.mouthSpeak(LipPath,gofor,delay,text)
        mainGirl.anim.mouthSpeak(LipPath,gofor,delay,"You don't know what goes on behind these eyes, You don't know the loneliness hidden inside, You don't know I wanna eat you up alive")
        
        console.log("edn")
        
    }
    
    
    
    
    
    
    
    
    
//HelperEvent Code
    function TO_Standby(object){
        object.element.attr("transform","scale(1,1)  translate(-5000,0)  rotate(0) ");
    }
    
    function TO_Main(object){
        object.element.attr("transform","scale(1,1)  translate(5000,0)  rotate(0) ");
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//    val3[0].anim.addTransform({dur:0,del:0,scalX:0,scalY:0,tranX:400,
//                                     tranY:0,skewX:0,skewY:0,rotat:00})
//    val3[1].anim.addTransform({dur:0,del:0,scalX:0,scalY:0,tranX:600,
//                                     tranY:0,skewX:0,skewY:0,rotat:00})
//    val3[2].anim.addTransform({dur:0,del:0,scalX:0,scalY:0,tranX:800,
//                                     tranY:0,skewX:0,skewY:0,rotat:00})
//    val3[3].anim.addTransform({dur:0,del:0,scalX:0,scalY:0,tranX:1000,
//                                     tranY:0,skewX:0,skewY:0,rotat:00})
//    val3[4].anim.addTransform({dur:0,del:0,scalX:0,scalY:0,tranX:1200,
//                                     tranY:0,skewX:0,skewY:0,rotat:00})
//    //main char 
//    val3[6].anim.addTransform({dur:0,del:0,scalX:0,scalY:0,tranX:00,
//                                     tranY:0,skewX:0,skewY:0,rotat:00})
//    val3[5].anim.addTransform({dur:0,del:0,scalX:0,scalY:0,tranX:200,
//                                     tranY:0,skewX:0,skewY:0,rotat:00})
    
//Main Factoryies
    //Gets the json data
    function BodyPromise(name,id,FSTS,intel){
        return new Promise(function(resolve, reject) {
            var allBodyPromises = []
            //Body Data
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Main/NakedBody.json"))//NakedBody
            //Hair Data
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Hair/FrontHair/FrontHair_All.json"))//FrontHair
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Hair/BackHair/BackHair_All.json"))//BackHair
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Hair/HairTip/TipHair_All.json"))//HairTip
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Hair/HindHair/HindHair_All.json"))//HairPony
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Hair/PonyTail/PonyHair_All.json"))//HairPony
            //Face Data
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Face/Accessories/Accessory_All.json"))//Accessory
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Face/Eyebrows/Eyebrows_All.json"))//Eyebrows
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Face/Eyes/Eyes_All.json"))//Eyes
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Face/Glasses_Mask/Glasses_All.json"))//Glasses
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Face/Mouth/Mouth_All.json"))//Mouth
            //Clothes Data
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Clothes/Belt/Belt_All.json"))//Belt
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Clothes/Gloves/Gloves_All.json"))//Gloves
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Clothes/Pants/Pants_All.json"))//Pants
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Clothes/Shirt/Shirt_All.json"))//Shirt
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Clothes/Shoes/Shoes_All.json"))//Shoes
            allBodyPromises.push(d3.json("HLR_UseageFiles/Body_Part/raw/Clothes/Sleeves/Sleeves_All.json"))//Sleeves
            
            Promise.all(allBodyPromises).then(values => {
            //console.log(values); 
            var MassData = {}
            //Body Data
            MassData.Z_Intel = intel
            MassData.Z_id = id
            MassData.Z_name = name
            MassData.Z_FSTS = FSTS
            MassData.NakedBody = values[0]
            //Hair Data
            MassData.HairFront = values[1][intel.HairFront.ver]
            MassData.HairBack = values[2][intel.HairBack.ver]
            MassData.HairTip = values[3][intel.HairTip.ver]
            MassData.HairHind = values[4][intel.HairHind.ver]
            MassData.HairPony = values[5][intel.HairPony.ver]
            //Face Data
            MassData.FaceAccessory = values[6][intel.FaceAccessory.ver]
            MassData.FaceEyebrows = values[7][intel.FaceEyebrows.ver]
            MassData.FaceEyes = values[8][intel.FaceEyes.ver]
            MassData.FaceGlasses = values[9][intel.FaceGlasses.ver]
            MassData.FaceMouth = values[10][intel.FaceMouth.ver]
            //Clothes Data
            MassData.ClothesBelt = values[11][intel.ClothesBelt.ver] 
            MassData.ClothesGloves = values[12][intel.ClothesGloves.ver]
            MassData.ClothesPants = values[13][intel.ClothesPants.ver]
            MassData.ClothesShirt = values[14][intel.ClothesShirt.ver]
            MassData.ClothesShoes = values[15][intel.ClothesShoes.ver]
            MassData.ClothesSleeves = values[16][intel.ClothesSleeves.ver]
            //console.log(MassData);
            resolve(MassData);
            });
        })
    }
    function multiBodyPromise(array){
        return new Promise(function(resolve, reject) {
            Promise.all(array).then(values => {
                resolve(values);
            })
        })
    }
    //Function to make the Blueprint for the body
    function BodyCreator(name,id,FSTS,intel,mainData){
        if (id == undefined){id = ""}
        var Char = {}
        bluePrint(Char,intel,mainData)
        anim_MouthSpeak_fun(Char)
        return Char
        //Full bluePrint
        function bluePrint(Char,i,d){
            blue_Char(Char,i,d)
            blue_UpperBody(Char,i,d)
                blue_Head (Char,i,d)
                    blue_Hair(Char,i,d)
                    blue_Face(Char,i,d)
                blue_RightArm(Char,i,d)
                    blue_RightFore(Char,i,d)
                    blue_RightHand(Char,i,d)
                blue_LeftYArm(Char,i,d)
                    blue_LeftYFore(Char,i,d)
                    blue_LeftYHand(Char,i,d)
            blue_LowerBody(Char,i,d)
                blue_RightLeg(Char,i,d)
                    blue_RightCalf(Char,i,d)
                    blue_RightFoot(Char,i,d)
                blue_LeftYLeg(Char,i,d)
                    blue_LeftYCalf(Char,i,d)
                    blue_LeftYFoot(Char,i,d)
            blue_Clothes(Char,i,d)
            Char.Z_FSTS = FSTS
            return Char 
        }
        //Maker Parts
        function blue_Char(Char,i,d){
            Char.element = {}; 
            Char.data = {};
            Char.name = name +"_ID"+ id;
            Char.id = id;
            Char.data.id = ("FullChar_"+Char.name);
            Char.data.origX = 0;
            Char.data.origY = 0;
            Char.data.scalX = 1;
            Char.data.scalY = 1;
            Char.data.skewX = 0;
            Char.data.skewY = 0;
            Char.data.tranX = 0;
            Char.data.tranY = 0;
            Char.data.rotat = 0;
            Char.anim = anim_Standard_data(Char)
            element_group(FSTS,("dummyArea_"+Char.name),0,0,1,1,0,0,0)
        }
        function blue_Head(Char,i,d){
            body_Standard_data(Char.UpperBody,"Head","",i,d.NakedBody,Char.name)
            Char.UpperBody.Head.draw.Dime.magY = 1
            Char.UpperBody.Head.draw.Dime.magX = 1
        }
        function blue_Hair(Char,i,d){
            Char.UpperBody.Head.Hair = {}
            Char.UpperBody.Head.Hair.data = {}
            Char.UpperBody.Head.Hair.data.id = ("Hair_"+Char.name)
            part_Standard_data(Char.UpperBody.Head,"Hair","Front",i,d.HairFront,Char.name)
            part_Standard_data(Char.UpperBody.Head,"Hair","Back",i,d.HairBack,Char.name)
            part_Standard_data(Char.UpperBody.Head,"Hair","Tip",i,d.HairTip,Char.name)
            part_Standard_data(Char.UpperBody.Head,"Hair","Pony",i,d.HairPony,Char.name)
            part_Standard_data(Char.UpperBody.Head,"Hair","Hind",i,d.HairHind,Char.name)
        }
        function blue_Face(Char,i,d){
            Char.UpperBody.Head.Face = {}
            Char.UpperBody.Head.Face.data = {}
            Char.UpperBody.Head.Face.data.id = ("Face_"+Char.name)
            part_Standard_data(Char.UpperBody.Head,"Face","Eyes",i,d.FaceEyes,Char.name)
            part_Standard_data(Char.UpperBody.Head,"Face","Eyebrows",i,d.FaceEyebrows,Char.name)
            //part_Standard_data(Char.UpperBody.Head,"Face","Pupils",i,d.FrontHair,Char.name) 
            part_Standard_data(Char.UpperBody.Head,"Face","Glasses",i,d.FaceGlasses,Char.name)
            part_Standard_data(Char.UpperBody.Head,"Face","Mouth",i,d.FaceMouth,Char.name) 
            part_Standard_data(Char.UpperBody.Head,"Face","Accessory",i,d.FaceAccessory,Char.name)
        }      
        function blue_UpperBody(Char,i,d){
            body_Standard_data(Char,"UpperBody","",i,d.NakedBody,Char.name)
            Char.UpperBody.LeftY = {}
            Char.UpperBody.Right = {}
            //changes
            Char.UpperBody.draw.Dime.magY = 0.95
        }
        function blue_RightArm (Char,i,d){
            body_Standard_data(Char.UpperBody,"Right","Arm",i,d.NakedBody,Char.name)
            //changes
            Char.UpperBody.Right.Arm.draw.Dime.magX = 0.2
        }
        function blue_RightFore(Char,i,d){
            body_Standard_data(Char.UpperBody,"Right","Fore",i,d.NakedBody,Char.name)
            //changes
        }
        function blue_RightHand(Char,i,d){
            body_Standard_data(Char.UpperBody,"Right","Hand",i,d.NakedBody,Char.name)
            //changes
        }
        function blue_LeftYArm (Char,i,d){
            body_Standard_data(Char.UpperBody,"LeftY","Arm",i,d.NakedBody,Char.name)
            //changes  
            Char.UpperBody.LeftY.Arm.draw.Dime.magX = 0.9
        }
        function blue_LeftYFore(Char,i,d){
            body_Standard_data(Char.UpperBody,"LeftY","Fore",i,d.NakedBody,Char.name)
            //changes  
        }
        function blue_LeftYHand(Char,i,d){
            body_Standard_data(Char.UpperBody,"LeftY","Hand",i,d.NakedBody,Char.name)
            //changes 
        }
        function blue_LowerBody(Char,i,d){
            body_Standard_data(Char,"LowerBody","",i,d.NakedBody,Char.name)
            Char.LowerBody.Right = {}
            Char.LowerBody.LeftY = {}
            //changes
        }
        function blue_RightLeg (Char,i,d){
            body_Standard_data(Char.LowerBody,"Right","Leg",i,d.NakedBody,Char.name)
            //changes
            Char.LowerBody.Right.Leg.draw.Dime.magY = 0.3
        }
        function blue_RightCalf(Char,i,d){
            body_Standard_data(Char.LowerBody,"Right","Calf",i,d.NakedBody,Char.name)
            //changes 
            //Char.LowerBody.Right.Calf.draw.Dime.magX = 1
            //Char.LowerBody.Right.Calf.draw.Dime.magY = 0.5
        }
        function blue_RightFoot(Char,i,d){   
            body_Standard_data(Char.LowerBody,"Right","Foot",i,d.NakedBody,Char.name)
            //changes
        }
        function blue_LeftYLeg (Char,i,d){
            body_Standard_data(Char.LowerBody,"LeftY","Leg",i,d.NakedBody,Char.name)
            //changes
            Char.LowerBody.Right.Leg.draw.Dime.magY = 0.3
        }
        function blue_LeftYCalf(Char,i,d){   
            body_Standard_data(Char.LowerBody,"LeftY","Calf",i,d.NakedBody,Char.name)
            //changes 
        }
        function blue_LeftYFoot(Char,i,d){ 
            body_Standard_data(Char.LowerBody,"LeftY","Foot",i,d.NakedBody,Char.name)
            //changes 
        }
        function blue_Clothes(Char,i,d){
            Char.Clothes = {}
            clothes_Standard_data(Char.Clothes,"Clothes","Belt",i,d,Char.name)
            clothes_Standard_data(Char.Clothes,"Clothes","Gloves",i,d,Char.name)
            clothes_Standard_data(Char.Clothes,"Clothes","Shirt",i,d,Char.name)
            clothes_Standard_data(Char.Clothes,"Clothes","Pants",i,d,Char.name)
            clothes_Standard_data(Char.Clothes,"Clothes","Shoes",i,d,Char.name)
            clothes_Standard_data(Char.Clothes,"Clothes","Sleeves",i,d,Char.name)
        }
        //Helper Function Main      
        //Standard part Processing
        function proc_Standard_data(data,name,i){
            //console.log(data)
            
            data.part = {}
            //temp test
            var intel = temp_Standard_data(data,name)
            //Standard part Blueprint
            //id, origX, origY, scalX, scalY, tranX, tranY, rotate
            data.part = blue_Standard_data(data.partID, parseInt(intel.ans[0][0]), parseInt(intel.ans[0][1]))

            //Set colorGroup
            data.part.colorGroup = data.colorGroup

            //Set lineGroup
            data.part.lineGroup = data.lineGroup

            //Set draw data
            data.part.draw = draw_Standard_data(data,intel,i)

            //Set animation function
            data.part.anim = anim_Standard_data(data.part)
            return data.part
}
        //Get past data with temp space to get WxH
        function temp_Standard_data(data,name){
            //temp test
                //element_group(Outparent,id,origX,origY,scalX,scalY,tranX,tranY,rotat)
            var maxX = 0
            var maxY = 0
            var maxW = 0
            var maxH = 0
            var rawans = []
            data.polyfulldata.forEach(function(item, index, array) {
                
                    //console.log(item)
                
                    var tempgroup = element_group(d3.select("#dummyArea_"+ name),("Temp_"+data.partID),0,0,1,1,0,0,0)
                    var temppath = element_path(tempgroup,("TempPath_"+data.partID),item.d,1,1,0,0,0,"black","black",1,1)
                    var tempbbox = temppath.node().getBBox();
                    d3.select("#Temp_"+data.partID).remove();
                    var stop = false
                    var raw = ""
                    for (var i = 1; i < item.d.length; i++) {
                        if(item.d.charAt(i).length === 1 && item.d.charAt(i).match(/[a-z]/i)){
                            stop = true
                        }
                        if(!stop){raw += item.d.charAt(i);}
                    }

                    if(tempbbox.x > maxX){maxX = tempbbox.x}
                    if(tempbbox.y > maxY){maxY = tempbbox.y}
                    if(tempbbox.width > maxW){maxW = tempbbox.width}
                    if(tempbbox.height > maxH){maxH = tempbbox.height}

                    rawans.push(raw.split(" "))

            })

            var bbox = {x:maxX, y:maxY, width:maxW, height:maxH}                         

            return {ans:rawans, box:bbox};
}
        //Standard part Blueprint
        function blue_Standard_data(id,ox,oy){
            part = {}
            part.element = {}
            part.data = {};
            part.data.id = id;
            part.data.origX = ox;
            part.data.origY = oy;
            part.data.scalX = 1;
            part.data.scalY = 1;
            part.data.tranX = 0;
            part.data.tranY = 0;
            part.data.rotat = 0;
            part.data.skewX = 0;
            part.data.skewY = 0;
            part.colorGroup = []
            return part
}
        //Standard part Draw Data
        function draw_Standard_data(draw,intel,i){
            var data =  Standard_Process_Answer()
            
            //console()
            
                intel.ans.forEach(function(item, index, array) {
                    data.Pathfull.push(draw.polyfulldata[index]) //fill,fillop,stroke,strokW,stroop,sljoin,slcap)  
                    data.Data.push({scalX:1, scalY:1, tranX:0, tranY:0, rotat:0, strokW: i.bodyLineColorWi ,stroop: 1 , fillop:1})//1/(index+1)//4/(index+1) 1/((index/4)+1)
                    data.Dime.bbox = intel.box
                    data.Dime.magX = 0.5
                    data.Dime.magY = 0.1
                })
            return data
            //Create Standard Process answer
            function Standard_Process_Answer(){
                var ans =  {}
                    ans.Pathfull = []
                    ans.Data = []
                    ans.Dime = {}
                return ans
            } 
}
        //Standard part animation function
        function anim_Standard_data(part){
            var animate = {}
            animate.test = async function(){
                console.log("==> X and Y rotation to 200 for " + part.data.id)
                part.element.transition().duration(500).style("transform", "rotate(200deg)")
                await sleep(500)
                console.log("==> X and Y rotation to  for " + part.data.id)
                part.element.transition().duration(500).style("transform", "rotate(0deg)")
                await sleep(500)
                console.log("==> Turn left for " + part.data.id)
                part.element.transition().duration(500).style("transform", "skewY(30deg)")
                await sleep(500)
                console.log("==> Turn right for " + part.data.id)
                part.element.transition().duration(500).style("transform", "skewY(330deg)")
                await sleep(500)
                console.log("==> Scale in  for " + part.data.id)
                part.element.transition().duration(500).style("transform", "scale(1,0.5)")
                await sleep(500)
                console.log("==> Scale out for " + part.data.id)
                part.element.transition().duration(500).style("transform", "scale(1,1)")
                await sleep(500)
                console.log("==> Scale in  for " + part.data.id)
                part.element.transition().duration(500).style("transform", "scale(1,0.5)")
                await sleep(500)
                console.log("==> Scale out for " + part.data.id)
                part.element.transition().duration(500).style("transform", "scale(1,1)")
                await sleep(500)
            }
            animate.addTransform = function(input){
                var t = d3.transition()
                    .duration(input.dur)
                    .delay(input.del)
                    .ease(d3.easeLinear);

                //console.log(("scale("+part.data.scalX+","+part.data.scalY+")  translate("+part.data.tranX+","+part.data.tranY+")  rotate("+part.data.rotat+") "))


                part.data.scalX = part.data.scalX + input.scalX
                part.data.scalY = part.data.scalY + input.scalY
                part.data.tranX = part.data.tranX + input.tranX
                part.data.tranY = part.data.tranY + input.tranY
                part.data.skewX = part.data.skewX + input.skewX
                part.data.skewY = part.data.skewY + input.skewY
                part.data.rotat = part.data.rotat + input.rotat


                //console.log(("scale("+part.data.scalX+","+part.data.scalY+")  translate("+part.data.tranX+","+part.data.tranY+")  rotate("+part.data.rotat+") "))

                part.element
                .transition(t)
                .attr("transform", ("scale("+part.data.scalX+","+part.data.scalY+")  translate("+part.data.tranX+","+part.data.tranY+")  rotate("+part.data.rotat+") skewX("+part.data.skewX+") skewY("+part.data.skewY+")"));
            }
            animate.moveTransform = function(input){
                var t = d3.transition()
                    .duration(input.dur)
                    .delay(input.del)
                    .ease(d3.easeLinear);

                //console.log(("scale("+part.data.scalX+","+part.data.scalY+")  translate("+part.data.tranX+","+part.data.tranY+")  rotate("+part.data.rotat+") "))
                var bbox = part.element.node().getBBox();

                part.data.tranX = (input.tranX - bbox.x) - part.data.tranX
                part.data.tranY = (input.tranY - bbox.y) - part.data.tranY


                console.log(("scale("+part.data.scalX+","+part.data.scalY+")  translate("+part.data.tranX+","+part.data.tranY+")  rotate("+part.data.rotat+") "))

                part.element
                .transition(t)
                .attr("transform", ("scale("+part.data.scalX+","+part.data.scalY+")  translate("+part.data.tranX+","+part.data.tranY+")  rotate("+part.data.rotat+") skewX("+part.data.skewX+") skewY("+part.data.skewY+")"));
            }
            animate.resetOrigin = function(originx,originy){
                part.data.origX = originx
                part.data.origY = originy


                part.element
                .attr("transform-origin",(originx +"px "+ originy+"px"))


            }
            animate.resetFullBodyOrigin = function(originx,originy){

                part.anim.resetMovetoOrigin(originx,originy)

                helper(part.UpperBody,originx,originy)
                    helper(part.UpperBody.Head,originx,originy)
                        helper(part.UpperBody.Head.Hair,originx,originy)
                        helper(part.UpperBody.Head.Face,originx,originy)
                    helper(part.UpperBody.LeftY.Arm,originx,originy)
                    helper(part.UpperBody.LeftY.Fore,originx,originy)
                    helper(part.UpperBody.LeftY.Hand,originx,originy)
                    helper(part.UpperBody.Right.Arm,originx,originy)
                    helper(part.UpperBody.Right.Fore,originx,originy)
                    helper(part.UpperBody.Right.Hand,originx,originy)
                helper(part.LowerBody,originx,originy)
                    helper(part.LowerBody.LeftY.Leg,originx,originy)
                    helper(part.LowerBody.LeftY.Calf,originx,originy)
                    helper(part.LowerBody.LeftY.Foot,originx,originy)
                    helper(part.LowerBody.Right.Leg,originx,originy)
                    helper(part.LowerBody.Right.Calf,originx,originy)
                    helper(part.LowerBody.Right.Foot,originx,originy)


                function helper(object,originx2,originy2){
                    originx3 = parseInt(object.data.origX) + parseInt(originx2)
                    originy3 = parseInt(object.data.origY) + parseInt(originy2)
                    //console.log(originx3,originy3)
                    object.anim.resetOrigin(originx3,originy3) 
                }

            }
            animate.resetMovetoOrigin = function(originx,originy,op){
                var box = part.element.node().getBBox();
                var mx = originx - box.x
                var my = originy - box.y

                part.element
                .attr("transform-origin",(originx +"px "+ originy+"px"));

                part.data.tranX  = part.data.tranX + (mx)
                part.data.tranY  = part.data.tranY + my

                part.element
                .attr("transform", ("scale("+part.data.scalX+","+part.data.scalY+")  translate("+part.data.tranX+","+part.data.tranY+")  rotate("+part.data.rotat+") "));

            }
            animate.newPathData_Simple = function(input){
                return new Promise(async function(resolve, reject) {
                //console.log(part.data.id)
                //console.log("#PathPoly_" + input.num + part.data.id)
                //c
                d3.select("#PathPoly_" + input.num + part.data.id)
                    .transition()
                    .duration(input.dur)
                    .delay(input.del)
                    .ease(d3.easeLinear)
                    .attr("d",input.data)
                d3.select("#PathLine_" + input.num + part.data.id)
                    .transition()
                    .duration(input.dur)
                    .delay(input.del)
                    .ease(d3.easeLinear)
                    .attr("d",input.data)
                    
                    await sleep((input.dur + input.del) + 1)
                    resolve()
                })
            }
            return animate
}
        function anim_MouthSpeak_fun(Char){
            Char.anim.mouthSpeak = function(LipPath,gofor,delay,text){
                return new Promise(async function(resolve, reject) {
                    //text = text.replace(/(\r\n|\n|\r)/gm, "");
                    for (var i = 0; i < text.length; i++) {
//                        if((text.charAt(i) == "\r\n")||(text.charAt(i) == "\n")){
//                            console.log("break")
//                        }
                        await anim_MouthSpeak_Helper(text.charAt(i),LipPath,gofor,delay)
                    }
                    resolve();
                })
            }
            function anim_MouthSpeak_Helper(letter,LipPath,gofor,delay){
                return new Promise(async function(resolve, reject) {
                    //A E WR TS LN QU MBP FV o
                    letter = letter.toUpperCase()
                    if ((letter == "A")){
                        await Char.UpperBody.Head.Face.Mouth.anim.newPathData_Simple({num:1,dur:gofor,del:delay,data:LipPath.part.A})
                        resolve();
                    }else if((letter == "E")){
                        await Char.UpperBody.Head.Face.Mouth.anim.newPathData_Simple({num:1,dur:gofor,del:delay,data:LipPath.part.E}) 
                        resolve();
                    }else if((letter == "W")||(letter == "R")){
                        await Char.UpperBody.Head.Face.Mouth.anim.newPathData_Simple({num:1,dur:gofor,del:delay,data:LipPath.part.WR}) 
                        resolve();
                    }else if((letter == "T")||(letter == "S")){
                        await Char.UpperBody.Head.Face.Mouth.anim.newPathData_Simple({num:1,dur:gofor,del:delay,data:LipPath.part.TS}) 
                        resolve();
                    }else if((letter == "L")||(letter == "N")){
                        await Char.UpperBody.Head.Face.Mouth.anim.newPathData_Simple({num:1,dur:gofor,del:delay,data:LipPath.part.LN}) 
                        resolve();
                    }else if((letter == "Q")||(letter == "U")){
                        await Char.UpperBody.Head.Face.Mouth.anim.newPathData_Simple({num:1,dur:gofor,del:delay,data:LipPath.part.QU}) 
                        resolve();
                    }else if((letter == "M")||(letter == "B")||(letter == "P")){
                        await Char.UpperBody.Head.Face.Mouth.anim.newPathData_Simple({num:1,dur:gofor,del:delay,data:LipPath.part.MBP})
                        resolve();
                    }else if((letter == "F")||(letter == "V")){
                        await Char.UpperBody.Head.Face.Mouth.anim.newPathData_Simple({num:1,dur:gofor,del:delay,data:LipPath.part.FV}) 
                        resolve();
                    }else if((letter == "O")){
                        await Char.UpperBody.Head.Face.Mouth.anim.newPathData_Simple({num:1,dur:gofor,del:delay,data:LipPath.part.O}) 
                        resolve();
                    }else if((letter == ",")){
                        await sleep(gofor*1.75)
                        resolve();
                    }else if ((letter == "\r\n")||(letter == "\n")){
                        await sleep(delay*1.75)
                        resolve();
                    }else if((letter == " ")){
                        await sleep(gofor*0.5)
                        resolve();
                    }
                    else{
                        await sleep(gofor*0.05)
                        resolve();
                    }
                    
                })  
            }
        }
        //Naked Body
        function body_Standard_data(Outparent,partname,partname1,i,data,name){
            var data2 = {}
            if(partname1 == ("")){
                //Outparent[partname] = {}
                data2 = {
                    part:(Outparent[partname]),
                    partID:(partname+"_"+name),
                    polyfulldata:(data[partname]),
                    colorGroup:([ 
                        i.skinColorGroup,i.skinColorGroup,
                    ]),
                    lineGroup:([ 
                        i.bodyLineColorGroup,i.bodyLineColorGroup,
                    ])   
                }
                Outparent[partname] = proc_Standard_data(data2,name,i)
            }else{
                //Outparent[partname][partname1] = {}
                data2 = {
                    part:(Outparent[partname][partname1]),
                    partID:(partname+partname1+"_"+name),
                    polyfulldata:(data[partname][partname1]),
                    colorGroup:([ 
                        i.skinColorGroup,i.skinColorGroup,
                    ]),
                    lineGroup:([ 
                        i.bodyLineColorGroup,i.bodyLineColorGroup,
                    ])   
                } 

                Outparent[partname][partname1] = proc_Standard_data(data2,name,i)
            }

            return data2
}
        //Coustom hair parts
        function part_Standard_data(Outparent,partname,partname1,i,data,name){
            
            //console.log(data)
            var data2 = {}
            if(partname1 == ("")){
                //Outparent[partname] = {}
                data2 = {
                    part:(Outparent[partname]),
                    partID:(partname+"_"+name),
                    polyfulldata:(data.part),
                    colorGroup:i[partname].colorGroup,
                    lineGroup:i[partname].lineGroup
                }
                Outparent[partname] = proc_Standard_data(data2,name,i)
                Outparent[partname].name = data[partname].name
            }else{
                //Outparent[partname][partname1] = {}
                data2 = {
                    part:(Outparent[partname][partname1]),
                    partID:(partname+partname1+"_"+name),
                    polyfulldata:(data.part),
                    colorGroup:i[partname + partname1].colorGroup,
                    lineGroup:i[partname + partname1].lineGroup
                } 
                
                Outparent[partname][partname1] = proc_Standard_data(data2,name,i)
                Outparent[partname][partname1].name = data.name
            }
            

            return data2
        } 
        //Coustom clothes parts
        function clothes_Standard_data(Outparent,partname,partname1,i,data,name){
            var data2 = {}
                //Outparent[partname][partname1] = {}
                data2 = {
                    part:(Outparent[partname + partname1]),
                    partID:(partname+partname1+"_"+name),
                    polyfulldata:(data[partname+partname1].part),
                    colorGroup:i[partname + partname1].colorGroup,
                    lineGroup:i[partname + partname1].lineGroup
                } 
                
                Outparent[partname + partname1] = proc_Standard_data(data2,name,i)
                Outparent[partname + partname1].name = data[partname + partname1].name
            

            
            return data2
        } 
    
    }
    function multiBodyCreator(array){
        var ans = []
        array.forEach(function (item, index, array) {
            ans.push(BodyCreator(item.Z_name,item.Z_id,item.Z_FSTS,item.Z_Intel,item))
        });
        return ans
    }
    //The Body element Builder
    function BodyBuilder(FSTS,Char,testing){
        //Making the Full Character
        Char.element = element_group(FSTS,Char.data.id,Char.data.origX,Char.data.origY,Char.data.scalX, Char.data.scalY,Char.data.tranX,Char.data.tranY,Char.data.rotat);
        Char.all = []
        Char.all.push(Char.element)
        //Making the lower body
        body_LowerBody(Char.element,Char.LowerBody,Char.name,testing)
        //Making the Upper body 
        body_UpperBody(Char.element,Char.UpperBody,Char.name,testing)
        //add in the clothes
        body_Clothes(Char,Char.Clothes,Char.name)
        function body_Clothes(Char,Clothes,name){
            body_Clothes_Helper(Char,"ClothesBelt",name)
            body_Clothes_Helper(Char,"ClothesGloves",name)
            body_Clothes_Helper(Char,"ClothesPants",name)
            body_Clothes_Helper(Char,"ClothesShirt",name)
            body_Clothes_Helper(Char,"ClothesShoes",name)
            body_Clothes_Helper(Char,"ClothesSleeves",name)
            function body_Clothes_Helper(Char,partName,name){
                
                
                var Data = Char.Clothes[partName]
                Char.Clothes[partName].draw.helper = []
                //console.log("Data", Data)
                
                Char.Clothes[partName].draw.Pathfull.forEach(function(item, index, array) {
                    var desired_element = Char
                    for (var i = 0; i < item.p.length; i++) {
                        desired_element = desired_element[item.p[i]]
                    }
                    var adding = true
                    Char.Clothes[partName].draw.helper.forEach(function(item2, index2, array2) {
                        //console.log("match",item2.desired_element_id,desired_element.data.id,(item2.desired_element_id === desired_element.data.id))
                        
                        if (item2.desired_element_id === desired_element.data.id){
                            adding = false
                        }
                        
                    })
                    //console.log("end",adding)
                    if(adding){
                        Char.Clothes[partName].draw.helper.push({
                            desired_element_id:desired_element.data.id,
                            desired_element:desired_element,
                            Pathfull:[]
                        })
                    }
                })
                //console.log("Char.Clothes[partName].draw.helper", JSON.parse(JSON.stringify(Char.Clothes[partName].draw.helper)))
                
                Char.Clothes[partName].draw.Pathfull.forEach(function(item, index, array) {
                    
                    var desired_element = Char
                    for (var i = 0; i < item.p.length; i++) {
                        desired_element = desired_element[item.p[i]]
                    }
                    Char.Clothes[partName].draw.helper.forEach(function(item2, index2, array2) {
                        if (item2.desired_element_id == desired_element.data.id){
                            item2.Pathfull.push(item)
                        }else{
                            item2.Pathfull.push(false)
                        }
                        
                    })
                })
                
                
                var new_data = []
                Char.Clothes[partName].draw.helper.forEach(function(item, index, array) {
                    var ans = []
                    var tem = JSON.parse(JSON.stringify(Data))
                    ans = tem
                    ans.draw.Pathfull = item.Pathfull 
                    ans.desired_element = item.desired_element
                    ans.draw.helper = null
                    new_data.push(ans)
                    
                })
                //console.log("new_data", new_data)
                //console.log("new_data", JSON.parse(JSON.stringify(new_data)))
                
                Char.Clothes[partName].draw.helper = new_data
                
                Char.Clothes[partName].element = []
                Char.Clothes[partName].draw.helper.forEach(function(item, index, array) {
                    //console.log("item",item)
                    item.data.id = ("part"+index+item.data.id)
                    Char.Clothes[partName].element.push(sub_body_Processing(item.desired_element.addergroup,item,true,false,testing))
                })
                
                
                //console.log("Char.Clothes[partName].draw.helper", Char.Clothes[partName].draw.helper)
                //console.log("new_data", new_data) 
                
                
            }
        }
        //remove Dummy area
        d3.select("#dummyArea_"+Char.name).remove();
        //Char.UpperBody.data.origX    
        d3.select("#FullChar_"+Char.name).attr("transform-origin",(Char.UpperBody.data.origX+"px "+Char.UpperBody.data.origY+"px"))
        //Set the main test
        Char.test = async function() {
                console.log("=== ==> body_test_Lower_patrs")
                body_test_Lower(Char.LowerBody.LeftY)
                body_test_Lower(Char.LowerBody.Right)
                await sleep(13500)
                console.log("=== ==> body_test_Upper_parts")
                body_test_Upper(Char.UpperBody.LeftY)
                body_test_Upper(Char.UpperBody.Right)
                console.log("=== ==> body_test_Head")
                Char.UpperBody.Head.anim.test()
                await sleep(13500)
                console.log("=== ==> body_test_LowerBody")
                Char.LowerBody.anim.test()
                await sleep(4500)
                console.log("=== ==> body_test_UpperBody")
                Char.UpperBody.anim.test()
                await sleep(4500)
                console.log("=== ==> body_test_All")
                Char.anim.test()
                console.log("==> Test Done")
                async function body_test_Lower(part){
                    part.Foot.anim.test()
                    await sleep(4500)
                    part.Calf.anim.test()
                    await sleep(4500)
                    part.Leg.anim.test()
                    await sleep(4500)

                    part.Foot.anim.test()
                    part.Calf.anim.test()
                    part.Leg.anim.test()
                }
                async function body_test_Upper(part){
                    part.Hand.anim.test()
                    await sleep(4500)
                    part.Fore.anim.test()
                    await sleep(4500)
                    part.Arm.anim.test()
                    await sleep(4500)

                    part.Hand.anim.test()
                    part.Fore.anim.test()
                    part.Arm.anim.test()
                }
            }

        
        //bodypart rotation fixxer dont work for head, duck taope tape fix here
        //console.log("x,y",Char.UpperBody.Head.data.origX,Char.UpperBody.Head.data.origY)
        Char.UpperBody.Head.anim.resetOrigin((Char.UpperBody.Head.data.origX - 75),
                                             (Char.UpperBody.Head.data.origY + 48))
        
//        Char.LowerBody.LeftY.Leg.anim.resetOrigin((Char.LowerBody.LeftY.Leg.data.origX + 14),
//                                                   (Char.LowerBody.LeftY.Leg.data.origY - 2))
        
        Char.LowerBody.Right.Calf.anim.resetOrigin((Char.LowerBody.Right.Calf.data.origX + 16),
                                                   (Char.LowerBody.Right.Calf.data.origY - 2))
        Char.LowerBody.LeftY.Calf.anim.resetOrigin((Char.LowerBody.LeftY.Calf.data.origX + 16),
                                                   (Char.LowerBody.LeftY.Calf.data.origY - 2))
        
        
        
         //Returing and outputing   
        console.log("Builder Output of Char:"+Char.name+":",Char)
        return Char
        
        //function to make the basic leg ste
        function body_UpperBody(Outparent,bodyPartData,name,testing){
            
            //Upper Body Group
            bodyPartData.element = element_group(Outparent,bodyPartData.data.id,bodyPartData.data.origX,bodyPartData.data.origY,
                                                 bodyPartData.data.scalX,bodyPartData.data.scalY,bodyPartData.data.tranX,bodyPartData.data.tranY,bodyPartData.data.rotat);
            
            //head Group
            bodyPartData.Head.element = element_group(bodyPartData.element,bodyPartData.Head.data.id,bodyPartData.Head.data.origX,bodyPartData.Head.data.origY,
                                                 bodyPartData.Head.data.scalX,bodyPartData.Head.data.scalY,bodyPartData.Head.data.tranX,bodyPartData.Head.data.tranY,bodyPartData.Head.data.rotat);
            
            //hair Group
            bodyPartData.Head.Hair.element = element_group(bodyPartData.Head.element,bodyPartData.Head.Hair.data.id,bodyPartData.Head.data.origX,bodyPartData.Head.data.origY,
                                                 bodyPartData.Head.data.scalX,bodyPartData.Head.data.scalY,bodyPartData.Head.data.tranX,bodyPartData.Head.data.tranY,bodyPartData.Head.data.rotat);
           
            Char.all.push(bodyPartData)
            Char.all.push(bodyPartData.Head)
            Char.all.push(bodyPartData.Head.Hair)
            
           
            //Arm and Chest
            sub_body_Upper(bodyPartData.element,bodyPartData.Right,true,true,testing)
            sub_body_Processing(Outparent,bodyPartData,false,true,testing) //Making the upperBody group
            sub_body_Upper(bodyPartData.element,bodyPartData.LeftY,true,true,testing)
            
            //make hair parts
            sub_body_Processing(bodyPartData.Head.Hair.element,bodyPartData.Head.Hair.Pony,true,false,testing)
            sub_body_Processing(bodyPartData.Head.Hair.element,bodyPartData.Head.Hair.Hind,true,false,testing)
            sub_body_Processing(bodyPartData.element,bodyPartData.Head,false,false,testing)
            
            //face Group
            bodyPartData.Head.Face.element = element_group(bodyPartData.Head.element,bodyPartData.Head.Face.data.id,bodyPartData.data.origX,bodyPartData.data.origY,
                                                 bodyPartData.data.scalX,bodyPartData.data.scalY,bodyPartData.data.tranX,bodyPartData.data.tranY,bodyPartData.data.rotat);
            Char.all.push(bodyPartData.Head.Face)
            
            sub_body_Processing(bodyPartData.Head.element,bodyPartData.Head.Hair.Back,true,false,testing)
            sub_body_Processing(bodyPartData.Head.element,bodyPartData.Head.Hair.Front,true,false,testing)
            sub_body_Processing(bodyPartData.Head.element,bodyPartData.Head.Hair.Tip,true,false,testing)
            
             
            //Make face parts
            sub_body_Processing(bodyPartData.Head.Face.element,bodyPartData.Head.Face.Eyes,true,false,testing)
            //sub_body_Processing(bodyPartData.Head.Face.element,bodyPartData.Head.Face.Pupils,true,testing)
            sub_body_Processing(bodyPartData.Head.Face.element,bodyPartData.Head.Face.Mouth,true,false,testing)
            sub_body_Processing(bodyPartData.Head.Face.element,bodyPartData.Head.Face.Accessory,true,false,testing)
            sub_body_Processing(bodyPartData.Head.Face.element,bodyPartData.Head.Face.Glasses,true,false,testing)
            sub_body_Processing(bodyPartData.Head.Face.element,bodyPartData.Head.Face.Eyebrows,true,false,testing)
            
            //Upper Body Helper
            function sub_body_Upper(Outparent,bodyPartData,need_group,addgroup,testing){
                sub_body_Processing(Outparent,bodyPartData.Arm,need_group,addgroup,testing)
                sub_body_Processing(bodyPartData.Arm.element,bodyPartData.Fore,need_group,addgroup,testing)
                sub_body_Processing(bodyPartData.Fore.element,bodyPartData.Hand,need_group,addgroup,testing)
            }
            
        }
        
        //function to make the basic leg ste
        function body_LowerBody(Outparent,bodyPartData,name,testing){
            //Lower Body and legs
            var rotatpointX = bodyPartData.draw.Dime.bbox.x + (bodyPartData.draw.Dime.bbox.width * bodyPartData.draw.Dime.magX) 
            var rotatpointY = bodyPartData.draw.Dime.bbox.y + (bodyPartData.draw.Dime.bbox.height * bodyPartData.draw.Dime.magY)
            bodyPartData.element = element_group(Outparent,bodyPartData.data.id,rotatpointX, rotatpointY,bodyPartData.data.scalX,bodyPartData.data.scalY,
                                    bodyPartData.data.tranX,bodyPartData.data.tranY,bodyPartData.data.rotat)
            
            Char.all.push(bodyPartData)
            
            sub_body_Lower(bodyPartData.element,bodyPartData.LeftY,true,true,testing)
            sub_body_Lower(bodyPartData.element,bodyPartData.Right,true,true,testing)
            
            sub_body_Processing(Outparent,bodyPartData,false,true,testing)
            
            //Lower Body Helper
            function sub_body_Lower(Outparent,bodyPartData,need_group,addgroup,testing){
                sub_body_Processing(Outparent,bodyPartData.Leg,need_group,addgroup,testing)
                sub_body_Processing(bodyPartData.Leg.element,bodyPartData.Calf,need_group,addgroup,testing)
                sub_body_Processing(bodyPartData.Calf.element,bodyPartData.Foot,need_group,addgroup,testing)
            }
        }
        
        //Function to make Sub Body part
        function sub_body_Processing(Outparent,bodyPartData,need_group,addgroup,testing){
            
            //console.log("bodyPartData", bodyPartData)
            
            var Data = bodyPartData.draw
            if(!((Data.Pathfull.length) == (Data.Data.length))){console.error("The Poly and data are not in sycn for ID:" + bodyPartData.data.id)}
            
            //Rotation points
            var rotatpointX = Data.Dime.bbox.x + (Data.Dime.bbox.width * Data.Dime.magX) 
            var rotatpointY = Data.Dime.bbox.y + (Data.Dime.bbox.height * Data.Dime.magY)
            
            if (need_group){
                bodyPartData.element = element_group(Outparent,bodyPartData.data.id,rotatpointX, rotatpointY,bodyPartData.data.scalX,bodyPartData.data.scalY,
                                    bodyPartData.data.tranX,bodyPartData.data.tranY,bodyPartData.data.rotat)
                
                Char.all.push(bodyPartData)
            }
            
            //Show joints and origin
            if(testing){element_circle(bodyPartData.element,("Origin_Rotate_"+bodyPartData.data.id),rotatpointX,rotatpointY,10,"Red","Red",1,1,1,0,0,0)}
            if(testing){element_circle(bodyPartData.element,("Origin_LeftY_"+bodyPartData.data.id),Data.Dime.bbox.x,rotatpointY,1,"Gray","Gray",1,1,1,0,0,0)}
            if(testing){element_circle(bodyPartData.element,("Origin_Right_"+bodyPartData.data.id),Data.Dime.bbox.x + Data.Dime.bbox.width,rotatpointY,1,"Gray","Gray",1,1,1,0,0,0)}
            
            var avg = (parseInt(bodyPartData.data.origX) - Data.Dime.maxX) + (parseInt(bodyPartData.data.origX) - Data.Dime.minX) * Data.Dime.magX
            
            //Adding hte color groups
            bodyPartData.colorGroup.forEach(function(item, index, array) {
                    if (!(item ==false)){
                        if((item.type)==1){
                            element_linearGradient(bodyPartData.element,("ColorGradient_"+(index+1)+bodyPartData.data.id),0,0,0,100,item.color)
                            //element_linearGradient(Outparent,id,x1,y1,x2,y2,FillandOpac)
                        }else if ((item.type)==2){
                            element_radialGradient(bodyPartData.element,("ColorGradient_"+(index+1)+bodyPartData.data.id),item.color)
                            //element_radialGradient(Outparent,id,FillandOpac)
                        }else{
                            element_radialGradient(bodyPartData.element,("ColorGradient_"+(index+1)+bodyPartData.data.id),0,item.color)
                            //element_radialGradient(Outparent,id,FillandOpac)
                            console.error("bodyPartData.colortype was not 1,2 for ID:" + bodyPartData.data.id)
                        }
                    }    
                })
            
            
            //Adding hte color groups
            bodyPartData.lineGroup.forEach(function(item, index, array) {
                if (!(item ==false)){
                    if((item.type)==1){
                        element_linearGradient(bodyPartData.element,("LineGradient_"+(index+1)+bodyPartData.data.id),0,0,0,100,item.color)
                        //element_linearGradient(Outparent,id,x1,y1,x2,y2,FillandOpac)
                    }else if ((item.type)==2){
                        element_radialGradient(bodyPartData.element,("LineGradient_"+(index+1)+bodyPartData.data.id),item.color)
                        //element_radialGradient(Outparent,id,FillandOpac)
                    }else{
                        element_radialGradient(bodyPartData.element,("LineGradient_"+(index+1)+bodyPartData.data.id),0,item.color)
                        //element_radialGradient(Outparent,id,FillandOpac)
                        console.error("bodyPartData.colortype was not 1,2 for ID:" + bodyPartData.data.id)
                    }
                }
                })
            
            Data.Pathfull.forEach(function(item, index, array) {
//                    var AstrokW = Data.Data[index].strokW
//                    Data.Data[index].strokW = 1
//                
//                if(bodyPartData.lineGroup[item.c] != undefined){
//                    if(bodyPartData.lineGroup[item.c].w != undefined){
//                        Data.Data[index].strokW = parseInt(bodyPartData.lineGroup[item.c].w)
//                        //console.log(parseInt(bodyPartData.lineGroup[item.c].w))
//                    }
//                }
                
                    //console.log("before",AstrokW)
                    if (item != false){
                        //console.log(bodyPartData.lineGroup[item.c])
                        //console.log("after",AstrokW)
                        //Poly Path  
                        //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,fillop,stroke,strokW,stroop,sljoin,slcap)    
                        element_path(bodyPartData.element,("PathPoly_"+(index+1)+bodyPartData.data.id),item.d,
                                     Data.Data[index].scalX, Data.Data[index].scalY, Data.Data[index].tranX, Data.Data[index].tranY, Data.Data[index].rotat,
                                     ("url(#ColorGradient_"+(item.c)+bodyPartData.data.id+")"),Data.Data[index].fillop,"Black",Data.Data[index].strokW,0)
                        //Line Path
                        element_path(bodyPartData.element,("PathLine_"+(index+1)+bodyPartData.data.id),item.d,
                                     Data.Data[index].scalX,Data.Data[index].scalY,Data.Data[index].tranX,Data.Data[index].tranY,Data.Data[index].rotat,
                                     ("url(#LineGradient_"+(item.c)+bodyPartData.data.id+")"),0,("url(#LineGradient_"+(item.c)+bodyPartData.data.id+")"),Data.Data[index].strokW,Data.Data[index].strokop,"round","butt")
                        //Data.Data[index].strokW = AstrokW
                        
                    }
                
                //Data.Data[index].strokW = AstrokW
            })
            
            if (addgroup){
                bodyPartData.addergroup = element_group(bodyPartData.element,(bodyPartData.data.id+"addergroup"),rotatpointX,rotatpointY,bodyPartData.data.scalX,bodyPartData.data.scalY,
                                    bodyPartData.data.tranX,bodyPartData.data.tranY,bodyPartData.data.rotat)
            }
            
            return bodyPartData.element
        }
     
    }
    function multiBodyBuilder(array,testing){
        var ans = []
        array.forEach(function (item, index, array) {
            ans.push(BodyBuilder(item.Z_FSTS,item,testing))
        });
        return ans
    }
//element makeing functions
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
        .attr("id",id) //fill-opacity="0.0"
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
    function element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,fillop,stroke,strokW,stroop,sljoin,slcap){
    //element_path(Outparent,id,point_text,scalX,scalY,tranX,tranY,rotat,fill,fillop,stroke,strokW,stroop,sljoin,slcap)
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


        //Creating the elememtstroke-opacity
        Outparent
        .append("path")
        .attr("id",id)
        .attr("d",point_text)
        .attr("fill-opacity",fillop)
        .attr("stroke-opacity",stroop)
        .attr("fill-rule","evenodd")
        .attr("stroke-linejoin",sljoin)
        .attr("stroke-linecap",slcap)
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
    //Function to make SVG_ellipse element
    function element_circle(Outparent,id,cx,cy,r,fill,stroke,strokW,scalX,scalY,tranX,tranY,rotat){
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
        .append("circle")
        .attr("id",id)
        .attr("cx",cx)
        .attr("cy",cy)
        .attr("r",r)
        .attr("style",style_cod)
        .attr("transform",trans_cod);

        return d3.select("#" + id)  
    }
    //Function to make SVG_rect element
    function element_rect(Outparent,id,width,height,fill,stroke,strokW,scalX,scalY,tranX,tranY,rotat){
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
        .append("rect")
        .attr("id",id)
        .attr("width",width)
        .attr("height",height)
        .attr("style",style_cod)
        .attr("transform",trans_cod);

        return d3.select("#" + id)  
    }
    //Function to make SVG_rect element
    function element_img(Outparent,id,width,height,link,stroke,strokW,scalX,scalY,tranX,tranY,rotat){
    //(Outparent,id,width,height,link,stroke,strokW,scalX,scalY,tranX,tranY,rotat)
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
            //style_stroke
            var style_stro = (" stroke:" + stroke +"; ")
            //console.log("style_stroke",style_stro)

            //style_stroke_width
            var style_strw = (" stroke-width:" + strokW +"; ")
            //console.log("style_stroke_width",style_strw)

        //transform_code
        var style_cod = ( style_stro + style_strw)
        //console.log("style_code",trans_cod)

        //Creating the elememt
        Outparent
        .append("image")
        .attr("id",id)
        .attr("width",width)
        .attr("height",height)
        .attr("href",link)
        .attr("style",style_cod)
        .attr("transform",trans_cod);

        return d3.select("#" + id)  
    }
    //Function to make SVG_Text element
    function element_text(Outparent,text,id,x,y,stroke,strokW,scalX,scalY,tranX,tranY,rotat){
        //(Outparent,id,width,height,link,stroke,strokW,scalX,scalY,tranX,tranY,rotat)
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
                //style_stroke
                var style_stro = (" stroke:" + stroke +"; ")
                //console.log("style_stroke",style_stro)

                //style_stroke_width
                var style_strw = (" stroke-width:" + strokW +"; ")
                //console.log("style_stroke_width",style_strw)

            //transform_code
            var style_cod = ( style_stro + style_strw)
            //console.log("style_code",trans_cod)
            
            //Creating the elememt
            Outparent
            .append("text")
            .attr("id",id)
            .attr("x",x)
            .attr("y",y)
            .attr("style",style_cod)
            .attr("transform",trans_cod)
            .text(text);
            
            return d3.select("#" + id)  
        }
//Helper functions other
    //forces health sleep in code
    function sleep(ms) {
        //await sleep(1)
        return new Promise(resolve => setTimeout(resolve, ms));
    } 
    //get random from Zero
    function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
        }
}
mainFunction()