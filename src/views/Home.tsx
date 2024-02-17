/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Home({navigation}) {
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
            <TouchableOpacity
              onPress={() => navigation.push('NewsDetail')}
              style={{flexDirection: 'row', marginTop: 6}}
              key={String(new Date())}>
              <View
                style={{height: 60, width: 60, backgroundColor: 'yellow'}}
              />
              <View style={{marginLeft: 6}}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 16,
                    flexWrap: 'wrap',
                    width: '90%',
                  }}>
                  Diduga mahasiswa mesum di...{' '}
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 12,
                    color: 'gray',
                    marginTop: 4,
                  }}>
                  12 January 2023
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 14,
                    color: 'gray',
                    marginTop: 4,
                  }}>
                  kejadian tersebut terjadi pada tangga yan
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
