

const input_element = document.querySelectorAll(".box");
const input_element_operator = document.querySelectorAll(".operationSymbol");
const output_operation_element = document.querySelector('#answer-display')
const output_result_element = document.querySelector('#text')
const elementBox      = document.querySelectorAll(".box");
const equalsButton    = document.querySelectorAll(".equals-button")
const allClearButton  = document.querySelectorAll(".clearAll")
const deleteButton    = document.querySelectorAll(".deleteOne")
const mol             = document.querySelectorAll(".mol");


let data = {
   operation:[],
   formula:[]
}

let clearCount = false; 

  //mol 
  
  mol.forEach(button => {
    button.addEventListener("click", () => {
      if(clearCount==true) {
        clearAll()
        console.log(clearCount)
        clearCount=false;
      } else {}
      data.operation.push(button.children[0].innerText) 
      data.formula.push(button.children[0].innerText)
      updateOutputOperation(data.operation.join(''));

    })
})
//number press 
input_element.forEach(button => {
    button.addEventListener("click", () => {
      if(clearCount==true) {
        clearAll()
        console.log(clearCount)
        clearCount=false;
      } else {}
      data.operation.push(button.children[3].innerHTML) 
      data.formula.push(button.children[3].innerHTML)
      updateOutputOperation(data.operation.join(''));

    })
})

//operator key press 
input_element_operator.forEach(button => {
    button.addEventListener("click", () => {
        if(clearCount==true) {
            clearAll()
            console.log(clearCount)
            clearCount=false;
        }
        else {
        data.operation.push(button.innerText) 
       data.formula.push(button.innerText)
       updateOutputOperation(data.operation.join(''));
       clearCount=false;
       console.log(clearCount)
        }
    })
   
})

//calculate
equalsButton.forEach(button => {
    button.addEventListener("click", () => {
        formula_string = data.formula.join('')
        let result = eval(formula_string);
        clearCount=true;
        console.log(clearCount)
        updateOutputResult(result)
       
    })
    
})

//delete one 
deleteButton.forEach(button => {
    button.addEventListener("click", () => {
        data.operation.pop();
        data.formula.pop();
        updateOutputOperation(data.operation.join(''));
    })
   
})

// All clear button

allClearButton.forEach(button => {
    button.addEventListener("click", clearAll)
   
})

function clearAll() {
    data.operation = [""];
    data.formula = [""];
    updateOutputOperation(data.operation.join(''));
    updateOutputResult(data.formula.join(''));
    clearCount = true; 
    console.log(clearCount)

}

/*
equalsButton.addEventListener("click", function() {
    formula_string = data.formula.join('')
    let result = eval(formula_string);
    updateOutputResult(result)
});


equalsButton.addEventListener("click",() => {
    formula_string = data.formula.join('')
    let result = eval(formula_string);
    updateOutputResult(result)
}) */

/*
deleteButton.addEventListener("click",button =>{ 
    data.operation.pop();
    data.formula.pop();
    updateOutputOperation(data.operation.join(''));
}) */



//calculate button

// Delete


/*function calculator(button){

    updateOutputOperation(data.operation.join(''));
}*/

//update output
function updateOutputOperation(operation) {
    output_operation_element.innerHTML = operation
}

function updateOutputResult(result) {
    output_result_element.innerHTML = result
}

