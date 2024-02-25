import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {BookMarked} from 'lucide-react-native';
import {fetchData} from '../services';
import MoleculeCard from '../components/molecules/Card';
import AtomSpaces from '../components/atoms/Spaces';
import {colors} from '../utils/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const BookmarksScreen: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    fetchData('https://api-berita-indonesia.vercel.app/antara/terbaru/').then(
      response => {
        setNews(response.data.posts);
      },
    );
  }, []);

  const renderNewsItem = ({item, index}: {item: any; index: number}) => (
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
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Daftar Bookmarks</Text>
        <TouchableOpacity onPress={() => ({})}>
          <BookMarked color={colors.green} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 24,
    paddingVertical: 18,
    paddingHorizontal: 12,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 18,
  },
  flatListContent: {
    paddingHorizontal: 12,
  },
});

export default BookmarksScreen;
