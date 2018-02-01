// chargement du package personnalisé pour la connexion à MariaDB 
const DBMODULE = require('./library/DBConnex');

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

const EXPRESS = require('express');
var app = EXPRESS();

var template = require('./library/template_html.js') ;

app.get('/', function (req, res, next) {
    res.end('hello world');
    console.log('arret / route 1');
});

/**
 * Pas d'accès BD (route de test)
 */
app.get("/bdseries/v0/:id", function (req, res, next) {
    var id = parseInt(req.params.id);
    res.end(`Identifiant BD : ${id}`);
    console.log('arret / route 2');
});

/**
 * Accès BD "manuel", sans ORM et avec beaucoup de code
 */
app.get("/bdseries/v1/:id", function (req, res, next) {
    var id = parseInt(req.params.id);
    
    function loadData1 (cnx, sql, params) {
        return new Promise(function (resolve, reject) {
            cnx.execute(sql, params, function (err, rows, result) {
                //if (err) throw err;
                if (err) {
                    console.log("ERREUR SUR REQUETE : " + err.code + 
                            " (" + err.message + ")");
                    reject(err);
                }  
                var response = {};
                if (rows[0]) {
                    response = rows[0] ;   
                }

                resolve(response);
            });

        });
    }
    var sql1 = 'SELECT * FROM bdseries WHERE id = ?';
    var params1 = [id];
    loadData1(conn, sql1, params1).then(function (content) {
        
        res.end(template('Séries BD', `Titre série BD : ${content.titre}`));
        console.log('arret / route 2');
        
    }, function (err) {
        console.error('Erreur :', err.code, ' ', err.message);
    });

});

/**
 * Accès BD avec Wrapper mais sans ORM
 */
app.get("/bdseries/v2/:id", function (req, res, next) {
    // chargement du wrapper "maison" pour exécution des requêtes SQL
    const DBWRAPPER = require('./library/DBWrapper');

    var id = parseInt(req.params.id);
    
    var sql1 = 'SELECT * FROM bdseries WHERE id = ?';
    var params1 = [id];
    
    DBWRAPPER.selectOne(conn, sql1, params1).then((content) => {
        res.end(template('Séries BD', `Titre série BD : ${content.data.titre}`));
        console.log('arret / route 3');

    }, (err) => {
        console.error('Erreur :', err.code, ' ', err.message);
    });
    
});

/**
 * Accès BD avec ORM
 */
app.get("/bdseries/v3/:id", function (req, res, next) {
    // chargement de la classe BDSeries 
    const BDSERIES = require('./library/BDSeries');

    var id = parseInt(req.params.id);

    // chargement de l'ID via ORM
    var serie = new BDSERIES(conn);
    serie.loadRec(id);
    
    // on est obligé de placer un setTimeOut sinon le res.end() 
    //  serait envoyé trop tôt, sans contenu
    setTimeout(()=>{
        var titre = serie.getColumn('titre');
        res.end(template('Séries BD', `Titre série BD : ${titre}`));
        console.log('arret / route 4');
    }, 100, serie);
    
});


app.listen(8080);


