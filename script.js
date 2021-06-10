array = [];
Array.isArray(mov) ? mov.forEach(value => {
    Array.isArray(value.genres) ? value.genres.map(item => {
        t = true;
        for (let i = 0; i < array.length; i++) {
            if (array[i] == item) {
                t = false;
            }
        }
        if (t) {
            array.push(item)
        }
    }) : ""
}) : ""

array.forEach((value) => {

    nav_genr = `
        <li class="nav-item" onclick = card("${value}")>
           <a class="nav-link active" aria-current="page" href="#">${value}</a>
        </li>`

    document.querySelector("#nav_genres").innerHTML += nav_genr
})

const card = (mov_gen) => {

    str = " "
    if (mov_gen == "") {
        Array.isArray(mov) ? mov.forEach((value, index) => {
            genres = ""
            Array.isArray(value.genres) ? value.genres.forEach((item, key) => {
                genres += item + "  " + "/" + "  "
            }) : genres += value;

            rend = genres.substring(0, genres.length - 3)

            cards = `<div class="col-auto m-auto">
                            <div class="card">
                                <img src="${value.poster}" alt="png">
                                <div class="card-body">
                                    <h5 class="card-title">${value.title}</h5>
                                    <p class="card-genres">${rend}
                                        </p>
                                </div>
                                <div class="change">
                                    <button id="edit" type="button" onclick = open_modal(${index})>More Info</button>
                                </div>
                             </div>
                        </div>`
            str += cards
            $(".card-row").html(str)

        }) : " "
    }
    else {
        Array.isArray(mov) ? mov.forEach((value, index) => {

            value.genres.forEach((q) => {
                if (q == mov_gen) {
                    genre = ""
                    Array.isArray(value.genres) ? value.genres.forEach((item, key) => {
                        genre += item + "  " + "/" + "  "
                    }) : genre += value;

                    rend = genre.substring(0, genre.length - 3)

                    cards = `<div class="col-auto m-auto">
                                    <div class="card">
                                        <img src="${value.poster}" alt="png">
                                        <div class="card-body">
                                            <h5 class="card-title">${value.title}</h5>
                                            <p class="card-genres">${rend}
                                                </p>
                                        </div>
                                        <div class="change">
                                            <button id="edit" type="button" onclick = open_modal(${index})>More Info</button>
                                        </div>
                                     </div>
                                </div>`

                    str += cards
                    $(".card-row").html(str)
                }
            })
        }) : ""
    }

}


card("")


const open_modal = (id) => {

    $("#exampleModal").modal("show")

    $(".open_modal").html(`
    <div class="col-lg-6 col-md-6 col-sm-6">
        <img src=" ${mov[id].poster} " alt=" ">
    </div>
    <div class="col-lg-6 col-md-6 col-6 modal_text ">
        <h1>${mov[id].title}
        </h1>
        <p>${mov[id].overview}
        </p>
    </div>`)
}


document.querySelector(".search").addEventListener("keyup", () => {

    str = ""
    search = $(".search").val();
    search = search.toLowerCase()

    if (search == " ") {
        card(" ")
    }
    else {
        Array.isArray(mov) ? mov.forEach((value, index) => {

            mov_name = value.title.substr(0, search.length)
            mov_name = mov_name.toLowerCase()
            if (search == mov_name) {
                genres = ""
                Array.isArray(value.genres) ? value.genres.forEach((item, key) => {
                    genres += item + "  " + "/" + "  "
                }) : genres += value;

                rend = genres.substring(0, genres.length - 3)

                cards = `<div class="col-auto m-auto">
                                <div class="card">
                                    <img src="${value.poster}" alt="png">
                                    <div class="card-body">
                                        <h5 class="card-title">${value.title}</h5>
                                        <p class="card-genres">${rend}
                                            </p>
                                    </div>
                                    <div class="change">
                                        <button id="edit" type="button" onclick = open_modal(${index})>More Info</button>
                                    </div>
                                 </div>
                            </div>`
                str += cards
                $(".card-row").html(str)
            }
        }) : ""
    }
})
