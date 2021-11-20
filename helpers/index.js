const { FREE, ULTRA, MEGA, PRO } = require('../constant/subscription');
exports.getMaxHits = (plan) => {
    if(plan === "FREE"){
        return FREE
    }else if(plan === "PRO"){
        return PRO;
    }else if(plan === "ULTRA"){
        return plan
    }else 
        return MEGA;
}