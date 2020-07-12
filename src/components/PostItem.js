import React, { useContext } from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { PostContext } from '../contexts/PostProvider';

const PostItem = ({ index, item: post, navigation }) => {
  const { state, destroyPost } = useContext(PostContext);

  const isLastPostItem = index === state.length - 1;

  let postItemStyle = !index
    ? isLastPostItem
      ? { ...styles.firstPostItem, ...styles.lastPostItem }
      : styles.firstPostItem
    : isLastPostItem
    ? styles.lastPostItem
    : {};
  postItemStyle = { ...styles.postItem, ...postItemStyle };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PostShowScreen', { id: post.id })}
      style={postItemStyle}
    >
      <Text>{post.title}</Text>
      <TouchableOpacity onPress={() => destroyPost(post.id)}>
        <FontAwesome name='minus-square' style={styles.deleteIcon} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postItem: {
    alignItems: 'center',
    borderColor: 'silver',
    borderTopWidth: 0,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  firstPostItem: {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderTopWidth: 1
  },
  lastPostItem: {
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  deleteIcon: {
    color: 'tomato',
    fontSize: 18
  }
});

export default withNavigation(PostItem);
