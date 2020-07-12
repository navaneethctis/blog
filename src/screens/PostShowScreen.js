import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { PostContext } from '../contexts/PostProvider';

const PostShowScreen = ({ navigation }) => {
  const { state } = useContext(PostContext);

  const id = navigation.getParam('id');

  const { body, title } = state.find(post => post.id === id);

  return (
    <View style={styles.postShowScreen}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

PostShowScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('PostEditScreen', {
          id: navigation.getParam('id')
        })
      }
    >
      <FontAwesome name='pencil-square' style={styles.editIcon} />
    </TouchableOpacity>
  )
});

const styles = StyleSheet.create({
  postShowScreen: {
    paddingHorizontal: 12,
    paddingTop: 12
  },
  title: {
    fontSize: 24,
    marginBottom: 6
  },
  body: {},
  editIcon: {
    color: 'gold',
    fontSize: 18,
    marginRight: 16
  }
});

export default PostShowScreen;
