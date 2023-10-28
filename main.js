let fn = document.getElementById("fn");
let ln = document.getElementById("ln");
let mail = document.getElementById("mail");
let phone = document.getElementById("phone");
let pass = document.getElementById("pass");
let pass2 = document.getElementById("pass2");
let button = document.querySelector("button");
 
let fnValidation ;
let lnValidation ;
let mailValidation ;
let phoneValidation ;
let passValidation ;
let pass2Validation ;


fn.onfocus = () => {
  document.querySelectorAll(".rule.fn").forEach((item) => {
    item.style.display = "block";
  });

  fn.oninput = () => {
    let regex = /^[a-z]+$/i;
    let fnEmpty = document.getElementById("fn-empty");
    let fnLength = document.getElementById("fn-length");
    let fnSpecial = document.getElementById("fn-special");

    if (fn.value.length >= 1) {
      check(fnEmpty);
      if (fn.value.length > 3) {
        check(fnLength);
      } else {
        wrong(fnLength);
      }
      if (regex.test(fn.value) && fn.value.length > 3) {
        check(fnSpecial);
      } else {
        wrong(fnSpecial);
      }
    } else {
      wrong(fnEmpty);
    }

    if (regex.test(fn.value) && fn.value.length > 3) {
      fn.classList.add("valid");
      fn.classList.remove("error");
      fnValidation = true
    } else {
      fn.classList.add("error");
      fnValidation = false
    }
  };
};
fn.onblur = () => {
  document.querySelectorAll(".rule.fn").forEach((item) => {
    item.style.display = "none";
  });
};
/////////////

ln.onfocus = () => {
  document.querySelectorAll(".rule.ln").forEach((item) => {
    item.style.display = "block";
  });

  ln.oninput = () => {
    let regex = /^[a-z]+$/i;
    let lnEmpty = document.getElementById("ln-empty");
    let lnLength = document.getElementById("ln-length");
    let lnSpecial = document.getElementById("ln-special");

    if (ln.value.length >= 1) {
      check(lnEmpty);
      if (ln.value.length > 3) {
        check(lnLength);
      } else {
        wrong(lnLength);
      }
      if (regex.test(ln.value) && ln.value.length > 3) {
        check(lnSpecial);
      } else {
        wrong(lnSpecial);
      }
    } else {
      wrong(lnEmpty);
    }

    if (regex.test(ln.value) && ln.value.length > 3) {
      ln.classList.add("valid");
      ln.classList.remove("error");
      lnValidation = true
    } else {
      ln.classList.add("error");
      lnValidation = false
    }
  };
};
ln.onblur = () => {
  document.querySelectorAll(".rule.ln").forEach((item) => {
    item.style.display = "none";
  });
};
/////////////

mail.onfocus = () => {
  document.querySelectorAll(".rule.mail").forEach((item) => {
    item.style.display = "block";
  });
  mail.oninput = () => {
    let mailEmpty = document.getElementById("mail-empty");
    let mailValid = document.getElementById("mail-valid");

    let regex = /^\w+@[a-z]+.(com|net)$/i;
    if (mail.value.length >= 1) {
      check(mailEmpty);
      if (regex.test(mail.value)) {
        check(mailValid);
      } else {
        wrong(mailValid);
      }
    } else {
      wrong(mailEmpty);
    }
    if (regex.test(mail.value) && mail.value.length >= 1) {
      removeError(mail);
      addValid(mail);
      mailValidation = true
    } else {
      addError(mail);
      mailValidation = false
    }
  };
};
mail.onblur = () => {
  document.querySelectorAll(".rule.mail").forEach((item) => {
    item.style.display = "none";
  });
};
/////////////

phone.onfocus = () => {
  document.querySelectorAll(".rule.phone").forEach((item) => {
    item.style.display = "block";
  });
  phone.oninput = () => {
    let phoneEmpty = document.getElementById("phone-empty");
    let phoneLength = document.getElementById("phone-length");
    let phoneValid = document.getElementById("phone-valid");

    if (phone.value.length >= 1) {
      check(phoneEmpty);
      if (phone.value.length == 10) {
        check(phoneLength);
      } else {
        wrong(phoneLength);
      }
      if (/^\d+$/.test(phone.value) == true && phone.value.length == 10) {
        console.log(/^\d+$/.test(phone.value));
        check(phoneValid);
      } else {
        wrong(phoneValid);
      }
    } else {
      wrong(phoneEmpty);
    }
    if (phone.value.length == 10 && /^\d+$/.test(phone.value)) {
      removeError(phone);
      addValid(phone);
      phoneValidation = true
    } else {
      addError(phone);
      phoneValidation = false
    }
  };
};
phone.onblur = () => {
  document.querySelectorAll(".rule.phone").forEach((item) => {
    item.style.display = "none";
  });
};

/////////////

pass.onfocus = () => {
  document.querySelectorAll(".rule.pass").forEach((item) => {
    item.style.display = "block";
  });
  pass.oninput = () => {
    let passEmpty = document.getElementById("pass-empty");
    let passLength = document.getElementById("pass-length");
    let passSmall = document.getElementById("pass-small");
    let passCapital = document.getElementById("pass-capital");

    if (/[a-z]/.test(pass.value) && pass.value.length > 0) {
      check(passSmall);
    } else {
      wrong(passSmall);
    }
    if (/[A-Z]/.test(pass.value) && pass.value.length > 0) {
      check(passCapital);
    } else {
      wrong(passCapital);
    }
    if (pass.value.length >= 1) {
      check(passEmpty);
      if (pass.value.length >= 8) {
        check(passLength);
      } else {
        wrong(passLength);
      }
    } else {
      wrong(passEmpty);
    }

    if (
      pass.value.length >= 8 &&
      /[a-z]/.test(pass.value) &&
      /[A-Z]/.test(pass.value)
    ) {
      pass.classList.add("valid");
      pass.classList.remove("error");
      passValidation= true
    } else {
      pass.classList.add("error");
      passValidation= false
    }
  };
};
pass.onblur = () => {
  document.querySelectorAll(".rule.pass").forEach((item) => {
    item.style.display = "none";
  });
};
/////////////

pass2.onfocus = () => {
  document.querySelectorAll(".rule.pass2").forEach((item) => {
    item.style.display = "block";
  });
  pass2.oninput = () => {
    let pass2Empty = document.getElementById("pass2-empty");
    let pass2Similar = document.getElementById("pass2-similar");

    if (pass2.value.length >= 1) {
      check(pass2Empty);
      if (pass.value == pass2.value) {
        check(pass2Similar);
      } else {
        wrong(pass2Similar);
      }
    } else {
      wrong(pass2Empty);
    }

    if (pass.value.length >= 8 && pass2.value == pass.value) {
      pass2.classList.add("valid");
      pass2.classList.remove("error");
      pass2Validation = true
    } else {
      pass2.classList.add("error");
      pass2Validation = false
    }
  };
};
pass2.onblur = () => {
  document.querySelectorAll(".rule.pass2").forEach((item) => {
    item.style.display = "none";
  });
};
/////////////

function addError(name) {
  name.classList.add("error");
}
function addValid(name) {
  name.classList.add("valid");
}
function removeError(name) {
  name.classList.remove("error");
}
function removeValid(name) {
  name.classList.remove("valid");
}

button.onclick = () => {
  if(!fnValidation ){   
    fn.focus()
    return false
  }
  if(!lnValidation ){   
    ln.focus()
    return false
  }
  if(!mailValidation ){   
    mail.focus()
    return false
  }
  if(!phoneValidation ){   
    phone.focus()
    return false
  }
  if(!passValidation ){   
    pass.focus()
    return false
  }
  if(!pass2Validation ){   
    pass2.focus()
    return false
  }
}
function check(item) {
  item.children[0].className = "fa-regular fa-circle-check";
  item.style.color = '#4caf50'
}
function wrong(item) {
  item.children[0].className = "fa-regular fa-circle-xmark";
  item.style.color = '#f44336'
}

let hide = document.querySelectorAll(".input i");

hide.forEach((item) => {
  item.addEventListener("click", () => {
   
    if (item.className == "fa-solid fa-eye") {
      item.className = "fa-solid fa-eye-slash";
    } else {
      item.className = "fa-solid fa-eye";
    }

    if (item.previousSibling.type == "password") {
      item.previousSibling.type = "text";
    } else {
      item.previousSibling.type = "password";
    }
  });
});
