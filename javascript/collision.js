
function collision(player,planet)
	{
	this.lineValue=[];
	bloodyAtronach = 0;
	this.planetX = planet.coordinates.x
	this.planetY = planet.coordinates.y
	this.oldX = player.oldCoordinates.x
	this.oldY = player.oldCoordinates.y
	this.newX = player.newCoordinates.x
	this.newY = player.newCoordinates.y
	this.chartVector = function(oldlocation,newlocation)
	{
	lineGradient = (newlocation.y - oldlocation.y) / (newlocation.x - newlocation.x)
	valueC = newlocation.y - (g*newlocation.x)
	lineValues[0] = lineGradient
	lineValues[1] = valueC
	}
	this.collisionCheck = function()
		{
		if(oldX>newX)
			{
			if(oldY>newY)
				{
			if (planetX<oldX && planetX>=newX && planetY<oldY && planetY>oldY)
				{
				chartVector(player.oldCoordinates,player.newCoordinates);
				bloodyAtronach = planetX*lineValues[0]+lineValues[1];
				if(planet.coordinates.y === bloodyAtronach)
					{
					console.log("You've crashed, game over!");
					}
				}
			}
			else if(oldY<newY)
				{
			if (planetX<oldX && planetX>=newX && planetY>oldY && planetY>oldY)
				{
				chartVector(player.oldCoordinates,player.newCoordinates);
				bloodyAtronach = planetX*lineValues[0]+lineValues[1];
				if(planet.coordinates.y === bloodyAtronach)
					{
					console.log("You've crashed, game over!");
					}
				}
			}
		if(oldX<=newX)
			{
			if(oldY<=newY)
				{
			if (planetX>oldX && planetX<=newX && planetY<oldY && planetY>oldY)
				{
				chartVector(player.oldCoordinates,player.newCoordinates);
				bloodyAtronach = planetX*lineValues[0]+lineValues[1];
				if(planet.coordinates.y === bloodyAtronach)
					{
					console.log("You've crashed, game over!");
					}
				}
			}
			else if(oldY<=newY)
				{
			if (planetX>oldX && planetX<=newX && planetY>oldY && planetY>oldY)
				{
				chartVector(player.oldCoordinates,player.newCoordinates);
				bloodyAtronach = planetX*lineValues[0]+lineValues[1];
				if(planet.coordinates.y === bloodyAtronach)
					{
					console.log("You've crashed, game over!");
					}
				}
			}
		}
		}
