import { isRecord } from 'sanity'

export function imageUrlFromDashboardUrl(dashboardUrl: string) {
  // the structure of a tableau public url is basepath/app/profile/<authorname>/viz/<workbookname>/<viewname>
  // we want to extract the workbookname and viewname
  let url: URL
  try {
    url = new URL(dashboardUrl)
  } catch (error) {
    return 'https://public.tableau.com'
  }
  // example tableau public url is https://public.tableau.com/app/profile/julia.borsi/viz/VisitVincent/VisitVincent
  // example fullImageUrl is       https://public.tableau.com/static/images/Vi/VisitVincent/VisitVincent/1.png
  const workbookName = url.pathname.split('/')[5]
  const viewName = url.pathname.split('/')[6]
  const fullImageUrl = `https://public.tableau.com/static/images/${workbookName.slice(
    0,
    2
  )}/${workbookName}/${viewName}/1.png`
  return fullImageUrl
}
