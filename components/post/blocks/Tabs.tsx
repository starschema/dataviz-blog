import { Tab } from '@headlessui/react'
import {
  PortableText,
  PortableTextTypeComponentProps,
} from '@portabletext/react'

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
      <Tab.List className="relative border-b-4 border-vc-lightblue">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={`relative rounded-t-md border-neutral-200 bg-neutral-200 px-2 py-1 aria-selected:-mb-2 aria-selected:border-4 aria-selected:border-vc-lightblue aria-selected:border-b-white aria-selected:bg-white`}
          >
            {tab.title}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="rounded-b-md border-x-4 border-b-4 border-vc-lightblue p-2">
        {tabs.map((tab, index) => {
          return (
            <Tab.Panel key={index}>
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
