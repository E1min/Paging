let tbody = document.querySelector("tbody")
let btns = document.querySelectorAll(".pages button")
let inputelem = document.querySelector(".input input")

fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
    return response.json()
}).then(data => {
    data.forEach((item, index) => {
        if (index >= 0 && index < 10) {
            tbody.innerHTML += `<tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            </tr>`
        }
    });

    inputelem.addEventListener("keyup", () => {
        data.forEach(item => {
            if (item.title.toLowerCase().includes(inputelem.value.toLowerCase())) {
                tbody.innerHTML = `<tr>
                <td>${item.id}</td>
                <td>${item.title}</td>
                </tr>`
            }
        })
    })

    btns.forEach(btna => {
        btna.addEventListener("click", () => {
            tbody.innerHTML = ""
            btns.forEach(btn => {
                btn.classList.remove("active")
            })
            btna.classList.add("active")
            let startindex = (btna.innerText * 10) - 10;
            let endindex = (btna.innerText * 10);
            data.forEach((item, index) => {
                if (index >= startindex && index < endindex) {
                    tbody.innerHTML += `<tr>
                <td>${item.id}</td>
                <td>${item.title}</td>
                </tr>`

                }
            });
        })
    })
})
