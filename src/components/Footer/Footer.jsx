import { Button, Grid2, Link, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-black text-white text-center mt-10">
      <Grid2
        className="bg-black text-white text-center mt-10 justify-around"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid2 item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbuttom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbuttom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbuttom>
              press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbuttom>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbuttom>
              Partners
            </Button>
          </div>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbuttom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbuttom>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbuttom>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbuttom>
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbuttom>
              Support
            </Button>
          </div>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbuttom>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbuttom>
              API Status
            </Button>
          </div>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbuttom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbuttom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbuttom>
              Terms
            </Button>
          </div>
        </Grid2>
      </Grid2>
      <Grid2 className="pt-20" item xs={12}>
        <Typography
          className="pb-1"
          variant="body2"
          component="p"
          align="center"
        >
          &copy; 2024 my company. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with love by Me.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Icons made by{" "}
          <Link
            href="https://www.freepik.com"
            color="inherit"
            underline="always"
          >
            Freepik
          </Link>{" "}
          from{" "}
          <Link href="https://flaticon.com/" color="inherit" underline="always">
            www.flaticon.com
          </Link>
        </Typography>
      </Grid2>
    </div>
  );
};
