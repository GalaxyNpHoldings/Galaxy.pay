import React from "react";
import { Alert, Pressable, Text } from "react-native";
import ReactNativeBiometrics from "react-native-biometrics";

export default function BiometryAuth() {
  const handleAuth = async () => {
    const rnBiometrics = new ReactNativeBiometrics();

    // Verifica si el dispositivo soporta biometría y si está configurada
    const { available, biometryType } = await rnBiometrics.isSensorAvailable();

    if (!available) {
      Alert.alert(
        "Error",
        "Tu dispositivo no soporta autenticación biométrica o no está configurada."
      );
      return;
    }

    try {
      // Ejecuta la autenticación biométrica
      const result = await rnBiometrics.simplePrompt({
        promptMessage: "Autenticación - Galaxy Pay",
        fallbackPromptMessage: "Usar contraseña",
      });

      if (result.success) {
        Alert.alert("Éxito", "Autenticación exitosa");
      } else {
        Alert.alert("Error", "No se pudo autenticar");
      }
    } catch (error) {
      Alert.alert("Error", "Autenticación cancelada o fallida");
    }
  };

  return (
    <Pressable style={{ marginTop: 100 }} onPress={handleAuth}>
      <Text>Iniciar con huella</Text>
    </Pressable>
  );
}
