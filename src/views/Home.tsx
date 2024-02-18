/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MoleculesCard from '../components/molecules/Card';

export default function Home() {
  return (
    <ScrollView>
      <View style={{flex: 1, marginTop: 26, padding: 6, overflow: 'hidden'}}>
        <View
          style={{
            height: 160,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 6,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Container</Text>
        </View>

        <Text
          style={{
            marginVertical: 14,
            fontSize: 18,
            fontWeight: '600',
            textTransform: 'capitalize',
          }}>
          Berita Terkini
        </Text>

        <View
          style={{
            height: 40,
            borderRadius: 6,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              paddingHorizontal: 24,
              paddingVertical: 8,
              borderRadius: 6,
              marginRight: 4,
            }}>
            <Text style={{color: 'white'}}>Masakan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              paddingHorizontal: 24,
              paddingVertical: 8,
              borderRadius: 6,
              marginRight: 4,
            }}>
            <Text style={{color: 'white'}}>Politik</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              paddingHorizontal: 24,
              paddingVertical: 8,
              borderRadius: 6,
              marginRight: 4,
            }}>
            <Text style={{color: 'white'}}>Lainnya</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 12}}>
          {Array.from({length: 10}).map(() => (
            <MoleculesCard
              onPress={() => ({})}
              title="title"
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
