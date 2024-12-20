const express = require("express");
const app = express();
require('dotenv').config()
// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
const cors = require("cors");
const checkout = require("./auth/checkout")
app.use(cors());


const LoginRouter = require("./auth/login");
const SignUpRouter = require("./auth/signup");
const profileRouter = require("./auth/Profile");
const newCodeRouter = require("./auth/newCode");
const newMessagesRouter = require("./auth/Messages");
const MyMassgeRouter = require("./auth/MyMassge");
const yourMassgeRouter = require("./auth/yourMassge");
const historyRouter = require("./auth/history");
const appRouter = require("./auth/app");
const MazelTovRouter = require("./auth/MazelTov");
const to_bring_in_joysRouter = require("./auth/to_bring_in_joys");
const Community_list_Router = require("./auth/Community_list");
const updatePersonalRouter = require("./auth/PersonalInfo");
const addUpdateRouter = require("./auth/addUpdate");
const UpdatesRouter = require("./auth/Updates");
app.use("/auth", LoginRouter)
app.use("/auth", SignUpRouter)
app.use("/auth", newCodeRouter)
app.use("/auth", newMessagesRouter)
app.use("/auth", MyMassgeRouter)
app.use("/auth", yourMassgeRouter)
app.use("/auth", Community_list_Router)
app.use("/auth", appRouter)
app.use("/auth", historyRouter)
app.use("/auth", MazelTovRouter)
app.use("/auth", to_bring_in_joysRouter)
app.use("/auth", updatePersonalRouter)
app.use("/auth", addUpdateRouter)
app.use("/auth", UpdatesRouter)
app.use("/auth", checkout, profileRouter)
app.listen(5000);
