
var cron = require('node-cron');
const Api = require('../model/api');
const scheduledJobForClearingHits = async () => {
    console.log('----Hitting----', new Date());
    try {
        const apiList = await Api.updateMany({ isActive: true, plan: { $ne: "MEGA" } }, { $set: { currentHits: 0 } });
        console.log(apiList);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error
        });
    }
}
cron.schedule('*/2 * * * *', scheduledJobForClearingHits);