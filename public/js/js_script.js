

function getKCal(burger) {

    return [burger.name, burger.kCal];
}

/*
document.getElementById("cheekyChickenBurger").innerHTML = getKCal(cheekyChickenBurger);
document.getElementById("gigaBurger").innerHTML = getKCal(gigaBurger);
document.getElementById("cheeseBurger").innerHTML = getKCal(cheeseBurger);
document.getElementById("smallMac").innerHTML = getKCal(smallMac);
document.getElementById("fishBurger").innerHTML = getKCal(fishBurger);


console.log(getKCal(cheekyChickenBurger));
console.log(getKCal(gigaBurger));
console.log(getKCal(cheeseBurger));
console.log(getKCal(smallMac));
console.log(getKCal(fishBurger));


let myElement = document.getElementById("selection");
for (burger of menu) {

    let item = document.createElement("div");
    
    let headerItem = document.createElement("h3");
    let headerValue = document.createTextNode(burger.name);
    headerItem.appendChild(headerValue);
    item.appendChild(headerItem);

    let imgItem = document.createElement("img");
    imgItem.src = burger.imagePath;
    imgItem.width = burger.imageWidth;
    item.appendChild(imgItem);

    let listItem = document.createElement("ul");
    let rowItem1 = document.createElement("li");
    let rowValue1 = document.createTextNode(burger.kCal + " kCal");
    rowItem1.appendChild(rowValue1);
    listItem.appendChild(rowItem1);
    
    if(burger.hasGluten) {


	let rowItem2 = document.createElement("li");
	let rowValue2 = document.createTextNode("Contains gluten");
	rowItem2.appendChild(rowValue2);
	listItem.appendChild(rowItem2);
        
    }
    
    if(burger.hasLactose) {
        
	let rowItem3 = document.createElement("li");
	let rowValue3 = document.createTextNode("Contains lactose");
	rowItem3.appendChild(rowValue3);
	listItem.appendChild(rowItem3);
        
    }
    
    item.appendChild(listItem);
    myElement.appendChild(item);
}
*/
