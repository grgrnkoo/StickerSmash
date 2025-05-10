import { type ImageSource } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Button from "../components/Button";
import CircleIcon from '../components/CircleButton';
import EmojiList from '../components/EmojiList';
import EmojiPicker from '../components/EmojiPicker';
import EmojiSticker from '../components/EmojiSticker';
import IconButton from '../components/IconButton';
import ImageContainer from "../components/ImageContainer";

const PlaceholderImage = require('../../assets/images/background-image.png')

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined)

  const pickTheImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      alert('You cancelled image select')
    }
  };

  const onReset = () => {
    setPickedEmoji(undefined);
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true)
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <GestureHandlerRootView
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <ImageContainer imageUrl={selectedImage || PlaceholderImage}> 
        {
          pickedEmoji &&
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        }
        </ImageContainer>
      </View>
      {
        showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label='Reset' onPress={onReset} />
              <CircleIcon onPress={onAddSticker} />
              <IconButton icon='save-alt' label='Save' onPress={onSaveImageAsync} />
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button label="Choose Image" type="primary" pressFunction={pickTheImage} />
            <Button label="Use This Image" type="secondary" pressFunction={() => setShowAppOptions(true)} />
          </View>
        )
      }
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})
