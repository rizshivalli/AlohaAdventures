import React, {FC, useCallback, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {AppStackNavigationProp} from 'types/RootStackParams';
import {PropsFromRedux} from '.';
import FullScreenLoader from '@components/fullScreenLoader';

const CustomHeader = ({title, onPressBack}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerSpacer} />
    </View>
  );
};

interface ActivitiesScreenProps
  extends AppStackNavigationProp<'ActivitiesScreen'>,
    PropsFromRedux {}

interface SurfingData {
  name: string;
  description: string;
  image: string;
  activities: Array<{
    name: string;
  }>;
}

const ActivitiesScreen: FC<ActivitiesScreenProps> = ({
  activityLoading,
  navigation,
  route,
  getActivitiesByName,
}) => {
  // @ts-ignore
  const {activityName} = route?.params;

  const [data, setData] = React.useState<SurfingData>();

  const handleBackPress = () => {
    navigation?.goBack(); // Use navigation to go back
  };

  const getData = useCallback(() => {
    getActivitiesByName({
      payload: {
        activityName,
      },
      callback: dataFromApi => {
        setData(dataFromApi);
      },
    });
  }, [activityName, getActivitiesByName]);

  useEffect(() => {
    getData();
  }, [getData]);

  if (activityLoading) {
    return <FullScreenLoader message="Loading you adventures" />;
  }
  return (
    <ScrollView style={styles.container}>
      <CustomHeader title="Surfing Details" onPressBack={handleBackPress} />

      {data?.image && (
        <Image
          loadingIndicatorSource={require('../../assets/images/Loading.png')}
          source={{uri: data?.image}}
          style={styles.image}
        />
      )}

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{data?.name}</Text>
        <Text style={styles.description}>{data?.description}</Text>

        <Text style={styles.activitiesTitle}>Best Surfing Spots:</Text>
        <FlatList
          data={data?.activities}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <View style={styles.activityItemContainer}>
              <Text style={styles.activityItem}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.light,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.light,
    height: 64,
    paddingHorizontal: 16,
    elevation: 4, // Android elevation for shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  backButton: {
    marginRight: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: theme.dark,
    fontFamily: fontOptions('600'),
    fontWeight: '600',
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    color: theme.dark,
    fontFamily: fontOptions('600'),
    fontWeight: '600',
  },
  headerSpacer: {
    width: 24,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  contentContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 16,
    padding: 16,
  },
  title: {
    fontSize: 28,
    marginTop: 16,
    textAlign: 'center',
    fontFamily: fontOptions('600'),
    fontWeight: '600',
    color: theme.dark,
  },
  description: {
    fontSize: 16,
    marginTop: 16,
    textAlign: 'center',
    color: theme.green,
    fontFamily: fontOptions('400'),
    fontWeight: '400',
  },
  activitiesTitle: {
    fontSize: 20,
    marginTop: 24,
    fontFamily: fontOptions('600'),
    fontWeight: '600',
    color: theme.dark,
  },
  activityItemContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  activityItem: {
    fontSize: 16,
    color: theme.green,
    fontFamily: fontOptions('400'),
    fontWeight: '400',
  },
});

export default ActivitiesScreen;
