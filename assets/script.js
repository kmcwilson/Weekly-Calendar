const currentDate= moment().format('dddd, MMMM DD, YYYY');
$('#currentDay').text(currentDate);
const timeofDay = moment().format('H');
const hour = $('.row').children('.hour');

function currentTime(){
    if (hour < timeofDay){ 
        $('.hour').addClass('past');
    }
    if (hour === timeofDay){
        $('.hour').addClass('present');

    }else{
        $('.hour').addClass('future');
    }
   }
