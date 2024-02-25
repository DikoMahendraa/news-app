import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import {Bookmark, ChevronLeft} from 'lucide-react-native';
import {colors} from '../utils/colors';

interface NewsDetailProps {
  navigation: any;
  route: any;
}

const NewsDetail: React.FC<NewsDetailProps> = ({navigation, route}) => {
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
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <ChevronLeft color="gray" />
            <Text>Kembali</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSetBookmark}>
            <Bookmark
              fill={bookmark ? colors.green : colors.white}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://tempoinstitute.s3-ap-southeast-1.amazonaws.com/program/featured-image/Kelas Online Menjadi News Anchor Tampil Mengesankan di Layar TV - Alfian Raharjo - Tempo Institute.jpg',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>
            In EV revolution, Global South hopes to get rich too:
          </Text>
          <View style={styles.authorContainer}>
            <Image
              width={24}
              height={24}
              source={{uri: 'https://i.pravatar.cc/300'}}
              style={styles.authorImage}
            />
            <Text style={styles.authorText}>Diko Mahendra ~</Text>
            <TouchableOpacity>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>
            Twelve Republican senators joined Democrats in voting in favor of a
            same-sex marriage bill on Tuesday, a share that would have been all
            but imaginable a decade ago that shows how internal party divisions
            have grown on the issue. The bill, the Respect for Marriage Act,
            would require states to recognize same-sex marriages and repeal
            1996′s Defense of Marriage Act, which defined marriage as being
            between a man and a woman. Since the early 2000s, both Democrats and
            Republicans have become more likely to say they support same-sex
            marriage. Just since 2015, the share of adults in favor of same-sex
            marriages has risen from 60 percent to 70 percent in 2021. This is
            also true among white Evangelical Protestants, who make up a major
            block of Republican voters and are known to turn out in primary
            elections to support candidates who share their views. Republican
            supporters argued the proposed legislation would protect religious
            liberty and, as Sen. Romney (R-Utah) said, show that “Congress — and
            I — esteem and love all of our fellow Americans equally.” Sen. Mike
            Lee (R-Utah) said on Tuesday, “I’m not aware of a single state in
            the United States threatening to pass any law infringing on the
            ability of same-sex couples to enjoy privileges associated with
            same-sex marriage.”
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 42,
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  imageContainer: {
    position: 'relative',
    height: 240,
    marginTop: 18,
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: '600',
    color: 'black',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 12,
  },
  authorImage: {
    borderRadius: 12,
  },
  authorText: {
    textTransform: 'capitalize',
    fontWeight: '400',
    fontSize: 14,
    color: 'black',
  },
  followText: {
    textTransform: 'capitalize',
    fontWeight: '400',
    fontSize: 12,
    color: colors.blue,
  },
  description: {
    fontSize: 14,
    marginTop: 14,
    fontWeight: '400',
    color: 'gray',
  },
});

export default NewsDetail;
