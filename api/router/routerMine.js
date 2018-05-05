module.exports = {'register':function(app,opt){
    app.get('/mine/test', function (req, res){
        res.send(req.query);
    });
}};