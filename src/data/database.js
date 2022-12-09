import { Sequelize } from 'sequelize';

// [x] M1.0 Database Connection String
// Syntax: (alias) new Sequelize(database: string, username: string, password?: string, options?: Options)
export const sequelize = new Sequelize('high_street_gym_test', 'root', 'root', {
	host: 'localhost',
	port: 3306,
	dialect: 'mysql',
	define: {
		freezeTableName: false,
		timestamps: false,
	},
});

// NB Test database and Sequelize functionalities by using scripts stipulated in `package.json`: https://youtu.be/bOHysWYMZM0?t=495
// Testing the connection: https://sequelize.org/docs/v6/getting-started/
(async () => {
	try {
		await sequelize.authenticate();
		console.log('✅ Connection to database has been established successfully.');
	} catch (error) {
		console.error('❌ Unable to connect to the database:', error);
	}
})();

// // Testing the table sync w/o modularization: https://youtu.be/3_9-JFXTVDE?list=PLkqiWyX-_Lov8qmMOVn4SEQwr9yOjNn3f&t=342
// const User = sequelize.define(
// 	'users',
// 	{
// 		userId: {
// 			type: DataTypes.INTEGER,
// 			autoIncrement: true,
// 			primaryKey: true,
// 		},
// 		firstName: {
// 			type: DataTypes.STRING(45),
// 			allowNull: false,
// 		},
// 		lastName: {
// 			type: DataTypes.STRING(45),
// 			allowNull: false,
// 		},
// 		role: {
// 			type: DataTypes.STRING(45),
// 			allowNull: false,
// 		},
// 		email: {
// 			type: DataTypes.STRING(45),
// 			allowNull: false,
// 		},
// 		phone: {
// 			type: DataTypes.STRING(45),
// 			allowNull: false,
// 		},
// 		username: {
// 			type: DataTypes.STRING(45),
// 			allowNull: false,
// 		},
// 		password: {
// 			type: DataTypes.STRING(45),
// 			allowNull: false,
// 		}
// 	},
// 	{
// 		freezeTableName: true,
// 		timestamps: false,
// 	}
// );

// User.sync()
// 	.then((data) => {
// 		console.log('Table and model synced successfully!');
// 	})
// 	.catch((error) => {
// 		console.log('Error syncing the table and model!');
// 	});
