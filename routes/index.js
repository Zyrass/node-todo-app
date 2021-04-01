const router = require("express").Router()
const indexController = require("../controllers")

router.get("/", indexController.getIndex)
router.post("/ajouter", indexController.postIndex)
router.delete("/supprimer/:id_task", indexController.deleteIndex)
router.put("/update/:id_task", indexController.putIndex)

module.exports = router