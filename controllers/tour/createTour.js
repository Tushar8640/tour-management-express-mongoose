const Tour = require("../../model/tourModel");

exports.createTour = async (req, res) => {
  try {

    const tour = await Tour.create(req.body);
    res.send({
      status: "success",
      message: "tour added success fully",
      data: tour,
    });
  } catch (error) {
    console.log(error.message);
    res.send({
        status: "failed",
        message: "tour can not added",
        error:error.message
      });
  }
};
