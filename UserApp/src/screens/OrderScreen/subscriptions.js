export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
      id
      createdAt
      type
      status
      originlatitude
      originlongitude
      destlatitude
      destlongitude
      userId 
      carId    
      updatedAt
    }
  }
`;
export const onCarUpdated = /* GraphQL */ `
  subscription OnCarUpdated($id: ID!) {
    onCarUpdated(id: $id) {
      id
      type
      latitude
      longitude
      userId  
      updatedAt
      createdAt
      isActive
      heading
    }
  }
`;