import {useInfiniteQuery, useQuery} from 'react-query';
import {
  transformAddedCards,
  transformFollowers,
  transformSocials,
} from '../../utils/transform';
import {getFollowers, getSavedCards, getSocials} from '../api/products';

export const useGetSavedCard = () =>
  useQuery('cards', getSavedCards, {
    select: data => transformAddedCards(data.data),
  });

export const useGetSocials = () =>
  useQuery('socials', getSocials, {
    select: data => transformSocials(data.data),
  });

export const useGetFollowers = () =>
  useQuery('socials', getFollowers, {
    select: data => transformFollowers(data.data),
  });
