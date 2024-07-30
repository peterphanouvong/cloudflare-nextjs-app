import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const Home = () => {
  redirect("/api/auth/login");
};

export default Home;
