const router = require("express").Router();
const pinsController = require("../../controllers/pinsController");

// Matches with "/api/pins"
router.route("/")
  .get(pinsController.findAll)
  .post(pinsController.create);

// Matches with "/api/pins/category"
router
  .route("/category")
    .put(pinsController.update)
    .delete(pinsController.remove);

router
  .route("/category/:category")
    .get(pinsController.findByCat);

module.exports = router;