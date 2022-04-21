//const numberButtons = document.querySelectorAll('[data-number]')


function updateDisplay_number(clicked_id){

    var currently_displayed = document.getElementById('result').innerText;
    var last_character = currently_displayed.slice(-1);
    var penultimate_character = currently_displayed.slice(-2,-1);
    var operators = currently_displayed.replace(/[0-9]/g, '');
    var last_operator = operators.slice(-1)

if (clicked_id == "0"){
    if (currently_displayed == '0'){

    } else if(operators.slice(-1) == "."){
        document.getElementById('result').innerText += clicked_id;
        
    } else if(isNaN(last_character)){
        document.getElementById('result').innerText += clicked_id;
        
    }else if(isNaN(penultimate_character) && last_character == "0"){

    }else {
        document.getElementById('result').innerText += clicked_id;

    }
} else {
    if (currently_displayed == "0"){
        document.getElementById('result').innerText = clicked_id;
    } else if(isNaN(penultimate_character) && last_operator !== "." && last_character == "0"){
        document.getElementById('result').innerText = currently_displayed.replace(/.$/, clicked_id)
    }else {
        document.getElementById('result').innerText += clicked_id;
    }
}
}

function updateDisplay_operation(clicked_id){
    var currently_displayed = document.getElementById('result').innerText;
    var last_character = currently_displayed.slice(-1);

    if (currently_displayed == ""){
        if (clicked_id == "-"){
            document.getElementById('result').innerText += clicked_id;
        }
    } else if(last_character == "."){ 
    
    }else if (isNaN(last_character)){
        document.getElementById('result').innerText = currently_displayed.replace(/.$/, clicked_id)
    } else
    document.getElementById('result').innerText += clicked_id;

}

function updateDisplay_result(){
    var currently_displayed = document.getElementById('result').innerText;
    var last_character = currently_displayed.slice(-1);

    if (currently_displayed == ""){

    }else if (isNaN(last_character)) {

    } else { 
      document.getElementById('result').innerText = eval(currently_displayed);
    }
}

function updateDisplay_clearLast(){
    var currently_displayed = document.getElementById('result').innerText;

    if (currently_displayed.length == 1){
        document.getElementById('result').innerText = "0"
    } else {
        var result = currently_displayed.slice(0, -1);
        document.getElementById('result').innerText = result;
    }




}

function updateDisplay_clearAll(){
    document.getElementById('result').innerText = "0";
}

function updateDisplay_decimal(clicked_id){
    var currently_displayed = document.getElementById('result').innerText;
    var last_character = currently_displayed.slice(-1);
    var operators = currently_displayed.replace(/[0-9]/g, '');
    if (currently_displayed == ""){ // creo que esto es totalmente irrelevante

    } else if(operators.slice(-1) == "."){

    } else if (isNaN(last_character)){
    
        document.getElementById('result').innerText += "0" + clicked_id;
    
    } else
    document.getElementById('result').innerText += clicked_id;


}