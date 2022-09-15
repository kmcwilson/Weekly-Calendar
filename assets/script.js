const currentDate= moment().format('dddd, MMMM DD, YYYY');
$('#currentDay').text(currentDate);
const timeofDay = moment().format('H');
const hours = $('.hour');
const saveEvent= $('.saveBtn');

hours.each (function (i){
  let time =  parseInt($(this).attr('id'));
  console.log(time);
    if (time < timeofDay){ 
        $(this).next().addClass('past');
    }
    else if (time == timeofDay){
        $(this).next().addClass('present');

    }else{
        $(this).next().addClass('future');
    }
    $(this).next().children().text(localStorage.getItem(`todo ${i}`)|| '');
   });

saveEvent.each (function(i){
    $(this).on('click', function(){
    let toDos=$(this).prev().children().val();
    localStorage.setItem(`todo ${i}`, toDos);
})
});


