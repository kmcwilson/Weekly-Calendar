const currentDate= moment().format('dddd, MMMM DD, YYYY');
$('#currentDay').text(currentDate);
const timeofDay = parseInt(moment().format('H'));
const hour = parseInt($('.row').children('.hour'));
const timeBlocks = $('.time-block');
const saveEvent= $('.saveBtn');

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

function storedEvents(event){
    event.preventDefault();
    let toDos=$('textarea').val();
    timeBlocks.appendChild(toDos);
    localStorage.setItem(storedEvents);
    localStorage.getItem(storedEvents);

}


saveEvent.on('click', storedEvents)
