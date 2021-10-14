const router = require("express").Router()
const itemController = require("../controllers/item")

router.get("/", itemController.getItems)
router.post("/create", itemController.createItem)
router.put("/update/:id", itemController.updateItem)
router.put("/increment-quality/:id", itemController.incrementItemQuality)
router.delete("/delete/:id", itemController.deleteItem)
router.delete("/delete/", itemController.deleteAllItems)

module.exports = router