const Books = require('../models/Books');

/**
 * retrieve a record
 * @param {*} req
 * @param {*} res
 */
const get = async (req, res) => {
    console.log('************* get ********************');
    console.log('req.body      : ', req.body);
    console.log('req.params    : ', req.params);
    // console.log('req.params.id : ', req.params.id);
    console.log('req.query     : ', req.query);
    res.status(404).send({ message: 'get' });
    // try {
    //     const data = await Books.findOne({
    //         _id: req.params.id,
    //     });
    //     res.status(200).json({ data });
    // } catch (e) {
    //     res.status(500).send({ message: e.message });
    // }
};

/**
 * retrieve all records
 * @param {*} req
 * @param {*} res
 */
const getAll = async (req, res) => {
    console.log('************* get all ********************');
    console.log('req.body      : ', req.body);
    console.log('req.params    : ', req.params);
    // console.log('req.params.id : ', req.params.id);
    console.log('req.query     : ', req.query);
    // res.status(404).send({ message: 'getall' });
    try {
        await Books.find()
            .then((data) => res.status(200).json({ data }))
            .catch((error) => res.status(500).json({ message: error }));
    } catch (e) {
        console.log('e: ', JSON.stringify(e));
        res.status(500).send({ message: e.message });
    }
};

/**
 * add a record
 * @param {*} req
 * @param {*} res
 */
const add = async (req, res) => {
    console.log('************* add ********************');
    console.log('req.body      : ', req.body);
    console.log('req.params    : ', req.params);
    // console.log('req.params.id : ', req.params.id);
    console.log('req.query     : ', req.query);
    res.status(404).send({ message: 'add' });
    // const entries = Object.keys(req.body);
    // const updates = {};
    // for (let i = 0; i < entries.length; i++) {
    //     updates[entries[i]] = Object.values(req.body)[i];
    //     // console.log(updates[entries[i]]);
    // }

    // try {
    //     const data = await Books.findOne({ _id: req.body.id });
    //     if (data) {
    //         res.status(404).send({ error: 'Ya exist: ' + req.body.id });
    //     } else {
    //         const entries = Object.keys(req.body);
    //         const updates = {};
    //         for (let i = 0; i < entries.length; i++) {
    //             updates[entries[i]] = Object.values(req.body)[i];
    //         }
    //         var registro = new Books(updates);
    //         await registro
    //             .save()
    //             .then((data) => res.status(200).json({ data }))
    //             .catch((error) => res.status(500).json({ message: error }));
    //     }
    // } catch (e) {
    //     res.status(500).send({ message: e.message });
    // }
};

/**
 *
 * update a record
 * @param {*} req
 * @param {*} res
 */
const update = async (req, res) => {
    console.log('************* update ********************');
    console.log('req.body      : ', req.body);
    console.log('req.params    : ', req.params);
    // console.log('req.params.id : ', req.params.id);
    console.log('req.query     : ', req.query);
    res.status(404).send({ message: 'update' });
    // try {
    //     const entries = Object.keys(req.body);
    //     const updates = {};
    //     for (let i = 0; i < entries.length; i++) {
    //         updates[entries[i]] = Object.values(req.body)[i];
    //     }

    //     const data = await Books.findOne({ _id: req.params.id });
    //     if (data) {
    //         await Books.updateOne({ _id: req.body.id }, { $set: updates })
    //             .then((data) => res.status(200).json({ data }))
    //             .catch((error) => res.status(500).json({ message: error }));
    //     } else {
    //         res.status(404).send({ error: 'not found: ' + req.params.id });
    //     }
    // } catch {
    //     res.status(404).send({ error: 'not found: ' + req.params.id });
    // }
};

/**
 * delete a record
 * @param {*} req
 * @param {*} res
 */
const del = async (req, res) => {
    console.log('************* .delete ********************');
    console.log('req.body      : ', req.body);
    console.log('req.params    : ', req.params);
    // console.log('req.params.id : ', req.params.id);
    console.log('req.body.id : ', req.body.id);
    console.log('req.query     : ', req.query);
    // res.status(404).send({ message: 'del' });
    try {
        const data = await Books.findOne({ _id: req.body.id });
        if (data) {
            await Books.deleteOne({ _id: req.body.id })
                .then((data) => res.status(200).json({ data }))
                .catch((error) => res.status(500).json({ message: error }));
        } else {
            res.status(404).send({
                rt: 96,
                error: 'not found: ' + req.body.id,
            });
        }
    } catch {
        res.status(404).send({
            rt: 96,
            error: 'not found: ' + req.params.id,
        });
    }
};

module.exports = {
    get,
    getAll,
    add,
    update,
    del,
};
