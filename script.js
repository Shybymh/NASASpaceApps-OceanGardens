


const quiz = [
    ["What is referred to as the long-term pattern of weather conditions in any particular place?", "Climate", "Weather", "Temperature", "1"], 
    ["What does ocean resemble when absorbing solar radiation?", "Solar Panel", "Water cycle", "Cooling", "1"],
    ["What is the process when water molecules are heated they exchange freely in the air?", "Cooling", "Rain", "Evaporation", "3"],
    ["What act like a conveyor belt, help to counteract the uneven distribution of solar radiation reaching Earth’s surface?", "Condensation", "Ocean Currents", "Water cycle", "2"],
];

var score = 0;
var index = 0;
var currentQuestion;
 
function startGame() {
    // let idx = Math.floor(Math.random() * 3);
    // console.log(quiz[idx]);
    index = 0;
    score = 0;
    document.getElementById('correct').firstChild.textContent = 'Correct!'

    let quest = quiz[index];
    currentQuestion = quest;
    displayQuestion(quest);    
}

function restartGame() {

    document.getElementById('options').style.display = 'block';
    document.getElementById('restartbutton').style.display = 'none';
    document.getElementById('submitanswer').style.display = 'block';


    document.getElementById('answer1').checked = false;
    document.getElementById('answer2').checked = false;
    document.getElementById('answer3').checked = false;


    document.getElementById('correct').style.display = 'none';
    document.getElementById('wrong').style.display = 'none';

    index = 0;

    startGame();

}

function displayQuestion(quest) {

    document.getElementById('correct').style.display = 'none';
    document.getElementById('wrong').style.display = 'none';
    document.getElementById('startbutton').style.display = 'none';
    document.getElementById('nextque').style.display = 'none';

    document.getElementById('question').style.display = 'block';
    document.getElementById('options').style.display = 'block';
    document.getElementById('submitanswer').style.display = 'block';
    
    document.getElementById('question').textContent = quest[0];
    document.getElementById('anslabel1').textContent = quest[1];
    document.getElementById('anslabel2').textContent = quest[2];
    document.getElementById('anslabel3').textContent = quest[3];

    document.getElementById('answer1').checked = false;
    document.getElementById('answer2').checked = false;
    document.getElementById('answer3').checked = false;


}

function submitAnswer() {
    if (document.querySelector('input[name="answers"]:checked') == null) {
        // alert("Please select an option");
        return;
    }

    let userAns = document.querySelector('input[name="answers"]:checked').value;
    if (userAns == currentQuestion[4]) {
        document.getElementById('correct').style.display = 'block';
        document.getElementById('wrong').style.display = 'none';

        document.getElementById('nextque').style.display = 'block';
        document.getElementById('submitanswer').style.display = 'none';
        score++;
        index++;
        if (quiz.length === index) {
            document.getElementById('nextque').style.display = 'none';
            document.getElementById('options').style.display = 'none';
        
            document.getElementById('correct').firstChild.textContent = 'Congratulations! Quiz completed!';
            document.getElementById('restartbutton').style.display = 'block';

        }
    } else {
        document.getElementById('wrong').style.display = 'block';
        document.getElementById('correct').style.display = 'none';
    }

}

function nextQuestion() {
    // let idx = Math.floor(Math.random() * 3);

    currentQuestion = quiz[index];
    displayQuestion(currentQuestion);
}


 

