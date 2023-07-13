
const input = document.querySelector("[data-form-input]");
const btnAgregar = document.querySelector("[data-form-btn]");

btnAgregar.addEventListener("click", (e) => {

    e.preventDefault();

    const task = input.value;

    const contenedor = document.querySelector("[data-contenedor]");
    const list = document.createElement("ul");
    const li = document.createElement("li")
    const span = document.createElement("span")
    li.appendChild(checkComplete())
    span.innerText = task
    li.appendChild(span)
    li.appendChild(deleteIcon())
    //const contenido = `
    //<i class="fa-solid fa-trash-can deleteIcon"></i>`;
    //li.innerHTML = contenido;
    list.classList.add("cards");
    list.appendChild(li)
    contenedor.appendChild(list);
    console.log(li)
})

    const checkComplete = () => {
        const i = document.createElement("i");
        i.classList.add("fa-regular", "fa-square-check", "checkIcon");
        i.addEventListener("click", completeTask);
        return i
    }

    const deleteIcon = () => {
        const i = document.createElement("i");
        i.classList.add("fa-solid", "fa-trash-can", "deleteIcon");
        i.addEventListener("click", deleteTask)
        return i
    }


    //Cuando hago click en el elemento checkbox este cambia de estado a un color azul
    const completeTask = (e) => {
        const element = e.target;
        element.classList.toggle("fa-solid");
        element.classList.toggle("completeIcon");
        element.classList.toggle("fa");
    }

    
    const deleteTask = (e) =>{
        const parent = e.target.parentElement; //Aqui accedemos al elemento padre con el metedo event.target.parentElement
        parent.remove(); //Aqui con el metodo remove el elemento padre muere*/
    }


