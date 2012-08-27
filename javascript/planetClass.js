var updateGravityFields = function()
	{
	this.gravityFields.Top = [this.coordinate.x, this.coordinate.y - 52];
	this.gravityFields.TopRight = [this.coordinate.x + 45, this.coordinate.y - 26];
	this.gravityFields.BottomRight = [this.coordinate.x + 45, this.coordinate.y + 26];
	this.gravityFields.Bottom = [this.coordinate.x, this.coordinate.y + 52];
	this.gravityFields.BottomLeft = [this.coordinate.x - 45, this.coordinate.y + 26];
	this.gravityFields.TopLeft = [this.coordinate.x - 45, this.coordinate.y - 26];
	}
var Planet = function(x, y, src, canvas2d)
	{
	this.token = new Image(); this.token.src = src;
	this.token.onload = function()
		{
		canvas2d.drawImage(this, x, y, 60, 52);
		}
	this.coordinate = [];
	this.coordinate.x = x;
	this.coordinate.y = y;
	this.gravityFields = [];
	this.updateGravityFields = updateGravityFields;
	}