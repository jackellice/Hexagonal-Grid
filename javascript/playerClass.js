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
	}