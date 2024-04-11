"use client";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Separator } from "@radix-ui/react-menubar";
import { usePathname } from "next/navigation"
import path from "path";
import Link from "next/link";
import { Fragment } from "react";
  

export default function BreadCrumb() {
 const paths:string = usePathname();
 const pathNames: string[] = paths.split('/').filter(path => path)
return (
        <Breadcrumb className="mx-8">
          <BreadcrumbList>
           <BreadcrumbItem>
             <BreadcrumbLink asChild>
              <Link href='/'>Home</Link>
             </BreadcrumbLink>
           </BreadcrumbItem>
            {pathNames.length > 0 && <BreadcrumbSeparator />}
            {
                pathNames.map((link , index ) => {
                    const href:string = `/${pathNames.slice(0, index + 1).join( '/')}`;
                    const linkName: string = link[0].toUpperCase() +link.slice(1, link.length);
                    const isLastPath: boolean = pathNames.length === index + 1;
                    return (
                    <Fragment key={index}>
                        <BreadcrumbItem>
                          {!isLastPath ? 
                            <BreadcrumbLink asChild>
                             <Link href={href}>{linkName}</Link>
                            </BreadcrumbLink>:
                            <BreadcrumbPage>{linkName}</BreadcrumbPage>
                            }
                        </BreadcrumbItem>
                        {pathNames.length !== index + 1 && <BreadcrumbSeparator />}
                    </Fragment>)
                })
            }
          </BreadcrumbList>
        </Breadcrumb>
)
}
