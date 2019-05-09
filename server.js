const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres', 'postgres', 'VrGC_520.', {
  host: '202.142.223.30',
  port: '5432',
  dialect: 'postgres',
  schema: 'map'
})

const express = require('express')
const cors = require('cors')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5053

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/test', (req, res, next) => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
      return sequelize.close()
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err)
      res.send('Unable to connect to the database')
    })
    .then(() => {
      return res.send('Connection has been established successfully.')
    })
    .catch(err => {
      console.error('Error:', err)
      res.send('Error')
    })
  // res.send('ok')
})

const placeMarkMD = require('./models/placemarkModel')(sequelize, Sequelize)
const placeMarkRouter = require('./routes/placeMarkRoute')(
  placeMarkMD,
  sequelize
)
app.use('/placemark', placeMarkRouter)

app.listen(port, () => {
  console.log('Start node.js on port ' + port)
})
