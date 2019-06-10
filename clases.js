class Game{
    started;
    level;
    paused;
    scored;
    constructor(started,level,paused,scored){
        this.started = started;
        this.level = level;
        this.paused = paused;
        this.scored = scored;
    }
}

class Ball{
    object;
    direction;
    angle;
    top;
    left;
    initial;
    constructor(object,direction,angle,top,left,initial){
        this.object = object;
        this.direction = direction;
        this.angle = angle;
        this.top = top;
        this.left = left;
        this.initial = initial;
    }

    MoveRight(){
        this.object.css({'left':this.left+5})
        this.left = this.object.position().left;
    }

    MoveLeft(){
        this.object.css({'left':this.left-5})
        this.left = this.object.position().left;
    }

    MoveWithAngle(){
        this.object.css({'top':this.top+(this.angle)})
        this.top = this.top+(this.angle);
    }

    setDefault(){
        this.top = this.initial.top;
        this.left = this.initial.left;
        this.angle = this.initial.angle;
        this.object.css({'left':this.left,'top':this.top});
    }
}

class Player{
    object;
    top;
    left;
    score;
    scoreBoard;
    initial;
    constructor(object,top,left,score,scoreBoard,initial){
        this.object = object;
        this.top = top;
        this.left = left;
        this.score = score;
        this.scoreBoard = scoreBoard;
        this.initial = initial;
    }

    moveDown(board){
        if(!game.paused){
            if(this.top + 100 < $('.box').height()-5){
                this.top = this.top+10
                this.object.css({'top':this.top});
            }
        }
    }

    moveUp(board){
        if(!game.paused){
            if(this.top > 5){
                this.top = this.top-10
                this.object.css({'top':this.top});
            }
        }
    }

    scoreUp(score){
        this.score = score;
        this.scoreBoard.text(this.score);
    }

    setDefault(){
        this.top = this.initial.top;
        this.left = this.initial.left;
        this.object.css({'left':this.left,'top':this.top});
    }
}