import HeroSec from "@/components/HeroSec";
import Content from "@/components/Content";
import TabsC from "@/components/Tabs/Tabs";
import Notification from "@/components/Notification/Notification";


export default function Home() {
  return (
    <>
      {/* <HeroSec />
      <Content />
       */}
      <Notification type="Information" title="Title" message="Message" size="sm" action={false}/> 
      <Notification type="Information" title="Title" message="Message" size="md" action={true}/> 
      <Notification type="Information" title="Title" message="Message" size="lg" action={false}/> 
      {/* Success */}
      <Notification type="Success" title="Title" message="Message" size="sm" action={true}/> 
      <Notification type="Success" title="Title" message="Message" size="md" action={true}/> 
      <Notification type="Success" title="Title" message="Message" size="lg" action={true}/> 
      {/* Warning */}
      <Notification type="Warning" title="Title" message="Message" size="sm" action={true}/> 
      <Notification type="Warning" title="Title" message="Message" size="md" action={true}/> 
      <Notification type="Warning" title="Title" message="Message" size="lg" action={true}/> 
      {/* Error */}
      <Notification type="Error" title="Title" message="Message" size="sm" action={true}/> 
      <Notification type="Error" title="Title" message="Message" size="md" action={true}/> 
      <Notification type="Error" title="Title" message="Message" size="lg" action={false}/> 
      
    </>
  );
}

