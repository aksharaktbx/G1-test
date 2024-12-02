const express = require('express');
const { addQuestion, getQuestions  ,deleteQuestion ,editQuestion,getQuestionsByTest,getQuestionById } = require('../controller/Adquestionscontroller');
// const {submitAnswers}=require('../controller/submitanswer')
const testcontroller=require('../controller/createtestname')
const createtestmodulecontroller=require('../controller/createtestmodule')
const router = express.Router();
const upload = require('../config/Multer'); // Import the multer configuration


// Add a question to the test
router.post('/add',upload.single('image'), addQuestion);

// Get all questions for a specific test category
router.get('/getquestions', getQuestions);
router.get('/getquestions/:id', getQuestionById);

router.get('/testquestions/:testName/:testLevel/:testTitle', getQuestionsByTest);
router.delete('/delete/:id', deleteQuestion); // Endpoint to delete a question by ID
router.put('/editquestion/:id', editQuestion); // Endpoint to edit a question by ID
// router.get('/getfilterquestions',getTotalQuestions)

router.get('/get-result/:userId/:testId', createtestmodulecontroller.getResult);
router.post('/submit-answers', createtestmodulecontroller.submitAnswers);


router.get('/get-result/:userId/:testId', createtestmodulecontroller.getResult);

router.post('/test-level', testcontroller.addTestLevel); // Add a Test Level
router.get('/test-level', testcontroller.getAllTestLevels); // Get all Test Levels
router.delete('/test-level/:id', testcontroller.deleteTestLevel); // Delete a Test Level

// Test Title Routes
router.post('/test-title', testcontroller.addTestTitle); // Add a Test Title
router.get('/test-title',testcontroller.getAllTestTitles); // Get all Test Titles
router.delete('/test-title/:id', testcontroller.deleteTestTitle); // Delete a Test Title

router.get('/testlevels/testname/:testNameId', testcontroller.getTestLevelsByTestName);

// Route to get Test Titles by Test Level ID
router.get('/testtitles/testlevel/:testLevelId', testcontroller.getTestTitlesByTestLevel);
// test
router.post('/createtest', createtestmodulecontroller.createTest);
router.get('/gettests', createtestmodulecontroller.getAllTests);
router.get('/gettests/:testNameId', createtestmodulecontroller.getTestsByTestNameId);


router.get('/gettest/:id',createtestmodulecontroller.getTestById)
router.get('/gettestresult',createtestmodulecontroller.getTestResults)
router.post('/starttest', createtestmodulecontroller.startTest);


router.post('/test-Name',testcontroller.createTestName)
router.get('/test-name', testcontroller.getAllTestNames); // Get all Test Names
router.delete('/test-name/:id', testcontroller.deleteTestName); // Delete a Test Name
// router.get('/gettestarray',addtestarraycontroller.getTestType)
// router.get('/gettestarray/:id',addtestarraycontroller.getTestTypeById)

router.get('/userprogress', createtestmodulecontroller.getAllUserProgress);





module.exports = router;
