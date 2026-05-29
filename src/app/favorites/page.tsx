import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

  async function FavoritesPage() {
	  const { userId } = await auth();

	  if (!userId) {
    redirect("/sign-in");
  }
	return (
		<div>
			FavoritesPage
		</div>
	)
}
export default FavoritesPage