import { useAvailabilityByDate } from './queries/useAvailabilityByDate';

export const useAvailability = () => {
  return {
    useAvailabilityByDate,
  };
};
