

const getCab = (req, res) => {
    // const { cab_id, patch_id } = req.body;

    console.log(req);

   res.send("hello getCab");
}

const registerPlace = (req, res) => {

    const {place} = req.body;

    console.log(place);

    res.json({place: place});

}




module.exports = { getCab, registerPlace };