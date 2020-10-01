let task = document.querySelector('.task_val');
let duration = document.querySelector('.duration');
let start_time = document.querySelector('.start_time');
let task_list = document.querySelector('.todolist');
function dashboard(name, id) {
	document.querySelector('.username').innerHTML = name;
	let add_btn = document.querySelector('.add_btn');
	add_btn.addEventListener('click', add_tasks(id));
	add_default_time();
}
function add_tasks(id,e) {
	let name_str = document.querySelector('.task_val').value;
	let time = document.querySelector('.start_time').value;
	let duration = document.querySelector('.duration').value;
	if (name_str === '' || time === '' || duration === ''||time==0) {
		alert('These fields are neccessary');
	} else {
		let li = document.createElement('li');
		li.innerHTML = `
            <div class="task_name">${name_str}</div>
            <div class="task_duration">${duration}</div>
            <div class="task_start_time">${time}</div>
            <i class="fas fa-minus-circle remove"></i>
        `;
		li.classList.add('tasks');

		db.collection(`users/${id}`)
		
        task_list.appendChild(li);
        clear_form();
        document.querySelector('.start_time').value = convertko(time, duration);

	}
	e.preventDefault();
}
function add_default_time() {
	var today = new Date();
	let time = today.getHours() + ':' + today.getMinutes();
	for (let i = 0; i < time.length; i++) {
		if (time[i] == ':') {
			if (i == 1) {
				time.replace(/^/, '0');
			} else if (time.length == 4) {
				time[3] = 0;
				time += today.getMinutes();
			}
			break;
		}
	}
	document.querySelector('.start_time').value = time;
}

function clear_form(){
    document.querySelector('.task_val').value="";
	document.querySelector('.start_time').value="";
	document.querySelector('.duration').value=0;
}


function convertko(hours, duu) {
	let hour = '';
	let min = '';
	for (let i = 0; i < hours.length; i++) {
		if (hours[i] === ':') {
			hour = hours.slice(0, i);
			min = hours.slice(i + 1, hours.length);
			break;
		}
	}
	let hr = parseInt(hour);
	let hrs = parseInt(hour);
	let mn = parseInt(min);
	let mns = parseInt(min);
	hr += Math.floor(duu / 60);
	mn += duu % 60;
	if (mn > 60) {
		mn -= 60;
		hr++;
	}
	let fr = hr.toString();
	let fp = mn.toString();
	return fr + ':' + fp;
}