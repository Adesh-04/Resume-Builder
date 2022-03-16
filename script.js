function home(){
	console.log("HomePage");
	document.getElementById('resumepage').style.display="none";
	document.getElementById('homepage').style.display="block";
}
 
function sky(){
	document.getElementById('left1').style.backgroundColor="#D1E8E4";
}
function blue(){
	document.getElementById('left1').style.backgroundColor="#D47AE8";
}
function grey(){
	document.getElementById('left1').style.backgroundColor="grey";
}
function green(){
	document.getElementById('left1').style.backgroundColor="#C6D57E";
}
function white(){
	document.getElementById('middle1').style.backgroundColor="#F7F7F7";
}

function sky1(){
	document.getElementById('middle1').style.backgroundColor="#D1E8E4";
}


function grey1(){
	document.getElementById('middle1').style.backgroundColor="grey";
}
function green1(){
	document.getElementById('middle1').style.backgroundColor="#C6D57E";
}


function home1(){
	console.log("HomePage");
	document.getElementById('resumepage').style.display="none";
	document.getElementById('templates').style.display="none";
	document.getElementById('homepage').style.display="block";
}

function build1(){
	console.log("ResumePage");
	document.getElementById('homepage').style.display="none";
	document.getElementById('resumepage').style.display="block";
	document.getElementById('resume-section').style.display="block";
	document.getElementById('CV-section').style.display="none";
	document.getElementById('CL-section').style.display="none";
	document.getElementById('page2').style.display="none";
	document.getElementById('page3').style.display="none";
	document.getElementById('page1').style.display="block";
	document.getElementById('templates').style.display="none";
	document.getElementById('resumeleft').style.display="block";
	document.getElementById('CVleft').style.display="none";
	document.getElementById('add_remove').style.display="block";
	document.getElementById('add_remove1').style.display="none";
	

}

function build2(){
	console.log("CVPage");
	document.getElementById('add_remove1').style.display="block";
	document.getElementById('add_remove').style.display="none";
	document.getElementById('resumeleft').style.display="none";
	document.getElementById('CVleft').style.display="block";
	document.getElementById('homepage').style.display="none";
	document.getElementById('resumepage').style.display="block";
	document.getElementById('resume-section').style.display="none";
	document.getElementById('CV-section').style.display="block";
	document.getElementById('CL-section').style.display="none";
	document.getElementById('page5').style.display="none";
	document.getElementById('page6').style.display="none";
	document.getElementById('page4').style.display="block";
	document.getElementById('templates').style.display="none";
}

function build3(){
	console.log("CLPage");
	document.getElementById('templates').style.display="none";
	document.getElementById('add_remove1').style.display="block";
	document.getElementById('add_remove').style.display="none";
	document.getElementById('resumeleft').style.display="none";
	document.getElementById('CVleft').style.display="none";
	document.getElementById('homepage').style.display="none";
	document.getElementById('resumepage').style.display="block";
	document.getElementById('resume-section').style.display="none";
	document.getElementById('CV-section').style.display="none";
	document.getElementById('CL-section').style.display="block";
	document.getElementById('P1').style.display="block";
	
}

function template1(){
	console.log("Create Template");
	document.getElementById('BRe').style.display="block";
	document.getElementById('BCV').style.display="none";
	document.getElementById('homepage').style.display="none";
	document.getElementById('resumepage').style.display="none";
	document.getElementById('resumetemplate').style.display="none";
	document.getElementById('templates').style.display="block";
	document.getElementById('CV-template-page').style.display="none";
	document.getElementById('template-page').style.display="block";

}

function template2(){
	console.log("Create Template");
	document.getElementById('BRe').style.display="none";
	document.getElementById('BCV').style.display="block";
	document.getElementById('homepage').style.display="none";
	document.getElementById('resumepage').style.display="none";
	document.getElementById('resumetemplate').style.display="none";
	document.getElementById('templates').style.display="block";}
	document.getElementById('CV-template-page').style.display="block";
	document.getElementById('template-page').style.display="none";

function template3(){
	console.log("Create Template");
	document.getElementById('BRe').style.display="none";
	document.getElementById('BCV').style.display="none";
	document.getElementById('homepage').style.display="none";
	document.getElementById('resumepage').style.display="none";
	document.getElementById('resumetemplate').style.display="none";
	document.getElementById('templates').style.display="block";
}




let str11 = 0;
let str12 = 0;

function click1(){
	
	console.log("ok");
	str11 +=1;
	if ( str11%2 == 0 ) {
	document.getElementById('add_remove_content').style.display="none";}
	else{
		document.getElementById('add_remove_content').style.display="block";
	}
}

function click5(){
	
	console.log("ok");
	str12 +=1;
	if ( str12%2 == 0 ) {
	document.getElementById('add_remove_content1').style.display="none";}
	else{
		document.getElementById('add_remove_content1').style.display="block";
	}
}

function click2(){

	document.getElementById('page1').style.display="block";
	document.getElementById('page2').style.display="none";
	document.getElementById('page3').style.display="none";
}


function click3(){
	document.getElementById('page1').style.display="none";
	document.getElementById('page2').style.display="block";
	document.getElementById('page3').style.display="none";
}

function click4(){
	document.getElementById('page1').style.display="none";
	document.getElementById('page2').style.display="none";
	document.getElementById('page3').style.display="block";
}

function click6(){
	document.getElementById('homepage').style.display='none';
	document.getElementById('resume-section').style.display='none';
	document.getElementById('page4').style.display="block";
	document.getElementById('page5').style.display="none";
	document.getElementById('page6').style.display="none";
}

function click7(){
	document.getElementById('homepage').style.display='none';
	document.getElementById('resume-section').style.display='none';
	document.getElementById('page4').style.display="none";
	document.getElementById('page5').style.display="block";
	document.getElementById('page6').style.display="none";
}

function click8(){
	document.getElementById('homepage').style.display='none';
	document.getElementById('resume-section').style.display='none';
	document.getElementById('page4').style.display="none";
	document.getElementById('page5').style.display="none";
	document.getElementById('page6').style.display="block";
}

function add(){

	var elems = document.getElementsByClassName('Iaddress');
	for (var i=0;i<elems.length;i+=1){
 		 elems[i].style.display = 'block';
 	}
}

function remove(){

	var elems = document.getElementsByClassName('Iaddress');
	for (var i=0;i<elems.length;i+=1){
 		 elems[i].style.display = 'none';
 	}
 }







 function printResume(){

 	// let image = document.getElementById('back');
 	

 	let opt={
 		
 		image:  {  type: 'jpeg' , quality: 0.98},
 		html2canvas: { scale: 2},
 		jsPDF: { unit:'in' , format: 'letter' , orientation: 'portrait'}
 	};

 	html2pdf().set(opt).from(back).save();

 }

 function printCV(){

 	console.log('Printing CV');
	
	let image = document.getElementById('back2');

 	

 	let opt1={
 		
 		image:  {  type: 'jpeg' , quality: 0.98},
 		html2canvas: { scale: 2},
 		jsPDF: { unit:'in' , format: 'letter' , orientation: 'portrait'}
 	};

 	html2pdf().set(opt1).from(image).save();
}
	

function generateResume(){
	console.log("generating resume");

	let name=document.getElementById('name').value;
	// let Tname1=document.getElementById('Tname1').innerHTML = name;
	let Tname2=document.getElementById('Tname2').innerHTML = name;

	let contact=document.getElementById('contact').value;
	let Tcontact=document.getElementById('Tcontact').innerHTML = contact;

	let address=document.getElementById('address').value;
	let Taddress=document.getElementById('Taddress').innerHTML = address;

	let objective=document.getElementById('objective').value;
	let Tobjective=document.getElementById('Tobjective').innerHTML = objective;

	let email=document.getElementById('email').value;
	let Temail=document.getElementById('Temail').innerHTML = email;

	let linked=document.getElementById('linked').value;
	let Tlinked=document.getElementById('Tlinked').innerHTML = linked;

	if(address == ""){
		var elems = document.getElementsByClassName('Iaddress');
		for (var i=0;i<elems.length;i+=1){
 		 	elems[i].style.display = 'none';
 	}
	}




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

	for(let e of acList){
		str1= str1 + `<li> ${e.value} </li> `;
	}
	document.getElementById("Tac").innerHTML=str1;




	if (document.getElementById('imgfield').value =="") {
		console.log("no img added");
		
		document.getElementById('imgfield').src="https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png";
		

		document.getElementById('resumepage').style.display="none";
		document.getElementById('resumetemplate').style.display="block";}
	else{

		// code for image

		let file=document.getElementById('imgfield').files[0]
		
		var reader= new FileReader();

		reader.readAsDataURL(file);


		

		//img template

		reader.onloadend = function() {

			document.getElementById("Timg").src = reader.result;}

	
	
	document.getElementById('resumepage').style.display="none";
	document.getElementById('resumetemplate').style.display="block"; }

}






function generateCV(){
	document.getElementById('homepage').style.display="none";
	
	document.getElementById('templates').style.display="none";
	document.getElementById('CVtemplate').style.display="block";

	let name=document.getElementById('name1').value;
	let Tname1=document.getElementById('Tname3').innerHTML = name;

	let contact=document.getElementById('contact1').value;
	let Tcontact=document.getElementById('Tcontact1').innerHTML = contact;

	let address=document.getElementById('address1').value;
	let Taddress=document.getElementById('Taddress1').innerHTML = address;

	let summary=document.getElementById('summary').value;
	let Tsummary=document.getElementById('Tsummary').innerHTML = summary;

	let email=document.getElementById('email1').value;
	let Temail=document.getElementById('Temail1').innerHTML = email;

	let linked=document.getElementById('linked1').value;
	let Tlinked=document.getElementById('Tlinked1').innerHTML = linked;

	if(address == ""){
		document.getElementById('Taddress1').style.display="none";

	}

	if(linked == ""){
		document.getElementById('Tlinked1').style.display="none";
	}


	let pList1=document.getElementsByClassName('plField1');
	let str3="";

	for(let e1 of pList1){
		str3= str3 + `<li> ${e1.value} </li>`;
	}
	document.getElementById('Tpl1').innerHTML=str3;

	let wList1=document.getElementsByClassName('weField1');
	let str="";

	for(let e of wList1){
		str=str + `<li> ${e.value} </li>`;
	}
	document.getElementById("Twe1").innerHTML=str;

	let acList1=document.getElementsByClassName('acField1');
	let str1="";

	for(let e of acList1){
		str1= str1 + `<li> ${e.value} </li> `;
	}
	document.getElementById("Tac1").innerHTML=str1;


	if (document.getElementById('imgfield1').value =="") {
		console.log("no img added");
		
		document.getElementById('imgfield1').src="https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png";
		

		document.getElementById('resumepage').style.display="none";}
	else{

		// code for image

		let file=document.getElementById('imgfield1').files[0]
		console.log(file);

		let reader= new FileReader();

		reader.readAsDataURL(file);

		console.log(reader.result);

		//img template

		reader.onloadend = function() {
			document.getElementById("Timg1").src = reader.result;}




	document.getElementById('resumepage').style.display="none";}



}




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

function addNewPl1() {

	console.log("Successfully Added new TextArea");

	let newNode = document.createElement('input');
	newNode.classList.add('form-control');
	newNode.classList.add('plField1');
	newNode.classList.add("mt-2");

	newNode.setAttribute("rows", 2);
	newNode.setAttribute("placeholder", "Enter here");

	let plOb = document.getElementById('pl1');
	let plButtonOb=document.getElementById('plButton1');

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

function addNewEx1(){
	

	let newNode = document.createElement('textarea');
	newNode.classList.add('form-control');
	newNode.classList.add('weField1');
	newNode.classList.add("mt-2");

	newNode.setAttribute("rows", 2);
	newNode.setAttribute("placeholder", "Enter here");

	let weOb = document.getElementById('we1');
	let exButtonOb1=document.getElementById('exButton1');

	weOb.insertBefore(newNode, exButtonOb1);

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

function addNewAc1() {

	console.log("Successfully Added new TextArea");

	let newNode = document.createElement('textarea');
	newNode.classList.add('form-control');
	newNode.classList.add('acField1');
	newNode.classList.add("mt-2");

	newNode.setAttribute("rows", 2);
	newNode.setAttribute("placeholder", "Enter here");

	let acOb = document.getElementById('ac1');
	let acButtonOb1=document.getElementById('acButton1');

	acOb.insertBefore(newNode, acButtonOb1);

}

function Next1(){

	// let img = document.getElementById('imgfield').value;
	// let name = document.getElementById('name').value;
	// let contact = document.getElementById('contact').value;
	// let address = document.getElementById('address').value;


	

	
	console.log("next page");
	document.getElementById('page1').style.display="none";
	document.getElementById('page2').style.display="block";
	document.getElementById('page3').style.display="none";
	


	
}

function back1(){
	console.log("back page");
	document.getElementById('page2').style.display="none";
	document.getElementById('page1').style.display="block";
}

function back4(){
	console.log("back page");
	document.getElementById('page5').style.display="none";
	document.getElementById('page4').style.display="block";
}

function Next2(){
	console.log("next page");
	document.getElementById('page2').style.display="none";
	document.getElementById('page3').style.display="block";
}

function Next3(){
	console.log("next page");
	document.getElementById('page4').style.display="none";
	document.getElementById('page5').style.display="block";
}

function Next4(){
	console.log("next page");
	document.getElementById('page5').style.display="none";
	document.getElementById('page6').style.display="block";
}

function back2(){
	console.log("back page");
	document.getElementById('page3').style.display="none";
	document.getElementById('page2').style.display="block";
}

function back5(){
	console.log("back page");
	document.getElementById('page6').style.display="none";
	document.getElementById('page5').style.display="block";
}

function back6(){
	document.getElementById('CVtemplate').style.display="none";
	document.getElementById('resumepage').style.display="block";
	document.getElementById('resume-section').style.display="none";
	document.getElementById('CV-section').style.display="block";
	document.getElementById('page4').style.display="block";
	document.getElementById('page5').style.display="none";
	document.getElementById('page6').style.display="none";
}

function back3(){
	console.log("back page");
	document.body.style.backgroundColor = "none";
	document.getElementById('resumetemplate').style.display="none";
	document.getElementById('page3').style.display="none";
	document.getElementById('page2').style.display="none";
	document.getElementById('page1').style.display="block";
	document.getElementById('resumepage').style.display="block";

	
	
}



document.addEventListener('click', e =>{
	const isDropdownButton = e.target.matches("[data-dropdown-button]");
	

	if (!isDropdownButton && e.target.closest("[data-dropdown-button]")!=null) return


	let currentDropdown
	if (isDropdownButton) {
		currentDropdown = e.target.closest('[data-dropdown]')
		currentDropdown.classList.toggle('active')
	}

	document.querySelectorAll("[data-dropdown].active").forEach(dropdown =>{
		if (dropdown === currentDropdown) return
			dropdown.classList.remove("active")
	})


	
})