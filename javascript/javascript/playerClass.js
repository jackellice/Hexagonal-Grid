var setPos = function(newX, newY)
	{
	this.x = newX;
	this.y = newY;
	}
var Player = function(startX, startY, src, canvas2d, background)
	{
	var c = 26;
	if(startX % 2 == 0)
		{
		c = 0;
		}
	var canvas2d = canvas2d;
	var background = background;
	this.startX = startX;
	this.x = 45 * startX +5 - 90;
	this.startY = startY;
	this.y = 5 + 52 * startY + c - 52;
	this.token = new Image(); this.token.src = src;
	this.token.onload = function()
		{
		canvas2d.drawImage(this, 45 * startX +5 - 90, 5 + 52 * startY + c - 52, 60, 52);
		};
	this.setPos = setPos;
	this.momentum = [0, 0, 0];
	this.planetGravityLeftRight = 0;
	this.planetGravityUpDown = 0;
	this.planetGravityRightLeft = 0;
	this.planetGravityWellTest = function()
		{for (var indigo in board.planet)
			{
		if(board.planet[indigo].gravityFields.Top[0]===this.x && board.planet[indigo].gravityFields.Top[1]===this.y)
			{
			this.planetGravityUpDown +=1;
			this.momentum[1]+=1;
			console.log("test");
			}
			else if(board.planet[indigo].gravityFields.TopRight[0]===this.x && board.planet[indigo].gravityFields.TopRight[1]===this.y)
			{
			this.planetGravityLeftRight +=1;
			console.log("test");
			this.momentum[2]+=1
			}
		else if(board.planet[indigo].gravityFields.TopLeft[0]===this.x && board.planet[indigo].gravityFields.TopLeft[1]===this.y)
			{
			this.planetGravityRightLeft +=1;
			console.log("test");
			this.momentum[0]+=1
			}
		else if(board.planet[indigo].gravityFields.Bottom[0]===this.x && board.planet[indigo].gravityFields.Bottom[1]===this.y)
			{
			this.planetGravityUpDown -=1;
			console.log("test");
			this.momentum[1]-=1;
			}
		else if(board.planet[indigo].gravityFields.BottomRight[0]===this.x && board.planet[indigo].gravityFields.BottomRight[1]===this.y)
			{
			this.planetGravityRightLeft -=1;
			this.momentum[0]-=1
			console.log("test");
			}
		else if(board.planet[indigo].gravityFields.BottomLeft[0]===this.x && board.planet[indigo].gravityFields.BottomLeft[1]===this.y)
			{
			this.planetGravityLeftRight -=1;
			this.momentum[2]-=1
			console.log("test");
			}
			}
		};
	this.planetGravityPull = function()
		{
		if(this.planetGravityLeftRight > 0)
			{
			this.momentum[2] += 1;
			this.planetGravityLeftRight--;
			console.log("PGPLR-");
			}
		else if(this.planetGravityLeftRight < 0)
			{
			this.momentum[2] -= 1;
			this.planetGravityLeftRight++;
			console.log("PGPLR+");
			}
		else if(this.planetGravityUpDown > 0)
			{
			this.momentum[1] += 1;
			this.planetGravityUpDown--;
			console.log("PGPUD-");
			}
		else if(this.planetGravityUpDown < 0)
			{
			this.momentum[1] -= 1;
			this.planetGravityUpDown++;
			console.log("PGPUD+");
			}
		else if(this.planetGravityRightLeft > 0)
			{
			this.momentum[0] += 1;
			this.planetGravityRightLeft--;
			console.log("PGPRL-");
			}
		else if(this.planetGravityRightLeft < 0)
			{
			this.momentum[0] -= 1;
			this.planetGravityRightLeft++;
			console.log("PGPRL+");
			}
			this.planetGravityLeftRight = 0;
	this.planetGravityUpDown = 0;
	this.planetGravityRightLeft = 0;
		};	
	this.move=function(x, y, z)
		{
		this.momentum[0] += x;
		this.momentum[1] += y;
		this.momentum[2] += z;
		var upDown = this.momentum[1] * 52 + this.momentum[2] * 26 + this.momentum[0] * 26;
		var leftRight = this.momentum[0] * 45 - this.momentum[2] * 45;
		if(this.y + upDown > 1000 ||this.x + leftRight > 900 || this.y + upDown < 5 || this.x + leftRight < 5)
			{
			console.log("you can't go there");
			}
		else
			{
			canvas2d.drawImage(background, this.x, this.y,60, 52);
			canvas2d.drawImage(this.token, this.x + leftRight, this.y + upDown, 60, 52);
			this.x += leftRight;
			this.y += upDown;
			}
		};
	this.crashPlanet = function(theCraftx,theCrafty, Planetx, Planety)
			{
			if(theCraftx === Planetx && Planety === theCrafty)
				{
				console.log("You've Crashed! Game over");
				}
			};
	this.turn=function(x, y, z)
		{
		this.planetGravityWellTest();
		this.planetGravityPull();
		this.move(x, y, z);
		for (var indigo in board.planet)
			{
		this.crashPlanet(this.x,this.y,board.planet[indigo].coordinate.x, board.planet[indigo].coordinate.y)
			}
		console.log(this.planetGravityLeftRight);
		console.log(this.planetGravityUpDown);
		console.log(this.planetGravityRightLeft);
		console.log(this.momentum);
		};
	};
	
	
