const form = document.getElementById('form');
const username = document.getElementById('username');
const Name = document.getElementById('Name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const date = document.getElementById('date');
const state = document.getElementById('state');
const district = document.getElementById('district');
const gender = document.getElementsByName('gender');


const districts = {
    '1' : ['Tirupur','Salem','Erode','Coimbatore','Chennai'],
    '2' : ['Alappuzha','Kannur','Palakad'],
    '3' : ['Bengaluru']
}
function checkingState() {
    const selectedState = state.value;
    district.innerHTML = '<option value="none">Select Your District</option>';
    if (selectedState !== 'none') {
        districts[selectedState].forEach((districtName) => {
            const option = document.createElement("option");
            option.value = districtName;
            option.textContent = districtName;
            district.appendChild(option);
        });
    }
}

function checksgender(inputs) {
    let checkGender = false;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            checkGender = true;
            break;
        }
    }
    if (checkGender) {
        successInput(inputs[0].parentElement);
    } else {
        invalidInput(inputs[0].parentElement, 'Please Select a Gender');
    }
}

function checkBoxes(input) {
    if (!input.checked) {
        invalidInput(input, 'Please agree to the terms');
    } else {
        successInput(input);
    }
}

function checkState(select){
    if(select.value.trim() == 'none'){
        invalidInput(select,'Please select your State');
    }
    else{
        successInput(select)
    }
}

function checkDistrict(select){
    if(select.value.trim() == 'none'){
        invalidInput(select,'Please select your District');
    }
    else{
        successInput(select)
    }
}

String.prototype.isUsername = function(){
    return this.match(/^(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]{3,25}$/);
}

String.prototype.isName = function(){
    return this.match(/^[A-Za-z ]{3,25}$/);
}

String.prototype.isEmail = function(){
    return this.match(/^[\w]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

String.prototype.isPassword = function(){
    return this.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,25}$/);
}

function invalidInput(input, message){
    const formGroup = input.parentElement;
    formGroup.className = 'form-group error';
    const p = formGroup.querySelector('p');
    p.innerHTML = message;
}

function successInput(input){
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
    const p = formGroup.querySelector('p');
    p.innerHTML = '';
}

function checking(inputs){
    inputs.forEach((input) => {
        if (input.value.trim() === ''){
            invalidInput(input, 'Required');
        }
        else{
            successInput(input);
        }
    });
}

function checkUser(input){
    if(!input.value.trim().isUsername()){
        invalidInput(input, 'Please Enter the Valid Username');
    }
    else{
        successInput(input);
    }
}
function checkName(input){
    if(input.value.trim().isName()){
        successInput(input);
    }
    else{
        invalidInput(input, 'Please Enter the Name');
    }
}

function checkEmail(input){
    if(!input.value.trim().isEmail()){
        invalidInput(input, 'Please Enter the Valid Email Id');
    }
    else{
        successInput(input);
    }
}
function checkPassword(input){
    if(!input.value.trim().isPassword()){
        invalidInput(input, 'Please Enter the Valid Password');
    }
    else{
        successInput(input);
    }
}

function checkConfirmpassword(password, password2){
    if(password2.value === ''){
        invalidInput(password2, 'Please Enter the Password');
    }
    else if (password.value !== password2.value){
        invalidInput(password2, 'Password does not Match');
    }
    else{
        successInput(password2);
    }
}
form.addEventListener('submit',function(x){
    x.preventDefault();
    checking([username, Name, email, password, password2, state, district, date]);
    checkName(Name)
    checkUser(username);
    checkEmail(email);
    checkPassword(password);
    checkConfirmpassword(password, password2);
    checkState(state);
    checkDistrict(district);
    checksgender(gender);
    checkBoxes(document.getElementById('checkboxes'));
});