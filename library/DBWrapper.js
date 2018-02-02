/**
 * Wrappers simplifiant l'exécution de requêtes SQL
 */

module.exports = {
    selectOne: function (conn, sql, params=[]) {
        return new Promise((resolve, reject) => {
            conn.execute(sql, params, (err, rows, result) => {
                if (err) {
                    reject({
                        'status': 'KO',
                        'errcode': err.code,
                        'errmsg': err.message
                    });
                } else {
                    if (rows[0]) {
                        resolve({
                            'status': 'ERROR',
                            'data': rows[0]
                        });
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
                        'errmsg': err.message
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
//            console.log(sql);
//            console.log(params);
            conn.execute(sql, params, (err, result) => {
                if (err) {
                    reject({
                        'status': 'ERROR',
                        'errcode': err.code,
                        'errmsg': err.message
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

