/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChannel = /* GraphQL */ `
  query GetChannel($id: ID!) {
    getChannel(id: $id) {
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
export const listChannels = /* GraphQL */ `
  query ListChannels(
    $id: ID
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listChannels(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const channelByArn = /* GraphQL */ `
  query ChannelByArn(
    $channelArn: String
    $sortDirection: ModelSortDirection
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    channelByArn(
      channelArn: $channelArn
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
