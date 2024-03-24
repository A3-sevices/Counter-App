const CounterValue = document.getElementById("Counter-value");
const IncrementBtn = document.getElementById("increment-btn");
const DecrementBtn = document.getElementById("decrement-btn");
const ResetBtn = document.getElementById("reset-btn");

let count = 0;

IncrementBtn.addEventListener("click", () => {
    count++;
    CounterValue.innerText = count;
})

DecrementBtn.addEventListener("click", () => {
    count--;
    CounterValue.innerText = count;
})

ResetBtn.addEventListener("click", () => {
    count = 0;
    CounterValue.innerText = count;
})