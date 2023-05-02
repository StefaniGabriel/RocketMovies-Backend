const { Router }  =  require("express");

const NotesControllers = require("../controllers/NotesControllers");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const notesRouter = Router();

const notesControllers = new NotesControllers();

notesRouter.use(ensureAuthenticated);

notesRouter.get("/", notesControllers.index);
notesRouter.post("/", notesControllers.create);
notesRouter.get("/:id", notesControllers.show);
notesRouter.delete("/:id", notesControllers.delete);





module.exports = notesRouter;