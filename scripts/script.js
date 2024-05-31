function imageChecker() {
    let imageCheck = document.getElementById("btnCheckImages")
    if (imageCheck.checked) {
        return 299
    }
    else {
        return 0
    }
}
function musicChecker() {
    let musicCheck = document.getElementById("btnCheckMusic")
    if (musicCheck.checked) {
        return 799
    }
    else {
        return 0
    }
}
function videoChecker() {
    let videoCheck = document.getElementById("btnCheckVideo")
    if (videoCheck.checked) {
        return 899
    }
    else {
        return 0
    }
}
function progChecker() {
    let progCheck = document.getElementById("btnCheckProgs")
    if (progCheck.checked) {
        return 399
    }
    else {
        return 0
    }
}
function checkCalc() {
    let price = (imageChecker() + musicChecker() + videoChecker() + progChecker()) / 100
    let editText = document.getElementById("calculatedNumbs")
    let textContainer = document.getElementById("containerWithText")
    editText.innerHTML = "Стоимость " + price + "$ в месяц"
    if (price <= 0) {
        textContainer.style.display = "none"
    } else {
        textContainer.style.display = "block"
    }
}
let cardNumInput = document.getElementById("cardNumInput");
cardNumInput.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, "");
    let buttonCont = document.getElementById("buttonContinue");
    if (codeInput.value.length > 2 && dateInput.value.length > 3 && cardNumInput.value.length > 14) {
        buttonCont.disabled = false  
    } else {
        buttonCont.disabled = true
    };
});
cardNumInput.addEventListener('input', editCardNum, false);
    function editCardNum() {
    let editNum = this.value.replace(/[^\d]/g, '').substring(0,20);
    if(editNum != ''){
        editNum = editNum.match(/.{1,4}/g);
        editNum = editNum.join(' ');
    } else {
    }
    this.value = editNum;
};
let dateInput = document.getElementById("dateInput");
dateInput.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, "");
    let buttonCont = document.getElementById("buttonContinue");
    if (codeInput.value.length > 2 && dateInput.value.length > 3 && cardNumInput.value.length > 14) {
        buttonCont.disabled = false  
    } else {
        buttonCont.disabled = true
    };
});
dateInput.addEventListener('input', editDate, false);
    function editDate() {
    let editDateNum = this.value.replace(/[^\d]/g, '').substring(0,4);
    if(editDateNum != ''){
        editDateNum = editDateNum.match(/.{1,2}/g);
        editDateNum = editDateNum.join('/');
        if (editDateNum[0] > 1) {
            editDateNum = editDateNum.replace(/[^0-1]/g, "")
        }
        if (editDateNum[0] = 1) {
            editDateNum = editDateNum.replace(/[^0-9, /]/g, "")
        }
        if (editDateNum[1] > 2 && editDateNum[0] == 1) {
            editDateNum = editDateNum.replace(/[^0-2, /]/g, "")
        }
    } else {
    }
    this.value = editDateNum;
};
let codeInput = document.getElementById("codeInput");
codeInput.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, "");
    let buttonCont = document.getElementById("buttonContinue");
    if (codeInput.value.length > 2 && dateInput.value.length > 3 && cardNumInput.value.length > 14) {
        buttonCont.disabled = false  
    } else {
        buttonCont.disabled = true
    };
}); 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("emailInput").addEventListener("input", function(e) {
      const input = e.target.value;
      const withoutSpaces = input.replace(/\s/g, "");
      e.target.value = withoutSpaces;
      let buttonNext = document.getElementById("buttonNext");
      if (this.value.length > 1) {
          buttonNext.disabled = false  
      } else {
          buttonNext.disabled = true
      };
    });
  });   