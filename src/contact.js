export function contact(){
    const content = document.querySelector("#content");
    content.textContent="";

    const  contactContainer= document.createElement("div");
    contactContainer.classList.add("contactContainer");

    const contactMain = document.createElement("div");
    contactMain.classList.add("contactMain");
    contactContainer.appendChild(contactMain);

    const contactSide = document.createElement("div");
    contactSide.classList.add("contactSide");
    contactContainer.appendChild(contactSide);



    const getInTouch = document.createElement("H1");
    getInTouch.classList.add("getInTouch")
    getInTouch.textContent="GET IN TOUCH";

    const adressContainer = document.createElement("div");
    adressContainer.classList.add("adressContainer");
    const addressTitle= document.createElement("p");
    addressTitle.textContent="ADDRESS";
    const adressInfo = document.createElement("p");
    adressInfo.textContent = "123 Main Street, apt 4B San Diego CA, 91911"
    adressContainer.append(addressTitle, adressInfo)

    const phoneContainer = document.createElement("div");
    phoneContainer.classList.add("phoneContainer");
    const phoneTitle= document.createElement("p");
    phoneTitle.textContent="PHONE NUMBER";
    const phoneNum = document.createElement("p");
    phoneNum.textContent="+445 444 554";
    phoneContainer.append(phoneTitle, phoneNum)

    const emailContainer = document.createElement("div");
    emailContainer.classList.add("emailContainer");
    const emailTitle= document.createElement("p");
    emailTitle.textContent="Email";
    const emailInfo = document.createElement("p");
    emailInfo.textContent = "notfake@email.com"
    emailContainer.append(emailTitle, emailInfo)

    contactSide.append(getInTouch, adressContainer, phoneContainer, emailContainer);

    

    const contactForm = document.createElement("form");
    contactForm.classList.add("contactForm")

    const inputs = {
        name : {
            elementType: "input",
            label: "Name",
            idValue:"name",
            nameValue:"name",
            inputType:"text",
        },
        email : {
            elementType: "input",
            label: "Email",
            idValue:"email",
            nameValue:"email",
            inputType:"email",
        },
        textField : {
            elementType: "textarea",
            label: "Comment",
            idValue:"comment",
            nameValue:"comment",  
            rows: 15,
            cols: 70,
        },

        
    };

    for (let key in inputs){
        const label = document.createElement("label");
        label.textContent = inputs[key].label;
        label.setAttribute("for", inputs[key].idValue);
        
        const input = document.createElement(inputs[key].elementType);
        input.setAttribute("id", inputs[key].idValue);
        input.setAttribute("name", inputs[key].nameValue);
        input.setAttribute("required", "");
        input.required=true
        if(inputs[key].elementType === "input"){
            input.setAttribute("type", inputs[key].inputType);
        }
        if(inputs[key].elementType === "textarea"){
            input.setAttribute("rows", inputs[key].rows);
            input.setAttribute("cols", inputs[key].cols);
        }

        const container = document.createElement("div");
        container.append(label, input);
        contactForm.appendChild(container);
    }

    const submitButton = document.createElement("button");
    submitButton.textContent="SUBMIT"
    submitButton.setAttribute("type", "submit");
    contactForm.appendChild(submitButton);

    contactMain.appendChild(contactForm);


    content.appendChild(contactContainer);
}