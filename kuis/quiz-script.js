var sekarang = 0;
var score = 0;
var total = questions.length;

var container = document.getElementById('kuisContainer');
var kuisEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var pevButton = document.getElementById('pevButton');
var resButton = document.getElementById('resButton');
var hasilCont = document.getElementById('hasil');



function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	kuisEl.textContent = q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;

};




function loadNextQuestion () {
	var pilihan = document.querySelector('input[type=radio]:checked');
	if(!pilihan){
		alert('Pilihlah Salah Satu Jawaban!');
		return;
	}
	var jawaban = pilihan.value;
	if(questions[sekarang].jawaban == jawaban){
		score += 10;
	}
	
	pevButton.style.display = '';

	sekarang++;
	pilihan.checked = false;

	if(sekarang == total - 1){
		nextButton.textContent = 'Selesai';
	}
	if(sekarang == total){
		container.style.display = 'none';
		resButton.style.display = 'inline-block';
		hasilCont.style.display = 'inline-block';
		
		if(score > 20){
		hasilCont.textContent = 'Nilai Kamu : ' + score  +  ' grade kamu : C';
		}
	
		if(score > 50){
		hasilCont.textContent = 'Nilai Kamu : ' + score  +  ' grade kamu : B';
		}
	
		if(score > 80){
		hasilCont.textContent = 'Nilai Kamu : ' + score  +  ' grade kamu : A';
		}

		else {	
		hasilCont.textContent = 'Nilai Kamu : ' + score  +  ' grade kamu : E';
		}

	}

	loadQuestion(sekarang);
}

loadQuestion(sekarang);

function previousQuestion () {


		sekarang--;
		score = score - 10;
		if(sekarang <= 0){

			pevButton.style.display = 'none';

		}
	

	loadQuestion(sekarang);
}

loadQuestion(sekarang);

function resume(){

window.location.reload();
}

	


