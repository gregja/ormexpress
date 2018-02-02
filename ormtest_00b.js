
// chargement du package personnalisé pour la connexion à MariaDB 
const DBMODULE = require('./library/DBConnex');
//const DBMODULE = require('./draft/DBConnex_1');

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

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

var my_sql = "SELECT id, titre, auteur, editeur FROM bdseries WHERE titre LIKE ?";

// Liste des albums contenant "U" dans le titre
var my_params = ['%U%'];


loadData(conn, my_sql, my_params).then((content) => {
    console.info('requête SQL traitée !');
    console.log(content);
}, (err) => {
    console.error('Erreur :', err.code, ' ', err.message);
});
