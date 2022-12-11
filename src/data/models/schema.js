import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

// [x] M2.0 Model Definition
export const Address = sequelize.define('address', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    streetOne: {
        type: DataTypes.STRING(45),
        allowedNull: false,
    },
    streetTwo: {
        type: DataTypes.STRING(45),
        allowedNull: false,
    },
    suburb: {
        type: DataTypes.STRING(45),
        allowedNull: false,
    },
    postcode: {
        type: DataTypes.INTEGER,
        allowedNull: false,
    },
    state: {
        type: DataTypes.STRING(45),
        allowedNull: false,
    },
    country: {
        type: DataTypes.STRING(45),
        allowedNull: false,
    },
});

export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('Member', 'Trainer', 'Manager'),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    // addressId: {
    // 	type: DataTypes.INTEGER,
    // 	allowNull: false,
    // },
});

export const Gym = sequelize.define('gym', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    // addressId: {
    // 	type: DataTypes.INTEGER,
    // 	allowNull: false,
    // },
    // managerUserId: {
    // 	type: DataTypes.INTEGER,
    // 	allowNull: false,
    // },
    imageUrl: {
        type: DataTypes.STRING(255),
    },
});

export const Member = sequelize.define('member', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    // memberUserId: {
    // 	type: DataTypes.INTEGER,
    // 	allowNull: false,
    // },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gender: {
        type: DataTypes.ENUM('Female', 'Male', 'Other'),
        allowNull: false,
    },
});

// prettier-ignore
export const Blog = sequelize.define('blog', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    // memberId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
    title: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    body: {
        type: DataTypes.STRING(6000),
        allowNull: false,
    },
},
{
    timestamps: true,
});

export const Trainer = sequelize.define('trainer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    // trainerUserId: {
    // 	type: DataTypes.INTEGER,
    // 	allowNull: false,
    // },
    description: {
        type: DataTypes.STRING(255),
    },
    certificate: {
        type: DataTypes.STRING(45),
    },
    specialty: {
        type: DataTypes.STRING(45),
    },
    imageUrl: {
        type: DataTypes.STRING(255),
    },
});

export const GymTrainer = sequelize.define('gymTrainer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    gymId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Gym,
            key: 'id',
        },
    },
    trainerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Trainer,
            key: 'id',
        },
    },
});

export const Activity = sequelize.define('activity', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    category: {
        type: DataTypes.ENUM('Aerobic', 'Strength', 'Aerobic & Strength', 'Flexibility'),
    },
    description: {
        type: DataTypes.STRING(255),
    },
    intensityLevel: {
        type: DataTypes.ENUM('Low', 'Medium', 'High', 'Very High', 'Varies with Type'),
        allowNull: false,
    },
    maxPeopleAllowed: {
        type: DataTypes.INTEGER,
    },
    requirementOne: {
        type: DataTypes.STRING(100),
    },
    requirementTwo: {
        type: DataTypes.STRING(100),
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
    },
    durationMinute: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export const Session = sequelize.define('session', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    // gymTrainerId: {
    // 	type: DataTypes.INTEGER,
    // 	allowNull: false,
    // },
    // activityId: {
    // 	type: DataTypes.INTEGER,
    // 	allowNull: false,
    // },
    dateTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    roomNumber: {
        type: DataTypes.STRING(45),
    },
});

export const Booking = sequelize.define('booking', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    sessionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Session,
            key: 'id',
        },
    },
    memberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Member,
            key: 'id',
        },
    },
});

// [x] M3.0 Associations (aka Relationships)
// 3.1 Address & User
Address.hasMany(User, { foreignKey: { allowNull: false } });
User.belongsTo(Address, { foreignKey: { allowNull: false } });

// 3.2 Address & Gym
Address.hasOne(Gym, { foreignKey: { allowNull: false } });
Gym.belongsTo(Address, { foreignKey: { allowNull: false } });

// 3.3 Manager & Gym
User.hasMany(Gym, { foreignKey: { name: 'managerUserId', allowNull: false } });
Gym.belongsTo(User, { foreignKey: { name: 'managerUserId', allowNull: false } });

// 3.4 User & Member
User.hasOne(Member, { foreignKey: { name: 'memberUserId', allowNull: false } });
Member.belongsTo(User, { foreignKey: { name: 'memberUserId', allowNull: false } });

// 3.5 User & Trainer
User.hasOne(Trainer, { foreignKey: { name: 'trainerUserId', allowNull: false } });
Trainer.belongsTo(User, { foreignKey: { name: 'trainerUserId', allowNull: false } });

// 3.6 & 3.7 Gym & Trainer (M:N, so 2 relationships)
Gym.belongsToMany(Trainer, { through: GymTrainer });
Trainer.belongsToMany(Gym, { through: GymTrainer });

// 3.8 Members & Blogs
Member.hasMany(Blog, { foreignKey: { allowNull: false } });
Blog.belongsTo(Member, { foreignKey: { allowNull: false } });

// 3.9 Activity & Session
Activity.hasMany(Session, { foreignKey: { allowNull: false } });
Session.belongsTo(Activity, { foreignKey: { allowNull: false } });

// 3.10 GymTrainer & Session
GymTrainer.hasMany(Session, { foreignKey: { allowNull: false } });
Session.belongsTo(GymTrainer, { foreignKey: { allowNull: false } });

// 3.11 & 3.12 Member & Session (M:N, so 2 relationships)
Member.belongsToMany(Session, { through: Booking });
Session.belongsToMany(Member, { through: Booking });
