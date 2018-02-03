
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
// mais c'est une solution aléatoire, et peu satisfaisante

setTimeout((record)=>{
    console.log("appel loadRec() sans callback");
    console.log('mouchard n°2');
    console.log(record.getLastId());
    console.log(record.getDatas());
    console.log(record.getColumn('titre'));
}, 1000, serie1);


// solution plus satisfaisante, passer par une fonction de rappel (callback)  

var serie2 = new BDSERIES(conn);

serie2.loadRec(2, (record)=>{
    console.log("appel loadRec() avec callback");
    console.log('mouchard n°3');
    console.log(record.getLastId());
    console.log(record.getDatas());
    console.log(record.getColumn('titre'));
    
});


// sans setTimeout ni callback, le code ci-dessous 
// a toutes les chances de ne rien renvoyer :

console.log('mouchard n°1 (déclenché trop tôt)');
console.log(serie1.getDatas());

