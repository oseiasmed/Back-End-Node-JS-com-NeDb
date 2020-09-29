module.exports = {
    send: (error, req, res, code = 400)=>{
        console.log(`error: ${error}`);
        res.statusCode(code).json({
          error: error,
        });
    }
}