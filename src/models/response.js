function Response(statusCode, body) {
    this.statusCode = statusCode;
    this.body = body;
}

// adding functions
// Response.prototype = {
//     getResponse: function() {
//         return this.response;
//     },
//     getBody: function() {
//         return this.body;
//     }
// };

module.exports = new Response();