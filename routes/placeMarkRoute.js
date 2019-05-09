const express = require('express')

const placeMarkRouter = express.Router()
const routes = (Model, sequelize) => {
  const placeMarkController = require('../controllers/placeMarkCL')(
    Model,
    sequelize
  )
  placeMarkRouter.get('/', placeMarkController.get)

  return placeMarkRouter
}

module.exports = routes
