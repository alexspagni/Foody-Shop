import React from "react";

const InviaEmail = () => { //Blocco NEWSLETTER
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>NEWSLETTER</h2>
              <p>Inserisci la tua mail e resta aggiornato sulle ultime offerte</p>
              <form className="form-section">
                <input placeholder="La tua Email..." name="email" type="email" />
                <input value="INVIA" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviaEmail;
