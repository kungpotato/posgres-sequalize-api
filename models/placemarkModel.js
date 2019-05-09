module.exports = (sequelize, DataTypes) => {
  class PlaceMarkModel extends DataTypes.Model {}
  PlaceMarkModel.init(
    {
      placemark_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      fleetno: DataTypes.INTEGER,
      type: DataTypes.INTEGER,
      name: DataTypes.STRING(256),
      lat: DataTypes.REAL,
      lng: DataTypes.REAL,
      poi_id: DataTypes.INTEGER
    },
    { sequelize, tableName: 'placemark', timestamps: false }
  )
  return PlaceMarkModel
}
