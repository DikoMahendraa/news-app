/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MoleculesCard from '../components/molecules/Card';
import {colors} from '../utils/colors';

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          marginTop: 42,
          paddingHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            textTransform: 'capitalize',
          }}>
          Breaking News
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: colors.primary,
            }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 12,
          marginTop: 18,
          overflow: 'hidden',
        }}>
        <View
          style={{
            height: 160,
            position: 'relative',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: 'https://dummyimage.com/600x400/000/fff&text=B'}}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 12,
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: 24,
              borderRadius: 12,
              left: 12,
              backgroundColor: colors.primary,
              paddingVertical: 6,
              paddingHorizontal: 12,
            }}>
            <Text
              style={{
                fontWeight: '500',
                color: colors.flat,
                fontSize: 12,
              }}>
              Sports
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 14,
              left: 24,
              width: '100%',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
              <Text
                style={{color: colors.flat, fontSize: 16, fontWeight: '500'}}>
                CNN Indonesia
              </Text>
              <Text style={{color: colors.flat, fontSize: 12}}>
                6 hours ago
              </Text>
            </View>
            <Text
              style={{
                color: colors.flat,
                fontSize: 20,
                fontWeight: '600',
                width: '70%',
              }}>
              Alexander wears modified helmet in road races
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            height: 40,
            borderRadius: 6,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 16,
              marginRight: 4,
            }}>
            <Text style={{color: colors.flat}}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.disabled,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 16,
              marginRight: 4,
              borderWidth: 1,
              borderColor: colors.gray,
            }}>
            <Text style={{color: colors.gray}}>Politic</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: colors.gray,
              backgroundColor: colors.disabled,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 16,
              marginRight: 4,
            }}>
            <Text style={{color: colors.gray}}>Sport</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: colors.gray,
              borderWidth: 1,
              backgroundColor: colors.disabled,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 16,
              marginRight: 4,
            }}>
            <Text style={{color: colors.gray}}>Education</Text>
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
