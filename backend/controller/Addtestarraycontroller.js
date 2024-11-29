const TestType = require('../modal/Addtestarraymodal'); // Import the TestType model
const Test = require('../modal/createtestmodal'); // Import the Test model (for validation)

exports.createTestType = async (req, res) => {
  const { typeName, description, testarray } = req.body;

  try {
    // Validate required fields
    if (!typeName || !testarray || !Array.isArray(testarray) || testarray.length === 0) {
      return res.status(400).json({ message: 'Missing required fields or invalid testarray' });
    }

    // Check if all provided Test IDs are valid (exist in the Test collection)
    const validTests = await Test.find({ '_id': { $in: testarray } });
    
    // If the number of found tests does not match the number of IDs sent, one or more IDs are invalid
    if (validTests.length !== testarray.length) {
      return res.status(400).json({ message: 'One or more Test IDs are invalid' });
    }
    // Create a new TestType document
    const newTestType = new TestType({
      typeName,
      description,
      testarray // Store the array of valid Test IDs
    });

    // Save the new TestType to the database
    await newTestType.save();

    // Send response with the created TestType
    res.status(201).json({ message: 'TestType created successfully!', testType: newTestType });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create TestType', error: error.message });
  }
};




exports.getTestType = async (req, res) => {
  
    try {
      // Find the TestType by ID
      const testType = await TestType.find().populate('testarray'); // Populate 'testarray' with actual Test documents
  
      // If the TestType does not exist, return a 404 error
      if (!testType) {
        return res.status(404).json({ message: 'TestType not found' });
      }
  
      // Send the response with the populated TestType
      res.status(200).json({ message: 'TestType retrieved successfully!', testType });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to retrieve TestType', error: error.message });
    }
  };
  
  exports.getTestTypeById = async (req, res) => {
    const { id } = req.params; // Get the _id from request parameters
  
    try {
      // Validate the _id
      if (!id) {
        return res.status(400).json({ message: 'Missing required id parameter' });
      }
  
      // Find the TestType by _id
      const testType = await TestType.findById(id).populate('testarray'); // Populate testarray if it's a reference
  
      // If no TestType found, return an error
      if (!testType) {
        return res.status(404).json({ message: 'TestType not found' });
      }
  
      // Send the found TestType as a response
      res.status(200).json({ message: 'TestType fetched successfully', testType });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to fetch TestType', error: error.message });
    }
  };
