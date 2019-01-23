$(document).ready(function(){
    console.log("In ajax code");

    $('form').on('submit', function(){
  
        var item = $('form input');
        var todo = {item: item.val()};

  
        $.ajax({
          type: 'POST',
          url: '/todo',
          data: todo,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
  
        return false;
  
    });
  
    $('li').on('click', function(){
        console.log("DELETE AJAX")
        var item = $(this).text().trim();
        console.log('item to delte' , item);
        $.ajax({
          type: 'DELETE',
          url: '/todo/' + item,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
    });
  });