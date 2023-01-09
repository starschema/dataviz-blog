import AboutListItem from 'components/AboutListItem'
import AuthorBio from 'components/AuthorBio'
import { getAuthors } from 'lib/sanity.client'
import Image from 'next/image'

import AdaptabilityIcon from '../../../public/images/decoration/adaptability-icon.svg'
import ArtisticApproachIcon from '../../../public/images/decoration/artistic-approach-icon.svg'
import CollectiveThinkingIcon from '../../../public/images/decoration/collective-thinking-icon.svg'
import CreativeChallengesIcon from '../../../public/images/decoration/creative-challenges-icon.svg'
import DataVizBestPracticesIcon from '../../../public/images/decoration/dataviz-best-practices-icon.svg'
import FunctionalSystemsIcon from '../../../public/images/decoration/functional-systems-icon.svg'
import SupportiveAtmosphereIcon from '../../../public/images/decoration/supportive-atmosphere-icon.svg'

export default async function About() {
  const authors = await getAuthors()
  const listItemClasses =
    'flex items-center gap-10 border-b border-gray-200 py-10'
  return (
    <main className="container my-10 min-h-screen px-4 text-xl">
      <p className="mb-10 font-bold">
        We are a team of data viz professionals with multidisciplinary <br /> &
        diverse backgrounds in business, applied mathematics, software
        development, social sciences and design.
      </p>
      <p className="mb-10">
        Combining our vast experience, we design & develop business intelligence
        dashboards for Fortune 500 companies.
      </p>
      <p className="mb-10">
        Our approach is grounded in applying the best data viz practices to our
        clients&apos problems, in order to build functional systems that meet
        their business needs.
      </p>
      <h2 className="mb-8 text-3xl font-bold">Our Process</h2>
      <ul className="px-4 text-2xl">
        <li className="mb-16 h-20 bg-process-decoration-green bg-no-repeat px-14 ">
          UX Research
        </li>
        <li className="mb-16 h-20 bg-process-decoration-orange bg-no-repeat px-14">
          UI Design
        </li>
        <li className="mb-16 h-20 bg-process-decoration-blue bg-no-repeat px-14">
          Development
        </li>
      </ul>
      <h2 className="my-8 text-3xl font-bold">Our Values</h2>
      <ul className="px-4 text-2xl">
        <AboutListItem
          image={DataVizBestPracticesIcon}
          text={`Data Viz\nBest Practices`}
          textFirst={false}
        />
        <AboutListItem
          image={CreativeChallengesIcon}
          text={`Creative\nChallenges`}
          textFirst={false}
        />
        <AboutListItem
          image={FunctionalSystemsIcon}
          text={`Functional\nSystems`}
          textFirst={false}
        />
      </ul>
      <h2 className="my-8 mt-16 text-3xl font-bold">Our Culture</h2>
      <ul className="px-4 text-2xl">
        <AboutListItem
          image={SupportiveAtmosphereIcon}
          text={`Supportive\nAtmosphere`}
          textFirst={true}
        />
        <AboutListItem
          image={AdaptabilityIcon}
          text={`Adaptability`}
          textFirst={true}
        />
        <AboutListItem
          image={CollectiveThinkingIcon}
          text={`Collective\nThinking`}
          textFirst={true}
        />
        <AboutListItem
          image={ArtisticApproachIcon}
          text={`Artistic\nApproach`}
          textFirst={true}
        />
      </ul>
      <h2 className="my-8 text-3xl font-bold">Our Team</h2>
      {authors.map((a) => (
        <AuthorBio name={a.name} bio={a.bio} key={a.name} />
      ))}
    </main>
  )
}
