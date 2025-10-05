import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const LeaderboardScreen = () => {
  const leaderboardData = [
    { rank: 1, name: 'Alex Johnson', score: 985, class: '10th' },
    { rank: 2, name: 'Sarah Miller', score: 972, class: '11th' },
    { rank: 3, name: 'Mike Chen', score: 965, class: '10th' },
    { rank: 4, name: 'Emma Davis', score: 951, class: '9th' },
    { rank: 5, name: 'James Wilson', score: 943, class: '12th' },
    { rank: 6, name: 'Priya Sharma', score: 938, class: '10th' },
    { rank: 7, name: 'Tom Baker', score: 927, class: '11th' },
    { rank: 8, name: 'Lisa Brown', score: 915, class: '9th' },
  ];

  const navigation = useNavigation();

  const getRankColor = (rank = 3) => {
    switch (rank) {
      case 1: return '#FFD700'; // Gold
      case 2: return '#C0C0C0'; // Silver
      case 3: return '#CD7F32'; // Bronze
      default: return '#E3F2FD';
    }
  };

  const getRankTextColor = (rank  = 3) => {
    return rank <= 3 ? '#fff' : '#2196F3';
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Leaderboard</Text>
          <Text style={styles.subtitle}>
            Top performers across all classes and subjects
          </Text>
        </View>

        {/* Time Filter */}
        <View style={styles.filterContainer}>
          <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
            <Text style={[styles.filterText, styles.activeFilterText]}>All Time</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>This Week</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>This Month</Text>
          </TouchableOpacity>
        </View>

        {/* Top 3 Podium */}
        <View style={styles.podiumContainer}>
          {/* Second Place */}
          <View style={[styles.podiumItem, styles.secondPlace]}>
            <View style={[styles.rankCircle, { backgroundColor: '#C0C0C0' }]}>
              <Text style={styles.podiumRankText}>2</Text>
            </View>
            <Text style={styles.podiumName} numberOfLines={1}>Sarah Miller</Text>
            <Text style={styles.podiumScore}>972</Text>
            <Text style={styles.podiumClass}>11th</Text>
          </View>

          {/* First Place */}
          <View style={[styles.podiumItem, styles.firstPlace]}>
            <View style={[styles.rankCircle, { backgroundColor: '#FFD700' }]}>
              <Text style={styles.podiumRankText}>1</Text>
            </View>
            <Text style={styles.podiumName} numberOfLines={1}>Alex Johnson</Text>
            <Text style={styles.podiumScore}>985</Text>
            <Text style={styles.podiumClass}>10th</Text>
          </View>

          {/* Third Place */}
          <View style={[styles.podiumItem, styles.thirdPlace]}>
            <View style={[styles.rankCircle, { backgroundColor: '#CD7F32' }]}>
              <Text style={styles.podiumRankText}>3</Text>
            </View>
            <Text style={styles.podiumName} numberOfLines={1}>Mike Chen</Text>
            <Text style={styles.podiumScore}>965</Text>
            <Text style={styles.podiumClass}>10th</Text>
          </View>
        </View>

        {/* Leaderboard List */}
        <ScrollView 
          style={styles.leaderboardList}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.listTitle}>All Participants</Text>
          
          {leaderboardData.slice(3).map((item) => (
            <View key={item.rank} style={styles.leaderboardItem}>
              <View style={styles.itemLeft}>
                <View style={[styles.rankCircle, { backgroundColor: getRankColor(item.rank) }]}>
                  <Text style={[styles.rankText, { color: getRankTextColor(item.rank) }]}>
                    {item.rank}
                  </Text>
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{item.name}</Text>
                  <Text style={styles.userClass}>Class {item.class}</Text>
                </View>
              </View>
              <View style={styles.scoreContainer}>
                <Text style={styles.scoreText}>{item.score}</Text>
                <Text style={styles.scoreLabel}>points</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>Words</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>Gamify</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navButton, styles.activeNavButton]}>
            <Text style={[styles.navButtonText, styles.activeNavButtonText]}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>Admin</Text>
          </TouchableOpacity>
        </View>

        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>Back to Categories</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LeaderboardScreen;

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    padding: 20 
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  activeFilter: {
    backgroundColor: '#2196F3',
    borderColor: '#1E88E5',
  },
  filterText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666',
  },
  activeFilterText: {
    color: '#fff',
  },
  podiumContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 25,
    height: 140,
  },
  podiumItem: {
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    padding: 12,
    borderWidth: 2,
    borderColor: '#BBDEFB',
  },
  firstPlace: {
    height: 130,
    width: '32%',
    borderColor: '#FFD700',
  },
  secondPlace: {
    height: 110,
    width: '32%',
    borderColor: '#C0C0C0',
  },
  thirdPlace: {
    height: 100,
    width: '32%',
    borderColor: '#CD7F32',
  },
  rankCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  podiumRankText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  podiumName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 4,
  },
  podiumScore: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2196F3',
  },
  podiumClass: {
    fontSize: 10,
    color: '#666',
    marginTop: 2,
  },
  leaderboardList: {
    flex: 1,
    marginBottom: 15,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
    paddingLeft: 10,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E3F2FD',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  rankText: {
    fontSize: 14,
    fontWeight: '700',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  userClass: {
    fontSize: 12,
    color: '#666',
  },
  scoreContainer: {
    alignItems: 'flex-end',
  },
  scoreText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2196F3',
  },
  scoreLabel: {
    fontSize: 10,
    color: '#666',
    marginTop: 2,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  navButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeNavButton: {
    backgroundColor: '#2196F3',
  },
  navButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666',
  },
  activeNavButtonText: {
    color: '#fff',
  },
  backButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  backText: { 
    color: '#666', 
    fontSize: 16, 
    fontWeight: '600' 
  },
});