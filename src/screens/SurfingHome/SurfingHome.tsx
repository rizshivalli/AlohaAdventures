import Button from '@components/button';
import SafeView from '@components/safeView';
import Text from '@components/text';
import TopSpotsItem from '@components/topSpotItem';
import TravelGuide from '@components/travelGuide';
import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

const topSpotsData = [
  {
    id: '1',
    name: '1. Maui',
    image: 'https://i.pravatar.cc/300',
  },

  {
    id: '2',
    name: '2. Kauai',
    image: 'https://i.pravatar.cc/300',
  },
  {
    id: '3',
    name: '3. Honolulu',
    image: 'https://i.pravatar.cc/300',
  },
];

const SurfingHome = () => {
  return (
    <SafeView style={styles.container}>
      <ScrollView>
        <View
          style={{
            backgroundColor: theme.white,
          }}>
          <ImageBackground
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/eb8d/55a4/4df95aa492f32fed48cde5ee1190b244?Expires=1702252800&Signature=QzVVbX7OOe601fJBVy25DZW~0MUrEOhyWK6ytK6oZjM8QVnAnPHnaElJTaHHMSCAgO-p5DJ1rgNlJgs1bDWZeVlY3UdZMLagcZt3IFAJoGXVTaDBD62B6dQmb53Vty62Y65tVfln17E8r1fANfEn~FdECsdX8ccYPnkK51PM77q2OgISDD-YjS3Z7m-gkssvb18mdEB2Bt6ElGMlRf8QoVh4QkCWd4naHqtn-nw5mPOd3CAgsej7ZJDdeNI0IbykKZP37~SdzhHFTAf8wdnMxta33UYn8nHDwg36Mcu~gEmMIx1x~1evsHo5iZfnLK112GbAHq7PAWliW0iiCQVOhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            }}
            style={styles.imageBackground}>
            <Text style={styles.welcomeText}>{'Surfing'}</Text>
          </ImageBackground>
          <View style={{padding: 16}}>
            <Text style={styles.description}>
              Hawaii is the capital of modern surfing. This group of Pacific
              islands gets swell from all directions, so there are plenty of
              pristine surf spots for all.
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.highlightsContainer}>
            <View style={styles.highlightTextContainer}>
              <Text style={styles.highlightsText}>Top Spots</Text>
            </View>
          </View>
          <View style={{padding: 16, gap: 10}}>
            {topSpotsData.map(item => (
              <TopSpotsItem key={item.id} name={item.name} image={item.image} />
            ))}
          </View>
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
    height: 300,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  fabContainer: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 16,
  },
  description: {
    color: theme.dark,
    fontSize: 16,
    fontFamily: fontOptions('400'),
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 24,
    paddingTop: 40,
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

  highlightTextContainer: {
    paddingTop: 40,
    paddingBottom: 24,
  },
});

export default SurfingHome;
