import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

const PostForm = ({
  buttonBackgroundColor,
  buttonTitle,
  buttonTitleColor,
  handleSubmit,
  initialValues
}) => {
  const [body, setBody] = useState(initialValues.body);
  const [title, setTitle] = useState(initialValues.title);

  return (
    <>
      <Text style={styles.label}>Title</Text>
      <TextInput onChangeText={setTitle} style={styles.input} value={title} />
      <Text style={styles.label}>Body</Text>
      <TextInput onChangeText={setBody} style={styles.input} value={body} />
      <TouchableOpacity
        onPress={() => handleSubmit({ body, title })}
        style={{ ...styles.button, backgroundColor: buttonBackgroundColor }}
      >
        <Text
          style={{
            ...styles.buttonTitle,
            color: buttonTitleColor
          }}
        >
          {buttonTitle}
        </Text>
      </TouchableOpacity>
    </>
  );
};

PostForm.defaultProps = {
  initialValues: { body: '', title: '' }
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginBottom: 4
  },
  input: {
    borderColor: 'silver',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 11,
    paddingHorizontal: 6,
    paddingVertical: 2
  },
  button: {
    borderRadius: 2,
    marginTop: 7,
    paddingVertical: 7
  },
  buttonTitle: {
    textAlign: 'center'
  }
});

export default PostForm;
