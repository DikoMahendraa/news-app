import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Bookmarks({navigation}): JSX.Element {
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
        </ScrollView>
      </View>
    </View>
  );
}
