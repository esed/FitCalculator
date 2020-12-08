import * as React from 'react';
import { Image, View, StyleSheet, Linking } from 'react-native';
import { Constants } from 'expo';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

export default class New extends React.Component {
  render() {
    const { title, source, description, url } = this.props;
    return (
      <View>
        <Content padder={false}>
          <Card style={{ margin: 0, padding: null, backgroundColor: 'yellow' }}>
            <CardItem cardBody>
              <Image
                source={{ uri: url }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <Text
                    onPress={() => {
                      Linking.openURL(source);
                    }}>
                    {title}
                  </Text>
                  <Text
                    note
                    onPress={() => {
                      Linking.openURL(source);
                    }}>
                    {source}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <Text
                    onPress={() => {
                      Linking.openURL(source);
                    }}>
                    {description}
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </View>
    );
  }
}
