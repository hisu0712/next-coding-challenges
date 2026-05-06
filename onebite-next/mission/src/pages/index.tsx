import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";

export default function Home() {
  return <>aa</>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
