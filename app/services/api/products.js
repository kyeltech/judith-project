import api from './api';

export const getSavedCards = async () => {
  return await api.get('/card');
};

export const getSocials = async () => {
  return await api.get('/social');
};

export const getFollowers = async () => {
  return await api.get('/?results=5');
};
