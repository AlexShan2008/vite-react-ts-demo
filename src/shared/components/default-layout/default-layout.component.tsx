import { ReactNode, PropsWithChildren } from "react";
import { Header } from "@components/header/header.component";

export default function DefaultLayout({
  children,
}: PropsWithChildren<ReactNode>) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
