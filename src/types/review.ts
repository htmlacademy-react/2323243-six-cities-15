import Host from './host';

type ReviewType = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

type CommentSend = {
  comment: string;
  rating: number;
}

type User = Host

export default ReviewType;
export type {CommentSend};

