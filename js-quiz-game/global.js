
var counter = 0;
var score = 0;

var question1 = {question: "What was the main character's name in the movie 'Clueless' ?", choices: "a) Paula b) Barbie c)  Cher ", answer: "c"}

var question2 = {question: "How many theatrical versions of Batman Series have there been?", choices: "a) 5 b) 12 c) 10 ", answer: "b"}

var question3 = {question: "Clint Eastwood gave us the immortal line, 'Go ahead... make my day', in what film?", choices: "a) Dirty Harry b) Magnum Force c) Tightrope", answer: "a" }

var question4 = {question: "What was the name of the island on which King Kong was discovered in the original 1933 movie?", choices: "a) Ape Island b) Monster Island c) Skull Island", answer: "c" }

var questions = [question1, question2, question3, question4]

var buttonSubmit = document.getElementById("submitter"); // calling divs by div id and assigning to variables.
var userAnswer = document.getElementById("answer");
var questionResult = document.getElementById("question_result"); 
var nextButton = document.getElementById("next");
var questionHandler = document.getElementById("question");
var choicesHandler = document.getElementById("choices");
var totalResult = document.getElementById("total_result");


var next_question = function() {
  questionHandler.innerHTML = questions[counter].question; //set div content to question index according
  choicesHandler.innerHTML = questions[counter].choices; // set div content to question index according
  
}

var given_answer = function() {
  return userAnswer.value //returning value of answer
}
//when user clicks submit, start the process_answer_submission function.
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
var process_answer_submission = function() {
  var user_answer = given_answer(); 
  update_question_result(is_correct_answer(user_answer));
}

buttonSubmit.onclick = process_answer_submission;  // when submit button clicked use function

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

nextButton.onclick = next_submit; // when next button click start next_submit // stores function process. doesn't run function now. 

var final_total = function() {
  var score_announce = "You answered " + score + " out of 4 questions correct";
  totalResult.innerHTML = score_announce;// feeding total_result div with score announcement
}

