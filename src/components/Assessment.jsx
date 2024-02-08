import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Assessment = () => {
  const [assessmentData, setAssessmentData] = useState({
    answers: [],
  });

  const [license, setLicense] = useState('');

  const handleRadioChange = (questionNumber, selectedOption) => {
    setAssessmentData((prevData) => ({
      ...prevData,
      answers: [
        ...prevData.answers,
        {
          questionNumber,
          selectedOption,
        },
      ],
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/save-assessment', assessmentData);

      if (response.status === 200) {
        const licenseResponse = await axios.post('http://localhost:3000/api/generate-license');

        if (licenseResponse.status === 200) {
          const { license } = licenseResponse.data;
          setLicense(license);
          alert(`Driving License Generated: ${license}`);
        } else {
          const { message } = licenseResponse.data;
          alert(`Error: ${message}`);
        }
      } else {
        const { message } = response.data;
        alert(`Error: ${message}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDownloadLicense = () => {
    const pdfBlob = new Blob([license], { type: 'application/pdf' });
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'driving_license.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ... rest of your component code

  return (
      <>
 <Navbar></Navbar>
            <div className="flex flex-col items-center justify-center w-full min-h-screen">
                <header className="py-4 md:py-6">
                    <div className="container flex items-center gap-4 px-4 md:px-6">
                        <h1 className="text-2xl font-bold">Driving Assessment</h1>
                    </div>
                </header>
                <main className="flex-1">
                    <div className="container py-6 space-y-6 md:space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-center">1. What does this road sign indicate?</h2>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q1" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        A. No parking
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q1" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        B. No stopping
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q1" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        C. No honking
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q1" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        D. No entry
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-center">2. What does this road sign indicate?</h2>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q2" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        A. Hospital ahead
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q2" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        B. School ahead
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q2" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        C. Railway crossing ahead
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q2" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        D. Traffic signal ahead
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-center">3. What does this road sign indicate?</h2>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q3" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        A. No parking
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q3" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        B. No stopping
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q3" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        C. No honking
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q3" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        D. No entry
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-center">4. What does this road sign indicate?</h2>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q4" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        A. Hospital ahead
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q4" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        B. School ahead
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q4" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        C. Railway crossing ahead
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q4" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        D. Traffic signal ahead
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-center">5. What does this road sign indicate?</h2>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q5" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        A. No parking
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q5" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        B. No stopping
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q5" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        C. No honking
                                    </span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input className="form-tick" name="q5" type="radio" />
                                    <span className="font-medium p-2 rounded-lg border border-gray-200 dark:border-gray-800">
                                        D. No entry
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
              </main>
              </div>
      <div className="container py-6 flex justify-end">
        <button
          onClick={handleSubmit}
          className="mr-2 inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        >
          Submit
        </button>
        {license && (
          <button
            onClick={handleDownloadLicense}
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          >
            Download License
          </button>
        )}
      </div>
    </>
  );
};

export default Assessment;