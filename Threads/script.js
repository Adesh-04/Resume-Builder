function addNewPl() {

	console.log("Successfully Added new TextArea");

	let newNode = document.createElement('input');
	newNode.classList.add('form-control');
	newNode.classList.add('plField');
	newNode.classList.add("mt-2");

	newNode.setAttribute("rows", 2);
	newNode.setAttribute("placeholder", "Enter here");

	let plOb = document.getElementById('pl');
	let plButtonOb=document.getElementById('plButton');

	plOb.insertBefore(newNode, plButtonOb);

}


function addNewEx() {

	console.log("Successfully Added new TextArea");

	let newNode = document.createElement('textarea');
	newNode.classList.add('form-control');
	newNode.classList.add('weField');
	newNode.classList.add("mt-2");

	newNode.setAttribute("rows", 2);
	newNode.setAttribute("placeholder", "Enter here");

	let weOb = document.getElementById('we');
	let exButtonOb=document.getElementById('exButton');

	weOb.insertBefore(newNode, exButtonOb);

}

function addNewAc() {

	console.log("Successfully Added new TextArea");

	let newNode = document.createElement('textarea');
	newNode.classList.add('form-control');
	newNode.classList.add('acField');
	newNode.classList.add("mt-2");

	newNode.setAttribute("rows", 2);
	newNode.setAttribute("placeholder", "Enter here");

	let acOb = document.getElementById('ac');
	let acButtonOb=document.getElementById('acButton');

	acOb.insertBefore(newNode, acButtonOb);

}


function generateResume(){
	console.log("generating resume");

	let name=document.getElementById('name').value;
	let Tname1=document.getElementById('Tname1').innerHTML = name;
	let Tname2=document.getElementById('Tname2').innerHTML = name;

	let contact=document.getElementById('contact').value;
	let Tcontact=document.getElementById('Tcontact').innerHTML = contact;

	let address=document.getElementById('address').value;
	let Taddress=document.getElementById('Taddress').innerHTML = address;

	let objective=document.getElementById('objective').value;
	let Tobjective=document.getElementById('Tobjective').innerHTML = objective;

	let email=document.getElementById('email').value;
	let Temail=document.getElementById('Temail').innerHTML = email;

					//Programming Languages
	let pList=document.getElementsByClassName('plField');
	let str2="";

	for(let e of pList){
		str2= str2 + `<li> ${e.value} </li>`;
	}
	document.getElementById('Tpl').innerHTML=str2;


						//Work Experience 
	let wList=document.getElementsByClassName('weField');
	let str="";

	for(let e of wList){
		str=str + `<li> ${e.value} </li>`;
	}

	document.getElementById("Twe").innerHTML=str;

							//academic 
	let acList=document.getElementsByClassName('acField');
	let str1="";

	for(let e1 of acList){
		str1= str1 + `<li> ${e1.value} </li>`;
	}

	document.getElementById("Tac").innerHTML=str1;

	//code for image

	let file=document.getElementById('imgfield').files[0]
	console.log(file);

	let reader= new FileReader();

	reader.readAsDataURL(file);

	console.log(reader.result);

	//img template

	reader.onloadend = function() {
		document.getElementById("Timg").src = reader.result;
	}



	document.getElementById('resumeForm').style.display="none";
	document.getElementById('resumeTemplate').style.display="block";

}

							//Printing Screen



function printResume(){
	console.log("Printing resume");
	window.print()
}

								/* PopUp */


const openModelButtons = document.querySelectorAll('[data-model-target]')
const closeModelButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModelButtons.forEach(button =>{
	button.addEventListener('click', () => {
		const model= document.querySelector(button.dataset.modelTarget)
		openModel(model)
	})
})

overlay.addEventListener('click', () => {
	const models=document.querySelectorAll('.model.active')
	models.forEach(model => {
		closeModel(model)
	})
})


closeModelButtons.forEach(button =>{
	button.addEventListener('click', () => {
		const model= button.closest('.model')
		closeModel(model)
	})
})

function openModel(model){
	if (model == null) return
	model.classList.add('active')
	overlay.classList.add('active')
}

function closeModel(model){
	if (model == null) return
	model.classList.remove('active')
	overlay.classList.remove('active')
}

							/*Color Change */


	
