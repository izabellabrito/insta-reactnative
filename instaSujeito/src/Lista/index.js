import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data,
    };

    this.showLikes = this.showLikes.bind(this);
    this.like = this.like.bind(this);
    this.chageIcon = this.chageIcon.bind(this);
  }

  like() {
    const { feed } = this.state;

    if (feed.likeada) {
      this.setState({
        feed: { ...feed, likeada: false, likers: feed.likers - 1 },
      });
    } else {
      this.setState({
        feed: { ...feed, likeada: true, likers: feed.likers + 1 },
      });
    }
  }

  chageIcon() {
    const { feed } = this.state;

    if (feed.likeada) {
      return require('../img/likeada.png');
    } else {
      return require('../img/like.png');
    }
  }

  showLikes() {
    const { feed } = this.state;

    if (feed.likers <= 0) {
      return;
    }

    return (
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? 'Curtidas' : 'Curtida'}
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.listItem}>
        <View style={styles.profileView}>
          <Image
            source={{ uri: this.state.feed.imgPerfil }}
            style={styles.profilePic}
          />
          <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
        </View>

        <Image
          source={{ uri: this.state.feed.imgPublicacao }}
          resizeMode="cover"
          style={styles.pubPic}
        />

        <View style={styles.actionsView}>
          <TouchableOpacity onPress={this.like} style={styles.btnLike}>
            <Image source={this.chageIcon()} style={styles.btnImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSend}>
            <Image
              source={require('../img/send.png')}
              style={styles.btnImage}
            />
          </TouchableOpacity>
        </View>

        {this.showLikes()}

        <View style={styles.detaisView}>
          <Text style={styles.detailsName}>{this.state.feed.nome}</Text>
          <Text style={styles.detaisDesc}>{this.state.feed.descricao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 10,
  },
  nomeUsuario: {
    fontSize: 15,
    textAlign: 'left',
    color: '#000',
    paddingLeft: 10,
  },
  profileView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  pubPic: {
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  actionsView: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 10,
    marginBottom: 5,
  },
  btnLike: {
    paddingLeft: 5,
  },
  btnSend: {
    paddingLeft: 10,
  },
  btnImage: {
    width: 30,
    height: 30,
  },
  detaisView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailsName: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  detaisDesc: {
    fontSize: 13,
    paddingLeft: 5,
  },
  likes: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 10,
    marginBottom: 5,
  },
});

export default Lista;
