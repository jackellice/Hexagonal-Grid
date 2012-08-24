var setPos = function(newX, newY)
	{
	/*document[this.x^"-"^this.y].src = standardHexagon.src; //Dummy var for now
	document[newX^"-"^newY].src = this.hexagon.src;*/
	this.x = newX;
	this.y = newY;
	}
var getPosX = function()
	{
	return this.x;
	}
var getPosY = function()
	{
	return this.y;
	}
var Player = function(name, startX, startY)
	{
	private this.name = name;
	private this.startX = startX;
	private this.x = startX;
	private this.startY = startY;
	private this.y = startY;
	public this.setPos = setPos;
	}
var newPlayer = function(name, startX, startY)
	{
	public this[name] = new Player(name, startX, startY);
	}
var Players = function()
	{
	public this.newPlayer = newPlayer;
	}