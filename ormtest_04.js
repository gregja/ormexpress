// *** TEST DE SUPPRESSION ***

// chargement du package personnalisé pour la connexion à MariaDB 
const DBMODULE = require('./library/DBConnex');
//const DBMODULE = require('./draft/DBConnex_1');

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

// chargement du package personnalisé pour la connexion à MariaDB 
const BDSERIES = require('./library/BDSeries');


var serie3 = new BDSERIES(conn);
serie3.loadRec(22);
setTimeout((seriex)=>{  
    console.log('suppression id 22');
    seriex.deleteRec();
}, 1000, serie3);


var serie4 = new BDSERIES(conn);
console.log('suppression des id 23 à 25');
serie4.deleteRec(23);
serie4.deleteRec(24);
serie4.deleteRec(25);


