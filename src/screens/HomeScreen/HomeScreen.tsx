import Icons from '@components/Icons';
import Button from '@components/button';
import SafeView from '@components/safeView';
import Text from '@components/text';
import TravelGuide from '@components/travelGuide';
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

const highlightsData = [
  {
    title: 'Surfing',
    description: 'Best Hawaiian islands for surfing.',
    image:
      'https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png',
  },
  {
    title: 'Drowning',
    description: 'Best Hawaiian islands for surfing.',
    image:
      'https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png',
  },
];

const HomeScreen = () => {
  return (
    <SafeView style={styles.container}>
      <ScrollView>
        {/* TODO: ADD GRADIENT TEXT */}
        <ImageBackground
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/eb8d/55a4/4df95aa492f32fed48cde5ee1190b244?Expires=1702252800&Signature=QzVVbX7OOe601fJBVy25DZW~0MUrEOhyWK6ytK6oZjM8QVnAnPHnaElJTaHHMSCAgO-p5DJ1rgNlJgs1bDWZeVlY3UdZMLagcZt3IFAJoGXVTaDBD62B6dQmb53Vty62Y65tVfln17E8r1fANfEn~FdECsdX8ccYPnkK51PM77q2OgISDD-YjS3Z7m-gkssvb18mdEB2Bt6ElGMlRf8QoVh4QkCWd4naHqtn-nw5mPOd3CAgsej7ZJDdeNI0IbykKZP37~SdzhHFTAf8wdnMxta33UYn8nHDwg36Mcu~gEmMIx1x~1evsHo5iZfnLK112GbAHq7PAWliW0iiCQVOhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          }}
          style={styles.imageBackground}>
          <Text style={styles.welcomeText}>{'Welcome'}</Text>
          <Text style={styles.welcomeText1}>{'to Hawaii'}</Text>
        </ImageBackground>
        <View style={styles.highlightsContainer}>
          <View style={styles.highlightTextContainer}>
            <Text style={styles.highlightsText}>Highlights</Text>
          </View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            data={highlightsData}
            keyExtractor={item => item.title}
            renderItem={({item}) => (
              <View>
                <Image
                  style={{width: 360, height: 170}}
                  source={{
                    uri: item.image,
                  }}
                />
                <View style={{padding: 24}}>
                  <Text style={styles.highlightsCardHeading}>{item.title}</Text>
                  <Text style={styles.highlightsCardDescription}>
                    {item.description}
                  </Text>
                  <View style={{alignItems: 'flex-end', paddingTop: 8}}>
                    <View
                      style={{
                        borderRadius: 50,
                        backgroundColor: theme.light,
                        padding: 16,
                      }}>
                      <Icons name="RightArrow" />
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <View style={styles.catagoriesContainer}>
          <View style={styles.highlightTextContainer}>
            <Text style={styles.highlightsText}>Catagories</Text>
          </View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            data={highlightsData}
            keyExtractor={item => item.title}
            ItemSeparatorComponent={() => <View style={{paddingBottom: 8}} />}
            renderItem={({item}) => (
              <View style={styles.catagoriesItemContainer}>
                <Text style={styles.catagoriesItemText}>Adventure</Text>
                <Icons name="RightArrow" />
              </View>
            )}
          />
        </View>

        <TravelGuide
          title="Hardin Malone"
          description="Guide since 2012"
          image="https://i.pravatar.cc/300"
        />
        <View style={{height: 100}} />
      </ScrollView>
      <View style={styles.fabContainer}>
        <Button variant="Filled" title="Book a Trip" />
      </View>
    </SafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.light,
  },
  welcomeText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.50)',
    fontSize: 56,
    fontFamily: fontOptions('700'),
    // fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 56,
  },
  welcomeText1: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 56,
    fontFamily: fontOptions('700'),
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 56,
  },
  imageBackground: {
    height: 400,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  highlightsContainer: {
    paddingLeft: 16,
    backgroundColor: theme.white,
  },
  highlightsText: {
    color: theme.dark,
    fontSize: 16,
    fontFamily: fontOptions('700'),
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 20,
  },
  highlightsCardHeading: {
    color: theme.green,
    fontSize: 24,
    fontFamily: fontOptions('700'),
    fontWeight: '600',
    fontStyle: 'normal',
  },
  highlightsCardDescription: {
    color: theme.dark,
    fontSize: 16,
    fontFamily: fontOptions('400'),
    fontWeight: '400',
    fontStyle: 'normal',
  },
  highlightTextContainer: {
    paddingTop: 40,
    paddingBottom: 24,
  },
  catagoriesContainer: {
    paddingHorizontal: 16,
  },
  catagoriesTextContainer: {
    paddingTop: 40,
    paddingBottom: 24,
    backgroundColor: theme.white,
  },
  catagoriesItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    backgroundColor: theme.white,
  },
  catagoriesItemText: {
    color: theme.dark,
    fontSize: 16,
    fontFamily: fontOptions('400'),
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 20,
  },
  fabContainer: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 16,
  },
});
