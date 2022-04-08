const express = require ("express")
const router = express.Router()
const {validatorCreateItem, validatorGetItem} = require ("../validators/tasks")
const customHeader = require("../middleware/customHeader")
const {getfolders, getfolder, createfolder, updatefolder, deletefolder} = require ("../controllers/folders")
const authMiddleware = require("../middleware/session")
const checkRole = require("../middleware/role")


router.get("/", authMiddleware, getfolders )

router.get("/:id", authMiddleware,validatorGetItem, getfolder)

router.put("/:id", authMiddleware , updatefolder )

router.delete("/:id", authMiddleware,validatorGetItem , deletefolder )

router.post("/",authMiddleware, checkRole(["user","admin"]) ,/*validatorCreateItem ,*/ createfolder )





module.exports = router