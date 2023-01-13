
import Tableau from "components/tableau/Tableau";
import { Suspense } from "react";

export default function TestPAge() {
    return <div className=''>
        <Suspense>
            {/* @ts-expect-error Server Component */}
            <Tableau url='https://public.tableau.com/app/profile/zsofia.nika/viz/Whichcountrygetsthemostpaidvacationdays_16711136524000/Vacation' alt='this is an alt' />
        </Suspense>
    </div>

}