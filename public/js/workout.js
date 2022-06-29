let workoutLink = $('#workoutLink');
let todayRadio = $('#todayRadio');
let pastRadio = $('#pastRadio');
let dateInput = $('#dateInput');
let workoutForm = $('#workoutForm');
let error = $('#error');
let errorText = $('#errorText');

// page setup
workoutLink.addClass('active');
dateInput.prop('disabled', true);
const date = new Date();
let day = date.getDate();
if(day < 10) day = `0${day}`;
let month = date.getMonth()+1;
if(month < 10) month = `0${month}`;
let year = date.getFullYear();
today = `${year}-${month}-${day}`;
dateInput.val(today);
error.hide();

// todayRadio click event
todayRadio.on('click', function(event) {
    dateInput.prop('disabled', true);
    dateInput.val(today);
});

// pastRadio click event
pastRadio.on('click', function(event) {
    dateInput.prop('disabled', false);
    dateInput.val('');
});

// workoutForm submit event
workoutForm.submit(async function(e){
    e.preventDefault();
    let date = dateInput.val();
    let validInput = true;
    workoutForm[0].reset();
    dateInput.prop('disabled', true);
    dateInput.val(today);

    // date input checking
    if(!date){
        errorText.text('must supply a date');
        error.show();
        validInput = false;
    }
    if(!moment(date, 'YYYY-MM-DD', true).isValid()){
        errorText.text('make sure supplied date is properly formatted');
        error.show();
        validInput = false;
    }

    // test
    if(validInput){
        error.hide();
        console.log(date);
    }
});