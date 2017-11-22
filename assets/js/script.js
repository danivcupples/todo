//check off specific tools by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on X to delete item when it's no longer needed

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//create a new to do item

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grabbing new to do text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span>X</span> " + todoText +"</li>");
  }
});
