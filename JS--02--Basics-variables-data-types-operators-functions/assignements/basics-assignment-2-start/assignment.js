const task3Element = document.getElementById('task-3');

function func1() {
    alert("hi"); 
}

function func2(name) {
    alert(name)
}

func1(); 
func2('Quentin'); 

task3Element.addEventListener('click', func1);

function names(name1, name2, name3) {
    alert(`${name1} ${name2} ${name3}`); 
}

names('Quentin', 'Robin', 'Benjamin'); 