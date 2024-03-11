import { useState, useContext, useEffect } from "react";
import { AllSubs } from "./AllSubs.jsx";
import { FavouriteSubs } from "./FavouriteSubs.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { SubsContext } from "../../State/SubsContext.jsx";

export function SubContent(){
  const [tab, setTab] = useState("All");
  const { subs } = useContext(SubsContext);
  const [filteredsubs, setFilteredsubs] = useState(subs);
  useEffect(() => {
    setFilteredsubs(subs);
  }, [subs]);
  const filterByTitle = (query) => {
    setFilteredsubs(
      subs.filter((sub) =>
        sub.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };
  const sortByDate = (sortBy) => {
    setFilteredsubs(subs);
    if (sortBy == "Newest") {
      setFilteredsubs(
        filteredsubs
          .slice()
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sortBy == "Oldest") {
      setFilteredsubs(
        filteredsubs
          .slice()
          .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    }
  };

  return (
    <div className=" wrapper" id="tabs">
      <div className="tabsnavbar">
        <div className="tabsitem">
          {["All", "Favourite"].map((item) => {
            return (
              <div key={item}>
                <button
                  onClick={() => {
                    setTab(item);
                  }}
                  className={` ${tab == item ? "active" : ""}`}
                >
                  {item} Submissions
                </button>
                {tab == item && (
                  <motion.div layoutId="id" className="active-tab-indicator" />
                )}
              </div>
            );
          })}
        </div>
        <div className="filteroptions">
          <input
            className="search"
            type="search"
            placeholder="Search..."
            onChange={(event) => {
              filterByTitle(event.target.value);
            }}
          />
          
          <select
            className="mx-2 custom-select"
            onChange={(event) => {
              sortByDate(event.target.value);
            }}
            defaultValue="default"
          >
            <option disabled value="default" >Sort By</option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      </div>
      <AnimatePresence>
        
        <div className="subscontainer">
          {tab == "All" ? (
            <AllSubs subs={filteredsubs} />
          ) : (
            <FavouriteSubs
              favoritesubs={filteredsubs.filter(
                (item) => item?.isFavorited == true
              )}
            />
          )}
        </div>
      </AnimatePresence>
    </div>
  );
}


