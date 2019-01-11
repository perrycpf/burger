// Make sure we wait to attach our event handlers until the DOM is fully loaded
$(function() {
    $('.orderButton').on('click', function (event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $('#order-burger').val().trim(),
            devoured: false
        }
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }). then(()=> {
            console.log('created new burger');
            location.reload();
        });
    })

    $('.devour-btn').on('click', function (event) {
        let id = $(this).data('id');
        let newDevour = {
            devoured: true
        };

        $.ajax('/api/burgers/'+id, {
            type: 'PUT',
            data: newDevour
        }). then(()=> {
            console.log('devoured:' + id);
            location.reload();
        });
    });
});