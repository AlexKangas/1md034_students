

function menuItem(name, kCal, hasLactose, hasGluten, imagePath) {
    this.name = name;
    this.kCal = kCal;
    this.hasLactose = hasLactose;
    this.hasGluten = hasGluten;
    this.imagePath = imagePath;
}

function getKCal(burger) {
    
    return {
	name: burger.name,
	kCal: burger.kCal,
    };
}


let cheekyChickenBurger = new menuItem('Cheeky Chicken Burger', 400, false, true, 'https://www.burgerandlobster.com/media/1580/burgerlobster_flatiron_small.jpg?anchor=center&mode=crop&heightratio=0.5&width=1600&rnd=132098279270000000');
console.log(getKCal(cheekyChickenBurger));

let gigaBurger = new menuItem('Giga Burger', 3000, true, true, 'https://bastardburgers.se/wp-content/uploads/2018/05/v-ayianapa-700x700.jpg');
console.log(getKCal(gigaBurger));

let cheeseBurger = new menuItem('Cheese Burger', 300, true, false, 'http://mspmag.com/downloads/45693/download/Abrams_CopperCover-090.jpg?cb=28c90bfc127697d9c7c444c9b8dd9e08&w=640');
console.log(getKCal(cheeseBurger));

let smallMac = new menuItem('Small Mac', 100, false, false, 'https://i.pinimg.com/originals/0d/14/4b/0d144baa1f2a4fdd604fdb94758608c4.jpg');
console.log(getKCal(smallMac));

let fishBurger = new menuItem('Fish Burger', 500, false, true, 'https://assets.bonappetit.com/photos/5b084e259570db5acbd02557/16:9/w_1200,c_limit/fried-fish-sandwiches-with-cucumbers-and-tartar-sauce.jpg');
console.log(getKCal(fishBurger));
