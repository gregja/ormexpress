
// chargement du module personnalisé pour la connexion à MariaDB 
const DBMODULE = require('./library/DBConnex');

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

var sql1 = "SELECT count(*) as comptage FROM countries";
var params1 = [];  // en fait pas de paramètres

function loadData1 (cnx, sql, params) {
    return new Promise(function (resolve, reject) {
        cnx.execute(sql, params, function (err, rows, result) {
            //if (err) throw err;
            if (err) {
                reject(err);
            }    
            var nb_lig_total = 0;
            if (rows[0]) {
                nb_lig_total = rows[0].comptage ;   
            }

            resolve('nombre de lignes sur requete 1 :' + nb_lig_total);
        });

    });
}

loadData1(conn, sql1, params1).then(function (content) {
    console.info('requête SQL 1 traitée !');
    console.log(content);
}, function (err) {
    console.error('Erreur :', err);
    console.dir(err);
});



var sql2 = "SELECT codinter, codfra, countryname FROM countries WHERE codfra LIKE ?";
var params2 = [];
params2.push ('%F%');

function loadData2 (cnx, sql, params) {
    return new Promise(function (resolve, reject) {
        // attention à l'ordre des paramètres par rapport aux ? de la requête
        cnx.execute(sql, params, function (err, rows, result) {
            //if (err) throw err;
            if (err) {
                reject(err);
            }    
            // Génération d'un échantillon de tableau HTML (balises "tr" et "td")
            var tmp_liste = '<tr>\n';
            for (var i in rows) {
              tmp_liste += `<td>${rows[i].codinter}</td>
                <td>${rows[i].codfra}</td>
                <td>${rows[i].countryname}</td>\n`;
            }
            tmp_liste += '</tr>\n';
            resolve(tmp_liste);

        });
    });
}

loadData2(conn, sql2, params2).then(function (content) {
    console.info('requête SQL 2 traitée !');
    console.log(content);
}, function (err) {
    console.error('Erreur :', err);
    console.dir(err);
});