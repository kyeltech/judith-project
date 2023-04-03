import React from 'react';

export const transformAddedCards = data =>
  data.data.map(item => ({
    cardId: item._id,
    cardNumber: item.card,
    cardExpiry: item.expirydate,
    cardCvv: item.CCV,
    cardHolder: item.cardholdername,
    userId: item.user_id,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  }));

export const transformSocials = data =>
  data.data.map(item => ({
    cardId: item._id,
    socialEmail: item.email,
    socialPassword: item.password,
    socialTitle: item.title,
    userId: item.user_id,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  }));

export const transformFollowers = data => ({...data});
