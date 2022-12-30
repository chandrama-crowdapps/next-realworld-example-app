import React from 'react'
import AdminFooter from '../components/pannel/AdminFooter'
import AdminHeader from '../components/pannel/AdminHeader'
import DashboardCard from '../components/pannel/DashboardCard'

export default function Dashboard() {
  return (
    <section>
        <AdminHeader/>
        <DashboardCard/>
        {/* <AdminFooter/> */}
    </section>
  )
}
