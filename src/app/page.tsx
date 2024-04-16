import HeroSec from "@/components/HeroSec";
import Content from "@/components/Content";
import TabsC from "@/components/Tabs/Tabs";

export default function Home() {
  return (
    <>
      {/* <HeroSec />
      <Content />
       */}
      <TabsC
        defaultV="account"
        values={["account", "settings", "profile"]}
        titles={["Account", "Settings", "Profile"]}
        descriptions={["Account description", "Settings description", "Profile description"]}  
        className="m-5 w-[400px]"  
        /> 
    </>
  );
}

