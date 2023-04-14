var seletectValue;
const step1 = document.querySelector('#setp1');
const domainstep = document.querySelector('#domainstep');
const websitestep = document.querySelector('#websitestep');
const channelstep = document.querySelector('#channelstep');
const accountstep = document.querySelector('#accountstep');
domainstep.style.display = 'none';
websitestep.style.display = 'none';
channelstep.style.display = 'none';
accountstep.style.display = 'none';
const nxtBtn = document.querySelector('#submitBtn');
const form11 = document.querySelector('#form11');
const form12 = document.querySelector('#form12');
const form13 = document.querySelector('#form13');
const form14 = document.querySelector('#form14');
const form15 = document.querySelector('#form15');
const form16 = document.querySelector('#form16');
const form17 = document.querySelector('#form17');
const form18 = document.querySelector('#form18');

const form21 = document.querySelector('#form21');
const form22 = document.querySelector('#form22');
const form23 = document.querySelector('#form23');
const form24 = document.querySelector('#form24');
const form25 = document.querySelector('#form25');
const form26 = document.querySelector('#form26');
const form27 = document.querySelector('#form27');
const form28 = document.querySelector('#form28');


const form31 = document.querySelector('#form31');
const form32 = document.querySelector('#form32');
const form33 = document.querySelector('#form33');
const form34 = document.querySelector('#form34');
const form35 = document.querySelector('#form35');
const form36 = document.querySelector('#form36');
const form37 = document.querySelector('#form37');
const form38 = document.querySelector('#form38');


const form41 = document.querySelector('#form41');
const form42 = document.querySelector('#form42');
const form43 = document.querySelector('#form43');
const form44 = document.querySelector('#form44');
const form45 = document.querySelector('#form45');
const form46 = document.querySelector('#form46');
const form47 = document.querySelector('#form47');
const form48 = document.querySelector('#form48');


const icon11 = document.querySelector('#icon11');
const icon12 = document.querySelector('#icon12');
const icon13 = document.querySelector('#icon13');
const icon14 = document.querySelector('#icon14');
const icon15 = document.querySelector('#icon15');
const icon16 = document.querySelector('#icon16');
const icon17 = document.querySelector('#icon17');
const icon18 = document.querySelector('#icon18');
const icon19 = document.querySelector('#icon19');
const icon110 = document.querySelector('#icon110');

const icon21 = document.querySelector('#icon21');
const icon22 = document.querySelector('#icon22');
const icon23 = document.querySelector('#icon23');
const icon24 = document.querySelector('#icon24');
const icon25 = document.querySelector('#icon25');
const icon26 = document.querySelector('#icon26');
const icon27 = document.querySelector('#icon27');
const icon28 = document.querySelector('#icon28');
const icon29 = document.querySelector('#icon29');
const icon210 = document.querySelector('#icon210');

const icon31 = document.querySelector('#icon31');
const icon32 = document.querySelector('#icon32');
const icon33 = document.querySelector('#icon33');
const icon34 = document.querySelector('#icon34');
const icon35 = document.querySelector('#icon35');
const icon36 = document.querySelector('#icon36');
const icon37 = document.querySelector('#icon37');
const icon38 = document.querySelector('#icon38');
const icon39 = document.querySelector('#icon39');
const icon310 = document.querySelector('#icon310');

const icon41 = document.querySelector('#icon41');
const icon42 = document.querySelector('#icon42');
const icon43 = document.querySelector('#icon43');
const icon44 = document.querySelector('#icon44');
const icon45 = document.querySelector('#icon45');
const icon46 = document.querySelector('#icon46');
const icon47 = document.querySelector('#icon47');
const icon48 = document.querySelector('#icon48');
const icon49 = document.querySelector('#icon49');
const icon410 = document.querySelector('#icon410');


var viewId = 1;
function nextForm(number){
    debugger
    console.log("hellonext");
    if (validateInputs()) {

      } else {
        alert("Please fill in all required fields.");
        return "";
      }
    viewId=viewId+1;
    progressBar(number);
    displayForms(number);

    console.log(viewId);

}

function prevForm(number){
    console.log("helloprev");
    viewId=viewId-1;
    console.log(viewId);
    progressBar1(number);
    displayForms(number);
}
function progressBar1(number){
    switch(number){
        case 1:
            if(viewId===1){
                icon11.classList.add('active');
                icon12.classList.remove('active');
            }
            if(viewId===2){
                icon12.classList.add('active');
                icon13.classList.remove('active');
            }
            if(viewId===3){
                icon13.classList.add('active');
                icon14.classList.remove('active');
            }
            if(viewId===4){
                icon14.classList.add('active');
                icon15.classList.remove('active');
            }
            if(viewId===5){
                icon15.classList.add('active');
                icon16.classList.remove('active');
                nxtBtn.innerHTML = "Submit"
            }
            if(viewId===6){
                icon16.classList.add('active');
                icon17.classList.remove('active');
            }
            if(viewId===7){
                icon17.classList.add('active');
                icon18.classList.remove('active');
            }
            if(viewId===8){
                icon18.classList.add('active');
                icon19.classList.remove('active');
            }
            if(viewId===9){
                icon19.classList.add('active');
                icon110.classList.remove('active');
            }
            break;
        case 2:
            if(viewId===1){
                icon21.classList.add('active');
                icon22.classList.remove('active');
            }
            if(viewId===2){
                icon22.classList.add('active');
                icon23.classList.remove('active');
            }
            if(viewId===3){
                icon23.classList.add('active');
                icon24.classList.remove('active');
            }
            if(viewId===4){
                icon24.classList.add('active');
                icon25.classList.remove('active');
            }
            if(viewId===5){
                icon25.classList.add('active');
                icon26.classList.remove('active');
                nxtBtn.innerHTML = "Submit"
            }
            if(viewId===6){
                icon26.classList.add('active');
                icon27.classList.remove('active');
            }
            if(viewId===7){
                icon27.classList.add('active');
                icon28.classList.remove('active');
            }
            if(viewId===8){
                icon28.classList.add('active');
                icon29.classList.remove('active');
            }
            if(viewId===9){
                icon29.classList.add('active');
                icon210.classList.remove('active');
            }
            break;
        case 3:
            if(viewId===1){
                icon31.classList.add('active');
                icon32.classList.remove('active');
            }
            if(viewId===2){
                icon32.classList.add('active');
                icon33.classList.remove('active');
            }
            if(viewId===3){
                icon33.classList.add('active');
                icon34.classList.remove('active');
            }
            if(viewId===4){
                icon34.classList.add('active');
                icon35.classList.remove('active');
            }
            if(viewId===5){
                icon35.classList.add('active');
                icon36.classList.remove('active');
                nxtBtn.innerHTML = "Submit"
            }
            if(viewId===6){
                icon36.classList.add('active');
                icon37.classList.remove('active');
            }
            if(viewId===7){
                icon37.classList.add('active');
                icon38.classList.remove('active');
            }
            if(viewId===8){
                icon38.classList.add('active');
                icon39.classList.remove('active');
            }
            if(viewId===9){
                icon39.classList.add('active');
                icon310.classList.remove('active');
            }
            break;
        case 4:
            if(viewId===1){
                icon41.classList.add('active');
                icon42.classList.remove('active');
            }
            if(viewId===2){
                icon42.classList.add('active');
                icon43.classList.remove('active');
            }
            if(viewId===3){
                icon43.classList.add('active');
                icon44.classList.remove('active');
            }
            if(viewId===4){
                icon44.classList.add('active');
                icon45.classList.remove('active');
            }
            if(viewId===5){
                icon45.classList.add('active');
                icon46.classList.remove('active');
                nxtBtn.innerHTML = "Submit"
            }
            if(viewId===6){
                icon46.classList.add('active');
                icon47.classList.remove('active');
            }
            if(viewId===7){
                icon47.classList.add('active');
                icon48.classList.remove('active');
            }
            if(viewId===8){
                icon48.classList.add('active');
                icon49.classList.remove('active');
            }
            if(viewId===9){
                icon49.classList.add('active');
                icon410.classList.remove('active');
            }
            break;
    }
   
}

function progressBar(number){

    switch(number) {
        case 1:
            if(viewId===2){
                icon12.classList.add('active');
            }
            if(viewId===3){
                icon13.classList.add('active');
            }
            if(viewId===4){
                icon14.classList.add('active');
            }
            if(viewId===5){
                icon15.classList.add('active');
                nxtBtn.innerHTML = "Submit"
            }
            if(viewId===6){
                icon16.classList.add('active');
            }
            if(viewId===7){
                icon17.classList.add('active');
            }
            if(viewId===8){
                icon18.classList.add('active');
            }
            if(viewId===9){
                icon19.classList.add('active');
            }
            if(viewId===10){
                icon110.classList.add('active');
            }
          break;
        case 2:
            if(viewId===2){
                icon22.classList.add('active');
            }
            if(viewId===3){
                icon23.classList.add('active');
            }
            if(viewId===4){
                icon24.classList.add('active');
            }
            if(viewId===5){
                icon25.classList.add('active');
                nxtBtn.innerHTML = "Submit"
            }
            if(viewId===6){
                icon26.classList.add('active');
            }
            if(viewId===7){
                icon27.classList.add('active');
            }
            if(viewId===8){
                icon28.classList.add('active');
            }
            if(viewId===9){
                icon29.classList.add('active');
            }
            if(viewId===10){
                icon210.classList.add('active');
            }
          break;
        case 3:
            if(viewId===2){
                icon32.classList.add('active');
            }
            if(viewId===3){
                icon33.classList.add('active');
            }
            if(viewId===4){
                icon34.classList.add('active');
            }
            if(viewId===5){
                icon35.classList.add('active');
                nxtBtn.innerHTML = "Submit"
            }
            if(viewId===6){
                icon36.classList.add('active');
            }
            if(viewId===7){
                icon37.classList.add('active');
            }
            if(viewId===8){
                icon38.classList.add('active');
            }
            if(viewId===9){
                icon39.classList.add('active');
            }
            if(viewId===10){
                icon310.classList.add('active');
            }
            break;
        case 4:
            if(viewId===2){
                icon42.classList.add('active');
            }
            if(viewId===3){
                icon43.classList.add('active');
            }
            if(viewId===4){
                icon44.classList.add('active');
            }
            if(viewId===5){
                icon45.classList.add('active');
                nxtBtn.innerHTML = "Submit"
            }
            if(viewId===6){
                icon46.classList.add('active');
            }
            if(viewId===7){
                icon47.classList.add('active');
            }
            if(viewId===8){
                icon48.classList.add('active');
            }
            if(viewId===9){
                icon49.classList.add('active');
            }
            if(viewId===10){
                icon410.classList.add('active');
            }
            break;
        default:
          // code block
      }
    
}

function displayForms(formNumber){

    switch(formNumber) {
        case 1:
            form11.style.display = 'none';
            form12.style.display = 'none';
            form13.style.display = 'none';
            form14.style.display = 'none';
            form15.style.display = 'none';
            form16.style.display = 'none';
            form17.style.display = 'none';
            if(viewId ===1){
                form11.style.display = 'block';
            }else if(viewId === 2){
                form12.style.display = 'block';
        
            }else if(viewId === 3){
                form13.style.display = 'block';
            }else if(viewId === 4){
                form14.style.display = 'block';
        
            }else if(viewId === 5){
                form15.style.display = 'block';
            }
            else if(viewId === 6){
                form16.style.display = 'block';
            }
            else if(viewId === 7){
                form17.style.display = 'block';
            }
            else if(viewId === 8){
                form18.style.display = 'block';
            }
          break;
        case 2:
            form21.style.display = 'none';
            form22.style.display = 'none';
            form23.style.display = 'none';
            form24.style.display = 'none';
            form25.style.display = 'none';
            form26.style.display = 'none';
            form27.style.display = 'none';
            if(viewId ===1){
                form21.style.display = 'block';
            }else if(viewId === 2){
                form22.style.display = 'block';
        
            }else if(viewId === 3){
                form23.style.display = 'block';
            }else if(viewId === 4){
                form24.style.display = 'block';
        
            }else if(viewId === 5){
                form25.style.display = 'block';
            }
            else if(viewId === 6){
                form26.style.display = 'block';
            }
            else if(viewId === 7){
                form27.style.display = 'block';
            }
            else if(viewId === 8){
                form28.style.display = 'block';
            }
          break;
        case 3:
            form31.style.display = 'none';
            form32.style.display = 'none';
            form33.style.display = 'none';
            form34.style.display = 'none';
            form35.style.display = 'none';
            form36.style.display = 'none';
            form37.style.display = 'none';
            if(viewId ===1){
                form31.style.display = 'block';
            }else if(viewId === 2){
                form32.style.display = 'block';
        
            }else if(viewId === 3){
                form33.style.display = 'block';
            }else if(viewId === 4){
                form34.style.display = 'block';
        
            }else if(viewId === 5){
                form35.style.display = 'block';
            }
            else if(viewId === 6){
                form36.style.display = 'block';
            }
            else if(viewId === 7){
                form37.style.display = 'block';
            }
            else if(viewId === 8){
                form38.style.display = 'block';
            }
            break;
        case 4:
            form41.style.display = 'none';
            form42.style.display = 'none';
            form43.style.display = 'none';
            form44.style.display = 'none';
            form45.style.display = 'none';
            form46.style.display = 'none';
            form47.style.display = 'none';
            if(viewId ===1){
                form41.style.display = 'block';
            }else if(viewId === 2){
                form42.style.display = 'block';
        
            }else if(viewId === 3){
                form43.style.display = 'block';
            }else if(viewId === 4){
                form44.style.display = 'block';
        
            }else if(viewId === 5){
                form45.style.display = 'block';
            }
            else if(viewId === 6){
                form46.style.display = 'block';
            }
            else if(viewId === 7){
                form47.style.display = 'block';
            }
            else if(viewId === 8){
                form48.style.display = 'block';
            }
            break;
            
        default:
          // code block
      }
    
}

// for slider

var slider = document.querySelector(".slider");
var output = document.querySelector(".output__value");
output.innerHTML = slider.value ;

slider.oninput = function() {
    output.innerHTML = this.value ;


}


var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'header': [1, 2, 3, 4, 5, 6, false]}],
    [{'color': []}, {'background': []}],
    [{'align': []}],
    ['clean']
];

var quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions
    },
    theme: 'snow'
});

// Get the checkbox element
const checkbox = document.querySelector('input[type=checkbox]');

// Add an event listener to toggle the checkbox when the user clicks the toggle button
checkbox.addEventListener('click', function () {
    this.checked = !this.checked;
});
function openAsset(){
    debugger;
    var e = document.getElementById("editor-WhmLkPnE");
    viewId = 1
    var value = e.value;
    if(value=="null"){
        alert("Please Select The Asset Type")
    }
    else{
        step1.style.display = 'none';
        (value=="domain")?domainstep.style.display = 'block':(value=="website")?websitestep.style.display = 'block': (value=='channel')?channelstep.style.display='block':accountstep.style.display='block';
        // let url = new URL(window.location.href);
        // url.searchParams.set('assetType', value);
        // window.location.href = url.toString();
        seletectValue = value;

    }
    console.log("Nabeel G")
}
//account validation

function validateInputs() {
    var formNo =0 ;
    if(seletectValue=="account"){
        formNo = (viewId==1)?31:(viewId==2)?32:(viewId==3)?33:(viewId==4)?34:(viewId==5)?35:(viewId==6)?36:(viewId==7)?37:38;
    }
    else{
        formNo = (viewId==1)?41:(viewId==2)?42:(viewId==3)?43:(viewId==4)?44:(viewId==5)?45:(viewId==6)?46:(viewId==7)?47:48;
    }
    
    var currentStepInputs = document.querySelectorAll('#form' + formNo + ' input[required]');
    debugger;
    for (var i = 0; i < currentStepInputs.length; i++) {
        if((currentStepInputs[i].type == "radio" || currentStepInputs[i].type == "checkbox") && !currentStepInputs[i].checked) return false
      if (!currentStepInputs[i].value) {
        return false;
      }
    }
    return true;
  }