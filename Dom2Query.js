// TRAVERSING THE DOM //

var itemList = document.querySelector('#items');
// parentNode
//  console.log(itemList.parentNode);
//  itemList.parentNode.style.backgroundColor = '#f4f4f4';
//  console.log(itemList.parentNode.parentNode.parentNode);

//parentElement 
// similiar to parentNode
    // console.log(itemList.parentElement);
    // itemList.parentElement.style.backgroundColor = '#f4f4f4';
    // console.log(itemList.parentElement.parentElement);

//childNodes
    //console.log(itemList.childNodes);
//we are getting a NodeList here basically an array
//actuaqlly giving textNode and List-group-item both 
//it giving everythink like lineBreak which is not needed
//so we are using childen

//children 
    //console.log(itemList.children);
    // console.log(itemList.children[1]);
    // itemList.children[1].style.backgroundColor ='yellow'
    //so it is a htmlCollection no longer an nodeList

// //firstChild
// console.log(itemList.firstChild);
// //work same as childNode,so we use firstElementChild

// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello 1'

//lasrChild
// console.log(itemList.lastChild);
// //work same as childNode,so we use lastElementChild

// //firstElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello last';

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);
//because we have nothing next to item class

//previousSibling
//console.log(itemList.previousSibling);

//previousElenmentSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color= "yellow";

//createElement

//create a div
var newDiv = document.createElement('div');
var newItem = document.createElement('div');

//add class
newDiv.className = 'hello';
newItem.className = 'cello';

//add id
newDiv.id = 'hello1';
newItem.id = 'cello1';

//add attr
newDiv.setAttribute('title', 'hello beta div');
newItem.setAttribute('title', 'cello sello');

//Create text node
var newDivText = document.createTextNode('hEllo word!');
var newItemText = document.createTextNode('HEllo word');
//add text to div
newDiv.appendChild(newDivText);
newItem.appendChild(newItemText);

 var container = document.querySelector('header .container');
 var h1 = document.querySelector('header h1');

var listGroup = document.querySelector('div .list-group');
var li = document.querySelector('div li');

console.log(newDiv);
console.log(newItemText);

newDiv.style.fontSize ='34px';

container.insertBefore(newDiv, h1);
listGroup.insertBefore(newItem, li);