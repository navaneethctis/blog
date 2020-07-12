import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { PostContext } from '../contexts/PostProvider';

import PostForm from '../components/PostForm';

const PostCreateScreen = ({ navigation }) => {
  const { storePost } = useContext(PostContext);

  return (
    <View style={styles.postCreateScreen}>
      <PostForm
        buttonBackgroundColor='teal'
        buttonTitle='Store Post'
        buttonTitleColor='white'
        handleSubmit={post =>
          storePost(post, () => navigation.navigate('PostIndexScreen'))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postCreateScreen: {
    paddingHorizontal: 12,
    paddingTop: 12
  }
});

export default PostCreateScreen;
