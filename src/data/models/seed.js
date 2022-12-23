import sequelize from '../dbConn.js';
import { Address, Login, Member, Trainer, Administrator, Blog, Activity, Session, Booking } from './schema.js';

// The reason why this is called `seed.js` b/c of: https://www.prisma.io/docs/guides/database/seed-database
// Also, the file structure of the `models` folder is by juxtaposing: (1) https://www.prisma.io/docs/concepts/components/prisma-schema, (2) https://www.prisma.io/docs/guides/database/seed-database, (3) https://github.com/entrptaher/feature-based-prisma-structure/blob/master/docs/project-structure.md, and (4) https://github.com/DevPreps/backend/tree/development/models

// [x] M4.0 Variables for Creating Instances (aka Populating Tables)
const addressRecords = [
    {
        streetOne: '1 Amber St',
        suburb: 'Brisbane City',
        postcode: '4000',
        state: 'QLD',
        country: 'Australia',
    },
    {
        streetOne: '2 Brooklyn St',
        suburb: 'Brisbane City',
        postcode: '4000',
        state: 'QLD',
        country: 'Australia',
    },
    {
        streetOne: '3 Christine St',
        suburb: 'Brisbane City',
        postcode: '4000',
        state: 'QLD',
        country: 'Australia',
    },
    {
        streetOne: '4 Diamond St',
        suburb: 'Brisbane City',
        postcode: '4000',
        state: 'QLD',
        country: 'Australia',
    },
    {
        streetOne: '5 Emblem St',
        suburb: 'Brisbane City',
        postcode: '4000',
        state: 'QLD',
        country: 'Australia',
    },
    {
        streetOne: '6 Frost St',
        suburb: 'Brisbane City',
        postcode: '4000',
        state: 'QLD',
        country: 'Australia',
    },
    {
        streetOne: '7 Gill St',
        suburb: 'Brisbane City',
        postcode: '4000',
        state: 'QLD',
        country: 'Australia',
    },
    {
        streetOne: '8 Helena St',
        suburb: 'Brisbane City',
        postcode: '4000',
        state: 'QLD',
        country: 'Australia',
    },
];

const loginRecords = [
    {
        username: 'jadoe',
        password: 'password',
    },
    {
        username: 'jbdoe',
        password: 'password',
    },
    {
        username: 'jcdoe',
        password: 'password',
    },
    {
        username: 'jddoe',
        password: 'password',
    },
    {
        username: 'jedoe',
        password: 'password',
    },
    {
        username: 'jfdoe',
        password: 'password',
    },
];

const administratorRecords = [
    {
        loginId: 1,
        firstName: 'Ja',
        lastName: 'Doe',
        phone: '0123456789',
        email: 'ja@gmail.com',
        addressId: 1,
        gymBranch: 'A Branch',
    },
    {
        loginId: 2,
        firstName: 'Jb',
        lastName: 'Doe',
        phone: '0123456789',
        email: 'jb@gmail.com',
        addressId: 2,
        gymBranch: 'A Branch',
    },
];

const trainerRecords = [
    {
        loginId: 3,
        firstName: 'Jc',
        lastName: 'Doe',
        phone: '0123456789',
        email: 'jc@gmail.com',
        addressId: 3,
        description: 'Lorem ipsum',
        specialty: 'Aerobatic and physiotherapy',
        certificate: 'Certificate III in Fitness',
        imageUrl: 'n/a',
        gymBranch: 'A Branch',
    },
    {
        loginId: 4,
        firstName: 'Jd',
        lastName: 'Doe',
        phone: '0123456789',
        email: 'jd@gmail.com',
        addressId: 4,
        description: 'Lorem ipsum',
        specialty: 'Strength and physiotherapy',
        certificate: 'Certificate IV in Fitness',
        imageUrl: 'n/a',
        gymBranch: 'A Branch',
    },
];

const memberRecords = [
    {
        loginId: 5,
        firstName: 'Je',
        lastName: 'Doe',
        phone: '0123456789',
        email: 'je@gmail.com',
        addressId: 5,
        age: 25,
        gender: 'Female',
    },
    {
        loginId: 6,
        firstName: 'Jf',
        lastName: 'Doe',
        phone: '0123456789',
        email: 'jf@gmail.com',
        addressId: 6,
        age: 26,
        gender: 'Male',
    },
];

const blogRecords = [
    {
        memberId: 1,
        title: 'Lorem Ipsum',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam felis nec blandit commodo. Praesent fermentum consectetur posuere. In non nibh dignissim dui consequat porttitor interdum sit amet ipsum. Integer sagittis lorem nisl, eu interdum eros lobortis ac. Integer vel urna faucibus, lobortis massa nec, lobortis lorem. Praesent vitae gravida magna. Nulla fringilla faucibus blandit. Nunc ac lectus eros. Mauris hendrerit consequat luctus. Aliquam a purus ac eros hendrerit hendrerit ac a nibh. Mauris sit amet ornare arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tincidunt eleifend quam, id sodales elit dictum non. Sed faucibus leo massa, a blandit orci suscipit nec. Sed vulputate gravida nisl, quis mattis dolor posuere id.',
    },
];

const activityRecords = [
    {
        name: 'Yoga',
        category: 'Flexibility',
        description: 'Lorem ipsum',
        intensityLevel: 'Varies with Type',
        maxPeopleAllowed: 26,
        requirementOne: 'Large towels are compulsory for Group Exercise and Gym.',
        requirementTwo: 'BYO mat.',
        price: 60,
        durationMinute: 45,
    },
    {
        name: 'Pilates',
        category: 'Flexibility',
        description: 'Lorem ipsum',
        intensityLevel: 'Medium',
        maxPeopleAllowed: 26,
        requirementOne: 'Large towels are compulsory for Group Exercise and Gym.',
        requirementTwo: 'BYO mat.',
        price: 60,
        durationMinute: 45,
    },
    {
        name: 'Abs',
        category: 'Strength',
        description: 'Lorem ipsum',
        intensityLevel: 'Very High',
        maxPeopleAllowed: 26,
        requirementOne: 'Large towels are compulsory for Group Exercise and Gym.',
        requirementTwo: 'BYO mat.',
        price: 60,
        durationMinute: 45,
    },
    {
        name: 'HIIT',
        category: 'Aerobic',
        description: 'Lorem ipsum',
        intensityLevel: 'High',
        maxPeopleAllowed: 26,
        requirementOne: 'Large towels are compulsory for Group Exercise and Gym.',
        price: 60,
        durationMinute: 45,
    },
    {
        name: 'Indoor Cycling',
        category: 'Aerobic',
        description: 'Lorem ipsum',
        intensityLevel: 'Medium',
        maxPeopleAllowed: 26,
        requirementOne: 'Large towels are compulsory for Group Exercise and Gym.',
        price: 60,
        durationMinute: 45,
    },
    {
        name: 'Boxing',
        category: 'Aerobic & Strength',
        description: 'Lorem ipsum',
        intensityLevel: 'Medium',
        maxPeopleAllowed: 26,
        requirementOne: 'Large towels are compulsory for Group Exercise and Gym.',
        requirementTwo: 'BYO boxing gloves, wraps and inner liners.',
        price: 60,
        durationMinute: 45,
    },
    {
        name: 'Zumba',
        category: 'Aerobic',
        description: 'Lorem ipsum',
        intensityLevel: 'Medium',
        maxPeopleAllowed: 26,
        requirementOne: 'Large towels are compulsory for Group Exercise and Gym.',
        price: 60,
        durationMinute: 45,
    },
];

const sessionRecords = [
    {
        activityId: 1,
        trainerId: 1,
        dateTime: '2023-01-01 15:00:00',
        roomNumber: 201,
    },
    {
        activityId: 7,
        trainerId: 2,
        dateTime: '2023-01-01 16:00:00',
        roomNumber: 201,
    },
];

const bookingRecords = [
    {
        sessionId: 1,
        memberId: 1,
    },
    {
        sessionId: 2,
        memberId: 2,
    },
];

// [x] M5.0 Model Synchronization & Creating Instances (aka Populating Tables) & Error Handling
// // Code snippet from: https://youtu.be/3_9-JFXTVDE?list=PLkqiWyX-_Lov8qmMOVn4SEQwr9yOjNn3f&t=342
// sequelize
// 	.sync({ force: true })
// 	.then(() => {
// 		return Address.create(addressRecord1)
// 		// ...other instance creations
// 	})
// 	.then((data) => {
// 		console.log('✅ Tables and models synced successfully!');
// 	})
// 	.catch((error) => {
// 		console.log('❌ Error syncing the tables and models!');
// 	});

// Code snippet from: https://sequelize.org/docs/v6/core-concepts/model-instances/
(async () => {
    await sequelize.sync({ force: true });
    // Promises chaining is rewritten by using: https://javascript.info/async-await#error-handling && https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#rewriting_a_promise_chain_with_an_async_function
    try {
        await Promise.all([
            // NB By default, `bulkCreate` does not run validations on each object that is going to be created (which `create` does). To make `bulkCreate` run these validations as well, you must pass the `validate: true` option. This will decrease performance: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#creating-in-bulk
            Address.bulkCreate(addressRecords),
            Login.bulkCreate(loginRecords),
            Administrator.bulkCreate(administratorRecords),
            Trainer.bulkCreate(trainerRecords),
            Member.bulkCreate(memberRecords),
            Blog.bulkCreate(blogRecords),
            Activity.bulkCreate(activityRecords),
            Session.bulkCreate(sessionRecords),
            Booking.bulkCreate(bookingRecords),
        ]);
        console.log('✅ Sample tables are successfully created and populated!');
    } catch (error) {
        console.log('❌ Error creating and populating sample tables!');
        console.error(error);
    }
})();

// [ ] M6.0 Model Querying => This part should probably be modularized and coded in separate files
