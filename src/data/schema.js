import { DataTypes } from 'sequelize';
import dbConn from './dbConn.js';

// [x] M2.0 Model Definition
export const Address = dbConn.define('address', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    streetOne: { type: DataTypes.STRING(45), allowedNull: false },
    streetTwo: { type: DataTypes.STRING(45) },
    suburb: { type: DataTypes.STRING(45), allowedNull: false },
    postcode: { type: DataTypes.INTEGER, allowedNull: false },
    state: { type: DataTypes.STRING(45), allowedNull: false },
    country: { type: DataTypes.STRING(45), allowedNull: false },
});

export const Login = dbConn.define('login', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    username: { type: DataTypes.STRING(45), allowNull: false },
    password: { type: DataTypes.STRING(45), allowNull: false },
});

export const Administrator = dbConn.define('administrator', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    // loginId:
    firstName: { type: DataTypes.STRING(45), allowNull: false },
    lastName: { type: DataTypes.STRING(45), allowNull: false },
    email: { type: DataTypes.STRING(45), allowNull: false },
    phone: { type: DataTypes.STRING(45), allowNull: false },
    // addressId:
    gymBranch: { type: DataTypes.STRING(45) },
});

export const Trainer = dbConn.define('trainer', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    // loginId:
    firstName: { type: DataTypes.STRING(45), allowNull: false },
    lastName: { type: DataTypes.STRING(45), allowNull: false },
    email: { type: DataTypes.STRING(45), allowNull: false },
    phone: { type: DataTypes.STRING(45), allowNull: false },
    // addressId:
    description: { type: DataTypes.STRING(255) },
    certificate: { type: DataTypes.STRING(45) },
    specialty: { type: DataTypes.STRING(45) },
    imageUrl: { type: DataTypes.STRING(255) },
    gymBranch: { type: DataTypes.STRING(45) },
});

export const Member = dbConn.define('member', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    // loginId:
    firstName: { type: DataTypes.STRING(45), allowNull: false },
    lastName: { type: DataTypes.STRING(45), allowNull: false },
    email: { type: DataTypes.STRING(45), allowNull: false },
    phone: { type: DataTypes.STRING(45), allowNull: false },
    // addressId:
    age: { type: DataTypes.INTEGER, allowNull: false },
    gender: { type: DataTypes.ENUM('Female', 'Male', 'Other'), allowNull: false },
});

// prettier-ignore
export const Blog = dbConn.define('blog', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    // memberId:
    title: { type: DataTypes.STRING(45), allowNull: false },
    body: { type: DataTypes.STRING(6000), allowNull: false },
},
{
    timestamps: true,
});

export const Activity = dbConn.define('activity', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING(45), allowNull: false },
    category: { type: DataTypes.ENUM('Aerobic', 'Strength', 'Aerobic & Strength', 'Flexibility') },
    description: { type: DataTypes.STRING(255) },
    intensityLevel: {
        type: DataTypes.ENUM('Low', 'Medium', 'High', 'Very High', 'Varies with Type'),
        allowNull: false,
    },
    maxPeopleAllowed: { type: DataTypes.INTEGER },
    requirementOne: { type: DataTypes.STRING(100) },
    requirementTwo: { type: DataTypes.STRING(100) },
    price: { type: DataTypes.DECIMAL(10, 2) },
    durationMinute: { type: DataTypes.INTEGER, allowNull: false },
});

export const Session = dbConn.define('session', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    dateTime: { type: DataTypes.DATE, allowNull: false },
    roomNumber: { type: DataTypes.STRING(45) },
    // activityId:
    // trainerId:
});

export const Booking = dbConn.define('booking', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    // sessionId:
    // memberId:
});

// [x] M3.0 Associations (aka Relationships)
// 3.1 Login && Administrator
Login.hasOne(Administrator, { foreignKey: { allowNull: false, onDelete: 'CASCADE' } });
Administrator.belongsTo(Login, { foreignKey: { allowNull: false } });

// 3.2 Login && Trainer
Login.hasOne(Trainer, { foreignKey: { allowNull: false, onDelete: 'CASCADE' } });
Trainer.belongsTo(Login, { foreignKey: { allowNull: false } });

// 3.3 Login && Member
Login.hasOne(Member, { foreignKey: { allowNull: false, onDelete: 'CASCADE' } });
Member.belongsTo(Login, { foreignKey: { allowNull: false } });

// 3.4 Address && Administrator
Address.hasMany(Administrator, { foreignKey: { allowNull: false } });
Administrator.belongsTo(Address, { foreignKey: { allowNull: false } });

// 3.5 Address && Trainer
Address.hasMany(Trainer, { foreignKey: { allowNull: false } });
Trainer.belongsTo(Address, { foreignKey: { allowNull: false } });

// 3.6 Address && Member
Address.hasMany(Member, { foreignKey: { allowNull: false } });
Member.belongsTo(Address, { foreignKey: { allowNull: false } });

// 3.7 Members && Blogs
Member.hasMany(Blog, { foreignKey: { allowNull: false } });
Blog.belongsTo(Member, { foreignKey: { allowNull: false } });

// 3.8 Activity && Session
Activity.hasMany(Session, { foreignKey: { allowNull: false } });
Session.belongsTo(Activity, { foreignKey: { allowNull: false } });

// 3.9 Trainer && Session
Trainer.hasMany(Session, { foreignKey: { allowNull: false } });
Session.belongsTo(Trainer, { foreignKey: { allowNull: false } });

// 3.11 & 3.12 Member && Session (M:N through a junction table, so 2 relationships in EER diagram)
Member.belongsToMany(Session, { through: Booking });
Session.belongsToMany(Member, { through: Booking });
