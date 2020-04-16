import { Component } from "react";
import api from "../../services/api";

export default class Logout extends Component {
  componentWillMount() {
    async function logout() {
      await api.get("/hospital/logout", { withCredentials: true });
      window.location.href = "/";
    }
    logout();
  }
  render() {
    return null;
  }
}
