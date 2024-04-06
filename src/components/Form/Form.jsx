import { useState } from "react";
import styles from "./Form.module.scss";

const Form = () => {
  const [result, setResult] = useState("");
  const [showError, setShowError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { amount, currency } = e.currentTarget.elements;

    const formData = {
      amount: amount.value,
      code: currency.value,
    };

    const viewError = () => {
      setResult("");
      setShowError("Nie udało się pobrać kursu waluty!");
    };

    const API_URL = "https://api.nbp.pl/api/exchangerates/rates/A";

    fetch(`${API_URL}/${formData.code}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.rates.length > 0 && data.rates[0].mid) {
          const exchangeRate = data.rates[0].mid;
          const resultExchange = formData.amount * exchangeRate;
          setResult(`${resultExchange.toFixed(2)} PLN`);
          setShowError("");
        } else {
          viewError();
        }
      })
      .catch(() => {
        viewError();
      });
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleFormSubmit}>
      <div className={styles.dataWrapper}>
        <input
          name="amount"
          className={styles.inputPlace}
          type="number"
          placeholder="wpisz wartość PLN"
          required
          min="0.01"
          step="0.01"
        />
        <select className={styles.selectPlace} name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="CHF">CHF</option>
        </select>
        <button className={styles.btn} type="submit">
          Przelicz
        </button>
      </div>

      <div>
        <div className={styles.outcomeScore}>{result}</div>
        <div className={styles.outcomeError}>{showError}</div>
      </div>
    </form>
  );
};

export default Form;
