import { Alignment } from "@blueprintjs/core/lib/esm/common";
import { Button, Navbar } from "@blueprintjs/core/lib/esm/components";
import { Select } from "@blueprintjs/select";
import React from "react";

const Navigation = () => {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Panel sprzedawcy</Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="cog" />
      </Navbar.Group>
    </Navbar>
  );
};

export default Navigation;
