const { Router }  =  require("express");

const multer = require("multer");

const uploadConfig = require("../configs/uploads");

const UsersControllers = require("../controllers/UsersControllers");

const UserAvatarControllers = require("../controllers/UserAvatarControllers");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRouter = Router();
const upload = multer(uploadConfig.MULTER);

const usersControllers = new UsersControllers();
const userAvatarControllers = new UserAvatarControllers();

usersRouter.post("/", usersControllers.create);
usersRouter.put("/", ensureAuthenticated, usersControllers.update);
usersRouter.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarControllers.update);



module.exports = usersRouter;