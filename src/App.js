import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [ageErrorMessage, setAgeErrorMessage] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [institute, setInstitute] = useState("");
  const [study, setStudy] = useState("");
  const [experience, setExperience] = useState("");
  const [goals, setGoals] = useState("");
  const [scores, setScores] = useState("");
  const [reading, setReading] = useState("");
  const [speaking, setSpeaking] = useState("");
  const [writing, setWriting] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    // Email validation regex pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(enteredEmail)) {
      setEmailErrorMessage("Must be a valid email");
    } else {
      setEmailErrorMessage("");
    }
  };

  const handleAgeChange = (e) => {
    const enteredAge = e.target.value;
    setAge(enteredAge);

    // Age validation: Check if it's a number and within a certain range
    if (!/^\d+$/.test(enteredAge) || enteredAge < 0 || enteredAge > 150) {
      setAgeErrorMessage("Enter a valid age");
    } else {
      setAgeErrorMessage("");
    }
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const response = await fetch("http://localhost:3001/postUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          fullName,
          age,
          educationLevel,
          institute,
          study,
          experience,
          goals,
          scores,
          reading,
          speaking,
          writing,
        }),
      });
      console.log(response);
      console.log(response.body);
      function resetField() {
        setEmail("");
        setEmailErrorMessage("");
        setFullName("");
        setAge("");
        setAgeErrorMessage("");
        setEducationLevel("");
        setInstitute("");
        setStudy("");
        setExperience("");
        setGoals("");
        setScores("");
        setReading("");
        setSpeaking("");
        setWriting("");
      }

      if (response.ok) {
        // Successful submission
        resetField();
        alert("Form data submitted successfully");
      } else {
        // Handle errors
        console.error("Form data submission failed");
      }
      setIsSubmitting(false); // Submission complet
    } catch (error) {
      setIsSubmitting(false); // Submission failed
      console.error("An error occurred while submitting form data:", error);
    }
  };

  return (
    <div className="App">
      <div className="container">
       

        <div className="main">
          <h1>User Registration:</h1>
          <p>
            Fill this questionnaire for the user. After submitting, you will
            receive an email at the email address that you have provided with a
            Statement of Purpose customized for you. You can use and modify that
            as per your needs.
          </p>
          <p>
            If you would like to get it edited, reviewed, or drafted by our
            experts, you can get in touch with us:
            <a
              href="https://api.onepgr.com/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              ONEPGR.
            </a>
          </p>
        </div>
        <div className="form-container">
          <div className="form-box">
            <label className="form-label" htmlFor="email">
              Email<span className="required-star">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
            {emailErrorMessage && (
              <p className="error-message">
                <span className="error-icon">!</span>
                {emailErrorMessage}
              </p>
            )}
          </div>
        </div>
        <div className="form-box">
          <label className="form-label" htmlFor="fullName">
            Full Name<span className="required-star">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="form-input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-box">
          <label className="form-label" htmlFor="age">
            Age<span className="required-star">*</span>
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="form-input"
            value={age}
            onChange={handleAgeChange}
            placeholder="Enter your age"
            required
          />
          {ageErrorMessage && (
            <p className="error-message">
              <span className="error-icon">!</span>
              {ageErrorMessage}
            </p>
          )}
        </div>
      </div>
      <div className="form-box">
        <label className="form-label" htmlFor="educationLevel">
          Highest Level of Education<span className="required-star">*</span>
        </label>
        <select
          id="educationLevel"
          name="educationLevel"
          className="form-input"
          value={educationLevel}
          onChange={(e) => setEducationLevel(e.target.value)}
          required
        >
          <option value="">Select...</option>
          <option value="Grade 12">Grade 12</option>
          <option value="Diploma">Diploma</option>
          <option value="Bachelors Degree">Bachelors Degree</option>
          <option value="Masters Degree">Masters Degree</option>
          <option value="PGD">PGD</option>
        </select>
      </div>

      <div className="form-box">
        <label className="form-label" htmlFor="institute">
          Institute where you completed your highest level of education
          <span className="required-star">*</span>
        </label>
        <input
          type="text"
          id="institute"
          name="institute"
          className="form-input"
          value={institute}
          onChange={(e) => setInstitute(e.target.value)}
          placeholder="Your answer"
          required
        />
      </div>
      <div className="form-box">
        <label className="form-label" htmlFor="institute">
          What did you study<span className="required-star">*</span>
        </label>
        <input
          type="text"
          id="institute"
          name="institute"
          className="form-input"
          value={study}
          onChange={(e) => setStudy(e.target.value)}
          placeholder="Your answer"
          required
        />
      </div>
      <div className="form-box">
        <label className="form-label" htmlFor="institute">
          Do you have any relevant work experience?{" "}
          <span className="required-star">*</span>
        </label>
        <p>
          Write None if no work experience. Provide the following details if
          yes:
          <br />
          <br />
          1.Job Title <br />
          2.Company Name <br />
          3.Job duties
          <br />
          <br />
          Sample Answer: I worked as a Fullstack Devloper at ONEPGR from Jan 2022 till Feb 2023. 
        </p>
        <input
          type="text"
          id="institute"
          name="institute"
          className="form-input"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Your answer"
          required
        />
      </div>
      <div className="form-box">
        <label className="form-label" htmlFor="institute">
          What are your future goals?<span className="required-star">*</span>
        </label>
        <input
          type="text"
          id="institute"
          name="institute"
          className="form-input"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          placeholder="Your answer"
          required
        />
      </div>
      <div className="form-box">
        <label className="form-label" htmlFor="institute">
          English Scores - Listening?<span className="required-star">*</span>
        </label>
        <input
          type="text"
          id="institute"
          name="institute"
          className="form-input"
          value={scores}
          onChange={(e) => setScores(e.target.value)}
          placeholder="Your answer"
          required
        />
      </div>
      <div className="form-box">
        <label className="form-label" htmlFor="institute">
          English Scores - Reading?<span className="required-star">*</span>
        </label>
        <input
          type="text"
          id="institute"
          name="institute"
          className="form-input"
          value={reading}
          onChange={(e) => setReading(e.target.value)}
          placeholder="Your answer"
          required
        />
      </div>

      <div className="form-box">
        <label className="form-label" htmlFor="institute">
          English Scores - Speaking?<span className="required-star">*</span>
        </label>
        <input
          type="text"
          id="institute"
          name="institute"
          className="form-input"
          value={speaking}
          onChange={(e) => setSpeaking(e.target.value)}
          placeholder="Your answer"
          required
        />
      </div>

      <div className="form-box">
        <label className="form-label" htmlFor="institute">
          English Scores - Writing?<span className="required-star">*</span>
        </label>
        <input
          type="text"
          id="institute"
          name="institute"
          className="form-input"
          value={writing}
          onChange={(e) => setWriting(e.target.value)}
          placeholder="Your answer"
          required
        />
      </div>
      {isSubmitting ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <button
          type="button"
          className="blue-button"
          onClick={handleSubmit}
          disabled={isSubmitting} 
        >
          Submit
        </button>
      )}
    </div>
  );
}

export default App;
