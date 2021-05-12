const formElement = document.getElementById('form');
const resetElement = document.getElementById('reset');
const questionDiv = document.getElementById('question');

class Sum {
    constructor(max){
        this.max = max;
        this.numbers = {
            first: this.getRandomInt(this.max),
            second: this.getRandomInt(this.max)
        }
        this.score = 0;
    }

    generateNewNumbers(){
        this.numbers = {
            first: this.getRandomInt(this.max),
            second: this.getRandomInt(this.max)
        }
    }

    getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
    }

    correctAnswer(){
        return this.numbers.first*this.numbers.second;
    }

    checkUserAnswer(userAnswer){
        if (userAnswer == this.correctAnswer()){
            return true;
        }
        return false;
    }
    
    getQuestion(){
        questionDiv.innerText = sum.numbers.first+' x '+sum.numbers.second+' = ';

        formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            const userAnswer = document.getElementById('answer').value.trim();

            if (this.checkUserAnswer(userAnswer)){
                this.message('correct');
                this.generateNewNumbers();
                questionDiv.innerText = sum.numbers.first+' x '+sum.numbers.second+' = ';
                document.getElementById('answer').value = '';
                this.score++;
                this.displayScore()
                return;
            } 
            this.message('incorrect');
        });
    }

    message(type){
        const errorElement = document.getElementById('message');
        if (type == 'incorrect'){
            errorElement.innerText = 'Your answer was incorrect, please try again.';
            errorElement.style.color = 'red';
        } else if (type == 'correct'){
            errorElement.innerText = 'Correct!';
            errorElement.style.color = 'green';
        } else {
            errorElement.innerText = 'Enter your answer in the field above.';
            errorElement.style.color = null;
        }
    }

    displayScore(){
        const scoreElement = document.getElementById('score');
        scoreElement.innerText = 'Score: '+this.score;
    }

    reset(){
        resetElement.addEventListener('click', (e) => {
            e.preventDefault();
            this.generateNewNumbers();
            questionDiv.innerText = sum.numbers.first+' x '+sum.numbers.second+' = ';
            document.getElementById('answer').value = '';
            this.score = 0;
            this.displayScore()
            this.message('none');
        });
    }
}

let sum = new Sum(13);

sum.displayScore();
sum.getQuestion();
sum.reset();

