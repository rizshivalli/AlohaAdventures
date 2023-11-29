import SafeView from '@components/safeView';
import Text from '@components/text';
import React from 'react';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ImageBackground
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/eb8d/55a4/4df95aa492f32fed48cde5ee1190b244?Expires=1702252800&Signature=QzVVbX7OOe601fJBVy25DZW~0MUrEOhyWK6ytK6oZjM8QVnAnPHnaElJTaHHMSCAgO-p5DJ1rgNlJgs1bDWZeVlY3UdZMLagcZt3IFAJoGXVTaDBD62B6dQmb53Vty62Y65tVfln17E8r1fANfEn~FdECsdX8ccYPnkK51PM77q2OgISDD-YjS3Z7m-gkssvb18mdEB2Bt6ElGMlRf8QoVh4QkCWd4naHqtn-nw5mPOd3CAgsej7ZJDdeNI0IbykKZP37~SdzhHFTAf8wdnMxta33UYn8nHDwg36Mcu~gEmMIx1x~1evsHo5iZfnLK112GbAHq7PAWliW0iiCQVOhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          }}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* TODO: ADD GRADIENT TEXT */}
          <Text style={styles.welcomeText}>{'Welcome'}</Text>
          <Text style={styles.welcomeText1}>{'to Hawaii'}</Text>
        </ImageBackground>
      </ScrollView>
    </SafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
  scrollView: {
    flex: 1,
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
    // fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 56,
  },
});
