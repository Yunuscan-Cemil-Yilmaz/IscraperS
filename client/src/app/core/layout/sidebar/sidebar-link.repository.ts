interface SidebarSingleLink {
    linkType: "single";
    linkText: string;
    linkUrl: string;
    linkIcon?: string;
    isActive?: boolean;
}

export interface SidebarMenuLink {
    linkType: "menu";
    menuTitle: string;
    menuIcon: string;
    isActive?: boolean;
    subLinks: SidebarMenuSubLink[];
}

interface SidebarMenuSubLink {
    linkText: string;
    linkUrl: string;
}

type SidebarLink = SidebarSingleLink | SidebarMenuLink;

export const SidebarLinksRepository: SidebarLink[] = [
    {
        linkType: "single",
        linkText: "Dashboard",
        linkUrl: "/dashboard",
        linkIcon: "fa-solid fa-gauge" // Dashboard ikonu
    },
    {
        linkType: "single",
        linkText: "Profile",
        linkUrl: "/profile",
        linkIcon: "fa-regular fa-user" // Kullanıcı profili
    },
    {
        linkType: "menu",
        menuTitle: "Settings",
        menuIcon: "fa-solid fa-gear", // Ayarlar
        subLinks: [
            { linkText: "Account", linkUrl: "/settings/account" },
            { linkText: "Security", linkUrl: "/settings/security" },
            { linkText: "Notifications", linkUrl: "/settings/notifications" }
        ]
    },
    {
        linkType: "menu",
        menuTitle: "Management",
        menuIcon: "fa-solid fa-briefcase", // Yönetim ikonu
        subLinks: [
            { linkText: "Users", linkUrl: "/management/users" },
            { linkText: "Roles", linkUrl: "/management/roles" },
            { linkText: "Permissions", linkUrl: "/management/permissions" },
            { linkText: "menu", linkUrl: "/" }
        ]
    },
    {
        linkType: "single",
        linkText: "Help",
        linkUrl: "/help",
        linkIcon: "fa-regular fa-circle-question" // Yardım ikonu
    }
];