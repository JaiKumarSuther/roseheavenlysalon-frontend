var Mydata = [
    ["Hair", "Haircut"],
    ["Hair", "Haircut (w/ Style"],
    ["Hair", "Hair Color (Ordinary)"],
    ["Hair", "Hair Color (Organic)"],
    ["Hair", "Special Color (with Amonia) "],
    ["Hair", "Hair color (with Brazillian Treatment)"],
    ["Hair", "Brazillian Treatment (Organic)"],
    ["Hair", "Special Brazillian Treatment"],
    ["Hair", "Rebond (Organic)"],
    ["Hair", "Rebond (with Semi Di Lina)"],
    ["Hair", "Rebond (with Hair Color and Brazillian Treatment)"],
    ["Nails" , "Manicure"],
    ["Nails" , "Pedicure"],
    ["Nails" , "Nail Art"],
    ["Nails" , "Parrafin Hand"],
    ["Nails" , "Parrafin Foot"],
    ["Nails" , "Gel Polish"],
    ["Nails" , "Manicure & Pedicure (with Footspa)"],
    ["Nails" , "Manicure & Handspa (with Whitening Mask)"],
    ["Nails" , "Manicure & Pedicure (w/ Footspa Detox & Whitening)"],
    ["Nails" , "Manicure & Pedicure (with Signature Footspa)"],
    ["Nails" , "Nail Extension Polygel"],
    ["Massage", "Basic Massage (1 hour)"],
    ["Massage", "Swedish Whole Body (1 hour)"],
    ["Massage", "Thai Whole Cody (1 hour)"],
    ["Massage", "Stone Whole Body (1 hour)"],
    ["Massage", "Signature Whole Body (1.5 hour)"],
    ["Bleaching", "Whole Body Scrub With Bleaching"],
    ["Facial", "Regular Facial with Vitamin C"],
    ["Facial", "Facial wtih Skin Scrubber"],
    ["Facial", "Facial with Diamond Peel"],
    ["Facial", "Facial with Galvanic Spa"],
    ["Facial", "Facial with Lifting"],
    ["IPL Hair Removal", "Under Arms"],
    ["IPL Hair Removal", "Under Arms Package"],
    ["IPL Hair Removal", "(10 sessions)"],
    ["IPL Hair Removal", "Leg (1 session)"],
    ["Warts Removal", "Face"],
    ["Warts Removal", "Neck"],
    ["Warts Removal", "Chest"],
    ["Warts Removal", "Back"],
    ["Warts Removal", "Whole Body"] 
    
];

function makeDropDown(data,level1Filter){

    const filteredArray = data.filter(r =>r[0] === level1Filter);
    
    const uniqueList = getUniqueValues(filteredArray, 1);
    
    const selectLevel2 = document.getElementById("level2");
    
    populateDropDown(selectLevel2, uniqueList)
 
}

function applyDropdown(){
    const selectLevel1Value = document.getElementById("level1").value;
    makeDropDown(Mydata,selectLevel1Value)
}

function afterDocumentLoads(){
    populateFirstLevelDropDown();
    applyDropdown();
}

function getUniqueValues(data,index){
    const uniqueOptions = new Set();
    data.forEach(r =>uniqueOptions.add(r[1]));
    return [...uniqueOptions];
}

function populateFirstLevelDropDown(){
    const uniqueList = getUniqueValues(Mydata, 0);
    const el = document.getElementById("level1");
    populateDropDown(el, uniqueList);
}

function populateDropDown(el, listArray){
    el.innerHTML="";

    listArray.forEach(item => {
        const option = document.createElement("option");
        option.textContent = item;
        el.appendChild(option);
    
    });
}

document.getElementById("level1").addEventListener("change", applyDropdown);
document.addEventListener("DOMContentLoaded", applyDropdown);