const controller = {};

controller.users = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usurarios', (err, users) => {
            if (err) {
                res.json(err);
            }
            console.log(users);
            res.json(users);
        });
    });
};

controller.add = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usurarios SET ?', [data], (err, users) => {
            console.log(users);
            res.send('works');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usurarios WHERE id = ?', [id], (err, users) => {
            console.log(users);
            res.send('works');
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usurarios WHERE id = ?', [id], (err, user) => {
            res.json(user);
        });
    });
};

controller.saveEdit = (req, res) => {
    const { id } = req.params
    const newData = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE usurarios SET ? WHERE id = ?', [newData, id], (err, user) => {
            res.json(user);
        });
    });
};

module.exports = controller;