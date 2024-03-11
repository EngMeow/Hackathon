import { useEffect } from "react";
import { SubHero } from './../components/Submissions/SubHero';
import { SubContent } from './../components/Submissions/SubContent';

export default function Subs () {
  useEffect(() => {
    document.title = "Hacktahon";
  }, []);
  return (
    <>
      <SubHero />
      <SubContent />
    </>
  );
}
