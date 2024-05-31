document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("emailInput").addEventListener("input", function(e) {
      const input = e.target.value;
      const withoutSpaces = input.replace(/\s/g, "");
      e.target.value = withoutSpaces;
      let buttonNext = document.getElementById("buttonNext");
      if (this.value.length > 0) {
          buttonNext.disabled = false  
      } else {
          buttonNext.disabled = true
      };
    });
  });   