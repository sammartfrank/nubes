import { Session, User } from '@supabase/supabase-js';
import { NewBookingForm } from './Form';

export interface NewBookingProps {
  user: User;
  access_token: Session['access_token'];
}

export const NewBooking = ({ user, access_token }: NewBookingProps) => {
  return <NewBookingForm user={user} access_token={access_token} />;
};
