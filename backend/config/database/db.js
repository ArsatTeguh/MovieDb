import sequelize from 'sequelize'

const db = new sequelize('konflix','root','',{
    dialect: 'mysql',
    host: 'localhost'
})

export default db;