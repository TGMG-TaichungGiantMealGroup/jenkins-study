var request = require("request");

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}


var url = 'https://www.google.com.tw';
var options = { 
        method: 'GET',
        url: url,
        headers: { 
        },  
        formData:   { 

        } 
    };


request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log("received:\n" + body + "\n");
});
