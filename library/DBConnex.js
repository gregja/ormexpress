/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//const MYSQL = require('mysql2');

const MYSQL = require('mysql2');
 
module.exports = {
    init: function () {

        var conn = MYSQL.createConnection({
            host: "localhost",
            user: "root",
            password: require('../draft/DBPwd').getPwd(),
            database: "test2",
            charset: "UTF8_GENERAL_CI"
        });
 
        conn.connect((err) => {
            if (err) {
                console.error('ERREUR/CONNEXION DB: ' + err.stack);
                return;
            }
            console.log('Connected as id ' + conn.threadId);
        });

        return conn;
    }

};

