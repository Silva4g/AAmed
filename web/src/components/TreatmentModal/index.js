import React from "react";

import "./styles.css";

export default function TreatmentModal({
  name,
  phone,
  email,
  username,
  bio,
  date,
}) {
  return (
    <>
      <div className="modal-treatment">
        <div>
          <div>
            <h2>Hospital:</h2>
            <h2>Telefone:</h2>
            <h2>E-mail:</h2>
            <h2>Usuário atendido:</h2>
            <h2>Bio do usuário:</h2>
            <h2>Hora e data:</h2>
          </div>
          <div>
            <h2>{name}</h2>
            <h2>{phone}</h2>
            <h2>{email}</h2>
            <h2>{username}</h2>
            <h2 style={{ paddingTop: 20 }}>{bio}</h2>
            <h2>{date}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
