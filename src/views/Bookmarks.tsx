import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import MoleculesCard from '../components/molecules/Card';

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
        <ScrollView>
          {Array.from({length: 10}).map(() => (
            <MoleculesCard
              onPress={() => ({})}
              title="title"
              description="testing description"
              time="12 january 2024"
              key={String(new Date())}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
