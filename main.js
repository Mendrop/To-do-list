let id =1;

// Toggle "Add" button on "Enter" keypress
const input = document.getElementById('textBox');
const enterBtn = document.getElementById('bt1');
input.addEventListener("keydown",function(event){
                                    if(event.key==="Enter"){
                                        enterBtn.click();
                                    }
                                }
)



// Input text from user and pass it to createPlan()
function add(){
    const plan = document.getElementById('textBox').value;
    if(plan!=''){
        createPlan(plan,id);
        id++;
    }
    else{
        sysMsg.append('Cannot be empty');
    }
}

// Create plan
function createPlan(plan,id){
    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.classList.add("checkbox");
    checkbox.type = 'checkbox';
    checkbox.id = 'cb' + id;

    // Checkbox event handler
    checkbox.addEventListener('change', (event) => {
                                    if(event.target.checked){
                                                checkboxText.style.textDecoration = "line-through";
                                    }
                                }            
                                        
    )

    // Create checkbox text (label)
    const checkboxText = document.createElement('label');
    checkboxText.id = 'cbText' + id;
    checkboxText.classList.add("checkboxtext");
    checkboxText.contentEditable = "true";
    checkboxText.style.cursor = "pointer";
    checkboxText.append(document.createTextNode(plan));

    // Create delete button next to each plan
    const delBut = document.createElement('button');
    delBut.id = 'del' + id;
    delBut.classList.add('delBut');
    delBut.innerHTML = "x";

    // Create a row of plan
    const row = document.createElement('div');
    row.className = 'planRow';
    row.append(checkbox,checkboxText,delBut);
        

    // Append checkbox and checkbox text to planContainer(div)
    const planContainer = document.getElementById("planContainer");
    const br = document.createElement("br");

    planContainer.append(row);
    planContainer.append(br);

    // planContainer.append(checkbox);
    // planContainer.append(checkboxText);
    // planContainer.append(delBut);
    // planContainer.append(br);
    
    // Extra
    document.getElementById("textBox").value='';
    window.alert("Added plan no. " + "" + id);
    id++;
    
    // Checkbox event handler
    checkbox.addEventListener('change', (event) => {
                                    if(event.target.checked){
                                                checkboxText.style.textDecoration = "line-through";
                                                checkboxText.style.opacity = "0.5";
                                    }
                                    else{
                                                checkboxText.style.textDecoration = "";
                                                checkboxText.style.opacity = "1";

                                        
                                    }
                                }            
                                        
    )
    
}

function clearPlans(){
    document.getElementById("planContainer").innerHTML = "";
    document.getElementById("textBox").value='';
    sysMsg.innerHTML="";
    id=1;
}