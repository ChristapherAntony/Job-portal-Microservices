
module.exports = {
    sample: async (req, res) => {

        try {
            //check for user authorized and role
            if (!req.currentUser || req.currentUser.role!=='candidate') {
                return res.status(404).json({ errors: [{ msg: 'not authorized' }] })
            }

            res.status(200).json("welcome candidate")
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }
    },


};
