let pseudo = "";
let articles = JSON.parse(localStorage.getItem("articles")) || [];

displayArticles();

function setPseudo(){
 pseudo = document.getElementById("pseudoInput").value.trim();

 if(pseudo !== ""){
   document.getElementById("addSection").classList.remove("hidden");
 }
}

function addArticle(){

 let nom = document.getElementById("nom").value;
 let prix = document.getElementById("prix").value;
 let desc = document.getElementById("desc").value;
 let file = document.getElementById("image").files[0];

 if(!nom || !prix || !file){
   alert("Remplissez tous les champs");
   return;
 }

 let reader = new FileReader();

 reader.onload = function(){

   let article = {
     pseudo,
     nom,
     prix,
     desc,
     image: reader.result
   };

   articles.push(article);
   localStorage.setItem("articles", JSON.stringify(articles));

   displayArticles();

   document.getElementById("nom").value="";
   document.getElementById("prix").value="";
   document.getElementById("desc").value="";
 };

 reader.readAsDataURL(file);
}

function displayArticles(){

 document.getElementById("articles").innerHTML="";

 articles.forEach(a=>{

 document.getElementById("articles").innerHTML += `
 <div class="card">
   <img src="${a.image}">
   <h3>${a.nom}</h3>
   <p>${a.desc}</p>
   <strong>${a.prix} FCFA</strong>
   <p>👤 ${a.pseudo}</p>
 </div>
 `;

 });
}
