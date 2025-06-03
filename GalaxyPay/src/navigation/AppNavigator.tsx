import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens de autenticación y registro, esta es la entrada del app, con la pagina principal y la seleccion por parte del usuario para iniciar en caso de que ya tenga un registro o registrarse si fuere nuevo
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RegisterStep1Screen from '../screens/RegisterStep1Screen';
import RegisterStep2Screen from '../screens/RegisterStep2Screen';
import RegisterStep3Screen from '../screens/RegisterStep3Screen';
import RegisterStep4Screen from '../screens/RegisterStep4Screen';
import RegisterStep5Screen from '../screens/RegisterStep5Screen';
import RegisterStep6Screen from '../screens/RegisterStep6Screen';
import RegisterStep7Screen from '../screens/RegisterStep7Screen';
import RegisterStep8Screen from '../screens/RegisterStep8Screen';
import RegisterStep9Screen from '../screens/RegisterStep9Screen';
import LoginScreen from '../screens/LoginScreen';

// Recuperación de contraseña, aqui se vincula las pantallas de codigo de seguridad
import PasswordRecoveryScreen from '../screens/PasswordRecoveryScreen';
import VerificationCodeScreen from '../screens/VerificationCodeScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

// Asistente virtual
import AssistantWelcomeScreen from '../screens/AssistantWelcomeScreen';
import AssistantChatScreen from '../screens/AssistantChatScreen';

// Nuevo: Drawer Navigator (reemplaza HomeScreen), ya que en esta pantalla se incorpora el menu principal con sus respectivos submenues
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

// En este segmento se relaciona la navegacion por todas las pantallas del registro inicial para la creacion de las cuentas de usuario nuevas
const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="RegisterStep1" component={RegisterStep1Screen} />
      <Stack.Screen name="RegisterStep2" component={RegisterStep2Screen} />
      <Stack.Screen name="RegisterStep3" component={RegisterStep3Screen} />
      <Stack.Screen name="RegisterStep4" component={RegisterStep4Screen} />
      <Stack.Screen name="RegisterStep5" component={RegisterStep5Screen} />
      <Stack.Screen name="RegisterStep6" component={RegisterStep6Screen} />
      <Stack.Screen name="RegisterStep7" component={RegisterStep7Screen} />
      <Stack.Screen name="RegisterStep8" component={RegisterStep8Screen} />
      <Stack.Screen name="RegisterStep9" component={RegisterStep9Screen} />
      <Stack.Screen name="Login" component={LoginScreen} />

      {/* Reemplazado: Home ahora es DrawerNavigator */}
      <Stack.Screen name="Home" component={DrawerNavigator} />

      <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} />
      <Stack.Screen name="CodeVerification" component={VerificationCodeScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      
// En este segmento se ingresa el uso del asistente o chat boot con las dos pantallas principales, la de ingreso al char y la de la interaccion con el usuario
      <Stack.Screen name="AssistantWelcome" component={AssistantWelcomeScreen} />
      <Stack.Screen name="AssistantChat" component={AssistantChatScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;


