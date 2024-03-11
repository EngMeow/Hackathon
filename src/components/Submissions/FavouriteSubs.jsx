/* eslint-disable react/prop-types */
import { SubCard } from './SubCard.jsx';

export const FavouriteSubs = ({ favoritesubs }) => {
  return (
    <>
      {favoritesubs.length ? (
        favoritesubs.map((item, index) => {
          return <SubCard key={index} item={item} />;
        })
      ) : (
        <h3>There are no favorite subs</h3>
      )}
    </>
  );
};
