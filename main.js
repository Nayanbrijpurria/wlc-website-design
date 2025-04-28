
// JS for the first login page

let firstSection = document.querySelector(".maindiv");
let secondSection = document.querySelector(".Queries");
let  userName = document.querySelector("#userName");
let userContact = document.querySelector("#userContact");
let cowName =  document.querySelector("#cowName");
let cowAge = document.querySelector("#cowAge");
let cowBreed = document.querySelector("#cowBreed");

document.querySelector("#formSubmit").addEventListener("click" , (e) => {
    e.preventDefault();
    if(userName.value !="" && userContact.value != "" && cowName.value != "" && cowAge.value != "" && cowBreed.value != ""){
    let userInfo = {
    "username" : userName.value,
    "userContact" : userContact.value,
    "cowName" : cowName.value,
    "cowAge" : cowAge.value,
    "cowBreed" : cowBreed.value
} 
document.querySelector(".description").textContent = new Date().toDateString();
document.querySelector(".user").textContent = `USER :  ${userName.value} / ${userContact.value}`;
document.querySelector(".pname").textContent = `NAME :- ${cowName.value}`;
document.querySelector(".page").textContent = `AGE :- ${cowAge.value}`;
document.querySelector(".pbreed").textContent = `BREED :- ${cowBreed.value}`;
let i= document.querySelector("#userName").value +"@" + document.querySelector("#userContact").value
console.log(userInfo);
localStorage.setItem(i, JSON.stringify(userInfo));
let shoe = localStorage.getItem(i);
console.log(shoe);
firstSection.style.display = 'none';
secondSection.classList.remove("nono");
    } else{
        console.log("Fill the form correctly");
    }
}) 


// Js for the second page

let answer1 = '';
let answer2 = '';
let answer3 = '';
let answer4 = '';
let answer5 = '';
let answer6 = '';
let answer7 = '';
let answer8 = '';

const getValues = () => {
    let option1 = document.getElementsByName(`samesame1`);
    for (let j=0; j<option1.length; j++){
        if(option1[j].checked){
            answer1 = option1[j].value
            console.log(answer1)
        }
    }
    let option2 = document.getElementsByName(`samesame2`);
    for (let j=0; j<option2.length; j++){
        if(option2[j].checked){
            answer2 = option2[j].value
            console.log(answer2)
        }
    }
    let option3 = document.getElementsByName(`samesame3`);
    for (let j=0; j<option3.length; j++){
        if(option3[j].checked){
            answer3 = option3[j].value
            console.log(answer3)
        }
    }
    let option4 = document.getElementsByName(`samesame4`);
    for (let j=0; j<option4.length; j++){
        if(option4[j].checked){
            answer4 = option4[j].value
            console.log(answer4)
        }
    }
    let option5 = document.getElementsByName(`samesame5`);
    for (let j=0; j<option5.length; j++){
        if(option5[j].checked){
            answer5 = option5[j].value
            console.log(answer5)
        }
    }
    let option6 = document.getElementsByName(`samesame6`);
    for (let j=0; j<option6.length; j++){
        if(option6[j].checked){
            answer6 = option6[j].value
            console.log(answer6)
        }
    }
    let option7 = document.getElementsByName(`samesame7`);
    for (let j=0; j<option7.length; j++){
        if(option7[j].checked){
            answer7 = option7[j].value
            console.log(answer7)
        }
    }
    let option8 = document.getElementsByName(`samesame8`);
    for (let j=0; j<option8.length; j++){
        if(option8[j].checked){
            answer8 = option8[j].value
            console.log(answer8)
        }
    }
}

document.querySelector("#querySubmit").addEventListener("click" , ()=>{
    secondSection.classList.add("nono");
    document.querySelector('.Report').style.display = 'inline-block';
    document.querySelector(".Report").classList.remove("nono");
    getValues();
    getReport();
    userName.value="";
    userContact.value="";
    cowName.value="";
    cowAge.value="";
    cowBreed.value="";
})


// page of mdecal reoprt;



const getReport = () =>{
    if(answer1 == "firstoption1" && answer2 == "secondoption1" && answer3 == "thirdoption2" && answer4 == "fourthoption3" && answer5 == "fifthoption3" && answer6 == "sixthoption2" && answer7 == "seventhoption4" && answer8 == "eighthoption2"){
        document.querySelector(".descriptionofdiseas").innerText = "Negative Energy Balance (KETOSIS)";
        document.querySelector(".descriptionofinjections").innerText = `dextrose(25%) I/V 450ml \n betamethasone I/V 5ml \n Multivitamin I/V 10ml`;
        document.querySelector(".descriptionofmedicines").innerText = `milka boost/liquid anabolite \n 100ml I/V.(morning and evening for 5 days)`;
    }
    
    else if(answer1 == "firstoption3" && answer2 == "secondoption2" && answer3 == "thirdoption2" && answer4 == "fourthoption3" && answer5 == "fifthoption3" && answer6 == "sixthoption2" && answer7 == "seventhoption4" && answer8 == "eighthoption2"){
        document.querySelector(".descriptionofdiseas").innerText = "Negative Energy Balance (KETOSIS)";
        document.querySelector(".descriptionofinjections").innerText = `dextrose(25%) I/V 450ml \n betamethasone I/V 5ml \n Multivitamin I/V 10ml`;
        document.querySelector(".descriptionofmedicines").innerText = `milka boost/liquid anabolite \n 100ml I/V.(morning and evening for 5 days)`;
    }


    else if(answer1 == "firstoption3" && answer2 == "secondoption1" && answer3 == "thirdoption2" && answer4 == "fourthoption3" && answer5 == "fifthoption3" && answer6 == "sixthoption2" && answer7 == "seventhoption4" && answer8 == "eighthoption2"){
        document.querySelector(".descriptionofdiseas").innerText = "Negative Energy Balance (KETOSIS)";
        document.querySelector(".descriptionofinjections").innerText = `dextrose(25%) I/V 450ml \n betamethasone I/V 5ml \n Multivitamin I/V 10ml`;
        document.querySelector(".descriptionofmedicines").innerText = `milka boost/liquid anabolite \n 100ml I/V.(morning and evening for 5 days)`;
    }
    
    else if(answer1 == "firstoption2" && answer2 == "secondoption2" && answer3 == "thirdoption2" && answer4 == "fourthoption3" && answer5 == "fifthoption1" && answer6 == "sixthoption2" && answer7 == "seventhoption4" && answer8 == "eighthoption2"){
        document.querySelector(".descriptionofdiseas").innerText = "Indigestion/Diaria."
        document.querySelector(".descriptionofinjections").innerText = `Ringor lactate 500ml I/V \n Multivitamin 10ml I/M   `
        document.querySelector(".descriptionofmedicines").innerText = `piobloom(powder) 25gm (morning and evening 5days  \n latifur ultra 20gm (once in a day for 5 days)`
    }
    
    else if(answer1 == "firstoption2" && answer2 == "secondoption2" && answer3 == "thirdoption2" && answer4 == "fourthoption3" && answer5 == "fifthoption2" && answer6 == "sixthoption2" && answer7 == "seventhoption4" && answer8 == "eighthoption2"){
        document.querySelector(".descriptionofdiseas").innerText = "Indigestion/Constipation.";
        document.querySelector(".descriptionofinjections").innerText = `Ringor lactate 500ml I/V \n Multivitamin 10ml I/M \n     Tonophosfane 15ml I/M   `
        document.querySelector(".descriptionofmedicines").innerText = `parrafin 500ml(orally)`
    }
    else if(answer1 == "firstoption3" && answer2 == "secondoption2" && answer3 == "thirdoption2" && answer4 == "fourthoption3" && answer5 == "fifthoption3" && answer6 == "sixthoption1" && answer7 == "seventhoption4" && answer8 == "eighthoption2"){
        document.querySelector(".descriptionofdiseas").innerText = "Utrine Infection."
        document.querySelector(".descriptionofinjections").innerText = `X-ceft 1gm I/M (3 DAYS) \n     Pragma 2ml I/M        `
        document.querySelector(".descriptionofmedicines").innerText = `lixem(powder) 60ml(3 days)   \n   Utrovet 100ml (morning and evening 5 days) `
    }

    else if(answer1 == "firstoption2" && answer2 == "secondoption2" && answer3 == "thirdoption2" && answer4 == "fourthoption1" && answer5 == "fifthoption3" && answer6 == "sixthoption2" && answer7 == "seventhoption4" && answer8 == "eighthoption1"){
        document.querySelector(".descriptionofdiseas").innerText = "Milk fever"
        document.querySelector(".descriptionofinjections").innerText = `mifex 500ml I/V \n Multivitamin 10ml I/M \n  tnophosphane 15ml I/M  `
        document.querySelector(".descriptionofmedicines").innerText = `Ascal gel 300ml (3days) `
    }

    else if(answer1 == "firstoption3" && answer2 == "secondoption2" && answer3 == "thirdoption2" && answer4 == "fourthoption3" && answer5 == "fifthoption3" && answer6 == "sixthoption2" && answer7 == "seventhoption1" && answer8 == "eighthoption2"){
        document.querySelector(".descriptionofdiseas").innerText = "Subclinical Mastitis. "
        document.querySelector(".descriptionofinjections").innerText = `moxel 4.5gm I/M \n Isoflud 5ml `
        document.querySelector(".descriptionofmedicines").innerText = `mammadium(powder) 1pack(5 days) `
    }
    
    else if(answer1 == "firstoption3" && answer2 == "secondoption2" && answer3 == "thirdoption2" && answer4 == "fourthoption3" && answer5 == "fifthoption3" && answer6 == "sixthoption2" && answer7 == "seventhoption2" && answer8 == "eighthoption2"){
        document.querySelector(".descriptionofdiseas").innerText = "Acute Mastitis."
        document.querySelector(".descriptionofinjections").innerText = `intacef 4.5gm I/M \n  chrmostate 10ml I/M   `
        document.querySelector(".descriptionofmedicines").innerText = `rubbing ice cubes        `
    }
    
    else if(answer1 == "firstoption3" && answer2 == "secondoption2" && answer3 == "thirdoption1" && answer4 == "fourthoption3" && answer5 == "fifthoption3" && answer6 == "sixthoption2" && answer7 == "seventhoption4" && answer8 == "eighthoption2"){
        document.querySelector(".descriptionofdiseas").innerText = "Peracute Mastitis."
        document.querySelector(".descriptionofinjections").innerText = `moxcl 4.5gm I/M (5days) \n  Isoflud 10ml I/M (3days)`
        document.querySelector(".descriptionofmedicines").innerText = `cobacton(intra mammary) (3 days) [tube] `
    }
    else{
        document.querySelector(".descriptionofdiseas").innerText = "Negative Energy Balance (KETOSIS)";
        document.querySelector(".descriptionofinjections").innerText = `dextrose(25%) I/V 450ml \n betamethasone I/V 5ml \n Multivitamin I/V 10ml`;
        document.querySelector(".descriptionofmedicines").innerText = `milka boost/liquid anabolite \n 100ml I/V.(morning and evening for 5 days)`;
    }   
    
}

document.querySelector('.back').addEventListener('click',()=>{
    document.querySelector('.Report').style.display = 'none';
    firstSection.style.display='flex'
    
})
