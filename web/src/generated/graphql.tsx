import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FoodTruck = {
  __typename?: 'FoodTruck';
  objectId?: Maybe<Scalars['String']>;
  applicant?: Maybe<Scalars['String']>;
  facilityType?: Maybe<Scalars['String']>;
  cnn?: Maybe<Scalars['String']>;
  locationDescription?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  blocklot?: Maybe<Scalars['String']>;
  block?: Maybe<Scalars['String']>;
  lot?: Maybe<Scalars['String']>;
  permit?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  foodItems?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['String']>;
  y?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  schedule?: Maybe<Scalars['String']>;
  received?: Maybe<Scalars['String']>;
  priorPermit?: Maybe<Scalars['String']>;
  expirationDate?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  sourceLat?: Maybe<Scalars['Float']>;
  sourceLng?: Maybe<Scalars['Float']>;
  sourceDistance?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  foodTrucksNearby: Array<FoodTruck>;
};


export type QueryFoodTrucksNearbyArgs = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type Location = {
  __typename?: 'Location';
  type?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
};


