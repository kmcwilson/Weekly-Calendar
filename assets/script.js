const currentDate= moment().format('dddd, MMMM DD, YYYY');
$('#currentDay').text(currentDate);
const timeofDay = parseInt(moment().format('H'));
const hour = $('.hour');
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
$('textarea').focus(function(){
    $(this).css('background', 'white');

});
$('textarea').blur(function(){
    $(this).css('background', 'lightgray');

});

function storedEvents(event){
    let timeBlocks = $('.time-block');
    let toDos=$('textarea').val();
    timeBlocks.appendChild(toDos);
};

localStorage.setItem(storedEvents);
localStorage.getItem(storedEvents);


saveEvent.on('click', storedEvents);
