import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

interface CustomAlertProps {
  visible: boolean;
  message: any;
  title: string;
  onClose?: () => void;
  primaryButtonTitle: string; // Primary button title
  onPrimaryButtonPress: () => void; // Primary button press handler
  secondaryButtonTitle?: string; // Optional secondary button title
  onSecondaryButtonPress?: () => void; // Optional secondary button press handler
  alertStyle?: object; // Custom alert styles
  buttonStyle?: object; // Custom button styles
  buttonTextStyle?: object; // Custom button text styles
  animationType?: string;
  titleStyle?: object;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  visible,
  message,
  title,
  onClose,
  primaryButtonTitle,
  onPrimaryButtonPress,
  secondaryButtonTitle,
  onSecondaryButtonPress,
  alertStyle,
  buttonStyle,
  buttonTextStyle,
  titleStyle
}) => {
  return (
    <Modal isVisible={visible} >
      <View style={[styles.modalContainer, alertStyle]}>
        <Text style={[styles.titleText, titleStyle]}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, buttonStyle]}
            onPress={onPrimaryButtonPress}
          >
            <Text style={[styles.buttonText, buttonTextStyle]}>
              {primaryButtonTitle}
            </Text>
          </TouchableOpacity>
          {secondaryButtonTitle && onSecondaryButtonPress && (
            <TouchableOpacity
              style={[styles.button, buttonStyle]}
              onPress={onSecondaryButtonPress}
            >
              <Text style={[styles.buttonText, buttonTextStyle]}>
                {secondaryButtonTitle}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#FFFFCC', // Default background color
    padding: 20,
    borderRadius: 10,
  },
  message: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#00CC00', // Default button background color
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
  },
  titleText: {
    fontSize: 25,
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default CustomAlert;
