function part1(number) {
  let password = number + "";
  var current = parseInt(password.charAt(0));
  var a = false;
  for (var i = 0; i < password.length; i++) {
    if (parseInt(password.charAt(i)) < current) {
      return false;
    } else {
      current = parseInt(password.charAt(i));
    }
    if (i < password.length - 1) {
      if (password.charAt(i) == password.charAt(i + 1)) {
        a = true;
      }
    }
  }
  return a;
}

function part2(number) {
  let password = number + "";
  var current = parseInt(password.charAt(0));
  var a = false;
  for (var i = 0; i < password.length; i++) {
    if (parseInt(password.charAt(i)) < current) {
      return false;
    } else {
      current = parseInt(password.charAt(i));
    }
    if (i < password.length - 1) {
      if (password.charAt(i) == password.charAt(i + 1)) {
        i++;
        if (i < password.length - 1) {
          if (password.charAt(i) == password.charAt(i + 1)) {
            while (password[i - 1] == password[i]) {
              i++;
            }
            i--;
          } else {
            a = true;
          }
        } else {
          a = true;
        }
      }
    }
  }
  return a;
}

passwords = new Array();
for (var i = 138241; i < 674034; i++) {
  passwords.push(i);
}
console.log(passwords.filter(num => part1(num)).length);
console.log(passwords.filter(num => part2(num)).length);
