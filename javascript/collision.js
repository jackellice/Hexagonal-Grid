function collision(player,planet)
	{
	var lineValue=[0,0];
	var bloodyAtronach = 0;
	console.log(bloodyAtronach);
	var planetX = triplanetary[planet].x;
	var planetY = triplanetary[planet].y;
	console.log(planetX+", "+planetY);
	this.oldX = triplanetary[player].oldXY[0];
	this.oldY = triplanetary[player].oldXY[1];
	console.log(oldX+", "+oldY);
	this.newX = triplanetary[player].x;
	this.newY = triplanetary[player].y;
	console.log(this.newX+", "+newY);
	this.chartVector = function(oldieX,oldieY,currentX,currentY)
	{
	console.log(oldieX+", "+currentX+", "+currentY);
	lineGradient = (currentY - oldY) / (currentX - oldX);
	console.log(lineGradient+ " lineGradient");
	valueC = currentY - (lineGradient*currentX);
	console.log(valueC+ " valueC");
	lineValue[0] = lineGradient;
	lineValue[1] = valueC;
	console.log(lineValue);
	}
	this.collisionCheck = function()
		{
		if(this.oldX>this.newX)
			{
			console.log("oldX is more than new X!");
			if(this.oldY>this.newY)
				{
				console.log("oldY is more than new Y!");
			if (planetX<this.oldX && planetX>=this.newX && planetY<this.oldY && planetY>this.oldY)
				{
				console.log("we might crash!")
				bloodyAtronach = Math.floor(planetX*lineValues[0]+lineValues[1]);
				console.log(bloodyAtronach+"so you know");
				if(planet.coordinates.y === bloodyAtronach)
										{
					console.log("You've crashed, game over!");
					}
				else
					{
					console.log("close one!");
					}}
				}
			}
			else if(oldY<newY)
				{
			if (planetX<oldX && planetX>=newX && planetY>oldY && planetY>oldY)
				{
				chartVector(oldX,oldY,newX, newY);
				bloodyAtronach = planetX*lineValues[0]+lineValues[1];
				console.log(bloodyAtronach);
				if(planet.coordinates.y === bloodyAtronach)
										{
					console.log("You've crashed, game over!");
					}}
				else
					{
					console.log("close one!");
					}
				}
		else if(oldX<=newX)
			{
			if(oldY<=newY)
				{
			if (planetX>oldX && planetX<=newX && planetY<oldY && planetY>oldY)
				{
				chartVector(player.oldXY,player.newCoordinates);
				bloodyAtronach = planetX*lineValues[0]+lineValues[1];
				if(planet.coordinates.y === bloodyAtronach)
										{
					console.log("You've crashed, game over!");
					}}
				else
					{
					console.log("close one!");
					}
				}
			}
			else if(oldY<=newY)
				{
			if (planetX>oldX && planetX<=newX && planetY>oldY && planetY>oldY)
				{
				chartVector(player.oldXY,player.newCoordinates);
				bloodyAtronach = planetX*lineValues[0]+lineValues[1];
				if(planet.coordinates.y === bloodyAtronach)
										{
					console.log("You've crashed, game over!");
					}
				}
			else
				{
				console.log("close one!");
				}
				}
		else
			{
			console.log("hurray! no crash!");
			}
		console.log("The bad check");
		};
	this.chartVector(this.oldX,this.oldY,this.newX,this.newY)
	this.collisionCheck(player,planet);
}