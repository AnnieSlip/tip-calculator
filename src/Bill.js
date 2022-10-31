import React from "react";
import Button from "./Button";
const tips = [5, 10, 15, 25, 50];

const Bill = ({
  tip,
  setTip,
  bill,
  setBill,
  numberOfPeople,
  setNumberOfPeople,
}) => {
  const handleChange = (e) => {
    setNumberOfPeople(e.target.value);
    numberOfPeople == 0
      ? document.getElementById("error_message").classList.remove("hidden")
      : document.getElementById("error_message").classList.add("hidden");
  };

  return (
    <section className="input__section">
      <div className="bill_input">
        <img
          src="../images/dollar.png"
          alt="dollar-icon"
          className="dollar_img"
        />

        <label htmlFor="bill">Bill</label>

        <input
          type="number"
          id="bill"
          name="bill"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>

      <div>
        <p>Select Tip %</p>
        <div className="tip_buttons">
          {tips.map((num, index) => {
            return (
              <Button
                num={num}
                key={index}
                onClick={() => setTip(num)}
                className={`tip_button ${tip === num ? "active" : ""}`}
              >
                num
              </Button>
            );
          })}
          <input
            type="number"
            id="customBillValue"
            className="custom_input"
            name="customBillValue"
            placeholder="Custom"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />
        </div>
      </div>

      <div className="number_of_people">
        <label htmlFor="numberOfPeople">Number of People</label>

        <small id="error_message" className="hidden">
          Can't be zero
        </small>

        <input
          type="number"
          id="numberOfPeople"
          name="numberOfPeople"
          value={numberOfPeople}
          onChange={handleChange}
          className={`${numberOfPeople == 0 ? "error" : ""}`}
        />
      </div>
    </section>
  );
};

export default Bill;
