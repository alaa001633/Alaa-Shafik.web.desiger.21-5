var users = [];

  function askCount() {
    var n;
    do {
      n = prompt("  enter number  ( )");
    } while (isNaN(n) || n <= 0);
    return parseInt(n);
  }

 function addUser() {
  var name = prompt("Enter user name:");
  var id = prompt("Enter user ID:");
  var balance = prompt("Enter user balance:");

  var user = {
    name: name,
    id: id,
    balance: balance
  };
    users.push(user);
  console.log("User added:", user);
}
function updateBalance() {
  var id = prompt("Enter user ID to update balance:");
  var newBalance = prompt("Enter the new balance:");

  for (var i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i].balance = newBalance;
      console.log("Balance updated:", users[i]);
      break;
    }
  }
}
function deleteUser() {
  var id = prompt("Enter user ID to delete:");

  for (var i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users.splice(i, 1);
      console.log("User deleted.");
      break;
    }
  }
}
 