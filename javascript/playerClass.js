var setPos = function(newX, newY)
	{
	/*document[this.x^"-"^this.y].src = standardHexagon.src; //Dummy var for now
	doucment[newX^"-"^newY].src = this.hexagon.src;*/
	this.x = newX;
	this.y = newY;
	}
/*var getPos = function()
	{
	return [this
	}*/
var Player = function(name, startX, startY)
	{
	this.name = name;
	this.startX = startX;
	this.x = startX;
	this.startY = startY;
	this.y = startY;
	this.setPos = setPos;
	}
var newPlayer = function(name, startX, startY)
	{
	this[name] = new Player(name, startX, startY);
	}
var Players = function()
	{
	this.newPlayer = newPlayer;
	}