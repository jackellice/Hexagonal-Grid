var tokenOnload = function(name)
		{
		this.board.drawImage(this[name].token, this[name].x, this[name].y, 60, 52);
		}
var gravityWellTest = function(player)
	{
	var nPlanets = triplanetary.planets.length;
	for(i = 0; i < nPlanets; i++)
		{
		var planet = triplanetary.planets[i];
		if(this[planet].gravityFields.Top.x === this[player].x && this[planet].gravityFields.Top.y === this[player].y)
			{
			this[player].y += 1;
			console.log("Top gravity field engaged.");
			}
		else if(this[planet].gravityFields.TopRight.x === this[player].x && this[planet].gravityFields.TopRight.y === this[player].y)
			{
			this[player].z += 1;
			console.log("test");
			}
		else if(this[planet].gravityFields.TopLeft.x === this[player].x && this[planet].gravityFields.TopLeft.y === this[player].y)
			{
			this[player].x += 1;
			console.log("test");
			}
		else if(this[planet].gravityFields.Bottom.x === this[player].x && this[planet].gravityFields.Bottom.y === this[player].y)
			{
			this[player].y -= 1;
			console.log("test");
			}
		else if(this[planet].gravityFields.BottomRight.x === this[player].x && this[planet].gravityFields.BottomRight.y === this[player].y)
			{
			this[player].x -= 1
			console.log("test");
			}
		else if(this[planet].gravityFields.BottomLeft.x === this[player].x && this[planet].gravityFields.BottomLeft.y === this[player].y)
			{
			this[player].z -= 1
			console.log("test");
			}
		}
	}
var move = function(player, x, y, z)
	{
	this[player].momentum.x += x;
	this[player].momentum.y += y;
	this[player].momentum.z += z;
	var upDown = this[player].momentum.y * 52 + this[player].momentum.z * 26 + this[player].momentum.x * 26;
	var leftRight = this[player].momentum.x * 45 - this[player].momentum.z * 45;
	if(this[player].y + upDown > 2280 ||this[player].x + leftRight > 1850 || this[player].y + upDown < 5 || this[player].x + leftRight < 5)
		{
		console.log("you can't go there");
		}
	else
		{
		this.board.drawImage(background, this[player].x, this[player].y, 60, 52);
		this[player].x += leftRight;
		this[player].y += upDown;
		this.board.drawImage(this[player].token, this[player].x, this[player].y, 60, 52);
		}
	}
var crashPlanet = function(player, planet)
	{
	if(this[player].x === this[planet].x && this[player].y === this[name].y)
		{
		console.log("You've Crashed! Game over");
		}
	}
var turn = function(player, x, y, z)
	{
	this.gravityWellTest(player);
	this.move(player, x, y, z);
	for (planet in this.planets)
		{
		this.crashPlanet(player, planet);
		}
	console.log(this[player].momentum);
	}
var sixDirectionMove = function(player, x, y, z)
	{
	var getGradient = function(b, a)
		{
		xMinus = (b[0] - a[0]);
		yMinus =  (b[1] - a[1]);
		gradient = yMinus / xMinus;
		return gradient;
		}
	var upDown = y * 52 + z * 26 + x * 26 + this[player].y;
	var leftRight = x * 45 - z * 45 + this[player].x;
	var A = [leftRight + 15, upDown];
	var B = [leftRight + 45, upDown];
	var C = [leftRight + 60, upDown + 26];
	var D = [leftRight, upDown + 26];
	var E = [leftRight + 15, upDown + 52];
	var F = [leftRight + 45, upDown + 52];
	var key = [event.clientX - 7 + document.body.scrollLeft, event.clientY - 80 + document.body.scrollTop];
	if (getGradient(B, key) > getGradient(B, C) && getGradient(F, key) < getGradient(F, C))
		{
		return true;
		}
	else if (getGradient(A, key) < getGradient(A, D) && getGradient(E, key) > getGradient(E, D))
		{
		return true;
		}
	else if(key[0] > A[0] && key[1] > A[1] && key[0] < B[0] && key[1] < F[1])
		{
		return true;
		}
	else
		{
		return false;
		}
	}
var newPlayer = function(name, x, y, src)
	{
	this[name] = [];
	this.players[this.players.length] = name;
	this[name].x = x;
	this[name].y = y;
	this[name].token = new Image(); this[name].token.src = src;
	this[name].token.onload = this.tokenOnload(name);
	this[name].momentum = [];
	this[name].momentum.x = 0;
	this[name].momentum.y = 0;
	this[name].momentum.z = 0;
	}
var updateGravityFields = function(planet)
	{
	this[planet].gravityFields.Top.x = this[planet].x;
	this[planet].gravityFields.Top.y = this[planet].y - 52;
	this[planet].gravityFields.TopRight.x = this[planet].x + 45;
	this[planet].gravityFields.TopRight.y = this[planet].y - 26;
	this[planet].gravityFields.BottomRight = this[planet].x + 45;
	this[planet].gravityFields.BottomRight = this[planet].y + 26;
	this[planet].gravityFields.Bottom = this[planet].x;
	this[planet].gravityFields.Bottom = this[planet].y + 52;
	this[planet].gravityFields.BottomLeft = this[planet].x - 45;
	this[planet].gravityFields.BottomLeft = this[planet].y + 26;
	this[planet].gravityFields.TopLeft = this[planet].x - 45;
	this[planet].gravityFields.TopLeft = this[planet].y - 26;
	}	
var newPlanet = function(name, x, y, src)
	{
	this[name] = [];
	this.planets[this.planets.length] = name;
	var c = 26;
	if(x % 2 === 0)
		{
		c = 0;
		}
	this[name].x = 45 * x + 5 - 90;
	this[name].y = 5 + 52 * y + this.c - 52;
	this[name].token = new Image(); this[name].token.src = src;
	this[name].token.onload = this.tokenOnload(name);
	this[name].gravityFields = [];
	this[name].gravityFields.Top = [];
	this[name].gravityFields.TopRight = [];
	this[name].gravityFields.BottomRight = [];
	this[name].gravityFields.Bottom = [];
	this[name].gravityFields.BottomLeft = [];
	this[name].gravityFields.TopLeft = [];
	this.updateGravityFields(name);
	}
var Triplanetary = function(canvasName, bgSrc)
	{
	this.canvas = document.getElementById(canvasName);
	this.board = this.canvas.getContext("2d");
	var board = this.board;
	this.newPlayer = newPlayer;
	this.newPlanet = newPlanet;
	this.players = [];
	this.planets = [];
	this.background = new Image();
	this.background.src = bgSrc;
	this.background.onload = function()
		{
		for(i = 0; i < 53; i++)
			{
			for(y = 0; y < 37; y++)
				{
				var c = 26;
				if(i % 2 == 0)
					{
					c = 0;
					}
				board.drawImage(this, 45 * i +5 - 90, 5 + 52 * y + c - 52, 60, 52);
				}
			}
		}
	this.gravityWellTest = gravityWellTest;
	this.move = move;
	this.crashPlanet = crashPlanet;
	this.turn = turn;
	this.sixDirectionMove = sixDirectionMove;
	this.updateGravityFields = updateGravityFields;
	this.tokenOnload = tokenOnload;
	}