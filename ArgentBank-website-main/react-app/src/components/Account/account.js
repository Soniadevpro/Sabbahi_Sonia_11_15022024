import React from "react";

const Account = ({ accountType, accountNumber, amount, description }) => (
  <section className="account">
    <div className="account-content-wrapper">
      <h3 className="account-title">{`${accountType} (${accountNumber})`}</h3>
      <p className="account-amount">{amount}</p>
      <p className="account-amount-description">{description}</p>
    </div>
    <div className="account-content-wrapper cta">
      <button className="transaction-button">View transactions</button>
    </div>
  </section>
);

const AccountsOverview = () => (
  <div>
    <main>
      <h2 className="sr-only">Accounts</h2>
      <Account accountType="Argent Bank Checking" accountNumber="x8349" amount="$2,082.79" description="Available Balance" />
      <Account accountType="Argent Bank Savings" accountNumber="x6712" amount="$10,928.42" description="Available Balance" />
      <Account accountType="Argent Bank Credit Card" accountNumber="x8349" amount="$184.30" description="Current Balance" />
    </main>
  </div>
);

export default AccountsOverview;
