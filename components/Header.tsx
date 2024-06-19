import Link from "next/link";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FaceIcon from "@mui/icons-material/Face";
import Dropdown from "./Dropdown";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
  return (
    <header className="w-full text-white bg-violet-700">
      <div className="flex justify-between items-center wrapper !py-8">
        <Link href="/" className="font-bold text-4xl">
          Logo.
        </Link>
        <Paper
          component="form"
          sx={{
            bgcolor: "#4C1D95",
            color: "white",
            p: "2px 4px",
            display: "none",
            alignItems: "center",
            width: 350,
          }}
          className="md:flex"
        >
          <InputBase
            sx={{ ml: 1, color: "white", flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search box" }}
          />
          <IconButton
            type="button"
            sx={{ p: "10px", color: "white" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <Link href="/wishlist" className="hover:text-red-300">
          WishList (0)
        </Link>
      </div>
      <div className="bg-violet-900">
        <div className="flex justify-between items-center wrapper !py-0 !px-0 h-16">
          <nav className="hidden md:flex justify-center items-center h-full pl-8 xl:pl-0">
            <Link
              className="hover:bg-yellow-500 h-full flex justify-center items-center px-2"
              href="/home"
            >
              HOME
            </Link>
            <Link
              className="hover:bg-yellow-500 h-full flex justify-center items-center px-2"
              href="/home"
            >
              <Dropdown title="BRANDS" />
            </Link>
            <Link
              className="hover:bg-yellow-500 h-full flex justify-center items-center px-2"
              href="/home"
            >
              <Dropdown title="TOYS" />
            </Link>
            <Link
              className="hover:bg-yellow-500 h-full flex justify-center items-center px-2"
              href="/home"
            >
              <Dropdown title="GIRLS" />
            </Link>
          </nav>
          <MobileDrawer />
          <div className="flex justify-between self-stretch w-36">
            <div className="w-full flex justify-center items-center hover:text-red-300 text-white">
              <IconButton size="large" aria-label="login">
                <FaceIcon
                  fontSize="medium"
                  sx={{ color: "white", ":hover": { color: "#FCA5A5" } }}
                />
              </IconButton>
            </div>
            <div className="bg-red-300  px-auto flex justify-center items-center w-full">
              <IconButton size="large" aria-label="cart">
                <Badge badgeContent={1} color="secondary">
                  <ShoppingCartIcon
                    fontSize="medium"
                    className="hover:text-white text-violet-950"
                  />
                </Badge>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
