import { Nav, PromptCard, ImageCard, IntroCard, SummaryCard } from "../components"

const Profile = ({ user }) => {
  return (
    <>
      <Nav user={user} />
      <div className="h-full w-full flex justify-center items-center flex-col gap-4 fixed">
        <div className="overflow-scroll flex flex-col gap-4 mt-4 scrollbar-hide mb-20">
          <IntroCard name={user?.vitals?.first_name} />
          <ImageCard image={user?.images[0]} />
          <SummaryCard 
            age={user?.vitals?.age}
            location={user?.location}
            drinks={user?.vices?.drinking}
            drugs={user?.vices?.drugs}
            school={user?.virtues?.school}
            work={user?.virtues?.work}
            job_title={user?.virtues?.job_title}
            hometown={user?.virtues?.hometown}
          />
          <PromptCard
            prompt={user?.prompts?.prompt_1}
            answer={user?.prompts?.answer_1}
          />
          <ImageCard image={user?.images[1]} />
          <ImageCard image={user?.images[2]} />
          <PromptCard
            prompt={user?.prompts?.prompt_2}
            answer={user?.prompts?.answer_2}
          />
          <PromptCard
            prompt={user?.prompts?.prompt_3}
            answer={user?.prompts?.answer_3}
          />
          <ImageCard image={user?.images[3]} />
        </div>
      </div>
    </>
  )
}

export default Profile
