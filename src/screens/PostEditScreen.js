import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { PostContext } from '../contexts/PostProvider';

import PostForm from '../components/PostForm';

const PostEditScreen = ({ navigation }) => {
  const { state, updatePost } = useContext(PostContext);

  const id = navigation.getParam('id');

  const { body, title } = state.find(post => post.id === id);

  return (
    <View style={styles.postEditScreen}>
      <PostForm
        buttonBackgroundColor='gold'
        buttonTitle='Update Post'
        buttonTitleColor='black'
        handleSubmit={post =>
          updatePost({ id, ...post }, () => navigation.pop())
        }
        initialValues={{ body, title }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postEditScreen: {
    paddingHorizontal: 12,
    paddingTop: 12
  }
});

export default PostEditScreen;
