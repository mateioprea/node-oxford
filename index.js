var request = require('request');

module.exports = function(key){

    return {
        recognize: function () {
            var args = arguments;
            var type = args[0],
                image = args[1];
            var payload = {
                url: image
            };
            request({
                url: "https://api.projectoxford.ai/emotion/v1.0/recognize",
                method: "POST",
                json: true,
                body: payload,
                headers: {
                    "content-type" : "application/json",
                    "Ocp-Apim-Subscription-Key" : key
                }
            }, function (error, response, body){
                return response.body;
            });
        }
    }
};