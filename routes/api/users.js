const express = require("express");
const ctrl = require("../../controllers/users");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { signupSchema, loginSchema, verifyEmailSchema } = require('../../schemas/users');

const router = express.Router();

router.post("/signup", validateBody(signupSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validateBody(loginSchema), ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.current));

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch("/", authenticate, ctrlWrapper(ctrl.updateUserSubscription));

router.patch("/avatars", authenticate, upload.single('avatar'), ctrlWrapper(ctrl.updateAvatar));

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post("/verify", validateBody(verifyEmailSchema), ctrlWrapper(ctrl.resendVerifyEmail))

module.exports = router;