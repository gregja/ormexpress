
// chargement du package personnalisé pour la connexion à MariaDB 
const DBMODULE = require('./library/DBConnex');

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

// fonction qui va prendre en charge la requête SQL, exécutée par 
//  l'intermédiaire d'une Promise
function loadData (cnx, sql, params) {
    return new Promise((resolve, reject) => {
        cnx.execute(sql, params, (err, rows, result) => {
            if (err) {
                reject(err);
            } else {    
                resolve(rows);
            }
        });
    });
}

// requête SQL avec recherche sur le titre
var my_sql = "SELECT id, titre, auteur, editeur FROM bdseries WHERE titre LIKE ?";

// Liste des albums contenant "U" dans le titre
var my_params = ['%U%'];

// exécution de la requête SQL
loadData(conn, my_sql, my_params).then((content) => {
    console.info('requête SQL traitée !');
    console.log(content);
}, (err) => {
    console.error('Erreur :', err.code, ' ', err.message);
});
