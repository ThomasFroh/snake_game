var x = 1;
var y = 250;
//
var dir = 4;
var gameRunning = false;
var gameOver = false;
var snake = [];
snake.push({
    xPos: x,
    yPos: y,
});
var timer;
var ctx;

function game() {
    if (gameOver == false && gameRunning == false && x == 1 && y == 250) {
        gameRunning = true;
        draws();
    }
    else if (gameOver == false && gameRunning == true) {
        gameRunning = false;
        clearInterval(timer);
        document.getElementById('start').value = 'Start';
        document.getElementById('lost').innerHTML = 'game paused';
    }
    else if (gameOver == false && gameRunning == false && (x != 1 || y != 250)) {
        gameRunning = true;
        draws();
        document.getElementById('lost').innerHTML = '';
    }
    else if (gameOver == true) {
        ctx = ctx.clearRect(0, 0, 750, 750)
        x = 1;
        y = 250;
        dir = 4;
        snake = [];
        gameOver = false;
        gameRunning = true;
        document.getElementById('lost').innerHTML = '';
        draws();
    }
}

function draws() {
    document.getElementById('start').value = 'Stop';
    gameRunning = true;
    timer = setInterval(function() {
        drawSnake()
        if (x <= 0 || x >= 750 || y <= 0 || y >= 750) {
            endGame(timer);
        }
        for (let i = 0; i < snake.length - 1; i++) {
            if (x == snake[i].xPos && y == snake[i].yPos) {
                endGame(timer);
            }
        }
    }, 25);
}

function drawSnake() {
    ctx = document.getElementById('myCanvas').getContext('2d');
    ctx.strokeStyle = '#FF0000';
    ctx.lineWidth = 5;

    ctx.beginPath();

    ctx.moveTo(x, y);
    console.log(x, y);

    switch (dir) {
        case 1:
            y++;
            snake.push({
                xPos: x,
                yPos: y,
            });
            break;
        case 2:
            y--;
            snake.push({
                xPos: x,
                yPos: y,
            });
            break;
        case 3:
            x--;
            snake.push({
                xPos: x,
                yPos: y,
            });
            break;
        case 4:
            x++;
            snake.push({
                xPos: x,
                yPos: y,
            });
            break;
        default:
    }

    ctx.lineTo(x, y);
    ctx.stroke();
}

function endGame(gameTimer) {
    clearInterval(gameTimer);
    document.getElementById('lost').innerHTML = 'you lost :(';
    document.getElementById('start').value = 'Start';
    gameRunning = false;
    gameOver = true;
}

function turnleft() {
    switch (dir) {
        case 1:
        dir = 4;
        y--;
        break;
        case 2:
        dir = 3;
        y++;
        break;
        case 3:
        dir = 1;
        x++;
        break;
        case 4:
        dir = 2;
        x--;
        break;
        default:

    }
}
  
function turnright() {
    switch (dir) {
        case 1:
        dir = 3;
        y--;
        break;
        case 2:
        dir = 4;
        y++;
        break;
        case 3:
        dir = 2;
        x++;
        break;
        case 4:
        dir = 1;
        x--;
        break;
        default:

    }
}