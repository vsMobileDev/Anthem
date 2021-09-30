/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';



const App = () => {
  const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  const [shuffledArray, setShuffledArray] = useState([])

  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [four, setfour] = useState(false)
  const [five, setfive] = useState(false)
  const [six, setsix] = useState(false)
  const [seven, setseven] = useState(false)
  const [eight, seteight] = useState(false)
  const [nine, setnine] = useState(false)
  const [ten, setten] = useState(false)
  const [eleven, seteleven] = useState(false)
  const [twelve, settwelve] = useState(false)
  const [thirteen, setThirteen] = useState(false)
  const [fourteen, setFourteen] = useState(false)
  const [fifteen, setFifteen] = useState(false)
  const [sixteen, setSixteen] = useState(false)

  const [matchone, setMatchone] = useState('')
  const [matchTwo, setMatchTwo] = useState('')
  const [score, setScore] = useState(0)


  useEffect(() => {
    console.log(suffle(arr))
  }, [])
  function suffle(array) {
    let currentIndex = arr.length, randomIndex
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    setShuffledArray(array)
    return array
  }
  function perfectMatch(val) {
    setMatchone(val)
    switch (val) {
      case 'A': {
        if (matchTwo == val) {
          setScore(score + 1)
        }
        break;
      }
      case 'B': {
        if (matchTwo == val) {
          setScore(score + 1)
        }
        break;
      }
      case 'C': {
        if (matchTwo == val) {
          setScore(score + 1)
        }
        break;
      }
      case 'D': {
        if (matchTwo == val) {
          setScore(score + 1)

        }
        break;
      }
      case 'E': {
        if (matchTwo == val) {
          setScore(score + 1)
        }
        break;
      }
      case 'F': {
        if (matchTwo == val) {
          setScore(score + 1)
        }
        break;
      }
      case 'G': {
        if (val == matchone) {
          setScore(score + 1)
        }
        break;

      }
      case 'H': {
        if (val == matchone) {
          setScore(score + 1)
        }
        break;
      }
    }
  }
  function perfectMatvhTwo(val) {
    setMatchTwo(val)
    switch (val) {
      case 'A': {
        if (val == matchone) {
          setScore(score + 1)
        }
        break;
      }
      case 'B': {
        if (val == matchone) {
          setScore(score + 1)

        }
      }
      case 'C': {
        if (val == matchone) {
          setScore(score + 1)

        }
        break;

      }
      case 'D': {
        if (val == matchone) {
          setScore(score + 1)

        }
        break;

      }
      case 'E': {
        if (val == matchone) {
          setScore(score + 1)
        }
        break;

      }
      case 'F': {
        if (val == matchone) {
          setScore(score + 1)
        }
        break;
      }
      case 'G': {
        if (val == matchone) {
          setScore(score + 1)
        }
        break;

      }
      case 'H': {
        if (val == matchone) {
          setScore(score + 1)
        }
        break;
      }
    }
  }
  return (
    <SafeAreaView style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity
          style={[styles.box, { backgroundColor: one ? 'yellow' : 'white' }]}
          onPress={() => {
            setOne(!one)
            perfectMatch(shuffledArray[0])
          }}>
          {
            one && (
              <Text>{shuffledArray[0]}</Text>
            )
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { backgroundColor: two ? 'blue' : 'white' }]}
          onPress={() => {
            setTwo(!two)
            perfectMatch(shuffledArray[5])
          }}>
          {
            two && (
              <Text>{shuffledArray[5]}</Text>
            )
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { backgroundColor: three ? 'orange' : 'white' }]}
          onPress={() => {
            setThree(!three)
            perfectMatch(shuffledArray[3])
          }

          }>
          {
            three && (
              <Text>{shuffledArray[3]}</Text>
            )
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { backgroundColor: thirteen ? 'magenta' : 'white' }]}
          onPress={() => {
            setThirteen(!thirteen)
            perfectMatch(shuffledArray[6])
          }

          }>
          {
            thirteen && (
              <Text>{shuffledArray[6]}</Text>
            )
          }
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
        <TouchableOpacity
          style={[styles.box, { backgroundColor: four ? 'yellow' : 'white' }]}
          onPress={() => {
            setfour(!four)
            perfectMatvhTwo(shuffledArray[0])
          }}>
          {
            four && (
              <Text>{shuffledArray[0]}</Text>
            )
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { backgroundColor: five ? 'green' : 'white' }]}
          onPress={() => {
            setfive(!five)
            perfectMatch(shuffledArray[4])
          }}>
          {
            five && (
              <Text>{shuffledArray[0]}</Text>
            )
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { backgroundColor: six ? 'pink' : 'white' }]}
          onPress={() => {
            setsix(!six)
            perfectMatch(shuffledArray[1])
          }}>
          {
            six && (
              <Text>{shuffledArray[1]}</Text>
            )
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { backgroundColor: fourteen ? 'silver' : 'white' }]}
          onPress={() => {
            setFourteen(!fourteen)
            perfectMatch(shuffledArray[7])
          }
          }>
          {
            fourteen && (
              <Text>{shuffledArray[7]}</Text>
            )
          }
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
        <TouchableOpacity
          style={[styles.box, { backgroundColor: seven ? 'purple' : 'white' }]}
          onPress={() => {
            setseven(!seven)
            perfectMatch(shuffledArray[2])
          }}>
          {
            seven && (
              <Text>{shuffledArray[2]}</Text>
            )
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { backgroundColor: eight ? 'pink' : 'white' }]}
          onPress={() => {
            seteight(!eight)
            perfectMatvhTwo(shuffledArray[0])
          }}>
          {
            eight && (
              <Text>{shuffledArray[0]}</Text>
            )
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { backgroundColor: nine ? 'purple' : 'white' }]}
          onPress={() => {
            setnine(!nine)
            perfectMatvhTwo(shuffledArray[2])
          }}>
          {
            nine && (
              <Text>{shuffledArray[2]}</Text>
            )
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { backgroundColor: fifteen ? 'magenta' : 'white' }]}
          onPress={() => {
            setFifteen(!fifteen)
            perfectMatvhTwo(shuffledArray[6])
          }

          }>
          {
            fifteen && (
              <Text>{shuffledArray[6]}</Text>
            )
          }
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
        <TouchableOpacity
          style={[styles.box, { backgroundColor: ten ? 'orange' : 'white' }]}
          onPress={() => {
            setten(!ten)
            perfectMatvhTwo(shuffledArray[3])
          }}>
          {
            ten && (
              <Text>{shuffledArray[3]}</Text>
            )
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { backgroundColor: eleven ? 'green' : 'white' }]}
          onPress={() => {
            seteleven(!eleven)
            perfectMatvhTwo(shuffledArray[4])
          }}>
          {
            eleven && (
              <Text>{shuffledArray[4]}</Text>
            )
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { backgroundColor: twelve ? 'blue' : 'white' }]}
          onPress={() => {
            settwelve(!twelve)
            perfectMatvhTwo(shuffledArray[5])
          }}>
          {
            twelve && (
              <Text>{shuffledArray[5]}</Text>
            )
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { backgroundColor: sixteen ? 'silver' : 'white' }]}
          onPress={() => {
            setSixteen(!sixteen)
            perfectMatvhTwo(shuffledArray[7])
          }
          }>
          {
            sixteen && (
              <Text>{shuffledArray[7]}</Text>
            )
          }
        </TouchableOpacity>
      </View>
      <Text style={{ alignSelf: 'center', marginTop: 30, fontSize: 40 }}>Score:{score}/8</Text>
      <TouchableOpacity style={styles.saveBtnView} onPress={() => {
        setOne(false), setTwo(false), setThree(false), setfour(false),
          setfive(false), setsix(false), setseven(false), seteight(false),
          setnine(false), setten(false), seteleven(false), settwelve(false),
          setThirteen(false), setFourteen(false), setFifteen(false), setSixteen(false)
        setScore(0)
      }} >
        <Text>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    shadowColor: 'red',
    shadowOpacity: 1,
    shadowOffset: {
      height: 0.5,
      width: 0.5
    },
    shadowRadius: 5,
    elevation: 5,
  },
  saveBtnView: {
    width: 118.7,
    height: 39,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    alignSelf: 'center',
    borderWidth: 2,
    marginTop: 10
  },
});

export default App;
