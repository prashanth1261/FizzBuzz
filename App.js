import React, {Component} from 'react';
import { Text, TextInput, View, Button, Alert } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: ''
    };
    
  };
  onButtonpress() {
    const data1= this.state.data;
    if (data1%15==0) {
      Alert.alert(" Fizzbuzz");
    } else if ( data1%3==0) {
      Alert.alert("Fizz");
    } else if( data1%5==0) {
      Alert.alert("buzz");
    } else {
      Alert.alert(data1)
    }

  }
  render() {
    console.log(this.state.data);
    return(
      <View>
      <Text style={{ fontSize: 18, top: '70%', marginLeft:'5%', marginStart: '5%'}}> Enter a number. It should be replaced by “Fizz” if divisible by 3 and “Buzz” if divisible by 5 and “FizzBuzz” if divisible by both 3 and 5.</Text>
      <View style={{ flexDirection : "row", justifyContent: 'center', alignItems:'center', top: '50%'}}>
        <TextInput
          placeholder="enter a value: "
          style={{ fontSize: 18, backgroundColor: 'rgb(224, 220, 215)' }}
          onChangeText={ (text) => this.setState({ data: text })}
        />
        <Button 
        title="check"
        onPress={this.onButtonpress.bind(this)}
        />
      </View>
      </View>
    );
  }
}

export default App;
