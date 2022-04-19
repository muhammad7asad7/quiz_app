var questionArray = [{
    question : 'In experimental design, a(n) ________________ represents a variable whose effect we are interested in estimating with minimum variance.',
    answer:'treatment variable',
    options:[
        'independent variable',
	'treatment variable',
	'dependent variable',
	'random variable'
    ]
   },{
   question : 'To test autocorrelation, the following test can be used:',
    answer:'b-test',
    options:[
        'z-test',
	'b-test',
	'Durbin-Watson',
	'none of the above'
    ]

   },
   {
    question : 'In experimental design, a(n) ________________ represents a variable whose effect we are interested in estimating with minimum variance.',
     answer:'treatment variable',
     options:[
         'independent variable',
     'treatment variable',
     'dependent variable',
     'random variable'
     ]
 
    }
]
var questionNumber=0;
var score =0;
function nextQuestion(){
    validate()
removeActiveClass();   
// if (questionNumber<(questionArray.length-1)){

    if (questionNumber==(questionArray.length-2))
    {
        alert('ali');
        enableFinish();

    }
questionNumber +=1 ; 
    showQuestion(questionNumber);
// }
// else{
//     showResults();
// }


console.log(questionNumber)
console.log(questionArray.length)
}
var endbutton = document.getElementById('endGame');

endbutton.style.active = false;
function showQuestion(questionNumber){
    var  questionOfList= document.getElementById('ques');
    questionOfList.innerHTML =questionArray[questionNumber].question;
    var optOfList =document.getElementsByClassName('option');
    for (var i=0; i<optOfList.length; i++){
        optOfList[i].innerHTML =questionArray[questionNumber].options[i]
    }


}
function putActiveClass(e){
    removeActiveClass()
  e.classList.add('active')


}

function  removeActiveClass(){
    var active =document.getElementsByClassName('active')
    for(var i = 0; i<active.length;i++)
    {
        active[i].classList.remove('active');
    }
}

function validate(){
    var ans=document.getElementsByClassName('active');

    var realANS=questionArray[questionNumber].answer
    if (ans[0].innerHTML==realANS){
    score +=10;
}      

}


function enableFinish(){
    //endbutton.style.active = true;
    var btn_f=document.getElementById('endGame');
    // btn_f.style.display.flex = true;
     btn_f.style.opacity = 1;

     var btn_N =document.getElementById('next_q')
     btn_N.style.opacity=0;

}

// function showResults(){
//     alert('hello')
//     var resultScreen=document.createElement('div');
//     resultScreen.setAttribute('class','rScreen')
// }

scoreBoard=document.getElementById('score');
scoreText=document.createTextNode(score)
scoreBoard.appendChild(scoreText)
