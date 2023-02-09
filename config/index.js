import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()
const{
    DATABASE_NAME= 'assignment2' ,
    DATABASE_USERNAME = 'root' ,
    DATABASE_PASSWORD = '12345678',
    DIALECT = 'mysql' 
} = process.env


const  sequelize = new Sequelize(DATABASE_NAME,DATABASE_USERNAME,DATABASE_PASSWORD,{
    dialect:DIALECT
})

// sequelize.authenticate().then(()=>{
//     console.log('connected')
// }).catch((error)=>{
//     console.log('Unable',error)
// })

export default sequelize