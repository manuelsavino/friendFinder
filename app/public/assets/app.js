$(function () {


    $(".submit").on("click", function (event) {
        event.preventDefault();
        var scores = [
            $("#question1 option:selected").val(),
            $("#question2 option:selected").val(),
            $("#question3 option:selected").val(),
            $("#question4 option:selected").val(),
            $("#question5 option:selected").val(),
            $("#question6 option:selected").val(),
            $("#question7 option:selected").val(),
            $("#question8 option:selected").val(),
            $("#question9 option:selected").val(),
            $("#question10 option:selected").val(),
        ]

        var newFriend = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: scores
        }
        // console.log(newFriend)


        $.post("/api/friends", newFriend, function (data) {
            if (data) {
                $("#bestFriend").text(data.name);
                $("#bestFriendPhoto").attr("src", data.photo);
                $("#bestFriendModal").modal("toggle");
            }
        })





    })



})

