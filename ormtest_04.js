// *** TEST DE SUPPRESSION ***

// chargement du package personnalisé pour la connexion à MariaDB 
const DBMODULE = require('./library/DBConnex');

// initialisation du connecteur à MariaDB
const conn = DBMODULE.init();

// chargement du package personnalisé pour la connexion à MariaDB 
const BDSERIES = require('./library/BDSeries');


var serie3 = new BDSERIES(conn);
serie3.loadRec(22);
setTimeout(()=>{  
    console.log('suppression id 22');
    serie3.deleteRec();
}, 1000, 'foo');


var serie4 = new BDSERIES(conn);
console.log('suppression des id 23 à 25');
serie4.deleteRec(23);
serie4.deleteRec(24);
serie4.deleteRec(25);


