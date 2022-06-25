/** 
  All of the routes for the Noble Page React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

import { OtpGenPage } from "Layout/pages";
import { Components } from "Layout/pages";
import { SignUp } from "Layout/pages";
import { ChangePassword } from "Layout/pages";
import { ForgotPassword } from "Layout/pages";


const routes = [
    {
        name: "forgot-password",
        // icon: <GitHubIcon />,
        route: "/forgot-password",
        description: "Forgot Password Page",
        component: <ForgotPassword />
    },
    {
        name: "all-components",
        // icon: <GitHubIcon />,
        route: "/components",
        description: "All The Components",
        component: <Components />
    },
    {
        name: "Change-password",
        // icon: <GitHubIcon />,
        route: "/change-password",
        description: "Change Password Page",
        component: <ChangePassword />
    },
    {
        name: "otp-generation-page",
        // icon: <GitHubIcon />,
        route: "/otp-generation-page",
        description: "OTP Generation Page",
        component: <OtpGenPage />
    },
    {
        name: "sign-up",
        // icon: <GitHubIcon />,
        route: "/sign-up",
        description: "Sign Up Page",
        component: <SignUp />
    },
];

export default routes;
