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
today = `${month}/${day}/${year}`;
dateInput.val(today);

// todayRadio click event
todayRadio.on('click', function(event) {
    dateInput.prop('disabled', true);
    dateInput.val(today);
});

// pastRadio click event
pastRadio.on('click', function(event) {
    dateInput.prop('disabled', false);
    dateInput.val('');
    dateInput[0].placeholder = 'mm/dd/yyyy';
});

// workoutForm submit event
workoutForm.submit(async function(e){
    e.preventDefault();
    console.log(dateInput.val());
});