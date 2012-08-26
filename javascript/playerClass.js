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
		};
	this.setPos = setPos;
	this.momentum = [0,0,0];
	this.planetGravityPull=0;
	this.move=function(x,y,z){
	var upDown=y*104+z*52+x*52;
	var leftRight=x*90+z*90;
	if(this.y+upDown>1000||this.x+leftRight>900||this.y+upDown<5||this.x+leftRight<5)
		{
		console.log("you can't go there");
		}
	else
		{
		canvas2d.drawImage(board.background,this.x,this.y,120,104);
		canvas2d.drawImage(this.token,this.x+leftRight,this.y+upDown,120,104);
		this.x+=leftRight;
		this.y+=upDown;
		}};
	this.turn=function(x,y,z)
	{
	this.momentum[0]+=x;
	this.momentum[1]+=y
	this.momentum[2]+=z;
	this.move(x,y,z);
	this.crashPlanet = function(theCraft,Planetx,Planety)
	{
	if(theCraft[0]===Planetx&& Planety===theCraft[1])
		{
		console.log("You've Crashed! Game over");
		}
	};
	
};
};
/*
	if(crashPlanet(Player1.xy,Mars.coordinate.x,Mars.coordinate.y)===true)
			{
			
			}
	if(this.planetGravityPull!==0){
			this.moveDown();
			this.planetGravityPull--;
			}
	if(Mars.gravityFields.Top[0]===Player1.xy[0] && Mars.gravityFields.Top[1]===Player1.xy[1])
		{
	this.planetGravityupDown +=1;
	console.log("test")
		}
	else if(Mars.gravityFields.Top[0]===Player1.xy[0] && Mars.gravityFields.Top[1]===Player1.xy[1])
		{
		this.planetGravityleftRight +=1;
		}
	else if(Mars.gravityFields.Top[0]===Player1.xy[0] && Mars.gravityFields.Top[1]===Player1.xy[1])
		{
		this.planetGravityRightLeft +=1;
		}
	else if(Mars.gravityFields.Top[0]===Player1.xy[0] && Mars.gravityFields.Top[1]===Player1.xy[1])
		{
		this.planetGravityupDown -=1;
		}
	else if(Mars.gravityFields.Top[0]===Player1.xy[0] && Mars.gravityFields.Top[1]===Player1.xy[1])
		{
		this.planetGravityRightLeft -=1;
		}
	else if(Mars.gravityFields.Top[0]===Player1.xy[0] && Mars.gravityFields.Top[1]===Player1.xy[1])
		{
		this.planetGravityleftRight -=1;
		}*/
		
