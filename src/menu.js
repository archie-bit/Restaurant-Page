export function menu(){
    const content = document.querySelector("#content");
    content.textContent="";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");
    
    const menuMain = document.createElement("div");
    menuMain.classList.add("menuMain");
    menuContainer.appendChild(menuMain);

    const menuSide = document.createElement("div");
    menuSide.classList.add("menuSide");
    menuContainer.appendChild(menuSide);



    const items = {
        grilledRibeyeSteak: {
            name: "Grilled Ribeye Steak",
            description : "A perfectly grilled 12 oz ribeye steak, seasoned with sea salt and cracked pepper. Served with a side of creamy mashed potatoes and seasonal vegetables, finished with a rich red wine reduction.",
            price: "29.95",
        },
        eggplantParmesan: {
            name: "Eggplant Parmesan",
            description: "Crispy breaded eggplant slices baked with marinara sauce and melted mozzarella cheese. Served with a side of spaghetti and garnished with fresh basil. A vegetarian classic with a hearty touch.",
            price:"$18.95",
        },
        lobsterMacCheese: {
            name: "Lobster Mac & Cheese",
            description:"Lobster meat and tender elbow pasta smothered in a creamy, four-cheese sauce, topped with a crispy breadcrumb crust. Decadent, rich, and guaranteed to satisfy.",
            price:"$24.95",
        },
        misoGlazedSalmon:{
            name: "Miso-Glazed Salmon",
            description:"Fresh salmon fillet glazed with a sweet and savory miso sauce, grilled to perfection and served over a bed of steamed jasmine rice and sautéed bok choy. Light yet packed with flavor.",
            price:"$22.50",
        },
        pulledPorkTacos: {
            name: "Pulled Pork Tacos",
            description:"Slow-cooked, tender pulled pork topped with tangy slaw, pickled onions, and a squeeze of lime on soft corn tortillas. Served with a side of house-made salsa and chips.",
            price:"$13.50 (3 tacos)",
        },
        buffaloCauliflowerBites: {
            name: "Buffalo Cauliflower Bites",
            description:"Crispy, battered cauliflower florets tossed in spicy buffalo sauce. Served with a cooling side of creamy ranch dip for the ultimate balance of heat and flavor.",
            price:"$9.50",
        },
    }



    for(let key in items){
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("itemContainer");

        const itemName = document.createElement("p");
        itemName.textContent=items[key].name;

        const itemPrice = document.createElement("p");
        itemPrice.textContent=items[key].price;

        const itemDescription = document.createElement("p");
        itemDescription.textContent=items[key].description;

        itemContainer.append(itemName, itemPrice, itemDescription);
        menuMain.appendChild(itemContainer);
    }
    
    content.appendChild(menuContainer);
}