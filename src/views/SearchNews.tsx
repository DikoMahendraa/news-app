import {View, Text, TextInput, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import MoleculesCard from '../components/molecules/Card';
import AtomSpaces from '../components/atoms/Spaces';
import {colors} from '../utils/colors';
import {Search} from 'lucide-react-native';
import {fetchData} from '../services';
import TabMenu from '../components/atoms/TabMenu';

export default function SearchNews() {
  const [news, setNews] = useState([]);
  const [tabActive, setTabActive] = useState('all');

  useEffect(() => {
    fetchData('https://api-berita-indonesia.vercel.app/antara/terbaru/').then(
      response => {
        setNews(response.data.posts);
      },
    );
  }, []);

  return (
    <ScrollView
      style={{marginTop: 40, paddingHorizontal: 12}}
      showsVerticalScrollIndicator={false}>
      <View>
        <Text style={{fontWeight: '700', fontSize: 38, marginTop: 24}}>
          Discover
        </Text>
        <Text
          style={{
            fontWeight: '200',
            color: 'gray',
            marginTop: 6,
            fontSize: 14,
          }}>
          News from all around
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 24,
          borderRadius: 20,
          paddingHorizontal: 12,
          backgroundColor: colors.disabled,
        }}>
        <Search color={colors.gray} />
        <TextInput
          style={{
            paddingVertical: 12,
            borderRadius: 24,

            paddingHorizontal: 10,
            borderColor: 'gray',
          }}
          onChangeText={() => ({})}
          placeholder="Search"
        />
      </View>

      <View style={{marginBottom: 10}}>
        <TabMenu
          isActive={tabActive}
          setState={item => setTabActive(item)}
          tabs={['all', 'politics', 'educations', 'business', 'others']}
        />
      </View>

      <View style={{marginTop: 12}}>
        {news.map((item, index) => (
          <>
            <MoleculesCard
              onPress={item => setTabActive(item)}
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
    </ScrollView>
  );
}
