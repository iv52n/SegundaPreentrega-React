import React from "react";
import CartWidget from "./CartWidget";
import "./style.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Spacer,
  Box,
  Image,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Box>
          <Link to={"/home"}>
            <Image
              id="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/640px-Adidas_Logo.svg.png"
            ></Image>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Menu class="navmenu">
            <MenuButton>
              <h2 id="cate">Hombres</h2>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to={"/category/calzado"}>Calzado</Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/category/ropa"}>Ropa</Link>
              </MenuItem>
              <MenuItem>Accesorios</MenuItem>
              <MenuItem>Mostrar todo</MenuItem>
            </MenuList>
          </Menu>
          <Menu class="navmenu">
            <MenuButton>
              <h2 id="cate">Mujeres</h2>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to={"/category/calzado"}>Calzado</Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/category/ropa"}>Ropa</Link>
              </MenuItem>
              <MenuItem>Accesorios</MenuItem>
              <MenuItem>Mostrar todo</MenuItem>
            </MenuList>
          </Menu>
          <Menu class="navmenu">
            <MenuButton>
              <h2 id="cate">Unisex</h2>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to={"/category/calzado"}>Calzado</Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/category/ropa"}>Ropa</Link>
              </MenuItem>
              <MenuItem>Accesorios</MenuItem>
              <MenuItem>Mostrar todo</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton>
              <h2 id="cate">Niños</h2>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to={"/category/calzado"}>Calzado</Link>
              </MenuItem>
              <MenuItem>
                <Link to={"/category/ropa"}>Ropa</Link>
              </MenuItem>
              <MenuItem>Accesorios</MenuItem>
              <MenuItem>Mostrar todo</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box>
          <Link to={"/Cart"}>
            <CartWidget />
          </Link>
        </Box>
      </Flex>
      <Divider />
    </div>
  );
};

export default NavBar;
