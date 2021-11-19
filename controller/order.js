const Api = require("../model/api");
const Order = require("../model/order");

exports.createOrder = async(req, res) => {
    try{
        const { apiId } = req.params;
        const { plan } = req.query;

        if(!apiId){
            return res.status(400).json({
                success: false,
                error: "API ID not found."
            });
        }

        if(!plan){
            return res.status(400).json({
                success: false,
                error: "Plan missing in queries."
            });
        }

        const order = await Order.create(req.body);
        Api.findOneAndUpdate({ _id: apiId }, { $set: { isActive: false, plan: plan } });
        
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