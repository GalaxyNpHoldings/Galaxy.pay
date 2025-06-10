// Importa las dependencias necesarias de React y React Native
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Componente principal de la pantalla de selección de destinatario para remesas
export default function RemesasScreen() {
  // Estado para almacenar el nombre del usuario seleccionado
  const [selected, setSelected] = useState('Pedro Picatoste Pan');
  // Estado para saber si se debe añadir el contacto a favoritos
  const [addToFavorites, setAddToFavorites] = useState(false);

  // Lista de usuarios simulada con nombre, correo y bandera del país
  const users = [
    { name: 'Pedro Picapiedra Mármol', email: 'pedrop@dominio.com', flag: '🇪🇸' },
    { name: 'Pedro Picatoste Pan', email: 'pedrop@dominio.com', flag: '🇵🇪' },
    { name: 'Pedro Picapiedra Mármol', email: 'pedrop@dominio.com', flag: '🇦🇷' },
    { name: 'Pedro Picapiedra Mármol', email: 'pedrop@dominio.com', flag: '🇲🇽' },
  ];

  // Contenedor principal con desplazamiento vertical
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>¿A Quién Quieres Enviar Dinero?</Text>

      <View style={styles.searchContainer}>
        {/* Campo de entrada de texto para buscar destinatarios */}
        <TextInput
          style={styles.searchInput}
          placeholder="Pedro Picapiedra"
          placeholderTextColor="#aaa"
        />
        <Icon name="search" size={24} color="#fff" />
      </View>

      {/* Iteración sobre la lista de usuarios */}
      {users.map((user, index) => (
        <View key={index} style={styles.userRow}>
           {/* Avatar con iniciales del usuario */}
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>PP</Text>
          </View>
          {/* Información del usuario: nombre y correo */}
          <View style={{ flex: 1 }}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
          </View>
          {/* Bandera del país del usuario */}
          <Text style={styles.flag}>{user.flag}</Text>
          {/* CheckBox para seleccionar al usuario */}
          <CheckBox
            value={selected === user.name}
            onValueChange={() => setSelected(user.name)}
          />
        </View>
      ))}

      {/* Checkbox para añadir el usuario a contactos frecuentes */}
      <View style={styles.checkboxRow}>
        <CheckBox
          value={addToFavorites}
          onValueChange={setAddToFavorites}
        />
        <Text style={styles.checkboxLabel}>
          ¿Quieres añadir los usuarios seleccionados en tus contactos habituales?
        </Text>
      </View>

      {/* Botón para continuar con el proceso */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>continuar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Estilos para los elementos visuales del componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#fff',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  avatar: {
    backgroundColor: '#555',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  userName: {
    color: '#fff',
    fontWeight: 'bold',
  },
  userEmail: {
    color: '#aaa',
    fontSize: 12,
  },
  flag: {
    fontSize: 20,
    marginRight: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  checkboxLabel: {
    color: '#fff',
    marginLeft: 8,
    flex: 1,
  },
  continueButton: {
    backgroundColor: '#e7458f',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
