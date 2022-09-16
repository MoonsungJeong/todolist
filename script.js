// flexible input text
// how to use : resizable(document.getElementById('txt'),7);
function resizable (el, factor) {
  var int = Number(factor) || 7.7;
  function resize() {el.style.width = ((el.value.length+1) * int) + 'px';}
  var e = 'keyup,keypress,focus,blur,change'.split(',');
  for (var i in e) el.addEventListener(e[i],resize,false);
  resize();
}

// input text bar -> span 
var cng = document.getElementById('txt');
cng.addEventListener("change",change_value,false);
function change_value(event){
		var input = document.getElementById("txt").value;
		var newSpan = document.createElement("span");
		var list = document.createElement("li");
		var ul = document.getElementById("content");
		var num = document.getElementById("content").childElementCount;
		if(input === ""){
			event.preventDefault();
		}
		newSpan.innerText = input;									// <span>123</span>
		newSpan.setAttribute('id',num-1);							// <span id='0'></span>
		newSpan.setAttribute('onclick', 'modify.replace(this.id)'); //<span id='0' onclick='modify.replace(this.id)'></span>
		list.setAttribute('id', num-1);								// <li id='0'></li>
		list.setAttribute('ondblclick', 'cancel.on(this.id)');		// <li id='0' ondblclick='...'></li>
		list.appendChild(newSpan);									// <li id='0' ondblclick='...'><span id='0' onclick='...'>123</span></li>
		ul.insertBefore(list, ul.childNodes[num-1]); 				//<ul><li><span>...
		document.getElementById("txt").value ="";					// 초기화
}

// modifying text function
function Modify(){
	this.replace = function(num){
		var item = document.getElementById(num);			// <li id='0'><span>Moonsung....</span></li>
		var txt = document.getElementById(num).innerText;	// Moonsung is livinig in AU
		var input_tag = document.createElement('input');	// <input>
		input_tag.setAttribute('id','modify'); 				// <input id='modify'>
		input_tag.setAttribute('type','text'); 				// <input type='text'>
		input_tag.setAttribute('value',txt);   				// <input value='Moonsung...'>
		item.replaceChild(input_tag, item.childNodes[0]);	// <span> --> <input>
		input_tag.select();
		resizable(document.getElementById('modify'),7);
		this.restore(num);
	};
	this.restore = function(num){
		var item = document.getElementById('modify');
		item.addEventListener('change',function(){
			var item = document.getElementById(num);					// <li id='0'><input id='modify'>Hannah....</li>
			var txt = document.getElementById('modify').value;			// Hannah...
			var newSpan = document.createElement('span');				//<span></span>
			newSpan.innerText = txt;									//<span>Hannah...</span>
			newSpan.setAttribute('id',num);								//<span id='0'>Hannah...</span>
			newSpan.setAttribute('onclick', 'modify.replace(this.id)');	//<span id='1' onclick='modify.replace()'>Hannah...</span>
			//newSpan.setAttribute('ondblclick', 'cancel.on(this.id)');	//<span id='0' ondblclick='cancel.on(this.id)'></span>
			item.replaceChild(newSpan,item.childNodes[0]);				// <input> --> <span>
		});
		item.addEventListener('blur',function(){
			var item = document.getElementById(num);
			var txt = document.getElementById('modify').value;
			var newSpan = document.createElement('span');
			newSpan.innerText = txt;
			newSpan.setAttribute('id',num);	
			newSpan.setAttribute('onclick', 'modify.replace(this.id)');
			//newSpan.setAttribute('ondblclick', 'cancel.on(this.id)');
			item.replaceChild(newSpan,item.childNodes[0]);
		});
	};
}
var modify = new Modify();

// making cancel line function
function Cancel_line(){
	this.on = function(num){
		var list = document.getElementById(num);				//<li></li>
		var In_Tag = document.getElementById(num).childNodes[0];//<span>Moonsung</span>
		var Out_Tag = document.createElement('del');			//<del></del>
		In_Tag.removeAttribute('onclick');						//@@ deleting modifing function
		Out_Tag.innerHTML = In_Tag.outerHTML;					//<del><span>Moonsung<span></del>
		In_Tag.parentNode.insertBefore(Out_Tag,In_Tag);			//<li><del><span>Moonsung</del></span> <span>Moonsung</span></li>
		In_Tag.remove();										//<li><del><span>Moonsung</del></span></li>
		list.setAttribute('ondblclick', 'cancel.off(this.id)');	//<li id='0' ondblclick='...'></li>
	};
	this.off =function(num){
		var list = document.getElementById(num);					//<li id='0'><del><span>Moonsung</del></span></li></li>
		var In_Tag = document.createElement('span');				//<span></span>
		In_Tag.setAttribute('id',num);								//<span id='0'></span>
		In_Tag.setAttribute('onclick', 'modify.replace(this.id)'); 	//<span id='0' onclick='...'></span>
		In_Tag.innerText = list.innerText;							//<span id='0' onclick='...'>Moonsung</span>
		list.childNodes[0].remove();								//<li id='0'></li>
		list.appendChild(In_Tag);									//<li id='0'><span>Moonsung</span></li>
		list.setAttribute('ondblclick', 'cancel.on(this.id)');		//<li id='0' ondblclick='...'></li>
	};	
}
var cancel = new Cancel_line();

