import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function TabPane({ description }) {
  const data = [
    {
      label: "Instructions",
      value: "html",
      desc: description.join("\n"),
    },
    {
      label: "Review",
      value: "svelte",
      desc: `
    
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum enim itaque est excepturi necessitatibus expedita numquam, culpa facilis error molestiae illo porro unde sed blanditiis accusantium repudiandae quisquam corrupti id! 
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum enim itaque est excepturi necessitatibus expedita numquam, culpa facilis error molestiae illo porro unde sed blanditiis accusantium repudiandae quisquam corrupti id!
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum enim itaque est excepturi necessitatibus expedita numquam, culpa facilis error molestiae illo porro unde sed blanditiis accusantium repudiandae quisquam corrupti id!
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum enim itaque est excepturi necessitatibus expedita numquam, culpa facilis error molestiae illo porro unde sed blanditiis accusantium repudiandae quisquam corrupti id!
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum enim itaque est excepturi necessitatibus expedita numquam, culpa facilis error molestiae illo porro unde sed blanditiis accusantium repudiandae quisquam corrupti id!`,
    },
  ];

  return (
    <Tabs
      value="html"
      className="w-full bg-gray-500 rounded-xl border-4 border-gray-500"
    >
      <TabsHeader className="md:w-2/4 mb-1">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="w-full container">
        {data.map(({ value, desc }) => (
          <TabPanel
            key={value}
            value={value}
            className="text-pretty bg-white h-[12rem] overflow-x-scroll indent-10"
          >
            {desc.split("\n").map((line, index) => (
              <div key={index} className="py-1">
                {line}
              </div>
            ))}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
