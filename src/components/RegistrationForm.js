import React from "react";

export default function RegistrationForm(props) {
  const matchPassword = () => {
    const form = document.getElementById("myForm");
    const requiredFields = form.querySelectorAll("[required]");
    let allFieldsFilled = true;

    requiredFields.forEach((field) => {
      if (!field.value) {
        allFieldsFilled = false;
      } else if (field.type === "radio") {
        const radioGroup = form.querySelectorAll(`[name=${field.name}]`);
        allFieldsFilled = Array.from(radioGroup).some((radio) => radio.checked);
      }
    });

    if (!allFieldsFilled) {
      alert("Please fill all required fields.");
      return;
    }

    const password = document.getElementById("pw1")?.value;
    const confirmPassword = document.getElementById("pw2")?.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
    } else {
      alert("Registration completed successfully!");
      console.log(props.data);
      form.reset(); // Optionally reset the form after successful submission.
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    matchPassword();
  };

  return (
    <form id="myForm" className="container" onSubmit={handleSubmit}>
      <div>
        <b>Firstname:</b>
        <input
          type="text"
          name="fname"
          placeholder="Your first name"
          onChange={props.handleInputChange}
          required
        />
      </div>
      <div>
        <b>Middlename:</b>
        <input
          type="text"
          name="mname"
          placeholder="Your middle name"
          onChange={props.handleInputChange}
        />
      </div>
      <div>
        <b>Lastname:</b>
        <input
          type="text"
          name="lname"
          placeholder="Your last name"
          onChange={props.handleInputChange}
          required
        />
      </div>
      <div>
        <b>Course:</b>
        <select name="course" onChange={props.handleInputChange} required>
          <option value="">Choose a course</option>
          <option value="hindi">Hindi</option>
          <option value="english">English</option>
          <option value="maths">Maths</option>
        </select>
      </div>
      <div>
        <b>Gender:</b>
        <div onChange={props.handleInputChange}>
          <label>
            <input type="radio" name="gender" value="male" required /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" required /> Female
          </label>
          <label>
            <input type="radio" name="gender" value="other" required /> Other
          </label>
        </div>
      </div>
      <div>
        <b>Phone:</b>
        <input
          type="text"
          name="phone"
          maxLength={10}
          onChange={props.handleInputChange}
        />
      </div>
      <div>
        <b>Address:</b>
        <textarea
          name="address"
          rows="4"
          cols="50"
          placeholder="Your address"
          onChange={props.handleInputChange}
        ></textarea>
      </div>
      <div>
        <b>Email:</b>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          onChange={props.handleInputChange}
          required
        />
      </div>
      <div>
        <b>Password:</b>
        <input
          type="password"
          name="password"
          id="pw1"
          minLength={5}
          placeholder="Enter password"
          onChange={props.handleInputChange}
          required
        />
      </div>
      <div>
        <b>Confirm Password:</b>
        <input
          type="password"
          name="pw2"
          id="pw2"
          minLength={5}
          placeholder="Re-enter password"
          required
        />
      </div>
      <div>
        <b>Date of Birth:</b>
        <input
          type="date"
          name="dob"
          onChange={props.handleInputChange}
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
