//no arquivo de Rotas deve ter
<Route path="/confirm/:mailToken" component={Forgot} />;

//ai nesse component 'Forgot'
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";
import "./styles.css";

export default function Forgot({ match }) {
  const history = useHistory();
  const [error, setError] = useState("");
  const [modalError, setModalError] = useState("");
  const [password, setPassword] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(null);

  //FAZER A VERIFICAÇÃO SE ELE ESTÁ LOGADO

  useEffect(() => {
    async function verify() {
      try {
        const response = await api.post(
          `/verify/${match.params.mailToken}`,
          null,
          {
            headers: { email: localStorage.getItem("user_email") },
          }
        );
        console.log(response);
      } catch (error) {
        if (error.response.data.error) {
          setModalError(true);
          setError(error.response.data.error || error);
          setTimeout(() => {
            setModalError(false);
            history.push("/");
          }, 8000);
        }
      }
    }
    verify();
  }, [match.params.mailToken]);

  async function resetPassword() {
    try {
      await api.post("/reset", {
        email: localStorage.getItem("user_email"),
        token: match.params.mailToken,
        password,
      });
      setAlertSuccess(true);
      setTimeout(() => {
        setAlertSuccess(false);
        history.push(`/user/home/${localStorage.getItem("user_id")}`);
      }, 5000);
    } catch (error) {
      console.log(error.response.data.error || error);
    }
  }

  return (
    <div>
      {modalError ? (
        <div className="error">{error}</div>
      ) : alertSuccess ? (
        <div>Senha alterada com sucesso!</div>
      ) : (
        <div className="reset-pass">
          <p>Nova senha:</p>
          <input
            type="password"
            placeholder="Sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button onClick={resetPassword}>Mudar senha</button>
        </div>
      )}
    </div>
  );
}
