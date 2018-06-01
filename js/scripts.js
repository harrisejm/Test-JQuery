$(document).ready(function() {
  $("p.test").click(function() {
    $(".hawks-showing").toggle();
    $(".hawks-hidden").toggle();
  });
});

  $("p.test1").click(function() {
    $(".js-showing").toggle();
    $(".js-hidden").toggle();
  });

  $("p.test2").click(function() {
    $(".num-showing").toggle();
    $(".num-hidden").toggle();
  });

$(document).ready(function(){
  $(".slideU").click(function(){
      $(".cont").slideUp();
  });
  $(".slideD").click(function(){
      $(".cont").slideDown()
  });

  $(".slideU2").click(function(){
      $(".cont2").slideUp();
  });
    $(".slideD2").click(function(){
        $(".cont2").slideDown()
    });

  $(".toggle").click(function(){
      $("p.moveT").slideToggle();
  });

  $("#formOne").submit(function(event) {
    var name = $("#name").val();
    var ageString = $("#age").val();
    var age = parseInt(ageString);
    var job = $("#job").val();

    $(".info").text("Name: " + name);
    $(".info1").text("Age: " + age);
    $(".info2").text("Job: " + job);


  //  $(".person2").text(person2Input);
  //  $(".animal").text(animalInput);

    $("#story").show();

    event.preventDefault();
  });
});
