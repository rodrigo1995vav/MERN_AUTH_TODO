const express = require ("express")
const router = express.Router()
const {validatorCreateItem, validatorGetItem} = require ("../validators/tasks")
const customHeader = require("../middleware/customHeader")
const {getItems, getItem, createItem, updateItem, deleteItem} = require ("../controllers/tasks")
const authMiddleware = require("../middleware/session")
const checkRole = require("../middleware/role")


router.post("/", authMiddleware, getItems )

router.get("/:id", authMiddleware,validatorGetItem, getItem)

router.put("/:id", authMiddleware,validatorGetItem, updateItem )

router.delete("/:id", authMiddleware,validatorGetItem , deleteItem )

router.post("/new", authMiddleware, checkRole(["user","admin"]) ,validatorCreateItem , createItem )





module.exports = router