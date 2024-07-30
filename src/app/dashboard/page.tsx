import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { type Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Teamigo | Dashboard",
};

const Dashboard = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/");
  }

  const user = await getUser();

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>
        Welcome {user?.given_name} {user?.family_name}
      </h3>
      <LogoutLink>Log out</LogoutLink>
    </div>
  );
};

export default Dashboard;
