const tinytime = require('tinytime')
const template = tinytime('{MMMM} {DD}, {YYYY}', { padDays: true })

function renderIntro({ number, story }) {
  return `
<mj-section>
  <mj-column>
    <mj-text font-size="20px">
      Best of JS Weekly #${number} (${template.render(new Date())})
    </mj-text>
    <mj-text line-height="18px">
    Every week, you will find here the trendiest projects from <a href="https://bestofjs.org">Best of JS</a>, a curated
    list of projects related to the web platform and Node.js.
    </mj-text>
    <mj-button href="https://weekly.bestofjs.org/issues/${number}" background-color="#e65100">View the full rankings on the web</mj-button>
    <mj-text padding="0 25px" line-height="18px">
      ${story}
    </mj-text>
  </mj-column>
</mj-section>
  `
}

module.exports = renderIntro
