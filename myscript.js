
function checkUrl() {
        const isSecure = (url) => {
          if (url !== "") {
            let protocol = url.split(":")[0];
            if (protocol === "https") return 1;
            else if (protocol === "http") return 0;
            else -1;
          } else {
            return -1;
          }
        };
        const result = document.getElementById("result");
        const text = document.getElementById("url_input").value;
        if (isSecure(text) === 1) {
          result.innerText = "This link is safe to use";
        } else if (isSecure(text) === 0) {
          result.innerText = "This link is not safe to use";
        } else result.innerText = "Invalid input!";
      }