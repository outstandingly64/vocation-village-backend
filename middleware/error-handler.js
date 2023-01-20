const errorHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({msg: "An error occurred..."});
}

export default errorHandler;