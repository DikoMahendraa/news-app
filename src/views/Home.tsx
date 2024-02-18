import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import MoleculesCard from '../components/molecules/Card';

import AtomSpaces from '../components/atoms/Spaces';
import AtomLabel from '../components/atoms/Label';
import MoleHeroImages from '../components/molecules/HeroImages';

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AtomSpaces height={42} />
      <AtomLabel
        rootStyle={{paddingHorizontal: 12}}
        title="Breaking News"
        subtitle="View All"
      />
      <View style={styles.containerContain}>
        <MoleHeroImages />
        <AtomSpaces height={20} />
        <AtomLabel title="Recommendations" subtitle="View All" />
        <AtomSpaces height={20} />

        <View>
          {Array.from({length: 10}).map(() => (
            <MoleculesCard
              onPress={() => ({})}
              title="title"
              uri="https://dummyimage.com/600x400/000/fff&text=A"
              description="testing description"
              time="12 january 2024"
              key={String(new Date())}
            />
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
