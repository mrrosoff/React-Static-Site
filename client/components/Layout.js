import React from "react";

import { Button, Container, Grid, Typography } from "@mui/material";
import { sendServerRequest } from "../utils/api";

const Layout = () => {
	let request = { requestType: "postRequest", payload: "Test" };

	return (
		<Container>
			<Grid
				container
				direction={"column"}
				justifyContent={"center"}
				alignContent={"center"}
				alignItems={"center"}
				spacing={2}
				style={{ height: "100vh" }}
			>
				<Grid item>
					<Typography variant={"h2"}>Hello World!</Typography>
				</Grid>
				<Grid item>
					<Button color={"primary"} onClick={() => sendServerRequest(request)}>
						Click Me To Hit API
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Layout;
