let currentUser = JSON.parse(localStorage.getItem("currentUser"));
$(".user-name").text(`${currentUser.name} ${currentUser.lname}`);
