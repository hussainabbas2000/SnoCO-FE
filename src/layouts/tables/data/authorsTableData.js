/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/small-logos/logo-asana.svg";


//React
import { useState } from "react";
import axios from "axios";



export default function Data() {

  const [reports, setReports] = useState([]);

  //fetch reports
  const fetchData = async () => {
    try{
      const res = await axios.get("http://localhost:4000/api/report/getallreports");
      setReports(res.data)
    } catch (err) {
      console.log(err);
    }
  }
  
  fetchData();






  const Report = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );



  // const Job = ({ title, description }) => (
  //   <MDBox lineHeight={1} textAlign="left">
  //     <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
  //       {title}
  //     </MDTypography>
  //     <MDTypography variant="caption">{description}</MDTypography>
  //   </MDBox>
  // );

  return {
    columns: [
      { Header: "Report Name", accessor: "report", width: "45%", align: "left" },
      { Header: "Description", accessor: "description", align: "center" },
      { Header: "Created On", accessor: "created_on", align: "center" },
      { Header: "Keywords", accessor: "keywords", align: "center" },
      { Header: "URL", accessor: "url", align: "center" },
      { Header: "Department", accessor: "department", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: reports.map(report => ({
      report: <Report image={team2} name={report.report_name}/>,
      description: (
        <MDTypography component="label" variant="caption" color="text" fontWeight="medium">
          {report.description}
        </MDTypography>
      ),
      employed: (
        <MDTypography component="label" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      url: (
        <MDTypography component="a" href= {report.url} variant="caption" color="text" fontWeight="medium">
          {report.url}
        </MDTypography>
      ),
      created_on: (
        <MDTypography component="label" variant="caption" color="text" fontWeight="medium">
          {report.created_date}
        </MDTypography>
      ),
      keywords: (
        <MDBox display= "flex" flexWrap = "wrap">
            {report.keywords && report.keywords.map((keyword) => {
                return (
                      <MDBox ml={0}>
                        <MDBadge badgeContent={keyword} color="success" variant="gradient" size="sm" />
                      </MDBox>
                )
              })}
          </MDBox>
      ),
      department: (
        <MDTypography component="label" variant="caption" color="text" fontWeight="medium">
          {report.department_id}
        </MDTypography>
      ),
      action: (
        <MDTypography component="a" href="#"  variant="caption" color="text" fontWeight="medium">
          Edit
        </MDTypography>
      )
    }))

    // [
      
    //   {
    //     author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
    //     function: <Job title="Programator" description="Developer" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     employed: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         11/01/19
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Edit
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
    //     function: <Job title="Executive" description="Projects" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     employed: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         19/09/17
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Edit
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
    //     function: <Job title="Programator" description="Developer" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     employed: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         24/12/08
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Edit
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     author: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
    //     function: <Job title="Manager" description="Executive" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     employed: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         04/10/21
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Edit
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
    //     function: <Job title="Programator" description="Developer" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     employed: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         14/09/20
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Edit
    //       </MDTypography>
    //     ),
    //   },
    // ],
  };
}
