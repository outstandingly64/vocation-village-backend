const notFoundHandler = (req, res) => {
    res.status(404).send("This route is not available");
}
export default notFoundHandler;