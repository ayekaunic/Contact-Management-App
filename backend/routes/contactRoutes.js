const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).json({Message : "Get all contacts."});
});

router.route("/").post((req, res) => {
    res.status(200).json({Message : "Create contact."});
});

router.route("/:id").get((req, res) => {
    res.status(200).json({Message : `Get contact for ${req.params.id}`});
});

router.route("/:id").put((req, res) => {
    res.status(200).json({Message : `Updated contact for ${req.params.id}`});
});

router.route("/:id").delete((req, res) => {
    res.status(200).json({Message : `Deleted contact ${req.params.id}`});
});

module.exports = router;