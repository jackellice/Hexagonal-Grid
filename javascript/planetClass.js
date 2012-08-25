var updateGravityFields = function()
	{
	this.gravityFields.Top = [this.coordinate.x, this.coordinate.y - 104];
	this.gravityFields.TopRight = [this.coordinate.x + 90, this.coordinate.y - 52];
	this.gravityFields.BottomRight = [this.coordinate.x + 90, this.coordinate.y + 52];
	this.gravityFields.Bottom = [this.coordinate.x, this.coordinate.y + 104];
	this.gravityFields.BottomLeft = [this.coordinate.x - 90, this.coordinate.y + 52];
	this.gravityFields.TopLeft = [this.coordinate.x - 90, this.coordinate.y - 52];
	}
var Planet = function(x, y, src)
	{
	this.token = new Image(); this.token.src = src;
	this.coordinate = [];
	this.coordinate.x = x;
	this.coordinate.y = y;
	this.updateGravityFields = updateGravityFields;
	this.gravityFields = [];
	}