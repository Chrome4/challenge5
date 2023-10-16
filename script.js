$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    const input = $(this).parents().children("textarea").val();
    const timeId = $(this).parent().attr("id");
    localStorage.setItem(timeId, input);
  });
  function hourUpdater() {
    var currentHour = dayjs().hour();
    // loop over time blocks
    $(".time-block").each(function () {
      const hour = $(this).attr("id");
      //Set colors based on class value
      if (hour > currentHour) {
        $(this).attr("class", "future");
      } else if (hour < currentHour) {
        $(this).attr("class", "past");
      } else {
        $(this).attr("class", "present");
      }
    });
  }
  hourUpdater();
  setInterval(hourUpdater, 15000);
  // load any saved data from localStorage
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
  // display current day on page
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
