const controller = {};

controller.list = (req, res) => {
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

};

module.exports = controller;