import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile("views/index.html", {root: "./"});
});

router.get("/download/:groupName/:audioPath", (req, res) => {
    res.download(`./dotma-resources/sounds/${req.params.groupName}/${req.params.audioPath}`);
});

export default router;