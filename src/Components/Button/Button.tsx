import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyles?: object;
  disabled?: boolean;
}

const Button = ({ text, onPress, containerStyles, disabled }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]} disabled={disabled} >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    marginVertical: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a15e1b',
  },
  text: {
    fontSize: 16,
  },
})

export default Button;