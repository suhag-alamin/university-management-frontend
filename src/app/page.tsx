import { redirect } from "next/navigation";

const Home = () => {
  return redirect("/profile");
};

export default Home;
