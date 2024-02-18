import {View, Text, TextInput, ScrollView} from 'react-native';
import React from 'react';
import MoleculesCard from '../components/molecules/Card';
import AtomSpaces from '../components/atoms/Spaces';

export default function SearchNews() {
  return (
    <View style={{marginTop: 40, paddingHorizontal: 12}}>
      <Text style={{fontWeight: '500', fontSize: 16}}>Cari Berita Terkini</Text>

      <View style={{marginTop: 20}}>
        <TextInput
          style={{
            borderWidth: 1,
            padding: 6,
            paddingVertical: 12,
            borderRadius: 4,
            borderColor: 'gray',
          }}
          onChangeText={() => ({})}
          placeholder="Masukan kata kunci..."
        />
      </View>

      <View style={{marginTop: 12}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {Array.from({length: 10}).map(() => (
            <>
              <MoleculesCard
                onPress={() => ({})}
                title="title"
                uri="https://dummyimage.com/600x400/000/fff&text=B"
                category="sports"
                author="CNN Indo"
                time="12 january 2024"
                key={String(new Date())}
              />
              <AtomSpaces height={12} />
            </>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
