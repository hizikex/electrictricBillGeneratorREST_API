//import the model to this controller file
const model = require('../models');
const powerModel = model.powerModel
//welcome message
const welcomeMessage = (req, res) =>{
    try {
        res.status(200).json({
            message: "Welcome to rest API"
        })
    } catch (e) {
        res.status(404).json({
            message: e.message
        })
    }
};

//read all record in the database
const readAll = async (req, res) => {
    try {
        const allRecords = await powerModel.findAll();
        if (allRecords.length === 0) {
            res.status({
                message: "No record in the database"
            })
        } else {
            res.status(200).json({
                message: "Reading All Records",
                data: allRecords
            })
        }
    } catch (e) {
        res.status(404).json({
            message:e.message
        })
    }
}

//create a record into the database
const createBill = async (req, res) => {
    const monthlyD = req.body.monthlyMetreCount * req.body.chargePerCount + req.body.VAT
    const bal = monthlyD - req.body.amountPaid
    try {
        // const monthlyMetreCount = req.body.monthlyMetreCount;
        // const chargePerCount = req.body.monthlyMetreCount;
        const something = {
            district: req.body.district,
            metreNo: req.body.metreNo,
            address: req.body.address,
            monthlyMetreCount: req.body.monthlyMetreCount,
            chargePerCount: req.body.chargePerCount,
            VAT: req.body.VAT,
            monthlyDue: monthlyD,
            amountPaid: req.body.amountPaid,
            balance: bal
    };
    //reject amount less than 75% of the monthly bill
    if (something.amountPaid < (0.75 * something.monthlyDue)) {
        res.status(400).json({
            message: "Amount paid too low"
        });
         console.log(something.amountPaid, 0.75 * something.monthlyDue );
    } else {
        const newBill = await powerModel.create(something);
        res.status(201).json({
            message: "New Bill Info: PAID SUCCESSFULLY",
            data: newBill
        })
        console.log(something.amountPaid, 0.75 * something.monthlyDue );
    }
    } catch (e) {
        res.status(400).json({
            message: e.message
        })
        console.log(e.message);
    }
};

//read a single record
const readOne = async (req, res)=> {
    const id = req.params.id;
    try {
        const singleOne = await powerModel.findAll({
            where: {
                id: id
            }
        });
        if (singleOne.length === 0 ) {
            res.status(400).json({
                message: "No record with this ID: " + id,
                
            })
        } else {
            res.status(201).json({
                message: "Record with ID " + id,
                data: singleOne
            })
        }
    } catch (e) {
        res.status(404).json({
            message: e.message
        })
    }
};

//delete a single record from the database
const deleteOne = async (req, res)=> {
    const id = req.params.id;
    try {
        const deletedOne = await powerModel.destroy({
            where: {
                id: id
            }
        });
        if (deletedOne === 0 ) {
            res.status(400).json({
                message: "No record with this ID: " + id,
                
            })
        } else {
            res.status(201).json({
                message: "Deleted record with ID " + id,
                data: deleteOne
            })
        }
    } catch (e) {
        res.status(404).json({
            message: e.message
        })
    }
};

//update a single record
const updateOne = async (req, res) => {
    const monthlyD = req.body.monthlyMetreCount * req.body.chargePerCount + req.body.VAT
    const bal = monthlyD - req.body.amountPaid;
    const id = req.params.id;
    try {
        // const monthlyMetreCount = req.body.monthlyMetreCount;
        // const chargePerCount = req.body.monthlyMetreCount;
        const data = {
            district: req.body.district,
            metreNo: req.body.metreNo,
            address: req.body.address,
            monthlyMetreCount: req.body.monthlyMetreCount,
            chargePerCount: req.body.chargePerCount,
            VAT: req.body.VAT,
            monthlyDue: monthlyD,
            amountPaid: req.body.amountPaid,
            balance: bal
    };
    //reject amount less than 75% of the monthly bill
    if (data.amountPaid < (0.75 * data.monthlyDue)) {
        res.status(400).json({
            message: "Amount paid too low"
        });
         console.log(data.amountPaid, 0.75 * data.monthlyDue );
    } else {
        const updatedOne = await powerModel.update(data, {
            where: {
                id: id
            }
        });
        res.status(201).json({
            message: "New Bill Info: UPDATED SUCCESSFULLY",
            data: updatedOne
        })
        console.log(data.amountPaid, 0.75 * data.monthlyDue );
    }
    } catch (e) {
        res.status(400).json({
            message: e.message
        })
        console.log(e.message);
    }
};

/* update a single record
const updateOne = async (req, res)=> {
    const id = req.params.id;
    const body = req.body;
    try {
        const updatedOne = await powerModel.update(body, {
            where: {
                id: id
            }
        });
        if (updatedOne[0] === 0 ) {
            res.status(400).json({
                message: "No record with this ID: " + id,
                
            })
        } else {
            res.status(201).json({
                message: "Updated record with ID " + id,
                data: updatedOne
            })
        }
    } catch (e) {
        res.status(404).json({
            message: e.message
        })
    }
}; */


module.exports = {
    welcomeMessage,
    createBill,
    readAll,
    readOne,
    deleteOne,
    updateOne

}