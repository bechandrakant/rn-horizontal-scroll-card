import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Card } from 'react-native-elements';

const data = [
  {
    url: 'http://via.placeholder.com/160x160',
    title: 'Something One'
  },
  {
    url: 'http://via.placeholder.com/160x160',
    title: 'Something Two'
  },
  {
    url: 'http://via.placeholder.com/160x160',
    title: 'Something Three'
  },
  {
    url: 'http://via.placeholder.com/160x160',
    title: 'Something Four'
  },
  {
    url: 'http://via.placeholder.com/160x160',
    title: 'Something Five'
  },
  {
    url: 'http://via.placeholder.com/160x160',
    title: 'Something Six'
  },
]

interface ICard {
  url: string,
  title: string,
}

interface IState {
  data: Array<ICard>,
}

export default class App extends React.Component<{}, IState> {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
    }
  }

  count = 0;

  render() {
    return (
      <FlatList
        style={styles.container}
        horizontal
        data={this.state.data}
        renderItem={({item: rowData}) => {
          return (
            <Card
              title={null}
              image={{uri: rowData.url}}
              containerStyle={{height: 200, width: 160, marginTop: 20,}}
            >
              <Text>{rowData.title}</Text>
            </Card>
          )
        }}
        keyExtractor={(item, index) => index.toString()}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
