const router = require("express").Router();
const pinsRoutes = require("./pins");

// Pins routes
router.use("/pins", pinsRoutes);

module.exports = router;