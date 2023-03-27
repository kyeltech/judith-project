import {useInfiniteQuery, useQuery} from 'react-query';
import {transformAddedCards, transformSocials} from '../../utils/transform';
import {getSavedCards, getSocials} from '../api/products';

export const useGetSavedCard = () =>
  useQuery('cards', getSavedCards, {
    select: data => transformAddedCards(data.data),
  });

export const useGetSocials = () =>
  useQuery('socials', getSocials, {
    select: data => transformSocials(data.data),
  });
