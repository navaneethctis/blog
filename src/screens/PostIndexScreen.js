import React, { useContext, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { PostContext } from '../contexts/PostProvider';

import PostItem from '../components/PostItem';

const PostIndexScreen = () => {
  const { state, indexPosts } = useContext(PostContext);

  useEffect(() => {
    indexPosts();
  }, []);

  return (
    <View style={styles.postIndexScreen}>
      <FlatList
        data={state}
        keyExtractor={post => String(post.id)}
        renderItem={({ index, item }) => <PostItem index={index} item={item} />}
      />
    </View>
  );
};

PostIndexScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('PostCreateScreen')}>
      <FontAwesome name='plus-square' style={styles.createIcon} />
    </TouchableOpacity>
  )
});

const styles = StyleSheet.create({
  postIndexScreen: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12
  },
  createIcon: {
    color: 'teal',
    fontSize: 18,
    marginRight: 16
  }
});

export default PostIndexScreen;
