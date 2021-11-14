const { countries } = require("../../constant/country");


exports.getAllCountries = async(req, res) => {
    try{    
        return res.status(200).json({
            success: true,
            countries: countries
        });
    }catch(error){
        return res.status(400).json({
            success: false,
            error: error
        });
    }
}

exports.getCountryByCountryCode = async(req, res) => {
    try{
        const { countryCode } = req.params;
        const country = countries.find(country => country?.code === countryCode);
        return res.status(200).json({
            success: true,
            country: country || null
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
        const { limit, page } = req.body;
        const totalLength = countries?.length;
        
        if(limit === 0){
            return res.status(400).json({
                success: false,
                error: "limit can't be 0"
            });
        }

        if(page === 0){
            return res.status(400).json({
                success: false,
                error: "page can't be 0"
            });
        }

        if(page != 1 && totalLength < limit * page){
            return res.status(200).json({
                success: true,
                countries: []
            });
        }

        const index = (limit * (page-1));
        let result = [];
        
        for(let i = index, count = 0; count < limit && i < countries.length; i++, count++){
            result.push(countries[i]);
        }
        
        return res.status(200).json({
            success: true,
            countries: result,
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
        const { limit, page } = req.query;
        const totalLength = countries?.length;

        if(!limit || !page){
            return res.status(400).json({
                success: false,
                error: "limit and page is required."
            })
        }

        if(limit == 0){
            return res.status(400).json({
                success: false,
                error: "limit can't be 0."
            });
        }

        if(page == 0){
            return res.status(400).json({
                success: false,
                error: "page can't be 0."
            });
        }

        if(page != 1 && totalLength < limit * page){
            return res.status(200).json({
                success: true,
                countries: []
            });
        }

        const index = (limit * (page-1));
        let result = [];
        for(let i = index, count = 0; count < limit && i < countries.length; i++, count++){
            result.push(countries[i]);
        }
        
        return res.status(200).json({
            success: true,
            countries: result,
        });

    }catch(error){
        console.log(error);
        return res.status(400).json({
            success: false,
            error: error
        });
    }
}