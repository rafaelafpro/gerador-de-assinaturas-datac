document.addEventListener("DOMContentLoaded", () => {
    if (screen.width < 1100) {
        var alerta = document.querySelector("#alerta");
        alerta.innerText += ` Sua tela ${screen.width}px.`;
        alerta.style.opacity = 1;
    }

    var tela = document.getElementById("tela");
    var botao = document.getElementById("btn");

    var ima = document.getElementById("image-in");
    ima.style.opacity = "0";

    var nome = document.querySelector("#nome-in");
    var sobrenome = document.querySelector("#sobre-in");
    var cargo = document.querySelector("#cargo-in");

    var nomeInput = document.getElementById("nome");
    var sobreInput = document.getElementById("sobrenome");
    var cargoInput = document.getElementById("cargo");
    var imagemInput = document.getElementById("imagem");

    nomeInput.addEventListener("keyup", () => {
        var texto = nomeInput.value;
        nome.innerText = texto;
    });

    sobreInput.addEventListener("keyup", () => {
        var texto = sobreInput.value;
        sobrenome.innerText = texto;
    });

    cargoInput.addEventListener("keyup", () => {
        var texto = cargoInput.value;
        cargo.innerText = texto;
    });

    imagemInput.addEventListener("change", (event) => {
        ima.src = URL.createObjectURL(event.target.files[0]);
        ima.style.opacity = 1;
    });

    function capture() {
        html2canvas(tela, { backgroundColor: null, objectFit: "cover" })
            .then((canvas) => {
                // canvas.style.display = 'none'
                document.body.appendChild(canvas);
                return canvas;
            })
            .then((canvas) => {
                const image = canvas
                    .toDataURL("image/png")
                    .replace("image/png", "image/octet-stream");
                const a = document.createElement("a");
                a.setAttribute(
                    "download",
                    `Assinatura ${nome.textContent}.png`
                );
                a.setAttribute("href", image);
                a.click();
                canvas.remove();
            });
    }

    btn.addEventListener("click", capture);
});
