var newPlayer = function(name, startX, startY, src)
	{
	this.player[name] = new Player(startX, startY, src, this.board, this.background);
	this.players[this.players.length] = name;
	}
var newPlanet = function(name, x, y, src)
	{
	this.planet[name] = new Planet(x, y, src, this.board);
	this.planet[name].updateGravityFields();
	this.planets[this.planets.length] = name;
	}
var Grid = function(name, src)
	{
	this.canvas = document.getElementById(name);
	this.board = this.canvas.getContext("2d");
	var board = this.board;
	this.newPlayer = newPlayer;
	this.newPlanet = newPlanet;
	this.player = [];
	this.players = [];
	this.planet = [];
	this.planets = [];
	this.background = new Image();
	this.background.src = src;
	this.background.onload = function()
		{
		var c = 52;
		for(i = 0; i < 10; i++)
			{
			for(y = 0; y < 10; y++)
				{
				c = 52;
				if(i % 2 == 0)
					{
					c = 0;
					}
				board.drawImage(this, 90 * i + 5, 5 + 104 * y + c, 120, 104);
				}
			}
		}
	}