// console.log('hello')

var button = document.getElementById('btn');

button.addEventListener("click", function () {
    
    var InputValue = document.getElementById('inp').value

    var parentDiv = document.getElementById('parent')
    
    var childOfDiv = document.createElement('p')
    
    var childText = document.createTextNode(InputValue)
    
    childOfDiv.appendChild(childText)
    
    var paraOnTop = parentDiv.childNodes[0];
    
    parentDiv.insertBefore(childText, paraOnTop);
    
    parentDiv.appendChild(childOfDiv)
    // console.log(InputValue);
    
})

var allRemoveBtn = document.getElementById("allRemove")

allRemoveBtn.addEventListener("click",function(){
    
    
    var parentDiv = document.getElementById("parent")

    var childOfDiv = document.createElement('p')

    parentDiv.appendChild(childOfDiv)

    var removedText = parentDiv.childNodes[0]
    
    parentDiv.remove(removedText)
    
    
    
    
    // var textOnTop = parentDiv.firstChild
    // childOfDiv.appendChild(textOfPara);
    // parentDiv.insertBefore(textOfPara,textOnTop)
    // var textOfPara = document.createTextNode(inputValue)
    // var inputValue = document.getElementById("inp").value
    // var addText = document.createTextNode(inputValue)


})


var firstRemoveBtn = document.getElementById('firstRemove');

firstRemoveBtn.addEventListener("click",function(){
    
    
    var parentDiv = document.getElementById("parent")

    var childOfDiv = document.createElement('p')

    parentDiv.appendChild(childOfDiv)

    var removedText = parentDiv.childNodes[0]
    
    parentDiv.removeChild(removedText)
    

})



function toDo () {
    var inputValue = document.getElementById("inp").value
    var parentDiv = document.getElementById("div1");
    var newParagraph = document.createElement("p");
    var t = document.createTextNode(inputValue);
    newParagraph.appendChild(t)
    var paraOnTop = parentDiv.firstChild;
    parentDiv.insertBefore(newParagraph,paraOnTop);
    // newParagraph.appendChild(t);
    // parentDiv.appendChild(newParagraph);
    console.log(inputValue);

}


// var childCollection = document.getElementById("childColl").childNodes
// console.log("childCollection=>",childCollection);


// var childCollection = document.getElementById("childColl").firstChild
// console.log("childCollection=>",childCollection);


// var childCollection = document.getElementById("childColl").lastChild
// console.log("childCollection=>",childCollection);



// var childCollection = document.getElementById("childColl").attributes[0]
// console.log("childCollection=>",childCollection);


// var childCollection = document.getElementById("childColl").attributes;
// var lenghtOfAttributes = childCollection.length;
// console.log("childCollection=>",lenghtOfAttributes);


// ===> ShortForm
// var childCollection = document.getElementById("childColl").attributes.length;
// console.log("Attributes =>",childCollection);


// var insertAttributesName = document.getElementById("childColl").className = "atif";
// var n = insertAttributesName
// var nameOfAttribute = insertAttributesName.length;
// var nodeName = nameOfAttribute.nodeName;
// console.log(insertAttributesName);