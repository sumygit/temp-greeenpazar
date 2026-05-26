import Container from "../global/Container"
import NavbarBasket from "./NavbarBasket"
import NavbarLogo from "./NavbarLogo"
import NavbarMenu from "./NavbarMenu"
import NavbarSearch from "./NavbarSearch"


  function Navbar() {
	return (
		<header className="bg-brand-green">
			<Container className="flex justify-between items-center gap-7">
				<NavbarLogo/>
				<NavbarSearch />
				<div className="flex justify-between gap-3 items-center">
					<NavbarBasket href="/"/>
					<NavbarMenu/>
				</div>
			</Container>
		</header>
	)
}
export default Navbar