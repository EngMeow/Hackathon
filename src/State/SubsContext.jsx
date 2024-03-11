/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { initialData } from "../config/constants.js";
import Swal from "sweetalert2";

const alertFire = (title, icon) => {
  Swal.mixin({
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  }).fire({
    title,
    icon,
  });
};

// eslint-disable-next-line react-refresh/only-export-components
export const SubsContext = createContext();

const SubsContextProvider = ({ children }) => {
  const [subs, setSubs] = useState(
    JSON.parse(localStorage.getItem("subs")) || []
  );
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || null
  );

  function initializeData() {
    if (!localStorage.getItem("subs")) {
      setSubs(initialData);
    }
  }
  useEffect(() => {
    initializeData();
  }, []);

  useEffect(() => {
    localStorage.setItem("subs", JSON.stringify(subs));
  }, [subs]); 

  const register = (value) => {
    setUserName(value);
    localStorage.setItem("userName", value);
    alertFire("Welcome to Hackathon, " + value, "success");
  };


  const addSub = (sub) => {
    sub["id"] = Math.floor(Math.random() * 999999);
    sub["isFavorited"] = false;
    sub["userName"] = userName;
    const now = new Date();
    const isoString = now.toISOString();
    sub["createdAt"] = isoString;
    setSubs((prevsubs) => [sub, ...prevsubs]);
    alertFire("sub Was Uploaded Successfully ", "success");
  };

  const updateSub = (subId, newsub) => {
    setSubs((prevsubs) =>
      prevsubs.map((sub) => {
        if (sub.id == subId) {
          return { ...sub, ...newsub };
        }
        return sub;
      })
    );
    alertFire("sub Was Updated Successfully ", "success");
  };


  const deleteSub = (subId) => {
    setSubs((prevsubs) =>
      prevsubs.filter((sub) => sub.id != subId)
    );
    alertFire("sub Was Deleted Successfully", "info");
  };

  const manageFavority = (subId) => {
    setSubs((prevsubs) =>
      prevsubs.map((sub) => {
        if (sub.id == subId) {
          const newValue = !sub.isFavorited;
          if (newValue) {
            alertFire("Added to favourites Submissions", "success");
          } else {
            alertFire("Removed from favourites Submissions", "info");
          }
          return { ...sub, isFavorited: newValue };
        }
        return sub;
      })
    );
  };

  return (
    <SubsContext.Provider
      value={{
        userName,
        register,
        subs,
        addSub,
        updateSub,
        deleteSub,
        manageFavority,
      }}
    >
      {children}
    </SubsContext.Provider>
  );
};
export default SubsContextProvider;
