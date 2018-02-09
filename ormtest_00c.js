
// chargement du package personnalisé pour la connexion à MariaDB 
const DBMODULE = require('./library/DBConnex');

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

// requête SQL avec recherche sur le titre
var my_sql = "SELECT id, titre, auteur, editeur FROM bdseries WHERE titre LIKE ?";

// Liste des albums contenant "U" dans le titre
var my_params = ['%U%'];

var data = [];

conn.execute(my_sql, my_params, (err, rows, result) => {
    if (err) {
        console.error('Erreur :', err.code, ' ', err.message);
    } else {    
        data = rows ;
        console.log('mouchard 1 ', data);  // => yes !!! on a des données :)
    }
});

console.log('mouchard 2 ', data);   // => vide !!! but why ? :(

