import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function MovimientosDetallesScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hola, Nombre Usuario</Text>
          <Text style={styles.subtitle}>Buenos días</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Detalle de los movimientos */}
      <View style={styles.card}>
        <Text style={styles.title}>Detalle de los movimientos</Text>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.tab}>
            <Ionicons name="time-outline" size={18} color="#fff" />
            <Text style={styles.tabText}>Actualizaciones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabActive}>
            <Ionicons name="document-text-outline" size={18} color="#fff" />
            <Text style={styles.tabTextActive}>Detalles</Text>
          </TouchableOpacity>
        </View>

        {/* Encabezado del movimiento */}
        <View style={styles.movementHeader}>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons name="hamburger" size={22} color="#fff" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.movementTitle}>Burguer King</Text>
            <Text style={styles.movementDate}>17:00 - April 24</Text>
          </View>
        </View>

        {/* Detalles */}
        <View style={styles.detailRow}>
          <Text style={styles.label}>Tienes que pagar</Text>
          <Text style={styles.value}>25,14 EUR</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Nuestra comisión</Text>
          <Text style={styles.value}>0,40 EUR</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.detailRow}>
          <Text style={styles.totalLabel}>En total pagas</Text>
          <Text style={styles.totalValue}>25,54 EUR</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Número de transacción</Text>
          <Text style={styles.txId}>#193740634</Text>
        </View>

        {/* Botón PDF */}
        <TouchableOpacity style={styles.pdfButton}>
          <Text style={styles.pdfButtonText}>Obtener comprobante en PDF</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#aaa',
    fontSize: 14,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#e7458f',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#444',
  },
  tabActive: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#8c4fe6',
  },
  tabText: {
    color: '#ccc',
    marginLeft: 5,
  },
  tabTextActive: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  movementHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconBox: {
    backgroundColor: '#e7458f',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  movementTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  movementDate: {
    color: '#aaa',
    fontSize: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  label: {
    color: '#ccc',
  },
  value: {
    color: '#ccc',
  },
  totalLabel: {
    color: '#f0813a',
    fontWeight: 'bold',
  },
  totalValue: {
    color: '#f0813a',
    fontWeight: 'bold',
  },
  txId: {
    color: '#888',
    fontSize: 13,
  },
  separator: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 10,
  },
  pdfButton: {
    backgroundColor: '#e7458f',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  pdfButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
