const router = require("express").Router();
const { getUser, saveUser, users } = require("../controllers/users.controller");

router.get("/users", users);
router.get("/users/:id", getUser);
router.post("/user", saveUser);

module.exports = router;
