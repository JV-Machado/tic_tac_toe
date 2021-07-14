var turn = 0;
var board = ['','','','','','','','',''];
var seqX = [];
var seqO = [];
var contX = 0;
var contO = 0;
var winStates = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,4,6],
    [2,5,8],
    [6,7,8],
    [1,4,7],
    [3,4,5]
]

document.addEventListener('DOMContentLoaded', function()
{
    let squares = document.querySelectorAll(".grid-item");
    squares.forEach((item) => item.addEventListener('click', handleClick))
})

function handleClick(event)
{
    let position = event.target.id;
    let image = document.createElement("img");
    if(turn == 0)
    {
        image.src = './Images/x.png';
        document.getElementById(position).appendChild(image);
        board[Number(position)] = 'x';
        turn++;
    }
    else if(turn == 1)
    {
        image.src = './Images/circle.png';
        document.getElementById(position).appendChild(image);
        board[Number(position)] = 'o';
        turn--;
    }    
    gameLogic();
}

function gameLogic()
{   
   for(let i = 0; i < winStates.length; i++)
   {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '')
        {
            if(board[pos3] == 'x')
            { 
                alert('X ganhou!');
                setTimeout(reiniciar, 1000)
            }
            if(board[pos3] == 'o')
            {
                alert('O ganhou!');
                setTimeout(reiniciar, 1000)
            }
        }
   } 
}

function reiniciar()
{
    for(let i = 0; i < board.length; i++)
    {
        board[i] = '';
        document.getElementById(i).innerHTML = '';
    }
}
