
// chargement du package personnalisé pour la connexion à MariaDB 
const DBMODULE = require('./library/DBConnex');

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

// chargement du package personnalisé pour la connexion à MariaDB 
const DBWRAPPER = require('./library/DBWrapper');

var sql1 = "SELECT count(*) as comptage FROM countries";
var params1 = [];

DBWRAPPER.selectOne(conn, sql1, params1).then((content) => {
    console.info('requête SQL 1 traitée !');
    console.log(content);
}, (err) => {
    console.error('Erreur SQL 1 :', err.errcode, ' ', err.errmsg);
});

var sql2 = "SELECT codinter, codfra, countryname FROM countries WHERE codfra LIKE ?";
var params2 = [];
params2.push ('%F%');

DBWRAPPER.selectBlock(conn, sql2, params2).then( (content) => {
    console.info('requête SQL 2 traitée !');
    console.log(content);
}, (err) => {
    console.error('Erreur SQL 2 :', err.errcode, ' ', err.errmsg);
});

/*
 * mais non je ne suis pas chauvin, c'est juste pour des tests :)
 */
var sql3 = "UPDATE countries SET countryname = 'France !!!' WHERE codfra = ?";
var params3 = [];
params3.push ('FR');

DBWRAPPER.execute(conn, sql3, params3).then( (content) => {
    console.info('requête SQL 3 traitée !');
    console.log(content);
}, (err) => {
    console.error('Erreur SQL 3 :',  err.errcode, ' ', err.errmsg);
});

var sql4 = "UPDATE countries SET countryname = 'France !!!' WHERE codfra = ?";
var params4 = [];
params4.push ('XX');

DBWRAPPER.execute(conn, sql4, params4).then( (content) => {
    console.info('requête SQL 4 traitée !');
    console.log(content);
}, (err) => {
    console.error('Erreur SQL 4 :',  err.errcode, ' ', err.errmsg);
});



