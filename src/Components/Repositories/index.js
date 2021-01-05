import React from 'react';

import { Rect, Avatar, Right, NameRepo, NameOwner } from './styles';

import { Linking } from 'react-native';

export default function Appointment({ data }) {
  return (
    <Rect
      onPress={() => {
        Linking.openURL(data.html_url);
      }}
    >
      <Avatar
        source={{
          uri: data.owner.avatar_url
            ? data.owner.avatar_url
            : `https://robohash.org/${data.owner.id}.png`,
        }}
      />
      <Right>
        <NameRepo> {data.name} </NameRepo>
        <NameOwner> {data.owner.login} </NameOwner>
      </Right>
    </Rect>
  );
}
