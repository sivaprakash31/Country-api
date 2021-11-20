const { countries } = require("../../constant/country");
const { getMaxHits } = require("../../helpers");
const Api = require("../../model/api");

exports.getAllCountries = async(req, res) => {
    try{    
        const { api } = req;
        if(api){
            if(api.plan === "MEGA" || api.currentHits < getMaxHits(api.plan)){
                if(api.plan !== "MEGA"){
                    await Api.findOneAndUpdate({ _id: api._id }, {$inc : { "currentHits" : 1 }});
                }
                return res.status(200).json({
                    success: true,
                    countries: countries
                });
            }else{
                return res.status(429).json({
                    success: false,
                    error: `API KEY Expired.`
                });
                
            }
        }

        return res.status(400).json({
            success: false,
            error: "API KEY Not found."
        });
        
    }catch(error){
        console.log(error,'-')
        return res.status(400).json({
            success: false,
            error: JSON.stringify(error) || 'E'
        });
    }
}

exports.getCountryByCountryCode = async(req, res) => {
    try{
        const { countryCode } = req.params;
        const { api } = req;
        if(api){
            if(api.plan === "MEGA" || api.currentHits < getMaxHits(api.plan)){
                if(ap1.plan !== "MEGA"){
                    Api.findOneAndUpdate({ _id: api._id }, {$inc : { "currentHits" : 1 }});
                }
                const country = await countries.find(country => country?.code === countryCode);
                return res.status(200).json({
                    success: true,
                    country: country || null
                });
            }
        }

        return res.status(400).json({
            success: false,
            error: "API KEY Not found."
        });
        
    }catch(error){
        return res.status(400).json({
            success: false,
            error: error
        });
    }
}

exports.getCountries = async(req, res) => {
    try{

        const { api } = req;
        if(api){
            const { limit, page } = req.body;
            const totalLength = countries?.length;

            if (limit === 0) {
                return res.status(400).json({
                    success: false,
                    error: "limit can't be 0"
                });
            }

            if (page === 0) {
                return res.status(400).json({
                    success: false,
                    error: "page can't be 0"
                });
            }

            if (page != 1 && totalLength < limit * page) {
                return res.status(200).json({
                    success: true,
                    countries: []
                });
            }

            const index = (limit * (page - 1));
            let result = [];
            if(api.plan === "MEGA" || api.currentHits < getMaxHits(api.plan)){
                if(ap1.plan !== "MEGA"){
                    Api.findOneAndUpdate({ _id: api._id }, {$inc : { "currentHits" : 1 }});
                }
                const country = await countries.find(country => country?.code === countryCode);
                return res.status(200).json({
                    success: true,
                    country: country || null
                });
            }
        }
        
        return res.status(400).json({
            success: false,
            error: "API KEY Not found."
        });

    }catch(error){
        console.log(error);
        return res.status(400).json({
            success: false,
            error: error
        });
    }
}

exports.getCountriesPagination = async(req, res) => {
    try{
        
        const { api } = req;
        if(api){
            const { limit, page } = req.query;
            const totalLength = countries?.length;
            if (!limit || !page) {
                return res.status(400).json({
                    success: false,
                    error: "limit and page is required."
                })
            }

            if (limit == 0) {
                return res.status(400).json({
                    success: false,
                    error: "limit can't be 0."
                });
            }

            if (page == 0) {
                return res.status(400).json({
                    success: false,
                    error: "page can't be 0."
                });
            }

            if (page != 1 && totalLength < limit * page) {
                return res.status(200).json({
                    success: true,
                    countries: []
                });
            }

            const index = (limit * (page - 1));
            let result = [];
            if(api.plan === "MEGA" || api.currentHits < getMaxHits(api.plan)){
                if(ap1.plan !== "MEGA"){
                    Api.findOneAndUpdate({ _id: api._id }, {$inc : { "currentHits" : 1 }});
                }
                for(let i = index, count = 0; count < limit && i < countries.length; i++, count++){
                    result.push(countries[i]);
                }
                
                return res.status(200).json({
                    success: true,
                    countries: result,
                });
            }
        }
        return res.status(400).json({
            success: false,
            error: "API KEY Not found."
        });

    }catch(error){
        console.log(error);
        return res.status(400).json({
            success: false,
            error: error
        });
    }
}