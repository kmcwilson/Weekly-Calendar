//adding the constant for currentDate to display the moment format for date
const currentDate= moment().format('dddd, MMMM DD, YYYY');
//text content for currentDay will now show the date from the moment format
$('#currentDay').text(currentDate);
//Using the moment format of hour in order to use for my each function
const timeofDay = moment().format('H');
const hours = $('.hour');
const saveEvent= $('.saveBtn');
//In this function we are looping through the attributes based on 
//their ids that have been placed into an integer, if it is < = or > than the number within the moment format that will change its colour.
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
//local storage is now going to loop through and get the item based on its index, if not it will be an empty string
    $(this).next().children().text(localStorage.getItem(`todo ${i}`)|| '');
   });

   //added an event listener to the function and this will go to each of the buttons 
   //and target the value of its prev siblin's child element which is the text area. 
   //This is then set into localstorge under the index of todo 0, todo 1 etc. 
saveEvent.each (function(i){
    $(this).on('click', function(){
    let toDos=$(this).prev().children().val();
    localStorage.setItem(`todo ${i}`, toDos);
})
});


