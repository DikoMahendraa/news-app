/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, Image, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Bookmark, ChevronLeft} from 'lucide-react-native';
import {colors} from '../utils/colors';

export default function NewsDetail({navigation, route}) {
  const [bookmark, setBookmark] = useState(false);

  const onSetBookmark = () => {
    setBookmark(!bookmark);
  };

  useEffect(() => {
    if (bookmark) {
      Alert.alert(
        'Berita berhasil disimpan',
        'kamu bisa melihatnya di daftar menu bookmark',
        [
          {text: 'Tutup', onPress: () => console.log('OK Pressed')},
          {text: 'Lihat', onPress: () => navigation.navigate('Bookmarks')},
        ],
      );
    }
  }, [bookmark, navigation]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{marginVertical: 32}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
          <ChevronLeft color="gray" />
          <Text>Kembali</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSetBookmark()}>
          <Bookmark fill={bookmark ? colors.green : colors.flat} color="gray" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'relative',
          height: 240,
          marginTop: 18,
        }}>
        <Image
          source={{
            uri: 'https://tempoinstitute.s3-ap-southeast-1.amazonaws.com/program/featured-image/Kelas Online Menjadi News Anchor Tampil Mengesankan di Layar TV - Alfian Raharjo - Tempo Institute.jpg',
          }}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
      </View>
      <View style={{paddingHorizontal: 8}}>
        <Text
          style={{
            fontSize: 24,
            marginTop: 10,
            fontWeight: '600',
            color: 'black',
          }}>
          In EV revolution, Global South hopes to get rich too:
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
            marginTop: 12,
          }}>
          <Image
            width={24}
            height={24}
            source={{uri: 'https://i.pravatar.cc/300'}}
            style={{borderRadius: 12}}
          />
          <Text
            style={{
              textTransform: 'capitalize',
              fontWeight: '400',
              fontSize: 14,
              color: 'black',
            }}>
            Diko Mahendra ~
          </Text>

          <TouchableOpacity>
            <Text
              style={{
                textTransform: 'capitalize',
                fontWeight: '400',
                fontSize: 12,
                color: colors.primary,
              }}>
              Follow
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 14,
            marginTop: 14,
            fontWeight: '400',
            color: 'gray',
          }}>
          Twelve Republican senators joined Democrats in voting in favor of a
          same-sex marriage bill on Tuesday, a share that would have been all
          but imaginable a decade ago that shows how internal party divisions
          have grown on the issue. The bill, the Respect for Marriage Act, would
          require states to recognize same-sex marriages and repeal 1996′s
          Defense of Marriage Act, which defined marriage as being between a man
          and a woman. Since the early 2000s, both Democrats and Republicans
          have become more likely to say they support same-sex marriage. Just
          since 2015, the share of adults in favor of same-sex marriages has
          risen from 60 percent to 70 percent in 2021. This is also true among
          white Evangelical Protestants, who make up a major block of Republican
          voters and are known to turn out in primary elections to support
          candidates who share their views. Republican supporters argued the
          proposed legislation would protect religious liberty and, as Sen.
          Romney (R-Utah) said, show that “Congress — and I — esteem and love
          all of our fellow Americans equally.” Sen. Mike Lee (R-Utah) said on
          Tuesday, “I’m not aware of a single state in the United States
          threatening to pass any law infringing on the ability of same-sex
          couples to enjoy privileges associated with same-sex marriage.”
        </Text>
      </View>
      {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{fontSize: 12, marginTop: 50, fontWeight: '600'}}>
            {'<'} Kembali
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{fontSize: 12, marginTop: 50, fontWeight: '400'}}>
            Bookmark
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, padding: 6, marginTop: 10, overflow: 'hidden'}}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>
          Diduga beberapa oknum kepala sekolah melakukan tindakan pungli kepada
          beberapa murid
        </Text>

        <Text
          style={{
            fontSize: 14,
            marginTop: 20,
            fontWeight: '400',
            color: 'gray',
          }}>
          Twelve Republican senators joined Democrats in voting in favor of a
          same-sex marriage bill on Tuesday, a share that would have been all
          but imaginable a decade ago that shows how internal party divisions
          have grown on the issue. The bill, the Respect for Marriage Act, would
          require states to recognize same-sex marriages and repeal 1996′s
          Defense of Marriage Act, which defined marriage as being between a man
          and a woman. Since the early 2000s, both Democrats and Republicans
          have become more likely to say they support same-sex marriage. Just
          since 2015, the share of adults in favor of same-sex marriages has
          risen from 60 percent to 70 percent in 2021. This is also true among
          white Evangelical Protestants, who make up a major block of Republican
          voters and are known to turn out in primary elections to support
          candidates who share their views. Republican supporters argued the
          proposed legislation would protect religious liberty and, as Sen.
          Romney (R-Utah) said, show that “Congress — and I — esteem and love
          all of our fellow Americans equally.” Sen. Mike Lee (R-Utah) said on
          Tuesday, “I’m not aware of a single state in the United States
          threatening to pass any law infringing on the ability of same-sex
          couples to enjoy privileges associated with same-sex marriage.”
        </Text>
      </View> */}
    </ScrollView>
  );
}
