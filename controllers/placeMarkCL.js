// 'postgres://postgres:VrGC_520.@202.142.223.30:5432/postgres'

const placeMarkConTroller = (Model, sequelize) => {
  const get = async (req, res) => {
    console.log(Model)
    try {
      let placeMark = await Model.findAll({ limit: 10 })
      await sequelize.close()
      res.send(placeMark)
    } catch (err) {
      console.error(err.message)
      res.status(500).send({
        error: 'an error from trying to fetch the placemark.',
        message: err.message
      })
    }
  }
  return {
    // post: post,
    get: get
  }
}

module.exports = placeMarkConTroller
