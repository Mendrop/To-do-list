let id =1;

// Toggle "Add" button on "Enter" keypress
const input = document.getElementById('textBox');
const enterBtn = document.getElementById('bt1');
input.addEventListener("keydown", function(event){
    if(event.key==="Enter"){
        enterBtn.click();
    }
})

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
    checkbox.type = 'checkbox';
    checkbox.id = 'cb' + id;

    // Create checkbox text (label)
    const checkboxText = document.createElement('label');
    checkboxText.id = 'cbText' + id;
    checkboxText.contentEditable = "true";
    checkboxText.style.cursor = "pointer";
    checkboxText.append(document.createTextNode(plan));

    // Append checkbox and checkbox text to planContainer(div)
    const cbDiv = document.getElementById("planContainer");
    const br = document.createElement("br");

    cbDiv.append(checkbox);
    cbDiv.append(checkboxText);
    cbDiv.append(br)
    
    // Extra
    document.getElementById("textBox").value='';
    window.alert("Added plan no. " + "" + id);
    id++;
}

function clearPlans(){
    document.getElementById("planContainer").innerHTML = "";
    document.getElementById("textBox").value='';
}