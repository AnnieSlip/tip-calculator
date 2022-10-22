import React from "react";
import Button from "./Button";

const Bill = ({
  tip,
  setTip,
  bill,
  setBill,
  numberOfPeople,
  setNumberOfPeople,
}) => {
  const tips = [5, 10, 15, 25, 50];

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
          type="text"
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
            type="text"
            id="customBillValue"
            className="custom_input"
            name="customBillValue"
            placeholder="Custom"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="numberOfPeople">Number of People</label>
        <input
          type="text"
          id="numberOfPeople"
          name="numberOfPeople"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
          className={`${numberOfPeople == 0 ? "error" : ""}`}
        />
      </div>
    </section>
  );
};

export default Bill;
