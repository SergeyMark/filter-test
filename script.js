const tech = [
    {label: "HTML"},
    {label: "CSS"},
    {label: "JAVASCRIPT"},
    {label: "PHP"},
    {label: "JAVA"},
    {label: "PYTHON"},
    {label: "C++"},
    {label: "C#"},
    {label: "MYSQL"},
    {label: "WORDPRESS"},
    {label: "JOOMLA"}
];

const ref = {
    input: document.querySelector('#filter'),
    list: document.querySelector('.js-list-tech')
}

function createdListFn(){
    return tech.map((item) => `<li>${item.label}</li>`).join('');
}

const createdList = createdListFn();
ref.list.innerHTML = createdList;


ref.input.addEventListener("input", inSearchInput);
function inSearchInput(event) {
    const filter = event.target.value;
}

function copyTechFilter() {
    
}

