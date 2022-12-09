import { sequelize } from '../database.js';
import { Address, User, Gym, Member, Blog, Trainer, GymTrainer, Activity, Session, Booking } from './schema.js';

// The reason why this is called `seed.js` b/c of: https://www.prisma.io/docs/guides/database/seed-database
// Also, the scaffolding of `models` folder is by juxtaposing: (1) https://www.prisma.io/docs/concepts/components/prisma-schema, (2) https://www.prisma.io/docs/guides/database/seed-database, (3) https://github.com/entrptaher/feature-based-prisma-structure/blob/master/docs/project-structure.md, and (4) https://github.com/DevPreps/backend/tree/development/models

// [x] M4.0 Variables for Creating Instances (aka Populating Tables)
// 4.1 Address records
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

// 4.2 User records
const userRecords = [
	{
		firstName: 'Ja',
		lastName: 'Doe',
		role: 'Manager',
		email: 'ja@gmail.com',
		phone: '0123456789',
		username: 'ja@gamil.com',
		password: 'password',
		addressId: 3,
	},
	{
		firstName: 'Jb',
		lastName: 'Doe',
		role: 'Manager',
		email: 'jb@gmail.com',
		phone: '0123456789',
		username: 'jb@gamil.com',
		password: 'password',
		addressId: 4,
	},
	{
		firstName: 'Jc',
		lastName: 'Doe',
		role: 'Trainer',
		email: 'jc@gmail.com',
		phone: '0123456789',
		username: 'jc@gamil.com',
		password: 'password',
		addressId: 5,
	},
	{
		firstName: 'Jd',
		lastName: 'Doe',
		role: 'Trainer',
		email: 'jd@gmail.com',
		phone: '0123456789',
		username: 'jd@gamil.com',
		password: 'password',
		addressId: 6,
	},
	{
		firstName: 'Je',
		lastName: 'Doe',
		role: 'Member',
		email: 'je@gmail.com',
		phone: '0123456789',
		username: 'je@gamil.com',
		password: 'password',
		addressId: 7,
	},
	{
		firstName: 'Jf',
		lastName: 'Doe',
		role: 'Member',
		email: 'jf@gmail.com',
		phone: '0123456789',
		username: 'jf@gamil.com',
		password: 'password',
		addressId: 8,
	},
];

// 4.3 Gym records
const gymRecords = [
	{
		name: 'A Branch',
		addressId: 1,
		managerUserId: 1,
		imageUrl: 'n/a',
	},
	{
		name: 'B Branch',
		addressId: 2,
		managerUserId: 2,
		imageUrl: 'n/a',
	},
];

// 4.4 Member records
const memberRecords = [
	{
		memberUserId: 5,
		age: 25,
		gender: 'Female',
	},
	{
		memberUserId: 6,
		age: 26,
		gender: 'Male',
	},
];

// 4.5 Blog records
const blogRecords = [
	{
		memberId: 1,
		title: 'Lorem Ipsum',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam felis nec blandit commodo. Praesent fermentum consectetur posuere. In non nibh dignissim dui consequat porttitor interdum sit amet ipsum. Integer sagittis lorem nisl, eu interdum eros lobortis ac. Integer vel urna faucibus, lobortis massa nec, lobortis lorem. Praesent vitae gravida magna. Nulla fringilla faucibus blandit. Nunc ac lectus eros. Mauris hendrerit consequat luctus. Aliquam a purus ac eros hendrerit hendrerit ac a nibh. Mauris sit amet ornare arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tincidunt eleifend quam, id sodales elit dictum non. Sed faucibus leo massa, a blandit orci suscipit nec. Sed vulputate gravida nisl, quis mattis dolor posuere id.',
	},
];

// 4.6 Trainer records
const trainerRecords = [
	{
		trainerUserId: 3,
		description: 'Lorem ipsum',
		certificate: 'Certificate III in Fitness',
		specialty: 'Aerobatic and physiotherapy',
		imageUrl: 'n/a',
	},
	{
		trainerUserId: 4,
		description: 'Lorem ipsum',
		certificate: 'Certificate IV in Fitness',
		specialty: 'Strength and physiotherapy',
		imageUrl: 'n/a',
	},
];

// 4.7 GymTrainer records
const gymTrainerRecords = [
	{
		gymId: 1,
		trainerId: 1,
	},
	{
		gymId: 1,
		trainerId: 2,
	},
	{
		gymId: 2,
		trainerId: 1,
	},
	{
		gymId: 2,
		trainerId: 2,
	},
];

// 4.8 Activity records
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
		name: 'Boxing Circuit',
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
		requirementTwo: 'BYO boxing gloves, wraps and inner liners.',
		price: 60,
		durationMinute: 45,
	},
];

// 4.9 Session records
const sessionRecords = [
	{
		gymTrainerId: 1,
		activityId: 1,
		dateTime: '2022-11-21 07:15:00',
		roomNumber: 201,
	},
	{
		gymTrainerId: 2,
		activityId: 7,
		dateTime: '2022-11-2 07:15:00',
		roomNumber: 201,
	},
];

// 4.10 Booking records
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
			User.bulkCreate(userRecords),
			Gym.bulkCreate(gymRecords),
			Member.bulkCreate(memberRecords),
			Blog.bulkCreate(blogRecords),
			Trainer.bulkCreate(trainerRecords),
			GymTrainer.bulkCreate(gymTrainerRecords),
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
