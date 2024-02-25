import React, {useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet, FlatList} from 'react-native';
import MoleculesCard from '../components/molecules/Card';
import AtomSpaces from '../components/atoms/Spaces';
import AtomLabel from '../components/atoms/Label';
import MoleHeroImages from '../components/molecules/HeroImages';
import {fetchData} from '../services';
import {colors} from '../utils/colors';

interface NewsItem {
  image: string;
  title: string;
  description: string;
  thumbnail?: string;
  category?: string;
  author?: string;
  time?: string;
  link: string;
}

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({navigation}) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [topNews, setTopNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    fetchData('https://api-berita-indonesia.vercel.app/antara/terbaru/')
      .then(response => {
        setNews(response.data.posts);
        setTopNews({
          link: response.data.link,
          image: response.data.image,
          description: response.data.description,
          title: response.data.title,
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderNewsItem = ({item}: {item: NewsItem}) => (
    <View>
      <MoleculesCard
        onPress={() => navigation.navigate('NewsDetail', {itemId: 86})}
        title={item?.title}
        uri={item?.thumbnail}
        category="Sports"
        author="Diko Mahendra"
        time="~ 24 Feb 2024"
      />
      <AtomSpaces height={12} />
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <AtomSpaces height={42} />
        <AtomLabel
          rootStyle={{paddingHorizontal: 12}}
          title="Breaking News"
          subtitle="View All"
        />
        <View style={styles.containerContain}>
          {topNews && (
            <>
              <MoleHeroImages uri={topNews.image} title={topNews.title} />
              <AtomSpaces height={20} />
            </>
          )}
          <AtomLabel title="Recommendations" subtitle="View All" />
          <AtomSpaces height={20} />
          <FlatList
            data={news}
            renderItem={renderNewsItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerContain: {
    paddingHorizontal: 12,
    marginTop: 18,
    overflow: 'hidden',
  },
});

export default Home;
