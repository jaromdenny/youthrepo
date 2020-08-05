import React, { useState } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");

  function getGender(ref) {
    //setGender("male");
    //return input.concat(" is the name");
    fetch("https://api.genderize.io?name=" + ref)
      .then(response => response.json())
      .then(data => {
        setGender(data.gender);
      });
  }

  function getAge(ref) {
    //setGender("male");
    //return input.concat(" is the name");
    fetch("https://api.agify.io?name=" + ref)
      .then(response => response.json())
      .then(data => {
        setAge(data.age);
      });
  }

  function getNationality(ref) {
    //setGender("male");
    //return input.concat(" is the name");
    fetch("https://api.nationalize.io?name=" + ref)
      .then(response => response.json())
      .then(data => {
        setNationality(data.country[0].country_id);
      });
  }

  function handleClick() {
    getGender(name);
    getAge(name);
    getNationality(name);
  }
  //function handleChange(e) {e => setName(e.target.value)}
  return (
    <div className="App">
      <h4>Test your Name</h4>
      <p>Weird things might happen</p>
      <p>Input your name</p>
      <div className="row">
        <div className="input-field col s6 offset-s3">
          <input
            placeholder=""
            id="first_name"
            type="text"
            className="validate"
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="first_name">Your Name</label>
        </div>
      </div>
      <br />
      <h2>My name is: {name}</h2>
      <a className="waves-effect waves-light btn" onClick={() => handleClick()}>
        button
      </a>
      <p>My gender is most likely: {gender}</p>
      <p>My gender is most likely: {age}</p>
      <p>My gender is most likely: {nationality}</p>
    </div>
  );
}
