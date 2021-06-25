let selectPrincipal = document.querySelector("#selectPrincipal");
let selectLanguage = document.querySelector("#selectLanguage");
let enterText = document.querySelector("#mensagemEntrada");
let result = document.querySelector("#mensagemSaida");
let radioCode = document.querySelector("#radioCode");
let radioDecod = document.querySelector("#radioDecod");
let buttonP = document.querySelector("#buttonP");
let buttonC = document.querySelector("#buttonC");
let buttonD = document.querySelector("#buttonD");
let inputI = document.querySelector("#incremento")
let inputP = document.querySelector("#incrementoPrincipal")


selectPrincipal.addEventListener("change", function(){
    buttonC.classList.remove("invisible");        
    buttonD.classList.remove("invisible")
    
    if (selectLanguage.value === "base64"){
        inputP.classList.add("invisible")   
        radioCode = btoa(enterText.value);
        buttonC.addEventListener("click", function(){           
            result.textContent =  radioCode;
            console.log(result);           
        });
        
        radioDecod = enterText.value;
        buttonD.addEventListener("click", function(){
            
            result.textContent = atob(radioDecod)
            console.log(result);
            
        });
        
    } else if (selectLanguage.value === "cifraDeCesar"){
        radioCode = enterText.value;
        inputP.classList.remove("invisible")
             
        buttonC.addEventListener("click", function(){
            
            let valorIncremento = inputI.value
            radioCode.split("");
            let nomeCharCode = [];
            let nomeFromCode = [];
            let juncao ="";           
                       
            console.log(radioCode);
            for (let i = 0 ; i < radioCode.length ; i++){
                nomeCharCode.push(radioCode[i].charCodeAt()+ valorIncremento);
                nomeFromCode.push(String.fromCharCode(nomeCharCode[i]));
                juncao = nomeFromCode.join("");    
            }
            result.textContent = juncao                
        });
   
    } else {
        inputP.classList.add("invisible")
        buttonC.classList.add("invisible");        
        buttonD.classList.add("invisible");
    }   
    
});