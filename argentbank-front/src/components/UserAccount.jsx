import PropTypes from "prop-types";
import "../styles/userAccount.css";

function UserAccount(props) {
  return (
    //Je récupère mes éléments
    //en fonction des props, c'est à dire des
    //informations passées au composant

    //Méthode map appliquée dans le fichier userAccountData.jsx
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{props.title}</h3>
        <p className="account-amount">{props.amount}</p>
        <p className="account-amount-description">{props.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

export default UserAccount;

UserAccount.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
