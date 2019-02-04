export const format = title => (
  `projects/${title.trim().replace(/ /g, '-').toLowerCase()}`
)
