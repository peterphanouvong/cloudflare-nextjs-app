import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";
export const revalidate = 0;
const Home = () => {
  redirect("/api/auth/login");
};

export default Home;
