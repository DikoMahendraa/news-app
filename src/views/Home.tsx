/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MoleculesCard from '../components/molecules/Card';
import {colors} from '../utils/colors';

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, marginTop: 26, padding: 6, overflow: 'hidden'}}>
        <View
          style={{
            height: 160,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 6,
            position: 'relative',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: 'https://dummyimage.com/600x400/000/fff&text=B'}}
            style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
          />

          <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}>
            <Text style={{color: colors.flat, fontSize: 18}}>
              Seorang Mahasiswa mendapatkan perlakuan yg kurang...
            </Text>
            <Text style={{color: colors.gray, fontSize: 12, marginVertical: 4}}>
              Kriminal
            </Text>
            <Text style={{color: colors.primary}}>baca selengkapnya..</Text>
          </View>
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
