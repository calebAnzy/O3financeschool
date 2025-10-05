import { redirect } from "next/navigation";

export default function Home() {
  // Always redirect to login when user visits "/"
  redirect("/login");
}
