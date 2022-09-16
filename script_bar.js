var min = document.getElementById('minimize');
min.addEventListener("click",minimize,false);
function minimize(){
	var head = document.getElementById('header');
	var body = document.getElementById('body');
	var memo = document.getElementById('memo');
	var bar = document.getElementById('bar');
	if(bar.className === 'normal' || bar.className === 'extend'){
		bar.className = 'minimize';
		memo.style.width = 350+'px';
		memo.style.height = 350+'px';
		
		head.style.width = 330.01+'px';
		body.style.width = 350+'px';
		body.style.height = '0px';
		body.style.borderTop='0px solid black';
		bar.style.left= '64%';
	}else if(bar.className === 'minimize'){
		bar.className = 'normal';
		body.style.height = 308+'px';
		body.style.borderTop='1px solid black';
	}
}

var max = document.getElementById('maxmize');
max.addEventListener("click",maxmize,false);
function maxmize(){
	var head = document.getElementById('header');
	var body = document.getElementById('body');
	var memo = document.getElementById('memo');
	var bar = document.getElementById('bar');
	
	if(bar.className === 'normal' || bar.className === 'minimize'){
		bar.className = 'extend';
		memo.style.width = window.innerWidth-30+'px';
		memo.style.height = window.innerHeight-20+'px';
		
		head.style.width = window.innerWidth-50+'px';
		body.style.width = window.innerWidth-30+'px';
		body.style.height = window.innerHeight-60+'px';
		body.style.borderTop='1px solid black';
		//bar.style.left= '80%';
		bar.style.left = (window.innerWidth-175) +'px';
	}
	else if(bar.className === 'extend'){
		bar.className = 'normal';
		memo.style.width = 350+'px';
		memo.style.height = 350+'px';
		
		head.style.width = 330.01+'px';
		body.style.width = 350+'px';
		body.style.height = 308+'px';
		body.style.borderTop='1px solid black';
		bar.style.left= '64%';
	}
}

var exit = document.getElementById('close');
exit.addEventListener("click",close,false);
function close(){
	var memo = document.getElementById('memo');
	memo.remove();
}







