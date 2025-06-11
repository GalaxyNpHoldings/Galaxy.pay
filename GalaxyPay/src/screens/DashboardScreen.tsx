// Importación de librerías principales de React y React Native
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Hook de navegación
import { Ionicons } from '@expo/vector-icons'; // Íconos de Expo
import MenuLateral from '../components/MenuLateral'; // Componente personalizado para el menú lateral

// Pantalla principal del panel de control
const DashboardScreen = () => {
  const navigation = useNavigation(); // Acceso a navegación
  const [menuVisible, setMenuVisible] = useState(false); // Estado para mostrar/ocultar menú lateral

  // Función para navegar a la pantalla del chatbot
  const handleChatbotPress = () => {
    navigation.navigate('Assistant');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Encabezado con menú, avatar y notificaciones */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Ionicons name="menu" size={28} color="#fff" />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Image source={require('../assets/avatar.png')} style={styles.avatar} />
            <View>
              <Text style={styles.greeting}>Hola, Nombre Usuario</Text>
              <Text style={styles.subGreeting}>Buenos días</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <Image source={require('../assets/notification.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* Sección de balance total y gastos */}
        <View style={styles.balanceContainer}>
          <View>
            <Text style={styles.balanceTitle}>Total Balance</Text>
            <Text style={styles.balanceAmount}>$7,783.00</Text>
            <TouchableOpacity onPress={ () => {} }> {/* TODO: Acción al presionar "Añadir saldo" */}
              <Text 
                style={{
                  color: '#E7458F',
                  textAlign: 'center',
                  marginTop: 5,
                  fontSize: 14,
                }}
              > + Añadir Saldo </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.expenseTitle}>Total Expense</Text>
            <Text style={styles.expenseAmount}>-$1.187.40</Text>
            <TouchableOpacity onPress={ () => {} }> {/* TODO: Acción al presionar "Enviar" */}
              <Text 
                style={{
                  color: '#F0813A',
                  textAlign: 'center',
                  marginTop: 5,
                  fontSize: 14,
                }}
              > Enviar </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Scroll horizontal para mostrar tarjetas bancarias */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsScroll}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Nombre de usuario</Text>
            <Text style={styles.cardInfo}>IBAN ES12 3456 7890 1234 5678 9012</Text>
            <Text style={styles.cardBalance}>Saldo: 1.405,50 €</Text>
          </View>
        </ScrollView>

        {/* Encabezado de la sección de movimientos */}
        <View style={styles.movementsHeader}>
          <Text style={styles.movementsTitle}>movimientos</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>ver más</Text>
          </TouchableOpacity>
        </View>

        {/* Lista vertical de movimientos recientes */}
        <ScrollView style={styles.movementsList}>
          <View style={styles.movementItem}>
            <Image source={require('../assets/icon-airbnb.png')} style={styles.movementIcon} />
            <View>
              <Text style={styles.movementTitle}>Airbnb</Text>
              <Text style={styles.movementDate}>18:27 - April 30</Text>
            </View>
            <Text style={styles.movementAmount}>$4.000,00</Text>
          </View>
          <View style={styles.movementItem}>
            <Image source={require('../assets/icon-burger.png')} style={styles.movementIcon} />
            <View>
              <Text style={styles.movementTitle}>Burguer King</Text>
              <Text style={styles.movementDate}>17:00 - April 24</Text>
            </View>
            <Text style={styles.movementAmount}>-$100,00</Text>
          </View>
          <View style={styles.movementItem}>
            <Image source={require('../assets/icon-rent.png')} style={styles.movementIcon} />
            <View>
              <Text style={styles.movementTitle}>Rent</Text>
              <Text style={styles.movementDate}>8:30 - April 15</Text>
            </View>
            <Text style={styles.movementAmount}>-$674,40</Text>
          </View>
        </ScrollView>

        {/* Menú de navegación inferior fijo */}
        <View style={styles.bottomMenu}>
          <TouchableOpacity>
            <Image source={require('../assets/icon-home.png')} style={styles.menuIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/icon-activity.png')} style={styles.menuIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleChatbotPress}>
            <Image source={require('../assets/icon-galaxy.png')} style={styles.menuIconCenter} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/icon-wallet.png')} style={styles.menuIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/icon-settings.png')} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>

        {/* Componente de menú lateral (drawer) */}
        <MenuLateral
          visible={menuVisible}
          onClose={() => setMenuVisible(false)}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

{/* Estilos utilizados en la página */}
export default DashboardScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  subGreeting: {
    color: '#bbb',
    fontSize: 12,
  },
  notificationIcon: {
    marginLeft: 'auto',
  },
  icon: {
    width: 20,
    height: 20,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  balanceTitle: {
    color: '#fff',
    fontSize: 14,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  expenseTitle: {
    color: '#ffa94d',
    fontSize: 14,
    textAlign: 'right',
  },
  expenseAmount: {
    color: '#ffa94d',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardsScroll: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#2c2c2e',
    borderRadius: 12,
    padding: 20,
    marginRight: 15,
    width: 280,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  cardInfo: {
    color: '#bbb',
    fontSize: 12,
    marginVertical: 4,
  },
  cardBalance: {
    color: '#e54690',
    fontWeight: '600',
  },
  movementsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  movementsTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  viewMore: {
    color: '#e54690',
  },
  movementsList: {
    flex: 1,
  },
  movementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  movementIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  movementTitle: {
    color: '#fff',
    fontSize: 14,
  },
  movementDate: {
    color: '#aaa',
    fontSize: 12,
  },
  movementAmount: {
    marginLeft: 'auto',
    color: '#fff',
    fontWeight: '600',
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#2c2c2e',
    paddingVertical: 10,
  },
  menuIcon: {
    width: 28,
    height: 28,
  },
  menuIconCenter: {
    width: 40,
    height: 40,
  },
});

