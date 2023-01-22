const notFoundHandler = (req, res) => {
    res.status(404).json({message: "This route is not available"});
}
export default notFoundHandler;