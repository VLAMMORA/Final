
//Cuando se ejecute la pagina cargara lo que esta adentro de esta funcion 
window.onload = function() {
  
  CrearNav()
};

function CrearNav() {
//Capturar el ID 
let divNav = document.getElementById("divNav")
// Ingresar HTML al DIV 
let contenidoHTML

contenidoHTML = `

<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="Index.html">
       <img src="assets/Img/A-64.png" width="30" height="30" alt="">
        Web Heroes
      </a>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="Index.html">Inicio <span class="sr-only">(current)</span></a>
          </li>
       
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>


`


divNav.innerHTML += contenidoHTML

    
}


