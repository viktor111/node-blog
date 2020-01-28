const listenHandler = (app, port) => {
    if (app.listen(port)){
        console.log(`Node server listen on ${port}`);
    }
};

module.exports = {
    listenHandler
};
