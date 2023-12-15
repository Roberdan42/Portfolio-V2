//botao alura

const mostrarMaisAlura = document.querySelector(".projetos__botao--mostrar-mais--slot-1");
let contadorAlura = 1;

mostrarMaisAlura.addEventListener("click", function() {
    const projetosAlura = document.querySelectorAll(".mostrar-mais--slot-1");

    if(contadorAlura == 1){
        projetosAlura.forEach(function(projeto) {
            projeto.classList.add("aparece");
        })
        contadorAlura = 2;
        mostrarMaisAlura.textContent = "Mostrar menos";
    } else if (contadorAlura == 2){
        projetosAlura.forEach(function(projeto) {
            projeto.classList.remove("aparece");
        })
        contadorAlura = 1;
        mostrarMaisAlura.textContent = "Mostrar mais";
    }
})

//botao proprios

const mostrarMaisProprios = document.querySelector(".projetos__botao--mostrar-mais--slot-2");
let contadorProprios = 1;

mostrarMaisProprios.addEventListener("click", function() {
    const projetosProprios = document.querySelectorAll(".mostrar-mais--slot-2");

    if(contadorProprios == 1){
        projetosProprios.forEach(function(projeto) {
            projeto.classList.add("aparece");
        })
        contadorProprios = 2;
        mostrarMaisProprios.textContent = "Mostrar menos";
    } else if(contadorProprios == 2){
        projetosProprios.forEach(function(projeto) {
            projeto.classList.remove("aparece");
        })
        contadorProprios = 1;
        mostrarMaisProprios.textContent = "Mostrar mais";
    }
})
