let id =1;
function add(){
    const plan = document.getElementById('text1').value;
    if(plan!=''){
        createPlan(plan,id);
        id++;
    }
    else{
        sysMsg.append('Cannot be empty');
    }
}


function createPlan(plan,id){
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'cb' + id;

    const checkboxText = document.createElement('label');
    checkboxText.id = 'cbText' + id;
    checkboxText.append(document.createTextNode(plan));

    const cbDiv = document.getElementById("planContainer");
    const br = document.createElement("br");

    cbDiv.append(checkbox);
    cbDiv.append(checkboxText);
    cbDiv.append(br)
    sysMsg.value('');
    window.alert("Added plan" + "" + id);
    id++;
}

function clearPlans(){
    document.getElementById("planContainer").innerHTML = "";
    document.getElementById("text1").value='';
}