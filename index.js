var request = require('request');

module.exports = function(key){

    return {
        recognize: function () {
            var args = arguments;
            var type = args[0],
                image = args[1],
                callback = args[2],
                payload,
                json,
                contentType;

            if(type === "image") {
                payload = image;
                json = false;
                contentType = "application/octet-stream";
            } else {
                if (type === "url") {
                    payload = {
                        url: image
                    };
                    json = true;
                    contentType = "application/json";
                }
            }

            request({
                url: "https://api.projectoxford.ai/emotion/v1.0/recognize",
                method: "POST",
                json: json,
                body: payload,
                headers: {
                    "content-type" : contentType,
                    "Ocp-Apim-Subscription-Key" : key
                }
            }, function (error, response, body){
                callback(response.body);
            });
        }
    }
};