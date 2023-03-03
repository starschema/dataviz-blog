import { GetStaticProps } from 'next'

import AboutListItem from '@/components/about/AboutListItem'
import IndexPageHead from '@/components/home/IndexPageHead'
import Container from '@/components/layout/BlogContainer'
import AuthorBio from '@/components/shared/AuthorBio'
import SectionSeparator from '@/components/shared/SectionSeparator'
import { useIsMobile } from '@/lib/hooks'
import { getAuthors } from '@/lib/sanity.client'
import AdaptabilityIcon from '@/public/images/decoration/adaptability-icon.svg'
import ArtisticApproachIcon from '@/public/images/decoration/artistic-approach-icon.svg'
import CollectiveThinkingIcon from '@/public/images/decoration/collective-thinking-icon.svg'
import CreativeChallengesIcon from '@/public/images/decoration/creative-challenges-icon.svg'
import DataVizBestPracticesIcon from '@/public/images/decoration/dataviz-best-practices-icon.svg'
import FunctionalSystemsIcon from '@/public/images/decoration/functional-systems-icon.svg'
import SupportiveAtmosphereIcon from '@/public/images/decoration/supportive-atmosphere-icon.svg'

export default function About(props) {
  const { authors } = props
  const processListItemClasses = 'mb-16 h-20 bg-no-repeat px-14 w-[250px]'
  const isMobile = useIsMobile()

  return (
    <>
      <IndexPageHead />
      <Container>
        <section className="mt-10 text-xl lg:grid lg:h-[500px] lg:grid-cols-12 lg:gap-6 lg:pt-40">
          <p className="mb-10 font-bold lg:col-span-5 lg:text-2xl">
            We are a team of data viz professionals with multidisciplinary &
            diverse backgrounds in business, applied mathematics, software
            development, social sciences and design.
          </p>
          <div className="lg:col-span-5 lg:col-start-7">
            <p className="mb-10">
              Combining our vast experience, we design & develop business
              intelligence dashboards for Fortune 500 companies.
            </p>
            <p className="mb-10">
              Our approach is grounded in applying the best data viz practices
              to our clients&apos; problems, in order to build functional
              systems that meet their business needs.
            </p>
          </div>
        </section>
        <SectionSeparator />
        <section>
          <h2 className="my-8 text-3xl font-bold">Our Process</h2>
          <ul className="flex flex-col items-center justify-evenly px-4 text-2xl lg:flex-row lg:py-10">
            <li
              className={`${processListItemClasses} bg-process-decoration-green`}
            >
              UX Research
            </li>
            <li
              className={`${processListItemClasses} bg-process-decoration-orange`}
            >
              UI Design
            </li>
            <li
              className={`${processListItemClasses} bg-process-decoration-blue`}
            >
              Development
            </li>
          </ul>
        </section>
        <SectionSeparator />
        <section>
          <h2 className="my-8 text-3xl font-bold">Our Values</h2>
          <ul className=" flex flex-col items-center justify-evenly text-2xl lg:flex-row">
            <AboutListItem text={`Data Viz\nBest Practices`} textFirst={false}>
              <DataVizBestPracticesIcon />
            </AboutListItem>
            <AboutListItem text={`Creative\nChallenges`} textFirst={false}>
              <CreativeChallengesIcon />
            </AboutListItem>
            <AboutListItem text={`Functional\nSystems`} textFirst={false}>
              <FunctionalSystemsIcon />{' '}
            </AboutListItem>
          </ul>
        </section>
        <SectionSeparator />
        <section>
          <h2 className="my-8 text-3xl font-bold">Our Culture</h2>
          <ul className="flex flex-col items-center justify-evenly text-2xl lg:flex-row">
            <AboutListItem text={`Supportive\nAtmosphere`} textFirst={true}>
              <SupportiveAtmosphereIcon />
            </AboutListItem>
            <AboutListItem text={`Adaptability`} textFirst={true}>
              <AdaptabilityIcon />
            </AboutListItem>
            <AboutListItem text={`Collective\nThinking`} textFirst={true}>
              <CollectiveThinkingIcon />
            </AboutListItem>
            <AboutListItem text={`Artistic\nApproach`} textFirst={true}>
              <ArtisticApproachIcon />
            </AboutListItem>
          </ul>
        </section>
        <SectionSeparator />
        <section>
          <h2 className="my-8 text-3xl font-bold">Our Team</h2>
          <ul className="flex flex-col gap-4">
            {authors.map((a) => (
              <AuthorBio
                name={a.name}
                bio={a.bio}
                key={a.name}
                isFixedOpen={!isMobile}
              />
            ))}
          </ul>
        </section>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const authors = await getAuthors()
  return {
    props: {
      authors,
    },
  }
}
