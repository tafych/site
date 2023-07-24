function rememberEntry() {
	var txt=document.getElementById('content').value;
	var dt=document.getElementById('data').value;
	var k=document.getElementById('key').value;
	var value= document.getElementsByName('pri');
	for (var radio of value){
	if (radio.checked) {    
            prio=radio.value;
	}}
	let con=dt+'u'+prio+txt;
	window.localStorage.setItem(k, con);
	listOut();
}
function clearList(){
	document.getElementById('toDo').innerHTML = "";
}
function ultraKill(){
	window.localStorage.clear();
	listOut();
}
function listOut(){
	clearList();
	for(let key in localStorage) {
	if (!localStorage.hasOwnProperty(key)) {
		continue;
  }
  let con=window.localStorage.getItem(key);
  let txt=con.slice(12)
  let dt=con.slice(0,10)
  if(con[10]=='d'){tip='task_done';}else{tip='task_undone'};
  if(con[11]=='l'){pri='pri_low';};
if(con[11]=='m'){pri='pri_mid';};
if(con[11]=='h'){pri='pri_high';};
document.getElementById('toDo').insertAdjacentHTML('beforeend', '<div class="'+tip+'">'+'<div class='+pri+'>'+key+'</div>'+'<br>'+'<input type=checkbox name="del" value="'+key+'"/><input type=date value='+dt+' readonly> '+txt+'</div>');
}
}
function checkKill(){
	var checkboxes = document.getElementsByName('del');
	for (var i=0; i<checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			window.localStorage.removeItem(checkboxes[i].value);
    }
}
listOut();
}
function checkDone(){
	var checkboxes = document.getElementsByName('del');
	for (var i=0; i<checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			key=checkboxes[i].value
			con=window.localStorage.getItem(key);
			window.localStorage.removeItem(key);
			con=con.slice(0,10)+'d'+con.slice(11);
			window.localStorage.setItem(key, con);
    }
}
listOut();
}
function checkUnDone(){
	var checkboxes = document.getElementsByName('del');
	for (var i=0; i<checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			key=checkboxes[i].value
			con=window.localStorage.getItem(key);
			window.localStorage.removeItem(key);
			con=con.slice(0,10)+'u'+con.slice(11);
			window.localStorage.setItem(key, con);
    }
}
listOut();
}
function allCheck() {
    var checkboxes = document.getElementsByName('del');
    for (var checkboxx of checkboxes) {
        checkboxx.checked = true;
    }
}
function allUnCheck() {
    var checkboxes = document.getElementsByName('del');
    for (var checkboxx of checkboxes) {
        checkboxx.checked = false;
    }
}
function showDone(){
	clearList();
	for(let key in localStorage) {
	if (!localStorage.hasOwnProperty(key)) {
		continue;
  }
  let con=window.localStorage.getItem(key);
  let txt=con.slice(12)
  let dt=con.slice(0,10)
  if(con[11]=='l'){pri='pri_low';};
	if(con[11]=='m'){pri='pri_mid';};
	if(con[11]=='h'){pri='pri_high';};
  if(con[10]=='d'){tip='task_done';document.getElementById('toDo').insertAdjacentHTML('beforeend', '<div class="'+tip+'">'+'<div class='+pri+'>'+key+'</div>'+'<br>'+'<input type=checkbox name="del" value="'+key+'"/><input type=date value='+dt+' readonly> '+txt+'</div>');
}
  }
}
function showUndone(){
	clearList();
	for(let key in localStorage) {
	if (!localStorage.hasOwnProperty(key)) {
		continue;
  }
  let con=window.localStorage.getItem(key);
  let txt=con.slice(12)
  let dt=con.slice(0,10)
    if(con[11]=='l'){pri='pri_low';};
	if(con[11]=='m'){pri='pri_mid';};
	if(con[11]=='h'){pri='pri_high';};
  if(con[10]=='u'){tip='task_undone';document.getElementById('toDo').insertAdjacentHTML('beforeend', '<div class="'+tip+'">'+'<div class='+pri+'>'+key+'</div>'+'<br>'+'<input type=checkbox name="del" value="'+key+'"/><input type=date value='+dt+' readonly> '+txt+'</div>');
}
  }
}
function checkLow(){
	var checkboxes = document.getElementsByName('del');
	for (var i=0; i<checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			key=checkboxes[i].value
			con=window.localStorage.getItem(key);
			window.localStorage.removeItem(key);
			con=con.slice(0,11)+'l'+con.slice(12);
			window.localStorage.setItem(key, con);
    }
}
listOut();
}
function checkMid(){
	var checkboxes = document.getElementsByName('del');
	for (var i=0; i<checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			key=checkboxes[i].value
			con=window.localStorage.getItem(key);
			window.localStorage.removeItem(key);
			con=con.slice(0,11)+'m'+con.slice(12);
			window.localStorage.setItem(key, con);
    }
}
listOut();
}
function checkHigh(){
	var checkboxes = document.getElementsByName('del');
	for (var i=0; i<checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			key=checkboxes[i].value
			con=window.localStorage.getItem(key);
			window.localStorage.removeItem(key);
			con=con.slice(0,11)+'h'+con.slice(12);
			window.localStorage.setItem(key, con);
    }
}
listOut();
}
function showLow(){
	clearList();
	for(let key in localStorage) {
	if (!localStorage.hasOwnProperty(key)) {
		continue;
  }
  let con=window.localStorage.getItem(key);
  let txt=con.slice(12)
  let dt=con.slice(0,10)
  if(con[10]=='d'){tip='task_done';}else{tip='task_undone'};
  if(con[11]=='l'){pri='pri_low';document.getElementById('toDo').insertAdjacentHTML('beforeend', '<div class="'+tip+'">'+'<div class='+pri+'>'+key+'</div>'+'<br>'+'<input type=checkbox name="del" value="'+key+'"/><input type=date value='+dt+' readonly> '+txt+'</div>');
}
  }
}
function showMid(){
	clearList();
	for(let key in localStorage) {
	if (!localStorage.hasOwnProperty(key)) {
		continue;
  }
  let con=window.localStorage.getItem(key);
  let txt=con.slice(12)
  let dt=con.slice(0,10)
  if(con[10]=='d'){tip='task_done';}else{tip='task_undone'};
  if(con[11]=='m'){pri='pri_mid';document.getElementById('toDo').insertAdjacentHTML('beforeend', '<div class="'+tip+'">'+'<div class='+pri+'>'+key+'</div>'+'<br>'+'<input type=checkbox name="del" value="'+key+'"/><input type=date value='+dt+' readonly> '+txt+'</div>');
}
  }
}
function showHigh(){
	clearList();
	for(let key in localStorage) {
	if (!localStorage.hasOwnProperty(key)) {
		continue;
  }
  let con=window.localStorage.getItem(key);
  let txt=con.slice(12)
  let dt=con.slice(0,10)
  if(con[10]=='d'){tip='task_done';}else{tip='task_undone'};
  if(con[11]=='h'){pri='pri_high';document.getElementById('toDo').insertAdjacentHTML('beforeend', '<div class="'+tip+'">'+'<div class='+pri+'>'+key+'</div>'+'<br>'+'<input type=checkbox name="del" value="'+key+'"/><input type=date value='+dt+' readonly> '+txt+'</div>');
}
  }
}