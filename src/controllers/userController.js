const controller = {};

controller.users = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usurarios', (err, users) => {
            if (err) {
                res.json(err);
            }
            res.json(users);
        });
    });
};

controller.add = (req, res) => {
    const data = req.body;
    console.log(data);

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usurarios SET ? ', [data], (err, users) => {
            res.redirect('/api/users');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usurarios WHERE id = ? ', [id], (err, users) => {
            res.redirect('/api/users');
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usurarios WHERE id = ? ', [id], (err, user) => {
            res.json(user[0]);

        });
    });
};

controller.saveEdit = (req, res) => {
    const { id } = req.params
    const newData = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE usurarios SET ? WHERE id = ? ', [newData, id], (err, user) => {
            console.log(newData);
            if (err) {
                console.log(err);
            }
            res.redirect('/api/users');
        });
    });
};

module.exports = controller;