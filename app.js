// console.log('hello')

var button = document.getElementById('btn');

button.addEventListener("click", function () {
    
    var InputValue = document.getElementById('inp').value

    var parentDiv = document.getElementById('parent')
    
    var childOfDiv = document.createElement('p')
    
    var childText = document.createTextNode(InputValue)
    
    childOfDiv.appendChild(childText)
    
    var paraOnTop = parentDiv.firstChild;
    
    parentDiv.insertBefore(childText, paraOnTop);
    
    parentDiv.appendChild(childOfDiv)
    console.log(InputValue);

    
})


// function toDo () {
//     var inputValue = document.getElementById("inp").value
//     var parentDiv = document.getElementById("div1");
//     var newParagraph = document.createElement("p");
//     var t = document.createTextNode(inputValue);
//     newParagraph.appendChild(t)
//     var paraOnTop = parentDiv.firstChild;
//     parentDiv.insertBefore(newParagraph,paraOnTop);
//     // newParagraph.appendChild(t);
//     // parentDiv.appendChild(newParagraph);
//     console.log(inputValue);

// }