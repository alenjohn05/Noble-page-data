import { Mobile } from "assets/images/icons/ExportSvg";
import { BecomeAMember } from "assets/images/icons/ExportSvg";
import { News } from "assets/images/icons/ExportSvg";
import { Blog } from "assets/images/icons/ExportSvg";
import { Explore } from "assets/images/icons/ExportSvg";

export const LandingPageNavigations = [
    {
        name: 'Explore',
        path: '/dashboard',
        icon: <Explore />,
        type: 'main-nav',
    },
    {
        name: 'Blogs',
        path: '/kitchen',
        icon: <Blog />,
        type: 'main-nav',
    },
    {
        name: 'News',
        path: '/delivery-zone',
        icon: <Mobile />,
        type: 'main-nav',
    },
    {
        name: 'Mobile',
        path: '/customers',
        icon: <News />,
        type: 'main-nav',
    },
    {
        name: 'Become a Member',
        path: '/delivery-vehicle',
        icon: <BecomeAMember />,
        type: 'main-nav',
    },
]