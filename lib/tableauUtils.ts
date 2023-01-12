export function imageUrlFromDashboardUrl(dashboardUrl: string) {
  // the structure of a tableau public url is basepath/app/profile/<authorname>/viz/<workbookname>/<viewname>
  // we want to extract the workbookname and viewname
  const url = new URL(dashboardUrl)
  const workbookName = url.pathname.split('/')[5]
  const viewName = url.pathname.split('/')[6]
  //                               https://public.tableau.com/app/profile/zsofia.nika/viz/Whichcountrygetsthemostpaidvacationdays_16711136524000/Vacation

  // example tableau public url is https://public.tableau.com/app/profile/julia.borsi/viz/VisitVincent/VisitVincent
  // example fullImageUrl is       https://public.tableau.com/static/images/Vi/VisitVincent/VisitVincent/1.png
  const fullImageUrl = `https://public.tableau.com/static/images/${workbookName.slice(
    0,
    2
  )}/${workbookName}/${viewName}/1.png`
  return fullImageUrl
}
