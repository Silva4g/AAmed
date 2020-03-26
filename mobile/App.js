import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Loading from "./src/components/Loading";
import { StoreProvider, useStore } from "./src/store/store";
import { AuthStackScreen, GuestStackScreen } from "./src/routes";

const Router = () => {
  const [store] = useStore();

  // Enquanto o processo de rehydrated não termina, a tela de loading aparece
  if (!store.rehydrated) {
    return <Loading />;
  }

  // Se tiver algo no auth(token/usuário) retorna a rota autenticada
  // caso contrário renderiza a rota de 'usuário comum'
  return store.auth ? <AuthStackScreen /> : <GuestStackScreen />;
};

export default function App() {
  return (
    <NavigationContainer>
      <StoreProvider>
        <StatusBar backgroundColor="#00000000" translucent />
        <Router />
      </StoreProvider>
    </NavigationContainer>
  );
}
