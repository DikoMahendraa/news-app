import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {BookMarked} from 'lucide-react-native';
import {fetchData} from '../services';
import MoleculeCard from '../components/molecules/Card';
import AtomSpaces from '../components/atoms/Spaces';
import {colors} from '../utils/colors';

const BookmarksScreen: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    fetchData('https://api-berita-indonesia.vercel.app/antara/terbaru/').then(
      response => {
        setNews(response.data.posts);
      },
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BookMarked color={colors.green} />
        <Text style={styles.headerText}>Daftar Bookmarks</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {news.map((item, index) => (
          <View key={index}>
            <MoleculeCard
              onPress={() => {}}
              title={item?.title}
              uri={item?.thumbnail}
              category="sports"
              author="CNN Indo"
              time="12 january 2024"
            />
            <AtomSpaces height={12} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 18,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 18,
  },
});

export default BookmarksScreen;
