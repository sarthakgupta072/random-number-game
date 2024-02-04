import { StyleSheet, TextInput, View, Alert } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import { useState } from "react"

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("")

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText)
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid numner!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      )
      return
    }
    console.log("Valid Number")
  }

  const resetInputHandler = () => {
    setEnteredNumber("")
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    // borderWidth: 6,
    // borderColor: "red",
    backgroundColor: "#27063c",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    width: 40,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    padding: 16,
  },
  buttonContainer: {
    flex: 1,
  },
})
