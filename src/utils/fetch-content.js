import fetchAndPopulate from './fetch-and-populate'
import { fetchStories } from './stories'

export default async function fetchContent() {
  const rankings = await fetchAndPopulate()
  const stories = await fetchStories()

  const findStory = number => {
    const story = stories.find(story => story.number === number)
    return story ? story.contents : ''
  }

  return rankings.map(report => ({
    ...report,
    story: findStory(report.number)
  }))
}
