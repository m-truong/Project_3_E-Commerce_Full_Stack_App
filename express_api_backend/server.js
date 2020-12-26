// ==========
// DEPENDENCIES
// ==========
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
// const User = require('./models/userModel');
// const bookmarksController = require('./controllers/bookmarkRoutes.js');
const app = express(); 
const PORT = process.env.PORT || 3000;