

const getCab = (req, res) => {
    const { cab_id, patch_id } = req.body;

    console.log(req.body);

    res.json({
        cab_id,
        patch_id
    })
}




module.exports = { getCab };