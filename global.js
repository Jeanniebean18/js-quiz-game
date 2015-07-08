
var counter = 0;
var score = 0;
var question1 = {question: "What was the main character's name in the movie 'Clueless' ?", choices: "a) Paula b) Barbie c)  Cher ", answer: "c"}

var question2 = {question: "How many theatrical versions of Batman Series have there been?", choices: "a) 5 b) 12 c) 10 ", answer: "b"}

var question3 = {question: "Clint Eastwood gave us the immortal line, 'Go ahead... make my day', in what film?", choices: "a) Dirty Harry b) Magnum Force c) Tightrope", answer: "a" }

var question4 = {question: "What was the name of the island on which King Kong was discovered in the original 1933 movie?", choices: "a) Ape Island b) Monster Island c) Skull Island", answer: "c" }

var questions = [question1, question2, question3, question4]

var buttonSubmit = document.getElementById("submitter"); // calling submit button by id.
var userAnswer = document.getElementById("answer"); // calling answer div by id.
var questionResult = document.getElementById("question_result");
var nextButton = document.getElementById("next");


var next_question = function() {
  var questionHandler = document.getElementById("question"); // assign questionHandler to "question" div
  questionHandler.innerHTML = questions[counter].question; //set div content to question index according counter, calling question
  var choicesHandler = document.getElementById("choices"); // assign choiceHandler to choices div
  choicesHandler.innerHTML = questions[counter].choices; // set div content to question index according counter, calling answer
}

var given_answer = function() {
  return userAnswer.value //returning value of answer
}
//when user clicks submit, start the process_answer_submission function.
buttonSubmit.onclick = process_answer_submission; 
// reset answer div value.
var clear_answer = function() {
  userAnswer.value = "";
}
// reset question result
var clear_question_result = function() {
  questionResult.innerHTML = "";
}

var is_correct_answer = function(answer_text) { // argument comes from process_answer_submission function // Returns true or false.
  if (answer_text.toLowerCase() === questions[counter].answer) { 
    return true; 
  } else {
    return false;
  }   
}

var update_question_result = function(correct) { //argument comes from process_answer_submission function. Either true or false.
  if (correct === true) {
    score++; // if correct is true, increment score by 1.
    questionResult.innerHTML = "Success!!" // feed to div "question_result" content: "yes"!
  } else {
    questionResult.innerHTML = "Wrong!" // feed to div "question_result" content: "nope"!
  }
}

//set's user's answer to user_answer var. Sends info to both is correct function then on to update_question_result function
function process_answer_submission() {
  var user_answer = given_answer(); 
  update_question_result(is_correct_answer(user_answer));
}


var game_over = function() {
  if (counter < 4) {
    return false;  
  } else {
    return true;
  }
}

var next_submit = function() {
  clear_answer();
  clear_question_result();
  counter++;
  if (game_over() === true) {
    final_total();
  } else {
    next_question();
  }
}

nextButton.onclick = next_submit; // when next button click start next_question 

var final_total = function() {
  var score_announce = "You answered " + score + " out of 4 questions correct";
  document.getElementById("total_result").innerHTML = score_announce;// feeding total_result div with score announcement
}

