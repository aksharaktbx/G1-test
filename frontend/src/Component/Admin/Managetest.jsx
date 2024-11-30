import React, { useState, useEffect } from 'react';
import CustomTable from '../Custom/Customtable';
import SmallCustomtable from '../Custom/SmallCustomtable';
import Custompopup from '../Custom/Custompopup';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

const Managetest = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isLevelPopupOpen, setIsLevelPopupOpen] = useState(false); // State for level popup
    const [isTitlePopupOpen, setIsTitlePopupOpen] = useState(false); // State for title popup
    const [newTestName, setNewTestName] = useState('');
    const [newTestLevel, setNewTestLevel] = useState(''); // State for test level
    const [newTestTitleName, setNewTestTitleName] = useState(''); // State for title name
    const [newTestTitleDescription, setNewTestTitleDescription] = useState(''); // State for title description
    const [testnamedata, setTestnamedata] = useState([]);
    const [testleveldata, setTestleveldata] = useState([]); // State for storing test levels
    const [testtitledata, setTesttitledata] = useState([]); // State for storing test titles
    const [isPopupOpen2, setIsPopupOpen2] = useState(false);  // State for popup visibility
    const [typeName, setTypeName] = useState('');  // State for test name
    const [description, setDescription] = useState('');  // State for description
    const [loading, setLoading] = useState(false);

    // Define table columns
    const columns = [
        { id: 'id', label: 'ID' },
        { id: 'questionText', label: 'Question' },
        { id: 'image', label: 'Image' },
        { id: 'options', label: 'Options' },
        { id: 'correctAnswer', label: 'Correct Answer' },
        { id: 'category', label: 'Category' },
        { id: 'actions', label: 'Actions' },
    ];

    const columns1 = [
        { accessor: 'id', Header: 'Sr' },
        { accessor: 'testName', Header: 'Test Name' },
        { accessor: 'actions', Header: 'Actions' }
    ];

    const levelColumns = [
        { accessor: 'id', Header: 'Sr' },
        { accessor: 'testName', Header: 'Test Name' },

        { accessor: 'levelName', Header: 'Test Level Name' },
        
        { accessor: 'actions', Header: 'Actions' }
    ];

    const titleColumns = [
        { accessor: 'id', Header: 'Sr' },
        { accessor: 'testName', Header: 'Test Name' },

        { accessor: 'levelName', Header: 'Test Level Name' },
        { accessor: 'titleName', Header: 'Test Title Name' },
        { accessor: 'titleDescription', Header: 'Description' },
        { accessor: 'actions', Header: 'Actions' }
    ];

    // Fetch Test Names, Test Levels, and Test Titles from the server
    const fetchTestData = async () => {
        try {
            const testNamesResponse = await axios.get('http://localhost:5000/test-name');
          
            const testNames = testNamesResponse.data.data.map((test, index) => ({
                id: index + 1,
                _id: test._id,
                testName: test.testName,
                actions: (
                    <button onClick={() => deleteTestName(test._id)}>
                        <FaTrash />
                    </button>
                )
            }));
            setTestnamedata(testNames);
            const testLevelsResponse = await axios.get('http://localhost:5000/test-level');


            const testLevels = testLevelsResponse.data.data.map((level, index) => ({
                id: index + 1,
                _id: level._id,
                testName:level.testName.testName,
                levelName: level.testLevelName,
                actions: (
                    <button onClick={() => deleteTestLevel(level._id)}>
                        <FaTrash />
                    </button>
                )
            }));
            setTestleveldata(testLevels);
            const testTitlesResponse = await axios.get('http://localhost:5000/test-title');

            const testTitles = testTitlesResponse.data.data.map((title, index) => ({
                id: index + 1,
                _id: title._id,
                testName:title.testLevel.testName.testName,
                levelName:title.testLevel.testLevelName,
                titleName: title.testTitleName,
                titleDescription: title.testTitleDescription,
                actions: (
                    <button onClick={() => deleteTestTitle(title._id)}>
                        <FaTrash />
                    </button>
                )
            }));
            setTesttitledata(testTitles);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    useEffect(() => {
        fetchTestData();
    }, []);

    const togglePopup4 = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const toggleLevelPopup = () => {
        setIsLevelPopupOpen(!isLevelPopupOpen);
    };

    const toggleTitlePopup = () => {
        setIsTitlePopupOpen(!isTitlePopupOpen);
    };

    const handleAddTestName = async () => {
        if (!newTestName.trim()) {
            alert('Test Name cannot be empty!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/test-name', { testName: newTestName });
            if (response.status === 201) {
                alert('Test Name added successfully!');
                togglePopup4();
                setNewTestName('');
                fetchTestData(); // Refresh data after adding
            }
        } catch (error) {
            console.error('Error adding Test Name:', error);
            alert('Failed to add Test Name. Please try again.');
        }
    };

    const handleAddTestLevel = async () => {
        if (!newTestLevel.trim() || !newTestName) {
            alert('Test Level Name and Test Name cannot be empty!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/test-level', {
                testLevelName: newTestLevel,
                testName: newTestName
            });
            if (response.status === 201) {
                alert('Test Level added successfully!');
                toggleLevelPopup();
                setNewTestLevel('');
                fetchTestData(); // Refresh data after adding
            }
        } catch (error) {
            console.error('Error adding Test Level:', error);
            alert('Failed to add Test Level. Please try again.');
        }
    };

    const handleAddTestTitle = async () => {
        if (!newTestTitleName.trim() || !newTestTitleDescription.trim() || !newTestLevel) {
            alert('Test Title Name, Description, and Test Level cannot be empty!');
            return;
        }

        console.log("testTitleName", newTestTitleName )
        console.log('testTitleDescription' ,newTestTitleDescription)
        console.log('testLevel' ,newTestLevel)

        try {
            const response = await axios.post('http://localhost:5000/test-title', {
                testTitleName: newTestTitleName,
                testTitleDescription: newTestTitleDescription,
                testLevel: newTestLevel
            });
            if (response.status === 201) {
                alert('Test Title added successfully!');
                toggleTitlePopup();
                setNewTestTitleName('');
                setNewTestTitleDescription('');
                fetchTestData(); // Refresh data after adding
            }
        } catch (error) {
            console.error('Error adding Test Title:', error);
            alert('Failed to add Test Title. Please try again.');
        }
    };

    const deleteTestName = async (testId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/test-name/${testId}`);
            if (response.status === 200) {
                alert('Test Name deleted successfully');
                fetchTestData(); // Refresh data after deleting
            }
        } catch (err) {
            console.error('Error deleting test name:', err);
            alert('Failed to delete Test Name');
        }
    };

    const deleteTestLevel = async (levelId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/test-level/${levelId}`);
            if (response.status === 200) {
                alert('Test Level deleted successfully');
                fetchTestData(); // Refresh data after deleting
            }
        } catch (err) {
            console.error('Error deleting test level:', err);
            alert('Failed to delete Test Level');
        }
    };

    const deleteTestTitle = async (titleId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/test-title/${titleId}`);
            if (response.status === 200) {
                alert('Test Title deleted successfully');
                fetchTestData(); // Refresh data after deleting
            }
        } catch (err) {
            console.error('Error deleting test title:', err);
            alert('Failed to delete Test Title');
        }
    };

    const data = []; // Table data (could be fetched from an API)

    // Function to handle the "Add Test Name" button click
    const togglePopup = () => {
        setIsPopupOpen2(!isPopupOpen2);
    };

    // Function to handle form submission for adding a new TestName
    const handleAddTestType = async () => {
        if (!typeName) {
            alert('Test Name is required!');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/test-name', {
                testName: typeName,
                description,
            });

            if (response.status === 201) {
                alert('Test Name added successfully!');
                setTypeName('');
                setDescription('');
                togglePopup(); // Close the popup after successful submission
            }
        } catch (error) {
            console.error('Error adding Test Name:', error);
            alert('Failed to add Test Name');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div>
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold pb-2 text-blue-600 mb-2">Manage Test</h1>
                    <div className='flex gap-2'>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                            onClick={togglePopup}
                        >
                            Add Test Name
                        </button>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                            onClick={togglePopup4}
                        >
                            Add Test Level
                        </button>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                            onClick={toggleTitlePopup}
                        >
                            Add Test Title
                        </button>
                    </div>
                </div>

                <CustomTable columns={columns} data={data} />
            </div>

            {/* Custom Popup for Adding Test Name */}
            {isPopupOpen2 && (
                <Custompopup onClose={togglePopup} title="Add Test Name" handleSubmit={handleAddTestType}>
                    <div className="mb-4">
                        <SmallCustomtable columns={columns1} data={testnamedata} />
                    </div>
                    <input
                        type="text"
                        value={typeName}
                        onChange={(e) => setTypeName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Enter Test Name"
                    />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md mt-2"
                        placeholder="Enter Test Description (optional)"
                    />
                </Custompopup>
            )}

            {/* Popup for Adding Test Level */}
            {isPopupOpen && (
                <Custompopup onClose={togglePopup4} title="Add Test Level" handleSubmit={handleAddTestLevel}>
                    <div className="mb-4">
                        <SmallCustomtable columns={levelColumns} data={testleveldata} />
                    </div>
                    <input
                        type="text"
                        value={newTestLevel}
                        onChange={(e) => setNewTestLevel(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Enter new test level name"
                    />
                    <select
                        value={newTestName}
                        onChange={(e) => setNewTestName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md mt-2"
                    >
                        <option value="">Select Test Name</option>
                        {testnamedata.map((test) => (
                            <option key={test.id} value={test._id}>
                                {test.testName}
                            </option>
                        ))}
                    </select>
                </Custompopup>
            )}

            {/* Popup for Adding Test Title */}
            {isTitlePopupOpen && (
                <Custompopup onClose={toggleTitlePopup} title="Add Test Title" handleSubmit={handleAddTestTitle}>
                    <div className="mb-4">
                        <SmallCustomtable columns={titleColumns} data={testtitledata} />
                    </div>
                    <input
                        type="text"
                        value={newTestTitleName}
                        onChange={(e) => setNewTestTitleName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Enter new test title name"
                    />
                    <textarea
                        value={newTestTitleDescription}
                        onChange={(e) => setNewTestTitleDescription(e.target.value)}
                        className="w-full px-4 py-2 mt-2 border rounded-md"
                        placeholder="Enter test title description"
                    />
                    <select
                        value={newTestLevel}
                        onChange={(e) => setNewTestLevel(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md mt-2"
                    >
                        <option value="">Select Test Level</option>
                        {testleveldata.map((level) => (
                            <option key={level.id} value={level._id}>
                                {level.levelName}
                            </option>
                        ))}
                    </select>
                </Custompopup>
            )}
        </>
    );
};

export default Managetest;