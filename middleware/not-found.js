const routeNotFound = (req, res) => {
    res.status(404).send("This route is not available");
}
export default routeNotFound;