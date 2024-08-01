import { redirect } from "next/navigation";

const Home = () => {
  redirect("/api/auth/login");
};

export default Home;
