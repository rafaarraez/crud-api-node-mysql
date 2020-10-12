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

module.exports = controller;