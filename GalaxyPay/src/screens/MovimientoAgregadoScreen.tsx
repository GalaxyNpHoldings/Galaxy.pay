import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MovimientoAgregadoScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hola, Nombre Usuario</Text>
          <Text style={styles.subtitle}>Buenos días</Text>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>20</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tarjeta de movimiento */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Movimientos</Text>
        <View style={styles.separator} />

        <View style={styles.centeredIcon}>
          <View style={styles.circle}>
            <Ionicons name="add" size={28} color="#fff" />
          </View>
          <Text style={styles.amountAdded}>Añadido</Text>
          <Text style={styles.amount}>10 EUR</Text>
          <Text style={styles.note}>A tu balance en EUR</Text>
        </View>

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

        {/* Detalles */}
        <View style={styles.detailRow}>
          <Text style={styles.label}>Tú pagas</Text>
          <Text style={styles.value}>10,04 EUR</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Nuestra comisión</Text>
          <Text style={styles.value}>0,04 EUR</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.detailRow}>
          <Text style={styles.totalLabel}>Cantidad añadida</Text>
          <Text style={styles.totalValue}>10 EUR</Text>
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
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 10,
  },
  centeredIcon: {
    alignItems: 'center',
    marginVertical: 16,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e7458f',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  amountAdded: {
    color: '#fff',
    fontSize: 14,
  },
  amount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e7458f',
  },
  note: {
    color: '#8c8c8c',
    fontSize: 13,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent: 'center',
    gap: 8,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#444',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  tabActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8c4fe6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
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
