import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import MoleculesCard from '../components/molecules/Card';
import AtomSpaces from '../components/atoms/Spaces';
import {fetchData} from '../services';
import {BookMarked} from 'lucide-react-native';
import {colors} from '../utils/colors';

export default function Bookmarks(): JSX.Element {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchData('https://api-berita-indonesia.vercel.app/antara/terbaru/').then(
      response => {
        setNews(response.data.posts);
      },
    );
  }, []);

  return (
    <View
      style={{
        marginTop: 40,
        paddingHorizontal: 12,
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
          paddingVertical: 18,
        }}>
        <BookMarked color={colors.green} />
        <Text style={{fontWeight: '700', fontSize: 18}}>Daftar Bookmarks</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {news.map((item, index) => (
          <>
            <MoleculesCard
              onPress={() => ({})}
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
      </ScrollView>
    </View>
  );
}
