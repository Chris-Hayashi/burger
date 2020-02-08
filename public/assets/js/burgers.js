$("#submit").on("click", function(event) {
    event.preventDefault();

    console.log("submit onClick event is working");

    const burger = {
        burger_name: $("#burgerName").val()
    };
    $.post("/api/burgers", burger, function(data) {
        console.log("Data from POST request: " + JSON.stringify(data));
    });
});