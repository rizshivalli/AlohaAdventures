import Avatar from '@components/avatar/Avatar';
import Button from '@components/button';
import Text from '@components/text';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

interface TravelGuideProps {
  title: string;
  description: string;
  image: string;
}

const TravelGuide: FC<TravelGuideProps> = ({title, description, image}) => {
  return (
    <View style={styles.guideContainer}>
      <View style={styles.guideTextContainer}>
        <Text style={styles.guidesText}>Travel Guide</Text>
      </View>
      <View style={styles.guideItemContainer}>
        <View>
          <Text style={styles.guideName}>{title}</Text>
          <Text style={styles.guideExperience}>{description}</Text>
          <View style={styles.buttonContainse}>
            <Button variant="Outline" title="Contact" />
          </View>
        </View>
        <Avatar uri={image} />
      </View>
    </View>
  );
};

export default TravelGuide;

const styles = StyleSheet.create({
  guideContainer: {
    paddingHorizontal: 16,
  },
  guideItemText: {
    color: theme.dark,
    fontSize: 16,
    fontFamily: fontOptions('400'),
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 20,
  },
  guideTextContainer: {
    paddingTop: 40,
    paddingBottom: 24,
  },
  guidesText: {
    color: theme.dark,
    fontSize: 16,
    fontFamily: fontOptions('700'),
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 20,
  },
  guideItemContainer: {
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    backgroundColor: theme.white,
  },
  guideName: {
    color: theme.dark,
    fontSize: 24,
    fontFamily: fontOptions('700'),
    fontWeight: '600',
    fontStyle: 'normal',
  },
  guideExperience: {
    color: theme.dark,
    fontSize: 16,
    fontFamily: fontOptions('400'),
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 20,
    paddingTop: 10,
  },
  buttonContainse: {paddingTop: 33, width: '70%'},
});
