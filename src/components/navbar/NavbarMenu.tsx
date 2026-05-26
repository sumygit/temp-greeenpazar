import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navMenu } from "@/utils/navbarMenu";
import Link from "next/link";
import { FiAlignLeft } from "react-icons/fi";

  function NavbarMenu() {
	return (
	<div  className="border bg-amber-50 rounded-md">
			<DropdownMenu >
	        <DropdownMenuTrigger className="px-2 py-1  rounded outline-none cursor-pointer">
	          
	           <FiAlignLeft  className="size-5"/>
	 
	        </DropdownMenuTrigger>
	
	        <DropdownMenuContent sideOffset={1}>
	
				{navMenu.map((menu )=>(
					<Link href={menu.href} key={menu.name} >
						<DropdownMenuItem className="py-2">{menu.name}</DropdownMenuItem>
					</Link>
				) )}
	         
	         
	          <DropdownMenuSeparator />
	          <DropdownMenuItem>Logout</DropdownMenuItem>
	        </DropdownMenuContent>
	      </DropdownMenu>
	</div>
	)
}
export default NavbarMenu