const {TestLevel,TestTitle,TestName}=require('../modal/Addtestarraymodal')
// const Question = require('../models/Question');
// Create a new diagnostic test
exports.addTestLevel = async (req, res) => {
  const { testLevelName, testName } = req.body;
  try {
    const newTestLevel = new TestLevel({ testLevelName, testName });
    await newTestLevel.save();
    res.status(201).json({ message: 'Test Level added successfully', data: newTestLevel });
  } catch (error) {
    res.status(500).json({ message: 'Error adding Test Level', error: error.message });
  }
};

exports.getAllTestLevels = async (req, res) => {
  try {
    const testLevels = await TestLevel.find().populate('testName', 'testName');
    res.status(200).json({ data: testLevels });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Test Levels', error: error.message });
  }
};

exports.deleteTestLevel = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTestLevel = await TestLevel.findByIdAndDelete(id);
    if (!deletedTestLevel) {
      return res.status(404).json({ message: 'Test Level not found' });
    }
    res.status(200).json({ message: 'Test Level deleted successfully', data: deletedTestLevel });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Test Level', error: error.message });
  }
};
// Fetch Test Levels by Test Name ID
exports.getTestLevelsByTestName = async (req, res) => {
  const { testNameId } = req.params;  // Get testNameId from URL parameter
  try {
    // Find Test Levels that belong to the specific testName
    const testLevels = await TestLevel.find({ testName: testNameId }).populate('testName', 'testName');
    
    if (!testLevels || testLevels.length === 0) {
      return res.status(404).json({ message: 'No Test Levels found for this Test Name' });
    }
    
    res.status(200).json({ message: 'Test Levels fetched successfully', data: testLevels });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching Test Levels', error: error.message });
  }
};

exports.addTestTitle = async (req, res) => {
  const { testTitleName, testTitleDescription, testLevel } = req.body;
  try {
    const newTestTitle = new TestTitle({ testTitleName, testTitleDescription, testLevel });
    await newTestTitle.save();
    res.status(201).json({ message: 'Test Title added successfully', data: newTestTitle });
  } catch (error) {
    res.status(500).json({ message: 'Error adding Test Title', error: error.message });
  }
};

exports.getAllTestTitles = async (req, res) => {
  try {
    const testTitles = await TestTitle.find()
      .populate('testLevel', 'testLevelName')
      .populate({
        path: 'testLevel',
        populate: { path: 'testName', select: 'testName' },
      });
    res.status(200).json({ data: testTitles });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Test Titles', error: error.message });
  }
};

exports.deleteTestTitle = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTestTitle = await TestTitle.findByIdAndDelete(id);
    if (!deletedTestTitle) {
      return res.status(404).json({ message: 'Test Title not found' });
    }
    res.status(200).json({ message: 'Test Title deleted successfully', data: deletedTestTitle });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Test Title', error: error.message });
  }
};
// Fetch Test Titles by Test Level ID
exports.getTestTitlesByTestLevel = async (req, res) => {
  const { testLevelId } = req.params;  // Get testLevelId from URL parameter
  try {
    // Find Test Titles that belong to the specific testLevel
    const testTitles = await TestTitle.find({ testLevel: testLevelId })
      .populate('testLevel', 'testLevelName')
      .populate({
        path: 'testLevel',
        populate: { path: 'testName', select: 'testName' },
      });
    
    if (!testTitles || testTitles.length === 0) {
      return res.status(404).json({ message: 'No Test Titles found for this Test Level' });
    }
    
    res.status(200).json({ message: 'Test Titles fetched successfully', data: testTitles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching Test Titles', error: error.message });
  }
};
exports.createTestName = async (req, res) => {
  const { testName, description } = req.body;

  try {
    // Validate required fields
    if (!testName) {
      return res.status(400).json({ message: 'Missing required testName' });
    }

    // Create a new TestName document
    const newTestName = new TestName({
      testName,
      description // Store the description if provided
    });

    // Save the new TestName to the database
    await newTestName.save();

    // Send response with the created TestName
    res.status(201).json({ message: 'TestName created successfully!', testName: newTestName });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create TestName', error: error.message });
  }
};


exports.getAllTestNames = async (req, res) => {
  try {
    const testNames = await TestName.find();
    res.status(200).json({ data: testNames });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Test Names', error: error.message });
  }
};

exports.deleteTestName = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTestName = await TestName.findByIdAndDelete(id);
    if (!deletedTestName) {
      return res.status(404).json({ message: 'Test Name not found' });
    }
    res.status(200).json({ message: 'Test Name deleted successfully', data: deletedTestName });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Test Name', error: error.message });
  }
};





