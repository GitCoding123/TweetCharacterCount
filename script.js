const input = document.querySelector("textarea");
const btn = document.querySelector(".btn");
const limit = document.querySelector(".limit");
const postNum = document.querySelector(".post-num");
let max = 50;

const updateLimit = () => {
    limit.textContent = max;
    input.addEventListener("input", () => {
        let inputLength = input.value.length;
        limit.textContent = max - inputLength;
        if(inputLength > max) {
            btn.disabled = true;
            limit.style.color = "red";
            postNum.innerHTML = "characters overdue";
        } else {
            btn.disabled = false;
            limit.style.color = "black";
            postNum.innerHTML = "characters remaining";
        }
    });
}

updateLimit();
