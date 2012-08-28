planetControl = function()
	{
	for (x in board.planet)
		{
		(for y in board.planet[x].gravitywell)
			{
			(for z in board.player)
				{
				if(board.planet[x].gravitywell[y] === board.player[z].coordinates)
					{
					board.planet[x].control = z;
					board.player[z].control = x;
					Console.log(z + " has gained control of planet " + x)
					}
				}
			}
		}
	};