import Host from './host';

type ReviewType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}

type User = Host

export default ReviewType;
