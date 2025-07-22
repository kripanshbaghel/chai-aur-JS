const accountId = 144553
let accountEmail = "Kripansh@gmail.com"
var accountPassword = "12345"
accountCity = "Greater Noida"

accountEmail = "hc@hc.com"
accountPassword = "54321"
accountCity = "Paris"
let accountState;
// accountId = 2 // not allowed
/*
Prefer not to use var
Because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
