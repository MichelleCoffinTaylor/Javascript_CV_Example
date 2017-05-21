var overlay = false;

var Education = ['Hutt Valley High School',
 				'Taita College',
 				 'Yoobee School of Design'
 				 ];

var Employment = [
	{
		CompanyName : "GraphicWorks",
		Role : "Junior Graphic Designer",
		StartDate : "August 2016",
		EndDate : "November 2016",
		Description : "Local Graphic Design and Print Company"
	},
	{
		CompanyName : "Maidstone Yamaha",
		Role : "Assistant",
		StartDate : "February 2014",
		EndDate : "December 2016",
		Description : "Yamaha Motorcycle Store in Upper Hutt"
	}
];



var HeaderName = document.getElementById('Name');
HeaderName.style.color = "blue";
HeaderName.style.fontSize = "50px";
HeaderName.innerHTML += " - CV";

var EducationList = document.getElementById('Education');
for (var i = 0; i < Education.length; i++) {
	EducationList.innerHTML += "<li>"+Education[i]+"</li>";
};

var EmploymentContainer = document.getElementById('Employment');
for (var i = 0; i < Employment.length; i++) {
	EmploymentContainer.innerHTML += "<div class='EmploymentItem'>"+
										"<h3>" + Employment[i]["CompanyName"] + "</h3>"+
										"<h4>" + Employment[i].Role + "</h4>"+
									"</div>";
};

var EmploymentBlock = document.getElementsByClassName('EmploymentItem');
for (var i = 0; i < EmploymentBlock.length; i++) {
	EmploymentBlock[i].onclick = function(){
		if(overlay === false){
			var companyname = this.childNodes[0].innerText;
			popup(companyname);
			overlay = true;
		}
	}
};

function popup(CompanyName){
	var CompanyDesc;
	for (var i = 0; i < Employment.length; i++) {
		if(Employment[i]['CompanyName'] == CompanyName){
			CompanyDesc = Employment[i]['Description'];
			break;
		}
	};
	var popupbox = document.getElementById('popup');
	popupbox.childNodes[1].innerText = CompanyName;
	popupbox.childNodes[5].innerText = CompanyDesc;
	popupbox.style.display = 'block';
}

document.getElementById('Close').addEventListener("click", ClosePopUp);

function ClosePopUp(){
	// popupbox.style.display = 'none';
	overlay = false;
	document.getElementById('popup').style.display = "none";
}






var Skills = [
	{
		SkillName : "HTML",
		Percentage : "80",
		Colour: "yellow"
	},
	{
		SkillName : "CSS",
		Percentage : "70",
		Colour: "orange"
	},
	{
		SkillName : "JS",
		Percentage : "60",
		Colour: "red"
	}
]

// Skills Bar
var SkillMoving = false;
var SkillContainer = document.getElementById('SkillContainer');
for (var i = 0; i < Skills.length; i++) {
	SkillContainer.innerHTML += "<label>"+Skills[i]['SkillName']+"</label>"+
								"<div class='SkillBar'>"+
									"<div id='"+Skills[i].SkillName+"' class='progress'></div>"+
								"</div>"
};

var bars = document.getElementsByClassName('progress');

function progressSkills(){
	if (SkillMoving == false){
		for (var i = 0; i < bars.length; i++) {
			var StopPoint;
			for(var j = 0; j < Skills.length; j++){
				if(bars[i].id == Skills[j]['SkillName']){
					StopPoint = Skills[j]['Percentage'];
					var Colour = Skills[j]['Colour'];
					break;
				}
			}
		move(bars[i], StopPoint, Colour);
		}
	}
}

function move(bar, StopPoint, Colour){
	var width = 0;
	bar.style.backgroundColor = Colour;
	var barMove = setInterval(barGrow, 10);
	function barGrow(){
		if(width >= StopPoint){
			clearInterval(barMove);
			SkillMoving = false;
		} else {
			width++;
			bar.style.width = width + '%';
			bar.innerHTML = width + '%';
		}
	}
}

// Lightbox

function openLightbox(){
	document.getElementById('Lightbox').style.display = "block";
}

function closeLightbox(){
	document.getElementById('Lightbox').style.display = "none";
}

var Images = document.getElementsByClassName('SingleImage');
	for (var i = 0; i < Images.length; i++) {
	Images[i].onclick = function(){
		var image = this.getElementsByTagName('img')[0];
		document.getElementById('LightboxImage').src = image.src;
		document.getElementById('LightboxImage').alt = image.alt;
		document.getElementById('Lightbox-Image-Description').innerText = image.alt;
	}
};





































