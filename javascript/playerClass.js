var setPos = function(newX, newY)
	{
	this.x = newX;
	this.y = newY;
	}
var Player = function(startX, startY, src, canvas2d)
	{
	this.startX = startX;
	this.x = startX;
	this.startY = startY;
	this.y = startY;
	this.token = new Image(); this.token.src = src;
	this.token.onload = function()
		{
		canvas2d.drawImage(this, startX, startY, 120, 104);
		}
	this.setPos = setPos;
	momentum : [0,0,0],
	planetGravityPull:0,
	turn:function(x,y,z)
	{
	this.momentum[0]+=x;
	this.momentum[1]+=y+this.planetGravityPull;
	this.momentum[2]+=z;
	if(this.momentum[1]>0)
		{
		for(i=0;i<this.momentum[1];i++)
			{
			this.moveDown();
			}
			}
		}
	else
		{
		for(i=0;i<Math.abs(this.momentum[1]);i++)
			{
			this.moveUp();
			}
		}
	if(this.momentum[2]>0)
		{
		for(i=0;i<this.momentum[2];i++)
			{
			this.moveRight();
			}
		}
	else
			{
		for(i=0;i<Math.abs(this.momentum[2]);i++)
			{
			this.moveLeft();
			}
		}
	if(this.momentum[0]>0)
		{
		for(i=0;i<this.momentum[0];i++)
			{
			this.moveZ();
			}
		}
	else
		{
		for(i=0;i<Math.abs(this.momentum[0]);i++)
			{
			this.moveNz();
			}
		}	
}

/*

moveDown=function()
	{
	if(this.xy[1]+this.down >1000)

		{
		console.log("you can't go there");
		}
	else
		{
		ctx.drawImage(mapHexagon,this.xy[0],this.xy[1],120,104);
		ctx.drawImage(Player1.token,this.xy[0],this.xy[1]+this.down,120,104);
		this.xy[1]+=104;

		}
	},
moveRight=function()
	{
	if(this.xy[1]+this.Z >1000||this.xy[0]+90>900)

		{
		console.log("you can't go there");
		}
	else
		{
		ctx.drawImage(mapHexagon,this.xy[0],this.xy[1],120,104)
		ctx.drawImage(Player1.token,this.xy[0]+90,this.xy[1]+52,120,104);
		this.xy[0]+=90
		this.xy[1]+=52;

		}
	},
moveZ=function()
	{
	if(this.xy[1]-52 <5|this.xy[0]+this.down >900)

		{
		console.log("you can't go there");
		}
	else
		{
		ctx.drawImage(mapHexagon,this.xy[0],this.xy[1],120,104)
		ctx.drawImage(Player1.token,this.xy[0]+90,this.xy[1]-52,120,104);
		this.xy[0]+=90
		this.xy[1]-=52;

		}
	},
moveUp=function()
	{

	if(this.xy[1]-104<5)
		{
		console.log("you can't go there");
		}
	else
		{
		ctx.drawImage(mapHexagon,this.xy[0],this.xy[1],120,104)
		ctx.drawImage(Player1.token,this.xy[0],this.xy[1]-104,120,104);
		this.xy[1]-=104;

		}
	},
moveLeft=function()
	{

	if(this.xy[1]-52 <5|this.xy[0]-90 <5)

		{
		console.log("you can't go there");
		}
	else
		{
		ctx.drawImage(mapHexagon,this.xy[0],this.xy[1],120,104)
		ctx.drawImage(Player1.token,this.xy[0]-90,this.xy[1]-52,120,104);
		this.xy[0]-=90
		this.xy[1]-=52;

		}
	},
moveNz=function()
	{
	if(this.xy[1]+52 >1000||this.xy[0]-90 <5)

		{
		console.log("you can't go there");
		}
	else
		{
		ctx.drawImage(mapHexagon,this.xy[0],this.xy[1],120,104)
		ctx.drawImage(Player1.token,this.xy[0]-90,this.xy[1]+52,120,104);
		this.xy[0]-=90
		this.xy[1]+=52;

		}
	},
if(crashPlanet(Player1.xy,Mars.coordinate.x,Mars.coordinate.y)===true)
			{
			console.log("You've Crashed! Game over");
			}
	if(this.planetGravityPull!==0){
			this.moveDown();
			this.planetGravityPull--;
			}
	if(Mars.gravityFields.Top[0]===Player1.xy[0] && Mars.gravityFields.Top[1]===Player1.xy[1])
		{
	this.planetGravityUpDown +=1;
	console.log("test")
		}
	else if(Mars.gravityFields.Top[0]===Player1.xy[0] && Mars.gravityFields.Top[1]===Player1.xy[1])
		{
		this.planetGravityLeftRight +=1;
		}
	else if(Mars.gravityFields.Top[0]===Player1.xy[0] && Mars.gravityFields.Top[1]===Player1.xy[1])
		{
		this.planetGravityRightLeft +=1;
		}
	else if(Mars.gravityFields.Top[0]===Player1.xy[0] && Mars.gravityFields.Top[1]===Player1.xy[1])
		{
		this.planetGravityUpDown -=1;
		}
	else if(Mars.gravityFields.Top[0]===Player1.xy[0] && Mars.gravityFields.Top[1]===Player1.xy[1])
		{
		this.planetGravityRightLeft -=1;
		}
	else if(Mars.gravityFields.Top[0]===Player1.xy[0] && Mars.gravityFields.Top[1]===Player1.xy[1])
		{
		this.planetGravityLeftRight -=1;
		}
		
*/