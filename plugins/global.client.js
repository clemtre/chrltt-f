export default function (context) {
  document.documentElement.style.setProperty(
    "--principale",
    context.store.state.Style.couleur_principale
  )
  document.documentElement.style.setProperty(
    "--secondaire",
    context.store.state.Style.couleur_secondaire
  )
  document.documentElement.style.setProperty(
    "--interaction",
    context.store.state.Style.couleur_interaction
  )
  document.documentElement.style.setProperty(
    `--taglen`,
    context.store.state.Tags.length + "px"
  )
let incr = 1
  for (const tag of context.store.state.Tags) {
    console.log(tag.couleur)
    document.documentElement.style.setProperty(`--tag${incr}`, tag.couleur)
    incr ++
  }
}
