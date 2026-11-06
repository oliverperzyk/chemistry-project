"use client"

import { useState, type JSX } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon, XIcon } from "lucide-react"
import LogoComponent from "@/oliverperzyk/components/LogoComponent"
import { Button } from "@/oliverperzyk/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/oliverperzyk/components/ui/navigation-menu"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/oliverperzyk/components/ui/sheet"
import { cn } from "@/oliverperzyk/lib/utils"
import { NavigationLinks } from "@/oliverperzyk/lib/globals/NavigationLinks"
import type { INavigationDestination } from "@/oliverperzyk/lib/models/components/layout/navigation/interfaces/INavigationDestination"

/**
 * @summary Responsive navigation bar of the infographic.
 * @description Displays grouped desktop links & an accessible mobile menu with the current page highlighted.
 */
function NavigationBarComponent(): JSX.Element {
    const pathname = usePathname()
    const [menuPath, setMenuPath] = useState<string | null>(null)
    const mobileOpen = menuPath === pathname

    if (menuPath !== null && menuPath !== pathname) {
        setMenuPath(null)
    }

    const mobileLink = (item: INavigationDestination): JSX.Element => (
        <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={() => setMenuPath(null)}
            className={cn(
                "block rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                pathname === item.href && "bg-muted text-foreground",
            )}>
            {item.label}
        </Link>
    )

    return (
        <header className="bg-background">
            <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
                <Link
                    href={NavigationLinks.NAVIGATION.home.href}
                    aria-current={pathname === "/" ? "page" : undefined}
                    className="shrink-0 rounded-md text-lg font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                    <LogoComponent />
                </Link>
                <NavigationMenu className="hidden lg:flex" aria-label="Nawigacja główna">
                    <NavigationMenuList className="gap-1">
                        {NavigationLinks.NAVIGATION.entries.map((entry) => (
                            <NavigationMenuItem key={entry.label}>
                                {"items" in entry ? (
                                    <>
                                        <NavigationMenuTrigger
                                            className={cn(
                                                entry.items.some((item) => item.href === pathname) && "bg-muted",
                                            )}>
                                            {entry.label}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-80 gap-1 p-2">
                                                {entry.items.map((item) => (
                                                    <li key={item.href}>
                                                        <NavigationMenuLink
                                                            render={<Link href={item.href} />}
                                                            active={pathname === item.href}
                                                            aria-current={pathname === item.href ? "page" : undefined}
                                                            className="flex-col items-start gap-1 p-3">
                                                            <span className="font-medium">{item.label}</span>
                                                            <span className="text-sm leading-relaxed text-muted-foreground">
                                                                {item.description}
                                                            </span>
                                                        </NavigationMenuLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <NavigationMenuLink
                                        render={<Link href={entry.href} />}
                                        active={pathname === entry.href}
                                        aria-current={pathname === entry.href ? "page" : undefined}
                                        className={navigationMenuTriggerStyle()}>
                                        {entry.label}
                                    </NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
                <Sheet open={mobileOpen} onOpenChange={(open) => setMenuPath(open ? pathname : null)}>
                    <SheetTrigger
                        render={<Button variant="ghost" className="size-11 lg:hidden" aria-label="Otwórz menu" />}>
                        <MenuIcon className="size-5" aria-hidden="true" />
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        showCloseButton={false}
                        overlayClassName="lg:hidden"
                        className="w-[min(90vw,24rem)] overflow-y-auto border-border lg:hidden">
                        <SheetHeader className="gap-3">
                            <div className="flex items-center justify-between gap-3">
                                <SheetTitle>
                                    <LogoComponent />
                                </SheetTitle>
                                <SheetClose
                                    render={
                                        <Button
                                            variant="ghost"
                                            className="size-11 shrink-0 cursor-pointer"
                                            aria-label="Zamknij menu"
                                        />
                                    }>
                                    <XIcon className="size-5" aria-hidden="true" />
                                </SheetClose>
                            </div>
                            <SheetDescription>Poznaj oktany, paliwa i zasady wyboru benzyny.</SheetDescription>
                        </SheetHeader>
                        <nav aria-label="Nawigacja mobilna" className="flex flex-col gap-4 px-4 pb-6">
                            {mobileLink(NavigationLinks.NAVIGATION.home)}
                            {NavigationLinks.NAVIGATION.entries.map((entry) =>
                                "items" in entry ? (
                                    <div key={entry.label}>
                                        <h2 className="mb-1 px-3 text-xs font-medium tracking-wide text-muted-foreground">
                                            {entry.label}
                                        </h2>
                                        {entry.items.map(mobileLink)}
                                    </div>
                                ) : (
                                    mobileLink(entry)
                                ),
                            )}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default NavigationBarComponent
