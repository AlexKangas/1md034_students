

function menuItem(name, kCal, hasLactose, hasGluten, imagePath, imageWidth) {
    this.name = name;
    this.kCal = kCal;
    this.hasLactose = hasLactose;
    this.hasGluten = hasGluten;
    this.imagePath = imagePath;
    this.imageWidth = imageWidth;
}

function getKCal(burger) {

    return [burger.name, burger.kCal];
}


let cheekyChickenBurger = new menuItem('Cheeky Chicken Burger', 400, false, true, 'https://bastardburgers.se/wp-content/uploads/2018/05/v-ayianapa-700x700.jpg', 500);
let gigaBurger = new menuItem('Giga Burger', 3000, true, true, 'http://mspmag.com/downloads/45693/download/Abrams_CopperCover-090.jpg?cb=28c90bfc127697d9c7c444c9b8dd9e08&w=640', 500);
let cheeseBurger = new menuItem('Cheese Burger', 300, true, false, 'https://www.shortlist.com/media/images/2019/05/someones-taken-the-word-cheeseburger-far-too-literally-5-1556669274-sPWw-column-width-inline.jpg', 600);
let smallMac = new menuItem('Small Mac', 100, false, false, 'https://i.pinimg.com/originals/0d/14/4b/0d144baa1f2a4fdd604fdb94758608c4.jpg', 400);
let fishBurger = new menuItem('Fish Burger', 500, false, true, 'https://assets.bonappetit.com/photos/5b084e259570db5acbd02557/16:9/w_1200,c_limit/fried-fish-sandwiches-with-cucumbers-and-tartar-sauce.jpg', 600);

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
*/

let menu = [cheekyChickenBurger, gigaBurger, cheeseBurger, smallMac, fishBurger];


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
