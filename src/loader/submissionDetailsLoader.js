import { redirect } from "react-router-dom";
export const subLoader = ({ params, request }) => {
  const { id } = params;
  const subs = JSON.parse(localStorage.getItem("subs")) || [];
  const foundsub = subs.find((sub) => sub.id == id);
  const { url } = request;
  if (!foundsub) {
    return redirect("/");
  }
  if (url.includes("edit")) {
    if (foundsub.userName !== localStorage.getItem("userName")) {
      return redirect("/");
    }
  }
  return foundsub;
};
