const Api = require("../model/api");
const Order = require("../model/order");

exports.subscribe = async(req, res) => {
    try{
        const { apiId } = req.params;
        
        if(!apiId){
            return res.status(400).json({
                success: false,
                error: "API ID not found."
            });
        }

        const order = await Order.create(req.body);
        Api.findOneAndUpdate({ _id: apiId }, { $set: { isActive: false } });
        
        return res.status(201).json({
            success: true,
            order: order
        });
    }catch(error){
        return res.status(400).json({
            success: false,
            error: "API ID not found."
        });
    }
}