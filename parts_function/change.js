//@@@@@@@@@@@@@@
// 4,5에 적용됨


var t_1 = document.getElementById("0");
t_1.addEventListener('click',modify,false);
function modify(){
	var txt = prompt("수정할 내용", t_1.innerText);
	t_1.innerHTML="<span>"+txt+"</span>";
}

///////////////////////////////////////////////////////////////////////////////////////////////
function modify_2(){
	this.render = function(dialog,func){
		var memoW = document.getElementById('memo').style.height;
	    var memoH = document.getElementById('memo').style.width;
	    var dialogbox = document.getElementById('dialogbox');
		dialogbox.style.left = "100px";
	    dialogbox.style.top = "100px";
	    dialogbox.style.display = "block";
	    document.getElementById('dialogboxbody').innerHTML = "수정";
		document.getElementById('dialogboxbody').innerHTML += '<br><input id="prompt_value1" autofocus>';
		document.getElementById('dialogboxbody').innerHTML += '<br><button onclick="Prompt.ok(\''+func+'\')">OK</button> <button onclick="Prompt.cancel()">Cancel</button>';
	};
	this.cancel = function(){
		document.getElementById('dialogbox').style.display = "none";
	};
	this.ok = function(func){
		var prompt_value1 = document.getElementById('prompt_value1').value;
		window[func](prompt_value1);
		document.getElementById('dialogbox').style.display = "none";
	};
} 
var Prompt = new modify_2();
var t_2 = document.getElementById("1");

//////////////////////////////////////////////////////////////////////////////////////////////////

var t_3 = document.getElementById("2").childNodes[0];
t_3.addEventListener('click',modify_3,false);
function modify_3(){
	var item = t_3;						// <span>chang</span>
	var txt = document.getElementById("2").innerText;
	var input = document.createElement("input");
	input.setAttribute("id","modify");
	input.setAttribute("type","text");
	input.setAttribute("value",txt);
	item.replaceChild(input, item.childNodes[0]);
	input.select();
	t_3.removeEventListener("click", modify_3,false);
	restore();
}
function restore(){
	var cng = document.getElementById('modify');
	cng.addEventListener("change",attach_span_1,false);
	cng.addEventListener("blur",attach_span_1,false);
}
function attach_span_1(){
	var item = t_3;
	var input = document.getElementById("modify").value;
	var newSpan = document.createElement("span");
	newSpan.innerText = input;
	item.replaceChild(newSpan,item.childNodes[0]);
	t_3.addEventListener('click',modify_3,false);
}