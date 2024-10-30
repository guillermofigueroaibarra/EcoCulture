// functions to add donation
const addDonation = async (req, res) => {
  try {
    // variable for item info
    const { name, description, price, category, date } = req.body;

    // variable for images
    const image1 = req.files.image1[0];
    const image2 = req.files.image2[0];
    const image3 = req.files.image3[0];
    const image4 = req.files.image4[0];

    console.log(name, description, price, category, date);
    console.log(image1, image2, image3, image4);
    res.json({});
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const listDonation = async (req, res) => {};

const removeDonation = async (req, res) => {};

const donationInfo = async (req, res) => {};

export { addDonation, listDonation, removeDonation, donationInfo };
