import { Tab } from '@headlessui/react'
import {
  PortableText,
  PortableTextTypeComponentProps,
} from '@portabletext/react'
import { vcColors } from 'tailwind.config'

import type { Tabs as TabsType } from '@/lib/sanity.queries'

import { componentToBlockMappingWithoutTabs } from './componentToBlockMapping'

interface TabsValue extends TabsType {
  _type?: 'tabs'
}

type Props = PortableTextTypeComponentProps<TabsValue>

export default function Tabs(props: Props) {
  const { tabs } = props.value

  return (
    <Tab.Group>
      <Tab.List className="-mb-0">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={`relative -mr-0.5 px-4 py-2 bg-${vcColors[index].name} border-x-2 border-t-2 border-black bg-opacity-20 tracking-normal aria-selected:bg-opacity-50 aria-selected:font-bold aria-selected:tracking-tight`}
          >
            {tab.title}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="">
        {tabs.map((tab, index) => {
          return (
            <Tab.Panel
              key={index}
              className={`bg-${vcColors[index].name} border-2 border-black bg-opacity-20 px-6 pt-0 pb-6`}
            >
              <PortableText
                value={tab.content}
                // @ts-expect-error PullQuote typing is difficult
                components={componentToBlockMappingWithoutTabs}
              />
            </Tab.Panel>
          )
        })}
      </Tab.Panels>
    </Tab.Group>
  )
}
