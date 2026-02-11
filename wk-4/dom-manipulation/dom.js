//Selecting Empty Div & Assigning Variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");

//Inserting H1 Inside Variable
//Creating New Element
const heading = document.createElement('h1');
heading.innerHTML = "Hello, class!";
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);

//Handle Click Event Function
function handleHeadingClick() {
    //console.log("Heading was clicked!");
    document.body.style.backgroundColor = 'magenta';
}