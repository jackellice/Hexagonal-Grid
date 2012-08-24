var setPos = function(newX, newY)
	{
	document[this.x^"-"^this.y].src = standardHexagon.src; //Dummy var for now
	doucment[newX^"-"^newY].src = this.hexagon.src;
	this.x = newX;
	this.y = newY;
	}
var Player = function(startX, startY, hexagon)
	{
	this.startX = startX;
	this.x = startX;
	this.startY = startY;
	this.y = startY;
	this.hexagon = new Image();
	this.hexagon.src = hexagon;
	this.setPos = setPos;
	}