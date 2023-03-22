// types for fetching and setting user data from backend

type userType = {
  id: string;
  user_name: string;
  dob: string;
  email: string;
  photo_id: boolean;
  attendance: number | null;
  training_id: string;
};

type userDataType = {
  loading: boolean;
  data: Array<userType> | null;
  error: string;
};

// types for fetching and setting cards data (trainings name) from back end

type cardType = {
  companyName: string;
  description: string;
  ribbonData: string;
  img: string;
};

type cardsDataType = {
  loading: boolean;
  data: cardType[] | null;
  error: string;
};

// types for fetching and setting training data (venue, centre) from backend

type trainingType = {
  centre_name: string;
  centre_number: string;
  start_date: string;
  end_date: string;
  duration: number;
};
type trainingDataType = {
  loading: boolean;
  data: trainingType[] | null;
  error: string;
};
