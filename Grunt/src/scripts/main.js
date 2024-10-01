
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let month = document.getElementById("month-options").value;

    let day = parseInt(document.getElementById("day").value);

    let result = document.getElementById("resultSeason");

    let hemisphere = document.getElementById("hemisphere-options").value;

    const resultBlock = document.querySelector(".result");

    if (hemisphere == "sou") {
        document.querySelector(".alert").style.display = "none";
      if (month == "jan" || month == "feb") {
        result.innerText = "Summer";
        resultBlock.style.display = "block";
        resultBlock.style.backgroundColor  = "#ec9334";
        return 0;
      }
      if (month == "mar" && day <= "20") {
        result.innerText = "Summer";
        resultBlock.style.display = "block";
        resultBlock.style.backgroundColor  = "#ec9334";
        return 0;
      } 
      if (month == "mar" && day >= "21") {
        result.innerText = "Fall";
        resultBlock.style.display = "block";
        resultBlock.style.backgroundColor  = "#cca071";
        return 0;
      } 
      if (month == "apr" || month == "may") {
        result.innerText = "Fall";
        resultBlock.style.display = "block";
        resultBlock.style.backgroundColor  = "#cca071";
        return 0;
      }
      if (month == "jun" && day <= "20") {
        result.innerText = "Fall";
        resultBlock.style.display = "block";
        resultBlock.style.backgroundColor  = "#cca071";
        return 0;
      } 
      if (month == "jun" && day >= "21") {
        result.innerText = "Winter";
        resultBlock.style.display = "block";
        resultBlock.style.backgroundColor  = "#6ea9cc";
        return 0;
      } 
      if (month == "jul" || month == "aug") {
        result.innerText = "Winter";
        resultBlock.style.display = "block";
        resultBlock.style.backgroundColor  = "#6ea9cc";
        return 0;
      }
      if (month == "sep" && day <= "20") {
        result.innerText = "Winter";
        resultBlock.style.display = "block";
        resultBlock.style.backgroundColor  = "#6ea9cc";
        return 0;
      } 
      if (month == "sep" && day >= "21") {
        result.innerText = "Spring";
        resultBlock.style.display = "block";
        resultBlock.style.backgroundColor  = "#ec81ac";
        return 0;
      }
      if (month == "oct" || month == "nov") {
        result.innerText = "Spring";
        resultBlock.style.display = "block";
        resultBlock.style.backgroundColor  = "#ec81ac";
        return 0;
      }
      if (month == "dec" && day <= "20") {
        result.innerText = "Spring";
        resultBlock.style.display = "block";
        resultBlock.style.backgroundColor  = "#ec81ac";
        return 0;
      } 
      if (month == "dec" && day >= "21") {
        result.innerText = "Summer";
        resultBlock.style.display = "block";
        resultBlock.style.backgroundColor  = "#ec9334";
        return 0;
      } 
    }
    if (hemisphere == "nor") {
        document.querySelector(".alert").style.display = "none";

        if (month == "jan" || month == "feb") {
          result.innerText = "Winter";
          resultBlock.style.display = "block";
          resultBlock.style.backgroundColor  = "#6ea9cc";
          return 0;
        }
        if (month == "mar" && day <= "20") {
          result.innerText = "Winter";
          resultBlock.style.display = "block";
          resultBlock.style.backgroundColor  = "#6ea9cc";
          return 0;
        } 
        if (month == "mar" && day >= "21") {
          result.innerText = "Spring";
          resultBlock.style.display = "block";
          resultBlock.style.backgroundColor  = "#ec81ac";
          return 0;
        } 
        if (month == "apr" || month == "may") {
          result.innerText = "Spring";
          resultBlock.style.display = "block";
          resultBlock.style.backgroundColor  = "#ec81ac";
          return 0;
        }
        if (month == "jun" && day <= "20") {
          result.innerText = "Spring";
          resultBlock.style.display = "block";
          resultBlock.style.backgroundColor  = "#ec81ac";
          return 0;
        }
        
        if (month == "jun" && day >= "21") {
          result.innerText = "Summer";
          resultBlock.style.display = "block";
          resultBlock.style.backgroundColor  = "#ec9334";
          return 0;
        }
        
        if (month == "jul" || month == "aug") {
          result.innerText = "Summer";
          resultBlock.style.display = "block";
          resultBlock.style.backgroundColor  = "#ec9334";
          return 0;
        }
        if (month == "sep" && day <= "20") {
          result.innerText = "Summer";
          resultBlock.style.display = "block";
          resultBlock.style.backgroundColor  = "#ec9334";
          return 0;
        } 
        if (month == "sep" && day >= "21") {
          result.innerText = "Fall";
          resultBlock.style.display = "block";
          resultBlock.style.backgroundColor  = "#cca071";
          return 0;
        } 
        if (month == "oct" || month == "nov") {
          result.innerText = "Fall";
          resultBlock.style.display = "block";
          resultBlock.style.backgroundColor  = "#cca071";
          return 0;
        }
        if (month == "dec" && day <= "20") {
          result.innerText = "Fall";
          resultBlock.style.display = "block";
          resultBlock.style.backgroundColor  = "#cca071";
          return 0;
        } 
        if (month == "dec" && day >= "21") {
          result.innerText = "Winter";
          resultBlock.style.display = "block";
          resultBlock.style.backgroundColor  = "#6ea9cc";
          return 0;
        }
      }

  });
});
