import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import MoleculesCard from '../components/molecules/Card';
import AtomSpaces from '../components/atoms/Spaces';

export default function Bookmarks(): JSX.Element {
  return (
    <View
      style={{
        marginTop: 40,
        paddingHorizontal: 12,
        flex: 1,
      }}>
      <Text style={{fontWeight: '500', fontSize: 16}}>Daftar Bookmarks</Text>

      <View style={{marginTop: 12, marginBottom: 50}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {Array.from({length: 10}).map(idex => (
            <>
              <MoleculesCard
                onPress={() => ({})}
                title="title"
                uri="https://dummyimage.com/600x400/000/fff&text=C"
                category="sports"
                author="CNN Indo"
                time="12 january 2024"
                key={String(idex)}
              />
              <AtomSpaces height={12} key={idex} />
            </>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
