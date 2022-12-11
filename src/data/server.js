import express from 'express';

const app = express();
const port = process.env.PORT || 8081;

// Enable parsing of JSON body data
app.use(express.json());

app.get('/helloworld', (req, res) => {
    res.status(200).json({ status: 200, message: 'Hello world' });
});

// Import controllers here
// import activityController from './activity_controller.js'
// app.use('/activities', activityController)
// import bookingController from './booking_controller.js'
// app.use('/bookings', bookingController)

app.listen(port, () => {
    console.log(`Backend started on http://localhost:${port}`);
});
