/**
 * Wrappers simplifiant l'exécution de requêtes SQL
 */

module.exports = {
    selectOne: function (conn, sql, params=[]) {
        return new Promise((resolve, reject) => {
            conn.execute(sql, params, (err, rows, result) => {
                if (err) {
                    reject({
                        'status': 'ERROR',
                        'errcode': err.code,
                        'errmsg': err.sqlMessage
                    });
                } else {
                    var nbrows = rows.length;
                    if (nbrows > 0) {
                        resolve({
                            'status': 'OK',
                            'data': rows[0]
                        });
                        // on renvoie la 1ère ligne mais WARNING si SQL a 
                        //  renvoyé plus d'une ligne
                        if (nbrows > 1) {
                            console.log(`WARNING : selectOne avec ${rows} lignes`);
                        }
                    } else {
                        resolve({
                            'status': 'OK',
                            'data': {}
                        });
                    }
                }
            });          
        });    
    },
    
    selectBlock: function(conn, sql, params=[]) {
        return new Promise((resolve, reject) => {
            conn.execute(sql, params, (err, rows, result) => {
                if (err) {
                    reject({
                        'status': 'ERROR',
                        'errcode': err.code,
                        'errmsg': err.sqlMessage
                    });
                } else {
                    resolve({
                        'status': 'OK',
                        'data': rows
                    });
                }
            });
        });        
    },

    execute: function(conn, sql, params=[]) {
        return new Promise((resolve, reject) => {
            conn.execute(sql, params, (err, result) => {
                if (err) {
                    reject({
                        'status': 'ERROR',
                        'errcode': err.code,
                        'errmsg': err.sqlMessage
                    });
                } else {
                    resolve({
                        'status': 'OK',
                        'affectedRows': result.affectedRows,
                        'insertId': result.insertId,
                        'warningCount': result.warningCount,
                        'message': result.message,
                        'changedRows': result.changedRows
                    });
                }
            });
        });
    }
};

