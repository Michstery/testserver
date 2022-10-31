const express = require('express');
const testController = require('./../controllers/testControllers');

const router = express.Router();

router
  .route('/')
  .get(testController.getAllTest);

module.exports = router;
