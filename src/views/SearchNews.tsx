import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Search} from 'lucide-react-native';
import MoleculesCard from '../components/molecules/Card';
import AtomSpaces from '../components/atoms/Spaces';
import {colors} from '../utils/colors';
import {fetchData} from '../services';
import TabMenu from '../components/atoms/TabMenu';

const SearchNews: React.FC = () => {
  const [news, setNews] = useState([]);
  const [tabActive, setTabActive] = useState<string>('all');

  useEffect(() => {
    fetchData('https://api-berita-indonesia.vercel.app/antara/terbaru/').then(
      response => {
        setNews(response.data.posts);
      },
    );
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Discover</Text>
        <Text style={styles.subHeaderText}>News from all around</Text>
      </View>

      <View style={styles.searchContainer}>
        <Search color={colors.gray} />
        <TextInput
          style={styles.searchInput}
          onChangeText={() => ({})}
          placeholder="Search"
        />
      </View>

      <View style={styles.tabMenuContainer}>
        <TabMenu
          isActive={tabActive}
          setState={(item: string) => setTabActive(item)}
          tabs={['all', 'politics', 'educations', 'business', 'others']}
        />
      </View>

      <View style={styles.newsContainer}>
        {news.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <MoleculesCard
              onPress={() => setTabActive(item)}
              title={item?.title}
              uri={item?.thumbnail}
              category="sports"
              author={'CNN Indo'}
              time="12 january 2024"
            />
            <AtomSpaces height={12} />
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 12,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 38,
    marginTop: 24,
  },
  subHeaderText: {
    fontWeight: '200',
    color: 'gray',
    marginTop: 6,
    fontSize: 14,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    borderRadius: 20,
    paddingHorizontal: 12,
    backgroundColor: colors.disabled,
  },
  searchInput: {
    paddingVertical: 12,
    borderRadius: 24,
    paddingHorizontal: 10,
    borderColor: 'gray',
  },
  tabMenuContainer: {
    marginBottom: 10,
  },
  newsContainer: {
    marginTop: 12,
  },
});

export default SearchNews;
