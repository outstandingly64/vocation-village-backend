const errorHandler = (error, req, res, next) => {
    res.status(error.code || 500).json({message: error.message || "An unknown error occurred."});
}

export default errorHandler;