
export const register = async (req, res) => {
    console.log(req.body);
    res.send(req.body);
}