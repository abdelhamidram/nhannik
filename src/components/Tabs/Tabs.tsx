import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TabsProps = {
    defaultV: string;
    titles: string[]; 
    values: string[]; 
    descriptions: string[];
}&{className?:string};

export default function TabsC(props: TabsProps) {
  return (
    <>
      <Tabs defaultValue={props.defaultV} className={props.className}>
        <TabsList>
          {...props.titles.map((tabTitle, index) => (
            <TabsTrigger key={index} value={props.values[index]}>
              {tabTitle}
            </TabsTrigger>
          ))}
        </TabsList>
        {...props.descriptions.map((desc, index) => (
          <TabsContent key={index} value={props.values[index]}>
              {desc}
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
