import React from "react";

const Amount = ({
  bill,
  tip,
  numberOfPeople,
  setTip,
  setBill,
  setNumberOfPeople,
}) => {
  let personTip = 0;
  let total = 0;

  if (bill && tip && numberOfPeople) {
    personTip = (Number(bill) * Number(tip)) / 100 / Number(numberOfPeople);
    total =
      Number(bill) / Number(numberOfPeople) +
      personTip * Number(numberOfPeople);
  }
  const handleclick = () => {
    setTip("");
    setNumberOfPeople("1");
    setBill("");
    personTip = 0.0;
    total = 0.0;
  };
  return (
    <section>
      <div className="amount__section">
        <div className="tip__amount">
          <div>
            <h4>Tip Amount</h4>
            <small>/person</small>
          </div>

          <p className="amount">$ {personTip}</p>
        </div>

        <div className="tip__amount">
          <div>
            <h4>Total</h4>
            <small>/person</small>
          </div>
          <p className="amount"> $ {total}</p>
        </div>
        <button type="button" className="reset__btn" onClick={handleclick}>
          reset
        </button>
      </div>
    </section>
  );
};

export default Amount;