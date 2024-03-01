const text = document.querySelector('#banner--text');
text.innerHTML = text.innerText.split("").map(
    (char, i)=>
        `<span style="transform:rotate(${i*3.35}deg)">${char}</span>`
).join("");