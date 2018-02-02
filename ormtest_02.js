
// chargement du package personnalisé pour la connexion à MariaDB 
//const DBMODULE = require('./library/DBConnex');
const DBMODULE = require('./draft/DBConnex_1');

// *** TEST DE LECTURE ***

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

// chargement du package personnalisé pour la connexion à MariaDB 
const BDSERIES = require('./library/BDSeries');

var serie1 = new BDSERIES(conn);

serie1.loadRec(1);

// avec un délai de 100ms, la Promise va avoir le temps de faire son travail

setTimeout((seriex)=>{
    console.log('mouchard n°2');
    console.log(seriex.getLastId());
    console.log(seriex.getDatas());
    console.log(seriex.getColumn('titre'));
}, 1000, serie1);

// a toutes les chances de ne rien renvoyer :

console.log('mouchard n°1 (déclenché trop tôt)');
console.log(serie1.getDatas());

