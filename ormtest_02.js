
// chargement du package personnalisé pour la connexion à MariaDB 
const DBMODULE = require('./library/DBConnex');

// *** TEST DE LECTURE ***

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

// chargement du package personnalisé pour la connexion à MariaDB 
const BDSERIES = require('./library/BDSeries');

var serie1 = new BDSERIES(conn);

serie1.loadRec(1);

// avec un délai de 100ms, la Promise va avoir le temps de faire son travail

setTimeout(()=>{
    console.log('mouchard n°2');
    console.log(serie1.getDatas());
}, 100, 'foo');

// a toutes les chances de ne rien renvoyer :

console.log('mouchard n°1 (déclenché trop tôt)');
console.log(serie1.getDatas());
