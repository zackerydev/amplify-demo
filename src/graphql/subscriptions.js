/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChannel = /* GraphQL */ `
  subscription OnCreateChannel($owner: String) {
    onCreateChannel(owner: $owner) {
      id
      title
      description
      streamKey
      channelArn
      streamURL
      streamKeyArn
      ingestEndpoint
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateChannel = /* GraphQL */ `
  subscription OnUpdateChannel($owner: String) {
    onUpdateChannel(owner: $owner) {
      id
      title
      description
      streamKey
      channelArn
      streamURL
      streamKeyArn
      ingestEndpoint
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteChannel = /* GraphQL */ `
  subscription OnDeleteChannel($owner: String) {
    onDeleteChannel(owner: $owner) {
      id
      title
      description
      streamKey
      channelArn
      streamURL
      streamKeyArn
      ingestEndpoint
      createdAt
      updatedAt
      owner
    }
  }
`;
