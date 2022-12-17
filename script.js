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

ref.input.addEventListener("input", inSearchInput);

const createdList = createdListFn(tech);

ref.list.innerHTML = createdList;

function createdListFn(items){
    return items.map((item) => `<li>${item.label}</li>`).join('');
}

function inSearchInput(event) {
    const filter = event.target.value.toLowerCase();
    const filterInput = tech.filter(itemFilter => itemFilter.label.toLowerCase().includes(filter));
    const createdList = createdListFn(filterInput);
    ref.list.innerHTML = createdList; 
}

