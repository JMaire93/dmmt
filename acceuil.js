const salons = [
    {
        image : "https://www.philosophy-concept-store17.fr/images/charte/03-001.jpg" ,
        ville : "La Rochelle"
    } ,

    {
        image : "https://www.coiffurekatica.fr/user/pages/16.zones-desservies/03.02-Montpellier/05.salon-de-coiffure-luxueux-a-montpellier/image_principale/salon-de-coiffure-luxueux-a-montpellier.jpg" ,
        ville : "Perpignan"
    } ,

    {
        image : "https://lh5.googleusercontent.com/proxy/GO42v-VkxSKZF4nZf6XLWYRnH8lQ8JS50OyCP7EW9Lh3vLJhRInPQhF3yGzGINRvaaJGK9YmHoTMm7I4dN0v568C69E" ,
        ville : "Narnia"
    } ,

    {
        image : "https://www.biocoiff.com/wp-content/uploads/2020/06/20200212_124532-scaled.jpg" ,
        ville : "Périgueux"
    } ,
];


let salon = document.getElementById("coiffure")

let n = 0

salon.innerHTML = `<img src="img/salon_2.jpg" class="position-absolute z-0 photo" alt="photographie du salon de La Rochelle" />
                                    <h2 class="z-1 pb-3 ville">La Rochelle</h2>`


const gauche = document.getElementById("gauche")

gauche.addEventListener("click",function() {
    if (n == 0) {
        n = salons.length - 1
    }
    else {
        n = n - 1
    }
    salon.innerHTML = `<img src="${salons[n].image}" class="position-absolute z-0 photo" alt="photographie du salon de La Rochelle" />
                                    <h2 class="z-1 pb-3 ville">${salons[n].ville}</h2>`
})

const droit = document.getElementById("droit")
    
droit.addEventListener("click",function() {
    if (n == salons.length - 1) {
        n = 0
    }
    else {
        n = n + 1
    }
    salon.innerHTML = `<img src=${salons[n].image} class="position-absolute z-0 photo" alt="photographie du salon de La Rochelle" />
                                    <h2 class="z-1 pb-3 ville">${salons[n].ville}</h2>`
})



const commentaires = [
    {
        nom : "Jean-Michel Lambda" , 
        note : "4" ,
        date : "2 semaines",
        content : "Un accueil chaleureux, le personnel est aux petits soins et on a la chance de pouvoir choisir qui s'occupera de notre coupe lors de la réservation. Petit bémol : les temps pour avoir un rendez vous sont parfois un cheveu longs (lol)."
    } ,

    {
        nom : "Anne Tatillon" , 
        note : "1" ,
        date : "3 ans",
        content : "Je n'ai pas aimé la façon dont ma coupe s'est déroulée de la réservation au redez-vous. La coiffeuse qui s'est occupée de moi n'avait pas de sujet de conversation intéressant et pour la coupe on repassera..."
    } ,

    {
        nom : "David Goodenough" , 
        note : "4" ,
        date : "7 mois",
        content : "Le salon est bien."
    } ,

    {
        nom : "Un romain" , 
        note : "3" ,
        date : "21 siècles",
        content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quia placeat blanditiis fuga aliquid fugiat, tempora nihil minima enim itaque tenetur ratione delectus assumenda quisquam adipisci, doloremque dolore sed quasi!"
    } ,
]

let comments = document.getElementById("comment")

let x = 0
let p = 1
let q = 2

function comment (x) {
    
    comments.innerHTML = `<div class=" comm text-center">
                <h3 class="titre_comm">${commentaires[x].nom}</h3>
                <h3 class="note">${commentaires[x].note}/5</h3>
                <p class="date">Il y a ${commentaires[x].date}</p>
                <p class="contenu">${commentaires[x].content}</p>
              </div>

              <div class=" comm text-center">
                <h3 class="titre_comm">${commentaires[p].nom}</h3>
                <h3 class="note">${commentaires[p].note}/5</h3>
                <p class="date">Il y a ${commentaires[p].date}</p>
                <p class="contenu">${commentaires[p].content}</p>
              </div>

              <div class=" comm text-center">
                <h3 class="titre_comm">${commentaires[q].nom}</h3>
                <h3 class="note">${commentaires[q].note}/5</h3>
                <p class="date">Il y a ${commentaires[q].date}</p>
                <p class="contenu">${commentaires[q].content}</p>
              </div>`}

comment(0)

const gaucheComm = document.getElementById("gauche_comm")

gaucheComm.addEventListener("click",function() {
    p , q
    if (x == 0) {
        x = commentaires.length - 1
        p = 0
        q = 1
    }
    else if (x == commentaires.length -1){
        x--
        p = x + 1
        q = 0
    }
    else{
        x--
        p = x + 1
        q = x + 2
    }
        
   
    comment(x)
})

const droiteComm= document.getElementById("droite_comm")

droiteComm.addEventListener("click",function() {
    p , q
    if (x == commentaires.length - 1) {
        x = 0
        p = x + 1
        q = x + 2
    }
    else if (x == commentaires.length -2){
        x++
        p = 0
        q = 1
    }
    else if (x == commentaires.length - 3){
        x++
        p = x + 1
        q = 0
    }
    else {
        x++
        p = x + 1
        q = x + 2
    }
    comment(x)
})