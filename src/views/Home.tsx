import {View, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import MoleculesCard from '../components/molecules/Card';

import AtomSpaces from '../components/atoms/Spaces';
import AtomLabel from '../components/atoms/Label';
import MoleHeroImages from '../components/molecules/HeroImages';
import {fetchData} from '../services';

export default function Home({navigation}) {
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState({});

  useEffect(() => {
    fetchData('https://api-berita-indonesia.vercel.app/antara/terbaru/').then(
      response => {
        setNews(response.data.posts);

        setTopNews({
          link: response.data.link,
          image: response.data.image,
          description: response.data.description,
          title: response.data.title,
        });
      },
    );
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AtomSpaces height={42} />
      <AtomLabel
        rootStyle={{paddingHorizontal: 12}}
        title="Breaking News"
        subtitle="View All"
      />
      <View style={styles.containerContain}>
        <MoleHeroImages uri={topNews.image} title={topNews.title} />
        <AtomSpaces height={20} />
        <AtomLabel title="Recommendations" subtitle="View All" />
        <AtomSpaces height={20} />

        <View>
          {news.map((item, index) => (
            <>
              <MoleculesCard
                onPress={() =>
                  navigation.navigate('NewsDetail', {
                    itemId: 86,
                  })
                }
                title={item?.title}
                uri={item?.thumbnail}
                category="sports"
                author={'CNN Indo'}
                time="12 january 2024"
                key={index}
              />
              <AtomSpaces height={12} key={index + 100} />
            </>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerContain: {
    flex: 1,
    paddingHorizontal: 12,
    marginTop: 18,
    overflow: 'hidden',
  },
});
