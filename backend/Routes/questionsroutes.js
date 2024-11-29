const express = require('express');
const { addQuestion, getQuestions ,submitAnswers,getResult} = require('../controller/Adquestionscontroller');
// const {submitAnswers}=require('../controller/submitanswer')
const testcontroller=require('../controller/Createtestcontroller')
const addtestarraycontroller=require('../controller/Addtestarraycontroller')
const router = express.Router();

// Add a question to the test
router.post('/add', addQuestion);

// Get all questions for a specific test category
router.get('/getquestions', getQuestions);


router.post('/submit-answers', submitAnswers);


router.get('/get-result/:userId/:testId', getResult);


// test



router.post('/createtest', testcontroller.createTest);
router.get('/gettest/:id',testcontroller.getTestById)

router.get('/gettestresult',testcontroller.getTestResults)

router.post('/starttest', testcontroller.startTest);


router.post('/testarray',addtestarraycontroller.createTestType)
router.get('/gettestarray',addtestarraycontroller.getTestType)
router.get('/gettestarray/:id',addtestarraycontroller.getTestTypeById)




module.exports = router;
