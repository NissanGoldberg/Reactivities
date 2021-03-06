import React, { useContext, useState } from 'react';
import { Tab, Header, Card, Image, Button, Grid } from 'semantic-ui-react';
import { RootStoreContext } from '../../app/stores/rootStore';
import { observer } from 'mobx-react-lite';

const ProfilePhotos = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    profile,
  } = rootStore.profileStore;
  
  return (
      <Tab.Pane>
        <Header floated='left' icon='image' content='Photos' />
        <Card.Group itemsPerRow={5}>
          {profile &&
          profile.photos.map(photo => (
              <Card key={photo.id}>
                <Image src={photo.url} />
              </Card>
          ))}
        </Card.Group>
      </Tab.Pane>
  );
};

export default observer(ProfilePhotos);
