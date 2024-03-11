import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { SubHero } from './../components/Details/SubHero';
import { SubDescription } from './../components/Details/SubDescription.jsx';
import '../assets/css/SubDetails.css'

export const SubDetails = () => {
  const sub = useLoaderData();

  useEffect(() => {
    document.title = "sub Details";
  }, []);

  return (
    <>
      {sub && (
        <>
          <SubHero sub={sub} />
          <SubDescription sub={sub} />
        </>
      )}
    </>
  );
};
