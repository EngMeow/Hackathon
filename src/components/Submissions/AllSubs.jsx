/* eslint-disable react/prop-types */
import { SubCard } from "./SubCard";

export const AllSubs = ({ subs }) => {
  return (
    <>
      {subs.length ? (
        subs.map((item, index) => {
          return <SubCard key={index} item={item} />;
        })
      ) : (
        <h3>There are no subs</h3>
      )}
    </>
  );
};
